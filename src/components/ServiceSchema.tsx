import { useEffect } from 'react';

interface ServiceSchemaProps {
  name: string;
  description: string;
  serviceType: string;
  provider?: string;
  areaServed?: string[];
  offers?: Array<{
    name: string;
    description: string;
  }>;
}

export default function ServiceSchema({
  name,
  description,
  serviceType,
  provider = "S2 Management Solutions",
  areaServed = ["MENA Region", "UAE", "Saudi Arabia"],
  offers = []
}: ServiceSchemaProps) {
  useEffect(() => {
    const schema: any = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": name,
      "description": description,
      "serviceType": serviceType,
      "provider": {
        "@type": "Organization",
        "@id": "https://s2mgt.com/#organization",
        "name": provider
      },
      "areaServed": areaServed.map(area => ({
        "@type": "Place",
        "name": area
      })),
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": `${name} Offerings`,
        "itemListElement": offers.map((offer, index) => ({
          "@type": "Offer",
          "position": index + 1,
          "itemOffered": {
            "@type": "Service",
            "name": offer.name,
            "description": offer.description
          }
        }))
      },
      "category": "IT Services",
      "termsOfService": "https://s2mgt.com/terms",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "89"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, [name, description, serviceType, provider, areaServed, offers]);

  return null;
}