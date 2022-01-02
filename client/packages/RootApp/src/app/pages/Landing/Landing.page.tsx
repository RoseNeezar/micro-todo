import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import Devices from '../../../assets/devices.svg'
import { useAuthStore } from '../../store/useAuth.store'

const Landing = () => {
  const { login } = useAuthStore()
  const location = useLocation()
  const navigate = useNavigate()

  // @ts-ignore
  const from = location.state?.from?.pathname || '/'

  const handleSubmit = () => {
    login()
    navigate(from, { replace: true })
  }
  return (
    <div tw="h-screen pb-14 bg-right bg-cover bg-gray-100">
      <div tw="w-full container mx-auto p-6">
        <div tw="w-full flex items-center justify-between">
          <a
            tw="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
            href="https://twitter.com/intent/tweet?url=#"
          >
            <svg
              tw="h-8 fill-current text-indigo-600 pr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-5.6-4.29a9.95 9.95 0 0 1 11.2 0 8 8 0 1 0-11.2 0zm6.12-7.64l3.02-3.02 1.41 1.41-3.02 3.02a2 2 0 1 1-1.41-1.41z" />
            </svg>{' '}
            Todo app
          </a>

          <div tw="flex w-1/2 justify-end content-center">
            <a
              tw="inline-block text-blue-300 no-underline hover:text-indigo-800 hover:underline text-center h-10 p-2 md:h-auto md:p-4"
              data-tippy-content="@twitter_handle"
              href="https://twitter.com/intent/tweet?url=#"
            >
              <svg
                tw="fill-current h-8 "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div tw="container pt-24 md:pt-48 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div tw="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
          <h1
            tw="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left "
            className="slide-in-bottom-h1"
          >
            Todo App
          </h1>
          <p
            tw="leading-normal text-base md:text-2xl mb-8 text-center md:text-left "
            className="slide-in-bottom-subtitle"
          >
            Made with micro frontend architecture
          </p>
          <p
            tw="text-blue-400 font-bold pb-8 lg:pb-6 text-center md:text-left "
            className="fade-in"
          >
            Try it out !
          </p>
          <div
            tw="flex w-full justify-center md:justify-start pb-24 lg:pb-0 "
            className="fade-in"
          >
            <Link
              tw="h-12 mr-4 bg-purple-800 text-white text-center rounded-2xl p-3 w-32"
              className="bounce-top-icons"
              to="/login"
              state={{ backgroundLocation: location }}
            >
              Login
            </Link>
            <Link
              tw="h-12  bg-purple-800 text-white text-center rounded-2xl p-3 w-32"
              className="bounce-top-icons"
              to="/register"
              state={{ backgroundLocation: location }}
            >
              Register
            </Link>
          </div>
        </div>

        <div tw="w-full xl:w-3/5 py-6 overflow-y-hidden">
          <img
            tw="w-5/6 mx-auto lg:mr-0 "
            className="slide-in-bottom"
            src={Devices}
            alt="_"
          />
        </div>

        <div
          tw="w-full pt-16 pb-6 text-sm text-center md:text-left "
          className="fade-in"
        >
          <a
            tw="text-gray-500 no-underline hover:no-underline"
            href="https://twitter.com/intent/tweet?url=#"
          >
            &copy; Todo App 2022
          </a>
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default Landing
