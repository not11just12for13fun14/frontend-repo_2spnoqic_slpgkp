import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Palette, Laugh, Type, Music } from 'lucide-react'

const defaultPalettes = [
  { name: 'Crimson Glow', primary: '#e11d48', accent: '#fb7185' },
  { name: 'Violet Flux', primary: '#7c3aed', accent: '#a78bfa' },
  { name: 'Oceanic', primary: '#0ea5e9', accent: '#22d3ee' },
  { name: 'Emerald Mist', primary: '#10b981', accent: '#34d399' },
]

const fonts = [
  { name: 'Inter', value: 'Inter, system-ui, sans-serif' },
  { name: 'Manrope', value: 'Manrope, system-ui, sans-serif' },
  { name: 'IBM Plex Sans', value: 'IBM Plex Sans, system-ui, sans-serif' },
  { name: 'Mona Sans', value: 'Mona Sans, system-ui, sans-serif' },
]

const emotions = [
  { name: 'Bold', radius: '1rem', blur: 'xl' },
  { name: 'Calm', radius: '1.5rem', blur: '2xl' },
  { name: 'Playful', radius: '9999px', blur: 'lg' },
]

export default function Customizer({ palette, setPalette, ui, setUi }) {
  const [open, setOpen] = useState(true)

  useEffect(() => {
    document.documentElement.style.setProperty('--custom-font', ui.font)
  }, [ui.font])

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.div layout className="w-[320px] rounded-2xl border border-white/50 bg-white/70 p-4 backdrop-blur-xl shadow-2xl">
        <div className="mb-3 flex items-center justify-between">
          <h4 className="text-sm font-semibold text-gray-800">Personalize your experience</h4>
          <button onClick={() => setOpen(!open)} className="rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs">{open ? 'Hide' : 'Show'}</button>
        </div>
        <AnimatePresence>{open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
            <div>
              <div className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-700"><Palette className="h-4 w-4"/> Color Palette</div>
              <div className="grid grid-cols-4 gap-2">
                {defaultPalettes.map(p => (
                  <button key={p.name} onClick={() => setPalette(p)} className="group rounded-xl border border-black/10 p-2 text-left hover:shadow">
                    <div className="flex gap-1">
                      <span className="h-4 w-4 rounded" style={{ background: p.primary }} />
                      <span className="h-4 w-4 rounded" style={{ background: p.accent }} />
                    </div>
                    <span className="mt-1 block text-[10px] text-gray-600">{p.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-700"><Type className="h-4 w-4"/> Font</div>
              <div className="grid grid-cols-2 gap-2">
                {fonts.map(f => (
                  <button key={f.name} onClick={() => setUi({ ...ui, font: f.value })} className="rounded-xl border border-black/10 bg-white/80 px-3 py-2 text-xs hover:shadow">
                    {f.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-700"><Laugh className="h-4 w-4"/> Emotion</div>
              <div className="flex gap-2">
                {emotions.map(e => (
                  <button key={e.name} onClick={() => setUi({ ...ui, radius: e.radius, blur: e.blur })} className="rounded-xl border border-black/10 bg-white/80 px-3 py-2 text-xs hover:shadow">
                    {e.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-700"><Music className="h-4 w-4"/> Radio</div>
              <audio controls className="w-full">
                <source src="https://icecast.ravepartyradio.org/ravepartyradio-192.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              <p className="mt-1 text-[10px] text-gray-500">Toggle your vibe GTA-style while you explore.</p>
            </div>
          </motion.div>
        )}</AnimatePresence>
      </motion.div>
    </div>
  )
}
