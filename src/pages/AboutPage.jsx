import { useEffect, useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import Lenis from 'lenis'

function FadeInSection({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const values = [
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2L2 8l12 6 12-6-12-6z" />
        <path d="M2 14l12 6 12-6" />
        <path d="M2 20l12 6 12-6" />
      </svg>
    ),
    title: 'Real Equipment',
    description: "No cheap knockoffs. Calibrated plates, Olympic-grade bars, and heavy-duty machines. Your body knows the difference.",
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="14" cy="14" r="12" />
        <path d="M14 8v6l4 4" strokeLinecap="round" />
      </svg>
    ),
    title: 'Respect For Time',
    description: "No endless waiting for a bench. We cap memberships to ensure you actually get to train, not just stand around.",
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2C8.477 2 4 6.477 4 12c0 7.5 10 14 10 14s10-6.5 10-14c0-5.523-4.477-10-10-10z" />
        <circle cx="14" cy="12" r="3" />
      </svg>
    ),
    title: 'Rooted In Kota',
    description: "Not a faceless franchise. Built by locals who care about this community's strength. Your success is our reputation.",
  },
]

const branches = [
  {
    id: 'gumanpura',
    name: 'Gumanpura',
    tagline: 'The Flagship',
    address: 'Gumanpura, Kota, Rajasthan',
    hours: '5:00 AM – 10:00 PM',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=500&fit=crop&q=80',
    mapsLink: '#',
  },
  {
    id: 'borkheda',
    name: 'Borkheda',
    tagline: 'Heart of the City',
    address: 'Borkheda, Kota, Rajasthan',
    hours: '5:00 AM – 10:00 PM',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&h=500&fit=crop&q=80',
    mapsLink: '#',
  },
  {
    id: 'mahaveer-nagar',
    name: 'Mahaveer Nagar',
    tagline: 'The Powerhouse',
    address: 'Mahaveer Nagar, Kota, Rajasthan',
    hours: '5:00 AM – 10:00 PM',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=500&fit=crop&q=80',
    mapsLink: '#',
  },
]

export default function AboutPage() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true })
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf) }
    requestAnimationFrame(raf)
    window.scrollTo(0, 0)
    return () => lenis.destroy()
  }, [])

  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <div className="min-h-screen bg-bg">
      {/* Hero / Manifesto Header */}
      <section ref={heroRef} className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <img
            src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=1920&h=1080&fit=crop&q=80"
            alt="Refuel Fitness Manifesto"
            className="w-full h-full object-cover grayscale-[30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-bg/30" />
        </motion.div>

        <motion.div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center mt-20" style={{ opacity: heroOpacity }}>
          <Link to="/" className="inline-block font-accent font-bold text-xs sm:text-sm tracking-[0.2em] text-accent mb-8 hover:text-white transition-colors">
            ← BACK TO HOME
          </Link>
          <div className="overflow-hidden mb-2">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-6xl sm:text-7xl md:text-[6.5rem] lg:text-[8rem] leading-[0.9] text-white uppercase tracking-tight font-black flex justify-center drop-shadow-2xl"
            >
              NO FLUFF.
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-accent text-5xl sm:text-6xl md:text-[5.5rem] lg:text-[7rem] leading-[1.1] text-accent uppercase tracking-tighter italic font-black flex justify-center drop-shadow-2xl"
            >
              JUST RESULTS.
            </motion.h1>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-text-muted text-lg sm:text-xl md:text-2xl font-body max-w-2xl mx-auto leading-relaxed"
          >
            We got tired of overcrowded floors and broken treadmills. So we built Refuel Fitness. A proper facility with 3 premium locations across Kota.
          </motion.p>
        </motion.div>
      </section>

      {/* Values / Principles */}
      <section className="py-24 md:py-32 px-6 border-b border-border bg-surface/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {values.map((value, i) => (
              <FadeInSection key={i} delay={i * 0.1}>
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-surface border border-border/50 text-accent mb-6 shadow-2xl">
                    {value.icon}
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl text-text mb-4 uppercase tracking-wide">{value.title}</h3>
                  <p className="text-text-muted font-body text-base sm:text-lg leading-relaxed">{value.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-28 md:py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeInSection className="text-center md:text-left mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl text-text uppercase tracking-tight leading-none mb-4">
                Find Your <br/><span className="text-accent">Base</span>
              </h2>
              <p className="text-text-muted text-lg font-body max-w-md">
                Three world-class facilities in Kota. Same hardcore standards everywhere.
              </p>
            </div>
            <Link to="/gallery" className="hidden md:inline-flex items-center gap-3 px-8 py-4 bg-surface border border-border text-text rounded-full hover:bg-white hover:text-black transition-all duration-300 font-medium tracking-wide uppercase text-sm">
              See the Gallery
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </FadeInSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {branches.map((branch, i) => (
              <FadeInSection key={branch.id} delay={i * 0.1}>
                <div className="group relative rounded-3xl overflow-hidden border border-border/50 bg-surface/30 hover:bg-surface/60 transition-colors duration-500 flex flex-col h-full">
                  {/* Image */}
                  <div className="relative h-[250px] sm:h-[300px] w-full overflow-hidden shrink-0">
                    <img
                      src={branch.image}
                      alt={`Refuel Fitness ${branch.name}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-accent text-[10px] sm:text-xs tracking-[0.2em] uppercase font-accent font-bold">
                        {branch.tagline}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6 sm:p-8 flex flex-col flex-grow">
                    <h3 className="font-heading text-3xl sm:text-4xl text-text mb-6 uppercase tracking-wide">{branch.name}</h3>
                    
                    <div className="space-y-4 mb-8 flex-grow">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-accent" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M8 0C5.2 0 3 2.2 3 5c0 4.5 5 11 5 11s5-6.5 5-11c0-2.8-2.2-5-5-5zm0 7.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                          </svg>
                        </div>
                        <span className="text-text-muted font-body text-base">{branch.address}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                          <svg className="w-3.5 h-3.5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                          </svg>
                        </div>
                        <span className="text-text-muted font-body text-base">{branch.hours}</span>
                      </div>
                    </div>

                    <a
                      href={branch.mapsLink}
                      className="w-full py-4 text-center rounded-xl bg-accent text-bg font-heading uppercase tracking-widest text-sm hover:bg-white transition-colors duration-300"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link to="/gallery" className="inline-flex items-center gap-3 px-8 py-4 bg-surface border border-border text-text rounded-full hover:bg-white hover:text-black transition-all duration-300 font-medium tracking-wide uppercase text-sm">
              See the Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Massive CTA */}
      <section className="py-24 md:py-40 px-6 border-t border-border bg-gradient-to-b from-bg to-surface/20">
        <FadeInSection className="max-w-5xl mx-auto text-center">
          <h2 className="font-display text-7xl md:text-[9rem] lg:text-[12rem] text-white uppercase tracking-tight leading-[0.8] mb-8">
            Ready to <br/><span className="text-accent">Put In Work?</span>
          </h2>
          <p className="text-text-muted font-body text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
            Stop scrolling. Start training. Your first session at any Refuel Fitness location is on the house.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/#pricing"
              className="w-full sm:w-auto px-12 py-5 bg-accent text-bg text-sm tracking-[0.2em] font-accent font-bold uppercase rounded-full hover:bg-white transition-colors duration-300 shadow-[0_0_40px_rgba(204,255,0,0.2)]"
            >
              View Memberships
            </Link>
          </div>
        </FadeInSection>
      </section>
    </div>
  )
}
