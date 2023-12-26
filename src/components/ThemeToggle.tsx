import { useAppActions, useAppLightMode } from '@/hooks/stores/app'

export const ThemeToggle = () => {
  const lightMode = useAppLightMode()
  const { toggleLightMode } = useAppActions()

  return (
    <label className='grid cursor-pointer place-items-center'>
      <input
        type='checkbox'
        aria-label='toggle theme'
        value='light'
        checked={lightMode}
        className='theme-controller dsy-toggle col-span-2 col-start-1 row-start-1 bg-base-content'
        onChange={toggleLightMode}
      />
      <span className='icon-[lucide--moon] col-start-1 row-start-1 text-base-100' />
      <span className='icon-[lucide--sun] col-start-2 row-start-1 text-base-100' />
    </label>
  )
}
