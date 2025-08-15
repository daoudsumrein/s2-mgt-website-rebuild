import { useEffect } from 'react';

export default function OrganizationSchema() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "S2 Management Solutions",
      "alternateName": "S2 Mgt",
      "url": "https://s2mgt.com",
      "logo": "https://s2mgt.com/assets/s2-logo-new.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+971-4-XXX-XXXX",
        "contactType": "sales",
        "areaServed": ["AE", "SA", "MENA"],
        "availableLanguage": ["en", "ar"]
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dubai",
        "addressCountry": "AE",
        "addressRegion": "Dubai"
      },
      "description": "Premier IT transformation and digital modernization services in MENA. Expert disaster recovery, cybersecurity, data protection, and IT orchestration solutions for enterprises.",
      "foundingDate": "2013",
      "industry": "Information Technology",
      "numberOfEmployees": "10-50",
      "sameAs": [
        "https://www.linkedin.com/company/s2-management-solutions"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "IT Solutions and Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Data Protection Solutions",
              "description": "Enterprise backup, replication, and data protection services"
            }
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Service",
              "name": "Disaster Recovery Planning",
              "description": "Business continuity and disaster recovery orchestration"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cybersecurity Services", 
              "description": "Endpoint protection, threat detection, and security awareness"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Application Modernization",
              "description": "Legacy application migration and modernization services"
            }
          }
        ]
      },
      "areaServed": {
        "@type": "Place",
        "name": "Middle East and North Africa",
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 25.276987,
          "longitude": 55.296249
        }
      }
    });
    
    document.head.appendChild(script);
    
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return null;
}