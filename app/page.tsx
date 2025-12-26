import { Button } from "@/app/components/ui/Button";
import { Card } from "@/app/components/ui/Card";
import { getWhatsAppLink } from "@/app/lib/constants";
import { FiMessageCircle, FiCheck, FiBookOpen, FiUsers, FiShare2, FiFileText, FiMapPin, FiHeart } from "react-icons/fi";
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
        image: slide.image ? urlFor(slide.image).width(1920).fit('max').url() : undefined,
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {/* Networking Global */}
            <Card hover className="flex flex-col h-full">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] mb-4">
                <FiShare2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Networking Global para Instituições de Ensino
              </h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Expansão de presença internacional e parcerias estratégicas para escolas e faculdades.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start text-sm text-gray-600">
                  <FiCheck className="w-4 h-4 text-[var(--primary)] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Parcerias estratégicas internacionais</span>
                </li>
                <li className="flex items-start text-sm text-gray-600">
                  <FiCheck className="w-4 h-4 text-[var(--primary)] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Gestão de redes de representantes</span>
                </li>
              </ul>
              <a href="/servicos" className="mt-auto">
                <Button variant="outline" className="w-full">
                  Saiba Mais
                </Button>
              </a>
            </Card>

            {/* Vistos Americanos */}
            <Card hover className="flex flex-col h-full">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] mb-4">
                <FiFileText className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Assessoria para Vistos Americanos
              </h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Preparação completa de dossiês e documentação para maximizar taxas de aprovação.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start text-sm text-gray-600">
                  <FiCheck className="w-4 h-4 text-[var(--primary)] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Maximização de taxas de aprovação</span>
                </li>
                <li className="flex items-start text-sm text-gray-600">
                  <FiCheck className="w-4 h-4 text-[var(--primary)] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Suporte para turismo, estudos e trabalho</span>
                </li>
              </ul>
              <a href="/servicos" className="mt-auto">
                <Button variant="outline" className="w-full">
                  Saiba Mais
                </Button>
              </a>
            </Card>

            {/* Imigração Canadense */}
            <Card hover className="flex flex-col h-full">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] mb-4">
                <FiMapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Assessoria para Imigração Canadense
              </h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Representação oficial através da Maritimes Immigration em Halifax, Nova Scotia.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start text-sm text-gray-600">
                  <FiCheck className="w-4 h-4 text-[var(--primary)] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Express Entry, PNP e outros programas</span>
                </li>
                <li className="flex items-start text-sm text-gray-600">
                  <FiCheck className="w-4 h-4 text-[var(--primary)] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Planejamento para residência permanente</span>
                </li>
              </ul>
              <a href="/servicos" className="mt-auto">
                <Button variant="outline" className="w-full">
                  Saiba Mais
                </Button>
              </a>
            </Card>

            {/* Consultores de Intercâmbio */}
            <Card hover className="flex flex-col h-full">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] mb-4">
                <FiUsers className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Conexão com os Melhores Consultores de Intercâmbio
              </h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Seleção rigorosa de agências com selos de qualidade e segurança.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start text-sm text-gray-600">
                  <FiCheck className="w-4 h-4 text-[var(--primary)] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Agências com selos de qualidade</span>
                </li>
                <li className="flex items-start text-sm text-gray-600">
                  <FiCheck className="w-4 h-4 text-[var(--primary)] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Indicação isenta e personalizada</span>
                </li>
              </ul>
              <a href="/servicos" className="mt-auto">
                <Button variant="outline" className="w-full">
                  Saiba Mais
                </Button>
              </a>
            </Card>

            {/* Universidades e Colleges */}
            <Card hover className="flex flex-col h-full">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] mb-4">
                <FiBookOpen className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Conexão com Universidades e Colleges Internacionais
              </h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Aconselhamento acadêmico para graduação, pós e especializações em instituições de elite.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start text-sm text-gray-600">
                  <FiCheck className="w-4 h-4 text-[var(--primary)] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Instituições de elite e programas Pathway</span>
                </li>
                <li className="flex items-start text-sm text-gray-600">
                  <FiCheck className="w-4 h-4 text-[var(--primary)] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Aconselhamento acadêmico personalizado</span>
                </li>
              </ul>
              <a href="/servicos" className="mt-auto">
                <Button variant="outline" className="w-full">
                  Saiba Mais
                </Button>
              </a>
            </Card>

            {/* CNV */}
            <Card hover className="flex flex-col h-full">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] mb-4">
                <FiHeart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Mentoria de CNV para Indivíduos e Empresas
              </h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Treinamentos para lideranças e equipes baseados na empatia e comunicação não-violenta.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start text-sm text-gray-600">
                  <FiCheck className="w-4 h-4 text-[var(--primary)] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Treinamentos para lideranças e equipes</span>
                </li>
                <li className="flex items-start text-sm text-gray-600">
                  <FiCheck className="w-4 h-4 text-[var(--primary)] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Mediação de conflitos multiculturais</span>
                </li>
              </ul>
              <a href="/servicos" className="mt-auto">
                <Button variant="outline" className="w-full">
                  Saiba Mais
                </Button>
              </a>
            </Card>
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
              Por Que Escolher Nossos Serviços?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-[var(--primary)] mb-2">
                + 25 mil
              </div>
              <p className="text-gray-600">Estudantes apoiados</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[var(--primary)] mb-2">
                + 20 anos
              </div>
              <p className="text-gray-600">De experiência em Educação Internacional</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[var(--primary)] mb-2">
                + 100 países
              </div>
              <p className="text-gray-600">Com networking ativo</p>
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
