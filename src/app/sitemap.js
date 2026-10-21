import { siteUrl } from "@/data/profile";

export default function sitemap() {
  return [{ url: siteUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 }];
}
