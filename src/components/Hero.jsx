import { motion } from 'motion/react'
import Container from './Container'

/* ── Reusable fade-up variant ── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0  },
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-bg overflow-hidden pt-10">

      {/* Subtle background accent */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10 py-16 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ── Left: Text ── */}
          <motion.div
            initial="hidden"
            animate="show"
            transition={{ staggerChildren: 0.12 }}
          >
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.06, rotate: -1 }}
              className="inline-block -skew-x-6 bg-primary px-4 py-2 mb-7 cursor-default"
            >
              <span className="inline-block skew-x-6 text-white text-xs font-black uppercase tracking-widest italic">
                Industrial Grade Repairs
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="font-black uppercase italic leading-[0.95] tracking-tight mb-7"
            >
              <span className="block text-txt text-[clamp(3.5rem,9vw,6.5rem)]">UK</span>
              <span className="block text-txt text-[clamp(3.5rem,9vw,6.5rem)]">REPAIR</span>
              <motion.span
                className="block text-primary text-[clamp(3.5rem,9vw,6.5rem)]"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.45, duration: 0.6, ease: 'easeOut' }}
              >
                EXPERTS
              </motion.span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-txt-muted text-sm font-bold uppercase italic tracking-wider mb-10 max-w-sm leading-relaxed"
            >
              Visit repairs and mail-in repairs available across the UK.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#book"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-3.5 bg-primary text-white font-black uppercase text-sm tracking-widest hover:bg-primary-dk transition-colors"
              >
                Start Repair
              </motion.a>
              <motion.a
                href="#stores"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-3.5 border-2 border-txt text-txt font-black uppercase text-sm tracking-widest hover:bg-txt hover:text-bg transition-colors"
              >
                Find Store
              </motion.a>
            </motion.div>
          </motion.div>

          {/* ── Right: Image ── */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          >
            {/* Tilted image frame */}
            <motion.div
              className="relative inline-block rotate-2"
              whileHover={{ rotate: 0, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
              <img
                src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=2070&auto=format&fit=crop"
                alt="Phone repair technician"
                className="relative z-10 w-full max-w-[460px] h-[380px] object-cover block"
              />
              {/* Red offset border */}
              <motion.div
                className="absolute -bottom-3 -right-3 w-full h-full border-4 border-primary z-0"
                whileHover={{ bottom: -8, right: -8 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              />
            </motion.div>

            {/* 45 MINS badge */}
            <motion.div
              className="absolute bottom-2 left-0 lg:-left-4 z-20 bg-card border-l-4 border-primary px-5 py-3 cursor-default"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              whileHover={{
                scale: 1.08,
                x: 6,
                transition: { type: 'spring', stiffness: 300, damping: 18 },
              }}
            >
              <p className="text-txt font-black text-2xl uppercase leading-none tracking-tight">45 Mins</p>
              <p className="text-txt-muted text-[10px] font-bold uppercase tracking-widest mt-1">Average_TAT</p>
            </motion.div>
          </motion.div>

        </div>
      </Container>
    </section>
  )
}
