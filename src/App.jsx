import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import WhySpiceTube from "./components/WhySpiceTube"
import FeaturedVideos from "./components/FeaturedVideos"
import FarmerStories from "./components/FarmerStories"
import LatestNews from "./components/LatestNews"
import Partners from "./components/Partners"
import Footer from "./components/Footer"
import ExportInsights from "./pages/ExportInsights"
import Sustainability from "./pages/Sustainability"
import Innovation from "./pages/Innovation"
import FarmerStoriesPage from "./pages/FarmerStoriesPage"
import Watch from "./pages/Watch"

function Home() {
  return (
    <div style={{ backgroundColor: "#0A0F0D", minHeight: "100vh" }}>
      <Navbar />
      <div id="home"><Hero /></div>
      <div id="about"><WhySpiceTube /></div>
      <div id="watch"><FeaturedVideos /></div>
      <div id="farmers"><FarmerStories /></div>
      <div id="news"><LatestNews /></div>
      <div id="partners"><Partners /></div>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/export-insights" element={<ExportInsights />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/innovation" element={<Innovation />} />
        <Route path="/farmer-stories" element={<FarmerStoriesPage />} />
        <Route path="/watch" element={<Watch />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
