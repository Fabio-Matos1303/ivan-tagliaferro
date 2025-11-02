import { Card } from "@/app/components/ui/Card";
import { Badge } from "@/app/components/ui/Badge";
import { Button } from "@/app/components/ui/Button";
import { PostContent } from "@/app/components/blog/PostContent";
import { getWhatsAppLink } from "@/app/lib/constants";
import { getPostBySlug } from "@/app/lib/sanity/queries";
import { urlFor } from "../../../sanity/lib/image";
import { FiMessageCircle, FiCalendar, FiArrowLeft } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { notFound } from "next/navigation";

const categoryLabels: Record<string, string> = {
  dicas: "Dicas",
  documentacao: "Documentação",
  destinos: "Destinos",
  experiencias: "Experiências",
  geral: "Geral",
};

async function getPost(slug: string) {
  try {
    const post = await getPostBySlug(slug);
    if (!post) {
      return null;
    }
    return post;
  } catch (error) {
    console.error("Erro ao buscar post:", error);
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Post não encontrado | Ivan Tagliaferro",
    };
  }

  return {
    title: `${post.title} | Ivan Tagliaferro`,
    description: post.excerpt || "Leia artigos sobre intercâmbio e educação internacional.",
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  const whatsappUrl = getWhatsAppLink();

  if (!post) {
    notFound();
  }

  const imageUrl = post.mainImage ? urlFor(post.mainImage).width(1200).height(600).url() : null;
  // categories agora é um array
  const firstCategory = post.categories && post.categories.length > 0 
    ? post.categories[0] 
    : null;
  const categoryLabel = firstCategory ? categoryLabels[firstCategory.toLowerCase()] || firstCategory : "";
  const formattedDate = post.publishedAt
    ? format(new Date(post.publishedAt), "d 'de' MMMM, yyyy", { locale: ptBR })
    : "";

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors"
            >
              <FiArrowLeft className="mr-2" />
              Voltar para o Blog
            </Link>
            
            {categoryLabel && (
              <div className="flex items-center gap-4 mb-4">
                <Badge variant="primary" className="bg-white text-[var(--primary)]">
                  {categoryLabel}
                </Badge>
                {formattedDate && (
                  <div className="flex items-center text-blue-100 text-sm">
                    <FiCalendar className="w-4 h-4 mr-1" />
                    {formattedDate}
                  </div>
                )}
              </div>
            )}

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              {post.title}
            </h1>
            {post.excerpt && (
              <p className="text-xl text-blue-100">
                {post.excerpt}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Conteúdo do Post */}
      <article className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Imagem de Destaque */}
            {imageUrl && (
              <div className="relative w-full h-96 mb-12 rounded-xl overflow-hidden bg-gray-200">
                <Image
                  src={imageUrl}
                  alt={post.mainImage?.alt || post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            {/* Conteúdo */}
            {post.body && <PostContent content={post.body} />}

            {/* Author Info */}
            {post.author && (
              <Card className="mt-12">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] flex items-center justify-center">
                    <span className="text-white font-semibold">
                      {post.author.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{post.author}</p>
                    <p className="text-sm text-gray-600">Especialista em Intercâmbio</p>
                  </div>
                </div>
              </Card>
            )}

            {/* CTA */}
            <div className="mt-12 text-center">
              <Card className="bg-gray-50">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Precisa de Ajuda Personalizada?
                </h3>
                <p className="text-gray-600 mb-6">
                  Entre em contato e vamos conversar sobre como podemos ajudar você a realizar seu sonho de intercâmbio.
                </p>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="primary">
                    <FiMessageCircle className="mr-2" />
                    Falar no WhatsApp
                  </Button>
                </a>
              </Card>
            </div>
          </div>
        </div>
      </article>

      {/* Posts Relacionados - Placeholder */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Posts Relacionados
            </h2>
            <p className="text-center text-gray-600">
              Funcionalidade de posts relacionados será implementada em breve.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

