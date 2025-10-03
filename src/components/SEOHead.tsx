import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { getSEOForPath, BASE_URL } from '@/seo/seoConfig';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  author?: string;
}

export default function SEOHead({ title, description, keywords, canonicalUrl, ogImage, author }: SEOHeadProps) {
  const { pathname } = useLocation();
  const routeSEO = getSEOForPath(pathname);

  const defaultTitle = 'S2 Management Solutions - Leading IT Transformation, Disaster Recovery & Cybersecurity in MENA';
  const defaultDescription = 'Premier IT transformation and digital modernization services in MENA. Expert disaster recovery, cybersecurity, data protection, and IT orchestration solutions for enterprises across UAE, Saudi Arabia, and Middle East.';
  const defaultKeywords = 'disaster recovery MENA, cybersecurity UAE, IT transformation Middle East, digital transformation Saudi Arabia, Carbonite solutions, IT orchestration, data protection MENA, enterprise cybersecurity, business continuity';

  const finalTitle = title || routeSEO.title || defaultTitle;
  const finalDescription = description || routeSEO.description || defaultDescription;
  const finalKeywords = keywords || routeSEO.keywords || defaultKeywords;
  const finalOgImage = ogImage || routeSEO.ogImage || 'https://s2mgt.com/assets/s2-logo.png';
  const finalCanonical = canonicalUrl || (routeSEO.canonicalPath ? `${BASE_URL}${routeSEO.canonicalPath}` : `${BASE_URL}${pathname}`);

  return (
    <Helmet>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <link rel="canonical" href={finalCanonical} />

      {/* Open Graph */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:url" content={finalCanonical} />
      <meta property="og:image" content={finalOgImage} />

      {/* Twitter */}
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalOgImage} />

      {author && <meta name="author" content={author} />} 
    </Helmet>
  );
}
