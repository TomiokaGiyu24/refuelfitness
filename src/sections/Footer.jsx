import { motion } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import MagneticButton from '../components/MagneticButton'

const footerLinks = {
  Experience: ['Classes', 'Trainers', 'Gallery', 'Pricing', 'Facilities'],
  Company: ['About Us', 'Careers', 'Contact', 'Press', 'Blog'],
  Support: ['FAQ', 'Privacy Policy', 'Terms of Service', 'Membership Guidelines'],
}

const socials = [
  { name: 'Instagram', href: 'https://www.instagram.com/refuel_gym_borkheda?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', icon: 'M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2zm-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6zm9.65 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z' },
  { name: 'YouTube', href: '#', icon: 'M23.5 6.19a3.02 3.02 0 00-2.12-2.14C19.54 3.5 12 3.5 12 3.5s-7.54 0-9.38.55A3.02 3.02 0 00.5 6.19C0 8.04 0 12 0 12s0 3.96.5 5.81a3.02 3.02 0 002.12 2.14c1.84.55 9.38.55 9.38.55s7.54 0 9.38-.55a3.02 3.02 0 002.12-2.14C24 15.96 24 12 24 12s0-3.96-.5-5.81zM9.75 15.02V8.98L15.5 12l-5.75 3.02z' },
  { name: 'WhatsApp', href: '#', icon: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' },
]

export default function Footer() {
  return (
    <footer className="relative bg-bg pt-24 pb-12 overflow-hidden border-t border-border">
      {/* Background ambient light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 rounded-[100%] blur-[120px] pointer-events-none translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top Call to action */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-20 border-b border-border mb-20">
          <div>
            <h2 className="font-heading text-4xl md:text-5xl font-black text-text uppercase tracking-tight mb-2">
              Ready to <span className="text-accent">Refuel</span>?
            </h2>
            <p className="text-text-muted font-light max-w-sm">
              Your potential is waiting on the other side of commitment.
            </p>
          </div>
          <MagneticButton 
            href="#pricing"
            className="px-8 py-4 bg-accent text-bg text-sm font-accent font-bold tracking-[0.2em] uppercase hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-300 rounded-none skew-x-[-10deg]"
          >
            <span className="block skew-x-[10deg]">Join Now</span>
          </MagneticButton>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-12 lg:gap-20 mb-20">
          
          {/* Brand Col */}
          <div className="col-span-2 md:col-span-5 lg:col-span-4">
            <FadeIn>
              <a href="#" className="flex items-center gap-4 mb-6 group">
                <div className="relative">
                  <img
                    src="/logo.jpg"
                    alt="Refuel Fitness"
                    className="w-12 h-12 rounded-full object-cover border border-white/10 group-hover:border-accent/50 transition-colors duration-500 grayscale group-hover:grayscale-0 relative z-10"
                  />
                  <div className="absolute inset-0 bg-accent/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <span className="font-heading text-2xl tracking-[0.15em] uppercase text-text font-bold group-hover:text-accent transition-colors duration-500">
                  Refuel
                </span>
              </a>
              <p className="text-text-muted text-lg font-light leading-relaxed max-w-sm mb-8">
                Kota's premier high-performance training facility. Built by athletes, for everyone who demands more from their workout.
              </p>
              
              <div className="flex gap-4">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    title={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-muted hover:text-bg hover:bg-accent hover:border-accent transition-all duration-300 group"
                  >
                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Nav Cols */}
          <div className="col-span-2 md:col-span-7 lg:col-span-8 grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {Object.entries(footerLinks).map(([category, links], i) => (
              <FadeIn key={category} delay={i * 0.1}>
                <h4 className="font-heading text-sm text-text tracking-[0.15em] uppercase mb-6 font-bold">{category}</h4>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="relative group text-text-muted font-light hover:text-text transition-colors duration-300 inline-block overflow-hidden">
                        <span className="relative z-10">{link}</span>
                        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-accent -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                      </a>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            ))}
          </div>

        </div>

        {/* Big Text Bottom */}
        <div className="w-full relative py-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6 pointer-events-none">
           {/* Huge transparent text spanning the footer */}
           <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] overflow-hidden">
             <span className="text-[20vw] md:text-[25vw] font-display text-transparent text-stroke-thick whitespace-nowrap leading-none select-none">
               REFUEL
             </span>
           </div>
           
           <p className="text-text-dim text-sm font-light relative z-10">
            © {new Date().getFullYear()} Refuel Fitness Kota. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm font-light text-text-dim relative z-10 pointer-events-auto">
            <a href="#" className="hover:text-accent transition-colors">Privacy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms</a>
            <a href="#" className="hover:text-accent transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
