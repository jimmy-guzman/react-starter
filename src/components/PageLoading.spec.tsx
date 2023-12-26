import { render, screen } from '@/test/utils'

import { PageLoading } from './PageLoading'

describe('<PageLoading />', () => {
  it('should loading indicator', async () => {
    render(<PageLoading />)

    expect(
      await screen.findByRole('progressbar', { name: 'Loading' })
    ).toBeInTheDocument()
  })
})
