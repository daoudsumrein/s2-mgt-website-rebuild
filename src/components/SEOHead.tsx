import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  author?: string;
}

export default function SEOHead({
  title = "S2 Management Solutions - Leading IT Transformation, Disaster Recovery & Cybersecurity in MENA",
  description = "Premier IT transformation and digital modernization services in MENA. Expert disaster recovery, cybersecurity, data protection, and IT orchestration solutions for enterprises across UAE, Saudi Arabia, and Middle East.",
  keywords = "disaster recovery MENA, cybersecurity UAE, IT transformation Middle East, digital transformation Saudi Arabia, Carbonite solutions, IT orchestration, data protection MENA, enterprise cybersecurity, business continuity",
  canonicalUrl = "https://s2mgt.com",
  ogImage = "https://s2mgt.com/assets/s2-logo.png",
  author = "S2 Management Solutions"
}: SEOHeadProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="S2 Management Solutions" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}