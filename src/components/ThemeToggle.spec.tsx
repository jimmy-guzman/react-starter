import { render, screen } from '@/test/utils'

import { ThemeToggle } from './ThemeToggle'

const selectors = {
  get themeToggle() {
    return screen.getByRole('checkbox', { name: /toggle theme/i })
  },
}

describe('ThemeToggle', () => {
  it('should render link and image', async () => {
    const { user } = render(<ThemeToggle />)

    await screen.findByRole('checkbox', { name: /toggle theme/i })

    expect(selectors.themeToggle).not.toBeChecked()

    await user.click(selectors.themeToggle)

    expect(selectors.themeToggle).toBeChecked()
  })
})
