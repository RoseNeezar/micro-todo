import * as React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import Todo from './app/pages/Todo.page'

const App: React.FC<{ authStore: any }> = ({ authStore }) => {
  return (
    <React.Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path="/todo" element={<Todo authStore={authStore} />} />
        <Route path="*" element={<h1>Nothing</h1>} />
        <Route path="/" element={<Navigate replace to="/todo" />} />
      </Routes>
    </React.Suspense>
  )
}

export default App
