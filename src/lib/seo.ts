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
 * Only ogImage has a sitewide default; title, description, keywords and canonical are route-owned.
 */
export function seo({ title, description, keywords, canonical, ogImage, author }: SeoOptions) {
  const socialImage = ogImage ?? "https://s2mgt.com/og/default.png";
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
  meta.push({ property: "og:image", content: socialImage });
  meta.push({ property: "twitter:image", content: socialImage });

  const links = canonical ? [{ rel: "canonical", href: canonical }] : [];

  return { meta, links };
}
