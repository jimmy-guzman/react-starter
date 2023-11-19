import { useState } from 'react'

import { XLink } from './components/XLink'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container mx-auto p-4'>
      <div className='dsy-hero min-h-screen'>
        <div className='dsy-hero-content flex-col gap-8 lg:flex-row-reverse'>
          <div className='flex gap-4 lg:grid'>
            <div className='text-center'>
              <span className='icon-[logos--vitejs] text-center text-5xl sm:text-8xl' />
            </div>
            <div className='text-center'>
              <span className='icon-[logos--react] animate-[spin_20s_linear_infinite] text-5xl transition duration-300 sm:text-8xl' />
            </div>
            <div className='text-center'>
              <span className='icon-[logos--typescript-icon] text-center text-5xl sm:text-8xl' />
            </div>
            <div>
              <span className='icon-[logos--tailwindcss-icon] text-5xl sm:text-8xl' />
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <h1 className='inline bg-gradient-to-r from-primary to-secondary bg-clip-text text-8xl font-bold text-transparent'>
              React Starter
            </h1>
            <p className='py-6'>
              🍱 Another opinionated <XLink to='React'>React</XLink> Starter
              using <XLink to='Vite'>Vite</XLink>,{' '}
              <XLink to='TypeScript'>TypeScript</XLink> and{' '}
              <XLink to='tailwindcss'>tailwindcss</XLink>.
            </p>
            <div className='flex justify-center gap-2 sm:justify-end'>
              <button
                className='dsy-btn dsy-btn-neutral'
                onClick={() => {
                  setCount((prevCount) => prevCount + 1)
                }}
              >
                Count is {count}
              </button>
              <XLink to='repo' className='dsy-btn dsy-btn-primary'>
                Get Started{' '}
                <span className='icon-[logos--github-icon] text-base' />
              </XLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
