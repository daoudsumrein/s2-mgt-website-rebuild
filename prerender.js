import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

// Recursively get all routes from src/pages
function getAllRoutes(dir, baseRoute = '') {
  const routes = []
  const files = fs.readdirSync(toAbsolute(dir))
  
  for (const file of files) {
    const fullPath = path.join(dir, file)
    const stat = fs.statSync(toAbsolute(fullPath))
    
    if (stat.isDirectory()) {
      // Recursively process subdirectories
      routes.push(...getAllRoutes(fullPath, `${baseRoute}/${file}`))
    } else if (file.endsWith('.tsx')) {
      const name = file.replace(/\.tsx$/, '')
      if (name === 'Index') {
        routes.push(baseRoute === '' ? '/' : baseRoute)
      } else {
        routes.push(`${baseRoute}/${name.toLowerCase()}`)
      }
    }
  }
  
  return routes
}

const routesToPrerender = getAllRoutes('src/pages')

;(async () => {
  for (const url of routesToPrerender) {
    const appHtml = render(url);
    const html = template.replace(`<!--app-html-->`, appHtml)

    const filePath = `dist${url === '/' ? '/index' : url}.html`
    const fileDir = path.dirname(toAbsolute(filePath))
    
    // Create directory if it doesn't exist
    if (!fs.existsSync(fileDir)) {
      fs.mkdirSync(fileDir, { recursive: true })
    }
    
    fs.writeFileSync(toAbsolute(filePath), html)
    console.log('pre-rendered:', filePath)
  }
})()
