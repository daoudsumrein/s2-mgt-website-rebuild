import fs from 'node:fs'
import { build } from 'vite'

console.log('Building client...')
await build()

console.log('Building server...')
await build({
  ssr: 'src/entry-server.tsx',
  build: {
    outDir: 'dist/server',
    rollupOptions: {
      output: {
        entryFileNames: 'entry-server.js',
        format: 'es'
      }
    }
  }
})

console.log('Build complete!')