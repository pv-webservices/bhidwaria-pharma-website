import type { MetadataRoute } from "next";
import { divisions, products } from "@/lib/products";
import { articles } from "@/lib/data";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.bhidwariapharma.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/products", "/therapeutic-segments", "/quality", "/business-opportunity", "/contact", "/careers", "/blog", "/privacy-policy", "/terms"];
  return [
    ...staticRoutes.map((r) => ({ url: `${BASE_URL}${r}`, changeFrequency: "monthly" as const, priority: r === "" ? 1 : 0.8 })),
    ...divisions.map((d) => ({ url: `${BASE_URL}/products/division/${d.slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
    ...products.map((p) => ({ url: `${BASE_URL}/products/${p.slug}`, changeFrequency: "monthly" as const, priority: 0.9 })),
    ...articles.map((a) => ({ url: `${BASE_URL}/blog/${a.slug}`, changeFrequency: "yearly" as const, priority: 0.5 })),
  ];
}
