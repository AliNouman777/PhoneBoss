import { motion } from 'motion/react'
import { FaInstagram, FaFacebook, FaTiktok, FaWhatsapp } from 'react-icons/fa'
import { FiPhone, FiMail, FiMapPin, FiChevronUp } from 'react-icons/fi'
import { useState, useEffect } from 'react'
import Container from './Container'
import { fadeUp, stagger, vp } from '@/lib/motion'

const repairs  = ['Screen Repair','Battery Replacement','Water Damage','Camera Repair','Charging Port','Data Recovery']
const company  = ['About Us','How It Works','Careers','Privacy Policy','Terms of Service']
const socials  = [
  { icon: <FaInstagram size={16} />, label: 'Instagram' },
  { icon: <FaFacebook size={16} />,  label: 'Facebook'  },
  { icon: <FaTiktok size={16} />,    label: 'TikTok'    },
  { icon: <FaWhatsapp size={16} />,  label: 'WhatsApp'  },
]
const contacts = [
  { icon: <FiPhone size={14} />,   label: '07876 660020',          href: 'tel:+447876660020'              },
  { icon: <FiMail size={14} />,    label: 'mr.shad@live.co.uk',   href: 'mailto:mr.shad@live.co.uk'     },
  { icon: <FiMapPin size={14} />,  label: 'Find Our Store',        href: '#stores'                        },
  { icon: <FaWhatsapp size={14} />,label: 'WhatsApp Us',           href: '#'                              },
]

export default function Footer() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <footer id="contact" className="bg-[#0a0a0a] text-[#888] pt-16">
        <motion.div
          initial="hidden" whileInView="show" viewport={vp}
          variants={stagger(0.1)}
        >
          <Container className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/8">

            {/* Brand */}
            <motion.div variants={fadeUp}>
              <img
                src="/logo.png"
                alt="PhoneBoss"
                className="h-10 w-auto object-contain mb-1 brightness-0 invert"
              />
              <p className="text-gold text-[10px] font-bold uppercase tracking-[0.12em] mb-4">You Break, We Fix</p>
              <p className="text-sm leading-relaxed mb-6">Expert phone repairs done fast, done right. Your trusted local repair specialists.</p>
              <div className="flex gap-2">
                {socials.map(s => (
                  <motion.a
                    key={s.label} href="#" aria-label={s.label}
                    whileHover={{ y: -3, scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                    className="w-9 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-colors"
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Repairs */}
            <motion.div variants={fadeUp}>
              <h4 className="text-white text-sm font-bold mb-4 tracking-wide">Repairs</h4>
              <ul className="flex flex-col gap-2">
                {repairs.map(r => (
                  <li key={r}>
                    <motion.a href="#" whileHover={{ x: 4, color: 'var(--primary)' }} transition={{ type: 'spring', stiffness: 300, damping: 20 }} className="text-sm transition-colors">
                      {r}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div variants={fadeUp}>
              <h4 className="text-white text-sm font-bold mb-4 tracking-wide">Company</h4>
              <ul className="flex flex-col gap-2">
                {company.map(c => (
                  <li key={c}>
                    <motion.a href="#" whileHover={{ x: 4, color: 'var(--primary)' }} transition={{ type: 'spring', stiffness: 300, damping: 20 }} className="text-sm transition-colors">
                      {c}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div variants={fadeUp}>
              <h4 className="text-white text-sm font-bold mb-4 tracking-wide">Contact</h4>
              <ul className="flex flex-col gap-3">
                {contacts.map(c => (
                  <li key={c.label}>
                    <motion.a
                      href={c.href}
                      whileHover={{ x: 4, color: 'var(--primary)' }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="flex items-center gap-2 text-sm transition-colors"
                    >
                      <span className="text-primary">{c.icon}</span>
                      {c.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

          </Container>
        </motion.div>

        <Container className="py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-[#444]">
          <p>© 2025 PhoneBoss. All rights reserved.</p>
          <p>Registered in England &amp; Wales</p>
        </Container>
      </footer>

      {/* Back to top */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        initial={false}
        animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 12 }}
        transition={{ duration: 0.25 }}
        style={{ pointerEvents: visible ? 'auto' : 'none' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-7 right-7 w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center shadow-lg z-50"
      >
        <FiChevronUp size={18} />
      </motion.button>
    </>
  )
}
