export const siteConfig = {
  name: "Ivan Tagliaferro",
  description: "Consultoria especializada em intercâmbio e educação internacional",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://ivantagliaferro.com.br",
  
  // Contato
  whatsapp: "5519981236025", // Alana - Assistente IA
  email: "contato@ivantagliaferro.com.br",
  
  // Navegação
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Compromissos", href: "/compromissos" },
    { label: "Quem Sou", href: "/sobre" },
    { label: "Serviços", href: "/servicos" },
    { label: "Blog", href: "/blog" },
    { label: "Contato", href: "/contato" },
  ],
  
  // Redes Sociais
  social: {
    instagram: "https://www.instagram.com/ivantagliaferro/",
    linkedin: "https://www.linkedin.com/in/ivan-tagliaferro-48391817/",
    facebook: "",
  },
};

export const getWhatsAppLink = (message?: string) => {
  const baseUrl = `https://wa.me/${siteConfig.whatsapp}`;
  if (message) {
    return `${baseUrl}?text=${encodeURIComponent(message)}`;
  }
  return baseUrl;
};

