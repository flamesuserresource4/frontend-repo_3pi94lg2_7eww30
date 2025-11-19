import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Background() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ container: typeof window !== 'undefined' ? undefined : ref })

  // Animate rotation and hue shift subtly with scroll
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45])
  const x1 = useTransform(scrollYProgress, [0, 1], ['-20%', '10%'])
  const y1 = useTransform(scrollYProgress, [0, 1], ['-10%', '30%'])
  const x2 = useTransform(scrollYProgress, [0, 1], ['60%', '40%'])
  const y2 = useTransform(scrollYProgress, [0, 1], ['70%', '50%'])
  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 1.2])
  const scale2 = useTransform(scrollYProgress, [0, 1], [1.1, 0.9])
  const opacityPulse = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* Base gradient */}
      <motion.div
        style={{ rotate }}
        className="absolute inset-[-30%]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(1200px_800px_at_20%_20%,rgba(124,58,237,0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_700px_at_80%_70%,rgba(168,85,247,0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(600px_500px_at_50%_50%,rgba(59,7,100,0.45),transparent_60%)]" />
      </motion.div>

      {/* Animated glow blobs */}
      <motion.div
        style={{ x: x1, y: y1, scale: scale1, opacity: opacityPulse }}
        className="absolute w-[60vw] h-[60vw] max-w-[900px] max-h-[900px] -top-20 -left-20 rounded-full blur-[100px]"
      >
        <div className="w-full h-full rounded-full bg-purple-600/30" />
      </motion.div>
      <motion.div
        style={{ x: x2, y: y2, scale: scale2, opacity: opacityPulse }}
        className="absolute w-[55vw] h-[55vw] max-w-[800px] max-h-[800px] bottom-0 right-0 rounded-full blur-[110px]"
      >
        <div className="w-full h-full rounded-full bg-fuchsia-500/25" />
      </motion.div>

      {/* Vignette for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,transparent_60%,rgba(0,0,0,0.6)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60" />
    </div>
  )
}
