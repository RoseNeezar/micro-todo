import React from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import ImageView from './app/component/ImageView'
import Home from './app/pages/home.page'
import Modal from './app/pages/modal.page'
import Experience from './app/remote/todo.page'
import { useAuth } from './app/store/AuthProvider'

// const Experience = React.lazy(() => import('./app/remote/experience.page'))

const App: React.FC = () => {
  const auth = useAuth()
  const location = useLocation()

  // The `backgroundLocation` state is the location that we were at when one of
  // the gallery links was clicked. If it's there, use it as the location for
  // the <Routes> so we show the gallery in the background, behind the modal.
  const state = location.state as { backgroundLocation?: Location }

  return (
    <Routes>
      <Route path="/" element={<Home item="hello" />} />
      <Route path="/21" element={<h1>True</h1>} />
      <Route path="/img/:id" element={<ImageView />} />
      {/* <Route path="/experience" element={<Experience />} /> */}
    </Routes>
  )
}

export default App
