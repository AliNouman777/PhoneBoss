import { motion } from 'motion/react'
import { FiLock, FiAward, FiZap } from 'react-icons/fi'
import { MdOutlineInventory2 } from 'react-icons/md'
import Container from './Container'
import { fadeLeft, fadeRight, stagger, vp } from '@/lib/motion'

const points = [
  { icon: <FiLock size={18} />,          title: 'Data Privacy',         desc: 'Your data stays yours. We are fully GDPR compliant and never access your personal files.' },
  { icon: <MdOutlineInventory2 size={18}/>,title: 'Premium Parts',      desc: 'We use OEM-grade components sourced from certified manufacturers — no cheap knock-offs.' },
  { icon: <FiZap size={18} />,            title: 'Express Repairs',      desc: 'Most repairs done in under an hour so you\'re never without your phone for long.' },
  { icon: <FiAward size={18} />,          title: 'Certified Technicians',desc: 'Every member of our team is fully trained, certified and experienced.' },
]

const stats = [
  { num: '5000+', label: 'Repairs Completed' },
  { num: '4.9★',  label: 'Average Rating'    },
  { num: '30min', label: 'Avg Repair Time'   },
  { num: '12mo',  label: 'Warranty Period'   },
]

export default function WhyUs() {
  return (
    <section id="about" className="py-20 bg-bg-alt">
      <Container className="grid lg:grid-cols-2 gap-16 items-center">

        {/* Left — slides in from left */}
        <motion.div
          initial="hidden" whileInView="show" viewport={vp}
          variants={stagger(0.1)}
        >
          <motion.span variants={fadeLeft} className="inline-block bg-primary text-white text-xs font-bold uppercase tracking-[0.12em] px-3 py-1.5 rounded-full mb-4">
            Why Choose Us
          </motion.span>
          <motion.h2 variants={fadeLeft} className="text-[clamp(1.8rem,3.5vw,2.4rem)] font-extrabold text-txt mb-4">
            The <span className="text-primary">PhoneBoss</span> Difference
          </motion.h2>
          <motion.p variants={fadeLeft} className="text-txt-sub mb-8 leading-relaxed">
            We're not just another repair shop. We're a team of passionate technicians committed to getting your device back to perfect condition — fast.
          </motion.p>

          <motion.div
            className="flex flex-col gap-6"
            variants={stagger(0.1)}
          >
            {points.map(p => (
              <motion.div
                key={p.title}
                variants={fadeLeft}
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="flex gap-4 items-start cursor-default"
              >
                <motion.div
                  className="w-11 h-11 rounded-xl bg-linear-to-br from-primary to-gold flex items-center justify-center text-white shrink-0"
                  whileHover={{ scale: 1.12, rotate: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                >
                  {p.icon}
                </motion.div>
                <div>
                  <h4 className="font-bold text-txt text-sm mb-1">{p.title}</h4>
                  <p className="text-txt-sub text-sm leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — stats grid slides in from right */}
        <motion.div
          className="grid grid-cols-2 gap-4"
          initial="hidden" whileInView="show" viewport={vp}
          variants={stagger(0.1)}
        >
          {stats.map(s => (
            <motion.div
              key={s.label}
              variants={fadeRight}
              whileHover={{ y: -6, boxShadow: '0 20px 40px -12px rgba(0,0,0,0.15)' }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className="bg-surface border border-bdr rounded-2xl p-7 text-center hover:border-primary transition-colors cursor-default"
            >
              <div className="text-4xl font-black text-txt leading-none mb-2">
                {s.num.replace(/(\+|★|min|mo)$/, '')}
                <span className="text-primary text-3xl">
                  {s.num.match(/(\+|★|min|mo)$/)?.[0] ?? ''}
                </span>
              </div>
              <p className="text-txt-muted text-xs font-semibold uppercase tracking-wide">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>

      </Container>
    </section>
  )
}
