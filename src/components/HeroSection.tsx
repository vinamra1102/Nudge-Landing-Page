import { useState, type FormEvent } from "react"

export default function HeroSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
  }

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

      {submitted ? (
        <p
          className="text-white text-lg mt-10 animate-fade-rise"
          style={{ fontFamily: "'Fredoka', sans-serif" }}
        >
          You&apos;re on the list! 🎉
        </p>
      ) : (
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
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent text-white text-sm px-6 py-4 rounded-full outline-none placeholder:text-white/70"
            />
          </div>

          <button
            type="submit"
            className="rounded-full px-10 py-4 text-sm font-medium hover:bg-[#7a0026] hover:scale-[1.03] transition-all whitespace-nowrap"
            style={{ backgroundColor: "#65001E", color: "#FFE9EC" }}
          >
            Join the waitlist
          </button>
        </form>
      )}

      <p className="text-white/60 text-sm mt-4">
        Join 500+ already on the list
      </p>
    </section>
  )
}
