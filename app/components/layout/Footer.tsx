import Link from "next/link";
import Image from "next/image";
import { FiMail, FiPhone } from "react-icons/fi";
import { siteConfig, getWhatsAppLink } from "@/app/lib/constants";

export function Footer() {
  const whatsappUrl = getWhatsAppLink();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sobre */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo-branca-removebg-preview.png"
                alt={siteConfig.name}
                width={600}
                height={200}
                className="h-40 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-gray-400">
              {siteConfig.description}
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm hover:text-white transition-colors"
                >
                  <FiPhone className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center space-x-2 text-sm hover:text-white transition-colors"
                >
                  <FiMail className="w-4 h-4" />
                  <span>{siteConfig.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Reconhecimentos e Certificações */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <h3 className="text-white font-semibold mb-6 text-center">
            Reconhecimentos e Certificações
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <a
              href="https://cpiea.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-20 w-auto opacity-80 hover:opacity-100 transition-opacity"
            >
              <Image
                src="/CPIEA-LOGO.png"
                alt="CPIEA - Certificação"
                width={150}
                height={80}
                className="h-full w-auto object-contain"
              />
            </a>
            <a
              href="https://abrapei.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-20 w-auto opacity-80 hover:opacity-100 transition-opacity"
            >
              <Image
                src="/Abrapei-branco-300x208.png"
                alt="ABRAPEI - Associação Brasileira de Agências de Programas de Educação Internacional"
                width={200}
                height={80}
                className="h-full w-auto object-contain"
              />
            </a>
            <a
              href="https://educationsummit.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-20 w-auto opacity-80 hover:opacity-100 transition-opacity"
            >
              <Image
                src="/award-logo.png"
                alt="35th ELETS World Education Summit Awards 2026"
                width={150}
                height={80}
                className="h-full w-auto object-contain"
              />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

