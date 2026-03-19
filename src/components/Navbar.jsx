import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import MagneticButton from './MagneticButton'

const navLinks = [
  { label: 'About', href: '/about', isPage: true },
  { label: 'Gallery', href: '/gallery', isPage: true },
  { label: 'Equipment', href: '/#equipment', isPage: false },
  { label: 'Classes', href: '/#classes', isPage: false },
  { label: 'Pricing', href: '/#pricing', isPage: false },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const renderLink = (link, onClick) => {
    const linkClass = "text-xs md:text-sm font-accent font-bold tracking-[0.15em] uppercase text-white/70 hover:text-accent transition-colors duration-300 relative group"
    
    const content = (
      <>
        {link.label}
        <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
      </>
    )

    if (link.isPage) {
      return (
        <Link key={link.href} to={link.href} onClick={onClick} className={linkClass}>
          {content}
        </Link>
      )
    }
    // For section anchors on home page
    if (isHome) {
      return (
        <a key={link.href} href={link.href.replace('/', '')} onClick={onClick} className={linkClass}>
          {content}
        </a>
      )
    }
    return (
      <Link key={link.href} to={link.href} onClick={onClick} className={linkClass}>
        {content}
      </Link>
    )
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
      >
        <div 
          className={`pointer-events-auto flex items-center justify-between transition-all duration-500 rounded-full px-6 py-3 w-full max-w-6xl ${
            scrolled ? 'bg-surface/60 backdrop-blur-2xl border border-border/50 shadow-2xl' : 'bg-transparent'
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group relative cursor-pointer">
            <div className="relative">
              <img
                src="/logo.jpg"
                alt="Refuel Fitness"
                className="w-10 h-10 rounded-full object-cover border border-white/10 group-hover:border-accent/50 transition-colors duration-500 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100"
              />
              <div className="absolute inset-0 rounded-full shadow-[0_0_15px_rgba(204,255,0,0)] group-hover:shadow-[0_0_15px_rgba(204,255,0,0.5)] transition-shadow duration-500" />
            </div>
            <span className="font-heading text-xl md:text-2xl tracking-[0.15em] uppercase text-text group-hover:text-accent font-bold transition-colors duration-500">
              Refuel
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12 pl-4">
            {navLinks.map((link) => renderLink(link))}
            
            <MagneticButton 
              href={isHome ? "#cta" : "/#cta"}
              className="ml-2 px-6 py-2.5 bg-accent text-bg text-xs font-accent font-bold tracking-[0.2em] uppercase rounded-full hover:bg-white transition-colors duration-300"
            >
              Join Now
            </MagneticButton>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center gap-1.5 p-2 w-10 h-10 relative z-[60]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-[2px] bg-text transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-y-[8px]' : ''}`} />
            <span className={`block w-6 h-[2px] bg-text transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-[2px] bg-text transition-all duration-300 origin-center ${mobileOpen ? '-rotate-45 -translate-y-[8px]' : ''}`} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at top right)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at top right)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at top right)' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[40] bg-bg/95 backdrop-blur-3xl flex flex-col justify-center items-center"
          >
            <div className="flex flex-col items-center gap-8 text-center px-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                >
                  {renderLink(link, () => setMobileOpen(false))}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-4"
              >
                 <MagneticButton 
                  href={isHome ? "#cta" : "/#cta"}
                  onClick={() => setMobileOpen(false)}
                  className="px-8 py-4 bg-accent text-bg text-sm font-accent font-bold tracking-[0.2em] uppercase rounded-full hover:bg-white transition-colors duration-300"
                >
                  Start Your Journey
                </MagneticButton>
              </motion.div>
            </div>
            
            {/* Big background text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-5 w-full text-center overflow-hidden">
              <span className="text-[150px] font-heading font-bold text-transparent text-stroke-thick whitespace-nowrap">
                REFUEL
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
