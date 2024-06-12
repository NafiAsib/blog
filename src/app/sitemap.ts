import { MetadataRoute } from "next";
import { allPosts } from "contentlayer/generated";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseURL = "https://blog.nafiasib.com";
  const posts = allPosts.map((post) => ({
    url: `${baseURL}/posts/${post.slug}`,
    lastModified: new Date(post.lastModified || post.publishedAt),
  }));
  return [
    {
      url: baseURL,
      lastModified: new Date(),
    },
    ...posts,
  ];
}
