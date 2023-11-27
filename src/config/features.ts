import { type externalLinks } from './externalLinks'

type Icons =
  | '⚡️'
  | '🏷️'
  | '💄'
  | '🧱'
  | '🧪'
  | '🩺'
  | '🎨'
  | '📦️'
  | '👷'
  | '🚚'
  | '🐻'

interface Feature {
  icon: Icons
  feature: keyof typeof externalLinks
  description: `for ${string}.`
}

export const features = [
  {
    icon: '🚚',
    feature: '@tanstack/router',
    description: 'for type-safe routing.',
  },
  {
    icon: '🐻',
    feature: 'zustand',
    description: 'for a small, fast, and scalable state management solution.',
  },
  {
    icon: '⚡️',
    feature: 'Vite',
    description: 'for instant server start and lighting fast HMR.',
  },
  {
    icon: '🏷️',
    feature: 'TypeScript',
    description: 'for a less frustrating & consistent experience.',
  },
  {
    icon: '💄',
    feature: 'tailwindcss',
    description: 'for utility-first CSS.',
  },
  {
    icon: '🧱',
    feature: 'storybook',
    description: 'for building UIs in isolation.',
  },
  {
    icon: '🧪',
    feature: 'vitest',
    description: 'for fast testing.',
  },
  {
    icon: '🧪',
    feature: 'playwright',
    description: 'for fast and reliable e2e testing.',
  },
  {
    icon: '🩺',
    feature: 'eslint',
    description: 'for static analysis.',
  },
  {
    icon: '🎨',
    feature: 'prettier',
    description: 'for formatting.',
  },
  {
    icon: '📦️',
    feature: 'pnpm',
    description: 'for fast and consistent installs.',
  },
  {
    icon: '👷',
    feature: 'GitHub Actions',
    description: 'for easy workflow automation.',
  },
] satisfies Feature[]
