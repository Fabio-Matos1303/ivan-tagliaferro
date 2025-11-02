Este backlog detalha as funcionalidades e tarefas necessárias para o desenvolvimento da Landing Page de Intercâmbio, com base nos requisitos fornecidos. Ele é organizado por épicos (grandes funcionalidades) e histórias de usuário, priorizando a entrega de valor ao cliente.

## Épicos e Histórias de Usuário

### Épico: Estrutura Base do Site

- **US1: Como usuário, quero ver a página inicial para entender rapidamente o propósito do site.**
    - **Critérios de Aceitação:**
        - A seção Hero é exibida com banner/imagem, título e breve descrição.
        - Os serviços oferecidos são destacados de forma clara.
        - Uma chamada para download de e-books é visível.
        - Um botão de contato via WhatsApp está presente e funcional.
- **US2: Como usuário, quero saber mais sobre o Ivan para confiar em seus serviços.**
    - **Critérios de Aceitação:**
        - A página "Quem Sou" exibe informações sobre o Ivan.
        - Há conteúdo que transmite credibilidade e experiência.
- **US3: Como usuário, quero ver os serviços oferecidos para escolher o que preciso.**
    - **Critérios de Aceitação:**
        - A página "Nossos Serviços" lista todos os serviços.
        - Cada serviço possui links adicionais (se aplicável).
        - Uma área de download de e-books está disponível (direto ou via formulário).
- **US4: Como usuário, quero entrar em contato facilmente para tirar minhas dúvidas ou solicitar um serviço.**
    - **Critérios de Aceitação:**
        - A página "Contato" possui um formulário de contato integrado ao e-mail.
        - Um botão de contato direto via WhatsApp está presente e funcional.
        - Um botão de contato direto via e-mail está presente e funcional.

### Épico: Gerenciamento de Conteúdo (CMS)

- **US5: Como Ivan, quero gerenciar o conteúdo do site (textos, imagens, e-books) de forma fácil e intuitiva para manter as informações atualizadas.**
    - **Critérios de Aceitação:**
        - O CMS permite a edição de textos em todas as páginas.
        - O CMS permite o upload e gerenciamento de imagens.
        - O CMS permite o upload e gerenciamento de arquivos de e-books.
        - A interface do CMS é amigável e não exige conhecimentos técnicos avançados.
- **US6: Como Ivan, quero gerenciar os posts do blog (cadastro, edição, exclusão) para manter o conteúdo relevante e engajar meu público.**
    - **Critérios de Aceitação:**
        - O CMS possui uma funcionalidade para criar novos posts com título, resumo, imagem e conteúdo completo.
        - O CMS permite editar posts existentes.
        - O CMS permite excluir posts.
- **US7: Como usuário, quero ver os posts do blog para me manter informado e aprender mais sobre intercâmbio.**
    - **Critérios de Aceitação:**
        - A página "Blog" lista os posts com título, resumo e imagem.
        - Cada post possui uma página individual com seu conteúdo completo.

### Épico: Configuração e Otimização

- **US8: Como desenvolvedor, quero configurar o site na hospedagem GoDaddy para que ele esteja online e acessível.**
    - **Critérios de Aceitação:**
        - O site está configurado e funcionando na hospedagem GoDaddy.
        - O domínio está apontando corretamente para o site.
- **US9: Como desenvolvedor, quero implementar SEO básico para que o site seja encontrado nos motores de busca.**
    - **Critérios de Aceitação:**
        - Meta tags (título e descrição) são configuradas para cada página.
        - O site é indexável por motores de busca.
- **US10: Como usuário, quero que o site carregue rapidamente para ter uma boa experiência de navegação.**
    - **Critérios de Aceitação:**
        - O site carrega em até 3 segundos em conexões padrão de internet.
        - Imagens e outros recursos são otimizados para performance.
- **US11: Como usuário, quero acessar o site de qualquer dispositivo (desktop, tablet, mobile) para ter uma experiência consistente.**
    - **Critérios de Aceitação:**
        - O design do site é responsivo e se adapta a diferentes tamanhos de tela.
