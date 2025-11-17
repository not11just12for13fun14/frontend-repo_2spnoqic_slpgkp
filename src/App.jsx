import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import Header from './components/Header'
import Features from './components/Features'
import ParallaxShowcase from './components/ParallaxShowcase'
import Contact from './components/Contact'
import Customizer from './components/Customizer'

const defaultPalette = { primary: '#e11d48', accent: '#fb7185' }

export default function App() {
  const [palette, setPalette] = useState(defaultPalette)
  const [ui, setUi] = useState({ font: 'Inter, system-ui, sans-serif', radius: '1rem', blur: 'xl' })

  useEffect(() => {
    document.body.style.fontFamily = ui.font
  }, [ui.font])

  return (
    <div className="min-h-screen bg-white">
      <Header palette={palette} />
      <Hero palette={palette} />
      <Features palette={palette} />
      <ParallaxShowcase palette={palette} ui={ui} />
      <Contact palette={palette} ui={ui} />
      <footer className="border-t border-black/10 py-10 text-center text-sm text-gray-500">© {new Date().getFullYear()} Outlined Design Solutions</footer>
      <Customizer palette={palette} setPalette={setPalette} ui={ui} setUi={setUi} />
    </div>
  )
}
