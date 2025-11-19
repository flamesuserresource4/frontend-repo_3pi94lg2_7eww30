import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'

function App() {
  return (
    <div className="h-screen w-full bg-black text-white overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/30 backdrop-blur border-b border-white/10">
        <a href="#home" className="font-semibold tracking-wide text-white">Feniks_Revenge</a>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-white/80">
          <a href="#about" className="hover:text-white transition-colors">Over</a>
          <a href="#work" className="hover:text-white transition-colors">Werk</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>
        <a href="https://nyxbound.org" target="_blank" className="text-xs rounded-full border border-white/15 px-3 py-1.5 hover:border-white/40 transition-colors">nyxbound.org</a>
      </header>

      <main className="h-full w-full">
        <Hero />
        <About />
        <Work />
        <Contact />
      </main>
    </div>
  )
}

export default App
