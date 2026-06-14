import { useState, type FormEvent } from "react"
import { Loader2 } from "lucide-react"

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type Status = "idle" | "loading" | "success" | "error-invalid" | "error-network"

interface HeroSectionProps {
  onJoin: () => void
  wasAlreadyJoined: boolean
}

export default function HeroSection({ onJoin, wasAlreadyJoined }: HeroSectionProps) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<Status>(wasAlreadyJoined ? "success" : "idle")

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (status === "loading") return

    if (!EMAIL_REGEX.test(email.trim())) {
      setStatus("error-invalid")
      return
    }

    setStatus("loading")

    setTimeout(() => {
      setStatus("success")
      onJoin()
    }, 800)
  }

  const isDone = status === "success"

  return (
    <section className="relative z-10 flex flex-col items-center text-center px-6 pt-32 pb-40">
      <h1
        className="text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-tight max-w-5xl font-bold text-white animate-fade-rise"
        style={{ fontFamily: "'Fredoka', sans-serif" }}
      >
        One match.{" "}
        <em className="not-italic text-white/70">Every evening.</em>
      </h1>

      <p className="text-white/85 text-base sm:text-lg max-w-2xl mt-8 leading-relaxed animate-fade-rise-delay">
        No endless swiping. No decision fatigue. Just one thoughtfully chosen
        match, delivered daily — starting in Bangalore.
      </p>

      {isDone ? (
        <p
          className="text-white text-lg mt-10 animate-fade-rise"
          style={{ fontFamily: "'Fredoka', sans-serif" }}
        >
          You're on the list! 🎉
        </p>
      ) : (
        <>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center gap-3 mt-10 w-full max-w-lg animate-fade-rise-delay-2"
          >
            <div className="liquid-glass-input rounded-full flex-1 w-full sm:w-auto">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (status === "error-invalid") {
                    setStatus("idle")
                  }
                }}
                disabled={status === "loading"}
                className="w-full bg-transparent text-white text-sm px-6 py-4 rounded-full outline-none placeholder:text-white/70 disabled:opacity-60"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="rounded-full px-10 py-4 text-sm font-medium hover:bg-[#7a0026] hover:scale-[1.03] transition-all whitespace-nowrap inline-flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
              style={{ backgroundColor: "#65001E", color: "#FFE9EC" }}
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Joining...
                </>
              ) : (
                "Join the waitlist"
              )}
            </button>
          </form>

          {status === "error-invalid" && (
            <p className="text-sm mt-3 text-[#B91C1C]">Please enter a valid email</p>
          )}
        </>
      )}

      <p className="text-white/60 text-sm mt-4">
        Be among the first to join
      </p>
    </section>
  )
}
