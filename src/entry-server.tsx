import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';

export function render(url: string) {
  console.log(`[SSR] Rendering for URL: ${url}`);
  
  const html = ReactDOMServer.renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
  
  console.log(`[SSR] Generated HTML length for ${url}: ${html.length} characters`);
  
  return html;
}