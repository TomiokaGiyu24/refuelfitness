import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import AnimatedText from '../components/AnimatedText'
import FadeIn from '../components/FadeIn'
import MagneticButton from '../components/MagneticButton'

const plans = [
  {
    name: 'Monthly',
    price: '1,999',
    period: '/month',
    billing: 'Billed monthly',
    description: 'Full access, zero commitment. Start anytime.',
    features: [
      'Complete gym access',
      'All equipment & zones',
      'Locker & shower facilities',
      'Group class access',
      'Refuel Fitness mobile app',
    ],
    highlighted: false,
    savings: null,
  },
  {
    name: 'Half-Yearly',
    price: '1,499',
    period: '/month',
    billing: 'Billed ₹8,999 every 6 months',
    description: 'Our most popular plan. Commit to real change.',
    features: [
      'Everything in Monthly',
      'Personal training intro session',
      'Body composition analysis',
      'Nutrition guidance session',
      'Priority class booking',
      '1 guest pass per month',
    ],
    highlighted: true,
    savings: 'Save ₹3,000',
  },
  {
    name: 'Annual',
    price: '1,249',
    period: '/month',
    billing: 'Billed ₹14,999 per year',
    description: 'Maximum value. For those who are serious.',
    features: [
      'Everything in Half-Yearly',
      'Monthly personal training session',
      'Quarterly performance review',
      'Recovery zone access',
      'Exclusive member events',
      '2 guest passes per month',
      'Merchandise welcome kit',
    ],
    highlighted: false,
    savings: 'Save ₹9,000',
  },
]

function PricingCard({ plan, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className={`relative rounded-2xl p-8 md:p-10 flex flex-col ${
        plan.highlighted
          ? 'bg-surface border-2 border-accent/40 shadow-[0_0_80px_rgba(200,149,108,0.12)]'
          : 'bg-surface border border-border'
      }`}
    >
      {plan.highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-bg text-[10px] tracking-[0.2em] font-accent font-bold uppercase rounded-full shadow-lg border border-white/20">
          Most Popular
        </div>
      )}

      {plan.savings && (
        <div className="absolute top-4 right-4">
          <span className="text-[10px] font-accent font-bold tracking-[0.2em] uppercase text-green-400 bg-green-400/10 px-3 py-1 rounded-full border border-green-400/20">
            {plan.savings}
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="font-heading text-2xl text-text mb-1">{plan.name}</h3>
        <p className="text-text-muted text-sm font-light">{plan.description}</p>
      </div>

      <div className="mb-2">
        <div className="flex items-baseline gap-1">
          <span className="text-accent text-6xl md:text-7xl font-display tracking-tight leading-none mt-2">₹{plan.price}</span>
          <span className="text-text-muted text-sm font-accent tracking-wider">{plan.period}</span>
        </div>
        <p className="text-text-dim text-xs font-light mt-1">{plan.billing}</p>
      </div>

      <div className="my-6 h-px bg-border" />

      <ul className="space-y-3 mb-8 flex-1">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm">
            <svg className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="3 8 7 12 13 4" />
            </svg>
            <span className="text-text-muted font-light">{feature}</span>
          </li>
        ))}
      </ul>

      <MagneticButton
        href="#cta"
        className={`w-full py-4 text-sm font-accent font-bold tracking-[0.2em] uppercase text-center rounded-full transition-all duration-300 block ${
          plan.highlighted
            ? 'bg-accent text-bg hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]'
            : 'border border-white/20 text-white hover:bg-white/10'
        }`}
      >
        Get Started
      </MagneticButton>
    </motion.div>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 lg:py-40 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <FadeIn>
            <p className="text-accent/70 text-sm tracking-[0.3em] uppercase mb-6 font-light">
              Membership
            </p>
          </FadeIn>
          <AnimatedText
            text="Simple pricing, real results"
            className="font-heading text-3xl md:text-5xl lg:text-6xl text-text max-w-4xl mx-auto leading-[1.2]"
          />
          <FadeIn delay={0.3}>
            <p className="text-text-muted mt-6 max-w-xl mx-auto font-light">
              No hidden fees. No signup charges. Start with a free trial session — walk in anytime.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan, i) => (
            <PricingCard key={i} plan={plan} index={i} />
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="flex flex-col items-center justify-center gap-3 mt-12 text-sm font-body">
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-text-muted">
              <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface/50 border border-white/5"><span className="text-accent">✓</span> Zero Enrollment Fees</span>
              <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface/50 border border-white/5"><span className="text-accent">✓</span> 100% Transparent (GST Included)</span>
              <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface/50 border border-white/5"><span className="text-accent">✓</span> Cancel Anytime</span>
            </div>
            <p className="text-text-dim mt-4">Still unsure? Claim your free 1-Day trial pass today.</p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
