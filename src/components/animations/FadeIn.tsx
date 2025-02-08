import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.5,
  ...props
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration, delay }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}