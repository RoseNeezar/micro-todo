import React, { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import AuthRoute from './app/pages/Auth/AuthRoute'
import Login from './app/pages/Auth/Login.modal'
import Register from './app/pages/Auth/Register.modal'
import Home from './app/pages/Home/Home.page'
import Landing from './app/pages/Landing/Landing.page'

// const Experience = React.lazy(() => import('./app/remote/experience.page'))

const App: React.FC = () => {
  const location = useLocation()
  const state = location.state as { backgroundLocation?: Location }

  useEffect(() => {
    const el = document.querySelector('.overlay')
    // @ts-ignore
    el.style.display = 'none'
  }, [])
  return (
    <>
      <Routes location={state?.backgroundLocation || location}>
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
      {state?.backgroundLocation && (
        <Routes>
          <Route
            path="/register"
            element={<Register isOpen={!!state?.backgroundLocation} />}
          />
          <Route
            path="/login"
            element={<Login isOpen={!!state?.backgroundLocation} />}
          />
        </Routes>
      )}
    </>
  )
}

export default App
