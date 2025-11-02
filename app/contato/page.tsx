import { ContactForm } from "@/app/components/sections/ContactForm";
import { Card } from "@/app/components/ui/Card";
import { getWhatsAppLink, siteConfig } from "@/app/lib/constants";
import { FiMessageCircle, FiMail, FiPhone, FiMapPin, FiClock } from "react-icons/fi";
import { Button } from "@/app/components/ui/Button";

export const metadata = {
  title: "Contato | Ivan Tagliaferro",
  description: "Entre em contato conosco para saber mais sobre nossos serviços de intercâmbio e educação internacional.",
};

export default function ContatoPage() {
  const whatsappMessage = "Olá! Gostaria de entrar em contato.";
  const whatsappUrl = getWhatsAppLink(whatsappMessage);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Entre em Contato
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 max-w-2xl mx-auto">
              Estamos aqui para ajudar você a realizar seu sonho de intercâmbio
            </p>
          </div>
        </div>
      </section>

      {/* Formulário e Informações */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Formulário */}
              <div className="lg:col-span-2">
                <Card>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Envie sua Mensagem
                  </h2>
                  <ContactForm />
                </Card>
              </div>

              {/* Informações de Contato */}
              <div className="space-y-6">
                <Card>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    Outras Formas de Contato
                  </h3>
                  <div className="space-y-4">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-4 rounded-lg bg-green-50 hover:bg-green-100 transition-colors"
                    >
                      <div className="flex-shrink-0">
                        <FiMessageCircle className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">WhatsApp</p>
                        <p className="text-sm text-gray-600">Fale conosco agora</p>
                      </div>
                    </a>

                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="flex items-center space-x-3 p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex-shrink-0">
                        <FiMail className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Email</p>
                        <p className="text-sm text-gray-600">{siteConfig.email}</p>
                      </div>
                    </a>
                  </div>
                </Card>

                <Card>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    Informações
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <FiClock className="w-5 h-5 text-[var(--primary)] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Horário de Atendimento</p>
                        <p className="text-sm text-gray-600">
                          Segunda a Sexta: 9h às 18h<br />
                          Sábado: 9h às 13h
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <FiMapPin className="w-5 h-5 text-[var(--primary)] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Atendimento</p>
                        <p className="text-sm text-gray-600">
                          Presencial e Online
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="bg-[var(--primary)] text-white">
                  <h3 className="text-xl font-semibold mb-4">
                    Resposta Rápida
                  </h3>
                  <p className="text-blue-100 mb-6">
                    Para uma resposta mais rápida, utilize o WhatsApp. Estamos sempre disponíveis para ajudar!
                  </p>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary" className="w-full">
                      <FiMessageCircle className="mr-2" />
                      Abrir WhatsApp
                    </Button>
                  </a>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

