export { render }

import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'

async function render(pageContext: any) {
  const { Page } = pageContext
  
  const page = React.createElement(Page)
  const container = document.getElementById('root')
  
  if (!container) throw new Error('Root element not found')
  
  if (pageContext.isHydration) {
    hydrateRoot(container, page)
  } else {
    if (!container.innerHTML) {
      const root = createRoot(container)
      root.render(page)
    }
  }
}
