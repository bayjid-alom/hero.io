import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import RootLayout from './layout/RootLayout'
import Apps from './pages/apps/Apps'
import InstallApps from './pages/installApps/InstallApps'
import NotFoundPage from './pages/notFountPage/NotFoundPage'
import Homepage from './pages/homepage/Homepage'



const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Homepage
      },
      {
        path: '/apps',
        Component: Apps
      },
      {
        path: '/installed-apps',
        Component: InstallApps
      }
    ],
    errorElement: <NotFoundPage></NotFoundPage>
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router}>
    </RouterProvider>

  </StrictMode>,
)
