import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { FiCheckCircle } from 'react-icons/fi'
import Container from './Container'
import { fadeUp, stagger, vp } from '@/lib/motion'

const WA_NUMBER = '447876660020'

export default function BookRepair() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const fd = new FormData(e.target)
    const device = fd.get('device')
    const issue  = fd.get('issue')
    const name   = fd.get('name')
    const phone  = fd.get('phone')

    const msg = [
      '👋 *New Repair Booking – PhoneBoss*',
      '',
      `📱 *Device:* ${device}`,
      `🔧 *Issue:* ${issue}`,
      `👤 *Name:* ${name}`,
      `📞 *Phone:* ${phone}`,
    ].join('\n')

    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank')
    setSent(true)
    setTimeout(() => { setSent(false); e.target.reset() }, 5000)
  }

  const inputCls = `w-full px-4 py-3.5 rounded-xl border-2 border-white/20 bg-white/10 text-white placeholder-white/60
    focus:outline-none focus:border-gold-lt focus:bg-white/15 transition-all text-sm backdrop-blur-sm`

  return (
    <section id="book" className="py-20 relative overflow-hidden bg-linear-to-br from-primary to-primary-dk">
      <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/5" />
      <div className="absolute -bottom-20 -left-10 w-56 h-56 rounded-full bg-gold/10" />

      <Container className="relative z-10">
        <motion.div
          className="mb-10"
          initial="hidden" whileInView="show" viewport={vp}
          variants={stagger(0.1)}
        >
          <motion.h2 variants={fadeUp} className="text-[clamp(1.8rem,4vw,2.6rem)] font-black text-white mb-3">
            Ready to Fix Your <span className="text-gold-lt">Phone?</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/75 text-lg">
            Book online in minutes or just walk in. We're ready when you are.
          </motion.p>
        </motion.div>

        <AnimatePresence mode="wait">
          {sent ? (
            <motion.div
              key="success"
              className="text-center text-white py-8"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.1 }}
              >
                <FiCheckCircle size={56} className="text-gold-lt mx-auto mb-4" />
              </motion.div>
              <h3 className="text-2xl font-black mb-2">Booking Received!</h3>
              <p className="text-white/80">We'll contact you shortly with your free quote.</p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 items-end"
              initial="hidden" whileInView="show" viewport={vp}
              variants={stagger(0.07)}
              exit={{ opacity: 0 }}
            >
              {[
                <select key="device" name="device" required defaultValue="" className={inputCls}>
                  <option value="" disabled>Select Device</option>
                  {['Apple iPhone','Samsung Galaxy','Google Pixel','OnePlus','Huawei','Sony Xperia','Other'].map(o => (
                    <option key={o} className="bg-gray-900">{o}</option>
                  ))}
                </select>,
                <select key="issue" name="issue" required defaultValue="" className={inputCls}>
                  <option value="" disabled>Select Issue</option>
                  {['Screen Repair','Battery Replacement','Water Damage','Camera Repair','Charging Port','Data Recovery','Other'].map(o => (
                    <option key={o} className="bg-gray-900">{o}</option>
                  ))}
                </select>,
                <input key="name"  type="text" name="name"  placeholder="Your Name"     required className={inputCls} />,
                <input key="phone" type="tel"  name="phone" placeholder="Phone Number"  required className={inputCls} />,
                <motion.button
                  key="submit"
                  type="submit"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full px-6 py-3.5 rounded-xl font-bold text-white bg-gold hover:bg-gold-lt transition-colors shadow-lg text-sm whitespace-nowrap"
                >
                  Get Free Quote
                </motion.button>,
              ].map((el, i) => (
                <motion.div key={i} variants={fadeUp}>{el}</motion.div>
              ))}
            </motion.form>
          )}
        </AnimatePresence>
      </Container>
    </section>
  )
}
