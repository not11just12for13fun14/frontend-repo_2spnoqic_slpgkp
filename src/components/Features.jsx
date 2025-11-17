import { motion } from 'framer-motion'
import { Sparkles, PenTool, Globe, Share2, Workflow, Bot, Megaphone, Target } from 'lucide-react'

const features = [
  { icon: Sparkles, title: 'Branding', desc: 'Crafting distinct brand systems with cohesive design languages.' },
  { icon: PenTool, title: 'Logo Design', desc: 'Memorable marks built on strategic rationale and iteration.' },
  { icon: Globe, title: 'Website Design', desc: 'High-performance, accessible websites with modern aesthetics.' },
  { icon: Share2, title: 'Social Media', desc: 'Content systems, calendars, and community growth playbooks.' },
  { icon: Workflow, title: 'Business Workflows', desc: 'Automation, integrations, and SOPs that scale with you.' },
  { icon: Bot, title: 'AI Integration', desc: 'Intelligent assistants, data pipelines, and custom LLM tooling.' },
  { icon: Megaphone, title: 'Marketing', desc: 'Full-funnel campaigns that convert attention into revenue.' },
  { icon: Target, title: 'Strategic Campaigns', desc: 'Positioning, GTM, and iterative testing to find market fit.' },
]

export default function Features({ palette }) {
  return (
    <section id="services" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.05 }}
            className="group rounded-2xl border border-white/40 bg-white/60 p-6 backdrop-blur-xl shadow-lg hover:shadow-xl transition-shadow"
            style={{ boxShadow: `0 10px 30px -10px ${palette.primary}22` }}
          >
            <div className="mb-4 inline-flex rounded-xl border border-black/5 bg-white/80 p-3">
              <f.icon className="h-6 w-6" style={{ color: palette.primary }} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
