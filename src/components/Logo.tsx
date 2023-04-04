import clsx from 'clsx'

interface LogoProps {
  imgSrc: string
  link: string
  name: 'React' | 'tailwindcss' | 'TypeScript' | 'Vite'
}

const classNames = {
  Vite: 'hover:drop-shadow-[0_0_2em_#646CFF]',
  React:
    'hover:drop-shadow-[0_0_2em_#61DAFB] animate-[spin_20s_linear_infinite]',
  TypeScript: 'hover:drop-shadow-[0_0_2em_#3178C6]',
  tailwindcss: 'hover:drop-shadow-[0_0_2em_#06B6D4]',
}

export const Logo = ({ link, imgSrc, name }: LogoProps) => {
  return (
    <a href={link} target='_blank' rel='noreferrer'>
      <img
        src={imgSrc}
        className={clsx('h-24 transition duration-300', classNames[name])}
        alt={`${name} logo`}
      />
    </a>
  )
}
