import Header from './components/Header'
import HeroSection from './components/HeroSection'
import HowItWorks from './components/HowItWorks'
import WhyNudge from './components/WhyNudge'
import FoundingMember from './components/FoundingMember'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          poster="https://videos.pexels.com/video-files/853889/853889-hd_1920_1080_25fps.mp4"
        >
          <source
            src="https://videos.pexels.com/video-files/853889/853889-hd_1920_1080_25fps.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-[#65001E]/60 via-[#65001E]/40 to-transparent z-[1]" />

        <div className="relative z-[2]">
          <Header />
          <HeroSection />
        </div>
      </section>

      <HowItWorks />
      <WhyNudge />
      <FoundingMember />
      <FAQ />
      <div className="h-px bg-white/10 max-w-4xl mx-auto" />
      <Footer />
    </>
  )
}

export default App
