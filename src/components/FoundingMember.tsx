import { useState, type FormEvent } from "react"

export default function FoundingMember() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
  }

  return (
    <section
      className="py-20 px-6 rounded-t-[3rem]"
      style={{ backgroundColor: "#65001E" }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <span
          className="inline-block rounded-full px-4 py-1 text-xs font-semibold tracking-wide mb-4"
          style={{ backgroundColor: "#FFBACF", color: "#65001E" }}
        >
          🎉 Limited Spots
        </span>

        <h2
          className="text-3xl md:text-4xl font-semibold text-white"
          style={{ fontFamily: "'Fredoka', sans-serif" }}
        >
          Be one of the first 100 in Bangalore
        </h2>

        <p className="text-white/70 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
          Founding members get early access, exclusive perks, a founding badge,
          and a direct say in how Nudge evolves.
        </p>

        {submitted ? (
          <p
            className="text-white text-lg mt-10"
            style={{ fontFamily: "'Fredoka', sans-serif" }}
          >
            You&apos;re on the list! 🎉
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center gap-3 mt-8 max-w-md mx-auto"
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
              className="rounded-full px-10 py-4 text-sm font-medium hover:scale-[1.03] transition-transform whitespace-nowrap"
              style={{ backgroundColor: "#FFE9EC", color: "#65001E" }}
            >
              Claim Your Spot
            </button>
          </form>
        )}

        <p className="text-white/50 text-sm mt-3">
          Join 500+ already on the list
        </p>
      </div>
    </section>
  )
}
