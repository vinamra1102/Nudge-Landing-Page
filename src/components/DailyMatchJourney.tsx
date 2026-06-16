import { useState } from "react"
import { ChevronDown } from "lucide-react"

const JOURNEY_STEPS = [
  {
    label: "New to Nudge",
    sub: "Week 1",
    stat: "Avg. 3 matches/week",
    detail:
      "Your first week on Nudge is about discovery. We learn what you like through your interactions and start building your compatibility profile. Expect 3-5 matches per week as we calibrate.",
    gradient: "linear-gradient(135deg, rgba(255,186,207,0.3) 0%, rgba(255,233,236,0.5) 100%)",
  },
  {
    label: "Building Connections",
    sub: "Week 2-3",
    stat: "Quality > Quantity",
    detail:
      "As our ML model learns your preferences, match quality increases. You'll receive more refined suggestions that align with your values and interests. Fewer matches, stronger connections.",
    gradient: "linear-gradient(135deg, rgba(176,93,118,0.15) 0%, rgba(255,186,207,0.3) 100%)",
  },
  {
    label: "Going Steady",
    sub: "Month 2+",
    stat: "Deeper matches",
    detail:
      "By this point, Nudge understands what matters to you. Matches are curated with precision — each one a genuine opportunity for meaningful connection.",
    gradient: "linear-gradient(135deg, rgba(101,0,30,0.08) 0%, rgba(176,93,118,0.2) 100%)",
  },
  {
    label: "Long-Term",
    sub: "Ongoing",
    stat: "Your rhythm",
    detail:
      "Nudge becomes part of your daily rhythm. Whether you're actively dating or taking a break, your evening match is always there — no pressure, just possibility.",
    gradient: "linear-gradient(135deg, rgba(255,233,236,0.4) 0%, rgba(255,186,207,0.4) 50%, rgba(176,93,118,0.15) 100%)",
  },
]

export default function DailyMatchJourney() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#FFE9EC" }}>
      <div className="max-w-4xl mx-auto">
        <p
          className="text-xs tracking-widest uppercase mb-3 font-medium"
          style={{ color: "#B05D76" }}
        >
          Your Journey
        </p>
        <h2
          className="text-4xl md:text-5xl font-semibold mb-12"
          style={{ fontFamily: "'Fredoka', sans-serif", color: "#65001E" }}
        >
          Your Daily Match Journey
        </h2>

        <div className="flex flex-col gap-3">
          {JOURNEY_STEPS.map((step, i) => (
            <div
              key={step.label}
              className="rounded-2xl transition-all duration-300 overflow-hidden"
              style={{ background: step.gradient }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:brightness-95 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div>
                    <h3
                      className="font-semibold text-lg"
                      style={{ fontFamily: "'Fredoka', sans-serif", color: "#65001E" }}
                    >
                      {step.label}
                    </h3>
                    <p className="text-xs mt-0.5" style={{ color: "rgba(43,43,43,0.5)" }}>
                      {step.sub}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span
                    className="text-xs font-medium rounded-full px-3 py-1"
                    style={{ backgroundColor: "#FFBACF", color: "#65001E" }}
                  >
                    {step.stat}
                  </span>
                  <ChevronDown
                    size={18}
                    color="#B05D76"
                    className="transition-transform duration-300"
                    style={{
                      transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </div>
              </button>

              <div
                className="transition-all duration-300 overflow-hidden"
                style={{
                  maxHeight: openIndex === i ? "200px" : "0px",
                  opacity: openIndex === i ? 1 : 0,
                }}
              >
                <div className="px-6 pb-5">
                  <div
                    className="h-px mb-4"
                    style={{ background: "rgba(176,93,118,0.15)" }}
                  />
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(43,43,43,0.7)" }}
                  >
                    {step.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
