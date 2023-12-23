import { lazyRouteComponent, Route } from '@tanstack/react-router'

import { featuresQueryOptions } from '@/api/features'
import { PageLoading } from '@/components/PageLoading'

import rootRoute from './rootRoute'

export default new Route({
  getParentRoute: () => rootRoute,
  pendingComponent: PageLoading,
  path: '/features',
  component: lazyRouteComponent(() => import('@/pages/Features')),
  loader: ({ context: { queryClient } }) => {
    return queryClient.ensureQueryData(featuresQueryOptions)
  },
})
