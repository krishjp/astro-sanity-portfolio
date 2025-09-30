import { client } from './sanity';

// --- TypeScript Interfaces for your data ---
export interface Post {
  title: string;
  slug: string;
  publishedAt: string;
  description: string;
}

export interface Project {
  title: string;
  date: string;
  slug?: string; // Optional slug
  url?: string; // Optional external URL
  description: string;
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
 * Fetches all projects, ordered by the 'orderRank' field.
 */
export async function getProjects(): Promise<Project[]> {
  const query = `*[_type == "project"] | order(orderRank) {
    title,
    "slug": slug.current,
    url,
    description
  }`;
  return await client.fetch(query);
}
