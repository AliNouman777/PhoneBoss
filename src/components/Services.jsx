import { motion } from 'motion/react'
import { MdOutlinePhoneIphone, MdOutlineBatteryChargingFull, MdOutlineWaterDrop, MdOutlineCameraAlt, MdOutlineElectricalServices, MdOutlineStorage } from 'react-icons/md'
import Container from './Container'
import { fadeUp, scaleIn, stagger, vp } from '@/lib/motion'

const services = [
  { icon: <MdOutlinePhoneIphone size={26} />,       title: 'Screen Repair',       desc: 'Cracked or unresponsive displays replaced with premium quality parts.',     price: 'From £29.99' },
  { icon: <MdOutlineBatteryChargingFull size={26}/>, title: 'Battery Replacement', desc: 'Restore your phone\'s battery life with a certified OEM-grade battery.',    price: 'From £19.99' },
  { icon: <MdOutlineWaterDrop size={26} />,          title: 'Water Damage',        desc: 'Full diagnostic and deep clean for water-damaged devices.',                 price: 'From £19.99' },
  { icon: <MdOutlineCameraAlt size={26} />,          title: 'Camera Repair',       desc: 'Blurry or broken camera? We\'ll have you shooting sharp photos again.',     price: 'From £24.99' },
  { icon: <MdOutlineElectricalServices size={26} />, title: 'Charging Port',       desc: 'Loose or dead charging port replaced quickly and reliably.',                price: 'From £19.99' },
  { icon: <MdOutlineStorage size={26} />,            title: 'Data Recovery',       desc: 'We recover your precious photos, contacts and data safely.',                price: 'From £19.99' },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-bg-alt">
      <Container>
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial="hidden" whileInView="show" viewport={vp}
          variants={stagger(0.1)}
        >
          <motion.span variants={fadeUp} className="inline-block bg-primary text-white text-xs font-bold uppercase tracking-[0.12em] px-3 py-1.5 rounded-full mb-3">
            What We Fix
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold text-txt mb-3">
            Our <span className="text-primary">Repair Services</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-txt-sub max-w-xl mx-auto">
            From cracked screens to water damage — we handle it all with precision and care.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden" whileInView="show" viewport={vp}
          variants={stagger(0.08)}
        >
          {services.map(s => (
            <motion.div
              key={s.title}
              variants={scaleIn}
              whileHover={{ y: -6, boxShadow: '0 20px 40px -12px rgba(0,0,0,0.15)' }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className="group bg-surface border border-bdr rounded-2xl p-7 hover:border-primary transition-colors cursor-default"
            >
              <motion.div
                className="w-13 h-13 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all"
                whileHover={{ scale: 1.12, rotate: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 18 }}
              >
                {s.icon}
              </motion.div>
              <h3 className="font-bold text-txt text-base mb-2">{s.title}</h3>
              <p className="text-txt-sub text-sm leading-relaxed mb-4">{s.desc}</p>
              <span className="inline-block bg-gold text-white text-xs font-bold px-3 py-1 rounded-full">
                {s.price}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
