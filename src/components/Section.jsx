import { motion } from 'framer-motion'

export default function Section({ id, children }) {
  return (
    <section id={id} className="relative h-screen w-full snap-start flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-5xl w-full"
      >
        {children}
      </motion.div>
    </section>
  )
}
