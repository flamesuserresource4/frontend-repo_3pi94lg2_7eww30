import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full snap-start overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.25),transparent_60%)]" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <motion.h1 className="text-4xl sm:text-6xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Feniks_Revenge
          </motion.h1>
          <motion.p
            className="mt-4 text-lg sm:text-xl text-white/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.7 }}
          >
            Minimal. Modern. Paars & zwart vibes. Ik bouw en host, met liefde voor tech en strakke experiences.
          </motion.p>

          <motion.div
            className="mt-8 flex items-center justify-center gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <a href="#about" className="rounded-full bg-purple-600/90 hover:bg-purple-500 px-6 py-2.5 text-sm font-semibold transition-colors">
              Ontdek meer
            </a>
            <a href="#contact" className="rounded-full border border-white/20 hover:border-white/40 px-6 py-2.5 text-sm font-semibold transition-colors">
              Contact
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          Scroll voor meer
          <div className="mx-auto mt-2 h-8 w-[1px] bg-gradient-to-b from-transparent via-white/60 to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}
