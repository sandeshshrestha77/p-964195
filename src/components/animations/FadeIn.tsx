
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

interface FadeInProps extends Omit<HTMLMotionProps<"div">, "initial" | "animate" | "transition"> {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
}

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.5,
  ...props
}: FadeInProps) {
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
