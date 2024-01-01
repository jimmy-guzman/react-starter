import path from 'node:path'

import react from '@vitejs/plugin-react-swc'
import { defineConfig, loadEnv } from 'vite'
import { configDefaults } from 'vitest/config'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],
    resolve: { alias: { '@': path.resolve(__dirname, './src') } },
    server: {
      port: parseInt(env.PORT, 10),
    },
    test: {
      environment: 'happy-dom',
      globals: true,
      exclude: [...configDefaults.exclude, 'e2e/*'],
      setupFiles: './src/test/setup.ts',
      coverage: {
        reporter: ['html', 'text-summary'],
        exclude: [
          ...(configDefaults.coverage.exclude ?? []),
          'storybook-static/**',
          '.storybook/**',
          '**/*.stories.*',
          '**/main.tsx',
          '{tailwind,postcss,playwright}.config.*',
        ],
      },
    },
  }
})
