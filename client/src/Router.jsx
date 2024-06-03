import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />,
      },

      {
        path: "/login",
        element: <Login/>,
      }, 
      {
        path:"/register", 
        element: <Register/>
      }
])
export default Router