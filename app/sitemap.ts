import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
 const base = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
 return ["/", "/properties", "/projects", "/locations", "/about", "/services", "/company-information", "/contact", "/faq", "/buyers-guide", "/privacy-policy", "/terms", "/saved", "/reviews"].map(path => ({url: `${base}${path}`, lastModified: new Date(), changeFrequency: "monthly", priority: path === "/" ? 1 : 0.6}));
}
