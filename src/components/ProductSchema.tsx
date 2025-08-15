import { useEffect } from 'react';

interface ProductSchemaProps {
  name: string;
  description: string;
  brand: string;
  category: string;
  offers?: {
    availability: string;
    priceCurrency?: string;
    price?: string;
  };
  features?: string[];
}

export default function ProductSchema({
  name,
  description,
  brand,
  category,
  offers = { availability: "InStock" },
  features = []
}: ProductSchemaProps) {
  useEffect(() => {
    const schema: any = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": name,
      "description": description,
      "brand": {
        "@type": "Brand",
        "name": brand
      },
      "applicationCategory": category,
      "operatingSystem": ["Windows", "Linux", "MacOS"],
      "offers": {
        "@type": "Offer",
        "availability": `https://schema.org/${offers.availability}`,
        "priceCurrency": offers.priceCurrency || "USD",
        "price": offers.price || "Contact for pricing",
        "seller": {
          "@type": "Organization",
          "@id": "https://s2mgt.com/#organization"
        }
      },
      "featureList": features,
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.7",
        "reviewCount": "56"
      },
      "provider": {
        "@type": "Organization",
        "@id": "https://s2mgt.com/#organization"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, [name, description, brand, category, offers, features]);

  return null;
}