import { Card } from "@/app/components/ui/Card";
import { Button } from "@/app/components/ui/Button";
import { Badge } from "@/app/components/ui/Badge";
import { getWhatsAppLink } from "@/app/lib/constants";
import { FiMessageCircle, FiCalendar, FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Blog | Ivan Tagliaferro",
  description: "Artigos, dicas e informações sobre intercâmbio e educação internacional.",
};

// Placeholder data - será substituído por dados do CMS
const blogPosts = [
  {
    id: 1,
    slug: "como-escolher-destino-intercambio",
    title: "Como Escolher o Destino Ideal para seu Intercâmbio",
    excerpt: "Descubra os principais fatores a considerar na hora de escolher o destino perfeito para sua experiência de intercâmbio.",
    image: "/placeholder-blog.jpg",
    date: "2025-01-15",
    category: "Dicas",
  },
  {
    id: 2,
    slug: "documentacao-necessaria-vistos",
    title: "Documentação Necessária para Vistos de Estudo",
    excerpt: "Um guia completo sobre os documentos necessários para obter visto de estudante nos principais destinos.",
    image: "/placeholder-blog.jpg",
    date: "2025-01-10",
    category: "Documentação",
  },
  {
    id: 3,
    slug: "melhores-cidades-estudar-exterior",
    title: "As Melhores Cidades para Estudar no Exterior",
    excerpt: "Conheça as cidades mais procuradas por estudantes internacionais e descubra o que cada uma tem a oferecer.",
    image: "/placeholder-blog.jpg",
    date: "2025-01-05",
    category: "Destinos",
  },
];

export default function BlogPage() {
  const whatsappUrl = getWhatsAppLink();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Blog
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 max-w-2xl mx-auto">
              Dicas, guias e informações sobre intercâmbio e educação internacional
            </p>
          </div>
        </div>
      </section>

      {/* Lista de Posts */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Placeholder: Filtros/Categorias - será implementado futuramente */}
            <div className="flex flex-wrap gap-2 mb-12">
              <Badge variant="primary">Todos</Badge>
              <Badge variant="default">Dicas</Badge>
              <Badge variant="default">Documentação</Badge>
              <Badge variant="default">Destinos</Badge>
            </div>

            {/* Grid de Posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} hover className="flex flex-col">
                  <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-gray-200">
                    {/* Placeholder - será substituído por imagem real do CMS */}
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)]">
                      <span className="text-white text-sm">Imagem do Post</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="default">{post.category}</Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <FiCalendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString("pt-BR")}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="outline" className="w-full">
                      Ler Mais
                      <FiArrowRight className="ml-2" />
                    </Button>
                  </Link>
                </Card>
              ))}
            </div>

            {/* Placeholder: Paginação - será implementada quando houver mais posts */}
            {blogPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600 mb-6">
                  Em breve teremos artigos disponíveis!
                </p>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary">
                    <FiMessageCircle className="mr-2" />
                    Entre em Contato
                  </Button>
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter CTA - Futuro */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Fique por Dentro
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Receba dicas e atualizações sobre intercâmbio diretamente no seu email.
            </p>
            {/* Placeholder para newsletter - será implementado futuramente */}
            <div className="max-w-md mx-auto">
              <p className="text-sm text-gray-500">
                Newsletter em breve disponível
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

