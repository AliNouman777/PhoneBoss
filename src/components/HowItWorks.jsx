import { motion } from 'motion/react'
import { FiSearch, FiMapPin, FiTool, FiCheckCircle } from 'react-icons/fi'
import Container from './Container'
import { fadeUp, stagger, vp } from '@/lib/motion'

const steps = [
  { num: '01', icon: <FiSearch size={22} />,      title: 'Select Device & Issue', desc: 'Choose your phone model and describe the problem via our online booking form.' },
  { num: '02', icon: <FiMapPin size={22} />,       title: 'Visit Our Store',       desc: 'Walk in at your convenience — no appointment needed for most repairs.' },
  { num: '03', icon: <FiTool size={22} />,         title: 'Expert Repair',         desc: 'Our certified technician repairs your device, usually within 30 minutes.' },
  { num: '04', icon: <FiCheckCircle size={22} />,  title: 'Pick Up & Go',          desc: 'Collect your fully-tested device with a 1-year warranty in hand.' },
]

export default function HowItWorks() {
  return (
    <section id="how" className="py-20">
      <Container>
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial="hidden" whileInView="show" viewport={vp}
          variants={stagger(0.1)}
        >
          <motion.span variants={fadeUp} className="inline-block bg-primary text-white text-xs font-bold uppercase tracking-[0.12em] px-3 py-1.5 rounded-full mb-3">
            Simple Process
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold text-txt mb-3">
            How It <span className="text-primary">Works</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-txt-sub max-w-xl mx-auto">
            Getting your phone fixed has never been easier. Four simple steps.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden" whileInView="show" viewport={vp}
          variants={stagger(0.12)}
        >
          {steps.map(s => (
            <motion.div
              key={s.num}
              variants={fadeUp}
              whileHover={{ y: -6, boxShadow: '0 20px 40px -12px rgba(0,0,0,0.15)' }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className="bg-card border border-bdr rounded-2xl p-7 text-center hover:border-primary transition-colors cursor-default"
            >
              <motion.div
                className="text-xs font-extrabold text-primary tracking-widest uppercase mb-3"
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp}
                transition={{ delay: 0.3 }}
              >
                {s.num}
              </motion.div>
              <motion.div
                className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white mx-auto mb-4"
                whileHover={{ scale: 1.15, rotate: 8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 16 }}
              >
                {s.icon}
              </motion.div>
              <h3 className="font-bold text-txt text-base mb-2">{s.title}</h3>
              <p className="text-txt-sub text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
