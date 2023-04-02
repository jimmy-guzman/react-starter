import App from './App'
import { render, userEvent, screen } from './test/utils'

describe('app', () => {
  it('should increase count', async () => {
    render(<App />)

    userEvent.click(screen.getByRole('button', { name: /count is 0/i }))

    await expect(
      screen.findByRole('button', { name: /count is 1/i })
    ).resolves.toBeInTheDocument()
  })
})
