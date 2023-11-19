import { clsx } from 'clsx'
import { type ReactNode } from 'react'

const links = {
  Vite: 'https://vitejs.dev',
  React: 'https://react.dev',
  TypeScript: 'https://www.typescriptlang.org',
  tailwindcss: 'https://tailwindcss.com',
  repo: 'https://github.com/jimmy-guzman/react-starter#readme',
}

interface LogoProps {
  children: ReactNode
  className?: string
  to: keyof typeof links
}

/**
 * Pre-configured Type Safe External Link
 * @example
 * <XLink to='tailwindcss'>tailwindcss</XLink> // https://tailwindcss.com
 */
export const XLink = ({ to, className = 'dsy-link', children }: LogoProps) => {
  return (
    <a
      href={links[to]}
      target='_blank'
      rel='noreferrer'
      className={clsx(className)}
    >
      {children}
    </a>
  )
}
