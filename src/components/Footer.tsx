export default function Footer() {
  return (
    <footer className="py-12 px-6" style={{ backgroundColor: "#65001E" }}>
      <div className="flex flex-col items-center text-center">
        <h2
          className="text-2xl font-bold text-white"
          style={{ fontFamily: "'Fredoka', sans-serif" }}
        >
          Nudge
          <span
            className="inline-block w-2 h-2 rounded-full ml-0.5 align-middle"
            style={{ backgroundColor: "#FFBACF" }}
          />
        </h2>
        <p className="text-white/60 text-sm mt-2">
          One match. Every evening.
        </p>

        <p className="text-white/40 text-xs mt-6">
          &copy; 2026 Nudge. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
