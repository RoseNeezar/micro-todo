import React from 'react'
import { useAuth } from '../store/AuthProvider'

const AuthPage = () => {
  const auth = useAuth()
  const [username, setUsername] = React.useState('')

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('clcick')
    auth.login(username)
  }

  return (
    <div tw="p-2 bg-red-300">
      <div tw="bg-blue-400 text-white p-10">You must log in!</div>
      <div tw="h-2" />
      <form onSubmit={onSubmit} tw="flex gap-2">
        <input
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="Username"
          tw="border p-1 px-2 rounded"
        />
        <button
          type="button"
          onClick={() => auth.logout()}
          tw="text-sm bg-blue-500 text-white border inline-block py-1 px-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default AuthPage
