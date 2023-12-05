import { render, screen } from '@/test/utils'

import Features from './Features'

describe('<Features />', () => {
  it('should render page', async () => {
    render(<Features />)

    expect(
      await screen.findByRole('heading', { name: 'Features' })
    ).toBeInTheDocument()
  })
})
