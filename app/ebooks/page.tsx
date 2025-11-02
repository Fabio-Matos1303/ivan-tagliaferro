import { EbooksList } from "@/app/components/sections/EbooksList";
import { Card } from "@/app/components/ui/Card";
import { Button } from "@/app/components/ui/Button";
import { getWhatsAppLink } from "@/app/lib/constants";
import { FiMessageCircle, FiBookOpen } from "react-icons/fi";

export const metadata = {
  title: "E-books Gratuitos | Ivan Tagliaferro",
  description: "Baixe nossos e-books gratuitos e aprenda tudo sobre intercâmbio e educação internacional.",
};

export default function EbooksPage() {
  const whatsappUrl = getWhatsAppLink();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
                <FiBookOpen className="w-10 h-10" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              E-books Gratuitos
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 max-w-2xl mx-auto">
              Materiais exclusivos para ajudá-lo em sua jornada de intercâmbio
            </p>
          </div>
        </div>
      </section>

      {/* Lista de E-books */}
      <EbooksList />

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Precisa de Ajuda Personalizada?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Além dos e-books, oferecemos consultoria personalizada para ajudar você em cada etapa do processo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="secondary">
                    <FiMessageCircle className="mr-2" />
                    Falar no WhatsApp
                  </Button>
                </a>
                <a href="/contato">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[var(--primary)]">
                    Enviar Mensagem
                  </Button>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

