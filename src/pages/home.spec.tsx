import { render, screen } from '@/testing/utils'

import { Home } from './home'

describe('<Home />', () => {
  it('should increase count', async () => {
    const { user } = render(<Home />)

    await user.click(await screen.findByRole('button', { name: /count is 0/i }))

    expect(
      screen.getByRole('button', { name: /count is 1/i })
    ).toBeInTheDocument()
  })
})
