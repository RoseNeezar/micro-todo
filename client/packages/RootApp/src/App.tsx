import React, { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import AuthRoute from './app/pages/Auth/AuthRoute'
import Home from './app/pages/Home/Home.page'
import Landing from './app/pages/Landing/Landing.page'

// const Experience = React.lazy(() => import('./app/remote/experience.page'))

const App: React.FC = () => {
  const location = useLocation()
  useEffect(() => {
    const el = document.querySelector('.overlay')
    // @ts-ignore
    el.style.display = 'none'
  }, [])
  return (
    <Routes>
      <Route path="/landing" element={<Landing />} />
      <Route
        path="/home"
        element={
          <AuthRoute>
            <Home />
          </AuthRoute>
        }
      />
      <Route path="/" element={<Navigate replace to="/landing" />} />
    </Routes>
  )
}

export default App
