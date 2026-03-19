import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import AnimatedText from '../components/AnimatedText'
import FadeIn from '../components/FadeIn'
import Marquee from '../components/Marquee'

const classes = [
  {
    name: 'Power Yoga',
    time: 'Mon / Wed / Fri — 6:30 AM',
    intensity: 'Moderate',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=500&fit=crop',
  },
  {
    name: 'HIIT Circuit',
    time: 'Tue / Thu — 7:00 AM',
    intensity: 'High',
    image: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=400&h=500&fit=crop',
  },
  {
    name: 'Olympic Lifting',
    time: 'Mon / Wed — 5:30 PM',
    intensity: 'Advanced',
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=400&h=500&fit=crop',
  },
  {
    name: 'Breathwork',
    time: 'Daily — 8:00 AM',
    intensity: 'Low',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=500&fit=crop',
  },
  {
    name: 'Strength Foundations',
    time: 'Tue / Thu / Sat — 6:00 PM',
    intensity: 'Moderate',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=500&fit=crop',
  },
  {
    name: 'Pilates',
    time: 'Wed / Fri — 9:00 AM',
    intensity: 'Low',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=500&fit=crop',
  },
]

const marqueeItems = [
  'Power Yoga', 'HIIT Circuit', 'Olympic Lifting', 'Breathwork',
  'Strength Foundations', 'Pilates', 'Mobility Flow', 'Boxing',
  'Spin', 'TRX', 'Kickboxing', 'Meditation'
]

function ClassCard({ cls, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group flex-shrink-0 w-72 md:w-80"
    >
      <div className="relative overflow-hidden rounded-xl h-96 mb-4">
        <img
          src={cls.image}
          alt={cls.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <span className={`text-xs tracking-widest uppercase px-3 py-1 rounded-full border mb-3 inline-block ${
            cls.intensity === 'High' || cls.intensity === 'Advanced'
              ? 'text-accent border-accent/30'
              : 'text-text-muted border-border'
          }`}>
            {cls.intensity}
          </span>
          <h3 className="font-heading text-2xl text-text mb-1">{cls.name}</h3>
          <p className="text-text-muted text-sm font-light">{cls.time}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Classes() {
  return (
    <section id="classes" className="py-32 lg:py-40 bg-surface/30">
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <div className="text-center mb-16">
          <FadeIn>
            <p className="text-accent/70 text-sm tracking-[0.3em] uppercase mb-6 font-light">
              Classes
            </p>
          </FadeIn>
          <AnimatedText
            text="Move with intention"
            className="font-heading text-3xl md:text-5xl lg:text-6xl text-text max-w-4xl mx-auto leading-[1.2]"
          />
        </div>
      </div>

      {/* Horizontal scroll */}
      <div className="relative">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-surface/30 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-surface/30 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 overflow-x-auto px-6 pb-4 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
          <div className="flex-shrink-0 w-4" />
          {classes.map((cls, i) => (
            <ClassCard key={i} cls={cls} index={i} />
          ))}
          <div className="flex-shrink-0 w-4" />
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-16 border-t border-b border-border py-6">
        <Marquee items={marqueeItems} speed={25} />
      </div>
    </section>
  )
}
