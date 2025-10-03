import vikeReact from 'vike-react/config'
import type { Config } from 'vike/types'

export default {
  extends: vikeReact,
  prerender: true,
  hydrationCanBeAborted: true,
  passToClient: ['pageProps', 'urlPathname', 'documentProps'],
} satisfies Config
