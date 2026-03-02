import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

gsap.registerPlugin(ScrollTrigger)

export default function Sustainability() {

  const heroRef = useRef(null)
  const statsRef = useRef(null)
  const initiativesRef = useRef(null)
  const storiesRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(heroRef.current.children,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 0.9, stagger: 0.15, ease: "power3.out", delay: 0.3 }
    )
    gsap.fromTo(statsRef.current.children,
      { opacity: 0, y: 40, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.1, ease: "back.out(1.4)", scrollTrigger: { trigger: statsRef.current, start: "top 90%", once: true } }
    )
    gsap.fromTo(initiativesRef.current.children,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: "power3.out", scrollTrigger: { trigger: initiativesRef.current, start: "top 90%", once: true } }
    )
    gsap.fromTo(storiesRef.current.children,
      { opacity: 0, x: -40 },
      { opacity: 1, x: 0, duration: 0.7, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: storiesRef.current, start: "top 90%", once: true } }
    )
  }, [])

  const stats = [
    { number: "500+", label: "Farmers on Regenerative Practices" },
    { number: "40%", label: "Reduction in Chemical Use" },
    { number: "12", label: "Districts Covered" },
    { number: "2030", label: "Net Zero Target Year" },
  ]

  const initiatives = [
    { tag: "SOIL HEALTH", title: "Regenerative Agriculture Program", desc: "Teaching farmers composting, cover cropping, and natural pest management to restore soil biodiversity across Sri Lanka's spice regions.", color: "#8BC34A", image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80" },
    { tag: "WATER", title: "Rainwater Harvesting & Irrigation", desc: "Installing water conservation systems across 200+ farms to reduce dependence on groundwater and protect natural water sources.", color: "#2196F3", image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&q=80" },
    { tag: "BIODIVERSITY", title: "Agroforestry & Native Species", desc: "Integrating native tree species into spice farms to restore biodiversity, provide shade, and create additional income streams.", color: "#4CAF50", image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80" },
    { tag: "CLIMATE", title: "Climate-Resilient Farming", desc: "Training farmers in climate adaptation techniques including drought-resistant varieties and early warning systems.", color: "#FF9800", image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80" },
    { tag: "PACKAGING", title: "Zero Waste Packaging Initiative", desc: "Transitioning spice exporters to biodegradable and recyclable packaging materials for global markets.", color: "#9C27B0", image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80" },
    { tag: "CARBON", title: "Carbon Sequestration Project", desc: "Measuring and certifying carbon stored in Sri Lanka's spice farms to create new revenue through carbon credits.", color: "#00BCD4", image: "https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?w=600&q=80" },
  ]

  const stories = [
    { name: "Nimal Rajapaksa", region: "Matale", title: "How Composting Doubled My Cinnamon Yield", desc: "After switching to regenerative practices, Nimal's farm saw a 40% increase in soil health scores and a doubling of yield within 2 years.", image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400&q=80" },
    { name: "Chamari Wickramasinghe", region: "Kandy", title: "Women's Cooperative Goes 100% Organic", desc: "Chamari led her 30-member cooperative to full organic certification, opening doors to premium European markets.", image: "https://images.unsplash.com/photo-1595508064774-5ff825520bb6?w=400&q=80" },
    { name: "Asela Fernando", region: "Galle", title: "Agroforestry: Growing Spices Under the Canopy", desc: "By integrating native trees with his pepper vines, Asela restored biodiversity and reduced water usage by 35%.", image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&q=80" },
  ]

  return (
    <div style={{ backgroundColor: "#0A0F0D", minHeight: "100vh" }}>
      <Navbar />

      {/* HERO */}
      <section style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
        <img
          src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=90"
          alt="Sustainability"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0.30) 70%, transparent 100%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,15,13,1) 0%, transparent 50%)" }} />

        <div ref={heroRef} style={{ position: "relative", zIndex: 10, height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", maxWidth: "1280px", margin: "0 auto", padding: "120px 64px 60px 64px" }}>

          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
            <div style={{ width: "48px", height: "2px", backgroundColor: "#8BC34A" }} />
            <span style={{ color: "#8BC34A", fontSize: "11px", fontWeight: 700, letterSpacing: "5px", textTransform: "uppercase" }}>Sustainability</span>
          </div>

          <h1 style={{ fontSize: "clamp(44px, 6vw, 84px)", fontWeight: 900, color: "#FFFFFF", lineHeight: 1.05, marginBottom: "24px", fontFamily: "'Playfair Display', Georgia, serif", maxWidth: "750px" }}>
            Farming for the
            <br />
            <span style={{ color: "#8BC34A", fontStyle: "italic" }}>Future of Ceylon</span>
            <br />
            Spices
          </h1>

          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "18px", lineHeight: 1.8, maxWidth: "540px", marginBottom: "40px" }}>
            SpiceTubeLK champions regenerative agriculture, biodiversity, and climate-resilient farming to protect Sri Lanka's spice legacy for generations to come.
          </p>

          <div style={{ display: "flex", gap: "14px" }}>
            <button style={{ backgroundColor: "#8BC34A", color: "#050F08", padding: "15px 34px", borderRadius: "8px", fontWeight: 800, fontSize: "14px", border: "none", cursor: "pointer", transition: "all 0.3s" }}
              onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px)"}
              onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
            >Explore Initiatives</button>
            <button style={{ backgroundColor: "transparent", border: "1px solid rgba(255,255,255,0.3)", color: "#FFFFFF", padding: "15px 34px", borderRadius: "8px", fontWeight: 600, fontSize: "14px", cursor: "pointer" }}>
              Watch Stories
            </button>
          </div>

        </div>
      </section>

      {/* STATS */}
      <section style={{ backgroundColor: "#080D0A", padding: "80px 0", borderTop: "1px solid #1E3022" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 64px" }}>
          <div ref={statsRef} style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }}>
            {stats.map((stat, i) => (
              <div key={i}
                style={{ backgroundColor: "#111916", border: "1px solid #1E3022", borderRadius: "16px", padding: "40px 28px", textAlign: "center", transition: "all 0.3s", cursor: "default" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#8BC34A"; e.currentTarget.style.transform = "translateY(-4px)" }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#1E3022"; e.currentTarget.style.transform = "translateY(0)" }}
              >
                <div style={{ color: "#8BC34A", fontSize: "44px", fontWeight: 900, lineHeight: 1, marginBottom: "10px", fontFamily: "'Playfair Display', serif" }}>{stat.number}</div>
                <div style={{ color: "rgba(255,255,255,0.55)", fontSize: "13px", fontWeight: 500, lineHeight: 1.4 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INITIATIVES */}
      <section style={{ backgroundColor: "#0A0F0D", padding: "100px 0", borderTop: "1px solid #1E3022" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 64px" }}>

          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
              <div style={{ width: "32px", height: "1px", backgroundColor: "#8BC34A" }} />
              <span style={{ color: "#8BC34A", fontSize: "11px", fontWeight: 700, letterSpacing: "5px", textTransform: "uppercase" }}>What We Do</span>
              <div style={{ width: "32px", height: "1px", backgroundColor: "#8BC34A" }} />
            </div>
            <h2 style={{ color: "#FFFFFF", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 900, fontFamily: "'Playfair Display', Georgia, serif" }}>
              Our <span style={{ color: "#8BC34A", fontStyle: "italic" }}>Green Initiatives</span>
            </h2>
          </div>

          <div ref={initiativesRef} style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {initiatives.map((item, i) => (
              <div key={i}
                style={{ backgroundColor: "#111916", border: "1px solid #1E3022", borderRadius: "16px", overflow: "hidden", cursor: "pointer", transition: "all 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = item.color; e.currentTarget.style.transform = "translateY(-8px)" }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#1E3022"; e.currentTarget.style.transform = "translateY(0)" }}
              >
                <div style={{ height: "180px", overflow: "hidden" }}>
                  <img src={item.image} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s" }}
                    onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
                    onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                  />
                </div>
                <div style={{ padding: "24px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                    <div style={{ width: "32px", height: "2px", backgroundColor: item.color, borderRadius: "2px" }} />
                    <span style={{ color: item.color, fontSize: "9px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>{item.tag}</span>
                  </div>
                  <h3 style={{ color: "#FFFFFF", fontSize: "17px", fontWeight: 800, marginBottom: "10px", fontFamily: "'Playfair Display', serif", lineHeight: 1.3 }}>{item.title}</h3>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FARMER STORIES */}
      <section style={{ backgroundColor: "#080D0A", padding: "100px 0", borderTop: "1px solid #1E3022" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 64px" }}>

          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "48px" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
                <div style={{ width: "48px", height: "2px", backgroundColor: "#8BC34A" }} />
                <span style={{ color: "#8BC34A", fontSize: "11px", fontWeight: 700, letterSpacing: "5px", textTransform: "uppercase" }}>Real Stories</span>
              </div>
              <h2 style={{ color: "#FFFFFF", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 900, fontFamily: "'Playfair Display', Georgia, serif" }}>
                Farmers Leading the <span style={{ color: "#8BC34A", fontStyle: "italic" }}>Green Change</span>
              </h2>
            </div>
            <a href="#" style={{ color: "#8BC34A", fontSize: "14px", fontWeight: 600, textDecoration: "none", borderBottom: "1px solid #8BC34A", paddingBottom: "2px" }}>View All Stories</a>
          </div>

          <div ref={storiesRef} style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {stories.map((story, i) => (
              <div key={i}
                style={{ backgroundColor: "#111916", border: "1px solid #1E3022", borderRadius: "16px", overflow: "hidden", cursor: "pointer", transition: "all 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#8BC34A"; e.currentTarget.style.transform = "translateY(-8px)" }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#1E3022"; e.currentTarget.style.transform = "translateY(0)" }}
              >
                <div style={{ height: "200px", overflow: "hidden" }}>
                  <img src={story.image} alt={story.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ padding: "24px" }}>
                  <p style={{ color: "#8BC34A", fontSize: "12px", fontWeight: 600, marginBottom: "8px" }}>{story.name} — {story.region}</p>
                  <h3 style={{ color: "#FFFFFF", fontSize: "17px", fontWeight: 800, marginBottom: "10px", fontFamily: "'Playfair Display', serif", lineHeight: 1.3 }}>{story.title}</h3>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", lineHeight: 1.7, marginBottom: "16px" }}>{story.desc}</p>
                  <a href="#" style={{ color: "#8BC34A", fontSize: "13px", fontWeight: 600, textDecoration: "none" }}>Read Full Story →</a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}
