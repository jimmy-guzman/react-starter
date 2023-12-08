/**
 * Shows an animation that indicates a page is loading
 */
export const PageLoading = () => {
  return (
    <div className='flex min-h-[calc(100vh-4rem)] items-stretch justify-evenly'>
      <div className='dsy-loading dsy-loading-dots dsy-loading-lg self-center'></div>
    </div>
  )
}
