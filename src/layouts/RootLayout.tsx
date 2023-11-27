import { Outlet } from '@tanstack/react-router'

import { Navigation } from '@/components/Navigation'

export const RootLayout = () => {
  return (
    <div>
      <Navigation title='React Starter +' />
      <main className='md:container md:mx-auto'>
        <Outlet />
      </main>
    </div>
  )
}
