import { useEffect } from 'react';

interface ProductSchemaProps {
  name: string;
  description: string;
  url: string;
  manufacturer?: string;
  category?: string;
  features?: string[];
  brand?: string;
}

export default function ProductSchema({
  name,
  description,
  url,
  manufacturer = "S2 Management Solutions",
  category = "Software",
  features = [],
  brand = "S2 Management"
}: ProductSchemaProps) {
  useEffect(() => {
    const productSchema = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": name,
      "description": description,
      "url": url,
      "manufacturer": {
        "@type": "Organization", 
        "name": manufacturer
      },
      "brand": {
        "@type": "Brand",
        "name": brand
      },
      "category": category,
      "additionalProperty": features.map(feature => ({
        "@type": "PropertyValue",
        "name": feature
      })),
      "offers": {
        "@type": "Offer",
        "description": `Professional ${name} solutions and services`,
        "seller": {
          "@type": "Organization",
          "name": manufacturer
        }
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(productSchema);
    
    document.head.appendChild(script);
    
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [name, description, url, manufacturer, category, features, brand]);

  return null;
}