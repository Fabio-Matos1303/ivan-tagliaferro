import { Button } from "@/app/components/ui/Button";
import { getWhatsAppLink } from "@/app/lib/constants";
import { FiMessageCircle } from "react-icons/fi";
import { HeroCarousel, HeroSlide } from "@/app/components/sections/HeroCarousel";
import { AlanaAssistant } from "@/app/components/sections/AlanaAssistant";
import { getHeroSlides } from "@/app/lib/sanity/queries";
import { urlFor } from "@/sanity/lib/image";

// Revalidar a página a cada 60 segundos para buscar novos slides
export const revalidate = 60;

export default async function Home() {
  const whatsappMessage = "Olá! Gostaria de saber mais sobre os serviços de intercâmbio.";
  const whatsappUrl = getWhatsAppLink(whatsappMessage);

  // Buscar slides do Sanity CMS
  let sanitySlides: any[] = [];
  try {
    sanitySlides = await getHeroSlides();
  } catch (error) {
    console.error("Erro ao buscar slides do Sanity:", error);
  }

  // Converter slides do Sanity para o formato do componente
  const heroSlides: HeroSlide[] = sanitySlides.length > 0
    ? sanitySlides.map((slide: any) => ({
        id: slide._id,
        title: slide.title,
        description: slide.description,
        image: slide.image ? urlFor(slide.image).width(1920).height(1080).url() : undefined,
        imageAlt: slide.image?.alt || slide.title,
        ctaPrimary: slide.ctaPrimary ? {
          text: slide.ctaPrimary.text,
          href: slide.ctaPrimary.href,
          external: slide.ctaPrimary.external || false,
        } : undefined,
        ctaSecondary: slide.ctaSecondary ? {
          text: slide.ctaSecondary.text,
          href: slide.ctaSecondary.href,
          external: slide.ctaSecondary.external || false,
        } : undefined,
      }))
    : [
        // Fallback: slides estáticos caso não haja slides no CMS
        {
          id: "1",
          title: "Realize seu sonho de estudar no exterior",
          description: "Consultoria especializada em intercâmbio e educação internacional. Acompanhamento personalizado em cada etapa da sua jornada.",
          ctaPrimary: {
            text: "Falar no WhatsApp",
            href: whatsappUrl,
            external: true,
          },
          ctaSecondary: {
            text: "Baixar E-book Grátis",
            href: "/ebooks",
            external: false,
          },
        },
        {
          id: "2",
          title: "Experiência que transforma vidas",
          description: "Mais de 48.896 experiências de ensino no exterior. Ajudamos você a encontrar o destino perfeito para seus objetivos acadêmicos e profissionais.",
          ctaPrimary: {
            text: "Conheça Nossos Serviços",
            href: "/servicos",
            external: false,
          },
          ctaSecondary: {
            text: "Falar no WhatsApp",
            href: whatsappUrl,
            external: true,
          },
        },
        {
          id: "3",
          title: "Acompanhamento 24/7 em toda sua jornada",
          description: "Suporte completo desde o planejamento até o retorno. Documentação, visto, acomodação e muito mais. Estamos com você em cada passo.",
          ctaPrimary: {
            text: "Falar no WhatsApp",
            href: whatsappUrl,
            external: true,
          },
          ctaSecondary: {
            text: "Conheça Nossa História",
            href: "/sobre",
            external: false,
          },
        },
      ];

  return (
    <div className="min-h-screen">
      {/* Hero Section com Carrossel */}
      <HeroCarousel
        slides={heroSlides}
        autoPlay={true}
        autoPlayInterval={6000}
        showIndicators={true}
        showArrows={true}
      />

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

      {/* Alana Assistant */}
      <AlanaAssistant />

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
