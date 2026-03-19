import { useEffect } from 'react'
import Lenis from 'lenis'
import Navbar from '../components/Navbar'
import ScrollProgress from '../components/ScrollProgress'
import Hero from '../sections/Hero'
import WhyUs from '../sections/WhyUs'
import Features from '../sections/Features'
import Gallery from '../sections/Gallery'
import Equipment from '../sections/Equipment'
import Classes from '../sections/Classes'
import Trainers from '../sections/Trainers'
import Testimonials from '../sections/Testimonials'
import Pricing from '../sections/Pricing'
import CTA from '../sections/CTA'
import MapLocation from '../sections/MapLocation'
import Footer from '../sections/Footer'

export default function HomePage() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      gestureOrientation: 'vertical',
      smoothWheel: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <WhyUs />
        <Gallery />
        <Features />
        <Equipment />
        <Classes />
        <Trainers />
        <Testimonials />
        <Pricing />
        <CTA />
        <MapLocation />
      </main>
      <Footer />
    </>
  )
}
