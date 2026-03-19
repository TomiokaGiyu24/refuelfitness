import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import Lenis from 'lenis'

const branchGalleries = [
  {
    id: 'gumanpura',
    name: 'Gumanpura',
    tagline: 'The Flagship',
    description: 'Where it all began — 8,000+ sq. ft. of raw iron, open floor, and zero compromises.',
    images: [
      { src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&h=600&fit=crop&q=85', label: 'Main Floor' },
      { src: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&h=900&fit=crop&q=85', label: 'Cardio Zone' },
      { src: 'https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?w=600&h=900&fit=crop&q=85', label: 'Power Racks' },
      { src: 'https://images.unsplash.com/photo-1590487988256-9ed24133863e?w=900&h=600&fit=crop&q=85', label: 'Dumbbell Wall' },
      { src: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&h=600&fit=crop&q=85', label: 'Strength Area' },
      { src: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=600&h=900&fit=crop&q=85', label: 'Free Weights' },
    ],
    video: {
      thumb: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=450&fit=crop&q=80',
      title: 'Gumanpura Tour',
      duration: '3:45',
    },
  },
  {
    id: 'borkheda',
    name: 'Borkheda',
    tagline: 'Heart of the City',
    description: 'Premium fitness right in the centre of Kota — modern interiors, same hardcore standards.',
    images: [
      { src: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=900&h=600&fit=crop&q=85', label: 'Training Floor' },
      { src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=900&h=600&fit=crop&q=85', label: 'Focused Training' },
      { src: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=600&fit=crop&q=85', label: '1-on-1 Coaching' },
      { src: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=900&h=600&fit=crop&q=85', label: 'Deadlift Station' },
      { src: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=900&h=600&fit=crop&q=85', label: 'Calibrated Plates' },
      { src: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=900&fit=crop&q=85', label: 'Member Vibes' },
    ],
    video: {
      thumb: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=450&fit=crop&q=80',
      title: 'Borkheda Tour',
      duration: '2:50',
    },
  },
  {
    id: 'mahaveer-nagar',
    name: 'Mahaveer Nagar',
    tagline: 'The Powerhouse',
    description: 'Our newest location — built with everything we have learned, in Mahaveer Nagar.',
    images: [
      { src: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=900&h=600&fit=crop&q=85', label: 'Group Studio' },
      { src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=600&fit=crop&q=85', label: 'Yoga Zone' },
      { src: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=900&h=600&fit=crop&q=85', label: 'Morning Energy' },
      { src: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&h=600&fit=crop&q=85', label: 'Weight Room' },
      { src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&h=600&fit=crop&q=85', label: 'Interior' },
      { src: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&h=900&fit=crop&q=85', label: 'Cardio Area' },
    ],
    video: {
      thumb: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&h=450&fit=crop&q=80',
      title: 'Mahaveer Nagar Tour',
      duration: '3:10',
    },
  },
]

// Lightbox component (Mobile Optimized)
function Lightbox({ item, onClose, onNext, onPrev }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNext()
      if (e.key === 'ArrowLeft') onPrev()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [onClose, onNext, onPrev])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-3xl flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Top action bar: Close */}
      <div className="absolute top-0 right-0 p-4 md:p-8 z-20">
        <button
          onClick={onClose}
          className="w-14 h-14 bg-surface/50 backdrop-blur-md rounded-full border border-white/10 flex items-center justify-center text-white hover:text-accent hover:border-accent hover:bg-black transition-all duration-300 shadow-2xl"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Nav buttons (hidden on strictly mobile if swipe was implemented, but large targets for now) */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-16 md:w-16 md:h-16 bg-surface/30 backdrop-blur-sm rounded-2xl md:rounded-full border border-white/5 flex items-center justify-center text-white hover:text-accent hover:border-accent hover:bg-black transition-all duration-300"
      >
        <svg className="w-8 h-8 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      
      <button
        onClick={(e) => { e.stopPropagation(); onNext() }}
        className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-16 md:w-16 md:h-16 bg-surface/30 backdrop-blur-sm rounded-2xl md:rounded-full border border-white/5 flex items-center justify-center text-white hover:text-accent hover:border-accent hover:bg-black transition-all duration-300"
      >
        <svg className="w-8 h-8 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      <motion.div
        key={item.src}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-6xl max-h-[85vh] relative flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.src.replace('w=600', 'w=1600').replace('w=900', 'w=1600').replace('h=600', 'h=1100').replace('h=900', 'h=1100')}
          alt={item.label}
          className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl ring-1 ring-white/5"
        />
        <div className="absolute -bottom-16 left-0 right-0 text-center">
          <p className="font-heading text-xl md:text-2xl text-white uppercase tracking-widest">{item.label}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

function GalleryCard({ item, index, onClick }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 5) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onClick={onClick}
      className="group relative overflow-hidden rounded-xl cursor-pointer break-inside-avoid mb-4 sm:mb-6 shadow-lg bg-surface/30"
    >
      <img
        src={item.src}
        alt={item.label}
        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
      {/* Permanent subtle gradient on mobile for readability */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent md:hidden" />

      {/* Expand icon */}
      <div className="absolute top-4 right-4 opacity-0 md:group-hover:opacity-100 transition-all duration-500 transform translate-y-2 md:group-hover:translate-y-0">
        <div className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center group-hover:bg-accent transition-colors">
          <svg className="w-4 h-4 text-white group-hover:text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
          </svg>
        </div>
      </div>

      {/* Label */}
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
        <p className="font-heading text-lg md:text-xl text-white uppercase tracking-wider">{item.label}</p>
      </div>
    </motion.div>
  )
}

function BranchGallery({ branch, isEven }) {
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  return (
    <section
      ref={sectionRef}
      id={`gallery-${branch.id}`}
      className={`py-24 lg:py-32 px-4 sm:px-6 ${isEven ? 'bg-surface/10' : ''}`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16"
        >
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs tracking-widest uppercase font-medium mb-4">
              {branch.tagline}
            </span>
            <h2 className="font-heading text-5xl md:text-6xl text-text uppercase tracking-tight mb-3">
              <span className="text-text-muted text-3xl md:text-4xl block mb-2 sm:mb-0 sm:inline sm:mr-4">Refuel Fitness</span>
              <br className="hidden sm:block"/>{branch.name}
            </h2>
            <p className="text-text-muted text-base sm:text-lg font-body max-w-lg leading-relaxed mt-4">
              {branch.description}
            </p>
          </div>
        </motion.div>

        {/* Flawless CSS Masonry */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6 mb-16">
          {branch.images.map((item, i) => (
            <GalleryCard
              key={item.src}
              item={item}
              index={i}
              onClick={() => setLightboxIndex(i)}
            />
          ))}
        </div>

        {/* Video Banner (High Impact) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative aspect-[16/9] md:aspect-[21/9] w-full rounded-3xl overflow-hidden border border-white/5 bg-surface group cursor-pointer shadow-2xl">
            <img
              src={branch.video.thumb}
              alt={branch.video.title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-accent/90 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(204,255,0,0.3)] group-hover:scale-110 group-hover:bg-white transition-all duration-300 mb-4 sm:mb-6">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-black ml-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="font-heading text-xl sm:text-3xl text-white uppercase tracking-widest">{branch.video.title}</p>
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            item={branch.images[lightboxIndex]}
            onClose={() => setLightboxIndex(null)}
            onNext={() => setLightboxIndex((prev) => (prev + 1) % branch.images.length)}
            onPrev={() => setLightboxIndex((prev) => (prev - 1 + branch.images.length) % branch.images.length)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

export default function GalleryPage() {
  const [activeBranch, setActiveBranch] = useState(null)

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true })
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf) }
    requestAnimationFrame(raf)
    window.scrollTo(0, 0)
    return () => lenis.destroy()
  }, [])

  const visibleBranches = activeBranch !== null
    ? [branchGalleries[activeBranch]]
    : branchGalleries

  return (
    <div className="min-h-screen bg-bg">
      {/* Mega Hero */}
      <section className="relative h-[60vh] md:h-[70vh] flex flex-col items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1920&h=800&fit=crop&q=80"
            alt="Refuel Fitness Spaces"
            className="w-full h-full object-cover grayscale-[20%]"
          />
          <div className="absolute inset-0 bg-bg/80 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-bg via-transparent to-bg" />
        </div>

        <div className="relative z-10 text-center px-4 w-full max-w-5xl mx-auto">
          <Link to="/" className="inline-block font-accent font-bold text-xs sm:text-sm uppercase tracking-[0.2em] text-accent/80 mb-8 hover:text-accent transition-colors">
            ← BACK TO HOME
          </Link>
          <h1 className="flex flex-col items-center justify-center -space-y-2 md:-space-y-4 mb-6 w-full">
            <span className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-[6rem] tracking-tight text-white uppercase font-black leading-[1.1] text-center w-full flex justify-center drop-shadow-2xl">
              THE
            </span>
            <span className="font-accent text-6xl sm:text-8xl md:text-9xl lg:text-[8rem] italic text-accent tracking-tighter leading-[1.1] text-center w-full font-black flex justify-center drop-shadow-2xl">
              SPACES.
            </span>
          </h1>
          <p className="text-text-muted text-lg md:text-xl font-body font-light max-w-2xl mx-auto">
            Take a look inside the three best training facilities in Kota.
          </p>
        </div>
      </section>

      {/* Sticky Filters */}
      <section className="sticky top-0 z-40 bg-bg/80 backdrop-blur-2xl border-b border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center sm:justify-center gap-3 min-w-max pb-2 sm:pb-0">
            <button
              onClick={() => setActiveBranch(null)}
              className={`px-6 py-3 rounded-full font-accent font-bold text-xs sm:text-sm tracking-[0.2em] uppercase transition-all duration-300 ${
                activeBranch === null
                  ? 'bg-accent text-black'
                  : 'bg-surface/50 border border-white/10 text-text hover:border-accent/40'
              }`}
            >
              All Bases
            </button>
            {branchGalleries.map((b, i) => (
              <button
                key={b.id}
                onClick={() => setActiveBranch(i)}
                className={`px-6 py-3 flex items-center gap-2 rounded-full font-accent font-bold text-xs sm:text-sm tracking-[0.2em] uppercase transition-all duration-300 ${
                  activeBranch === i
                    ? 'bg-accent text-black'
                    : 'bg-surface/50 border border-white/10 text-text hover:border-accent/40'
                }`}
              >
                {b.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeBranch ?? 'all'}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          {visibleBranches.map((branch, i) => (
            <BranchGallery key={branch.id} branch={branch} isEven={i % 2 === 1} />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Big Action CTA */}
      <section className="py-24 md:py-32 px-6 text-center border-t border-white/5 bg-gradient-to-t from-surface/20 to-bg">
        <h2 className="font-display text-6xl sm:text-8xl md:text-[9rem] text-white uppercase tracking-tight mb-6 leading-[0.85]">
          Seen enough?
        </h2>
        <p className="text-text-muted font-body text-lg md:text-xl mb-10 max-w-lg mx-auto">
          Pictures don't do justice to the pump. Drop in today for a free trial.
        </p>
        <Link
          to="/#pricing"
          className="inline-block px-12 py-5 bg-accent text-bg text-sm tracking-[0.2em] font-accent font-bold uppercase rounded-full hover:bg-white transition-colors duration-300 shadow-[0_0_40px_rgba(204,255,0,0.2)]"
        >
          View Memberships
        </Link>
      </section>
    </div>
  )
}
