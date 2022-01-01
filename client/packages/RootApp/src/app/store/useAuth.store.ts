import create from 'zustand'
import { combineAndImmer } from './types/combine-Immer'

export const useAuthStore = create(
  combineAndImmer(
    {
      user: undefined as any | undefined,
      appLoaded: false,
      isLoading: false
    },
    (set, get) => ({
      isLoggedIn: () => !!get().user,
      login: async () => {
        set(s => {
          s.user = 'sir'
        })
      },
      register: async () => {}
    })
  )
)
