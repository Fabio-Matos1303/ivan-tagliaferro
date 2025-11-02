import { Button } from "@/app/components/ui/Button";
import { Card } from "@/app/components/ui/Card";
import { getWhatsAppLink, siteConfig } from "@/app/lib/constants";
import { FiMessageCircle, FiAward, FiBook, FiGlobe } from "react-icons/fi";
import Image from "next/image";

export const metadata = {
  title: "Quem Sou | Ivan Tagliaferro",
  description: "Conheça Ivan Tagliaferro, especialista em intercâmbio e educação internacional com anos de experiência ajudando estudantes a realizar seus sonhos.",
};

export default function SobrePage() {
  const whatsappMessage = "Olá Ivan! Gostaria de conhecer mais sobre seu trabalho e experiência.";
  const whatsappUrl = getWhatsAppLink(whatsappMessage);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Quem Sou
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 max-w-2xl mx-auto">
              Especialista em intercâmbio e educação internacional, dedicado a ajudar você a realizar seus sonhos de estudar no exterior.
            </p>
          </div>
        </div>
      </section>

      {/* Biografia */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Ivan Tagliaferro
                </h2>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Com anos de experiência no mercado de educação internacional, dedico minha carreira a ajudar estudantes e profissionais a transformar seus sonhos de intercâmbio em realidade.
                  </p>
                  <p>
                    Minha abordagem é personalizada e humanizada. Entendo que cada jornada é única, e por isso ofereço um acompanhamento completo em todas as etapas do processo, desde a escolha do destino até a conclusão da experiência no exterior.
                  </p>
                  <p>
                    Acredito que estudar no exterior vai além de apenas aprender um novo idioma ou obter um diploma. É uma experiência transformadora que desenvolve habilidades pessoais, profissionais e culturais essenciais para o futuro.
                  </p>
                </div>
              </div>
              <div className="relative">
                {/* Placeholder para foto - será substituído quando houver foto real */}
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] flex items-center justify-center">
                  <FiGlobe className="w-32 h-32 text-white opacity-50" />
                </div>
                {/* Quando houver foto real, usar:
                <Image
                  src="/ivan-foto.jpg"
                  alt="Ivan Tagliaferro"
                  width={500}
                  height={500}
                  className="rounded-2xl object-cover"
                />
                */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credenciais e Experiência */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
              Credenciais e Experiência
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-[var(--primary)]/10 flex items-center justify-center">
                    <FiAward className="w-8 h-8 text-[var(--primary)]" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Certificações
                </h3>
                <p className="text-gray-600">
                  Certificado em educação internacional e processos de intercâmbio.
                </p>
              </Card>

              <Card className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-[var(--primary)]/10 flex items-center justify-center">
                    <FiBook className="w-8 h-8 text-[var(--primary)]" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Anos de Experiência
                </h3>
                <p className="text-gray-600">
                  Mais de uma década ajudando estudantes a alcançar seus objetivos internacionais.
                </p>
              </Card>

              <Card className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-[var(--primary)]/10 flex items-center justify-center">
                    <FiGlobe className="w-8 h-8 text-[var(--primary)]" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Alcance Global
                </h3>
                <p className="text-gray-600">
                  Parcerias com instituições de ensino em diversos países ao redor do mundo.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Valores e Missão */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
              Minha Missão
            </h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p className="text-center leading-relaxed">
                Acredito que cada pessoa merece ter a oportunidade de viver uma experiência educacional internacional. Minha missão é tornar esse processo o mais simples, transparente e enriquecedor possível.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                <Card>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Transparência
                  </h3>
                  <p className="text-gray-600">
                    Comunicação clara e honesta em todas as etapas do processo.
                  </p>
                </Card>
                <Card>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Personalização
                  </h3>
                  <p className="text-gray-600">
                    Cada plano é desenvolvido especialmente para suas necessidades e objetivos.
                  </p>
                </Card>
                <Card>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Comprometimento
                  </h3>
                  <p className="text-gray-600">
                    Acompanhamento dedicado do início ao fim da sua jornada.
                  </p>
                </Card>
                <Card>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Excelência
                  </h3>
                  <p className="text-gray-600">
                    Busco sempre a melhor experiência educacional para cada cliente.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-[var(--primary)] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Vamos conversar sobre seus objetivos?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Estou aqui para ajudar você a transformar seu sonho de intercâmbio em realidade.
          </p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="secondary">
              <FiMessageCircle className="mr-2" />
              Entrar em Contato
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}

