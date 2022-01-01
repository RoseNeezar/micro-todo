import { FC } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuthStore } from '../../store/useAuth.store'

const AuthRoute: FC = ({ children }) => {
  const location = useLocation()
  const { isLoggedIn, login } = useAuthStore()
  if (!isLoggedIn()) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/landing" state={{ from: location }} replace />
  }

  return <>{children}</>
}

export default AuthRoute
