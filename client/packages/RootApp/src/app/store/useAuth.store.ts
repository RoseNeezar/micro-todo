import { toast } from 'react-toastify'
import create from 'zustand'
import { useHistory } from '../../bootstrap'
import agent from '../api/agent'
import { IAuth } from './types/auth.types'
import { combineAndImmer } from './types/combine-Immer'

export const useAuthStore = create(
  combineAndImmer(
    {
      token: undefined as string | undefined,
      appLoaded: false,
      isLoading: false
    },
    (set, get) => ({
      isLoggedIn: () => !!get().token,
      login: async (data: IAuth) => {
        try {
          const result = await agent.Auth.login(data)
          set(s => {
            s.token = result.token
          })
          useHistory.push('/todo')
        } catch (error) {}
      },
      register: async (data: IAuth) => {
        try {
          const result = await agent.Auth.signup(data)
          set(s => {
            s.token = result.token
          })
          useHistory.push('/todo')
        } catch (error: unknown) {
          console.log('error-2121', (error as Error).message)
        }
      }
    })
  )
)
