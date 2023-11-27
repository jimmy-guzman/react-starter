import { Route } from '@tanstack/react-router'

import Home from '@/pages/Home'

import rootRoute from './Root.route'

export default new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
})
