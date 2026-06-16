import { Brain, Sparkles, Clock, ShieldCheck } from "lucide-react"

const REASONS = [
  {
    icon: Brain,
    title: "ML-Powered",
    description: "Real compatibility over photos.",
  },
  {
    icon: Sparkles,
    title: "Zero Fatigue",
    description: "One match means intentional choices.",
  },
  {
    icon: Clock,
    title: "Daily Ritual",
    description: "Dating that fits into your life.",
  },
  {
    icon: ShieldCheck,
    title: "Verified & Safe",
    description: "Authentic community from day one.",
  },
]

export default function WhyNudge() {
  return (
    <section id="why-nudge" className="py-24 px-6 bg-[#FFF5F7]">
      <div className="max-w-6xl mx-auto">
        <p
          className="text-xs tracking-widest uppercase mb-4 font-medium"
          style={{ color: "#B05D76" }}
        >
          Why Nudge
        </p>

        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] max-w-3xl"
          style={{ fontFamily: "'Fredoka', sans-serif", color: "#2B2B2B" }}
        >
          This isn't just dating,{" "}
          <span style={{ color: "#B05D76" }}>it's intentional</span>{" "}
          connection.
        </h2>

        <div className="mt-12 rounded-3xl overflow-hidden relative h-48 md:h-64">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #FFBACF 0%, #B05D76 40%, #FFE9EC 70%, #65001E 100%)",
              opacity: 0.85,
            }}
          />
          <div
            className="absolute top-[-40px] left-[-60px] w-48 h-48 rounded-full blur-2xl"
            style={{ background: "rgba(255,186,207,0.6)" }}
          />
          <div
            className="absolute bottom-[-30px] right-[-40px] w-56 h-56 rounded-full blur-2xl"
            style={{ background: "rgba(255,233,236,0.7)" }}
          />
          <div
            className="absolute top-1/2 left-1/3 w-32 h-32 rounded-full blur-xl"
            style={{ background: "rgba(176,93,118,0.5)" }}
          />
          <div
            className="absolute top-1/4 right-1/4 w-24 h-24 rounded-full blur-xl"
            style={{ background: "rgba(101,0,30,0.3)" }}
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-14">
          {REASONS.map((reason) => (
            <div key={reason.title} className="flex flex-col items-start">
              <div
                className="w-12 h-12 rounded-full border-2 flex items-center justify-center mb-3"
                style={{ borderColor: "rgba(176,93,118,0.4)" }}
              >
                <reason.icon size={20} color="#B05D76" />
              </div>
              <h3
                className="font-semibold text-base"
                style={{ fontFamily: "'Fredoka', sans-serif", color: "#65001E" }}
              >
                {reason.title}
              </h3>
              <p
                className="text-sm mt-1 leading-relaxed"
                style={{ color: "rgba(43,43,43,0.6)" }}
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
