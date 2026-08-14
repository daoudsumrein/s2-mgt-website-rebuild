export interface SeoOptions {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  author?: string;
}

/**
 * Builds route-owned head() metadata for TanStack Router.
 * No homepage defaults are merged in - every value comes from the route itself.
 */
export function seo({ title, description, keywords, canonical, ogImage, author }: SeoOptions) {
  const meta: Array<Record<string, string>> = [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "twitter:title", content: title },
    { property: "twitter:description", content: description },
  ];

  if (keywords) meta.push({ name: "keywords", content: keywords });
  if (author) meta.push({ name: "author", content: author });
  if (canonical) meta.push({ property: "og:url", content: canonical });
  if (ogImage) {
    meta.push({ property: "og:image", content: ogImage });
    meta.push({ property: "twitter:image", content: ogImage });
  }

  const links = canonical ? [{ rel: "canonical", href: canonical }] : [];

  return { meta, links };
}
