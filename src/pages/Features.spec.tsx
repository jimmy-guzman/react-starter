import { features } from '@/config/features'
import { render, screen } from '@/test/utils'

import Features from './Features'

describe('<Features />', () => {
  it('should render page', async () => {
    render(<Features />)

    expect(
      await screen.findByRole('heading', { name: 'Features' })
    ).toBeInTheDocument()
  })

  it.each(features)('should render $feature link', async (feature) => {
    render(<Features />)

    const link = await screen.findByRole('link', { name: feature.feature })

    expect(link).toBeInTheDocument()
  })
})
