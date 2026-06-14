import { MessageCircle, Heart } from "lucide-react"

const SOCIALS = [
  { label: "Twitter / X", href: "#", icon: MessageCircle },
  { label: "Instagram", href: "#", icon: Heart },
]

export default function Footer() {
  return (
    <footer className="py-12 px-6" style={{ backgroundColor: "#65001E" }}>
      <div className="flex flex-col items-center text-center">
        <h2
          className="text-2xl font-bold text-white"
          style={{ fontFamily: "'Fredoka', sans-serif" }}
        >
          Nudge
          <span
            className="inline-block w-2 h-2 rounded-full ml-0.5 align-middle"
            style={{ backgroundColor: "#FFBACF" }}
          />
        </h2>
        <p className="text-white/60 text-sm mt-2">
          One match. Every evening.
        </p>

        <div className="flex items-center gap-4 mt-6">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="text-white/60 hover:text-white transition-colors"
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>

        <p className="text-white/40 text-xs mt-8">
          &copy; 2026 Nudge. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
