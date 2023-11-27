import { Link } from '@tanstack/react-router'

import { ThemeToggle } from './ThemeToggle'

const routes = [['/features', 'Features'] as const]

export const Navigation = ({ title }: { title: string }) => {
  return (
    <div className='sticky top-0 z-30 flex h-16 w-full justify-center bg-base-100 bg-opacity-90 text-base-content backdrop-blur transition-shadow duration-100 [transform:translate3d(0,0,0)]'>
      <nav className='dsy-navbar w-full'>
        <div className='dsy-navbar-start'>
          <div className='dsy-dropdown'>
            {/* // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
            <button tabIndex={0} className='dsy-btn dsy-btn-ghost lg:hidden'>
              <span className='icon-[lucide--menu]' />
            </button>
            <ul
              // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
              tabIndex={0}
              className='dsy-menu dsy-dropdown-content dsy-menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow'
            >
              {routes.map(([to, name]) => (
                <li key={to}>
                  <Link to={to} activeProps={{ className: 'dsy-link-accent' }}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Link
            to='/'
            className='dsy-btn dsy-btn-ghost text-lg normal-case text-primary md:text-2xl'
          >
            {title}
          </Link>
        </div>
        <div className='dsy-navbar-center hidden lg:flex'>
          <ul className='dsy-menu dsy-menu-horizontal gap-2 px-1'>
            {routes.map(([to, name]) => (
              <li key={to}>
                <Link to={to} activeProps={{ className: 'dsy-link-accent' }}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='dsy-navbar-end'>
          <ThemeToggle />
        </div>
      </nav>
    </div>
  )
}
