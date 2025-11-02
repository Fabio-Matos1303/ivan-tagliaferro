export const siteConfig = {
  name: "Ivan Tagliaferro",
  description: "Consultoria especializada em intercâmbio e educação internacional",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://ivantagliaferro.com.br",
  
  // Contato
  whatsapp: "5511999999999", // TODO: Atualizar com número real
  email: "contato@ivantagliaferro.com.br", // TODO: Atualizar com email real
  
  // Navegação
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Quem Sou", href: "/sobre" },
    { label: "Serviços", href: "/servicos" },
    { label: "Blog", href: "/blog" },
    { label: "Contato", href: "/contato" },
  ],
  
  // Redes Sociais (opcional)
  social: {
    instagram: "",
    linkedin: "",
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

