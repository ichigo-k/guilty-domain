import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Landing from './pages/Landing'

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />,
      },

      {
        path: "/shop",
        element: <div>Shop</div>,
      }
])
export default Router