import { motion } from 'framer-motion'
import AnimatedText from '../components/AnimatedText'
import FadeIn from '../components/FadeIn'

export default function CTA() {
  return (
    <section
      id="cta"
      className="py-32 lg:py-40 px-6 relative overflow-hidden"
    >
      {/* Warm gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-surface to-bg" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(200,149,108,0.08)_0%,_transparent_60%)]" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Logo */}
        <FadeIn>
          <div className="flex justify-center mb-8">
            <motion.img
              src="/logo.jpg"
              alt="Refuel Fitness Logo"
              className="w-24 h-24 md:w-28 md:h-28 rounded-2xl object-cover border-2 border-accent/30 shadow-lg shadow-accent/10"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-accent/70 text-sm tracking-[0.3em] uppercase mb-6 font-light">
            Ready to Start?
          </p>
        </FadeIn>

        <AnimatedText
          text="Your first step starts here"
          className="font-heading text-4xl md:text-6xl lg:text-7xl text-text leading-[1.1] mb-8"
        />

        <FadeIn delay={0.4}>
          <p className="text-text-muted text-lg font-light max-w-xl mx-auto mb-12 leading-relaxed">
            Walk in for a free trial session — no strings attached. Reach out to us on WhatsApp or Instagram and we'll get you started.
          </p>
        </FadeIn>

        {/* WhatsApp + Instagram Buttons */}
        <FadeIn delay={0.6}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/919876543210?text=Hi%20Refuel%20Fitness!%20I%27m%20interested%20in%20joining%20the%20gym."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm tracking-[0.15em] uppercase font-medium transition-all duration-300 cursor-pointer w-full sm:w-auto justify-center"
              style={{
                background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                color: '#fff',
                boxShadow: '0 4px 24px rgba(37, 211, 102, 0.25)',
              }}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </motion.a>

            {/* Instagram */}
            <motion.a
              href="https://www.instagram.com/refuel_gym_borkheda?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm tracking-[0.15em] uppercase font-medium transition-all duration-300 cursor-pointer w-full sm:w-auto justify-center"
              style={{
                background: 'linear-gradient(135deg, #833AB4 0%, #E1306C 50%, #F77737 100%)',
                color: '#fff',
                boxShadow: '0 4px 24px rgba(225, 48, 108, 0.25)',
              }}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2zm-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6zm9.65 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z" />
              </svg>
              Follow on Instagram
            </motion.a>
          </div>
        </FadeIn>

        <FadeIn delay={0.8}>
          <p className="text-text-dim text-xs mt-10 font-light">
            No spam. No pressure. Just a friendly call from our team.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
