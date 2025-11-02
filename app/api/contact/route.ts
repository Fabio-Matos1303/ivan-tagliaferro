import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { siteConfig } from "@/app/lib/constants";

// Schema de validação
const contactSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(10, "Telefone inválido"),
  subject: z.string().optional(),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

// Função para obter instância do Resend
function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY não configurada");
  }
  return new Resend(apiKey);
}

export async function POST(request: NextRequest) {
  try {
    // Parse e validação dos dados
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    // Preparar o email
    const emailTo = process.env.CONTACT_EMAIL || siteConfig.email;
    const subject = validatedData.subject 
      ? `Contato do Site: ${validatedData.subject}`
      : "Nova mensagem do formulário de contato";

    // Obter instância do Resend e enviar email
    const resend = getResend();
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev", // Use seu domínio verificado
      to: emailTo,
      replyTo: validatedData.email,
      subject: subject,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; border-top: none; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #1e40af; }
              .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; }
              .footer { text-align: center; margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Nova Mensagem do Site</h1>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Nome:</div>
                  <div class="value">${validatedData.name}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value">${validatedData.email}</div>
                </div>
                <div class="field">
                  <div class="label">Telefone:</div>
                  <div class="value">${validatedData.phone}</div>
                </div>
                ${validatedData.subject ? `
                <div class="field">
                  <div class="label">Assunto:</div>
                  <div class="value">${validatedData.subject}</div>
                </div>
                ` : ''}
                <div class="field">
                  <div class="label">Mensagem:</div>
                  <div class="value">${validatedData.message.replace(/\n/g, '<br>')}</div>
                </div>
              </div>
              <div class="footer">
                <p>Esta mensagem foi enviada através do formulário de contato do site.</p>
                <p>Para responder, clique em "Responder" no seu cliente de email.</p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
Nova mensagem do formulário de contato:

Nome: ${validatedData.name}
Email: ${validatedData.email}
Telefone: ${validatedData.phone}
${validatedData.subject ? `Assunto: ${validatedData.subject}\n` : ''}

Mensagem:
${validatedData.message}
      `.trim(),
    });

    if (error) {
      console.error("Erro ao enviar email:", error);
      return NextResponse.json(
        { error: "Erro ao enviar email. Tente novamente mais tarde." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: "Mensagem enviada com sucesso!",
        id: data?.id 
      },
      { status: 200 }
    );
  } catch (error) {
    // Erro de validação
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Dados inválidos", details: error.issues },
        { status: 400 }
      );
    }

    // Outros erros
    console.error("Erro no servidor:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor. Tente novamente mais tarde." },
      { status: 500 }
    );
  }
}

