import Header from './components/Header'
import HeroSection from './components/HeroSection'

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
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
    </div>
  )
}

export default App
