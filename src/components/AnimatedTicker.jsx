import { motion } from 'framer-motion'

export default function AnimatedTicker({ text, speed = 'fast', className = '' }) {
  const items = new Array(8).fill(text)
  
  const animationClass = speed === 'fast' ? 'animate-marquee-fast' : 'animate-marquee'

  return (
    <div className={`relative flex overflow-hidden bg-accent text-bg py-3 whitespace-nowrap border-y border-bg/10 ${className}`}>
      <div className={`flex shrink-0 ${animationClass}`}>
        {items.map((item, i) => (
          <div key={`a-${i}`} className="flex items-center">
            <span className="text-xl md:text-2xl font-heading font-bold uppercase tracking-widest px-8">
              {item}
            </span>
            <span className="text-bg/30 text-xs">◆</span>
          </div>
        ))}
      </div>
      <div className={`flex shrink-0 ${animationClass} absolute top-3`}>
        {items.map((item, i) => (
          <div key={`b-${i}`} className="flex items-center">
            <span className="text-xl md:text-2xl font-heading font-bold uppercase tracking-widest px-8">
              {item}
            </span>
            <span className="text-bg/30 text-xs">◆</span>
          </div>
        ))}
      </div>
    </div>
  )
}
