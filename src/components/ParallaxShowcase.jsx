import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function ParallaxShowcase({ palette, ui }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 100])

  return (
    <section ref={ref} className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white to-white/70" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Design that moves with you</h2>
          <p className="mt-2 text-gray-600">Every interaction is intentional. Every frame, pixel-perfect.</p>
        </div>

        <div className="relative h-[520px]">
          <motion.div style={{ y: y1 }} className="absolute left-0 top-10 w-1/2">
            <Card palette={palette} ui={ui} title="Strategy → Identity" desc="Workshops to carve position, then shape visuals that speak your truth."/>
          </motion.div>
          <motion.div style={{ y: y2 }} className="absolute right-0 top-28 w-1/2">
            <Card palette={palette} ui={ui} title="Systems → Scale" desc="Design systems, tokens, and content ops to scale your story."/>
          </motion.div>
          <motion.div style={{ y: y3 }} className="absolute left-12 bottom-0 w-2/3">
            <Card palette={palette} ui={ui} title="Web → Performance" desc="Beautiful, fast, accessible websites that convert curiosity to action."/>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Card({ palette, ui, title, desc }) {
  return (
    <div className="rounded-3xl border border-white/50 bg-white/70 p-6 backdrop-blur-2xl shadow-xl">
      <div className="h-2 w-16 rounded-full" style={{ background: palette.primary }} />
      <h3 className="mt-3 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
      <div className="mt-4 h-24 w-full rounded-2xl border border-black/10 bg-gradient-to-br" style={{ backgroundImage: `linear-gradient(135deg, ${palette.primary}11, ${palette.accent}11)` }} />
    </div>
  )
}
