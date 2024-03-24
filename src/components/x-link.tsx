import { clsx } from 'clsx'

import { externalLinks } from '@/config/external-links'

type Variant = 'accent' | 'primary' | 'secondary'

interface XLinkProps {
  className?: string
  to: keyof typeof externalLinks
  variant?: Variant
  /**
   * Wether or no to show link as a button
   */
  isButton?: boolean
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
  isButton = false,
}: XLinkProps) => {
  return (
    <a
      href={externalLinks[to]}
      target='_blank'
      rel='noreferrer'
      className={clsx(
        isButton
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
