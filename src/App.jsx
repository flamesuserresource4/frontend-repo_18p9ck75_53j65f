import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-white font-[Inter]">
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-white/5 bg-black/20 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#home" className="text-sm font-semibold tracking-tight text-white/90">MRF</a>
          <nav className="hidden gap-6 text-sm text-white/70 sm:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#portfolio" className="hover:text-white">Portfolio</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </main>

      <footer className="border-t border-white/5 bg-black/20 py-6 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Muhammad Rizqy Firmansyah — Crafted with passion.
      </footer>
    </div>
  )
}
