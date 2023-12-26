import { Route } from '@tanstack/react-router'

import Home from '@/pages/Home'

import rootRoute from './rootRoute'

export default new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
})
