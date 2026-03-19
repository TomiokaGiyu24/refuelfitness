import { motion } from 'framer-motion'
import { useRef } from 'react'

export default function TextReveal({ text, className = "", delay = 0, variant = "word" }) {
  const ref = useRef(null)

  // Split text into words
  const words = text.split(" ")

  // Variants for container
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delay * i },
    }),
  }

  // Variants for individual words/letters
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 30,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  if (variant === "line") {
    return (
      <div ref={ref} className={`overflow-hidden ${className}`}>
        <motion.div
          variants={{
            hidden: { y: "100%", opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1], delay } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
        >
          {text}
        </motion.div>
      </div>
    )
  }

  return (
    <motion.div
      ref={ref}
      className={`flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
    >
      {words.map((word, index) => (
        <span key={index} className="overflow-hidden pb-2 mr-[0.25em] flex">
          <motion.span variants={child}>
            {word}
          </motion.span>
        </span>
      ))}
    </motion.div>
  )
}
