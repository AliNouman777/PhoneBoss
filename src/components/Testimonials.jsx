import { motion } from 'motion/react'
import { FiStar } from 'react-icons/fi'
import Container from './Container'
import { fadeUp, stagger, vp } from '@/lib/motion'

const reviews = [
  {
    name: 'Sarah M.',
    device: 'iPhone 14 Pro – Screen Repair',
    text: '"Cracked my iPhone 14 Pro screen on a Friday morning and had it fixed by lunchtime. Incredible service and the screen looks brand new. Highly recommend PhoneBoss!"',
    featured: false,
  },
  {
    name: 'James K.',
    device: 'Samsung S22 – Battery Replacement',
    text: '"Battery on my Samsung S22 was dying by noon every day. PhoneBoss replaced it in 25 minutes flat and gave me a full year warranty. Brilliant value for money!"',
    featured: true,
  },
  {
    name: 'Aisha R.',
    device: 'Google Pixel 7 – Water Damage',
    text: '"Dropped my phone in water and thought it was gone forever. The team at PhoneBoss managed to recover all my data and fix the phone. Absolute lifesavers!"',
    featured: false,
  },
]

const Stars = () => (
  <div className="flex gap-1 text-gold-lt text-sm">
    {[...Array(5)].map((_, i) => <FiStar key={i} fill="currentColor" />)}
  </div>
)

export default function Testimonials() {
  return (
    <section id="reviews" className="py-20">
      <Container>
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial="hidden" whileInView="show" viewport={vp}
          variants={stagger(0.1)}
        >
          <motion.span variants={fadeUp} className="inline-block bg-primary text-white text-xs font-bold uppercase tracking-[0.12em] px-3 py-1.5 rounded-full mb-3">
            Customer Reviews
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold text-txt mb-3">
            What Our <span className="text-primary">Customers Say</span>
          </motion.h2>
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mt-1">
            <Stars />
            <span className="text-txt-sub text-sm font-semibold">4.9/5 from 300+ reviews</span>
          </motion.div>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 items-start"
          initial="hidden" whileInView="show" viewport={vp}
          variants={stagger(0.12)}
        >
          {reviews.map(r => (
            <motion.div
              key={r.name}
              variants={fadeUp}
              whileHover={{ y: r.featured ? -10 : -6, boxShadow: '0 24px 48px -12px rgba(0,0,0,0.18)' }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className={`flex flex-col gap-4 rounded-2xl p-7 border cursor-default
                ${r.featured
                  ? 'border-primary shadow-lg shadow-primary/10 -translate-y-2 bg-card'
                  : 'border-bdr bg-card'
                }`}
            >
              <Stars />
              <p className="text-txt-sub text-sm leading-relaxed italic flex-1">{r.text}</p>
              <div className="flex items-center gap-3 mt-auto">
                <motion.div
                  className="w-11 h-11 rounded-full bg-linear-to-br from-primary to-gold flex items-center justify-center text-white font-extrabold text-lg shrink-0"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                >
                  {r.name[0]}
                </motion.div>
                <div>
                  <p className="font-bold text-txt text-sm">{r.name}</p>
                  <p className="text-txt-muted text-xs">{r.device}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