- **US12: Como usuário, quero que o site funcione em diferentes navegadores para garantir a compatibilidade.**
    - **Critérios de Aceitação:**
        - O site é compatível com Chrome, Edge, Firefox e Safari.

### Épico: Segurança e Manutenção

- **US13: Como usuário, quero que minhas informações estejam seguras ao navegar no site.**
    - **Critérios de Aceitação:**
        - O site utiliza certificado SSL (HTTPS).
        - Formulários são protegidos contra spam (ex: reCAPTCHA).
- **US14: Como desenvolvedor, quero que o código seja fácil de manter e ajustar para futuras modificações.**
    - **Critérios de Aceitação:**
        - O código é estruturado e organizado.
        - O CMS permite atualizações de conteúdo pelo cliente sem intervenção do desenvolvedor.
- **US15: Como Ivan, quero ter suporte pós-entrega para ajustes e dúvidas.**
    - **Critérios de Aceitação:**
        - 60 dias de suporte após a entrega para ajustes, correções e dúvidas.

## Recomendações de CMS para Next.js (Headless CMS)

Considerando o uso de **Next.js** e a necessidade de um CMS de **fácil usabilidade para o cliente** e **gerenciamento de blog**, as seguintes opções de Headless CMS são altamente recomendadas:

### 1. Strapi

**Descrição:** Strapi é um CMS headless de código aberto e auto-hospedável que oferece uma interface de administração amigável e altamente personalizável. Ele permite que os desenvolvedores criem APIs RESTful ou GraphQL para seus dados, enquanto os editores de conteúdo gerenciam o conteúdo através de um painel intuitivo.

**Prós:**

- **Código Aberto e Flexível:** Total controle sobre os dados e a infraestrutura. Pode ser auto-hospedado, o que é uma vantagem para alguns clientes.
- **Interface de Usuário Intuitiva:** O painel de administração é bem projetado e fácil de usar para não-desenvolvedores, ideal para o Ivan gerenciar textos, imagens e posts do blog.
- **Gerenciamento de Blog:** Possui funcionalidades robustas para criação e gerenciamento de posts, categorias e tags, atendendo perfeitamente ao requisito de blog.
- **Personalização:** Permite criar tipos de conteúdo personalizados (collections types e single types) que se encaixam exatamente nos requisitos do projeto (e-books, serviços, etc.).
- **Comunidade Ativa:** Grande comunidade e documentação extensa, facilitando a resolução de problemas e o aprendizado.
- **Integração com Next.js:** Excelente integração com Next.js via APIs REST ou GraphQL, permitindo a construção de sites estáticos (SSG) ou renderizados no servidor (SSR).

**Contras:**

- **Curva de Aprendizagem para Configuração:** A configuração inicial e a modelagem de dados podem exigir um pouco mais de conhecimento técnico por parte do desenvolvedor.
- **Hospedagem:** Requer que o cliente ou desenvolvedor gerencie a hospedagem do CMS separadamente do frontend Next.js.

### 2. [Sanity.io](http://sanity.io/)

