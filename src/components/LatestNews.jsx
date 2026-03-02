import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function LatestNews() {

  const headRef = useRef(null)
  const gridRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: headRef.current, start: "top 90%", once: true } }
      )
      gsap.fromTo(gridRef.current.children,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: gridRef.current, start: "top 90%", once: true } }
      )
    })
    return () => ctx.revert()
  }, [])

  const news = [
    { tag: "INDUSTRY NEWS", title: "Ceylon Cinnamon Prices Rise 12% in Q1 2025 Amid Global Demand Surge", date: "March 1, 2025", read: "3 min read", image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=600&q=80", featured: true },
    { tag: "REGULATION", title: "New EU Organic Certification Requirements Effective March 2025", date: "Feb 28, 2025", read: "4 min read", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80" },
    { tag: "TRADE", title: "Sri Lanka Signs New Spice Export Agreement with UAE", date: "Feb 25, 2025", read: "3 min read", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&q=80" },
    { tag: "SUSTAINABILITY", title: "Regenerative Agriculture Program Reaches 500 Farmers Across Sri Lanka", date: "Feb 20, 2025", read: "5 min read", image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80" },
    { tag: "INNOVATION", title: "New Spice Processing Facility Opens in Matale Creating 200 Jobs", date: "Feb 18, 2025", read: "3 min read", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80" },
  ]

  const tagColors = { "INDUSTRY NEWS": "#C8960C", "REGULATION": "#2196F3", "TRADE": "#4CAF50", "SUSTAINABILITY": "#8BC34A", "INNOVATION": "#9C27B0" }
  const featured = news[0]
  const rest = news.slice(1)

  return (
    <section style={{ backgroundColor: "#080D0A", padding: "100px 0", borderTop: "1px solid #1E3022" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 64px" }}>

        <div ref={headRef} style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "48px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
              <div style={{ width: "48px", height: "2px", backgroundColor: "#C8960C" }} />
              <span style={{ color: "#C8960C", fontSize: "11px", fontWeight: 700, letterSpacing: "5px", textTransform: "uppercase" }}>Latest News</span>
            </div>
            <h2 style={{ color: "#FFFFFF", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 900, fontFamily: "'Playfair Display', Georgia, serif" }}>
              Industry <span style={{ color: "#C8960C", fontStyle: "italic" }}>Updates</span>
            </h2>
          </div>
          <a href="#" style={{ color: "#C8960C", fontSize: "14px", fontWeight: 600, textDecoration: "none", borderBottom: "1px solid #C8960C", paddingBottom: "2px" }}>View All News</a>
        </div>

        <div ref={gridRef} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>

          <div style={{ borderRadius: "16px", overflow: "hidden", backgroundColor: "#111916", border: "1px solid #1E3022", cursor: "pointer", transition: "all 0.3s", gridRow: "span 2" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#C8960C"; e.currentTarget.style.transform = "translateY(-6px)" }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "#1E3022"; e.currentTarget.style.transform = "translateY(0)" }}
          >
            <div style={{ position: "relative", height: "280px" }}>
              <img src={featured.image} alt={featured.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)" }} />
              <div style={{ position: "absolute", top: "16px", left: "16px" }}>
                <span style={{ backgroundColor: "#C8960C", color: "#050F08", fontSize: "9px", fontWeight: 800, padding: "4px 12px", borderRadius: "4px", letterSpacing: "2px" }}>{featured.tag}</span>
              </div>
            </div>
            <div style={{ padding: "28px" }}>
              <h3 style={{ color: "#FFFFFF", fontSize: "22px", fontWeight: 800, lineHeight: 1.35, marginBottom: "16px", fontFamily: "'Playfair Display', Georgia, serif" }}>{featured.title}</h3>
              <div style={{ display: "flex", gap: "16px" }}>
                <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px" }}>{featured.date}</span>
                <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px" }}>{featured.read}</span>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {rest.map((item, i) => (
              <div key={i}
                style={{ display: "grid", gridTemplateColumns: "120px 1fr", borderRadius: "12px", overflow: "hidden", backgroundColor: "#111916", border: "1px solid #1E3022", cursor: "pointer", transition: "all 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = tagColors[item.tag] || "#C8960C"; e.currentTarget.style.transform = "translateX(6px)" }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#1E3022"; e.currentTarget.style.transform = "translateX(0)" }}
              >
                <img src={item.image} alt={item.title} style={{ width: "120px", height: "100%", objectFit: "cover", minHeight: "100px" }} />
                <div style={{ padding: "16px" }}>
                  <span style={{ color: tagColors[item.tag] || "#C8960C", fontSize: "9px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>{item.tag}</span>
                  <p style={{ color: "#FFFFFF", fontSize: "13px", fontWeight: 600, lineHeight: 1.4, marginTop: "6px", marginBottom: "8px" }}>{item.title}</p>
                  <div style={{ display: "flex", gap: "12px" }}>
                    <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px" }}>{item.date}</span>
                    <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px" }}>{item.read}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
