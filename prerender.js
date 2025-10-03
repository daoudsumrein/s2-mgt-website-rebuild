import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

// Define all routes exactly as they appear in App.tsx
const routesToPrerender = [
  '/',
  '/about',
  '/services',
  '/solutions',
  '/contact',
  '/vendors',
  '/clients',
  '/vendors/opentext',
  '/vendors/tds',
  '/vendors/appcure',
  '/vendors/sangfor',
  '/vendors/arrosoft',
  '/vendors/nakivo',
  '/solutions/opentext-carbonite-availability',
  '/solutions/data-protection',
  '/solutions/it-discovery',
  '/solutions/secure-cloud',
  '/solutions/app-modernization',
  '/solutions/security',
  '/solutions/email-archiving',
  '/solutions/endpoint-backup',
  '/solutions/saas-backup',
  '/solutions/onprem-backup',
  '/solutions/opentext-carbonite-migrate',
  '/solutions/disaster-recovery-orchestration',
  '/solutions/server-migration-orchestration',
  '/solutions/endpoint-protection',
  '/solutions/edr',
  '/solutions/mdr',
  '/solutions/security-awareness',
  '/solutions/email-protection',
  '/solutions/email-encryption',
  '/solutions/ransomware-protection',
  '/solutions/OpenText-Server-Backup',
  '/solutions/servers-data-protection'
]

;(async () => {
  for (const url of routesToPrerender) {
    const { html: appHtml, helmetContext } = render(url);
    const { helmet } = helmetContext;
    
    // Inject app HTML
    let html = template.replace(`<!--app-html-->`, appHtml);

    // Strip generic static SEO tags to prevent duplicates; Helmet will add page-specific tags
    html = html
      .replace(/<link rel=\"canonical\"[\s\S]*?>/gi, '')
      .replace(/<meta name=\"description\"[\s\S]*?>/gi, '')
      .replace(/<meta name=\"keywords\"[\s\S]*?>/gi, '')
      .replace(/<meta name=\"author\"[\s\S]*?>/gi, '')
      .replace(/<meta property=\"og:[^\"]+\"[\s\S]*?>/gi, '')
      .replace(/<meta property=\"twitter:[^\"]+\"[\s\S]*?>/gi, '');
    
    // Inject helmet data into head
    if (helmet) {
      // Replace title
      if (helmet.title) {
        html = html.replace(/<title>.*?<\/title>/, helmet.title.toString());
      }
      
      // Inject meta tags before </head>
      const metaTags = [
        helmet.meta?.toString() || '',
        helmet.link?.toString() || '',
      ].filter(Boolean).join('\n    ');

      if (metaTags) {
        html = html.replace('</head>', `    ${metaTags}\n  </head>`);
      }
    }

    const filePath = `dist${url === '/' ? '/index.html' : `${url}/index.html`}`
    const fileDir = path.dirname(toAbsolute(filePath))
    
    // Create directory if it doesn't exist
    if (!fs.existsSync(fileDir)) {
      fs.mkdirSync(fileDir, { recursive: true })
    }
    
    fs.writeFileSync(toAbsolute(filePath), html)
    console.log('pre-rendered:', filePath)
  }
})()
