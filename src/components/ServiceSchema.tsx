import { useEffect } from 'react';

interface ServiceSchemaProps {
  serviceName: string;
  description: string;
  url: string;
  serviceType?: string;
  provider?: string;
  areaServed?: string[];
  features?: string[];
  category?: string;
}

export default function ServiceSchema({
  serviceName,
  description,
  url,
  serviceType = "TechnologyService",
  provider = "S2 Management Solutions",
  areaServed = ["UAE", "Saudi Arabia", "MENA", "Middle East", "North Africa"],
  features = [],
  category = "Information Technology"
}: ServiceSchemaProps) {
  useEffect(() => {
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": serviceName,
      "description": description,
      "url": url,
      "category": category,
      "serviceType": serviceType,
      "provider": {
        "@type": "Organization",
        "name": provider,
        "url": "https://s2mgt.com",
        "logo": "https://s2mgt.com/assets/s2-logo-new.png",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Dubai",
          "addressCountry": "AE"
        }
      },
      "areaServed": areaServed.map(area => ({
        "@type": "Place",
        "name": area
      })),
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": `${serviceName} Features`,
        "itemListElement": features.map((feature, index) => ({
          "@type": "Offer",
          "position": index + 1,
          "itemOffered": {
            "@type": "Service",
            "name": feature
          }
        }))
      },
      "offers": {
        "@type": "Offer",
        "description": `Professional ${serviceName} services in MENA region`,
        "seller": {
          "@type": "Organization",
          "name": provider
        }
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(serviceSchema);
    
    document.head.appendChild(script);
    
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [serviceName, description, url, serviceType, provider, areaServed, features, category]);

  return null;
}