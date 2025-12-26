import { Button } from "@/app/components/ui/Button";
import { Card } from "@/app/components/ui/Card";
import { getWhatsAppLink, siteConfig } from "@/app/lib/constants";
import { AlanaAssistant } from "@/app/components/sections/AlanaAssistant";
import { FiMessageCircle, FiCheck, FiDownload, FiBookOpen, FiGlobe, FiBriefcase, FiHome, FiUsers, FiShare2, FiFileText, FiMapPin, FiHeart } from "react-icons/fi";

export const metadata = {
  title: "Nossos Serviços | Ivan Tagliaferro",
  description: "Conheça todos os serviços especializados em educação internacional: networking global, assessoria para vistos, imigração canadense, consultoria de intercâmbio e mentoria em CNV.",
};

export default function ServicosPage() {
  const whatsappMessage = "Olá! Gostaria de saber mais sobre os serviços oferecidos.";
  const whatsappUrl = getWhatsAppLink(whatsappMessage);

  // Lista de serviços com conteúdo revisado
  const servicos = [
    {
      icon: <FiShare2 className="w-8 h-8" />,
      title: "Networking Global para Instituições de Ensino",
      description: "Expansão de presença internacional e parcerias estratégicas para escolas e faculdades.",
      features: [
        "Expansão de presença internacional e parcerias estratégicas",
        "Treinamento e gestão de redes de representantes globais",
        "Curadoria de eventos e conexões de alto nível no setor educacional"
      ],
      fullDescription: "Com mais de 20 anos de experiência e cargos de liderança em instituições internacionais, ofereço uma consultoria especializada para escolas e faculdades que desejam ampliar sua visibilidade global. Meu trabalho consiste em identificar oportunidades de mercado, estabelecer parcerias sólidas entre instituições e treinar agências para que representem sua marca com excelência. Atuo como um braço estratégico internacional, utilizando meu networking em dezenas de países para criar pontes que resultam em crescimento sustentável e autoridade de marca no cenário educacional mundial."
    },
    {
      icon: <FiFileText className="w-8 h-8" />,
      title: "Assessoria para Vistos Americanos",
      description: "Preparação completa de dossiês e documentação para maximizar taxas de aprovação.",
      features: [
        "Indicação de profissionais com técnica minuciosa para maximizar taxas de aprovação",
        "Preparação completa de dossiês e documentação exigida",
        "Suporte especializado para vistos de turismo, estudos e trabalho"
      ],
      fullDescription: "O processo de obtenção de vistos para os Estados Unidos é rigoroso e exige precisão absoluta. Nossa assessoria remove a complexidade burocrática, oferecendo um acompanhamento detalhado em cada etapa do formulário e na organização dos documentos comprobatórios. O objetivo é garantir que cada processo seja apresentado de forma clara e profissional às autoridades consulares, reduzindo riscos de negativa e proporcionando a tranquilidade necessária para que você foque apenas no planejamento da sua viagem ou dos seus estudos."
    },
    {
      icon: <FiMapPin className="w-8 h-8" />,
      title: "Assessoria para Imigração Canadense",
      description: "Representação oficial através da Maritimes Immigration em Halifax, Nova Scotia.",
      features: [
        "Identificação do melhor caminho migratório (Express Entry, PNP, etc.)",
        "Representação oficial através da Maritimes Immigration em Halifax",
        "Planejamento estratégico para residência permanente e cidadania"
      ],
      fullDescription: "Imigrar para o Canadá é um projeto de vida que exige uma estratégia personalizada e amparo legal. Através da nossa representação direta com a Maritimes Immigration, sediada em Halifax, Nova Scotia, conecto você a especialistas licenciados de imigração canadense com total segurança. Analisamos seu perfil profissional e acadêmico para identificar o programa mais adequado às suas metas, oferecendo um suporte que vai desde o planejamento inicial em solo brasileiro até a sua efetiva integração no mercado de trabalho e na sociedade canadense."
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: "Conexão com os Melhores Consultores de Intercâmbio",
      description: "Seleção rigorosa de agências com selos de qualidade e segurança.",
      features: [
        "Seleção rigorosa de agências com selos de qualidade e segurança",
        "Indicação isenta baseada nas necessidades reais do estudante",
        "Elo de confiança entre o cliente e os melhores operadores do mercado"
      ],
      fullDescription: "Meu papel aqui é ser o seu filtro de segurança em um mercado saturado de opções. Nesse sentido, tenho a isenção necessária para indicar apenas as agências e consultores que possuem histórico comprovado de excelência e ética. Ao utilizar nossa mentoria, você não corre riscos com empresas amadoras; eu faço a ponte entre o seu sonho e os profissionais mais qualificados do mundo, garantindo que o seu investimento seja direcionado para quem realmente entrega o que promete."
    },
    {
      icon: <FiBookOpen className="w-8 h-8" />,
      title: "Conexão com Universidades e Colleges Internacionais",
      description: "Aconselhamento acadêmico para graduação, pós e especializações em instituições de elite.",
      features: [
        "Conexões para aconselhamento acadêmico para graduação, pós e especializações",
        "Acesso a instituições de elite e programas de Pathway",
        "Suporte na escolha da instituição alinhada ao plano de carreira"
      ],
      fullDescription: "Escolher uma universidade no exterior é uma decisão que impacta todo o seu futuro profissional. Minha consultoria acadêmica utiliza conexões diretas com os principais Colleges e Universidades globais para encontrar o curso ideal para o seu perfil. Auxílio na compreensão dos requisitos de admissão, processos de equivalência e na escolha de instituições que ofereçam o melhor retorno sobre o investimento, garantindo que sua jornada acadêmica internacional seja o diferencial competitivo que o mercado de trabalho global exige."
    },
    {
      icon: <FiHeart className="w-8 h-8" />,
      title: "Mentoria de CNV para Indivíduos e Empresas",
      description: "Treinamentos para lideranças e equipes baseados na empatia e comunicação não-violenta.",
      features: [
        "Treinamentos para lideranças e equipes baseados na empatia",
        "Mediação de conflitos e comunicação em ambientes multiculturais",
        "Desenvolvimento de inteligência emocional para processos de mudança"
      ],
      fullDescription: "A Comunicação Não-Violenta (CNV) é a ferramenta que humaniza as relações e potencializa resultados, seja em um processo de intercâmbio ou no ambiente corporativo. Como pesquisador e facilitador de CNV, ofereço treinamentos que ensinam a separar observações de julgamentos e a identificar necessidades por trás de comportamentos. Para empresas, isso se traduz em ambientes mais produtivos e menos conflituosos; para indivíduos, significa a capacidade de se comunicar com clareza e empatia em qualquer cultura, transformando desafios relacionais em conexões profundas."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Serviços Especializados em Educação Internacional
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 max-w-2xl mx-auto">
              Soluções completas e personalizadas para sua jornada de intercâmbio, imigração e desenvolvimento internacional
            </p>
          </div>
        </div>
      </section>

      {/* Lista de Serviços */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
              {servicos.map((servico, index) => (
                <Card key={index} hover className="flex flex-col">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] mb-6">
                    {servico.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {servico.title}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    {servico.description}
                  </p>
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-gray-900 mb-3">O que oferecemos:</p>
                    <ul className="space-y-2">
                      {servico.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <FiCheck className="w-5 h-5 text-[var(--primary)] mr-2 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <details className="mb-4">
                    <summary className="cursor-pointer text-sm font-semibold text-[var(--primary)] hover:text-[var(--primary-dark)] mb-3">
                      Saiba Mais
                    </summary>
                    <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                      {servico.fullDescription}
                    </p>
                  </details>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-auto">
                    <Button variant="outline" className="w-full">
                      <FiMessageCircle className="mr-2" />
                      Falar Conosco
                    </Button>
                  </a>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* E-books Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Materiais Gratuitos
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Baixe nossos e-books gratuitos e aprenda mais sobre intercâmbio e educação internacional.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {/* Placeholder para e-books - será substituído por dados do CMS */}
              <Card className="text-center">
                <div className="flex justify-center mb-4">
                  <FiDownload className="w-12 h-12 text-[var(--primary)]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Guia Completo de Intercâmbio
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Tudo que você precisa saber para começar
                </p>
                <Button size="sm" variant="outline" className="w-full">
                  Baixar Grátis
                </Button>
              </Card>
              <Card className="text-center">
                <div className="flex justify-center mb-4">
                  <FiDownload className="w-12 h-12 text-[var(--primary)]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Como Escolher seu Destino
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Dicas e orientações importantes
                </p>
                <Button size="sm" variant="outline" className="w-full">
                  Baixar Grátis
                </Button>
              </Card>
              <Card className="text-center">
                <div className="flex justify-center mb-4">
                  <FiDownload className="w-12 h-12 text-[var(--primary)]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Documentação Necessária
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Checklist completo de documentos
                </p>
                <Button size="sm" variant="outline" className="w-full">
                  Baixar Grátis
                </Button>
              </Card>
            </div>
            <a href="/ebooks">
              <Button variant="outline">
                Ver Todos os E-books
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Alana Assistant */}
      <AlanaAssistant />

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-[var(--primary)] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Pronto para começar sua jornada?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Entre em contato e descubra qual serviço é ideal para você.
          </p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="secondary">
              <FiMessageCircle className="mr-2" />
              Falar Conosco
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}

