import { client } from './sanity';

// --- TypeScript Interfaces ---
export interface Post {
  title: string;
  slug: string;
  publishedAt: string;
  description: string;
  body: any;
}

export interface Project {
  title: string;
  date: string;
  slug?: string; // Optional slug
  url?: string; // Optional external URL
  description: string;
}

export interface Experience {
    jobTitle: string;
    company: string;
    companyUrl?: string;
    startDate: string;
    endDate?: string;
    description: any;
}

// --- Query Functions ---

/**
 * Fetches the 5 most recent blog posts.
 */
export async function getLatestWritings(): Promise<Post[]> {
  const query = `*[_type == "post"] | order(publishedAt desc)[0...5] {
    title,
    "slug": slug.current,
    publishedAt,
    description
  }`;
  return await client.fetch(query);
}

/**
 * Fetches all blog posts, sorted by most recent.
 */
export async function getAllWritings(): Promise<Post[]> {
    const query = `*[_type == "post"] | order(publishedAt desc) {
      title,
      "slug": slug.current,
      publishedAt,
      description
    }`;
    return await client.fetch(query);
}

/**
 * Fetches all work experience, ordered by the 'orderRank' field.
 */
export async function getWorkExperience(): Promise<Experience[]> {
    const query = `*[_type == "experience"] | order(orderRank) {
        jobTitle,
        company,
        companyUrl,
        startDate,
        endDate,
        description
    }`;
    return await client.fetch(query);
}


export async function getProjects(): Promise<Project[]> {
  const query = `*[_type == "project"] | order(orderRank) {
    title,
    "slug": slug.current,
    url,
    description,
    date
  }`;
  return await client.fetch(query);
}

/**
 * Fetches all post slugs for generating static pages.
 */
export async function getAllPostSlugs(): Promise<{ current: string }[]> {
    const query = `*[_type == "post" && defined(slug.current)][].slug`;
    return await client.fetch(query);
}

/**
 * Fetches a single post by its slug.
 */
export async function getPostBySlug(slug: string): Promise<Post> {
    const query = `*[_type == "post" && slug.current == $slug][0] {
        title,
        "slug": slug.current,
        publishedAt,
        description,
        body
    }`;
    return await client.fetch(query, { slug });
}