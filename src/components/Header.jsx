import { useState } from 'react'
import { Menu } from 'lucide-react'

export default function Header({ palette }) {
  const [open, setOpen] = useState(false)
  const nav = [
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' },
  ]
  return (
    <header className="sticky top-0 z-40">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/40 bg-white/60 px-4 py-3 backdrop-blur-xl shadow-md">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg" style={{ background: `linear-gradient(135deg, ${palette.primary}, ${palette.accent})` }} />
            <span className="text-sm font-bold tracking-wide text-gray-900">Outlined Design Solutions</span>
          </a>
          <nav className="hidden gap-6 md:flex">
            {nav.map(n => (
              <a key={n.href} href={n.href} className="text-sm font-medium text-gray-700 hover:text-gray-900">{n.label}</a>
            ))}
          </nav>
          <button className="md:hidden" onClick={() => setOpen(!open)}><Menu className="h-6 w-6"/></button>
        </div>
        {open && (
          <div className="mt-2 rounded-2xl border border-white/40 bg-white/60 p-4 backdrop-blur-xl shadow-md md:hidden">
            {nav.map(n => (
              <a key={n.href} href={n.href} className="block py-2 text-sm font-medium text-gray-700">{n.label}</a>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
