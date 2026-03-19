import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import AnimatedText from '../components/AnimatedText'
import FadeIn from '../components/FadeIn'

const features = [
  {
    title: 'Strength Zone',
    description: 'Power racks, Olympic platforms, dumbbells up to 50kg, and dedicated deadlift stations.',
    icon: '🏋️',
  },
  {
    title: 'Cardio Deck',
    description: 'Treadmills, ellipticals, rowers, and assault bikes — always available.',
    icon: '🏃',
  },
  {
    title: 'Functional Area',
    description: 'Battle ropes, kettlebells, TRX, plyo boxes — everything for functional training.',
    icon: '💪',
  },
  {
    title: 'Group Class Studio',
    description: 'Sound system, mirrors, and space for yoga, HIIT, Zumba, and more.',
    icon: '🧘',
  },
  {
    title: 'AC Throughout',
    description: 'Fully air-conditioned — train comfortably in every season.',
    icon: '❄️',
  },
  {
    title: 'Clean Lockers & Showers',
    description: 'Maintained hourly. Secure lockers, hot water, and changing rooms.',
    icon: '🚿',
  },
]

function FeatureCard({ feature, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.02, y: -4 }}
      className="group relative bg-surface border border-border rounded-2xl p-8 hover:border-accent/30 transition-colors duration-500 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <span className="text-3xl mb-4 block">{feature.icon}</span>
        <h3 className="font-heading text-xl text-text mb-3">{feature.title}</h3>
        <p className="text-text-muted font-light text-sm leading-relaxed">{feature.description}</p>
      </div>
    </motion.div>
  )
}

export default function Features() {
  return (
    <section id="features" className="py-32 lg:py-40 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <FadeIn>
            <p className="text-accent/70 text-sm tracking-[0.3em] uppercase mb-6 font-light">
              What's Inside
            </p>
          </FadeIn>
          <AnimatedText
            text="Everything you need, nothing you don't"
            className="font-heading text-3xl md:text-5xl lg:text-6xl text-text max-w-4xl mx-auto leading-[1.2]"
          />
        </div>

        {/* Clean 2x3 grid — no orphaned items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} index={i} />
          ))}
        </div>

        {/* Bottom info strip */}
        <FadeIn delay={0.3}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-text-dim text-sm font-light">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              <span>Open 5 AM – 11 PM daily</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              <span>Ample parking available</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              <span>Kunadi main road access</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
