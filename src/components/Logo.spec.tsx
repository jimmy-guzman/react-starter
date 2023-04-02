import viteLogo from '@/assets/vite.svg'
import { render, screen } from '@/test/utils'

import { Logo } from './Logo'

describe('logo', () => {
  it('should render link and image', () => {
    render(
      <Logo
        name='Vite'
        link='https://vitejs.dev'
        imgSrc={viteLogo}
        color='#646CFF'
      />
    )

    expect(screen.getByRole('link', { name: /vite logo/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /vite logo/i })).toBeInTheDocument()
  })

  it('should render image with custom class', () => {
    render(
      <Logo
        name='Vite'
        link='https://vitejs.dev'
        imgSrc={viteLogo}
        color='#646CFF'
        className='animate-[spin_20s_linear_infinite]'
      />
    )

    expect(screen.getByRole('img', { name: /vite logo/i })).toHaveClass(
      'h-24 transition duration-300 hover:drop-shadow-[0_0_2em_#646CFF] animate-[spin_20s_linear_infinite]'
    )
  })
})
