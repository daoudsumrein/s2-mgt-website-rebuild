import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
}

export default function SEOHead({
  title = "S2 Management Solutions - Leading IT Transformation, Disaster Recovery & Cybersecurity in MENA",
  description = "Premier IT transformation and digital modernization services in MENA. Expert disaster recovery, cybersecurity, data protection, and IT orchestration solutions for enterprises across UAE, Saudi Arabia, and Middle East.",
  keywords = "disaster recovery MENA, cybersecurity UAE, IT transformation Middle East, digital transformation Saudi Arabia, Carbonite solutions, IT orchestration, data protection MENA, enterprise cybersecurity, business continuity",
  canonicalUrl = "https://s2mgt.com",
  ogImage = "https://s2mgt.com/assets/s2-logo.png"
}: SEOHeadProps) {
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }
    
    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);
    
    // Update Open Graph meta tags
    const updateOGMeta = (property: string, content: string) => {
      let metaTag = document.querySelector(`meta[property="${property}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', property);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', content);
    };
    
    updateOGMeta('og:title', title);
    updateOGMeta('og:description', description);
    updateOGMeta('og:url', canonicalUrl);
    updateOGMeta('og:image', ogImage);
    
    // Update Twitter meta tags
    const updateTwitterMeta = (name: string, content: string) => {
      let metaTag = document.querySelector(`meta[name="${name}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('name', name);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', content);
    };
    
    updateTwitterMeta('twitter:title', title);
    updateTwitterMeta('twitter:description', description);
    updateTwitterMeta('twitter:image', ogImage);
    
  }, [title, description, keywords, canonicalUrl, ogImage]);

  return null;
}