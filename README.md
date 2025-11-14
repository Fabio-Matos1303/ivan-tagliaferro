# Site Ivan Tagliaferro

Site institucional para serviços de consultoria em intercâmbio e educação internacional.

## 🚀 Tecnologias

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript 5**
- **Tailwind CSS v4**
- **Sanity.io** (CMS)
- **Resend** (Email)

## 📋 Pré-requisitos

- Node.js 18+ 
- npm ou yarn
- Conta no [Sanity.io](https://www.sanity.io) (para CMS)
- Conta no [Resend](https://resend.com) (para emails)

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone <repository-url>
cd ivan-tagliaferro
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env.local
```

Edite o arquivo `.env.local` com suas credenciais:
```env
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=seu_project_id_aqui
NEXT_PUBLIC_SANITY_DATASET=production

# Resend (Email)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx
CONTACT_EMAIL=contato@ivantagliaferro.com.br
RESEND_FROM_EMAIL=onboarding@resend.dev
```

## 🏃 Executando o Projeto

### Desenvolvimento
```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

### Sanity Studio
O Sanity Studio está disponível em [http://localhost:3000/studio](http://localhost:3000/studio)

### Build de Produção
```bash
npm run build
npm start
```

## 📁 Estrutura do Projeto

```
ivan-tagliaferro/
├── app/
│   ├── api/              # API Routes
│   ├── blog/             # Páginas do blog
│   ├── components/        # Componentes React
│   │   ├── blog/         # Componentes do blog
│   │   ├── layout/       # Header, Footer, Navigation
│   │   ├── sections/     # Seções da página
│   │   └── ui/           # Componentes UI base
│   ├── lib/              # Utilitários e helpers
│   │   └── sanity/       # Queries e integração Sanity
│   ├── sobre/            # Página "Quem Sou"
│   ├── servicos/         # Página "Serviços"
│   ├── contato/          # Página "Contato"
│   ├── ebooks/           # Página "E-books"
│   └── studio/           # Sanity Studio
├── sanity/               # Configuração do Sanity CMS
│   ├── lib/              # Cliente e helpers Sanity
│   └── schemaTypes/      # Schemas do CMS
├── public/               # Arquivos estáticos
└── docs/                 # Documentação
```

## 🎨 Páginas do Site

- `/` - Home (Carrossel Hero, Serviços, Por Que Escolher)
- `/sobre` - Quem Sou (Biografia, Credenciais)
- `/servicos` - Serviços (Grid completo)
- `/blog` - Blog (Listagem de posts)
- `/blog/[slug]` - Post individual
- `/contato` - Contato (Formulário)
- `/ebooks` - E-books (Grid de materiais via CMS)
- `/studio` - Sanity Studio (CMS)

## 🔌 Integrações

### Sanity CMS
O conteúdo do site é gerenciado através do Sanity.io. O CMS permite gerenciar:
- **Blog**: Posts, categorias e autores
- **E-books**: Títulos, descrições, capas e links do Google Drive
- **Hero Slides**: Slides do carrossel da página inicial

Para configurar:
1. Crie uma conta em [sanity.io](https://www.sanity.io)
2. Crie um projeto
3. Configure as variáveis de ambiente
4. Acesse `/studio` para gerenciar conteúdo

**Documentação**: Configure as variáveis de ambiente e acesse `/studio` para gerenciar conteúdo.

### Email (Resend)
O formulário de contato envia emails através do Resend. Para configurar:
1. Crie uma conta em [resend.com](https://resend.com)
2. Obtenha sua API key
3. Configure as variáveis de ambiente
4. Verifique seu domínio (para produção)

**Documentação**: Configure a API key do Resend nas variáveis de ambiente e verifique seu domínio para produção.

### WhatsApp
Links do WhatsApp são gerados dinamicamente. Configure o número em `app/lib/constants.ts`.

## 🛠️ Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Cria build de produção
npm run start    # Inicia servidor de produção
npm run lint     # Executa ESLint
```

## 📚 Documentação

- `STATUS-GERAL-PROJETO.md` - Status atual do desenvolvimento e andamento do projeto

## 🎯 Status do Projeto

**Progresso: ~80% Concluído**

✅ **Concluído:**
- Estrutura base e design system
- Todas as páginas principais
- Integração com Sanity CMS
- Formulário de contato funcional
- Blog completo com CMS
- E-books gerenciados via CMS
- Carrossel performático na hero section
- Sistema de download de e-books (redireciona para Google Drive)

⏳ **Pendente:**
- SEO básico (sitemap, robots.txt)
- Deploy em produção

## 🤝 Desenvolvimento

### Componentes UI

O projeto utiliza componentes reutilizáveis em `app/components/ui/`:
- `Button` - Botões com variantes
- `Card` - Cards
- `Input` - Inputs de formulário
- `Textarea` - Textareas
- `Badge` - Badges/Tags

### Design System

Cores e estilos estão definidos em `app/globals.css`:
- Azul primário: `#1e40af`
- Cores funcionais: success, warning, error
- Escala de cinzas completa

## 📝 Notas Importantes

1. **Variáveis de Ambiente**: Nunca commite arquivos `.env.local` no repositório
2. **Sanity**: O CMS precisa ser configurado antes de criar conteúdo
3. **Email**: Use domínio verificado no Resend para produção
4. **Build**: O projeto compila mesmo sem Sanity configurado (com fallbacks)

## 🐛 Troubleshooting

### Erro ao compilar
- Verifique se todas as dependências estão instaladas: `npm install`
- Limpe o cache: `rm -rf .next node_modules && npm install`

### Sanity não conecta
- Verifique as variáveis de ambiente (`NEXT_PUBLIC_SANITY_PROJECT_ID` e `NEXT_PUBLIC_SANITY_DATASET`)
- Confirme que o Project ID está correto
- Certifique-se de que o projeto Sanity existe e está acessível

### Email não envia
- Verifique a API key do Resend (`RESEND_API_KEY`)
- Confirme o domínio verificado no painel do Resend
- Verifique se `CONTACT_EMAIL` e `RESEND_FROM_EMAIL` estão configurados corretamente

## 📄 Licença

Projeto privado - Ivan Tagliaferro

---

**Desenvolvido com** ❤️ **usando Next.js e Sanity.io**
