import { render, screen } from '@/test/utils'

import { XLink } from './XLink'

describe('XLink', () => {
  it.each([
    'Vite',
    'React',
    'TypeScript',
    'tailwindcss',
    'GitHub',
    'Deploy',
  ] as const)('should render %s link', async (to) => {
    render(<XLink to={to} />)

    await expect(
      screen.findByRole('link', { name: to })
    ).resolves.toBeInTheDocument()
  })
})
