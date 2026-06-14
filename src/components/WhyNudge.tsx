import { Brain, Sparkles, Clock } from "lucide-react"

const REASONS = [
  {
    icon: Brain,
    title: "ML-Powered Compatibility",
    description:
      "Our algorithm learns what matters to you and finds matches based on real compatibility, not just photos.",
  },
  {
    icon: Sparkles,
    title: "Zero Swipe Fatigue",
    description:
      "No infinite scrolling, no decision paralysis. One match means every connection is intentional.",
  },
  {
    icon: Clock,
    title: "A Daily Ritual",
    description:
      "Every evening at 7pm, something to look forward to. Dating that fits into your life, not consumes it.",
  },
]

export default function WhyNudge() {
  return (
    <section id="why-nudge" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-semibold text-center"
          style={{ fontFamily: "'Fredoka', sans-serif", color: "#65001E" }}
        >
          Why Nudge
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
          {REASONS.map((reason) => (
            <div
              key={reason.title}
              className="rounded-3xl p-8 border"
              style={{ backgroundColor: "#FFE9EC", borderColor: "rgba(255,186,207,0.4)" }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: "#FFBACF" }}
              >
                <reason.icon size={24} color="#65001E" />
              </div>
              <h3
                className="font-semibold text-lg mt-4"
                style={{ fontFamily: "'Fredoka', sans-serif", color: "#65001E" }}
              >
                {reason.title}
              </h3>
              <p
                className="text-sm mt-2"
                style={{ color: "rgba(43,43,43,0.7)" }}
              >
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
