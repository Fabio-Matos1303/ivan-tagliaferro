# 🎨 Configuração do Sanity CMS

Este guia explica como configurar o Sanity CMS para gerenciar o conteúdo do blog.

## 📋 Pré-requisitos

- Conta no [Sanity.io](https://www.sanity.io)
- Node.js instalado
- Projeto Next.js configurado

---

## 🚀 Passo 1: Criar Projeto no Sanity

### 1.1 Criar Conta

1. Acesse [https://www.sanity.io](https://www.sanity.io)
2. Clique em "Get Started" ou "Sign Up"
3. Crie uma conta (pode usar Google, GitHub, etc.)

### 1.2 Criar Novo Projeto

1. No painel do Sanity, clique em "Create project"
2. Preencha:
   - **Project name**: `ivan-tagliaferro` (ou outro nome de sua preferência)
   - **Dataset name**: `production` (ou `development` para testes)
3. Clique em "Create project"

### 1.3 Obter Credenciais

1. No painel do projeto, vá em **Settings** → **API**
2. Anote:
   - **Project ID** (ex: `abc123xyz`)
   - **Dataset** (geralmente `production`)

---

## 🔧 Passo 2: Configurar Variáveis de Ambiente

1. Crie ou edite o arquivo `.env.local` na raiz do projeto:

```bash
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=seu_project_id_aqui
NEXT_PUBLIC_SANITY_DATASET=production

# Token opcional (para mutations/writes)
SANITY_API_TOKEN=seu_token_aqui
```

2. **Substitua** `seu_project_id_aqui` pelo Project ID do seu projeto Sanity
3. Reinicie o servidor: `npm run dev`

---

## 📝 Passo 3: Criar Schema no Sanity

### Opção A: Via Sanity Studio (Recomendado)

1. Instale o Sanity CLI globalmente:
```bash
npm install -g @sanity/cli
```

2. Inicialize o Studio no projeto:
```bash
npx sanity init
```

3. Escolha:
   - Use existing project: **Sim**
   - Select project: **Seu projeto**
   - Dataset: **production**
   - Output path: **./studio** (ou outro)
   - Use TypeScript: **Sim**
   - Template: **Blank**

4. Copie o schema:
   - Copie o conteúdo de `sanity/schemas/post.ts` para o seu schema no Studio
   - Ou importe diretamente se configurado

### Opção B: Via Sanity Manage (Interface Web)

1. Acesse [sanity.io/manage](https://sanity.io/manage)
2. Selecione seu projeto
3. Vá em **Structure**
4. Crie um novo tipo de documento "post"
5. Adicione os campos conforme `sanity/schemas/post.ts`

---

## 📝 Passo 4: Criar Primeiro Post

### Via Sanity Studio (Recomendado)

1. Execute o Studio:
```bash
cd studio
npm run dev
# Acesse: http://localhost:3333
```

2. Ou acesse via web:
   - [sanity.io/manage](https://sanity.io/manage)
   - Selecione seu projeto

3. Crie o post:
   - Vá em **Post do Blog**
   - Clique em **Create**
   - Preencha:
     - **Título**: Ex: "Como Escolher o Destino Ideal para seu Intercâmbio"
     - **Slug**: Clique em "Generate" (ou crie manualmente)
     - **Resumo**: Breve descrição
     - **Imagem de Destaque**: Faça upload
     - **Data de Publicação**: Data atual
     - **Categoria**: Escolha uma (Dicas, Documentação, etc.)
     - **Conteúdo**: Escreva usando o editor Portable Text
   - Clique em **Publish** (importante: não apenas salvar como draft)

### Verificar no Site

1. Execute o projeto: `npm run dev`
2. Acesse: `http://localhost:3000/blog`
3. O post deve aparecer na listagem

---

## 🔍 Passo 5: Verificar Configuração

### 5.1 Testar Conexão

No terminal do projeto:
```bash
npm run dev
```

Acesse `/blog` e verifique se:
- A página carrega sem erros
- Posts aparecem (se houver)
- Imagens carregam corretamente

---

## 📚 Estrutura de Dados

### Schema de Post

O schema está em `sanity/schemas/post.ts` com os seguintes campos:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| **title** | string | Título do post |
| **slug** | slug | URL amigável (gerado automaticamente) |
| **excerpt** | text | Resumo curto (máx. 200 caracteres) |
| **mainImage** | image | Imagem de destaque com alt text |
| **publishedAt** | datetime | Data de publicação |
| **category** | string | Categoria do post |
| **body** | array | Conteúdo completo (Portable Text) |
| **featured** | boolean | Marcar como post destaque |

### Categorias Disponíveis

- **dicas** → "Dicas"
- **documentacao** → "Documentação"
- **destinos** → "Destinos"
- **experiencias** → "Experiências"
- **geral** → "Geral"

---

## 🎨 Personalização

### Adicionar Novos Campos

Edite `sanity/schemas/post.ts`:

```typescript
defineField({
  name: "seuCampo",
  title: "Seu Campo",
  type: "string",
  description: "Descrição do campo",
}),
```

Depois, adicione o campo nas queries em `app/lib/sanity/queries.ts`.

---

## 🐛 Troubleshooting

### Erro: "Configuration must contain `projectId`"
- ✅ Verifique se `.env.local` existe
- ✅ Verifique se `NEXT_PUBLIC_SANITY_PROJECT_ID` está preenchido
- ✅ Reinicie o servidor após editar `.env.local`

### Erro: "Dataset não encontrado"
- ✅ Verifique se o dataset existe no painel Sanity
- ✅ Padrão: `production`

### Posts não aparecem
- ✅ Verifique se o post está **Publicado** (não apenas salvo como draft)
- ✅ Verifique o console do navegador para erros
- ✅ Verifique se o Project ID está correto

### Imagens não carregam
- ✅ Verifique se as imagens foram uploadadas corretamente no Sanity
- ✅ Verifique se o campo `mainImage` está preenchido
- ✅ Verifique `next.config.ts` - domínio `cdn.sanity.io` deve estar permitido

### Build falha
- ✅ O projeto foi configurado para funcionar mesmo sem Sanity configurado
- ✅ Configure as variáveis de ambiente antes do build de produção

---

## 📖 Recursos

- [Documentação Sanity](https://www.sanity.io/docs)
- [Next.js + Sanity Guide](https://www.sanity.io/docs/js-client)
- [Portable Text](https://www.sanity.io/docs/block-content)
- [Sanity Studio](https://www.sanity.io/docs/sanity-studio)
- [GROQ Query Language](https://www.sanity.io/docs/groq)

---

## ✅ Checklist de Configuração

- [ ] Conta criada no Sanity.io
- [ ] Projeto criado no Sanity
- [ ] Project ID anotado
- [ ] Variáveis de ambiente configuradas (`.env.local`)
- [ ] Schema criado no Sanity (ou usando o arquivo local)
- [ ] Primeiro post criado e publicado no Sanity
- [ ] Post aparece no site (`/blog`)
- [ ] Imagens carregam corretamente
- [ ] Conteúdo renderiza corretamente
- [ ] Links funcionam corretamente

---

## 📝 Notas Importantes

1. **Publicar vs Salvar**: Posts precisam ser **Publicados** para aparecer no site (não apenas salvos como draft)

2. **Slugs**: Os slugs são gerados automaticamente a partir do título, mas podem ser editados manualmente

3. **Imagens**: As imagens são hospedadas no CDN do Sanity automaticamente

4. **Portable Text**: O conteúdo usa Portable Text, que suporta formatação rica (negrito, itálico, links, listas, etc.)

5. **Performance**: O projeto usa CDN do Sanity para melhor performance

---

**Última atualização**: Janeiro 2025
