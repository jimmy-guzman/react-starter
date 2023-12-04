import path from 'node:path'

import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import { configDefaults } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  resolve: { alias: { '@': path.resolve(__dirname, './src') } },
  test: {
    coverage: {
      reporter: ['html', 'text-summary'],
      exclude: [
        '**/*.d.ts',
        'storybook-static/**',
        '.storybook/**',
        '**/*.stories.*',
        '**/main.tsx',
        '{tailwind,postcss,playwright}.config.*',
        '.{eslint,prettier}rc.{?(c|m)js,yml}',
        'node_modules/.pnpm/**',
      ],
    },
    environment: 'happy-dom',
    exclude: [...configDefaults.exclude, 'e2e/*'],
    globals: true,
    setupFiles: './src/test/setup.ts',
  },
})
