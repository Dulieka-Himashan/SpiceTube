import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

gsap.registerPlugin(ScrollTrigger)

export default function FarmerStoriesPage() {

  const heroRef = useRef(null)
  const gridRef = useRef(null)
  const [activeFilter, setActiveFilter] = useState("All")

  useEffect(() => {
    gsap.fromTo(heroRef.current.children,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 0.9, stagger: 0.15, ease: "power3.out", delay: 0.3 }
    )
    gsap.fromTo(gridRef.current.children,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: "power3.out", scrollTrigger: { trigger: gridRef.current, start: "top 90%", once: true } }
    )
  }, [])

  const filters = ["All", "Cinnamon", "Pepper", "Cardamom", "Turmeric", "Cloves", "Women-Led"]

  const farmers = [
    { name: "Sunil Bandara", region: "Matale, Central Province", crop: "Ceylon Cinnamon", method: "Organic & Regenerative", cert: "ISO Certified", category: "Cinnamon", story: "Third generation cinnamon farmer transforming traditional practices with sustainable methods, now exporting to 12 countries.", image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=600&q=80", featured: true },
    { name: "Kamala Perera", region: "Kandy, Central Province", crop: "Black Pepper & Cardamom", method: "Women-Led Cooperative", cert: "Fairtrade Certified", category: "Women-Led", story: "Leading a cooperative of 45 women farmers, Kamala has tripled household incomes through direct export partnerships.", image: "https://images.unsplash.com/photo-1595508064774-5ff825520bb6?w=600&q=80" },
    { name: "Ranjith Silva", region: "Galle, Southern Province", crop: "Cloves & Nutmeg", method: "Agroforestry", cert: "Organic Certified", category: "Cloves", story: "Pioneer of agroforestry techniques in Southern Sri Lanka, producing premium quality cloves for European markets.", image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80" },
    { name: "Priya Wijesinghe", region: "Kurunegala, North Western", crop: "Turmeric & Ginger", method: "Youth Agriculture Leader", cert: "HACCP Certified", category: "Turmeric", story: "At 28, Priya is revolutionizing turmeric processing with modern extraction technology, creating value-added products.", image: "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?w=600&q=80" },
    { name: "Dharmasiri Jayawardena", region: "Hambantota, Southern Province", crop: "Ceylon Pepper", method: "Climate-Resilient Farming", cert: "GlobalG.A.P Certified", category: "Pepper", story: "Using climate-smart agriculture techniques, Dharmasiri has maintained consistent yields despite changing weather patterns.", image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600&q=80" },
    { name: "Anoma Fernando", region: "Ratnapura, Sabaragamuwa", crop: "Cinnamon & Vanilla", method: "Community Transformation", cert: "Rainforest Alliance", category: "Cinnamon", story: "Anoma's community project has brought 200 small farmers together under one export brand, changing lives across her village.", image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=600&q=80" },
    { name: "Nimal Rajapaksa", region: "Matale, Central Province", crop: "Ceylon Cinnamon", method: "Regenerative Agriculture", cert: "Organic Certified", category: "Cinnamon", story: "After switching to regenerative practices, Nimal's farm saw a 40% increase in soil health and doubling of yield within 2 years.", image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80" },
    { name: "Chamari Wickramasinghe", region: "Kandy, Central Province", crop: "Cardamom & Pepper", method: "Women-Led Cooperative", cert: "Fairtrade Certified", category: "Women-Led", story: "Chamari led her 30-member cooperative to full organic certification, opening doors to premium European markets.", image: "https://images.unsplash.com/photo-1595508064774-5ff825520bb6?w=600&q=80" },
    { name: "Asela Fernando", region: "Galle, Southern Province", crop: "Black Pepper", method: "Agroforestry", cert: "Rainforest Alliance", category: "Pepper", story: "By integrating native trees with his pepper vines, Asela restored biodiversity and reduced water usage by 35%.", image: "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?w=600&q=80" },
  ]

  const filtered = activeFilter === "All" ? farmers : farmers.filter(f => f.category === activeFilter)

  return (
    <div style={{ backgroundColor: "#0A0F0D", minHeight: "100vh" }}>
      <Navbar />

      {/* HERO */}
      <section style={{ position: "relative", height: "70vh", overflow: "hidden" }}>
        <img
          src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&q=90"
          alt="Farmer Stories"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.80) 50%, rgba(0,0,0,0.30) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,15,13,1) 0%, transparent 50%)" }} />

        <div ref={heroRef} style={{ position: "relative", zIndex: 10, height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", maxWidth: "1280px", margin: "0 auto", padding: "120px 64px 60px 64px" }}>

          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
            <div style={{ width: "48px", height: "2px", backgroundColor: "#C8960C" }} />
            <span style={{ color: "#C8960C", fontSize: "11px", fontWeight: 700, letterSpacing: "5px", textTransform: "uppercase" }}>Farmer Stories</span>
          </div>

          <h1 style={{ fontSize: "clamp(44px, 6vw, 84px)", fontWeight: 900, color: "#FFFFFF", lineHeight: 1.05, marginBottom: "24px", fontFamily: "'Playfair Display', Georgia, serif", maxWidth: "700px" }}>
            The Faces Behind
            <br />
            <span style={{ color: "#C8960C", fontStyle: "italic" }}>Ceylon Spices</span>
          </h1>

          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "18px", lineHeight: 1.8, maxWidth: "520px" }}>
            Real stories from the farmers, cooperatives, and communities who grow, harvest and export Sri Lanka's finest spices to the world.
          </p>

        </div>
      </section>

      {/* FILTERS + GRID */}
      <section style={{ backgroundColor: "#0A0F0D", padding: "80px 0 100px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 64px" }}>

          {/* Filter Bar */}
          <div style={{ display: "flex", gap: "12px", marginBottom: "48px", flexWrap: "wrap" }}>
            {filters.map((filter) => (
              <button key={filter}
                onClick={() => setActiveFilter(filter)}
                style={{
                  backgroundColor: activeFilter === filter ? "#C8960C" : "#111916",
                  color: activeFilter === filter ? "#050F08" : "rgba(255,255,255,0.6)",
                  border: activeFilter === filter ? "1px solid #C8960C" : "1px solid #1E3022",
                  padding: "8px 20px", borderRadius: "30px",
                  fontWeight: 600, fontSize: "13px", cursor: "pointer",
                  transition: "all 0.2s",
                }}
                onMouseEnter={e => { if (activeFilter !== filter) { e.currentTarget.style.borderColor = "#C8960C"; e.currentTarget.style.color = "#C8960C" } }}
                onMouseLeave={e => { if (activeFilter !== filter) { e.currentTarget.style.borderColor = "#1E3022"; e.currentTarget.style.color = "rgba(255,255,255,0.6)" } }}
              >{filter}</button>
            ))}
          </div>

          {/* Grid */}
          <div ref={gridRef} style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {filtered.map((farmer, i) => (
              <div key={i}
                style={{ backgroundColor: "#111916", border: "1px solid #1E3022", borderRadius: "16px", overflow: "hidden", cursor: "pointer", transition: "all 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#C8960C"; e.currentTarget.style.transform = "translateY(-8px)" }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#1E3022"; e.currentTarget.style.transform = "translateY(0)" }}
              >
                <div style={{ position: "relative", height: "240px" }}>
                  <img src={farmer.image} alt={farmer.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)" }} />
                  <div style={{ position: "absolute", bottom: "16px", left: "16px" }}>
                    <span style={{ backgroundColor: "#C8960C", color: "#050F08", fontSize: "9px", fontWeight: 800, padding: "3px 10px", borderRadius: "4px", letterSpacing: "2px" }}>
                      {farmer.cert}
                    </span>
                  </div>
                  {farmer.featured && (
                    <div style={{ position: "absolute", top: "16px", right: "16px" }}>
                      <span style={{ backgroundColor: "rgba(200,150,12,0.9)", color: "#050F08", fontSize: "9px", fontWeight: 800, padding: "3px 10px", borderRadius: "4px", letterSpacing: "2px" }}>
                        FEATURED
                      </span>
                    </div>
                  )}
                </div>

                <div style={{ padding: "24px" }}>
                  <h3 style={{ color: "#FFFFFF", fontSize: "18px", fontWeight: 800, marginBottom: "4px", fontFamily: "'Playfair Display', serif" }}>{farmer.name}</h3>
                  <p style={{ color: "#C8960C", fontSize: "12px", fontWeight: 600, marginBottom: "12px" }}>{farmer.region}</p>
                  <div style={{ display: "flex", gap: "8px", marginBottom: "14px", flexWrap: "wrap" }}>
                    <span style={{ backgroundColor: "rgba(200,150,12,0.1)", border: "1px solid rgba(200,150,12,0.2)", color: "rgba(255,255,255,0.7)", fontSize: "11px", padding: "3px 10px", borderRadius: "20px" }}>{farmer.crop}</span>
                    <span style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)", fontSize: "11px", padding: "3px 10px", borderRadius: "20px" }}>{farmer.method}</span>
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "13px", lineHeight: 1.7, marginBottom: "18px" }}>{farmer.story}</p>
                  <a href="#" style={{ color: "#C8960C", fontSize: "13px", fontWeight: 600, textDecoration: "none" }}>Read Full Story →</a>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div style={{ textAlign: "center", marginTop: "56px" }}>
            <button style={{ backgroundColor: "transparent", border: "2px solid #C8960C", color: "#C8960C", padding: "14px 40px", borderRadius: "8px", fontWeight: 700, fontSize: "14px", cursor: "pointer", transition: "all 0.3s" }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = "#C8960C"; e.currentTarget.style.color = "#050F08" }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "#C8960C" }}
            >Load More Stories</button>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}
