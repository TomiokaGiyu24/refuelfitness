import { motion } from 'framer-motion'
import TextReveal from '../components/TextReveal'

const values = [
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="14" width="24" height="4" rx="2" />
        <circle cx="8" cy="16" r="4" />
        <circle cx="24" cy="16" r="4" />
        <circle cx="8" cy="16" r="6" strokeDasharray="2 2" />
        <circle cx="24" cy="16" r="6" strokeDasharray="2 2" />
      </svg>
    ),
    title: 'Elite Equipment',
    description: 'Imported plates, competition-grade bars, calibrated machines — hardware that actually makes a difference.',
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 16c0-5.523 4.477-10 10-10s10 4.477 10 10" strokeLinecap="round" />
        <path d="M10 16c0-3.314 2.686-6 6-6s6 2.686 6 6" strokeLinecap="round" />
        <circle cx="16" cy="16" r="2" fill="currentColor" />
        <path d="M16 18v8" strokeLinecap="round" />
      </svg>
    ),
    title: 'Expert Coaching',
    description: "Certified coaches who live what they teach, building programs around your specific goals.",
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 8h24v16a2 2 0 01-2 2H6a2 2 0 01-2-2V8z" />
        <path d="M4 8l12 10L28 8" />
      </svg>
    ),
    title: 'Uncompromised Space',
    description: 'Over 8,000 sq. ft. of intelligently zoned, raw training floors built for serious members.',
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-32 lg:py-40 px-6 relative bg-bg">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-3 px-4 py-2 mb-8 border border-border bg-surface/30 rounded-full"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-accent text-xs font-heading tracking-[0.2em] uppercase">Built Different</span>
            </motion.div>
            
            <h2 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-text uppercase leading-tight mb-8">
              <TextReveal text="Why We Exist" variant="line" />
            </h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-text-muted text-lg font-light leading-relaxed mb-8"
            >
              We grew tired of overcrowded commercial gyms with broken machines and absent staff. Refuel Fitness is the antidote — an elite facility built for those who take their training seriously.
            </motion.p>
          </div>

          {/* Right Cards Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {values.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: i * 0.15 + 0.3 }}
                className="group relative bg-surface/20 border border-border p-8 rounded-2xl overflow-hidden hover:border-accent/40 hover:bg-surface/40 transition-all duration-500"
              >
                {/* Hover Glow effect */}
                <div className="absolute top-0 left-0 w-[2px] h-0 bg-accent group-hover:h-full transition-all duration-500 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="flex flex-col sm:flex-row gap-6 sm:items-start relative z-10">
                  <div className="shrink-0 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-bg border border-border text-text group-hover:text-bg group-hover:bg-accent group-hover:border-accent transition-colors duration-500">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-heading text-xl md:text-2xl font-bold uppercase tracking-wide text-text mb-3 group-hover:text-accent transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-text-muted font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
