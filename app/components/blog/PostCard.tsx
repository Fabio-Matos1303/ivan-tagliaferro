import Link from "next/link";
import Image from "next/image";
import { Card } from "@/app/components/ui/Card";
import { Button } from "@/app/components/ui/Button";
import { Badge } from "@/app/components/ui/Badge";
import { FiCalendar, FiArrowRight } from "react-icons/fi";
import { urlFor } from "../../../sanity/lib/image";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface PostCardProps {
  post: {
    _id: string;
    title: string;
    slug?: { current: string } | null;
    excerpt?: string;
    mainImage?: any;
    publishedAt: string;
    categories?: string[]; // Agora é array de strings
  };
}

const categoryLabels: Record<string, string> = {
  dicas: "Dicas",
  documentacao: "Documentação",
  destinos: "Destinos",
  experiencias: "Experiências",
  geral: "Geral",
};

export function PostCard({ post }: PostCardProps) {
  const imageUrl = post.mainImage
    ? urlFor(post.mainImage).width(600).height(400).url()
    : null;
  
  // categories agora é um array
  const firstCategory = post.categories && post.categories.length > 0 
    ? post.categories[0] 
    : null;
  const categoryLabel = firstCategory ? categoryLabels[firstCategory.toLowerCase()] || firstCategory : "";
  const formattedDate = post.publishedAt
    ? format(new Date(post.publishedAt), "d 'de' MMMM, yyyy", { locale: ptBR })
    : "";

  return (
    <Card hover className="flex flex-col">
      {imageUrl && (
        <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-gray-200">
          <Image
            src={imageUrl}
            alt={post.mainImage?.alt || post.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      
      {!imageUrl && (
        <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-gray-200">
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)]">
            <span className="text-white text-sm">Sem imagem</span>
          </div>
        </div>
      )}
      
      <div className="flex items-center justify-between mb-3">
        {categoryLabel && <Badge variant="default">{categoryLabel}</Badge>}
        {formattedDate && (
          <div className="flex items-center text-sm text-gray-500">
            <FiCalendar className="w-4 h-4 mr-1" />
            {formattedDate}
          </div>
        )}
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
        {post.title}
      </h3>
      
      {post.excerpt && (
        <p className="text-gray-600 mb-4 flex-grow line-clamp-3">
          {post.excerpt}
        </p>
      )}
      
      {post.slug?.current ? (
        <Link href={`/blog/${post.slug.current}`}>
          <Button variant="outline" className="w-full">
            Ler Mais
            <FiArrowRight className="ml-2" />
          </Button>
        </Link>
      ) : (
        <Button variant="outline" className="w-full" disabled>
          Sem link disponível
        </Button>
      )}
    </Card>
  );
}

