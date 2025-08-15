import { useEffect } from 'react';

interface WebPageSchemaProps {
  title: string;
  description: string;
  url: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
  lastModified?: string;
  pageType?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'Service' | 'Product';
}

export default function WebPageSchema({
  title,
  description,
  url,
  breadcrumbs = [],
  lastModified = new Date().toISOString(),
  pageType = 'WebPage'
}: WebPageSchemaProps) {
  useEffect(() => {
    const schemaData: any = {
      "@context": "https://schema.org",
      "@type": pageType,
      "name": title,
      "description": description,
      "url": url,
      "dateModified": lastModified,
      "isPartOf": {
        "@type": "WebSite",
        "name": "S2 Management Solutions",
        "url": "https://s2mgt.com"
      },
      "publisher": {
        "@type": "Organization",
        "name": "S2 Management Solutions",
        "logo": {
          "@type": "ImageObject",
          "url": "https://s2mgt.com/assets/s2-logo-new.png"
        }
      },
      "mainEntity": {
        "@type": "Organization",
        "name": "S2 Management Solutions"
      }
    };

    // Add breadcrumbs if provided
    if (breadcrumbs.length > 0) {
      schemaData.breadcrumb = {
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": crumb.name,
          "item": crumb.url
        }))
      };
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemaData);
    
    document.head.appendChild(script);
    
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [title, description, url, breadcrumbs, lastModified, pageType]);

  return null;
}