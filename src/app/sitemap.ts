import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/company";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/about", "/services", "/projects", "/contact"];
  return paths.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
