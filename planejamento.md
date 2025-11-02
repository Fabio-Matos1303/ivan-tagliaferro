# Planejamento do Site - Ivan Tagliaferro

## 📋 Índice
1. [Análise da Identidade Visual](#análise-da-identidade-visual)
2. [Análise dos Sites de Referência](#análise-dos-sites-de-referência)
3. [Estrutura de Páginas](#estrutura-de-páginas)
4. [Design System](#design-system)
5. [Arquitetura de Componentes](#arquitetura-de-componentes)
6. [Fluxo de Navegação](#fluxo-de-navegação)
7. [Decisões Técnicas](#decisões-técnicas)
8. [Roadmap de Implementação](#roadmap-de-implementação)

---

## 🎨 Análise da Identidade Visual

### Logos Disponíveis
A identidade visual do projeto possui os seguintes recursos:

- **logo-azul.jpg**: Logo principal em cor azul (uso geral)
- **logo-branca.jpg**: Logo em branco (uso em fundos escuros)
- **logo-nome.jpg**: Logo com nome em cor padrão
- **logo-nome-branca.jpg**: Logo com nome em branco (uso em fundos escuros)

### Diretrizes de Uso
- **Cores Principais**: Azul (identificado nos logos) - será necessário extrair a cor exata para criar a paleta
- **Versatilidade**: Logos disponíveis para diferentes contextos (claro/escuro)
- **Estilo**: Profissional e moderno, adequado para serviços de intercâmbio

### Recomendações
- Extrair a cor azul principal dos logos para definir a paleta de cores
- Criar variantes de cor secundária baseada na cor principal
- Definir sistema de tipografia que complemente a identidade (serif para títulos, sans-serif para corpo)

---

## 🔍 Análise dos Sites de Referência

### AllyHub.co - Pontos Fortes
✅ **Hero Section Impactante**
- Banner grande com mensagem clara e direta
- CTAs bem posicionados ("Quero melhorar minha empresa")
- Design limpo e moderno

✅ **Seções de Serviços**
- Cards visuais com ícones/imagens
- Organização clara e hierárquica
- Foco em conversão

✅ **Depoimentos**
- Testimonials com foto e credenciais
- Transmite confiança e credibilidade
- Visualmente atraente

✅ **Formulário de Contato**
- Campos relevantes (cargo, quantidade de pessoas, etc)
- Design simples e intuitivo
- Call-to-action claro

### AG Canada Visa - Pontos Fortes
✅ **Hero Section com Slider**
- Carousel com múltiplas mensagens
- Design profissional e confiável
- Botão de CTA destacado ("Appointment")

✅ **Grid de Serviços**
- Cards numerados (01, 02, 03...)
- Imagens e descrições claras
- Links "Read More" para detalhes

✅ **Seção "Why Choose Us"**
- Destaque para credenciais (RCIC, CICC)
- Apresentação pessoal do profissional
- Transmite expertise e confiança

✅ **Navegação Clara**
- Menu horizontal bem estruturado
- Links para serviços específicos
- Acesso fácil ao contato (telefone, email, appointment)

### Elementos a Incorporar
1. **Hero Section** com mensagem forte e CTA claro
2. **Seção de Serviços** com cards visuais e organizados
3. **Depoimentos/Testimonials** para construir confiança
4. **Seção "Sobre"** destacando credenciais e experiência
5. **Formulário de Contato** simples e eficaz
6. **Integração WhatsApp** proeminente
7. **CTA para E-books** estrategicamente posicionado

---

## 📄 Estrutura de Páginas

### Página Inicial (/)
**Seções:**
1. **Hero Section**
   - Banner com imagem de fundo ou gradiente
   - Título principal impactante
   - Subtítulo com proposta de valor
   - CTAs: "Falar no WhatsApp" e "Baixar E-book"

2. **Nossos Serviços** (Preview)
   - Cards com 4-6 serviços principais
   - Links para página completa de serviços
   - Ícones ou imagens representativas

3. **Quem Sou** (Preview)
   - Breve biografia do Ivan
   - Credenciais e certificações
   - Foto profissional (opcional)
   - Link para página completa

4. **Por Que Escolher**
   - Diferenciais e benefícios
   - Estatísticas ou números (ex: "X+ experiências")
   - Cards ou lista formatada

5. **Depoimentos**
   - 3-4 testimonials de clientes
   - Foto, nome, localização/cargo
   - Texto do depoimento

6. **Download de E-books**
   - Destaque para material gratuito
   - Formulário simples ou botão direto
   - Ícones de capa dos e-books

7. **Contato Rápido**
   - Formulário simplificado
   - Botões de WhatsApp e Email
   - Informações de contato

### Página: Quem Sou (/sobre)
- Biografia completa do Ivan
- História e trajetória profissional
- Credenciais, certificações e formações
- Valores e missão
- Foto(s) profissional(is)
- Call-to-action para contato

### Página: Nossos Serviços (/servicos)
- Lista completa de todos os serviços
- Cards ou seções para cada serviço:
  - Título
  - Descrição
  - Benefícios/Pontos-chave
  - Link para mais informações (se aplicável)
  - CTA para contato específico
- Seção de E-books disponíveis
- CTA principal para agendamento/consulta

### Página: Blog (/blog)
- Grid ou lista de posts
- Cada card de post contém:
  - Imagem de destaque
  - Título
  - Resumo/Excerpt
  - Data de publicação
  - Categoria/Tag (opcional)
- Paginação ou infinite scroll
- Filtros por categoria (futuro)

### Página: Post Individual (/blog/[slug])
- Título do post
- Meta informações (data, autor, categoria)
- Imagem de destaque
- Conteúdo completo (renderizado do CMS)
- CTA para contato relacionado
- Posts relacionados (opcional)

### Página: Contato (/contato)
- Formulário de contato completo
- Campos:
  - Nome *
  - Email *
  - Telefone *
  - Assunto
  - Mensagem *
  - reCAPTCHA
- Botões de contato alternativo:
  - WhatsApp (com número formatado)
  - Email (mailto:)
- Informações adicionais:
  - Horário de atendimento
  - Endereço (se aplicável)
  - Redes sociais (opcional)

### Página: E-books (/ebooks)
- Grid de e-books disponíveis
- Cards com:
  - Capa do e-book
  - Título
  - Descrição breve
  - Botão de download (com formulário ou direto)

---

## 🎨 Design System

### Paleta de Cores
**Baseado na identidade visual (azul):**

- **Primária**: Azul extraído dos logos (#1e40af ou similar)
- **Secundária**: Azul mais claro para hover/states (#3b82f6)
- **Sucesso**: Verde (#10b981)
- **Aviso**: Amarelo/Laranja (#f59e0b)
- **Erro**: Vermelho (#ef4444)
- **Neutros**: 
  - Branco: #ffffff
  - Cinza claro: #f3f4f6
  - Cinza médio: #6b7280
  - Cinza escuro: #1f2937
  - Preto: #000000

### Tipografia
**Fontes (usar Google Fonts ou sistema):**

- **Títulos**: Sans-serif moderna (Inter, Poppins, ou Geist)
- **Corpo**: Sans-serif legível (mesma família ou variação)
- **Hierarquia**:
  - H1: 3xl-4xl (48px-60px)
  - H2: 2xl-3xl (30px-36px)
  - H3: xl-2xl (24px-30px)
  - H4: lg-xl (18px-24px)
  - Body: base (16px)
  - Small: sm (14px)

### Espaçamento
- **Grid**: Sistema de 8px (4, 8, 16, 24, 32, 48, 64, 96px)
- **Padding**: Consistente em cards e containers
- **Margin**: Espaçamento entre seções (48px-96px)

### Componentes Base

#### Botões
- **Primário**: Fundo azul, texto branco, hover mais escuro
- **Secundário**: Borda azul, texto azul, fundo transparente
- **Tamanhos**: Small, Medium, Large
- **Estados**: Default, Hover, Active, Disabled

#### Cards
- Sombra suave
- Border radius moderado (8px-12px)
- Hover effect sutil (elevação ou scale)
- Padding interno consistente

#### Inputs
- Border sutil
- Focus com borda azul
- Placeholder text em cinza
- Estados de erro visíveis

#### Seções
- Background alternado (branco/cinza claro)
- Padding vertical generoso
- Max-width para leitura (1280px)

---

## 🧩 Arquitetura de Componentes

### Estrutura de Pastas Proposta
```
app/
├── (pages)/
│   ├── page.tsx                    # Home
│   ├── sobre/
│   │   └── page.tsx
│   ├── servicos/
│   │   └── page.tsx
│   ├── blog/
│   │   ├── page.tsx                # Lista de posts
│   │   └── [slug]/
│   │       └── page.tsx            # Post individual
│   ├── contato/
│   │   └── page.tsx
│   └── ebooks/
│       └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx              # Navegação principal
│   │   ├── Footer.tsx              # Rodapé
│   │   └── Navigation.tsx           # Menu de navegação
│   ├── sections/
│   │   ├── Hero.tsx                # Hero section
│   │   ├── ServicesPreview.tsx     # Preview de serviços
│   │   ├── AboutPreview.tsx       # Preview sobre
│   │   ├── Testimonials.tsx        # Depoimentos
│   │   ├── EbooksSection.tsx       # Seção de e-books
│   │   └── ContactForm.tsx         # Formulário de contato
│   ├── ui/
│   │   ├── Button.tsx              # Botão reutilizável
│   │   ├── Card.tsx                # Card genérico
│   │   ├── Input.tsx                # Input de formulário
│   │   ├── Textarea.tsx            # Textarea
│   │   └── Badge.tsx                # Badge/Tag
│   └── blog/
│       ├── PostCard.tsx            # Card de post
│       ├── PostList.tsx            # Lista de posts
│       └── PostContent.tsx         # Conteúdo do post
├── lib/
│   ├── utils.ts                    # Utilitários
│   ├── api.ts                      # Chamadas de API (CMS)
│   └── constants.ts                # Constantes
└── types/
    └── index.ts                    # Tipos TypeScript
```

### Componentes Principais

#### Header
- Logo (com link para home)
- Menu de navegação (responsivo)
- Botão de WhatsApp fixo (sticky)
- Mobile menu (hamburger)

#### Footer
- Links rápidos
- Redes sociais
- Informações de contato
- Copyright

#### Hero
- Título e subtítulo configuráveis (CMS)
- Imagem de fundo (CMS)
- CTAs principais
- Animações suaves (opcional)

#### ServiceCard
- Ícone/Imagem
- Título
- Descrição breve
- Link para detalhes

#### TestimonialCard
- Foto do cliente
- Nome e localização
- Texto do depoimento
- Avaliação (estrelas, opcional)

#### ContactForm
- Validação client-side
- Integração com API (envio de email)
- reCAPTCHA
- Estados de loading/success/error

---

## 🧭 Fluxo de Navegação

### Menu Principal
```
Home
├── Quem Sou
├── Nossos Serviços
├── Blog
├── Contato
└── E-books (pode estar no menu ou apenas na home)
```

### Fluxos Principais

#### Fluxo: Conversão Inicial
```
Home (Hero) → CTA WhatsApp → Conversa direta
Home (Hero) → CTA E-book → Formulário/Download → Contato posterior
Home (Serviços) → CTA Contato → Formulário → Confirmação
```

#### Fluxo: Informação
```
Home → Blog → Post → CTA Contato
Home → Serviços → Detalhes → CTA Agendamento
Home → Quem Sou → Credenciais → CTA Contato
```

#### Fluxo: Navegação Rápida
```
Qualquer página → Header → WhatsApp (sticky)
Qualquer página → Footer → Contato
```

---

## 🛠️ Decisões Técnicas

### CMS - Recomendação: Sanity.io

**Justificativa:**
- Hospedagem gerenciada (sem preocupação com servidor)
- Interface amigável para o cliente
- Excelente integração com Next.js
- Plano gratuito generoso para começar
- Facilidade para gerenciar blog e conteúdo

**Estrutura de Conteúdo no CMS:**
- **Pages**: Home, Sobre, Serviços, Contato
- **Blog Posts**: Título, slug, resumo, conteúdo, imagem, data
- **Services**: Nome, descrição, ícone, link
- **Testimonials**: Nome, foto, texto, cargo/localização
- **E-books**: Título, descrição, arquivo PDF, capa, ordem

### Bibliotecas Adicionais Recomendadas

#### Necessárias
- **@sanity/client** e **next-sanity**: Integração com Sanity
- **react-hook-form**: Gerenciamento de formulários
- **zod**: Validação de schemas
- **@hookform/resolvers**: Integração react-hook-form + zod
- **react-google-recaptcha**: Proteção contra spam

#### Opcionais (Melhorias)
- **framer-motion**: Animações suaves
- **react-icons**: Ícones consistentes
- **date-fns**: Formatação de datas (blog)
- **next-seo**: SEO otimizado
- **@next/third-parties**: Analytics (Google Analytics, etc)

### Configurações Next.js

#### next.config.ts
```typescript
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'], // Domínio do Sanity para imagens
  },
  // Otimizações de performance
  compress: true,
  poweredByHeader: false,
};
```

#### Otimizações SEO
- Meta tags dinâmicas por página
- Open Graph tags
- Twitter Cards
- Schema.org structured data
- Sitemap.xml
- robots.txt

### Integrações

#### WhatsApp
- Link direto: `https://wa.me/55XXXXXXXXXXX?text=...`
- Botão flutuante (pode ser sticky)
- Integração em múltiplos pontos (Hero, Footer, CTAs)

#### Email (Formulário)
- Opção 1: API Route do Next.js + SendGrid/Resend
- Opção 2: Formspree (serviço terceiro simples)
- Opção 3: Nodemailer (se hospedagem permitir SMTP)

### Performance
- **Image Optimization**: next/image para todas as imagens
- **Font Optimization**: next/font (já configurado)
- **Code Splitting**: Automático pelo Next.js
- **Static Generation**: Páginas estáticas onde possível (ISR)
- **Lazy Loading**: Componentes pesados

### Responsividade
- **Mobile First**: Design começando do mobile
- **Breakpoints Tailwind**:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px
  - 2xl: 1536px

---

## 🗺️ Roadmap de Implementação

### Fase 1: Fundação (Semana 1)
- [ ] Configurar Sanity CMS
- [ ] Criar estrutura de pastas de componentes
- [ ] Definir paleta de cores e tipografia
- [ ] Criar componentes base (Button, Card, Input)
- [ ] Implementar Header e Footer
- [ ] Configurar layout base

### Fase 2: Páginas Principais (Semana 2)
- [ ] Página Home completa
  - [ ] Hero Section
  - [ ] Seção de Serviços (Preview)
  - [ ] Seção Quem Sou (Preview)
  - [ ] Seção Depoimentos
  - [ ] Seção E-books
  - [ ] Formulário de Contato
- [ ] Página Quem Sou completa
- [ ] Página Nossos Serviços completa

### Fase 3: Blog e Conteúdo (Semana 3)
- [ ] Integração completa com Sanity
- [ ] Página de listagem do Blog
- [ ] Página individual de Post
- [ ] Sistema de busca/filtro (opcional)
- [ ] Populate dados iniciais no CMS

### Fase 4: Funcionalidades (Semana 4)
- [ ] Formulário de contato funcional
- [ ] Integração WhatsApp
- [ ] Sistema de download de E-books
- [ ] SEO básico (meta tags, sitemap)
- [ ] Testes de responsividade

### Fase 5: Otimização e Deploy (Semana 5)
- [ ] Otimização de imagens
- [ ] Testes de performance
- [ ] Configuração para GoDaddy
- [ ] Configuração de domínio e SSL
- [ ] Testes em diferentes navegadores
- [ ] Documentação para o cliente (CMS)

### Fase 6: Ajustes e Entrega (Semana 6)
- [ ] Ajustes baseados em feedback
- [ ] Treinamento do cliente no CMS
- [ ] Entrega final
- [ ] Início do suporte (60 dias)

---

## 📝 Notas Adicionais

### Considerações de Design
- Manter consistência visual com os sites de referência
- Priorizar conversão (CTAs claros e estratégicos)
- Transmitir confiança e profissionalismo
- Design limpo, não sobrecarregado

### Considerações de UX
- Tempo de carregamento < 3 segundos
- Navegação intuitiva
- Mobile-first approach
- Acessibilidade básica (ARIA labels, contraste)

### Considerações de Conteúdo
- Textos claros e objetivos
- Foco em benefícios, não apenas características
- Chamadas para ação em pontos estratégicos
- Depoimentos autênticos e diversos

---

## 🔗 Referências

- **Sites de Referência**: 
  - [AllyHub](https://allyhub.co/)
  - [AG Canada Visa](https://agcanadavisa.ca/Index)
- **Backlog**: `backlog.md`
- **Identidade Visual**: `/public/logo-*.jpg`

---

**Última Atualização**: Janeiro 2025
**Versão do Documento**: 1.0

