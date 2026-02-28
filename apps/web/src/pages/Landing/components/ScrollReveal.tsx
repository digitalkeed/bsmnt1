import { motion } from 'framer-motion'
import { useInView } from 'pages/Landing/sections/useInView'
import { type ReactNode } from 'react'

const defaultVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.19, 1, 0.22, 1] },
  },
}

interface ScrollRevealProps {
  children: ReactNode
  variants?: typeof defaultVariants
}

export function ScrollReveal({ children, variants = defaultVariants }: ScrollRevealProps) {
  const { ref, inView } = useInView()

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      style={{ width: '100%', minHeight: '100vh', flexShrink: 0 }}
    >
      {children}
    </motion.div>
  )
}

const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
}

const staggerItemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.19, 1, 0.22, 1] },
  },
}

interface ScrollRevealStaggerProps {
  children: ReactNode
  style?: React.CSSProperties
}

export function ScrollRevealStagger({ children, style }: ScrollRevealStaggerProps) {
  const { ref, inView } = useInView()

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={staggerContainerVariants}
      style={{ width: '100%', ...style }}
    >
      {children}
    </motion.div>
  )
}

export { staggerItemVariants }
