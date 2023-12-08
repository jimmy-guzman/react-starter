import { Outlet } from '@tanstack/react-router'
import { AnimatePresence } from 'framer-motion'
import { Suspense } from 'react'

import { Navigation } from '@/components/Navigation'
import { PageLoading } from '@/components/PageLoading'

export const RootLayout = () => {
  return (
    <div>
      <Navigation title='React Starter +' />
      <AnimatePresence mode='wait'>
        <Suspense fallback={<PageLoading />}>
          <Outlet />
        </Suspense>
      </AnimatePresence>
    </div>
  )
}
