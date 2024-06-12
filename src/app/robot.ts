import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseURL = "https://blog.nafiasib.com";
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/posts"],
      disallow: [],
    },
    sitemap: `${baseURL}/sitemap.xml`,
  };
}
