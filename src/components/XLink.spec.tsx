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
  ] as const)('should render %s link', (to) => {
    render(<XLink to={to} />)

    expect(screen.getByRole('link', { name: to })).toBeInTheDocument()
  })
})
