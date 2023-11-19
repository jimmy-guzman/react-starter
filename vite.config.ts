import path from 'node:path'

import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import { configDefaults } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  resolve: { alias: { '@': path.resolve(__dirname, './src') } },
  test: {
    coverage: { 100: true, reporter: ['html', 'text-summary'] },
    environment: 'happy-dom',
    exclude: [...configDefaults.exclude, 'e2e/*'],
    globals: true,
    setupFiles: './src/test/setup.ts',
  },
})
