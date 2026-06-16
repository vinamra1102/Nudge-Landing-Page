import { useState, type FormEvent } from "react"
import { Loader2 } from "lucide-react"

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type Status = "idle" | "loading" | "success" | "error-invalid" | "error-network"

interface FoundingMemberProps {
  onJoin: () => void
  wasAlreadyJoined: boolean
}

export default function FoundingMember({ onJoin, wasAlreadyJoined }: FoundingMemberProps) {
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
  const joinedViaHero = wasAlreadyJoined && status === "success" && email === ""

  return (
    <section className="relative py-20 px-6 rounded-t-[3rem] overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #65001E 0%, #4d0017 50%, #65001E 100%)",
        }}
      />
      <div
        className="absolute top-[-40px] right-[-40px] w-64 h-64 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(255,186,207,0.15)" }}
      />
      <div
        className="absolute bottom-[-60px] left-[-30px] w-72 h-72 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(176,93,118,0.12)" }}
      />

      <div className="relative max-w-3xl mx-auto text-center">
        <p
          className="text-xs tracking-widest uppercase mb-4 font-medium"
          style={{ color: "#FFBACF" }}
        >
          Limited Spots
        </p>

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

        {isDone ? (
          <p
            className="text-white text-lg mt-10 animate-fade-rise"
            style={{ fontFamily: "'Fredoka', sans-serif" }}
          >
            {joinedViaHero
              ? "You're on the list — thanks for joining early! 🎉 We'll be in touch with founding member perks."
              : "You're on the founding list! 🎉"}
          </p>
        ) : (
          <>
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
                className="rounded-full px-10 py-4 text-sm font-medium hover:scale-[1.03] transition-transform whitespace-nowrap inline-flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                style={{ backgroundColor: "#FFE9EC", color: "#65001E" }}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Joining...
                  </>
                ) : (
                  "Claim Your Spot"
                )}
              </button>
            </form>

            {status === "error-invalid" && (
              <p className="text-sm mt-3 text-[#B91C1C]">Please enter a valid email</p>
            )}
          </>
        )}

        <p className="text-white/50 text-sm mt-3">
          Be among the first to join
        </p>
      </div>
    </section>
  )
}
