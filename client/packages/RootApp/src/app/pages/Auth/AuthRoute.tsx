import { FC } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuthStore } from '../../store/useAuth.store'

const AuthRoute: FC = ({ children }) => {
  const location = useLocation()
  const { isLoggedIn, login } = useAuthStore()
  if (!isLoggedIn()) {
    return <Navigate to="/landing" state={{ from: location }} replace />
  }

  return <>{children}</>
}

export default AuthRoute
