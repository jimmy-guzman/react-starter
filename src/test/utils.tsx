import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  createMemoryHistory,
  RootRoute,
  Route,
  Router,
  RouterProvider,
} from '@tanstack/react-router'
import { cleanup, render } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { Suspense } from 'react'
import { afterEach } from 'vitest'

afterEach(() => {
  cleanup()
})

const queryClient = new QueryClient()

const rootRoute = new RootRoute()

const indexRoute = new Route({ getParentRoute: () => rootRoute, path: '/' })

const memoryHistory = createMemoryHistory({ initialEntries: ['/'] })

const routeTree = rootRoute.addChildren([indexRoute])

const router = new Router({ routeTree, history: memoryHistory })

const withRouter = (Story: React.ReactNode) => {
  return <RouterProvider router={router} defaultComponent={() => Story} />
}

const customRender = (ui: React.ReactElement, options = {}) => {
  return {
    user: userEvent.setup(),
    ...render(ui, {
      wrapper: ({ children }) => (
        <Suspense>
          <QueryClientProvider client={queryClient}>
            {withRouter(children)}
          </QueryClientProvider>
        </Suspense>
      ),
      ...options,
    }),
  }
}

export { renderHook, screen, within } from '@testing-library/react'
export { customRender as render }
