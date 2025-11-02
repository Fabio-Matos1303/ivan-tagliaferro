import { groq } from "next-sanity";
import { client } from "../../../sanity/lib/client";

// Nota: groq é necessário para queries Sanity
// Se houver erro, instale: npm install groq

// Query para listar todos os posts
export const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    "categories": categories[]->title,
    featured,
    "author": author->name
  }
`;

// Query para um post específico por slug
export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    "categories": categories[]->title,
    body,
    "author": author->name,
    "authorImage": author->image
  }
`;

// Query para posts destacados
export const featuredPostsQuery = groq`
  *[_type == "post" && featured == true] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    category
  }
`;

// Query para posts por categoria
export const postsByCategoryQuery = groq`
  *[_type == "post" && $category in categories[]->title] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    "categories": categories[]->title
  }
`;

// Query para categorias únicas
export const categoriesQuery = groq`
  array::unique(*[_type == "post"].categories[]->title)
`;

// Funções helper para buscar dados

export async function getPosts() {
  try {
    return await client.fetch(postsQuery);
  } catch (error) {
    console.error("Erro ao buscar posts:", error);
    return [];
  }
}

export async function getPostBySlug(slug: string) {
  try {
    return await client.fetch(postBySlugQuery, { slug });
  } catch (error) {
    console.error("Erro ao buscar post:", error);
    return null;
  }
}

export async function getFeaturedPosts() {
  try {
    return await client.fetch(featuredPostsQuery);
  } catch (error) {
    console.error("Erro ao buscar posts destacados:", error);
    return [];
  }
}

export async function getPostsByCategory(category: string) {
  try {
    return await client.fetch(postsByCategoryQuery, { category });
  } catch (error) {
    console.error("Erro ao buscar posts por categoria:", error);
    return [];
  }
}

export async function getCategories() {
  try {
    return await client.fetch(categoriesQuery);
  } catch (error) {
    console.error("Erro ao buscar categorias:", error);
    return [];
  }
}

