import { cleanup, render } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { afterEach } from 'vitest'

afterEach(() => {
  cleanup()
})

const customRender = (ui: React.ReactElement, options = {}) => {
  return {
    user: userEvent.setup(),
    ...render(ui, {
      wrapper: ({ children }) => children,
      ...options,
    }),
  }
}

export { renderHook, screen, within } from '@testing-library/react'
export { customRender as render }
