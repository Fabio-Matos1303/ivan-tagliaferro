# 📧 Configuração de Envio de Email

Este guia explica como configurar o envio de emails do formulário de contato.

## 🎯 Opção Recomendada: Resend

**Resend** é um serviço moderno de envio de emails, fácil de configurar e com plano gratuito generoso.

### Passo 1: Criar conta no Resend

1. Acesse [https://resend.com](https://resend.com)
2. Crie uma conta gratuita
3. Vá em **API Keys** e crie uma nova chave
4. Copie a chave API (formato: `re_xxxxxxxxxxxxxxxxxxxxx`)

### Passo 2: Configurar Variáveis de Ambiente

1. Crie um arquivo `.env.local` na raiz do projeto:

```bash
cp .env.example .env.local
```

2. Edite o arquivo `.env.local` e preencha:

```env
RESEND_API_KEY=re_sua_chave_aqui
CONTACT_EMAIL=contato@ivantagliaferro.com.br
RESEND_FROM_EMAIL=onboarding@resend.dev
```

**Importante:**
- Use `onboarding@resend.dev` para testes (já funciona sem verificação)
- Para produção, verifique seu domínio no Resend e use um email do seu domínio
- O `CONTACT_EMAIL` é onde você receberá as mensagens do formulário

### Passo 3: Verificar Domínio (Para Produção)

1. No painel do Resend, vá em **Domains**
2. Adicione seu domínio (ex: `ivantagliaferro.com.br`)
3. Configure os registros DNS conforme instruções
4. Aguarde a verificação
5. Use um email do domínio verificado no `RESEND_FROM_EMAIL`

### Passo 4: Testar

1. Execute o projeto: `npm run dev`
2. Acesse a página de contato
3. Preencha e envie o formulário
4. Verifique seu email

---

## 🔄 Opção Alternativa: Nodemailer (SMTP)

Se preferir usar um serviço SMTP tradicional (Gmail, Outlook, etc.), siga os passos abaixo.

### Instalação

```bash
npm install nodemailer
npm install @types/nodemailer --save-dev
```

### Configuração com Gmail

1. Ative a verificação em duas etapas na sua conta Google
2. Gere uma senha de app: [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
3. Adicione ao `.env.local`:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=seu@gmail.com
SMTP_PASS=sua_senha_de_app
CONTACT_EMAIL=contato@ivantagliaferro.com.br
```

### Configuração com Outlook

```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=seu@outlook.com
SMTP_PASS=sua_senha
CONTACT_EMAIL=contato@ivantagliaferro.com.br
```

### Criar API Route com Nodemailer

Crie o arquivo `app/api/contact/route.ts` usando Nodemailer (veja exemplo em `app/api/contact/route.nodemailer.example.ts`)

---

## 🛡️ Proteção Contra Spam

### Recomendação: Google reCAPTCHA

Para proteger o formulário contra spam, recomendo adicionar reCAPTCHA:

```bash
npm install react-google-recaptcha
```

1. Registre seu site em [Google reCAPTCHA](https://www.google.com/recaptcha/admin)
2. Adicione as chaves ao `.env.local`:

```env
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=sua_chave_publica
RECAPTCHA_SECRET_KEY=sua_chave_secreta
```

---

## 📋 Checklist de Configuração

- [ ] Criar conta no Resend
- [ ] Obter API Key
- [ ] Criar arquivo `.env.local`
- [ ] Preencher variáveis de ambiente
- [ ] (Opcional) Verificar domínio no Resend
- [ ] Testar envio de email
- [ ] (Opcional) Adicionar reCAPTCHA

---

## 🐛 Troubleshooting

### Erro: "RESEND_API_KEY não configurada"
- Verifique se o arquivo `.env.local` existe
- Verifique se a variável está nomeada corretamente
- Reinicie o servidor de desenvolvimento após criar/editar `.env.local`

### Emails não chegam
- Verifique a pasta de spam
- Confirme que `CONTACT_EMAIL` está correto
- Verifique os logs do Resend no painel
- Teste com `onboarding@resend.dev` primeiro

### Erro ao enviar no servidor
- Verifique se o domínio está verificado (para produção)
- Confirme que a API key está correta
- Verifique os logs do console

---

## 📚 Recursos

- [Documentação Resend](https://resend.com/docs)
- [Plano Gratuito Resend](https://resend.com/pricing) - 3.000 emails/mês grátis
- [Verificação de Domínio](https://resend.com/docs/dashboard/domains/introduction)

---

**Última atualização**: Janeiro 2025

