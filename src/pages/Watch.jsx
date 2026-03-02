import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

gsap.registerPlugin(ScrollTrigger)

export default function Watch() {

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

  const filters = ["All", "Farmer Stories", "Export Insights", "Innovation", "Sustainability", "Industry Dialogues"]

  const videos = [
    { tag: "FARMER STORIES", title: "From Soil to Global Markets: The Ceylon Cinnamon Story", duration: "8 min", region: "Matale", views: "12.4K", featured: true, image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=800&q=80", category: "Farmer Stories" },
    { tag: "EXPORT INSIGHTS", title: "New EU Regulations: What Spice Exporters Need to Know in 2025", duration: "6 min", region: "Industry", views: "8.2K", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80", category: "Export Insights" },
    { tag: "INNOVATION", title: "How Freeze-Drying is Revolutionizing Ceylon Pepper Export", duration: "5 min", region: "Colombo", views: "6.7K", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80", category: "Innovation" },
    { tag: "SUSTAINABILITY", title: "Regenerative Agriculture: Healing Sri Lanka's Spice Farms", duration: "7 min", region: "Southern Province", views: "5.1K", image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80", category: "Sustainability" },
    { tag: "FARMER STORIES", title: "Women Leading the Organic Cinnamon Revolution in Kandy", duration: "4 min", region: "Kandy", views: "9.3K", image: "https://images.unsplash.com/photo-1595508064774-5ff825520bb6?w=600&q=80", category: "Farmer Stories" },
    { tag: "INDUSTRY DIALOGUES", title: "Roundtable: The Future of Ceylon Spice Exports 2025", duration: "12 min", region: "Colombo", views: "4.8K", image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&q=80", category: "Industry Dialogues" },
    { tag: "EXPORT INSIGHTS", title: "Step-by-Step: Getting Your First Spice Export Certificate", duration: "9 min", region: "Industry", views: "11.2K", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80", category: "Export Insights" },
    { tag: "FARMER STORIES", title: "Youth Farmers Transforming Turmeric Production in Kurunegala", duration: "5 min", region: "Kurunegala", views: "3.9K", image: "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?w=600&q=80", category: "Farmer Stories" },
    { tag: "INNOVATION", title: "Smart Packaging: QR Codes Connecting Farmers to Global Buyers", duration: "4 min", region: "Colombo", views: "5.5K", image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80", category: "Innovation" },
    { tag: "SUSTAINABILITY", title: "Agroforestry: Growing Spices Under the Forest Canopy", duration: "6 min", region: "Galle", views: "4.2K", image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80", category: "Sustainability" },
  ]

  const tagColors = {
    "FARMER STORIES": "#C8960C",
    "EXPORT INSIGHTS": "#2196F3",
    "INNOVATION": "#9C27B0",
    "SUSTAINABILITY": "#8BC34A",
    "INDUSTRY DIALOGUES": "#FF9800",
  }

  const filtered = activeFilter === "All" ? videos : videos.filter(v => v.category === activeFilter)
  const featured = videos[0]
  const rest = filtered.filter(v => !v.featured)

  return (
    <div style={{ backgroundColor: "#0A0F0D", minHeight: "100vh" }}>
      <Navbar />

      {/* HERO */}
      <section style={{ position: "relative", height: "70vh", overflow: "hidden" }}>
        <img
          src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1920&q=90"
          alt="Watch"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.80) 50%, rgba(0,0,0,0.30) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,15,13,1) 0%, transparent 50%)" }} />

        <div ref={heroRef} style={{ position: "relative", zIndex: 10, height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", maxWidth: "1280px", margin: "0 auto", padding: "120px 64px 60px 64px" }}>

          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
            <div style={{ width: "48px", height: "2px", backgroundColor: "#C8960C" }} />
            <span style={{ color: "#C8960C", fontSize: "11px", fontWeight: 700, letterSpacing: "5px", textTransform: "uppercase" }}>Watch</span>
          </div>

          <h1 style={{ fontSize: "clamp(44px, 6vw, 84px)", fontWeight: 900, color: "#FFFFFF", lineHeight: 1.05, marginBottom: "24px", fontFamily: "'Playfair Display', Georgia, serif", maxWidth: "700px" }}>
            Stories from the
            <br />
            <span style={{ color: "#C8960C", fontStyle: "italic" }}>Spice Fields</span>
            <br />
            of Ceylon
          </h1>

          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "18px", lineHeight: 1.8, maxWidth: "520px" }}>
            Watch documentaries, farmer interviews, export guides, and industry dialogues — all about Ceylon spices.
          </p>

        </div>
      </section>

      {/* FEATURED VIDEO */}
      <section style={{ backgroundColor: "#080D0A", padding: "80px 0 0 0", borderTop: "1px solid #1E3022" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 64px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
            <div style={{ width: "48px", height: "2px", backgroundColor: "#C8960C" }} />
            <span style={{ color: "#C8960C", fontSize: "11px", fontWeight: 700, letterSpacing: "5px", textTransform: "uppercase" }}>Featured Episode</span>
          </div>

          <div style={{ position: "relative", borderRadius: "16px", overflow: "hidden", cursor: "pointer", height: "500px" }}
            onMouseEnter={e => e.currentTarget.querySelector("img").style.transform = "scale(1.03)"}
            onMouseLeave={e => e.currentTarget.querySelector("img").style.transform = "scale(1)"}
          >
            <img src={featured.image} alt={featured.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s ease" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)" }} />

            <div style={{ position: "absolute", top: "24px", left: "24px" }}>
              <span style={{ backgroundColor: "#C8960C", color: "#050F08", fontSize: "10px", fontWeight: 800, padding: "4px 12px", borderRadius: "4px", letterSpacing: "2px" }}>{featured.tag}</span>
            </div>

            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "72px", height: "72px", backgroundColor: "rgba(200,150,12,0.9)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#050F08", fontSize: "26px", marginLeft: "5px" }}>▶</span>
            </div>

            <div style={{ position: "absolute", bottom: "32px", left: "32px", right: "32px" }}>
              <h2 style={{ color: "#FFFFFF", fontSize: "32px", fontWeight: 900, lineHeight: 1.2, marginBottom: "16px", fontFamily: "'Playfair Display', Georgia, serif", maxWidth: "700px" }}>{featured.title}</h2>
              <div style={{ display: "flex", gap: "24px" }}>
                <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px" }}>Duration: {featured.duration}</span>
                <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px" }}>Region: {featured.region}</span>
                <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px" }}>Views: {featured.views}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER + GRID */}
      <section style={{ backgroundColor: "#080D0A", padding: "60px 0 100px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 64px" }}>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "32px", flexWrap: "wrap", gap: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div style={{ width: "48px", height: "2px", backgroundColor: "#C8960C" }} />
              <span style={{ color: "#FFFFFF", fontSize: "22px", fontWeight: 900, fontFamily: "'Playfair Display', serif" }}>All Episodes</span>
            </div>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {filters.map((filter) => (
                <button key={filter}
                  onClick={() => setActiveFilter(filter)}
                  style={{
                    backgroundColor: activeFilter === filter ? "#C8960C" : "#111916",
                    color: activeFilter === filter ? "#050F08" : "rgba(255,255,255,0.6)",
                    border: activeFilter === filter ? "1px solid #C8960C" : "1px solid #1E3022",
                    padding: "7px 18px", borderRadius: "30px",
                    fontWeight: 600, fontSize: "12px", cursor: "pointer", transition: "all 0.2s",
                  }}
                >{filter}</button>
              ))}
            </div>
          </div>

          <div ref={gridRef} style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
            {rest.map((video, i) => (
              <div key={i}
                style={{ borderRadius: "12px", overflow: "hidden", backgroundColor: "#111916", border: "1px solid #1E3022", cursor: "pointer", transition: "all 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = tagColors[video.tag] || "#C8960C"; e.currentTarget.style.transform = "translateY(-6px)" }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#1E3022"; e.currentTarget.style.transform = "translateY(0)" }}
              >
                <div style={{ position: "relative", height: "180px" }}>
                  <img src={video.image} alt={video.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ width: "44px", height: "44px", backgroundColor: "rgba(200,150,12,0.9)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ color: "#050F08", fontSize: "14px", marginLeft: "3px" }}>▶</span>
                    </div>
                  </div>
                  <div style={{ position: "absolute", bottom: "10px", right: "10px", backgroundColor: "rgba(0,0,0,0.75)", color: "#FFFFFF", fontSize: "11px", fontWeight: 600, padding: "3px 8px", borderRadius: "4px" }}>
                    {video.duration}
                  </div>
                </div>
                <div style={{ padding: "18px" }}>
                  <span style={{ color: tagColors[video.tag] || "#C8960C", fontSize: "9px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>{video.tag}</span>
                  <p style={{ color: "#FFFFFF", fontSize: "14px", fontWeight: 700, lineHeight: 1.4, marginTop: "8px", marginBottom: "10px", fontFamily: "'Playfair Display', serif" }}>{video.title}</p>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px" }}>{video.region}</span>
                    <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px" }}>{video.views} views</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "56px" }}>
            <button style={{ backgroundColor: "transparent", border: "2px solid #C8960C", color: "#C8960C", padding: "14px 40px", borderRadius: "8px", fontWeight: 700, fontSize: "14px", cursor: "pointer", transition: "all 0.3s" }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = "#C8960C"; e.currentTarget.style.color = "#050F08" }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "#C8960C" }}
            >Load More Episodes</button>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}
