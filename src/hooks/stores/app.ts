import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface AppState {
  lightMode: boolean
  actions: {
    toggleLightMode: () => void
  }
}

const useAppStore = create<AppState>()(
  devtools(
    persist(
      (set) => ({
        lightMode: false,
        actions: {
          toggleLightMode: () => {
            set((state) => ({ lightMode: !state.lightMode }))
          },
        },
      }),
      {
        name: 'appStore',
        partialize: (state) => ({ lightMode: state.lightMode }),
      }
    ),
    {
      anonymousActionType: '@@ACTION',
    }
  )
)

export const useAppActions = () => useAppStore((state) => state.actions)
export const useAppLightMode = () => useAppStore((state) => state.lightMode)
