"use client";

import { Card } from "@/app/components/ui/Card";
import { Button } from "@/app/components/ui/Button";
import { getWhatsAppLink } from "@/app/lib/constants";
import { FiDownload, FiBookOpen } from "react-icons/fi";
import Image from "next/image";
import { urlFor } from "../../../sanity/lib/image";

// Interface para e-book do Sanity
export interface Ebook {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  cover?: any; // Sanity image
  googleDriveUrl: string;
  publishedAt?: string;
  featured?: boolean;
}

interface EbooksListProps {
  ebooks: Ebook[];
}

export function EbooksList({ ebooks }: EbooksListProps) {
  const whatsappUrl = getWhatsAppLink("Olá! Gostaria de receber os e-books gratuitos.");

  const handleDownload = (ebook: Ebook) => {
    // Verifica se a URL do Google Drive está configurada
    if (ebook.googleDriveUrl && ebook.googleDriveUrl.trim() !== "") {
      // Redireciona para o Google Drive em nova aba
      window.open(ebook.googleDriveUrl, "_blank", "noopener,noreferrer");
    } else {
      // Se não houver URL configurada, redireciona para WhatsApp
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }
  };

  // Se não houver e-books, mostra mensagem
  if (!ebooks || ebooks.length === 0) {
    return (
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-gray-600 mb-6">
              Em breve teremos e-books disponíveis!
            </p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="primary">
                Entre em Contato
              </Button>
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ebooks.map((ebook) => {
              const imageUrl = ebook.cover
                ? urlFor(ebook.cover).width(600).height(400).url()
                : null;

              return (
                <Card key={ebook._id} hover className="flex flex-col">
                  {/* Capa do E-book */}
                  <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden bg-gray-200">
                    {imageUrl ? (
                      <Image
                        src={imageUrl}
                        alt={ebook.cover?.alt || ebook.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)]">
                        <FiBookOpen className="w-16 h-16 text-white opacity-50" />
                      </div>
                    )}
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
                    onClick={() => handleDownload(ebook)}
                  >
                    <FiDownload className="mr-2" />
                    Baixar Grátis
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
