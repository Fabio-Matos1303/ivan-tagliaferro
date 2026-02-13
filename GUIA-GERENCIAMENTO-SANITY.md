# 📚 Guia Completo de Gerenciamento do Site - Sanity CMS

## 🎯 Introdução

Este guia foi criado para ajudá-lo a gerenciar todo o conteúdo do seu site de forma independente e profissional através do **Sanity CMS**. Com este guia, você poderá:

- ✅ Criar e editar slides do carrossel principal
- ✅ Publicar e gerenciar posts do blog
- ✅ Adicionar e organizar e-books
- ✅ Gerenciar compromissos e eventos
- ✅ Organizar categorias e autores
- ✅ Otimizar imagens e SEO

---

## 📖 Índice

1. [Acesso ao Sanity Studio](#1-acesso-ao-sanity-studio)
2. [Interface do Sanity](#2-interface-do-sanity)
3. [Gerenciando Slides do Hero](#3-gerenciando-slides-do-hero)
4. [Gerenciando Posts do Blog](#4-gerenciando-posts-do-blog)
5. [Gerenciando E-books](#5-gerenciando-e-books)
6. [Gerenciando Compromissos](#6-gerenciando-compromissos)
7. [Gerenciando Categorias](#7-gerenciando-categorias)
8. [Gerenciando Autores](#8-gerenciando-autores)
9. [Boas Práticas com Imagens](#9-boas-práticas-com-imagens)
10. [Dicas de SEO](#10-dicas-de-seo)
11. [Solução de Problemas](#11-solução-de-problemas)
12. [Glossário](#12-glossário)

---

## 1. Acesso ao Sanity Studio

### Como Acessar

1. **Acesse o seu site** (ex: `https://ivantagliaferro.com.br`)
2. **Adicione `/studio` ao final da URL**
   - Exemplo: `https://ivantagliaferro.com.br/studio`
3. **Faça login** com suas credenciais do Sanity

### Primeiro Acesso

Na primeira vez, você precisará:
- Criar uma conta no Sanity (se ainda não tiver)
- Receber convite de acesso ao projeto (se aplicável)
- Fazer login com email e senha

### Recuperação de Senha

Se esquecer sua senha:
1. Clique em "Esqueci minha senha" na tela de login
2. Digite seu email
3. Siga as instruções no email recebido

---

## 2. Interface do Sanity

### Menu Lateral (Sidebar)

No lado esquerdo da tela, você verá os seguintes itens:

- **📸 Slide do Hero** - Gerenciar slides do carrossel principal
- **📝 Post** - Gerenciar posts do blog
- **📚 E-book** - Gerenciar e-books
- **📅 Compromisso Agendado** - Gerenciar eventos e compromissos
- **🏷️ Category** - Gerenciar categorias do blog
- **👤 Author** - Gerenciar autores

### Barra Superior

- **Pesquisa** - Busque qualquer conteúdo
- **Menu do usuário** - Configurações e logout
- **Botão "Publish"** - Publica as alterações

### Área de Trabalho

- **Lista de documentos** - Mostra todos os itens do tipo selecionado
- **Editor** - Onde você edita o conteúdo

---

## 3. Gerenciando Slides do Hero

Os slides do hero são o carrossel principal que aparece na página inicial do site.

### Criar um Novo Slide

1. Clique em **"Slide do Hero"** no menu lateral
2. Clique no botão **"Create new"** (ou use o atalho `Ctrl/Cmd + N`)
3. Preencha os campos:

#### Campos Obrigatórios

**Título** (obrigatório)
- Título principal do slide
- Recomendado: máximo 60 caracteres
- Exemplo: "Transforme seu sonho em realidade internacional"

**Descrição** (obrigatório)
- Texto descritivo que aparece abaixo do título
- Máximo: 300 caracteres
- Exemplo: "Mais de 20 anos de experiência facilitando intercâmbios, vistos e imigração. Acompanhamento personalizado em cada etapa da sua jornada global."

#### Campos Opcionais

**Imagem de Fundo**
- Clique em "Upload" ou "Select" para escolher uma imagem
- Formatos aceitos: JPG, PNG, WebP
- Tamanho recomendado: 1920x1080px (ou proporção 16:9)
- **Importante:** Após fazer upload, preencha o "Texto Alternativo" para acessibilidade e SEO

**Botão Principal (CTA)**
- **Texto do Botão:** Ex: "Falar no WhatsApp"
- **Link:** 
  - Para páginas internas: `/servicos`, `/sobre`, `/ebooks`
  - Para WhatsApp: `https://wa.me/5519981236025?text=Olá!`
  - Para links externos: URL completa
- **Link Externo:** Marque esta opção se for um link externo (abre em nova aba)

**Botão Secundário**
- Mesma estrutura do botão principal
- Opcional - pode deixar em branco se não precisar

**Ordem de Exibição**
- Número que define a ordem dos slides
- Menor número = aparece primeiro
- Exemplo: 0, 1, 2, 3...

**Ativo**
- Marque esta opção para exibir o slide no carrossel
- Desmarque para ocultar temporariamente (sem deletar)

### Editar um Slide Existente

1. Clique em **"Slide do Hero"** no menu lateral
2. Clique no slide que deseja editar
3. Faça as alterações necessárias
4. Clique em **"Publish"** para salvar

### Reordenar Slides

1. Edite cada slide e ajuste o campo **"Ordem de Exibição"**
2. Slides com número menor aparecem primeiro
3. Exemplo:
   - Slide 1: Ordem = 0
   - Slide 2: Ordem = 1
   - Slide 3: Ordem = 2

### Desativar um Slide (sem deletar)

1. Abra o slide
2. Desmarque a opção **"Ativo"**
3. Clique em **"Publish"**

### Deletar um Slide

1. Abra o slide
2. Clique no menu "..." (três pontos) no canto superior direito
3. Selecione **"Delete"**
4. Confirme a exclusão

### Dicas para Slides Eficazes

✅ **Títulos Impactantes**
- Use verbos de ação: "Transforme", "Realize", "Descubra"
- Seja específico: mencione benefícios claros
- Máximo 60 caracteres

✅ **Descrições Claras**
- Foque em benefícios, não apenas características
- Use números quando possível: "20+ anos", "25 mil vidas"
- Máximo 300 caracteres

✅ **CTAs Eficazes**
- Use verbos de ação: "Falar", "Conhecer", "Baixar"
- Seja específico: "Falar no WhatsApp" é melhor que "Contato"
- Limite a 2 botões por slide

✅ **Imagens de Qualidade**
- Use imagens de alta resolução (mínimo 1920px de largura)
- Imagens devem ser relevantes ao conteúdo
- Evite imagens com muito texto sobreposto

---

## 4. Gerenciando Posts do Blog

### Criar um Novo Post

1. Clique em **"Post"** no menu lateral
2. Clique em **"Create new"**
3. Preencha os campos:

#### Campos Obrigatórios

**Title** (Título)
- Título do post
- Exemplo: "10 Dicas para Aprovação de Visto Americano"

**Slug**
- URL amigável do post
- Gerado automaticamente a partir do título
- Você pode editar manualmente se necessário
- Exemplo: "10-dicas-visto-americano"

**Author** (Autor)
- Selecione um autor existente ou crie um novo
- Se você for o único autor, crie um registro de autor primeiro

**Published At** (Data de Publicação)
- Data e hora da publicação
- Preenchido automaticamente com a data atual
- Você pode alterar para agendar uma publicação

#### Campos Importantes

**Resumo (Excerpt)**
- Texto curto que aparece na listagem do blog
- Máximo 200 caracteres
- Use para chamar atenção e resumir o conteúdo

**Post Destaque (Featured)**
- Marque para destacar o post na página inicial
- Útil para posts mais importantes

**Main Image** (Imagem Principal)
- Imagem de destaque do post
- Tamanho recomendado: 1200x630px (proporção 1.91:1)
- **Sempre preencha o "Alternative text"** para SEO

**Categories** (Categorias)
- Selecione uma ou mais categorias
- Crie categorias antes se necessário
- Exemplos: "Vistos", "Intercâmbio", "Imigração", "CNV"

**Body** (Corpo do Post)
- Conteúdo principal do post
- Editor rico de texto com formatação:
  - **Negrito** (Ctrl/Cmd + B)
  - *Itálico* (Ctrl/Cmd + I)
  - Títulos (H1, H2, H3)
  - Listas (ordenadas e não ordenadas)
  - Links
  - Imagens inline

### Formatação do Corpo do Post

O editor de texto oferece várias opções:

**Títulos**
- Use H2 para seções principais
- Use H3 para subseções
- Evite usar H1 (já é o título do post)

**Parágrafos**
- Pule linhas entre parágrafos para melhor legibilidade
- Use parágrafos curtos (3-4 linhas)

**Listas**
- Use listas numeradas para passos ou sequências
- Use listas com marcadores para itens relacionados

**Links**
- Sempre adicione links relevantes
- Para links externos, configure para abrir em nova aba
- Use texto descritivo para links

**Imagens Inline**
- Você pode adicionar imagens dentro do texto
- Use imagens para quebrar blocos de texto
- Sempre adicione texto alternativo

### Editar um Post Existente

1. Clique em **"Post"** no menu lateral
2. Clique no post que deseja editar
3. Faça as alterações
4. Clique em **"Publish"** para salvar

### Publicar um Post

1. Após criar ou editar, clique em **"Publish"** no canto superior direito
2. O post ficará visível no site imediatamente
3. Se quiser salvar sem publicar, use **"Save draft"**

### Agendar Publicação

1. Altere o campo **"Published At"** para uma data futura
2. Publique o post
3. O post aparecerá automaticamente na data/hora agendada

### Dicas para Posts de Qualidade

✅ **Títulos Atraentes**
- Use números: "10 Dicas", "5 Maneiras"
- Use perguntas: "Como conseguir visto americano?"
- Seja específico e prometa valor

✅ **Estrutura Clara**
- Use subtítulos (H2, H3) para organizar
- Quebre o texto em parágrafos curtos
- Use listas quando apropriado

✅ **SEO**
- Use palavras-chave no título e no início do texto
- Adicione meta descrição (excerpt)
- Use imagens com texto alternativo descritivo

✅ **Engajamento**
- Termine com uma pergunta ou call-to-action
- Convide para comentários ou compartilhamento
- Adicione links para outros posts relacionados

---

## 5. Gerenciando E-books

### Criar um Novo E-book

1. Clique em **"E-book"** no menu lateral
2. Clique em **"Create new"**
3. Preencha os campos:

#### Campos Obrigatórios

**Título**
- Nome do e-book
- Exemplo: "Guia Completo de Vistos Americanos"

**Slug**
- URL amigável
- Gerado automaticamente a partir do título
- Exemplo: "guia-completo-vistos-americanos"

**Descrição**
- Texto que aparece na listagem de e-books
- Máximo 300 caracteres
- Use para descrever o conteúdo e benefícios

**Capa do E-book**
- Imagem de capa
- Tamanho recomendado: 600x800px (proporção 3:4)
- Formatos: JPG, PNG
- **Sempre preencha o "Texto Alternativo"**

**URL do Google Drive**
- Link completo do arquivo PDF no Google Drive
- **Importante:** O link deve permitir download público
- Como obter:
  1. Faça upload do PDF no Google Drive
  2. Clique com botão direito no arquivo
  3. Selecione "Compartilhar" → "Qualquer pessoa com o link"
  4. Copie o link compartilhável
  5. Substitua `/view?usp=sharing` por `/uc?export=download&id=ID_DO_ARQUIVO`
  6. Ou use um serviço como `drive.google.com/uc?export=download&id=SEU_ID_AQUI`

#### Campos Opcionais

**Data de Publicação**
- Data em que o e-book foi publicado
- Preenchido automaticamente

**E-book em Destaque**
- Marque para destacar na página inicial
- Útil para e-books mais importantes

### Como Obter Link de Download do Google Drive

**Método 1: Link Direto**
1. Faça upload do PDF no Google Drive
2. Clique com botão direito → "Compartilhar"
3. Configure como "Qualquer pessoa com o link"
4. Copie o link
5. Extraia o ID do arquivo (aparece na URL)
6. Use: `https://drive.google.com/uc?export=download&id=ID_DO_ARQUIVO`

**Método 2: Usando Google Drive API**
- Mais complexo, mas mais confiável
- Consulte a documentação do Google Drive

**Método 3: Hospedagem Alternativa**
- Use serviços como Dropbox, OneDrive, ou hospedagem própria
- Certifique-se de que o link permite download direto

### Editar um E-book

1. Clique em **"E-book"** no menu lateral
2. Clique no e-book que deseja editar
3. Faça as alterações
4. Clique em **"Publish"**

### Dicas para E-books

✅ **Capa Atrativa**
- Use design profissional
- Inclua título e subtítulo legíveis
- Use cores que combinem com a identidade visual

✅ **Descrição Persuasiva**
- Mencione os benefícios de ler o e-book
- Use números: "50 páginas", "10 capítulos"
- Inclua call-to-action: "Baixe agora grátis"

✅ **Organização**
- Use "E-book em Destaque" para os mais importantes
- Organize por data de publicação
- Mantenha apenas e-books relevantes ativos

---

## 6. Gerenciando Compromissos

Os compromissos aparecem na página `/compromissos` e podem ser usados para mostrar eventos, palestras, workshops, etc.

### Criar um Novo Compromisso

1. Clique em **"Compromisso Agendado"** no menu lateral
2. Clique em **"Create new"**
3. Preencha os campos:

#### Campos Obrigatórios

**Título do Compromisso**
- Nome do evento/compromisso
- Exemplo: "Workshop de CNV para Lideranças"

**Descrição**
- Detalhes do compromisso
- Inclua informações relevantes para o público

**Data e Hora**
- Data e horário do compromisso
- Use o formato: DD/MM/AAAA HH:MM

**Tipo de Compromisso**
- Selecione: Consultoria, Mentoria, Palestra, Workshop, Reunião, Evento, Outro

**Local**
- **Tipo de Local:** Presencial, Online, ou Híbrido
- **Endereço/Localização:** 
  - Se presencial: endereço completo
  - Se online: nome da plataforma (ex: "Zoom", "Google Meet")
- **Link (se online):** URL para acesso

**Status**
- Agendado, Confirmado, Em Andamento, Concluído, Cancelado

#### Campos Opcionais

**Imagem**
- Foto relacionada ao evento
- Tamanho recomendado: 1200x630px

**Destaque**
- Marque para destacar na página

**Público**
- Marque para exibir publicamente na página
- Desmarque para manter privado (apenas para sua referência)

### Editar um Compromisso

1. Clique em **"Compromisso Agendado"** no menu lateral
2. Clique no compromisso que deseja editar
3. Faça as alterações
4. Clique em **"Publish"**

### Atualizar Status

Conforme o compromisso evolui, atualize o status:
1. Abra o compromisso
2. Altere o campo **"Status"**
3. Publique as alterações

### Dicas para Compromissos

✅ **Informações Completas**
- Sempre preencha todos os campos relevantes
- Inclua informações de contato se necessário
- Para eventos online, teste o link antes de publicar

✅ **Organização**
- Use "Destaque" para eventos importantes
- Mantenha status atualizados
- Remova ou cancele compromissos passados

✅ **Público vs Privado**
- Use "Público" para eventos que quer divulgar
- Use "Privado" para compromissos internos

---

## 7. Gerenciando Categorias

Categorias organizam os posts do blog por temas.

### Criar uma Nova Categoria

1. Clique em **"Category"** no menu lateral
2. Clique em **"Create new"**
3. Preencha:

**Title** (Título)
- Nome da categoria
- Exemplo: "Vistos Americanos"

**Slug**
- URL amigável
- Gerado automaticamente
- Exemplo: "vistos-americanos"

**Description** (Descrição)
- Descrição opcional da categoria
- Útil para SEO

### Usar Categorias

- Ao criar um post, você pode selecionar uma ou mais categorias
- Posts podem ter múltiplas categorias
- Categorias aparecem como filtros no blog

### Dicas para Categorias

✅ **Organização Lógica**
- Crie categorias que façam sentido para seus leitores
- Evite criar muitas categorias (5-10 é ideal)
- Use nomes claros e descritivos

✅ **Exemplos de Categorias**
- Vistos Americanos
- Imigração Canadense
- Intercâmbio
- CNV (Comunicação Não-Violenta)
- Dicas e Guias
- Notícias

---

## 8. Gerenciando Autores

Autores são associados aos posts do blog.

### Criar um Novo Autor

1. Clique em **"Author"** no menu lateral
2. Clique em **"Create new"**
3. Preencha:

**Name** (Nome)
- Nome completo do autor
- Exemplo: "Ivan Tagliaferro"

**Slug**
- URL amigável
- Gerado automaticamente

**Image** (Imagem)
- Foto do autor
- Tamanho recomendado: 400x400px (quadrado)
- Formatos: JPG, PNG

**Bio** (Biografia)
- Breve biografia do autor
- Aparece nos posts
- Use o editor de texto rico

### Associar Autor a um Post

1. Ao criar/editar um post, selecione o autor no campo **"Author"**
2. Se o autor não existir, crie primeiro

### Dicas para Autores

✅ **Informações Completas**
- Sempre adicione foto e biografia
- Biografia deve ser profissional mas acessível
- Mantenha informações atualizadas

---

## 9. Boas Práticas com Imagens

### Formatos Aceitos

- **JPG/JPEG** - Melhor para fotos
- **PNG** - Melhor para imagens com transparência
- **WebP** - Formato moderno e otimizado (recomendado)

### Tamanhos Recomendados

**Slides do Hero:**
- 1920x1080px (proporção 16:9)
- Peso máximo: 500KB

**Imagens de Posts:**
- 1200x630px (proporção 1.91:1)
- Peso máximo: 300KB

**Capas de E-books:**
- 600x800px (proporção 3:4)
- Peso máximo: 200KB

**Fotos de Autores:**
- 400x400px (quadrado)
- Peso máximo: 100KB

### Texto Alternativo (Alt Text)

**Sempre preencha o texto alternativo!**

Por quê?
- ✅ Melhora acessibilidade (leitores de tela)
- ✅ Melhora SEO (Google indexa melhor)
- ✅ Aparece se a imagem não carregar

**Como escrever um bom alt text:**
- Seja descritivo mas conciso
- Descreva o que a imagem mostra
- Evite "imagem de" ou "foto de"
- Exemplo ruim: "imagem"
- Exemplo bom: "Ivan Tagliaferro em palestra sobre intercâmbio internacional"

### Otimização de Imagens

**Antes de fazer upload:**
1. Redimensione para o tamanho recomendado
2. Comprima a imagem (use ferramentas como TinyPNG)
3. Renomeie o arquivo com nome descritivo
4. Exemplo: `workshop-cnv-liderancas.jpg` (não `IMG_1234.jpg`)

**Ferramentas Recomendadas:**
- **TinyPNG** - Compressão online
- **Squoosh** - Compressão e redimensionamento
- **Photoshop/GIMP** - Edição profissional

### Hotspot (Ponto Focal)

Ao fazer upload de imagens, você pode definir um "hotspot":
- Clique na imagem após fazer upload
- Clique e arraste para definir o ponto focal
- Isso ajuda o sistema a fazer crop inteligente

---

## 10. Dicas de SEO

### Títulos

✅ **Boas Práticas:**
- Use palavras-chave no início
- Seja específico e descritivo
- Máximo 60 caracteres (ideal)
- Use números quando apropriado

❌ **Evite:**
- Títulos genéricos ("Post 1")
- Títulos muito longos
- Palavras-chave excessivas (keyword stuffing)

### Descrições (Excerpts)

✅ **Boas Práticas:**
- Resuma o conteúdo de forma atraente
- Inclua palavras-chave naturalmente
- Máximo 200 caracteres
- Termine com call-to-action

### URLs (Slugs)

✅ **Boas Práticas:**
- Use palavras-chave relevantes
- Mantenha URLs curtas
- Use hífens, não underscores
- Exemplo: `guia-vistos-americanos` (bom) vs `guia_vistos_americanos` (ruim)

### Imagens

✅ **Boas Práticas:**
- Sempre adicione texto alternativo descritivo
- Use nomes de arquivo descritivos
- Otimize o tamanho das imagens
- Use formatos modernos (WebP quando possível)

### Conteúdo

✅ **Boas Práticas:**
- Use subtítulos (H2, H3) para estrutura
- Quebre texto em parágrafos curtos
- Use listas quando apropriado
- Adicione links internos para outros posts
- Mantenha conteúdo atualizado

---

## 11. Solução de Problemas

### Problema: Não consigo fazer login

**Soluções:**
1. Verifique se está usando o email correto
2. Use "Esqueci minha senha" para redefinir
3. Verifique se recebeu convite de acesso ao projeto
4. Entre em contato com o administrador do projeto

### Problema: Alterações não aparecem no site

**Soluções:**
1. Certifique-se de clicar em **"Publish"** após fazer alterações
2. Aguarde alguns segundos (pode haver cache)
3. Limpe o cache do navegador (Ctrl/Cmd + Shift + R)
4. Verifique se o item está marcado como "Ativo" (para slides)

### Problema: Imagem não carrega

**Soluções:**
1. Verifique o formato do arquivo (JPG, PNG, WebP)
2. Verifique o tamanho (máximo recomendado: 5MB)
3. Tente fazer upload novamente
4. Verifique sua conexão com internet

### Problema: Link do Google Drive não funciona

**Soluções:**
1. Verifique se o arquivo está configurado como "Qualquer pessoa com o link"
2. Use o formato correto: `https://drive.google.com/uc?export=download&id=ID_DO_ARQUIVO`
3. Teste o link em uma aba anônima
4. Considere usar outro serviço de hospedagem

### Problema: Texto muito longo em campos

**Soluções:**
1. Verifique o limite de caracteres do campo
2. Resuma o conteúdo
3. Use campos de descrição para textos mais longos

### Problema: Não encontro um item

**Soluções:**
1. Use a barra de pesquisa no topo
2. Verifique se está na seção correta
3. Verifique filtros ou ordenação
4. Itens podem estar em rascunho (não publicados)

### Problema: Erro ao publicar

**Soluções:**
1. Verifique se todos os campos obrigatórios estão preenchidos
2. Verifique se há erros de validação (aparecem em vermelho)
3. Tente salvar como rascunho primeiro
4. Recarregue a página e tente novamente

---

## 12. Glossário

### CMS (Content Management System)
Sistema de gerenciamento de conteúdo - plataforma que permite gerenciar conteúdo sem conhecimento técnico.

### Sanity Studio
Interface visual do Sanity CMS onde você gerencia o conteúdo.

### Slug
Parte da URL que identifica uma página ou post. Exemplo: em `site.com/blog/meu-post`, o slug é `meu-post`.

### CTA (Call to Action)
Botão ou link que convida o usuário a realizar uma ação. Exemplo: "Falar no WhatsApp", "Baixar E-book".

### Hero
Seção principal da página inicial, geralmente o primeiro elemento visível.

### Hotspot
Ponto focal de uma imagem usado para crop inteligente.

### Publish
Ação de tornar o conteúdo visível no site.

### Draft (Rascunho)
Versão do conteúdo que ainda não foi publicada.

### SEO (Search Engine Optimization)
Otimização para mecanismos de busca (Google, Bing, etc.).

### Alt Text (Texto Alternativo)
Descrição textual de uma imagem para acessibilidade e SEO.

### Featured (Destaque)
Marcação que destaca um item na página inicial ou listagens.

### External Link (Link Externo)
Link que aponta para outro site (abre em nova aba).

### Internal Link (Link Interno)
Link que aponta para outra página do mesmo site.

---

## 📞 Suporte e Recursos

### Documentação Oficial
- **Sanity Docs:** https://www.sanity.io/docs
- **Sanity Guide:** https://www.sanity.io/guides

### Recursos Úteis
- **TinyPNG:** https://tinypng.com (compressão de imagens)
- **Squoosh:** https://squoosh.app (otimização de imagens)
- **Google Drive Sharing:** https://support.google.com/drive/answer/2494822

### Contato Técnico
Se encontrar problemas que não consegue resolver:
1. Documente o problema (screenshots, passos para reproduzir)
2. Entre em contato com o desenvolvedor/suporte técnico
3. Forneça informações sobre:
   - O que você estava tentando fazer
   - O que aconteceu (erro, comportamento inesperado)
   - Mensagens de erro (se houver)

---

## ✅ Checklist de Qualidade

Antes de publicar qualquer conteúdo, verifique:

### Slides do Hero
- [ ] Título claro e impactante (máx. 60 caracteres)
- [ ] Descrição completa (máx. 300 caracteres)
- [ ] Imagem de qualidade com alt text
- [ ] CTAs configurados corretamente
- [ ] Ordem de exibição definida
- [ ] Slide marcado como "Ativo"

### Posts do Blog
- [ ] Título atraente e otimizado para SEO
- [ ] Slug gerado corretamente
- [ ] Autor selecionado
- [ ] Resumo (excerpt) preenchido
- [ ] Imagem principal com alt text
- [ ] Categorias selecionadas
- [ ] Conteúdo formatado corretamente
- [ ] Data de publicação definida

### E-books
- [ ] Título e descrição completos
- [ ] Capa de qualidade com alt text
- [ ] Link do Google Drive funcionando
- [ ] Testado o download

### Compromissos
- [ ] Todas as informações preenchidas
- [ ] Data e hora corretas
- [ ] Link de acesso (se online) testado
- [ ] Status atualizado
- [ ] Marcado como "Público" se necessário

---

## 🎓 Próximos Passos

Agora que você conhece o básico:

1. **Pratique:** Crie alguns slides e posts de teste
2. **Explore:** Experimente diferentes formatações e layouts
3. **Otimize:** Revise conteúdo antigo e melhore com as dicas de SEO
4. **Mantenha:** Atualize conteúdo regularmente para manter o site ativo

---

**Última atualização:** Janeiro 2025

**Versão do Guia:** 1.0

---

*Este guia foi criado especificamente para o site de Ivan Tagliaferro. Para dúvidas ou sugestões de melhoria, entre em contato com o suporte técnico.*
