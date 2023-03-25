import replace from '@rollup/plugin-replace'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

import legacy from '@vitejs/plugin-legacy'
import svgr from 'vite-plugin-svgr'
import viteRawPlugin from 'vite-raw-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteRawPlugin({ fileRegex: /\.md$/ }),
    replace({
      __SENTRY_DEBUG__: false,
    }),
    legacy({
      targets: ['last 5 versions and not dead', 'Firefox ESR', '>= 0.5% in US'],
    }),
    svgr(),
  ],
})
