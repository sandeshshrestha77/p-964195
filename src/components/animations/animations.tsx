'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimationProps {
  children: ReactNode
  className?: string
  delay?: number
}

export const FadeIn = ({ children, className = '', delay = 0 }: AnimationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const SlideIn = ({ children, className = '', delay = 0 }: AnimationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}