import Image from "next/image";
import { Button } from "@/app/components/ui/Button";
import { FiMessageCircle, FiZap } from "react-icons/fi";

interface AlanaAssistantProps {
  variant?: "default" | "compact";
  className?: string;
}

export function AlanaAssistant({ variant = "default", className = "" }: AlanaAssistantProps) {
  const alanaWhatsApp = "+5519981236025";
  const whatsappMessage = "Olá Alana! Gostaria de saber mais sobre os serviços de educação internacional.";
  const whatsappUrl = `https://wa.me/${alanaWhatsApp.replace(/\D/g, "")}?text=${encodeURIComponent(whatsappMessage)}`;

  if (variant === "compact") {
    return (
      <div className={`bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-4 border border-purple-100 ${className}`}>
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-purple-200 flex-shrink-0">
            <Image
              src="/Gemini_Generated_Image_flasnrflasnrflas-removebg-preview.png"
              alt="Alana - Assistente IA"
              fill
              className="object-cover"
              sizes="48px"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-bold text-gray-900 text-sm">Alana</h3>
              <FiZap className="w-3 h-3 text-purple-600 flex-shrink-0" />
              <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full font-medium">
                IA
              </span>
            </div>
            <p className="text-xs text-gray-600 mb-2 line-clamp-2">
              Tire suas dúvidas sobre intercâmbio e educação internacional!
            </p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="w-full text-xs py-1.5">
                <FiMessageCircle className="mr-1.5 w-3.5 h-3.5" />
                Falar com Alana
              </Button>
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className={`py-12 lg:py-16 bg-gradient-to-br from-purple-50 to-blue-50 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-purple-100">
            <div className="p-6 lg:p-8">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                {/* Imagem da Alana */}
                <div className="relative flex-shrink-0">
                  <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden ring-4 ring-purple-200">
                    <Image
                      src="/WhatsApp_Image_2025-12-23_at_08.09.53-removebg-preview.png"
                      alt="Alana - Assistente IA de Educação Internacional"
                      fill
                      className="object-cover"
                      style={{ objectPosition: 'center 10%' }}
                      sizes="(max-width: 640px) 96px, 128px"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="flex-1 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                      Converse com a Alana
                    </h2>
                    <FiZap className="w-5 h-5 text-purple-600" />
                  </div>
                  <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold mb-4">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                    Assistente IA Disponível 24/7
                  </div>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Olá! Eu sou a <strong className="text-purple-600">Alana</strong>, assistente de inteligência artificial. Estou aqui para tirar suas dúvidas sobre intercâmbio, educação internacional, vistos e muito mais!
                  </p>

                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block">
                    <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-md hover:shadow-lg transition-all">
                      <FiMessageCircle className="mr-2 w-5 h-5" />
                      Iniciar Conversa com Alana
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

