import Link from "next/link";
import Image from "next/image";
import { FiMail, FiPhone, FiInstagram, FiLinkedin } from "react-icons/fi";
import { siteConfig, getWhatsAppLink } from "@/app/lib/constants";
import { InstagramFeed } from "@/app/components/sections/InstagramFeed";

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

          {/* Contato e Redes Sociais */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <ul className="space-y-3 mb-6">
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
            
            {/* Redes Sociais */}
            <div>
              <h3 className="text-white font-semibold mb-4">Redes Sociais</h3>
              <div className="flex items-center gap-4">
                {siteConfig.social.linkedin && (
                  <div className="relative group">
                    <a
                      href={siteConfig.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label="LinkedIn"
                    >
                      <FiLinkedin className="w-6 h-6" />
                    </a>
                    {/* Tooltip Preview */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 bg-white rounded-lg shadow-xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none">
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-3 h-3 bg-white"></div>
                      <div className="relative bg-white rounded-lg">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 bg-[#0077b5] rounded-full flex items-center justify-center">
                            <FiLinkedin className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900 text-sm">Ivan Tagliaferro</p>
                            <p className="text-xs text-gray-600">LinkedIn</p>
                          </div>
                        </div>
                        <p className="text-xs text-gray-600 mb-2">
                          Especialista em Educação Internacional
                        </p>
                        <a
                          href={siteConfig.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-[#0077b5] hover:underline font-medium"
                        >
                          Ver perfil completo →
                        </a>
                      </div>
                    </div>
                  </div>
                )}
                {siteConfig.social.instagram && (
                  <div className="relative group">
                    <a
                      href={siteConfig.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label="Instagram"
                    >
                      <FiInstagram className="w-6 h-6" />
                    </a>
                    {/* Tooltip Preview com Feed */}
                    <div className="absolute bottom-full right-0 mb-2 w-96 bg-white rounded-lg shadow-2xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pointer-events-auto">
                      <div className="absolute bottom-0 right-8 transform translate-y-1/2 rotate-45 w-3 h-3 bg-white"></div>
                      <div className="relative bg-white rounded-lg">
                        <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-200">
                          <div className="w-10 h-10 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-full flex items-center justify-center">
                            <FiInstagram className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900 text-sm">@ivantagliaferro</p>
                            <p className="text-xs text-gray-600">Instagram</p>
                          </div>
                        </div>
                        {/* Widget do Instagram */}
                        <div className="mb-4">
                          <InstagramFeed 
                            username="ivantagliaferro" 
                            variant="footer"
                            widgetId="" // Configure após criar widget no SnapWidget
                          />
                        </div>
                        <a
                          href={siteConfig.social.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-center text-xs text-pink-600 hover:underline font-medium pt-2 border-t border-gray-200"
                        >
                          Ver perfil completo no Instagram →
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
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