**Descrição:** [Sanity.io](http://sanity.io/) é uma plataforma de conteúdo unificada (Content Lake) e um CMS headless que oferece um editor de conteúdo em tempo real e altamente personalizável, o Sanity Studio. Ele é conhecido por sua flexibilidade na modelagem de dados e pela capacidade de entregar conteúdo para qualquer plataforma.

**Prós:**

- **Editor de Conteúdo Poderoso (Sanity Studio):** O Sanity Studio é um editor em React que pode ser customizado para atender às necessidades exatas do cliente, tornando a experiência de edição muito intuitiva e agradável para o Ivan.
- **Modelagem de Dados Flexível:** Permite definir esquemas de conteúdo complexos e aninhados, ideal para gerenciar diferentes tipos de conteúdo como e-books, serviços e posts de blog.
- **Colaboração em Tempo Real:** Ótimo para equipes, permitindo que várias pessoas editem o conteúdo simultaneamente.
- **APIs Poderosas:** Oferece APIs GraphQL e GROQ (uma linguagem de consulta própria) para buscar dados de forma eficiente.
- **Integração com Next.js:** Uma das melhores integrações com Next.js, com muitos exemplos e bibliotecas para facilitar o desenvolvimento.
- **Hospedagem Gerenciada:** O [Sanity.io](http://sanity.io/) cuida da hospedagem do CMS, simplificando a infraestrutura para o cliente.

**Contras:**

- **Custo:** Embora tenha um plano gratuito generoso, projetos maiores podem incorrer em custos à medida que o uso de dados e largura de banda aumenta.
- **Curva de Aprendizagem para Desenvolvedores:** A linguagem GROQ e a customização do Studio podem ter uma curva de aprendizado inicial para desenvolvedores não familiarizados.

### 3. Payload CMS

**Descrição:** Payload CMS é um CMS headless de código aberto construído com Node.js, Express e React. Ele se destaca por ser um CMS e um framework de aplicação ao mesmo tempo, oferecendo uma experiência de desenvolvimento moderna e um painel de administração elegante.

**Prós:**

- **Desenvolvedor-Friendly e User-Friendly:** Projetado para ser fácil de usar tanto para desenvolvedores quanto para editores de conteúdo. O painel de administração é moderno e intuitivo.
- **Baseado em Node.js e React:** Se você já está trabalhando com Next.js (que usa React), a curva de aprendizado para o Payload será menor.
- **Tipagem Forte (TypeScript):** Oferece tipagem TypeScript out-of-the-box, o que melhora a experiência de desenvolvimento e a robustez do código.
- **Gerenciamento de Mídia:** Possui um sistema robusto para upload e gerenciamento de arquivos de mídia, essencial para imagens e e-books.
- **Flexibilidade:** Permite criar tipos de conteúdo personalizados e campos complexos.
- **Integração com Next.js:** Excelente integração, com a possibilidade de usar o Payload como backend para o Next.js.

**Contras:**

- **Comunidade Menor:** Comparado a Strapi ou Sanity, a comunidade é um pouco menor, mas está crescendo rapidamente.
- **Auto-hospedagem:** Assim como o Strapi, requer auto-hospedagem, o que adiciona uma camada de complexidade para o cliente em termos de infraestrutura.

## Conclusão sobre CMS

Para o seu projeto em Next.js, considerando a **facilidade de uso para o cliente** e a necessidade de **gerenciamento de blog**, o **Strapi** e o [**Sanity.io**](http://sanity.io/) são as opções mais equilibradas. O **Payload CMS** também é uma excelente alternativa, especialmente se você busca uma solução mais integrada com o ecossistema Node.js/React e não se importa com a auto-hospedagem.

- Se a **auto-hospedagem** e o **controle total** forem prioridades, **Strapi** ou **Payload CMS** são ideais.
- Se a **facilidade de uso no painel de administração** e a **hospedagem gerenciada** forem mais importantes, [**Sanity.io**](http://sanity.io/) se destaca.

Recomendo discutir essas opções com o cliente, Ivan, para entender qual modelo de hospedagem e nível de controle ele prefere para o CMS.

## Referências

- [1] [nextjstemplates.com](http://nextjstemplates.com/). (2025, April 9). *21+ Best Headless CMS for Next.js in 2025*. Disponível em: https://nextjstemplates.com/blog/headless-cms-nextjs
- [2] [Sanity.io](http://sanity.io/). *The Best Headless CMS for Next.JS Apps*. Disponível em: https://www.sanity.io/nextjs-cms
- [3] Strapi. *The best open-source headless CMS for Next.js*. Disponível em: https://strapi.io/integrations/nextjs-cms
- [4] Reddit. (2024, May 1). *What is the headless CMS you use for blogs in your next js ...*. Disponível em: https://www.reddit.com/r/nextjs/comments/1da3nu1/what_is_the_headless_cms_you_use_for_blogs_in/
- [5] Hygraph. (2025, May 19). *10 best CMSs for Next.js in 2025*. Disponível em: https://hygraph.com/blog/nextjs-cms