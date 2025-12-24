# Configuração de Revalidação de Cache

## Problema Resolvido

Este projeto agora possui duas formas de garantir que novos conteúdos do Sanity CMS apareçam em produção:

1. **Revalidação Automática (ISR)**: A página home é revalidada automaticamente a cada 60 segundos
2. **Revalidação Sob Demanda**: Via webhook do Sanity para atualização imediata quando houver mudanças

## Solução Implementada

### 1. Revalidação Incremental (ISR)

A página `app/page.tsx` agora possui:
```typescript
export const revalidate = 60;
```

Isso significa que a página será revalidada automaticamente a cada 60 segundos, buscando novos slides do Sanity.

### 2. Revalidação Sob Demanda (Webhook)

Foi criada uma rota de API em `app/api/revalidate/route.ts` que permite revalidar o cache imediatamente quando houver mudanças no Sanity.

## Como Configurar o Webhook no Sanity

Para que os slides apareçam imediatamente após serem adicionados (sem esperar 60 segundos):

### Passo 1: Gerar um Token Secreto

1. Gere um token seguro (pode usar um gerador de senhas ou qualquer string aleatória)
2. Exemplo: `sua-chave-secreta-super-segura-12345`

### Passo 2: Configurar no Vercel

1. Acesse o painel da Vercel: https://vercel.com/dashboard
2. Selecione seu projeto
3. Vá em **Settings** → **Environment Variables**
4. Adicione:
   - **Key**: `REVALIDATE_SECRET`
   - **Value**: O token que você gerou
   - **Environment**: Selecione `Production` (e `Preview` se quiser)
5. Clique em **Save**
6. Faça um novo deploy

### Passo 3: Configurar Webhook no Sanity

1. Acesse o Sanity Manage: https://sanity.io/manage
2. Selecione seu projeto
3. Vá em **API** → **Webhooks**
4. Clique em **Create webhook**
5. Configure:
   - **Name**: `Revalidar Cache Next.js`
   - **URL**: `https://ivantagliaferro.com.br/api/revalidate?secret=SEU_TOKEN_AQUI`
     - Substitua `SEU_TOKEN_AQUI` pelo token que você configurou no Vercel
   - **Dataset**: `production` (ou o dataset que você usa)
   - **Trigger on**: Selecione `Create`, `Update` e `Delete`
   - **Filter**: Deixe vazio ou use `_type == "heroSlide"` para revalidar apenas quando slides mudarem
   - **HTTP method**: `POST`
   - **API version**: `v2021-03-25` ou a versão mais recente
6. Clique em **Save**

### Passo 4: Testar

1. Adicione ou edite um slide no Sanity Studio
2. O webhook será acionado automaticamente
3. A página será revalidada imediatamente
4. Verifique o site em produção - o novo slide deve aparecer em alguns segundos

## Verificação

Para verificar se o webhook está funcionando:

1. Acesse: `https://ivantagliaferro.com.br/api/revalidate?secret=SEU_TOKEN`
2. Você deve receber uma resposta JSON:
```json
{
  "revalidated": true,
  "now": 1234567890,
  "message": "Páginas revalidadas com sucesso"
}
```

## Notas Importantes

- O token secreto protege a rota de revalidação contra acesso não autorizado
- Sem o webhook configurado, os slides ainda aparecerão, mas com até 60 segundos de atraso
- O webhook revalida as páginas `/`, `/blog` e `/ebooks` automaticamente
- Certifique-se de que o token no webhook do Sanity seja exatamente o mesmo configurado no Vercel

## Troubleshooting

### Slides não aparecem mesmo após configurar

1. Verifique se o token está correto no webhook do Sanity
2. Verifique se a variável `REVALIDATE_SECRET` está configurada no Vercel
3. Verifique os logs do webhook no Sanity (em **API** → **Webhooks** → clique no webhook)
4. Verifique os logs do deploy na Vercel

### Webhook retorna erro 401

- O token no webhook não corresponde ao token configurado no Vercel
- Verifique se ambos estão exatamente iguais (sem espaços extras)

### Webhook retorna erro 500

- Verifique os logs do deploy na Vercel
- Certifique-se de que a rota `/api/revalidate` está acessível

