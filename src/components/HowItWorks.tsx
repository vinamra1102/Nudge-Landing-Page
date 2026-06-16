import { useState } from "react"
import { UserPlus, Heart, MessageCircle } from "lucide-react"

const STEPS = [
  {
    number: "01",
    icon: UserPlus,
    title: "Sign up & take the quiz",
    bullet:
      "Tell us about yourself in a quick 2-minute compatibility quiz. No endless profiles — just what matters.",
  },
  {
    number: "02",
    icon: Heart,
    title: "Get your match at 7pm",
    bullet:
      "Every evening, receive one match chosen by compatibility — not by endless scrolling. A moment to look forward to.",
  },
  {
    number: "03",
    icon: MessageCircle,
    title: "Chat or wait for tomorrow",
    bullet:
      "Talk to your match, meet up, or simply wait — tomorrow brings someone new. No pressure, just possibility.",
  },
]

const CARD_GRADIENTS = [
  "linear-gradient(135deg, #FFBACF 0%, #FFE9EC 100%)",
  "linear-gradient(135deg, #FFE9EC 0%, #FFBACF 80%, #B05D76 100%)",
  "linear-gradient(135deg, #B05D76 0%, #FFBACF 50%, #FFE9EC 100%)",
]

const TABS = ["Sign Up", "Get Matched", "Chat", "Repeat"]

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState(0)
  const [activeCard, setActiveCard] = useState<number | null>(null)

  return (
    <section id="how-it-works" className="py-24 px-6" style={{ backgroundColor: "#FFE9EC" }}>
      <div className="max-w-6xl mx-auto">
        <p
          className="text-xs tracking-widest uppercase text-center mb-3 font-medium"
          style={{ color: "#B05D76" }}
        >
          The Process
        </p>
        <h2
          className="text-4xl md:text-5xl font-semibold text-center"
          style={{ fontFamily: "'Fredoka', sans-serif", color: "#65001E" }}
        >
          How Nudge Works
        </h2>

        <div className="flex items-center justify-center gap-1 mt-8 mb-12 bg-white/60 backdrop-blur-sm rounded-full p-1 max-w-sm mx-auto">
          {TABS.map((tab, i) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(i)
                if (i < 3) setActiveCard(i)
              }}
              className={`text-sm font-medium px-4 py-2 rounded-full transition-all ${
                activeTab === i ? "bg-white shadow-sm" : ""
              }`}
              style={{
                color: activeTab === i ? "#65001E" : "rgba(43,43,43,0.5)",
                fontFamily: activeTab === i ? "'Fredoka', sans-serif" : undefined,
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STEPS.map((step, i) => (
            <div
              key={step.number}
              onMouseEnter={() => setActiveCard(i)}
              onMouseLeave={() => setActiveCard(null)}
              className={`rounded-3xl p-6 transition-all duration-300 cursor-default ${
                activeCard === i ? "scale-[1.03] shadow-xl" : "shadow-md"
              }`}
              style={{ background: CARD_GRADIENTS[i] }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <step.icon size={22} color="#65001E" />
                  <h3
                    className="font-semibold text-lg"
                    style={{ fontFamily: "'Fredoka', sans-serif", color: "#65001E" }}
                  >
                    {step.title}
                  </h3>
                </div>
                <span
                  className="text-4xl font-bold select-none"
                  style={{ color: "#65001E", opacity: 0.2, fontFamily: "'Fredoka', sans-serif" }}
                >
                  {step.number}
                </span>
              </div>

              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: "rgba(43,43,43,0.7)" }}
              >
                {step.bullet}
              </p>

              <button
                className="rounded-full w-full py-3 text-sm font-medium hover:scale-[1.02] transition-transform"
                style={{ backgroundColor: "#65001E", color: "#FFE9EC" }}
              >
                {i === 0 ? "Get Started" : "Learn More"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
