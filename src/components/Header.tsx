const NAV_LINKS = [
  { label: "How it Works", href: "#how-it-works" },
  { label: "Why Nudge", href: "#why-nudge" },
  { label: "FAQ", href: "#faq" },
]

export default function Header() {
  return (
    <nav className="relative z-10 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
      <a
        href="/"
        className="text-3xl font-bold tracking-tight"
        style={{ fontFamily: "'Fredoka', sans-serif", color: "#fff" }}
      >
        Nudge
        <span
          className="inline-block w-2 h-2 rounded-full ml-0.5 align-middle"
          style={{ backgroundColor: "#FFBACF" }}
        />
      </a>

      <div className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-sm text-white/80 hover:text-white transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>

      <a
        href="#join"
        className="rounded-full px-6 py-2.5 text-sm font-medium hover:scale-[1.03] transition-transform inline-block"
        style={{ backgroundColor: "#FFBACF", color: "#65001E" }}
      >
        Join Waitlist
      </a>
    </nav>
  )
}
