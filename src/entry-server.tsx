import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';

// Mock browser globals for SSR
const mockWindow = {
  location: { pathname: '/', search: '', hash: '' },
  document: { querySelector: () => null, getElementById: () => null },
  navigator: { userAgent: 'SSR' },
  addEventListener: () => {},
  removeEventListener: () => {},
};

// @ts-ignore
global.window = mockWindow;
// @ts-ignore  
global.document = mockWindow.document;
// @ts-ignore
global.navigator = mockWindow.navigator;

export function render(url: string) {
  console.log(`[SSR] Rendering for URL: ${url}`);
  
  try {
    const html = ReactDOMServer.renderToString(
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    );
    
    console.log(`[SSR] Generated HTML length for ${url}: ${html.length} characters`);
    return html;
  } catch (error) {
    console.error(`[SSR] Error rendering ${url}:`, error);
    return '<div>Error during SSR</div>';
  }
}