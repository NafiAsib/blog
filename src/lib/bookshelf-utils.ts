import { allBookshelfItems } from "contentlayer/generated";

export interface BookshelfItem {
  id: string;
  slug: string;
  title: string;
  link?: string;
  category: string;
  medium: string;
  tags: string[];
  body: {
    raw: string;
    code: string;
  };
}

// Get all bookshelf items
export function getAllBookshelfItems(): BookshelfItem[] {
  return allBookshelfItems.map((item) => ({
    id: item.id,
    slug: item.slug,
    title: item.title,
    link: item.link,
    category: item.category,
    medium: item.medium,
    tags: item.tags,
    body: item.body,
  }));
}

// Get a specific bookshelf item by its slug
export function getBookshelfItemBySlug(
  slug: string
): BookshelfItem | undefined {
  const item = allBookshelfItems.find((item) => item.slug === slug);
  if (!item) return undefined;

  return {
    id: item.id,
    slug: item.slug,
    title: item.title,
    link: item.link,
    category: item.category,
    medium: item.medium,
    tags: item.tags,
    body: item.body,
  };
}
