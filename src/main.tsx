import './index.css'

import { Router, RouterProvider } from '@tanstack/react-router'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import FeaturesRoute from './routes/Features.route'
import HomeRoute from './routes/Home.route'
import RootRoute from './routes/Root.route'

const routeTree = RootRoute.addChildren([HomeRoute, FeaturesRoute])

const router = new Router({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const root = document.getElementById('root')

if (root) {
  createRoot(root).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  )
}
