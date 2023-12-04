import { type MotionProps } from 'framer-motion'
import { motion } from 'framer-motion'
import { type ReactNode } from 'react'

const mainTransitionProps = {
  initial: { y: -20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 60, opacity: 0 },
  transition: {
    type: 'spring',
    stiffness: 150,
    damping: 10,
  },
} satisfies MotionProps

export const PageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <motion.main
      {...mainTransitionProps}
      className='container mx-auto px-2 sm:px-6 lg:px-8'
    >
      {children}
    </motion.main>
  )
}
