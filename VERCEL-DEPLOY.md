# Configuração de Deploy na Vercel

## ⚠️ Variáveis de Ambiente Obrigatórias

Para o build funcionar na Vercel, você **DEVE** configurar as seguintes variáveis de ambiente no painel da Vercel:

### Variáveis Obrigatórias (causam erro no build se não configuradas):

1. **NEXT_PUBLIC_SANITY_PROJECT_ID**
   - Seu Project ID do Sanity.io
   - Exemplo: `abc123xyz`

2. **NEXT_PUBLIC_SANITY_DATASET**
   - Dataset do Sanity (geralmente `production` ou `development`)
   - Exemplo: `production`

### Variáveis Opcionais (mas recomendadas):

3. **NEXT_PUBLIC_SANITY_API_VERSION**
   - Versão da API do Sanity (opcional, default: `2025-11-02`)
   - Exemplo: `2025-11-02`

4. **RESEND_API_KEY**
   - API Key do Resend para envio de emails
   - Exemplo: `re_xxxxxxxxxxxxxxxxxxxxx`

5. **CONTACT_EMAIL**
   - Email que receberá as mensagens do formulário
   - Exemplo: `contato@ivantagliaferro.com.br`

6. **RESEND_FROM_EMAIL**
   - Email remetente (deve ser um domínio verificado no Resend)
   - Exemplo: `onboarding@resend.dev` ou `noreply@seudominio.com.br`

## 📋 Como Configurar na Vercel

1. Acesse o painel da Vercel: https://vercel.com/dashboard
2. Selecione seu projeto
3. Vá em **Settings** → **Environment Variables**
4. Adicione cada variável:
   - **Key**: Nome da variável (ex: `NEXT_PUBLIC_SANITY_PROJECT_ID`)
   - **Value**: Valor da variável
   - **Environment**: Selecione `Production`, `Preview` e `Development` conforme necessário
5. Clique em **Save**
6. Faça um novo deploy (ou aguarde o redeploy automático)

## 🔍 Onde Encontrar os Valores

### Sanity.io
1. Acesse https://sanity.io/manage
2. Selecione seu projeto
3. O **Project ID** está visível no dashboard
4. O **Dataset** geralmente é `production` (ou o nome que você definiu)

### Resend
1. Acesse https://resend.com/api-keys
2. Crie uma nova API Key ou use uma existente
3. Para `RESEND_FROM_EMAIL`, use um domínio verificado no Resend

## ✅ Verificação

Após configurar as variáveis, o build deve funcionar corretamente. O erro:
```
Missing environment variable: NEXT_PUBLIC_SANITY_DATASET
```
deve desaparecer.

## 🚨 Importante

- Variáveis que começam com `NEXT_PUBLIC_` são expostas ao cliente (browser)
- Variáveis sem `NEXT_PUBLIC_` são apenas do servidor (mais seguras)
- Nunca commite arquivos `.env.local` no repositório
- Sempre configure as variáveis no painel da Vercel, não em arquivos locais

