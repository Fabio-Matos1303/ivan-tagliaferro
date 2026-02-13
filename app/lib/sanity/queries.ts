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
    "categories": coalesce(categories[]->title, [category], []),
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
    "categories": coalesce(categories[]->title, [category], []),
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
  array::unique(
    *[_type == "post"] | 
    coalesce(categories[]->title, [category], [])[]
  )
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

// Query para listar todos os e-books
export const ebooksQuery = groq`
  *[_type == "ebook"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    description,
    cover,
    googleDriveUrl,
    publishedAt,
    featured
  }
`;

// Query para e-books destacados
export const featuredEbooksQuery = groq`
  *[_type == "ebook" && featured == true] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    description,
    cover,
    googleDriveUrl,
    publishedAt
  }
`;

// Funções helper para buscar e-books
export async function getEbooks() {
  try {
    return await client.fetch(ebooksQuery);
  } catch (error) {
    console.error("Erro ao buscar e-books:", error);
    return [];
  }
}

export async function getFeaturedEbooks() {
  try {
    return await client.fetch(featuredEbooksQuery);
  } catch (error) {
    console.error("Erro ao buscar e-books destacados:", error);
    return [];
  }
}

// Query para slides do hero
export const heroSlidesQuery = groq`
  *[_type == "heroSlide" && active == true] | order(order asc, _createdAt desc) {
    _id,
    title,
    description,
    image,
    ctaPrimary,
    ctaSecondary,
    order,
    active
  }
`;

// Query para o slide principal do hero (primeiro ativo)
export const heroMainSlideQuery = groq`
  *[_type == "heroSlide" && active == true] | order(order asc, _createdAt desc) [0] {
    _id,
    title,
    description,
    image,
    ctaPrimary,
    ctaSecondary,
    order,
    active
  }
`;

// Função helper para buscar slides do hero
export async function getHeroSlides() {
  try {
    return await client.fetch(heroSlidesQuery);
  } catch (error) {
    console.error("Erro ao buscar slides do hero:", error);
    return [];
  }
}

// Função helper para buscar o slide principal do hero
export async function getHeroMainSlide() {
  try {
    return await client.fetch(heroMainSlideQuery);
  } catch (error) {
    console.error("Erro ao buscar slide principal do hero:", error);
    return null;
  }
}

// Query para listar todos os Eventos públicos e futuros
export const appointmentsQuery = groq`
  *[_type == "appointment" && public == true && date >= now()] | order(date asc) {
    _id,
    title,
    description,
    date,
    type,
    location,
    status,
    image,
    featured
  }
`;

// Query para Eventos passados
export const pastAppointmentsQuery = groq`
  *[_type == "appointment" && public == true && date < now()] | order(date desc) [0...10] {
    _id,
    title,
    description,
    date,
    type,
    location,
    status,
    image,
    featured
  }
`;

// Query para Eventos destacados
export const featuredAppointmentsQuery = groq`
  *[_type == "appointment" && public == true && featured == true && date >= now()] | order(date asc) [0...3] {
    _id,
    title,
    description,
    date,
    type,
    location,
    status,
    image,
    featured
  }
`;

// Funções helper para buscar Eventos
export async function getAppointments() {
  try {
    return await client.fetch(appointmentsQuery);
  } catch (error) {
    console.error("Erro ao buscar Eventos:", error);
    return [];
  }
}

export async function getPastAppointments() {
  try {
    return await client.fetch(pastAppointmentsQuery);
  } catch (error) {
    console.error("Erro ao buscar Eventos passados:", error);
    return [];
  }
}

export async function getFeaturedAppointments() {
  try {
    return await client.fetch(featuredAppointmentsQuery);
  } catch (error) {
    console.error("Erro ao buscar Eventos destacados:", error);
    return [];
  }
}

