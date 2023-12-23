import { queryOptions } from '@tanstack/react-query'

import { features } from '@/config/features'

const fetchFeatures = async () => {
  await new Promise((r) => setTimeout(r, 500))

  return Promise.resolve(features)
}

export const featuresQueryOptions = queryOptions({
  queryKey: ['features'] as const,
  queryFn: () => fetchFeatures(),
})
