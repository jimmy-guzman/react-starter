import { rootRouteWithContext } from '@tanstack/react-router'

import { RootLayout } from '@/layouts/RootLayout'

const rootRoute = rootRouteWithContext()({
  component: RootLayout,
})

export default rootRoute
