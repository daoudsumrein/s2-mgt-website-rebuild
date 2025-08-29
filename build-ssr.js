import { build } from 'vite'

// Build the client
await build()

// Build the server
await build({
  build: {
    ssr: 'src/entry-server.tsx',
    outDir: 'dist/server'
  }
})

console.log('✅ SSR build completed')