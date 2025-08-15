import { useEffect } from 'react';

export default function OrganizationSchema() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://s2mgt.com/#organization",
      "name": "S2 Management Solutions",
      "alternateName": "S2 MGT",
      "url": "https://s2mgt.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://s2mgt.com/assets/s2-logo.png",
        "width": 200,
        "height": 200
      },
      "description": "Leading IT transformation, disaster recovery, and cybersecurity solutions provider in MENA region, specializing in digital modernization and enterprise protection services.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dubai",
        "addressCountry": "AE",
        "addressRegion": "Dubai"
      },
      "areaServed": [
        {
          "@type": "Place",
          "name": "MENA Region"
        },
        {
          "@type": "Country",
          "name": "United Arab Emirates"
        },
        {
          "@type": "Country", 
          "name": "Saudi Arabia"
        },
        {
          "@type": "Country",
          "name": "Qatar"
        },
        {
          "@type": "Country",
          "name": "Kuwait"
        }
      ],
      "foundingDate": "2015",
      "industry": "Information Technology",
      "numberOfEmployees": "50-100",
      "slogan": "Transforming IT Infrastructure for the Digital Future",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+971-4-XXX-XXXX",
        "contactType": "sales",
        "areaServed": "MENA",
        "availableLanguage": ["English", "Arabic"]
      },
      "sameAs": [
        "https://www.linkedin.com/company/s2-management-solutions",
        "https://twitter.com/s2mgt"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Enterprise IT Solutions",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Disaster Recovery Solutions",
              "serviceType": "IT Infrastructure"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cybersecurity Services",
              "serviceType": "Information Security"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Data Protection",
              "serviceType": "Data Management"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "IT Transformation",
              "serviceType": "Digital Transformation"
            }
          }
        ]
      }
    });
    
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}