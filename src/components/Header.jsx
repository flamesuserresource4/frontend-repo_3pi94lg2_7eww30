export default function Header() {
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'Over' },
    { href: '#work', label: 'Werk' },
    { href: '#contact', label: 'Contact' },
  ]
  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4 bg-black/30 backdrop-blur border-b border-white/10">
      <a href="#home" className="font-semibold tracking-wide text-white">Feniks_Revenge</a>
      <nav className="hidden sm:flex items-center gap-6 text-sm text-white/80">
        {links.map(l => (
          <a key={l.href} href={l.href} className="hover:text-white transition-colors">{l.label}</a>
        ))}
      </nav>
      <a href="https://nyxbound.org" target="_blank" className="text-xs rounded-full border border-white/15 px-3 py-1.5 hover:border-white/40 transition-colors">nyxbound.org</a>
    </header>
  )
}
