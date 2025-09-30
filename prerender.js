import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

// Routes extracted from App.tsx to ensure exact matching
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
    
    let html = template.replace(`<!--app-html-->`, appHtml);
    
    // Inject helmet tags if available
    if (helmet) {
      html = html.replace('</head>', `${helmet.title.toString()}${helmet.meta.toString()}${helmet.link.toString()}</head>`);
    }

    const filePath = `dist${url === '/' ? '/index' : url}.html`
    const absoluteFilePath = toAbsolute(filePath)
    
    // Ensure directory exists before writing file
    const dir = path.dirname(absoluteFilePath)
    fs.mkdirSync(dir, { recursive: true })
    
    fs.writeFileSync(absoluteFilePath, html)
    console.log('pre-rendered:', filePath)
  }
})()