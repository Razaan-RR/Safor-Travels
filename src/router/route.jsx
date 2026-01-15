import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Hero from '../components/sections/Hero'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        index: true, 
        element: <Hero />,
      },
    ],
  },
])
