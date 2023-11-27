import { Link } from '@tanstack/react-router'

import { XLink } from '@/components/XLink'

export default function Home() {
  return (
    <div className='dsy-hero -mt-16 min-h-screen'>
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
            React Starter +
          </h1>
          <p className='py-6'>
            🍱 Another opinionated <XLink to='React' /> Starter using{' '}
            <XLink to='Vite' />, <XLink to='TypeScript' /> and{' '}
            <XLink to='tailwindcss' /> and more{' '}
            <Link to='/features' className='dsy-link dsy-link-primary'>
              features
            </Link>
            .
          </p>
          <div className='flex justify-center gap-2 sm:justify-end'>
            <XLink to='Deploy' variant='secondary' asButton />
            <XLink to='GitHub' variant='primary' asButton />
          </div>
        </div>
      </div>
    </div>
  )
}