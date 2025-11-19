import Header from './components/Header'
import Background from './components/Background'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'

function App() {
  return (
    <div className="h-screen w-full bg-black text-white overflow-y-auto snap-y snap-mandatory">
      <Background />
      <Header />

      <main className="h-full w-full">
        {/* Hero replaced: no headline or scroll hint, just a clean entry state using the animated background */}
        <section id="home" className="relative h-screen w-full snap-start" />
        <About />
        <Work />
        <Contact />
      </main>
    </div>
  )
}

export default App
