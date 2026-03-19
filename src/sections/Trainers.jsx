import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import AnimatedText from '../components/AnimatedText'
import FadeIn from '../components/FadeIn'

const trainers = [
  {
    name: 'Maya Chen',
    specialty: 'Strength & Conditioning',
    bio: '12 years of coaching elite athletes. Believes every body has untapped potential.',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=500&fit=crop',
  },
  {
    name: 'James Rivera',
    specialty: 'Olympic Weightlifting',
    bio: 'Former national competitor. Teaches patience and precision above all.',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&h=500&fit=crop',
  },
  {
    name: 'Aisha Patel',
    specialty: 'Yoga & Mobility',
    bio: 'Trained in Mysore, India. Brings mindfulness to every movement.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=500&fit=crop',
  },
  {
    name: 'Marcus Hall',
    specialty: 'HIIT & Functional Training',
    bio: 'High energy, higher standards. Every session is designed to push your ceiling.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=500&fit=crop',
  },
]

function TrainerCard({ trainer, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-2xl"
    >
      <div className="relative h-[420px] md:h-[480px]">
        <img
          src={trainer.image}
          alt={trainer.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />

        {/* Default state — name at bottom */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-bg/90 to-transparent p-6 transition-opacity duration-500 group-hover:opacity-0">
          <h3 className="font-heading text-xl text-text">{trainer.name}</h3>
          <p className="text-accent text-sm tracking-wider font-light">{trainer.specialty}</p>
        </div>

        {/* Hover state — warm overlay with full info */}
        <div className="absolute inset-0 bg-gradient-to-t from-accent/90 via-accent/60 to-accent/20 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
          <h3 className="font-heading text-2xl text-bg mb-1">{trainer.name}</h3>
          <p className="text-bg/80 text-sm tracking-wider uppercase mb-4 font-light">{trainer.specialty}</p>
          <p className="text-bg/90 text-sm leading-relaxed font-light">{trainer.bio}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Trainers() {
  return (
    <section id="trainers" className="py-32 lg:py-40 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <FadeIn>
            <p className="text-accent/70 text-sm tracking-[0.3em] uppercase mb-6 font-light">
              Our Team
            </p>
          </FadeIn>
          <AnimatedText
            text="Guided by those who understand the journey"
            className="font-heading text-3xl md:text-5xl lg:text-6xl text-text max-w-4xl mx-auto leading-[1.2]"
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer, i) => (
            <TrainerCard key={i} trainer={trainer} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
