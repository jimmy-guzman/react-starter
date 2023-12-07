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
      port: parseInt(env.PORT),
    },
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
  }
})
