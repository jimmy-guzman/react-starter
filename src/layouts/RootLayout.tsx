import { Outlet } from '@tanstack/react-router'
import { AnimatePresence } from 'framer-motion'

import { Navigation } from '@/components/Navigation'

export const RootLayout = () => {
  return (
    <div>
      <Navigation title='React Starter +' />
      <AnimatePresence mode='wait'>
        <Outlet />
      </AnimatePresence>
    </div>
  )
}
