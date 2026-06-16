import { UserPlus, Heart, MessageCircle } from "lucide-react"

const STEPS = [
  {
    number: "01",
    icon: UserPlus,
    title: "Sign up & take the quiz",
    description:
      "Tell us about yourself in a quick 2-minute compatibility quiz.",
  },
  {
    number: "02",
    icon: Heart,
    title: "Get your match at 7pm",
    description:
      "Every evening, receive one match chosen by compatibility — not by endless scrolling.",
  },
  {
    number: "03",
    icon: MessageCircle,
    title: "Chat or wait for tomorrow",
    description:
      "Talk to your match, meet up, or simply wait — tomorrow brings someone new.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6" style={{ backgroundColor: "#FFE9EC" }}>
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-semibold text-center"
          style={{ fontFamily: "'Fredoka', sans-serif", color: "#65001E" }}
        >
          How Nudge Works
        </h2>
        <p
          className="text-center mt-3 text-sm"
          style={{ color: "rgba(43,43,43,0.7)" }}
        >
          Three steps. One match. Every day.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-3xl p-8 shadow-lg hover:scale-[1.02] transition-transform"
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm"
                style={{
                  backgroundColor: "#FFBACF",
                  color: "#65001E",
                  fontFamily: "'Fredoka', sans-serif",
                }}
              >
                {step.number}
              </div>
              <step.icon size={28} color="#B05D76" className="mt-5" />
              <h3
                className="font-semibold text-xl mt-3"
                style={{ fontFamily: "'Fredoka', sans-serif", color: "#65001E" }}
              >
                {step.title}
              </h3>
              <p
                className="text-sm leading-relaxed mt-2"
                style={{ color: "rgba(43,43,43,0.7)" }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
