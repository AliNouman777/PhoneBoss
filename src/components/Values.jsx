import { motion } from 'motion/react'
import { FiClock, FiShield, FiTag } from 'react-icons/fi'
import Container from './Container'
import { scaleIn, stagger, vp } from '@/lib/motion'

const items = [
  { icon: <FiClock size={22} />,  title: 'While You Wait',  desc: 'Most common repairs completed in under 30 minutes so you can get back to your day.' },
  { icon: <FiShield size={22} />, title: '1 Year Warranty', desc: 'Every repair comes with a 12-month warranty covering parts and workmanship.' },
  { icon: <FiTag size={22} />,    title: 'Price Guarantee', desc: 'Upfront quotes with zero hidden fees. No surprises — ever.' },
]

export default function Values() {
  return (
    <section className="py-20">
      <Container>
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial="hidden" whileInView="show" viewport={vp}
          variants={stagger(0.14)}
        >
          {items.map(item => (
            <motion.div
              key={item.title}
              variants={scaleIn}
              whileHover={{ y: -6, boxShadow: '0 20px 40px -12px rgba(0,0,0,0.15)' }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className="relative bg-card border border-bdr rounded-2xl p-8 text-center overflow-hidden cursor-default"
            >
              <div className="absolute top-0 left-0 right-0 h-0.75 bg-linear-to-r from-primary to-gold" />
              <motion.div
                className="w-14 h-14 rounded-full bg-linear-to-br from-primary to-gold flex items-center justify-center text-white mx-auto mb-4"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 18 }}
              >
                {item.icon}
              </motion.div>
              <h3 className="font-bold text-txt text-lg mb-2">{item.title}</h3>
              <p className="text-txt-sub text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
