import { Button } from "@/app/components/ui/Button";
import { getWhatsAppLink, siteConfig } from "@/app/lib/constants";
import { FiMessageCircle, FiDownload } from "react-icons/fi";

export default function Home() {
  const whatsappMessage = "Olá! Gostaria de saber mais sobre os serviços de intercâmbio.";
  const whatsappUrl = getWhatsAppLink(whatsappMessage);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Realize seu sonho de estudar no exterior
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 mb-8 leading-relaxed">
              Consultoria especializada em intercâmbio e educação internacional. 
              Acompanhamento personalizado em cada etapa da sua jornada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  <FiMessageCircle className="mr-2" />
                  Falar no WhatsApp
                </Button>
              </a>
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-[var(--primary)]">
                <FiDownload className="mr-2" />
                Baixar E-book Grátis
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Preview */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Oferecemos soluções completas para sua jornada de intercâmbio
            </p>
          </div>
          {/* Cards de serviços serão adicionados quando o CMS estiver configurado */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder - será substituído por dados do CMS */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Orientação Personalizada
              </h3>
              <p className="text-gray-600">
                Acompanhamento individualizado em cada etapa do processo.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Seleção de Destinos
              </h3>
              <p className="text-gray-600">
                Encontre o destino perfeito para seus objetivos.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Documentação
              </h3>
              <p className="text-gray-600">
                Ajuda com toda a burocracia necessária.
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <a href="/servicos">
              <Button variant="outline">
                Ver Todos os Serviços
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Por Que Escolher */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Por Que Escolher Nossos Serviços
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-[var(--primary)] mb-2">
                48.896+
              </div>
              <p className="text-gray-600">Experiências de ensino no exterior</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[var(--primary)] mb-2">
                100%
              </div>
              <p className="text-gray-600">Acompanhamento personalizado</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[var(--primary)] mb-2">
                24/7
              </div>
              <p className="text-gray-600">Suporte durante toda a jornada</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 lg:py-24 bg-[var(--primary)] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Pronto para começar sua jornada?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar você a realizar seu sonho.
          </p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="secondary">
              <FiMessageCircle className="mr-2" />
              Falar Conosco Agora
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
