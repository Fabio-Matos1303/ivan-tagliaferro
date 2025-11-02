import { Button } from "@/app/components/ui/Button";
import { Card } from "@/app/components/ui/Card";
import { getWhatsAppLink, siteConfig } from "@/app/lib/constants";
import { FiMessageCircle, FiCheck, FiDownload, FiBookOpen, FiGlobe, FiBriefcase, FiHome, FiUsers } from "react-icons/fi";

export const metadata = {
  title: "Nossos Serviços | Ivan Tagliaferro",
  description: "Conheça todos os serviços oferecidos para sua jornada de intercâmbio e educação internacional.",
};

export default function ServicosPage() {
  const whatsappMessage = "Olá! Gostaria de saber mais sobre os serviços oferecidos.";
  const whatsappUrl = getWhatsAppLink(whatsappMessage);

  // Lista de serviços - será substituída por dados do CMS quando configurado
  const servicos = [
    {
      icon: <FiGlobe className="w-8 h-8" />,
      title: "Orientação para Intercâmbio",
      description: "Acompanhamento completo desde a escolha do destino até o retorno, com orientação personalizada em cada etapa.",
      features: [
        "Seleção de destino ideal",
        "Orientações culturais",
        "Suporte durante toda a experiência",
        "Acompanhamento pós-retorno"
      ]
    },
    {
      icon: <FiBookOpen className="w-8 h-8" />,
      title: "Vistos e Documentação",
      description: "Assistência completa com toda a documentação necessária para sua viagem e estudos no exterior.",
      features: [
        "Processamento de vistos",
        "Tradução juramentada",
        "Documentação acadêmica",
        "Apostilamento de Haia"
      ]
    },
    {
      icon: <FiBriefcase className="w-8 h-8" />,
      title: "Intercâmbio Profissional",
      description: "Programas voltados para profissionais que desejam desenvolver suas carreiras internacionalmente.",
      features: [
        "Work and Travel",
        "Estágios profissionais",
        "Programas de trainees",
        "Voluntariado internacional"
      ]
    },
    {
      icon: <FiHome className="w-8 h-8" />,
      title: "Hospedagem e Suporte",
      description: "Auxílio na busca e seleção de acomodação adequada para sua experiência no exterior.",
      features: [
        "Homestay (casa de família)",
        "Residências estudantis",
        "Apartamentos compartilhados",
        "Orientação sobre localização"
      ]
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: "Consultoria Familiar",
      description: "Acompanhamento e orientação para famílias que desejam viver experiências educacionais no exterior.",
      features: [
        "Programas familiares",
        "Educação para crianças",
        "Orientação para pais",
        "Planejamento financeiro"
      ]
    },
    {
      icon: <FiGlobe className="w-8 h-8" />,
      title: "Aconselhamento Acadêmico",
      description: "Orientações sobre cursos, universidades e programas educacionais em diversos países.",
      features: [
        "Seleção de universidades",
        "Processo de admissão",
        "Bolsas de estudo",
        "Equivalência de diplomas"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Nossos Serviços
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 max-w-2xl mx-auto">
              Soluções completas para sua jornada de intercâmbio e educação internacional
            </p>
          </div>
        </div>
      </section>

      {/* Lista de Serviços */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicos.map((servico, index) => (
                <Card key={index} hover className="h-full flex flex-col">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] mb-6">
                    {servico.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {servico.title}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    {servico.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {servico.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <FiCheck className="w-5 h-5 text-[var(--primary)] mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-auto">
                    <Button variant="outline" className="w-full">
                      Saber Mais
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

