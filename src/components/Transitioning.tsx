import { useRouterState } from '@tanstack/react-router'

export const Transitioning = () => {
  const isLoading = useRouterState({
    select: ({ status }) => status === 'pending',
  })

  return isLoading ? (
    <span className='dsy-loading dsy-loading-ring dsy-loading-sm' />
  ) : null
}
