import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignInPage from './auth/signIn/SignInPage'
import Home from './Home/HomePage'
import DashBoard from './dashboard/DashBoard'
import { ClerkProvider } from '@clerk/clerk-react'
import EditResume from './dashboard/resume/[resumeId]/edit/EditResume'
import ViewResume from './my-resume/[resumeId]/view/ViewResume'
import ContactPage from './Home/Contact'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
const router = createBrowserRouter([
  {
    element: <App />,
    children: [

      {
        path: '/dashboard',
        element: <DashBoard />
      },
      {
        path:'/dashboard/resume/:resumeId/edit',
        element:<EditResume/>
      },

    ]
    
  },
  
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/auth/signIn',
    element: <SignInPage />
  },
  {
    path: 'my-resume/:resumeId/view',
    element:<ViewResume/>
  },
  {
    path:'/contact',
    element:<ContactPage/>
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
    </ClerkProvider>

  </StrictMode>,
)
