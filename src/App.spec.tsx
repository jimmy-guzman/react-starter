import App from './App'
import { render, screen } from './test/utils'

describe('app', () => {
  it('should increase count', async () => {
    const { user } = render(<App />)

    await user.click(screen.getByRole('button', { name: /count is 0/i }))

    expect(
      screen.getByRole('button', { name: /count is 1/i })
    ).toBeInTheDocument()
  })
})
