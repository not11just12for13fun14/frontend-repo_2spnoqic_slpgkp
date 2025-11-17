import { useState } from 'react'

export default function Contact({ palette, ui }) {
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed')
      setStatus({ ok: true, id: data.id })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ ok: false, error: err.message })
    }
  }

  return (
    <section id="contact" className="relative mx-auto max-w-3xl px-6 py-20">
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Let’s build your advantage</h2>
        <p className="mt-2 text-gray-600">Tell us where you want to go. We’ll design the journey.</p>
      </div>

      <form onSubmit={submit} className="rounded-3xl border border-white/50 bg-white/70 p-6 backdrop-blur-xl shadow-xl">
        <div className="grid gap-4 sm:grid-cols-2">
          <input name="name" required placeholder="Name" className="rounded-xl border border-black/10 bg-white/80 px-4 py-3 text-sm outline-none placeholder:text-gray-400" />
          <input name="email" required type="email" placeholder="Email" className="rounded-xl border border-black/10 bg-white/80 px-4 py-3 text-sm outline-none placeholder:text-gray-400" />
          <input name="company" placeholder="Company" className="rounded-xl border border-black/10 bg-white/80 px-4 py-3 text-sm outline-none placeholder:text-gray-400" />
          <input name="phone" placeholder="Phone" className="rounded-xl border border-black/10 bg-white/80 px-4 py-3 text-sm outline-none placeholder:text-gray-400" />
          <select name="service_interest" className="rounded-xl border border-black/10 bg-white/80 px-4 py-3 text-sm outline-none text-gray-700">
            <option value="Branding">Branding</option>
            <option value="Logo Design">Logo Design</option>
            <option value="Website Design">Website Design</option>
            <option value="Social Media Management">Social Media Management</option>
            <option value="Business Workflows">Business Workflows</option>
            <option value="AI Integration">AI Integration</option>
            <option value="Marketing">Marketing</option>
            <option value="Strategic Campaigns">Strategic Campaigns</option>
          </select>
          <textarea name="message" rows="4" placeholder="Project details" className="sm:col-span-2 rounded-xl border border-black/10 bg-white/80 px-4 py-3 text-sm outline-none placeholder:text-gray-400" />
        </div>
        <button className="mt-6 w-full rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl" style={{ background: `linear-gradient(135deg, ${palette.primary}, ${palette.accent})` }}>
          Send Message
        </button>
        {status && (
          <p className={`mt-3 text-sm ${status.ok ? 'text-green-600' : 'text-red-600'}`}>
            {status.ok ? 'Thanks! We will be in touch shortly.' : `Error: ${status.error}`}
          </p>
        )}
      </form>
    </section>
  )
}
