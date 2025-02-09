
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
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration, 
        delay,
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}
