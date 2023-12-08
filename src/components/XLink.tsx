import { clsx } from 'clsx'

import { externalLinks } from '@/config/externalLinks'

type Variant = 'primary' | 'secondary' | 'accent'

interface LogoProps {
  className?: string
  to: keyof typeof externalLinks
  variant?: Variant
  /**
   * Wether or no to show link as a button
   */
  asButton?: boolean
}

/**
 * Pre-configured Abstraction of [daisyUI's Link](https://daisyui.com/components/link) for externals links
 * * Update `src/components/XLink.config.ts` to add more links
 * @example
 * <XLink to='tailwindcss'>tailwindcss</XLink> // https://tailwindcss.com
 */
export const XLink = ({
  to,
  className,
  variant,
  asButton = false,
}: LogoProps) => {
  return (
    <a
      href={externalLinks[to]}
      target='_blank'
      rel='noreferrer'
      className={clsx(
        asButton
          ? [
              'dsy-btn',
              {
                'dsy-btn-primary': variant === 'primary',
                'dsy-btn-secondary': variant === 'secondary',
                'dsy-btn-accent': variant === 'accent',
              },
            ]
          : [
              'dsy-link',
              {
                'dsy-link-primary': variant === 'primary',
                'dsy-link-secondary': variant === 'secondary',
                'dsy-link-accent': variant === 'accent',
              },
            ],
        className
      )}
    >
      {to} <span className='icon-[lucide--external-link]' />
    </a>
  )
}
