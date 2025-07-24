import { useEffect } from 'react';

export default function LocalBusinessSchema() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "S2 Management Solutions",
      "image": "https://s2mgt.com/assets/s2-logo.png",
      "@id": "https://s2mgt.com",
      "url": "https://s2mgt.com",
      "telephone": "+971-4-XXX-XXXX",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Dubai, UAE",
        "addressLocality": "Dubai",
        "addressCountry": "AE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 25.276987,
        "longitude": 55.296249
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday", 
          "Wednesday",
          "Thursday",
          "Sunday"
        ],
        "opens": "08:00",
        "closes": "18:00"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "127"
      },
      "areaServed": [
        {
          "@type": "Country",
          "name": "United Arab Emirates"
        },
        {
          "@type": "Country",
          "name": "Saudi Arabia"
        },
        {
          "@type": "Place",
          "name": "Middle East and North Africa"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "IT Solutions and Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Disaster Recovery Solutions",
              "description": "Enterprise disaster recovery and business continuity planning",
              "areaServed": "MENA Region"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "Cybersecurity Services",
              "description": "Advanced cybersecurity and ransomware protection solutions",
              "areaServed": "MENA Region"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "IT Transformation",
              "description": "Digital transformation and IT infrastructure modernization",
              "areaServed": "MENA Region"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Data Protection",
              "description": "Enterprise data backup and protection solutions", 
              "areaServed": "MENA Region"
            }
          }
        ]
      },
      "keywords": "disaster recovery MENA, cybersecurity UAE, IT transformation Middle East, digital transformation Saudi Arabia, Carbonite solutions, IT orchestration"
    });
    
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}