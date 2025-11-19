import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative h-screen w-full snap-start bg-black text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />

      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl w-full text-center"
        >
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight">Contact</h2>
          <p className="mt-4 text-white/70">Samen iets bouwen of spelen? Stuur een bericht.</p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a href="mailto:contact@nyxbound.org" className="rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors p-5">
              Email
              <p className="text-white/60 text-sm">contact@nyxbound.org</p>
            </a>
            <a href="https://nyxbound.org" target="_blank" className="rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors p-5">
              Website
              <p className="text-white/60 text-sm">nyxbound.org</p>
            </a>
            <a href="#" className="rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors p-5">
              Discord
              <p className="text-white/60 text-sm">Feniks_Revenge</p>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
