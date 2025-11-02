import { Card } from "@/app/components/ui/Card";
import { Badge } from "@/app/components/ui/Badge";
import { Button } from "@/app/components/ui/Button";
import { getWhatsAppLink } from "@/app/lib/constants";
import { FiMessageCircle, FiCalendar, FiArrowLeft } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Blog Post | Ivan Tagliaferro",
  description: "Leia artigos sobre intercâmbio e educação internacional.",
};

// TODO: Substituir por busca dinâmica do CMS baseado no slug
async function getPost(slug: string) {
  // Por enquanto, retorna dados mockados
  // Quando o CMS estiver configurado, buscar do Sanity
  return {
    title: "Como Escolher o Destino Ideal para seu Intercâmbio",
    excerpt: "Descubra os principais fatores a considerar na hora de escolher o destino perfeito para sua experiência de intercâmbio.",
    content: `
      <p>Escolher o destino ideal para seu intercâmbio é uma das decisões mais importantes do processo. Esta escolha vai influenciar não apenas sua experiência acadêmica, mas também seu crescimento pessoal e profissional.</p>
      
      <h2>Fatores a Considerar</h2>
      
      <h3>1. Objetivos Pessoais</h3>
      <p>Antes de escolher um destino, é fundamental definir seus objetivos. Você quer aprender ou melhorar um idioma específico? Busca uma experiência cultural particular? Tem objetivos acadêmicos específicos?</p>
      
      <h3>2. Orçamento</h3>
      <p>O custo de vida varia significativamente entre países e cidades. Considere não apenas as taxas de matrícula, mas também custo de moradia, alimentação, transporte e outros gastos do dia a dia.</p>
      
      <h3>3. Clima e Cultura</h3>
      <p>Pense no tipo de clima e cultura com os quais você se identifica. Algumas pessoas preferem climas mais quentes, outras preferem estações bem definidas. Da mesma forma, a adaptação cultural pode ser mais fácil em alguns lugares do que em outros.</p>
      
      <h3>4. Oportunidades Acadêmicas</h3>
      <p>Pesquise as universidades e programas educacionais disponíveis no destino. Alguns países são conhecidos por excelência em áreas específicas, o que pode ser importante dependendo do seu curso de interesse.</p>
      
      <h2>Conclusão</h2>
      <p>Lembre-se de que não existe um destino "perfeito" universalmente. O melhor destino é aquele que se alinha com seus objetivos pessoais, acadêmicos e financeiros. Estamos aqui para ajudá-lo nessa escolha tão importante.</p>
    `,
    image: "/placeholder-blog.jpg",
    date: "2025-01-15",
    category: "Dicas",
    author: {
      name: "Ivan Tagliaferro",
      image: "/ivan-foto.jpg",
    },
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
            
            <div className="flex items-center gap-4 mb-4">
              <Badge variant="primary" className="bg-white text-[var(--primary)]">
                {post.category}
              </Badge>
              <div className="flex items-center text-blue-100 text-sm">
                <FiCalendar className="w-4 h-4 mr-1" />
                {new Date(post.date).toLocaleDateString("pt-BR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              {post.title}
            </h1>
            <p className="text-xl text-blue-100">
              {post.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Conteúdo do Post */}
      <article className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Imagem de Destaque */}
            <div className="relative w-full h-96 mb-12 rounded-xl overflow-hidden bg-gray-200">
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)]">
                <span className="text-white">Imagem do Post</span>
              </div>
              {/* Quando houver imagem real:
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
              */}
            </div>

            {/* Conteúdo */}
            <div
              className="prose prose-lg max-w-none
                prose-headings:text-gray-900 prose-headings:font-bold
                prose-p:text-gray-700 prose-p:leading-relaxed
                prose-a:text-[var(--primary)] prose-a:no-underline hover:prose-a:underline
                prose-strong:text-gray-900
                prose-ul:text-gray-700 prose-ol:text-gray-700
                prose-li:text-gray-700"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Author Info */}
            <Card className="mt-12">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] flex items-center justify-center">
                  <span className="text-white font-semibold">
                    {post.author.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{post.author.name}</p>
                  <p className="text-sm text-gray-600">Especialista em Intercâmbio</p>
                </div>
              </div>
            </Card>

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

