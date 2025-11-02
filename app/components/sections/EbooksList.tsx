"use client";

import { Card } from "@/app/components/ui/Card";
import { Button } from "@/app/components/ui/Button";
import { getWhatsAppLink } from "@/app/lib/constants";
import { FiMessageCircle, FiDownload, FiBookOpen } from "react-icons/fi";

// Placeholder data - será substituído por dados do CMS
const ebooks = [
  {
    id: 1,
    title: "Guia Completo de Intercâmbio",
    description: "Tudo que você precisa saber para começar sua jornada de intercâmbio, desde o planejamento até o retorno.",
    cover: "/placeholder-ebook.jpg",
    downloadUrl: "#",
  },
  {
    id: 2,
    title: "Como Escolher seu Destino",
    description: "Um guia detalhado para ajudá-lo a escolher o destino ideal baseado em seus objetivos e preferências.",
    cover: "/placeholder-ebook.jpg",
    downloadUrl: "#",
  },
  {
    id: 3,
    title: "Documentação Necessária para Vistos",
    description: "Checklist completo de todos os documentos necessários para obter visto de estudante.",
    cover: "/placeholder-ebook.jpg",
    downloadUrl: "#",
  },
  {
    id: 4,
    title: "Preparação Financeira para Intercâmbio",
    description: "Saiba como se preparar financeiramente para sua experiência no exterior.",
    cover: "/placeholder-ebook.jpg",
    downloadUrl: "#",
  },
  {
    id: 5,
    title: "Vida Acadêmica no Exterior",
    description: "Conheça como funciona o sistema educacional nos principais destinos de intercâmbio.",
    cover: "/placeholder-ebook.jpg",
    downloadUrl: "#",
  },
  {
    id: 6,
    title: "Adaptação Cultural: Guia Completo",
    description: "Dicas e estratégias para se adaptar rapidamente à nova cultura e aproveitar ao máximo sua experiência.",
    cover: "/placeholder-ebook.jpg",
    downloadUrl: "#",
  },
];

export function EbooksList() {
  const whatsappUrl = getWhatsAppLink("Olá! Gostaria de receber os e-books gratuitos.");

  const handleDownload = (ebookId: number) => {
    // TODO: Implementar lógica de download
    // Por enquanto, pode pedir informações ou redirecionar para WhatsApp
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ebooks.map((ebook) => (
              <Card key={ebook.id} hover className="flex flex-col">
                {/* Capa do E-book */}
                <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden bg-gray-200">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)]">
                    <FiBookOpen className="w-16 h-16 text-white opacity-50" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {ebook.title}
                </h3>
                
                <p className="text-gray-600 mb-6 flex-grow">
                  {ebook.description}
                </p>
                
                <Button
                  variant="primary"
                  className="w-full"
                  onClick={() => handleDownload(ebook.id)}
                >
                  <FiDownload className="mr-2" />
                  Baixar Grátis
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

