import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import AnimatedText from '../components/AnimatedText'
import FadeIn from '../components/FadeIn'

const categories = [
  {
    id: 'strength',
    name: 'Strength & Power',
    icon: '🏋️',
    description: 'Competition-grade bars, calibrated plates, and heavy-duty racks for serious lifting.',
    equipment: [
      { name: 'Power Racks', count: '4 stations', image: 'https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?w=400&h=300&fit=crop&q=80' },
      { name: 'Smith Machines', count: '2 units', image: 'https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?w=400&h=300&fit=crop&q=80' },
      { name: 'Flat & Incline Bench', count: '6 benches', image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=300&fit=crop&q=80' },
      { name: 'Olympic Barbells', count: '8 bars', image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=400&h=300&fit=crop&q=80' },
      { name: 'Deadlift Platform', count: '2 platforms', image: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=400&h=300&fit=crop&q=80' },
      { name: 'Weight Plates', count: '1000+ kg total', image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=300&fit=crop&q=80' },
    ],
  },
  {
    id: 'freeweights',
    name: 'Free Weights',
    icon: '💪',
    description: 'A complete dumbbell wall and accessories for every isolation and compound movement.',
    equipment: [
      { name: 'Dumbbell Rack', count: '2.5–50 kg', image: 'https://images.unsplash.com/photo-1590487988256-9ed24133863e?w=400&h=300&fit=crop&q=80' },
      { name: 'EZ Curl Bars', count: '4 bars', image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=300&fit=crop&q=80' },
      { name: 'Kettlebells', count: '8–32 kg range', image: 'https://images.unsplash.com/photo-1517344884509-a0c97ec11bcc?w=400&h=300&fit=crop&q=80' },
      { name: 'Preacher Curl Bench', count: '2 stations', image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=300&fit=crop&q=80' },
      { name: 'Adjustable Benches', count: '6 units', image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=300&fit=crop&q=80' },
      { name: 'Plate-Loaded Machines', count: '4 types', image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=400&h=300&fit=crop&q=80' },
    ],
  },
  {
    id: 'machines',
    name: 'Machines & Cables',
    icon: '⚙️',
    description: 'Pin-loaded and plate-loaded machines for targeted, safe muscle isolation.',
    equipment: [
      { name: 'Cable Crossover', count: '2 dual stacks', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop&q=80' },
      { name: 'Lat Pulldown', count: '3 stations', image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=300&fit=crop&q=80' },
      { name: 'Leg Press', count: '2 machines', image: 'https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?w=400&h=300&fit=crop&q=80' },
      { name: 'Chest Fly / Pec Deck', count: '2 units', image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=400&h=300&fit=crop&q=80' },
      { name: 'Shoulder Press Machine', count: '1 unit', image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=400&h=300&fit=crop&q=80' },
      { name: 'Leg Extension / Curl', count: '2 each', image: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=400&h=300&fit=crop&q=80' },
    ],
  },
  {
    id: 'cardio',
    name: 'Cardio',
    icon: '🏃',
    description: 'Premium cardio machines with entertainment screens and heart rate monitoring.',
    equipment: [
      { name: 'Treadmills', count: '8 units', image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=400&h=300&fit=crop&q=80' },
      { name: 'Ellipticals', count: '4 units', image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=400&h=300&fit=crop&q=80' },
      { name: 'Spin Bikes', count: '6 bikes', image: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=400&h=300&fit=crop&q=80' },
      { name: 'Rowing Machines', count: '3 units', image: 'https://images.unsplash.com/photo-1519505907962-0a6cb0167c73?w=400&h=300&fit=crop&q=80' },
      { name: 'Assault Bikes', count: '2 units', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=300&fit=crop&q=80' },
      { name: 'Stair Climbers', count: '2 units', image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400&h=300&fit=crop&q=80' },
    ],
  },
  {
    id: 'functional',
    name: 'Functional & CrossFit',
    icon: '🔥',
    description: 'Everything you need for HIIT, CrossFit-style WODs, and functional fitness.',
    equipment: [
      { name: 'Battle Ropes', count: '2 pairs', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=300&fit=crop&q=80' },
      { name: 'TRX Suspension', count: '6 stations', image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=300&fit=crop&q=80' },
      { name: 'Plyo Boxes', count: '3 heights', image: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=400&h=300&fit=crop&q=80' },
      { name: 'Medicine Balls', count: '2–10 kg', image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=300&fit=crop&q=80' },
      { name: 'Resistance Bands', count: 'Full set', image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=400&h=300&fit=crop&q=80' },
      { name: 'Pull-Up / Dip Station', count: '3 units', image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=400&h=300&fit=crop&q=80' },
    ],
  },
]

function EquipmentItem({ item, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, scale: 0.96 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/30 to-transparent" />
        <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/15 transition-colors duration-500" />

        {/* Count badge */}
        <div className="absolute top-3 right-3">
          <span className="text-[10px] font-accent font-bold tracking-[0.2em] uppercase text-accent bg-bg/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-accent/20">
            {item.count}
          </span>
        </div>

        {/* Name */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h4 className="font-heading text-base text-text group-hover:text-accent transition-colors duration-300">
            {item.name}
          </h4>
        </div>
      </div>
    </motion.div>
  )
}

export default function Equipment() {
  const [activeTab, setActiveTab] = useState('strength')
  const activeCategory = categories.find((c) => c.id === activeTab)

  return (
    <section id="equipment" className="py-32 lg:py-40 px-6 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/[0.02] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <FadeIn>
            <p className="text-accent/70 text-sm tracking-[0.3em] uppercase mb-6 font-light">
              Equipment
            </p>
          </FadeIn>
          <AnimatedText
            text="Built for people who know the difference"
            className="font-heading text-3xl md:text-5xl lg:text-6xl text-text max-w-5xl mx-auto leading-[1.2]"
          />
          <FadeIn delay={0.3}>
            <p className="text-text-muted mt-6 max-w-2xl mx-auto font-body font-light md:text-lg">
              Featuring 150+ pieces of <strong className="text-white font-medium">imported, bio-mechanically perfect machines</strong> across 5 zones. <br className="hidden md:block"/>Backed by our strict daily deep-cleaning and sanitization protocols.
            </p>
          </FadeIn>
        </div>

        {/* Category tabs */}
        <FadeIn delay={0.2}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-accent font-bold tracking-[0.15em] uppercase transition-all duration-300 cursor-pointer ${
                  activeTab === cat.id
                    ? 'bg-accent text-bg'
                    : 'bg-surface/50 border border-white/10 text-text-muted hover:border-white/30 hover:text-white backdrop-blur-md'
                }`}
              >
                <span className="mr-2">{cat.icon}</span>
                {cat.name}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Active category content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Category description */}
            <div className="text-center mb-10">
              <p className="text-text-muted font-light max-w-md mx-auto">
                {activeCategory.description}
              </p>
            </div>

            {/* Equipment grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {activeCategory.equipment.map((item, i) => (
                <EquipmentItem key={`${activeTab}-${i}`} item={item} index={i} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Equipment count summary */}
        <FadeIn delay={0.3}>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-text-dim text-sm font-light">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              <span>All equipment serviced monthly</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              <span>Sanitization stations at every zone</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              <span>Equipment request board for members</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
