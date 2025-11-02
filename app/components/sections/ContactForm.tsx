"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/app/components/ui/Button";
import { Input } from "@/app/components/ui/Input";
import { Textarea } from "@/app/components/ui/Textarea";
import { FiSend, FiCheckCircle } from "react-icons/fi";

const contactSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(10, "Telefone inválido"),
  subject: z.string().optional(),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Erro ao enviar mensagem");
      }

      setIsSubmitted(true);
      reset();
      
      // Resetar mensagem de sucesso após 5 segundos
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      alert(
        error instanceof Error 
          ? error.message 
          : "Erro ao enviar formulário. Tente novamente ou entre em contato via WhatsApp."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <FiCheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">
          Mensagem Enviada!
        </h3>
        <p className="text-gray-600">
          Obrigado pelo contato. Responderemos em breve!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Nome Completo *"
          {...register("name")}
          error={errors.name?.message}
          placeholder="Seu nome"
        />
        <Input
          label="Email *"
          type="email"
          {...register("email")}
          error={errors.email?.message}
          placeholder="seu@email.com"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Telefone *"
          type="tel"
          {...register("phone")}
          error={errors.phone?.message}
          placeholder="(11) 99999-9999"
        />
        <Input
          label="Assunto"
          {...register("subject")}
          error={errors.subject?.message}
          placeholder="Assunto da mensagem (opcional)"
        />
      </div>

      <Textarea
        label="Mensagem *"
        {...register("message")}
        error={errors.message?.message}
        placeholder="Como posso ajudar você?"
        rows={6}
      />

      <Button
        type="submit"
        size="lg"
        variant="primary"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          "Enviando..."
        ) : (
          <>
            <FiSend className="mr-2" />
            Enviar Mensagem
          </>
        )}
      </Button>
    </form>
  );
}

