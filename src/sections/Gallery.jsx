import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import TextReveal from '../components/TextReveal'

// 5 images perfectly calculated for a 4x2 Bento Box Grid on desktop
const bentoImages = [
  {
    src: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=1200&h=1200&fit=crop&q=80',
    label: 'The Iron Floor',
    category: 'Free Weights',
    spanClass: 'lg:col-span-2 lg:row-span-2 h-[400px] lg:h-auto', // Massive featured square
  },
  {
    src: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop&q=80',
    label: 'Conditioning',
    category: 'Cardio Zone',
    spanClass: 'lg:col-span-1 lg:row-span-1 h-[250px] lg:h-auto',
  },
  {
    src: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&h=600&fit=crop&q=80',
    label: 'Studio',
    category: 'Group Classes',
    spanClass: 'lg:col-span-1 lg:row-span-1 h-[250px] lg:h-auto',
  },
  {
    src: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&h=600&fit=crop&q=80',
    label: 'Community',
    category: 'The Culture',
    spanClass: 'lg:col-span-1 lg:row-span-1 h-[250px] lg:h-auto',
  },
  {
    src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop&q=80',
    label: 'Performance',
    category: 'Machine Zone',
    spanClass: 'lg:col-span-1 lg:row-span-1 h-[250px] lg:h-auto',
  },
]

function BentoCard({ image, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden rounded-3xl bg-surface/40 border border-white border-opacity-5 hover:border-accent border-opacity-30 transition-all duration-700 shadow-2xl ${image.spanClass}`}
    >
      <div className="absolute inset-0">
        <img
          src={image.src}
          alt={image.label}
          className="w-full h-full object-cover transition-transform duration-[2s] ease-[0.22,1,0.36,1] group-hover:scale-105 filter group-hover:brightness-110"
          loading="lazy"
        />
        {/* Sleek, high-end gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-700" />
        <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 mix-blend-overlay transition-colors duration-700" />
      </div>

      <div className="absolute inset-0 flex flex-col justify-between p-6 lg:p-8 pointer-events-none">
        <div className="flex justify-between items-start">
          <span className="text-[10px] md:text-xs font-heading font-bold tracking-[0.2em] uppercase text-bg bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-lg transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            {image.category}
          </span>
          <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center transform scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </div>
        </div>

        <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="font-heading text-2xl lg:text-3xl font-semibold uppercase text-text tracking-wide drop-shadow-md">
            {image.label}
          </h3>
        </div>
      </div>
    </motion.div>
  )
}

function StatCounter({ value, suffix = '', label }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center justify-center p-6 lg:p-10 bg-surface/20 border border-white/5 rounded-3xl relative overflow-hidden group hover:bg-surface/40 transition-colors duration-500"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="font-heading text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 mb-2 flex items-baseline z-10">
        {value}<span className="text-3xl ml-1 text-accent">{suffix}</span>
      </div>
      <p className="text-text-muted text-xs md:text-sm font-body tracking-wider uppercase z-10">{label}</p>
    </motion.div>
  )
}

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 lg:py-40 px-4 md:px-6 relative bg-bg overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 lg:mb-24">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-surface/50 backdrop-blur-md mb-6 shadow-lg"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulseSlow shadow-[0_0_10px_rgba(204,255,0,0.8)]" />
              <span className="text-accent text-xs font-heading font-medium tracking-[0.2em] uppercase">
                The Facility
              </span>
            </motion.div>
            
            <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold uppercase text-text leading-[1]">
              <TextReveal text="Inside Refuel" variant="line" delay={0.1} />
              <div className="text-text-muted/60">
                <TextReveal text="Fitness" variant="line" delay={0.2} />
              </div>
            </h2>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-text-muted text-base md:text-lg font-body max-w-sm md:text-right"
          >
            Engineered spaces. No compromises. Everything you need to build the physique you want.
          </motion.p>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-4 lg:gap-6 min-h-[600px] lg:min-h-[700px]">
          {bentoImages.map((img, i) => (
            <BentoCard key={i} image={img} index={i} />
          ))}
        </div>

        {/* Premium Stats Grid */}
        <div className="mt-6 lg:mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          <StatCounter value="8" suffix="K+" label="Sq. Ft. Space" />
          <StatCounter value="150" suffix="+" label="Imported Machines" />
          <StatCounter value="500" suffix="+" label="Elite Members" />
          <StatCounter value="100" suffix="%" label="Hygiene Rated" />
        </div>
      </div>
    </section>
  )
}
