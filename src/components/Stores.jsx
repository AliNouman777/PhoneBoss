import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { FiMapPin, FiPhone, FiClock, FiExternalLink, FiChevronRight } from 'react-icons/fi'
import { FaStar } from 'react-icons/fa'
import Container from './Container'

const stores = [
  {
    city:    'Portsmouth',
    name:    'PhoneBoss Portsmouth',
    address: '191 Commercial Rd, Portsmouth PO1 1EA',
    phone:   '07876 660020',
    hours:   'Mon – Sat: 10am – 6pm · Sun: 10am – 5pm',
    rating:  4.5,
    reviews: 484,
    mapQuery: '191+Commercial+Rd,+Portsmouth+PO1+1EA,+UK',
    mapsUrl:  'https://www.google.com/maps/search/?api=1&query=191+Commercial+Rd+Portsmouth+PO1+1EA',
  },
  {
    city:    'Exeter',
    name:    'PhoneBoss Exeter',
    address: '235 High St, Exeter EX4 3NZ',
    phone:   '07876 660020',
    hours:   'Mon – Sat: 10am – 6pm · Sun: 10am – 5pm',
    rating:  4.4,
    reviews: 168,
    mapQuery: '235+High+St,+Exeter+EX4+3NZ,+UK',
    mapsUrl:  'https://www.google.com/maps/search/?api=1&query=235+High+St+Exeter+EX4+3NZ',
  },
  {
    city:    'Cambridge',
    name:    'PhoneBoss Cambridge',
    address: '25 Petty Cury, Cambridge CB2 3NB',
    phone:   '07876 660020',
    hours:   'Mon – Sat: 10am – 6pm · Sun: 10am – 5pm',
    rating:  4.7,
    reviews: 324,
    mapQuery: '25+Petty+Cury,+Cambridge+CB2+3NB,+UK',
    mapsUrl:  'https://www.google.com/maps/search/?api=1&query=25+Petty+Cury+Cambridge+CB2+3NB',
  },
]

function Stars({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(s => (
        <FaStar
          key={s}
          size={12}
          className={s <= Math.round(rating) ? 'text-gold' : 'text-bdr'}
        />
      ))}
    </div>
  )
}

export default function Stores() {
  const [active, setActive] = useState(0)
  const store = stores[active]

  return (
    <section id="stores" className="py-20 bg-bg-alt">
      <Container>

        {/* ── Header ── */}
        <div className="text-center mb-12">
          <span className="inline-block bg-primary text-white text-xs font-bold uppercase tracking-[0.12em] px-3 py-1.5 rounded-full mb-3">
            Our Locations
          </span>
          <h2 className="text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold text-txt mb-3">
            Find Our <span className="text-primary">Store</span>
          </h2>
          <p className="text-txt-sub max-w-xl mx-auto text-sm">
            Walk in at any of our three UK locations — no appointment needed for most repairs.
          </p>
        </div>

        {/* ── Main layout ── */}
        <div className="grid lg:grid-cols-[300px_1fr] gap-6 items-start">

          {/* ── Store selector ── */}
          <div className="flex flex-col gap-3">
            {stores.map((s, i) => (
              <motion.button
                key={s.city}
                onClick={() => setActive(i)}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={`w-full text-left px-5 py-4 rounded-xl border transition-all duration-200
                  ${active === i
                    ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20'
                    : 'bg-surface border-bdr text-txt-sub hover:border-primary hover:text-primary'
                  }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className={`font-bold text-base ${active === i ? 'text-white' : 'text-txt'}`}>
                      {s.city}
                    </p>
                    <p className={`text-xs mt-0.5 ${active === i ? 'text-white/80' : 'text-txt-muted'}`}>
                      {s.address}
                    </p>
                    <div className="flex items-center gap-1.5 mt-2">
                      <Stars rating={s.rating} />
                      <span className={`text-xs font-semibold ${active === i ? 'text-white/90' : 'text-txt-muted'}`}>
                        {s.rating} ({s.reviews})
                      </span>
                    </div>
                  </div>
                  <FiChevronRight
                    size={18}
                    className={`shrink-0 transition-transform duration-200 ${active === i ? 'text-white translate-x-1' : 'text-bdr'}`}
                  />
                </div>
              </motion.button>
            ))}
          </div>

          {/* ── Map + details ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="flex flex-col gap-4"
            >
              {/* Google Maps embed */}
              <div className="rounded-xl overflow-hidden border border-bdr shadow-sm aspect-video w-full">
                <iframe
                  title={store.name}
                  src={`https://maps.google.com/maps?q=${store.mapQuery}&output=embed&z=16`}
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Store info card */}
              <div className="bg-surface border border-bdr rounded-xl p-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

                <div className="flex gap-3 items-start">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <FiMapPin size={16} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-txt-muted mb-1">Address</p>
                    <p className="text-sm font-semibold text-txt leading-snug">{store.address}</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <FiPhone size={16} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-txt-muted mb-1">Phone</p>
                    <a href={`tel:${store.phone.replace(/\s/g, '')}`}
                      className="text-sm font-semibold text-txt hover:text-primary transition-colors">
                      {store.phone}
                    </a>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <FiClock size={16} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-txt-muted mb-1">Hours</p>
                    <p className="text-sm font-semibold text-txt leading-snug">{store.hours}</p>
                  </div>
                </div>
              </div>

              {/* Get directions CTA */}
              <a
                href={store.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 self-start px-5 py-2.5 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary-dk transition-colors"
              >
                <FiExternalLink size={15} />
                Get Directions — {store.city}
              </a>
            </motion.div>
          </AnimatePresence>

        </div>
      </Container>
    </section>
  )
}
