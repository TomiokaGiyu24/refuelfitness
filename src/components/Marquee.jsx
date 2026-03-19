export default function Marquee({ items, speed = 30, className = '' }) {
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div
        className="inline-flex animate-marquee"
        style={{ animationDuration: `${speed}s` }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center mx-8 text-text-dim text-lg tracking-widest uppercase font-light"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent/40 mr-8" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
