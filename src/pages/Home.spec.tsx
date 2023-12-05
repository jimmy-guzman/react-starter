import { render, screen } from '@/test/utils'

import Home from './Home'

describe('<Home />', () => {
  it('should render page', async () => {
    render(<Home />)

    expect(
      await screen.findByRole('heading', { name: 'React Starter Plus' })
    ).toBeInTheDocument()
  })
})
