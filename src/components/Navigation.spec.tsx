import { render, screen } from '@/test/utils'

import { Navigation } from './Navigation'

describe('<Navigation />', () => {
  it('should render title', async () => {
    render(<Navigation title='tests' />)

    expect(
      await screen.findByRole('link', { name: 'tests' })
    ).toBeInTheDocument()
  })
})
