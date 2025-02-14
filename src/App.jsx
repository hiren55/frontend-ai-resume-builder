import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import { Navigate, Outlet } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'
import Header from './components/custom/Header'
import { Toaster } from './components/ui/sonner'


function App() {
  const [count, setCount] = useState(0)
  const {user,isSignedIn,isLoaded}=useUser();

  if(!isSignedIn && isLoaded){
    return <Navigate to={'auth/signIn'}/>
  }

  return (
    <>
    <Header/>
    <main>
    <Outlet/>
    </main>
   
    <Toaster/>
    

    </>
  )
}

export default App
