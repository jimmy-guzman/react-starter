import clsx from 'clsx'

interface LogoProps {
  className?: string
  color: string
  imgSrc: string
  link: string
  name: string
}

export const Logo = ({ color, className, link, name, imgSrc }: LogoProps) => {
  return (
    <a href={link} target='_blank' rel='noreferrer'>
      <img
        src={imgSrc}
        className={clsx(
          `h-24 transition duration-300 hover:drop-shadow-[0_0_2em_${color}]`,
          className
        )}
        alt={`${name} logo`}
      />
    </a>
  )
}
