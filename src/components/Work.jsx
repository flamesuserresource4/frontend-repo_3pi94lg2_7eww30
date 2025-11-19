import { motion } from 'framer-motion'
import { Server, Code2, Gamepad2 } from 'lucide-react'

export default function Work() {
  const items = [
    {
      icon: <Code2 className="w-5 h-5" />, 
      title: 'Developer',
      desc: 'Van scripts tot webapps. Clean code, performance & minimal UI.'
    },
    {
      icon: <Server className="w-5 h-5" />, 
      title: 'Minecraft Hosting',
      desc: 'Servers voor vrienden. Optimalisatie, plugins en uptime.'
    },
    {
      icon: <Gamepad2 className="w-5 h-5" />, 
      title: 'LegacyReborn',
      desc: 'Co-founder: community, infrastructuur en events.'
    },
  ]

  return (
    <section id="work" className="relative h-screen w-full snap-start bg-black text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />

      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div className="max-w-5xl w-full">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-semibold tracking-tight text-center"
          >
            Wat ik doe
          </motion.h2>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {items.map((it) => (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-5"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-purple-600/20 text-purple-300 p-2">{it.icon}</div>
                  <h3 className="text-lg font-medium">{it.title}</h3>
                </div>
                <p className="mt-3 text-white/70 text-sm">{it.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
