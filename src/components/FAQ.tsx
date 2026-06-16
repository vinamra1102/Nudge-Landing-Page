import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FAQ_ITEMS = [
  {
    question: "Why only one match a day?",
    answer:
      "Because more options doesn't mean better outcomes. Every evening at 7pm, everyone gets their one match at the same time — creating a shared moment instead of an anytime, anywhere distraction.",
  },
  {
    question: "How does the matching algorithm work?",
    answer:
      "We use a compatibility model based on your interests, values, and preferences — refined over time using ML as you interact with the app.",
  },
  {
    question: "Is Nudge only for Bangalore?",
    answer:
      "We're launching in Bangalore first to build a strong, verified local community. More cities are coming soon.",
  },
  {
    question: "How do you verify users?",
    answer:
      "All profiles require verification at signup to ensure a safe, authentic community from day one.",
  },
  {
    question: "Is Nudge free?",
    answer:
      "Yes — the core experience, including your daily match and chat, is free. Optional premium features will be available later.",
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-24 px-6" style={{ backgroundColor: "#FFE9EC" }}>
      <div className="max-w-2xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-semibold text-center"
          style={{ fontFamily: "'Fredoka', sans-serif", color: "#65001E" }}
        >
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="mt-12">
          {FAQ_ITEMS.map((item) => (
            <AccordionItem
              key={item.question}
              value={item.question}
              className="bg-white rounded-2xl mb-3 px-6 border-none shadow-sm"
            >
              <AccordionTrigger
                className="text-base hover:no-underline"
                style={{ fontFamily: "'Fredoka', sans-serif", color: "#65001E" }}
              >
                {item.question}
              </AccordionTrigger>
              <AccordionContent
                className="text-sm leading-relaxed"
                style={{ color: "rgba(43,43,43,0.7)" }}
              >
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
