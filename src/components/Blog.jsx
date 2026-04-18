import { motion } from 'motion/react'
import { FiArrowRight } from 'react-icons/fi'
import Container from './Container'
import { fadeUp, scaleIn, stagger, vp } from '@/lib/motion'

const posts = [
  { cat: 'Repair Tips', title: 'Why Is My Phone Charging So Slowly?',        desc: 'Slow charging is one of the most common complaints we hear. Here\'s what causes it and how to fix it.',                                       bg: 'from-gray-900 to-orange-950'  },
  { cat: 'Advice',      title: 'What To Do If You Drop Your Phone in Water',  desc: 'Act fast! Follow these steps immediately after water damage to maximise your phone\'s chances of survival.',                                    bg: 'from-slate-900 to-emerald-950' },
  { cat: 'Battery',     title: 'How to Make Your Phone Battery Last Longer',  desc: 'Simple daily habits that can dramatically extend your battery\'s lifespan and keep it healthy for years.',                                     bg: 'from-zinc-900 to-amber-950'   },
]

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-bg-alt">
      <Container>
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial="hidden" whileInView="show" viewport={vp}
          variants={stagger(0.1)}
        >
          <motion.span variants={fadeUp} className="inline-block bg-primary text-white text-xs font-bold uppercase tracking-[0.12em] px-3 py-1.5 rounded-full mb-3">
            Tips &amp; Advice
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold text-txt">
            From the <span className="text-primary">PhoneBoss Blog</span>
          </motion.h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-10"
          initial="hidden" whileInView="show" viewport={vp}
          variants={stagger(0.12)}
        >
          {posts.map(p => (
            <motion.article
              key={p.title}
              variants={scaleIn}
              whileHover={{ y: -6, boxShadow: '0 20px 40px -12px rgba(0,0,0,0.15)' }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className="bg-surface border border-bdr rounded-2xl overflow-hidden hover:border-primary transition-colors cursor-default"
            >
              <div className={`h-44 bg-linear-to-br ${p.bg} flex items-end p-4`}>
                <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  {p.cat}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-txt text-base mb-2 leading-snug">{p.title}</h3>
                <p className="text-txt-sub text-sm leading-relaxed mb-4">{p.desc}</p>
                <motion.a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary text-sm font-bold"
                  whileHover={{ gap: '0.75rem' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  Read More <FiArrowRight size={14} />
                </motion.a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial="hidden" whileInView="show" viewport={vp}
          variants={fadeUp}
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block px-8 py-3 rounded-xl border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-colors"
          >
            View All Posts
          </motion.a>
        </motion.div>
      </Container>
    </section>
  )
}
