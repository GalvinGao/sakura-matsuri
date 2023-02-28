import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import viteRawPlugin from 'vite-raw-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteRawPlugin({ fileRegex: /\.md$/ })],
})
