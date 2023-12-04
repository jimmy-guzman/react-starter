import './index.css'

import { Router, RouterProvider } from '@tanstack/react-router'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import featuresRoute from './routes/featuresRoute'
import homeRoute from './routes/homeRoute'
import rootRoute from './routes/rootRoute'

const routeTree = rootRoute.addChildren([featuresRoute, homeRoute])

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
