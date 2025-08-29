// Bot detection and SEO serving script
(function() {
  const userAgent = navigator.userAgent.toLowerCase();
  const isBot = /bot|crawler|spider|crawling|googlebot|bingbot|facebookexternalhit|twitterbot|linkedinbot|whatsapp|telegram|slack|pinterest/i.test(userAgent);
  
  if (isBot) {
    // Prevent React from loading for bots
    window.__PRERENDER_INJECTED = true;
    
    // Map routes to SEO data
    const seoData = {
      '/': {
        title: 'S2 Management Solutions | IT Infrastructure & Cybersecurity MENA',
        description: 'Leading IT infrastructure and cybersecurity solutions provider in MENA. Official distributor of enterprise data protection, disaster recovery, and security solutions.',
        content: '<h1>S2 Management Solutions</h1><p>Leading IT infrastructure and cybersecurity solutions provider in MENA region.</p>'
      },
      '/vendors/opentext': {
        title: 'OpenText Official Distributor MENA | S2 Management Solutions',
        description: 'S2 Management - Official OpenText distributor in MENA. Carbonite Availability, Migrate, Cloud Backup, Email Archiving & Secure Cloud solutions.',
        content: '<h1>OpenText Official Distributor MENA</h1><p>S2 Management is the official OpenText distributor in MENA region, providing Carbonite Availability, Migrate, Cloud Backup, Email Archiving and Secure Cloud solutions.</p>'
      },
      '/solutions/opentext-carbonite-availability': {
        title: 'OpenText (Carbonite) Distributor MENA | UAE, KSA, Qatar',
        description: 'S2 Management Official MENA distributor of OpenText Carbonite Availability. Real-time replication, automated failover & 24/7 protection.',
        content: '<h1>OpenText Carbonite Availability - Official MENA Distributor</h1><p>Real-time replication, automated failover, and 24/7 protection for businesses across MENA region.</p>'
      }
      // Add more routes as needed
    };
    
    const currentPath = window.location.pathname;
    const pageData = seoData[currentPath] || seoData['/'];
    
    // Update document title and meta tags
    document.title = pageData.title;
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', pageData.description);
    
    // Insert content for bots
    const root = document.getElementById('root');
    if (root) {
      root.innerHTML = pageData.content;
    }
  }
})();