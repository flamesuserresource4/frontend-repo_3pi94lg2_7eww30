import { motion } from 'framer-motion'

export default function About() {
  const facts = [
    { label: 'Leeftijd', value: '18' },
    { label: 'Geboren', value: '26 oktober 2007' },
    { label: 'Rol', value: 'Co-founder @ LegacyReborn' },
    { label: 'Hobby\'s', value: 'Programmeren, Minecraft servers hosten' },
  ]

  return (
    <section id="about" className="relative h-screen w-full snap-start bg-black text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black" />

      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight">Over mij</h2>
          <p className="mt-4 text-white/70 max-w-2xl">
            Ik ben Feniks_Revenge. Ik houd van clean design, minimalisme en smooth animaties. 
            In m\'n vrije tijd programmeer ik en host ik Minecraft servers voor vrienden. 
            Als co-founder van LegacyReborn bouw ik mee aan community en infrastructuur.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {facts.map((f) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-4"
              >
                <p className="text-xs uppercase tracking-wider text-white/50">{f.label}</p>
                <p className="mt-1 text-lg font-medium">{f.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
