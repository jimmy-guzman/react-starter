import { render, screen } from '@/test/utils'

import { XLink } from './XLink'

describe('logo', () => {
  it('should render link and image', () => {
    render(<XLink to='Vite' />)

    expect(screen.getByRole('link', { name: /vite/i })).toBeInTheDocument()
  })
})
