// @ts-nocheck
import { Transition, Dialog } from '@headlessui/react'
import React, { Fragment, useState , FC } from 'react'
import { useNavigate } from 'react-router-dom'
import InputGroup from '../../component/Input'
import { errorHelper } from '../../utils/errorHelper'

const Register: FC<{ isOpen: boolean }> = ({ isOpen }) => {
  const navigate = useNavigate()

  const [errors, setErrors] = useState<any>({})

  const [formState, setFormState] = useState({
    email: '',
    password: ''
  })
  const { email, password } = formState

  const onChangeText =
    (name: string) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormState({ ...formState, [name]: e.target.value })
    }

  const onDismiss = () => {
    navigate(-1)
  }
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        tw="fixed inset-0 z-50 overflow-y-auto top-52"
        onClose={() => onDismiss()}
      >
        <div tw="min-h-screen px-4 text-center">
          <Dialog.Overlay tw="fixed inset-0 bg-gray-600 opacity-25" />
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div tw="inline-block w-full max-w-sm my-16 overflow-hidden text-left align-middle transition-all transform shadow-xl rounded-2xl bg-gray-100">
              <div tw="flex flex-col w-full p-5 pt-3 m-auto rounded-md ">
                <div tw="flex flex-col py-4">
                  <Dialog.Title>
                    <h1 tw="font-bold text-3xl text-indigo-800 text-center space-x-1">
                      Register
                    </h1>
                  </Dialog.Title>
                </div>
                <div tw="flex flex-col">
                  <InputGroup
                    className="mb-2"
                    type="email"
                    value={email}
                    setValue={onChangeText}
                    placeholder="Email"
                    error={errorHelper(errors.message, 'Email')}
                  />
                  <div tw="h-3" />
                  <InputGroup
                    className="mb-2"
                    type="password"
                    value={password}
                    setValue={onChangeText}
                    placeholder="Password"
                    error={errorHelper(errors.message, 'Password')}
                  />
                  <button tw=" w-full py-2 mt-2 mb-2 text-base rounded-xl font-bold text-white bg-indigo-800 border-indigo-800 focus:outline-none focus:border-indigo-800 hover:bg-indigo-400">
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}

export default Register
