const NAV_LINKS = [
  { label: "How it Works", href: "#how-it-works" },
  { label: "Why Nudge", href: "#why-nudge" },
  { label: "FAQ", href: "#faq" },
]

export default function Header() {
  return (
    <header className="fixed top-6 left-0 right-0 z-50 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <a
          href="/"
          className="rounded-2xl bg-white/90 backdrop-blur-md px-4 py-2 flex items-center gap-1.5 shrink-0 shadow-lg shadow-black/5"
        >
          <span
            className="text-xl font-bold tracking-tight"
            style={{ fontFamily: "'Fredoka', sans-serif", color: "#65001E" }}
          >
            Nudge
          </span>
          <span
            className="inline-block w-2 h-2 rounded-full"
            style={{ backgroundColor: "#FFBACF" }}
          />
        </a>

        <nav className="hidden md:flex items-center rounded-full bg-white/90 backdrop-blur-md px-2 py-2 shadow-lg shadow-black/5">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium px-4 py-1.5 transition-colors hover:text-[#65001E] rounded-full"
              style={{ color: "rgba(43,43,43,0.7)" }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#join"
          className="rounded-full px-6 py-2.5 text-sm font-medium hover:scale-[1.03] transition-transform shrink-0 shadow-lg shadow-black/10"
          style={{ backgroundColor: "#65001E", color: "#FFE9EC" }}
        >
          Join Waitlist
        </a>
      </div>
    </header>
  )
}
