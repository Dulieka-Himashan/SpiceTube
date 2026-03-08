import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalEffects from "./components/GlobalEffects"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import WhySpiceTube from "./components/WhySpiceTube"
import FeaturedVideos from "./components/FeaturedVideos"
import FarmerStories from "./components/FarmerStories"
import LatestNews from "./components/LatestNews"
import Partners from "./components/Partners"
import ExportInsights from "./pages/ExportInsights"
import Sustainability from "./pages/Sustainability"
import Innovation from "./pages/Innovation"
import FarmerStoriesPage from "./pages/FarmerStoriesPage"
import Watch from "./pages/Watch"

function WithNav({ children }) {
  return (
    <div style={{ backgroundColor: "#0A0F0D", minHeight: "100vh" }}>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

function Home() {
  return (
    <WithNav>
      <div id="home"><Hero /></div>
      <div id="about"><WhySpiceTube /></div>
      <div id="watch"><FeaturedVideos /></div>
      <div id="farmers"><FarmerStories /></div>
      <div id="news"><LatestNews /></div>
      <div id="partners"><Partners /></div>
    </WithNav>
  )
}

function App() {
  return (
    <BrowserRouter>
      <GlobalEffects />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/export-insights" element={<WithNav><ExportInsights /></WithNav>} />
        <Route path="/sustainability" element={<WithNav><Sustainability /></WithNav>} />
        <Route path="/innovation" element={<WithNav><Innovation /></WithNav>} />
        <Route path="/farmer-stories" element={<WithNav><FarmerStoriesPage /></WithNav>} />
        <Route path="/watch" element={<WithNav><Watch /></WithNav>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
