import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Brands from './components/Brands'
import Values from './components/Values'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import BookRepair from './components/BookRepair'
import Stores from './components/Stores'
import Footer from './components/Footer'

export default function App() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem('pb-theme') === 'dark'
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('pb-theme', dark ? 'dark' : 'light')
  }, [dark])

  // global scroll-reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) }
      }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    const timer = setTimeout(() => {
      document.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    }, 100)
    return () => { clearTimeout(timer); observer.disconnect() }
  }, [])

  return (
    <div className="min-h-screen bg-bg text-txt transition-colors duration-300">
      <Header dark={dark} setDark={setDark} />
      <main>
        <Hero />
        <Brands />
        <Values />
        <Services />
        <HowItWorks />
        <WhyUs />
        <Testimonials />
        <BookRepair />
        <Stores />
      </main>
      <Footer />
    </div>
  )
}
