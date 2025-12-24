"use client";

import Link from "next/link";
import Image from "next/image";
import { FiMessageCircle, FiZap } from "react-icons/fi";
import { Navigation } from "./Navigation";
import { getWhatsAppLink, siteConfig } from "@/app/lib/constants";

export function Header() {
  const alanaWhatsApp = "+5519981236025";
  const whatsappMessage = "Olá Alana! Gostaria de saber mais sobre os serviços de educação internacional.";
  const whatsappUrl = `https://wa.me/${alanaWhatsApp.replace(/\D/g, "")}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo-azul-removebg-preview.png"
              alt={siteConfig.name}
              width={150}
              height={50}
              className="h-40 w-auto object-contain"
              priority
            />
          </Link>

          {/* Navigation */}
          <Navigation />

          {/* Alana Assistant CTA */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center space-x-2 bg-[#25D366] text-white px-3 py-2 rounded-full hover:bg-[#20BA5A] transition-colors group relative"
            title="Falar com Alana no WhatsApp"
          >
            <div className="relative w-8 h-8 rounded-full overflow-hidden ring-2 ring-white/30">
              <Image
                src="/Gemini_Generated_Image_flasnrflasnrflas-removebg-preview.png"
                alt="Alana - Assistente IA"
                fill
                className="object-cover"
                sizes="32px"
              />
            </div>
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-1">
                <span className="font-medium text-sm">Alana</span>
                <FiZap className="w-3 h-3 text-yellow-300" />
              </div>
              <div className="flex items-center gap-1">
                <FiMessageCircle className="w-3 h-3" />
                <span className="text-xs opacity-90">WhatsApp</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
}

