import { useState } from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: 'Biomech Arm Concept',
    category: '3D Design',
    image: 'https://images.unsplash.com/photo-1582461406283-c71c63439e05?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCaW9tZWNoJTIwQXJtJTIwQ29uY2VwdHxlbnwwfDB8fHwxNzYyMzMwNDUzfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    description:
      'A high-poly mechanical arm concept blending organic forms with precision-engineered joints. Modeled, textured, and lit for a cinematic feel.',
  },
  {
    id: 2,
    title: 'ECG Reader Interface',
    category: 'Engineering UX',
    image: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=1400&auto=format&fit=crop',
    description:
      'UI exploration for an ECG monitoring system—focused on clarity, signal readability, and actionable insights for clinicians.',
  },
  {
    id: 3,
    title: 'Surgical Light CAD',
    category: 'CAD',
    image: 'https://images.unsplash.com/photo-1684752397429-4ce4d7856cb8?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdXJnaWNhbCUyMExpZ2h0JTIwQ0FEfGVufDB8MHx8fDE3NjIzMzA0NTR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    description:
      'Parametric CAD design of a surgical lighting system with adjustable optics and modular components.',
  },
  {
    id: 4,
    title: 'Futuristic Scanner',
    category: '3D Design',
    image: 'https://images.unsplash.com/photo-1677774884290-24fd51a8c9ee?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGdXR1cmlzdGljJTIwU2Nhbm5lcnxlbnwwfDB8fHwxNzYyMzMwNDU0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    description:
      'Hard-surface 3D model with layered materials and emissive accents, rendered with dramatic volumetrics.',
  },
]

export default function Portfolio() {
  const [active, setActive] = useState(null)

  return (
    <section id="portfolio" className="relative bg-[#0b0f19] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.10),transparent_40%),radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.10),transparent_40%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Selected Works</h2>
            <p className="mt-2 text-white/70">A mix of engineering visuals and expressive 3D art.</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.button
              key={p.id}
              onClick={() => setActive(p)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl bg-white/5 text-left shadow-lg ring-1 ring-white/10"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 transition group-hover:opacity-100">
                <p className="text-xs uppercase tracking-wider text-cyan-300">{p.category}</p>
                <h3 className="text-lg font-semibold">{p.title}</h3>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {active && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6" onClick={() => setActive(null)}>
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="w-full max-w-3xl overflow-hidden rounded-2xl bg-[#0f1424] shadow-2xl ring-1 ring-white/10"
          >
            <div className="aspect-video w-full overflow-hidden">
              <img src={active.image} alt={active.title} className="h-full w-full object-cover" />
            </div>
            <div className="space-y-2 p-6">
              <p className="text-xs uppercase tracking-wider text-cyan-300">{active.category}</p>
              <h3 className="text-2xl font-semibold text-white">{active.title}</h3>
              <p className="text-white/80">{active.description}</p>
              <div className="pt-2">
                <button onClick={() => setActive(null)} className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20">Close</button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  )
}
