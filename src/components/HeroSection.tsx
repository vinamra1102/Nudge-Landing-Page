export default function HeroSection() {
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

      <p className="text-white/60 text-sm mt-20">
        Join 500+ already on the list
      </p>
    </section>
  )
}
