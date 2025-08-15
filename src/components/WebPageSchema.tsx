import { useEffect } from 'react';

interface WebPageSchemaProps {
  name: string;
  description: string;
  url: string;
  breadcrumb?: Array<{ name: string; url: string }>;
  mainEntity?: any;
}

export default function WebPageSchema({ 
  name, 
  description, 
  url, 
  breadcrumb = [],
  mainEntity 
}: WebPageSchemaProps) {
  useEffect(() => {
    const schema: any = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      "name": name,
      "description": description,
      "url": url,
      "inLanguage": "en-US",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://s2mgt.com/#website",
        "name": "S2 Management Solutions",
        "url": "https://s2mgt.com"
      },
      "about": {
        "@id": "https://s2mgt.com/#organization"
      },
      "datePublished": "2024-01-01",
      "dateModified": new Date().toISOString().split('T')[0]
    };

    if (breadcrumb.length > 0) {
      schema.breadcrumb = {
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumb.map((item, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": item.name,
          "item": item.url
        }))
      };
    }

    if (mainEntity) {
      schema.mainEntity = mainEntity;
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, [name, description, url, breadcrumb, mainEntity]);

  return null;
}