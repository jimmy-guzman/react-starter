import { Link } from '@tanstack/react-router'

import { XLink } from '@/components/XLink'
import { PageLayout } from '@/layouts/PageLayout'

export default function Home() {
  return (
    <PageLayout>
      <div className='dsy-hero min-h-[calc(100vh-4rem)]'>
        <div className='dsy-hero-content flex-col gap-8 lg:flex-row-reverse'>
          <div className='grid grid-flow-col gap-4 lg:grid-rows-4'>
            <div className='text-center'>
              <span className='icon-[logos--vitejs] text-center text-5xl sm:text-8xl' />
            </div>
            <div className='text-center'>
              <span className='icon-[logos--react] animate-[spin_20s_linear_infinite] text-5xl transition duration-300 sm:text-8xl' />
            </div>
            <div className='text-center'>
              <span className='icon-[logos--typescript-icon] text-center text-5xl sm:text-8xl' />
            </div>
            <div className='text-center'>
              <span className='icon-[logos--tailwindcss-icon] text-5xl sm:text-8xl' />
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <h1 className='inline bg-gradient-to-r from-primary to-secondary bg-clip-text text-8xl font-bold text-transparent'>
              React Starter Plus
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
    </PageLayout>
  )
}
