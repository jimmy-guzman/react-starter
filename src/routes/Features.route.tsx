import { lazyRouteComponent, Route } from '@tanstack/react-router'

import rootRoute from './Root.route'

export default new Route({
  getParentRoute: () => rootRoute,
  path: '/features',
  component: lazyRouteComponent(() => import('@/pages/Features')),
})
