import { useState } from 'react'

import { XLink } from './components/XLink'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='md:container md:mx-auto'>
      <div className='dsy-hero min-h-screen'>
        <div className='dsy-hero-content flex-col gap-8'>
          <div className='flex gap-4'>
            <span className='icon-[logos--bun] text-5xl md:text-7xl' />
            <span className='icon-[logos--vitejs] text-5xl md:text-7xl' />
            <span className='icon-[logos--react] text-5xl md:text-7xl' />
            <span className='icon-[logos--typescript-icon] text-5xl md:text-7xl' />
            <span className='icon-[logos--tailwindcss-icon] text-5xl md:text-7xl' />
          </div>
          <div className='flex flex-col gap-4 text-center'>
            <h1 className='inline bg-gradient-to-r from-primary to-secondary bg-clip-text text-8xl font-bold text-transparent'>
              React Starter
            </h1>
            <p className='py-6'>
              🍱 Another opinionated <XLink to='React' /> Starter using{' '}
              <XLink to='Bun' />, <XLink to='Vite' />, <XLink to='TypeScript' />{' '}
              and <XLink to='tailwindcss' />.
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
              <XLink to='Deploy' variant='secondary' asButton />
              <XLink to='GitHub' variant='primary' asButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
