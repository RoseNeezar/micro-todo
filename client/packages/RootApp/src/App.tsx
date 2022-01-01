import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import ImageView from './app/component/ImageView'
import AuthPage from './app/pages/Auth/Auth.page'
import Home from './app/pages/Home/Home.page'
import { useAuthStore } from './app/store/useAuth.store'

// const Experience = React.lazy(() => import('./app/remote/experience.page'))

const App: React.FC = () => {
  const { isLoggedIn, login } = useAuthStore()
  const location = useLocation()

  // The `backgroundLocation` state is the location that we were at when one of
  // the gallery links was clicked. If it's there, use it as the location for
  // the <Routes> so we show the gallery in the background, behind the modal.
  // const state = location.state as { backgroundLocation?: Location }

  return (
    <Routes>
      <Route
        path="/"
        element={isLoggedIn() ? <Home item="hello" /> : <AuthPage />}
      />
      <Route path="/21" element={<h1>True</h1>} />
      <Route path="/img/:id" element={<ImageView />} />
    </Routes>
  )
}

export default App
