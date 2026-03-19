import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function FadeIn({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.7,
  className = '',
  once = true,
  threshold = 0.2,
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount: threshold })

  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 },
  }

  const dir = directions[direction] || directions.up

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...dir }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...dir }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
