import { motion, useScroll, useTransform } from 'framer-motion'
import { Cpu, Cube, Wrench, Lightbulb } from 'lucide-react'
import { useRef } from 'react'

function SkillBar({ label, value, icon: Icon }) {
  return (
    <div className="mb-4">
      <div className="mb-2 flex items-center gap-2 text-white/90">
        <Icon className="h-4 w-4 text-cyan-400" />
        <span className="text-sm font-medium">{label}</span>
        <span className="ml-auto text-xs text-white/60">{value}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500"
        />
      </div>
    </div>
  )
}

export default function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [80, -80])

  return (
    <section id="about" ref={ref} className="relative overflow-hidden bg-[#0b0f19] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.15),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.12),transparent_40%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-start gap-12 md:grid-cols-2">
          <motion.div style={{ y }} className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-bold"
            >
              A journey where engineering meets imagination
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-white/80 leading-relaxed"
            >
              Graduated from Poltekkes Kemenkes Surabaya in Electromedical Engineering, Rizqy crafts solutions at the intersection of human health and precise technology. Along the way, a spark for 3D design took flight—turning complex ideas into expressive, functional visuals.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-white/80 leading-relaxed"
            >
              Today, that blend of systems thinking and artistic curiosity fuels immersive projects—from medical device concepts to cinematic 3D scenes. The goal: design that informs, inspires, and works beautifully.
            </motion.p>
          </motion.div>

          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6 text-xl font-semibold text-white/90"
            >
              Core strengths
            </motion.h3>
            <SkillBar label="Electromedical Engineering" value={90} icon={Cpu} />
            <SkillBar label="3D Modeling" value={92} icon={Cube} />
            <SkillBar label="CAD Design" value={88} icon={Wrench} />
            <SkillBar label="Innovation & Storytelling" value={86} icon={Lightbulb} />
          </div>
        </div>
      </div>
    </section>
  )
}
