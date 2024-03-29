import { render, screen } from '@/testing/utils'

import { XLink } from './x-link'

describe('XLink', () => {
  it.each([
    'Vite',
    'React',
    'TypeScript',
    'tailwindcss',
    'GitHub',
    'Deploy',
    'Bun',
  ] as const)('should render %s link', async (to) => {
    render(<XLink to={to} />)

    await expect(
      screen.findByRole('link', { name: to })
    ).resolves.toBeInTheDocument()
  })
})
