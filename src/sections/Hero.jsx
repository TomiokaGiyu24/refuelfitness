import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import TextReveal from '../components/TextReveal'

const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1920&h=1080&fit=crop&q=80',
    alt: 'Premium gym interior with modern equipment',
  },
  {
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop&q=80',
    alt: 'Spacious workout floor',
  },
  {
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1920&h=1080&fit=crop&q=80',
    alt: 'Focused training session',
  },
]

export default function Hero() {
  const ref = useRef(null)
  const [current, setCurrent] = useState(0)

  // Subtle parallax only for the content, NOT the background scale (which caused the glitch)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      ref={ref}
      id="hero"
      className="relative h-[100svh] w-full flex flex-col items-center justify-center overflow-hidden bg-bg"
    >
      {/* Background Image Carousel (Glitch Fixed: Removed conflicting style={scale}) */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.5, ease: 'easeInOut' } }}
          className="absolute inset-0 z-0"
        >
          <motion.img
            src={heroSlides[current].image}
            alt={heroSlides[current].alt}
            className="w-full h-full object-cover mix-blend-luminosity opacity-40 origin-center"
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: 'easeOut' }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Deep Luxury Gradients */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-bg/95 via-bg/40 to-bg/95" />
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(9,9,11,0.85)_100%)]" />

      {/* Perfectly Centered Content */}
      <motion.div
        className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center h-full pt-16"
        style={{ opacity, y }}
      >
        {/* Top Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-xl"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulseSlow shadow-[0_0_10px_rgba(204,255,0,0.8)]" />
          <span className="text-white text-[10px] md:text-xs font-heading font-medium tracking-[0.2em] uppercase">
            Transform Your Physique
          </span>
        </motion.div>

        {/* Main Headings */}
        <h1 className="flex flex-col items-center justify-center space-y-2 mb-6 w-full">
          <span className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight text-white uppercase font-black leading-[1.1] text-center w-full flex justify-center">
            <TextReveal text="Build Your Best" delay={0.4} variant="line" className="justify-center w-full" />
          </span>
          <span className="font-accent text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] italic text-accent tracking-tighter leading-[1.1] text-center w-full font-black flex justify-center">
            <TextReveal text="Version." delay={0.6} variant="blur" className="justify-center w-full" />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-white/70 text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-12 font-body font-light leading-relaxed text-center"
        >
          Kota's most elite facility. <strong className="font-semibold text-white">150+ Imported Machines.</strong> True luxury fitness with zero hidden enrollment fees.
        </motion.p>

        {/* Massive Centered CTAs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2, type: 'spring' }}
          className="flex flex-col items-center gap-6 w-full max-w-md mx-auto"
        >
          <a
            href="#pricing"
            className="w-full py-5 lg:py-6 bg-accent text-bg text-sm sm:text-base font-heading font-bold tracking-[0.15em] uppercase hover:bg-white transition-colors duration-500 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(204,255,0,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
            <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
              Join Now
            </span>
          </a>

          <div className="flex items-center gap-4 text-white/50 text-xs sm:text-sm font-body tracking-wider uppercase">
            <div className="flex items-center gap-1 text-accent">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span>4.9 Google Rating</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
