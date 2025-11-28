import { Button } from "@/app/components/ui/Button";
import { Badge } from "@/app/components/ui/Badge";
import { PostCard } from "@/app/components/blog/PostCard";
import { getWhatsAppLink } from "@/app/lib/constants";
import { getPosts, getCategories } from "@/app/lib/sanity/queries";
import { FiMessageCircle } from "react-icons/fi";

export const metadata = {
  title: "Blog | Ivan Tagliaferro",
  description: "Artigos, dicas e informações sobre intercâmbio e educação internacional.",
};

const categoryLabels: Record<string, string> = {
  dicas: "Dicas",
  documentação: "Documentação",
  documentacao: "Documentação",
  destinos: "Destinos",
  experiências: "Experiências",
  experiencias: "Experiências",
  geral: "Geral",
};

export default async function BlogPage() {
  const whatsappUrl = getWhatsAppLink();
  
  // Buscar posts do Sanity
  let posts = [];
  let categories: string[] = [];
  
  try {
    posts = await getPosts();
    categories = await getCategories();
  } catch (error) {
    console.error("Erro ao buscar posts do Sanity:", error);
    // Em caso de erro, posts ficará vazio e mostrará mensagem
  }

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
            {/* Filtros/Categorias */}
            {categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-12">
                <Badge variant="primary">Todos</Badge>
                {categories.map((category) => {
                  const categoryKey = category?.toLowerCase() || "";
                  return (
                    <Badge key={category} variant="default">
                      {categoryLabels[categoryKey] || category}
                    </Badge>
                  );
                })}
              </div>
            )}

            {/* Grid de Posts */}
            {posts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts
                  .filter((post: any) => post.slug?.current) // Filtrar posts sem slug
                  .map((post: any) => (
                    <PostCard key={post._id} post={post} />
                  ))}
              </div>
            ) : (
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

