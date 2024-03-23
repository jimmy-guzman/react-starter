import { TanStackRouterVite as tanStackRouterVite } from '@tanstack/router-vite-plugin'
import react from '@vitejs/plugin-react-swc'
import { defineConfig, loadEnv } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { configDefaults } from 'vitest/config'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      react(),
      tanStackRouterVite({ generatedRouteTree: './src/route-tree.gen.ts' }),
      tsconfigPaths(),
    ],
    server: {
      port: parseInt(env.PORT, 10),
    },
    entries: ['index.html'],
    test: {
      environment: 'happy-dom',
      globals: true,
      exclude: [...configDefaults.exclude, 'e2e/*'],
      setupFiles: './src/testing/setup.ts',
      coverage: {
        reporter: ['html', 'text-summary'],
        exclude: [
          ...(configDefaults.coverage.exclude ?? []),
          'storybook-static/**',
          '.storybook/**',
          '**/*.stories.*',
          '**/main.tsx',
          '{tailwind,postcss,playwright}.config.*',
          '**/*.gen.*',
        ],
      },
    },
  }
})
