import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from '../components/FadeIn'

const testimonials = [
  {
    quote: "Switched from a crowded gym nearby — the difference is night and day. The equipment is top-notch and I never have to wait for a rack.",
    name: 'Rahul S.',
    duration: 'Member for 1.5 years',
  },
  {
    quote: "I was nervous about joining a gym for the first time. The trainers at Refuel Fitness made it easy. They actually explain things instead of just showing off.",
    name: 'Sneha M.',
    duration: 'Member for 8 months',
  },
  {
    quote: "Best gym in Kota, period. Clean, spacious, well-maintained. The AC alone is worth it in summer. My wife and I both train here.",
    name: 'Vikram P.',
    duration: 'Member for 2 years',
  },
  {
    quote: "The group classes are surprisingly good — the yoga sessions are my favourite. And the pricing is fair for what you get.",
    name: 'Priya K.',
    duration: 'Member for 6 months',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-32 lg:py-40 px-6 bg-surface/30">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <p className="text-accent/70 text-sm tracking-[0.3em] uppercase mb-16 font-light">
            What Members Say
          </p>
        </FadeIn>

        <div className="relative min-h-[280px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <svg className="w-10 h-10 text-accent/30 mb-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
              </svg>

              <blockquote className="font-heading text-2xl md:text-3xl lg:text-4xl text-text leading-relaxed italic mb-10 max-w-3xl">
                "{testimonials[current].quote}"
              </blockquote>

              <p className="text-accent font-medium tracking-wider text-sm uppercase">
                {testimonials[current].name}
              </p>
              <p className="text-text-muted text-sm font-light mt-1">
                {testimonials[current].duration}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                i === current ? 'bg-accent w-8' : 'bg-text-dim/30 hover:bg-text-dim/60'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
