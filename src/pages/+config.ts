import type { Config } from 'vike/types'

export default {
  // Enable pre-rendering for all pages
  prerender: true,
  
  // Client-side routing for smooth navigation
  clientRouting: true,
  
  // Hydration for interactive components
  hydrationCanBeAborted: true,
  
  // Pass pageContext to all pages
  passToClient: ['pageProps', 'urlPathname', 'documentProps'],
} satisfies Config
