import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';

export function render(url: string) {
  console.log(`[SSR] Rendering for URL: ${url}`);
  
  // Create a mock request/response for SSR
  const html = ReactDOMServer.renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
  
  console.log(`[SSR] Generated HTML length for ${url}: ${html.length} characters`);
  
  // Debug: Check if specific content exists in the HTML
  if (url.includes('opentext')) {
    console.log(`[SSR] OpenText content check: ${html.includes('OpenText Official Distributor') ? 'FOUND' : 'NOT FOUND'}`);
  }
  
  return html;
}