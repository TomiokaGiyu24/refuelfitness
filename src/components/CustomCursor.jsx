import { useEffect, useState, useRef } from 'react'
import { motion, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const cursorRef = useRef(null)

  // Smooth spring configuration for the cursor follower
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 }
  const cursorX = useSpring(-100, springConfig)
  const cursorY = useSpring(-100, springConfig)

  useEffect(() => {
    // Check if device has a touch screen, if so, disable custom cursor
    if (window.matchMedia("(pointer: coarse)").matches) {
      return
    }

    const onMouseMove = (e) => {
      cursorX.set(e.clientX - 16) // Center the 32px cursor
      cursorY.set(e.clientY - 16)
      if (!isVisible) setIsVisible(true)
    }

    const onMouseEnterClickable = () => setIsHovered(true)
    const onMouseLeaveClickable = () => setIsHovered(false)

    // Add listners to document
    document.addEventListener('mousemove', onMouseMove)

    // Find all clickable elements
    const updateClickables = () => {
      const clickables = document.querySelectorAll('a, button, input, textarea, select, [role="button"]')
      clickables.forEach(el => {
        el.addEventListener('mouseenter', onMouseEnterClickable)
        el.addEventListener('mouseleave', onMouseLeaveClickable)
      })
    }

    updateClickables()
    
    // We need to re-scan for clickables when DOM changes (simplified approach)
    const observer = new MutationObserver(() => {
      updateClickables()
    })
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      observer.disconnect()
      const clickables = document.querySelectorAll('a, button, input, textarea, select, [role="button"]')
      clickables.forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnterClickable)
        el.removeEventListener('mouseleave', onMouseLeaveClickable)
      })
    }
  }, [cursorX, cursorY, isVisible])

  if (window.matchMedia("(pointer: coarse)").matches) {
    return null
  }

  return (
    <>
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[100] mix-blend-exclusion"
        style={{
          x: cursorX,
          y: cursorY,
          backgroundColor: isHovered ? '#ccff00' : 'white',
        }}
        animate={{
          scale: isHovered ? 2 : 1,
          opacity: isVisible ? 1 : 0
        }}
        transition={{
          scale: { duration: 0.2 },
          backgroundColor: { duration: 0.2 }
        }}
      />
      {/* Small dot in center */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[101] bg-accent"
        style={{
          x: useSpring(cursorX, { damping: 40, stiffness: 400 }),
          y: useSpring(cursorY, { damping: 40, stiffness: 400 }),
          translateX: 12, // Offset to center within the 32px circle
          translateY: 12
        }}
        animate={{
          opacity: isHovered ? 0 : (isVisible ? 1 : 0),
          scale: isHovered ? 0 : 1
        }}
      />
    </>
  )
}
