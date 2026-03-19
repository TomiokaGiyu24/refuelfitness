import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import TextReveal from '../components/TextReveal'
import FadeIn from '../components/FadeIn'
import MagneticButton from '../components/MagneticButton'

const branches = [
  {
    id: 'gumanpura',
    name: 'Gumanpura',
    tagline: 'The Flagship',
    address: 'Gumanpura, Kota, Rajasthan',
    phone: '+91 98765 43210',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14441.9950348336!2d75.83474945393537!3d25.18639734348333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f9b7f373b5757%3A0x3ab71cfe5aabe20!2srefuel%20fitness%20gym%20%7C%20gym%20in%20gumanpura%20%7C%20best%20gym%20in%20kota!5e0!3m2!1sen!2sin!4v1773949164454!5m2!1sen!2sin',
    mapsLink: 'https://maps.google.com/?q=Refuel+Fitness+Gumanpura+Kota',
    schedule: [
      { day: 'Monday – Friday', time: '5:00 AM – 10:00 PM' },
      { day: 'Saturday', time: '6:00 AM – 9:00 PM' },
      { day: 'Sunday', time: '7:00 AM – 8:00 PM' },
    ],
  },
  {
    id: 'borkheda',
    name: 'Borkheda',
    tagline: 'The Heart of the City',
    address: 'Borkheda, Kota, Rajasthan',
    phone: '+91 98765 43211',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.7945827511453!2d75.8840361759294!3d25.176413032541195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f9b65a3d44fa7%3A0x6dc039981c830a04!2sRefuel%20fitness%20borkheda!5e0!3m2!1sen!2sin!4v1773949234752!5m2!1sen!2sin',
    mapsLink: 'https://maps.google.com/?q=Refuel+Fitness+Borkheda+Kota',
    schedule: [
      { day: 'Monday – Friday', time: '5:00 AM – 10:00 PM' },
      { day: 'Saturday', time: '6:00 AM – 9:00 PM' },
      { day: 'Sunday', time: '7:00 AM – 8:00 PM' },
    ],
  },
  {
    id: 'mahaveer-nagar',
    name: 'Mahaveer Nagar',
    tagline: 'The Powerhouse',
    address: 'Mahaveer Nagar, Kota, Rajasthan',
    phone: '+91 98765 43212',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.1677408520823!2d75.84361647592829!3d25.130019234417524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f852257cf1841%3A0x57ecdb404e6bd86e!2sREFUEL%20FITNESS%20GYM!5e0!3m2!1sen!2sin!4v1773949278911!5m2!1sen!2sin',
    mapsLink: 'https://maps.google.com/?q=Refuel+Fitness+Mahaveer+Nagar+Kota',
    schedule: [
      { day: 'Monday – Friday', time: '5:00 AM – 10:00 PM' },
      { day: 'Saturday', time: '6:00 AM – 9:00 PM' },
      { day: 'Sunday', time: '7:00 AM – 8:00 PM' },
    ],
  },
]

export default function MapLocation() {
  const [active, setActive] = useState(0)
  const branch = branches[active]

  return (
    <section id="location" className="py-32 lg:py-40 px-6 relative overflow-hidden bg-bg">
      {/* Background vectors */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 blur-[120px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-surface-lighter/50 blur-[100px] rounded-full pointer-events-none -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full border border-border bg-surface/30 mb-6"
          >
            <span className="text-accent text-xs font-heading tracking-[0.2em] uppercase">
              Our Locations
            </span>
          </motion.div>
          
          <h2 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold uppercase text-text mb-6">
            <TextReveal text="Find Your Ground" variant="line" />
          </h2>
          <p className="text-text-muted text-lg font-light max-w-2xl mx-auto">
            3 state-of-the-art facilities across Kota. Find the one nearest to you.
          </p>
        </div>

        {/* Branch Selector */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1.5 bg-surface/40 backdrop-blur-md rounded-full border border-border/50">
            {branches.map((b, i) => (
              <button
                key={b.id}
                onClick={() => setActive(i)}
                className={`relative px-8 py-3.5 text-xs md:text-sm font-heading font-bold tracking-[0.15em] uppercase rounded-full transition-all duration-500 cursor-pointer ${
                  active === i ? 'text-bg' : 'text-text-muted hover:text-text'
                }`}
              >
                {active === i && (
                  <motion.span
                    layoutId="activeLocationTab"
                    className="absolute inset-0 bg-accent rounded-full shadow-[0_0_15px_rgba(204,255,0,0.3)]"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{b.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active branch content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={branch.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
              
              {/* Left Info Panel */}
              <div className="lg:col-span-2 flex flex-col gap-6">
                <div className="bg-surface/30 backdrop-blur-xl border border-border rounded-2xl p-8 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-5 text-bg group-hover:text-accent group-hover:opacity-10 transition-colors duration-500 pointer-events-none">
                    <svg className="w-32 h-32" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  
                  <div className="relative z-10">
                    <h3 className="font-heading text-3xl font-bold uppercase text-text mb-2">
                      {branch.name}
                    </h3>
                    <p className="text-accent text-xs font-heading tracking-[0.2em] uppercase mb-8">
                      {branch.tagline}
                    </p>

                    <div className="space-y-6">
                      <div>
                        <p className="text-text-muted text-[10px] uppercase tracking-widest mb-1">Address</p>
                        <p className="text-text font-light">{branch.address}</p>
                      </div>
                      <div>
                        <p className="text-text-muted text-[10px] uppercase tracking-widest mb-1">Phone</p>
                        <p className="text-text font-light">{branch.phone}</p>
                      </div>
                    </div>

                    <div className="mt-10">
                      <p className="text-text-muted text-[10px] uppercase tracking-widest mb-4 border-b border-border pb-2">Hours of Operation</p>
                      <ul className="space-y-3">
                        {branch.schedule.map((s, i) => (
                          <li key={i} className="flex justify-between text-sm font-light">
                            <span className="text-text-muted">{s.day}</span>
                            <span className="text-text">{s.time}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-10 pt-6 border-t border-border">
                      <MagneticButton 
                        href={branch.mapsLink} 
                        className="w-full py-4 bg-surface text-text text-sm font-heading font-bold tracking-[0.15em] uppercase text-center border border-border hover:border-accent hover:text-bg transition-all duration-300 rounded-none skew-x-[-10deg] hover:bg-accent"
                      >
                        <span className="block skew-x-[10deg]">Get Directions</span>
                      </MagneticButton>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Map Embed */}
              <div className="lg:col-span-3 h-[600px] lg:h-full">
                <div className="relative h-full min-h-[400px] lg:min-h-[600px] rounded-2xl overflow-hidden border border-border group">
                  {/* Decorative neon glow on hover */}
                  <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-overlay z-10" />
                  
                  <iframe
                    src={branch.mapSrc}
                    className="absolute inset-0 w-full h-full"
                    style={{
                      border: 0,
                      filter: 'invert(1) hue-rotate(180deg) saturate(0.5) brightness(0.6) contrast(1.2)'
                    }}
                    allowFullScreen=""
                    loading="lazy"
                    title={`${branch.name} Location map`}
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
              
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
