import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import Homepage from './Homepage.tsx'
import BSC from './BSC.tsx'
import Nav from './Nav.tsx'


const router = createBrowserRouter([
  {
    path: '/',
    Component: Nav,
    children: [
      { index: true, Component: Homepage },
      { path: "bsc", Component: BSC },
    ],
  }
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
