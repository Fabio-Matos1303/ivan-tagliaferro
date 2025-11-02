"use client";

import Link from "next/link";
import Image from "next/image";
import { FiMessageCircle } from "react-icons/fi";
import { Navigation } from "./Navigation";
import { Button } from "@/app/components/ui/Button";
import { getWhatsAppLink, siteConfig } from "@/app/lib/constants";

export function Header() {
  const whatsappMessage = "Olá! Gostaria de saber mais sobre os serviços de intercâmbio.";
  const whatsappUrl = getWhatsAppLink(whatsappMessage);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo-nome.jpg"
              alt={siteConfig.name}
              width={150}
              height={50}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Navigation */}
          <Navigation />

          {/* WhatsApp CTA */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center space-x-2 bg-[#25D366] text-white px-4 py-2 rounded-full hover:bg-[#20BA5A] transition-colors"
          >
            <FiMessageCircle className="w-5 h-5" />
            <span className="font-medium">WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}

