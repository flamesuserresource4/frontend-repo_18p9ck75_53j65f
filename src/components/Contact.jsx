import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative bg-[#0b0f19] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.12),transparent_40%)]" />

      <div className="relative mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold"
        >
          Let’s build something remarkable
        </motion.h2>
        <p className="mt-2 max-w-2xl text-white/70">
          For collaborations, commissions, or just to say hello—drop a message below. Links to socials are right after the form.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={(e) => e.preventDefault()}
            className="space-y-4 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10"
          >
            <div>
              <label className="mb-1 block text-sm text-white/80">Name</label>
              <input type="text" required className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-white/40 outline-none focus:border-cyan-400" placeholder="Your name" />
            </div>
            <div>
              <label className="mb-1 block text-sm text-white/80">Email</label>
              <input type="email" required className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-white/40 outline-none focus:border-cyan-400" placeholder="you@example.com" />
            </div>
            <div>
              <label className="mb-1 block text-sm text-white/80">Message</label>
              <textarea rows={5} required className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-white/40 outline-none focus:border-cyan-400" placeholder="Tell me about your project" />
            </div>
            <button type="submit" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 px-6 py-3 font-medium text-white shadow-lg shadow-cyan-500/20 transition hover:brightness-110">
              Send message
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10"
          >
            <h3 className="text-lg font-semibold">Connect</h3>
            <p className="mt-2 text-white/70">Find more work and updates here:</p>
            <div className="mt-4 space-y-3">
              <a href="https://www.linkedin.com" target="_blank" className="block rounded-lg bg-white/5 p-3 text-white/90 transition hover:bg-white/10">LinkedIn</a>
              <a href="https://www.behance.net" target="_blank" className="block rounded-lg bg-white/5 p-3 text-white/90 transition hover:bg-white/10">Behance</a>
              <a href="https://github.com" target="_blank" className="block rounded-lg bg-white/5 p-3 text-white/90 transition hover:bg-white/10">GitHub</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
