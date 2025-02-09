
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

interface SlideInProps extends Omit<HTMLMotionProps<"div">, "initial" | "animate" | "transition"> {
  children: React.ReactNode
  className?: string
  direction?: "left" | "right" | "up" | "down"
  delay?: number
  duration?: number
}

export function SlideIn({
  children,
  className,
  direction = "left",
  delay = 0,
  duration = 0.5,
  ...props
}: SlideInProps) {
  const directionMap = {
    left: { x: -50, y: 0 },
    right: { x: 50, y: 0 },
    up: { x: 0, y: -50 },
    down: { x: 0, y: 50 },
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...directionMap[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration, delay }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}
