import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero({ palette }) {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white/80" />
      </div>

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-xl rounded-2xl border border-white/40 bg-white/50 p-6 shadow-2xl"
          style={{
            boxShadow: `0 10px 40px -10px ${palette.primary}33, inset 0 1px 0 0 rgba(255,255,255,0.6)`
          }}
        >
          <span className="mb-3 inline-block rounded-full border border-black/5 bg-white/70 px-3 py-1 text-xs font-medium text-gray-600 backdrop-blur">
            Futuristic Creative Agency
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            Outlined Design Solutions
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
            Branding, Logo Design, Websites, Social Media, Workflows, AI Integration, Marketing & Strategic Campaigns.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a href="#contact" className="rounded-full px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl"
              style={{ background: `linear-gradient(135deg, ${palette.primary}, ${palette.accent})` }}>
              Start Your Journey
            </a>
            <a href="#services" className="rounded-full border border-black/10 bg-white/70 px-5 py-3 text-sm font-semibold text-gray-800 backdrop-blur transition-colors hover:bg-white">
              Explore Services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
