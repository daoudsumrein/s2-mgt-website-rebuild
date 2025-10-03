import React from 'react'

export default function Head({ documentProps, urlPathname }: any) {
  
  const title = documentProps?.title || 'S2 Management - IT Solutions & Services'
  const description = documentProps?.description || 'Leading provider of IT solutions, cybersecurity, data protection, and cloud services.'
  const keywords = documentProps?.keywords || 'IT solutions, cybersecurity, data protection, cloud services'
  const ogImage = documentProps?.ogImage || '/lovable-uploads/hero-bg-compressed.png'
  const canonicalUrl = documentProps?.canonicalUrl || `https://s2management.com${urlPathname}`

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Viewport and theme */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#000000" />
    </>
  )
}
