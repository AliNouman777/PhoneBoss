import { FaApple, FaGoogle, FaMicrosoft } from 'react-icons/fa'
import { SiSamsung, SiHuawei, SiSony, SiXiaomi, SiOneplus } from 'react-icons/si'
import { motion } from 'motion/react'

const brands = [
  { icon: <FaApple size={24} />,    name: 'Apple'     },
  { icon: <SiSamsung size={24} />,  name: 'Samsung'   },
  { icon: <FaGoogle size={24} />,   name: 'Google'    },
  { icon: <FaMicrosoft size={24} />,name: 'Microsoft' },
  { icon: <SiOneplus size={24} />,  name: 'OnePlus'   },
  { icon: <SiHuawei size={24} />,   name: 'Huawei'    },
  { icon: <SiSony size={24} />,     name: 'Sony'      },
  { icon: <SiXiaomi size={24} />,   name: 'Xiaomi'    },
]

/* duplicate so the loop is seamless */
const track = [...brands, ...brands]

export default function Brands() {
  return (
    <section className="py-10 bg-bg-alt border-y border-bdr overflow-x-hidden">
      <p className="text-center text-xs font-bold uppercase tracking-[0.12em] text-txt-muted mb-6">
        Certified Specialists For
      </p>

      {/* Marquee wrapper — fades out at edges */}
      <div
        className="relative"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
        }}
      >
        <motion.div
          className="flex gap-3 w-max py-3"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 22,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {track.map((b, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08, y: -2 }}
              transition={{ type: 'spring', stiffness: 300, damping: 18 }}
              className="flex items-center gap-2.5 px-5 py-3 rounded-xl
                         bg-surface border border-bdr text-sm font-semibold
                         text-txt-sub hover:text-primary hover:border-primary
                         hover:shadow-md transition-colors cursor-default shrink-0"
            >
              <span className="text-primary">{b.icon}</span>
              {b.name}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
