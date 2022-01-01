import * as React from 'react'

type AuthContextState = {
  status: 'loggedOut' | 'loggedIn'
  username?: string
}

type AuthContext = {
  login: (username: string) => void
  logout: () => void
} & AuthContextState

const AuthContext = React.createContext<AuthContext>(null!)

const AuthProvider = (props: { children: React.ReactNode }) => {
  const [state, setState] = React.useState<AuthContextState>({
    status: 'loggedOut'
  })

  const login = (username: string) => {
    // console.log(username)
    setState({ status: 'loggedIn', username })
  }

  const logout = () => {
    setState({ status: 'loggedOut' })
  }

  const contextValue = React.useMemo(() => {
    return {
      ...state,
      login,
      logout
    }
  }, [state])

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return React.useContext(AuthContext)
}

export default AuthProvider
