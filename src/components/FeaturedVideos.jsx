import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function FeaturedVideos() {

  const headRef = useRef(null)
  const gridRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: headRef.current, start: "top 90%", once: true } }
      )
      gsap.fromTo(gridRef.current.children,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: "power3.out", scrollTrigger: { trigger: gridRef.current, start: "top 90%", once: true } }
      )
    })
    return () => ctx.revert()
  }, [])

  const videos = [
    {
      tag: "FEATURED DOCUMENTARY",
      title: "From Soil to Global Markets: The Ceylon Cinnamon Story",
      desc: "How Sri Lankan farmers are transforming ancient spice traditions into a global export powerhouse.",
      duration: "8 min",
      region: "Matale, Sri Lanka",
      image: "/images/second-farmer.jpeg",
      featured: true,
    },
    {
      tag: "FARMER STORY",
      title: "Women Leading the Organic Cinnamon Revolution in Kandy",
      duration: "4 min",
      region: "Kandy",
      image: "/images/pepper.jpeg",
    },
    {
      tag: "EXPORT INSIGHTS",
      title: "New EU Regulations: What Spice Exporters Need to Know",
      duration: "6 min",
      region: "Industry",
      image: "/images/hands-spices.jpeg",
    },
    {
      tag: "INNOVATION",
      title: "How Freeze-Drying is Revolutionizing Ceylon Pepper Export",
      duration: "5 min",
      region: "Colombo",
      image: "/images/spicy.jpeg",
    },
    {
      tag: "SUSTAINABILITY",
      title: "Regenerative Agriculture: Healing Sri Lanka's Spice Farms",
      duration: "7 min",
      region: "Southern Province",
      image: "/images/spices-pack.jpeg",
    },
    {
      tag: "INDUSTRY DIALOGUE",
      title: "Roundtable: The Future of Ceylon Spice Exports",
      duration: "12 min",
      region: "Colombo",
      image: "/images/spices.jpeg",
    },
  ]

  const featured = videos[0]
  const rest = videos.slice(1)

  const tagColors = {
    "FEATURED DOCUMENTARY": "#C8960C",
    "FARMER STORY": "#4CAF50",
    "EXPORT INSIGHTS": "#2196F3",
    "INNOVATION": "#9C27B0",
    "SUSTAINABILITY": "#8BC34A",
    "INDUSTRY DIALOGUE": "#FF9800",
  }

  return (
    <section style={{ backgroundColor: "#080D0A", padding: "100px 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 64px" }}>

        <div ref={headRef} style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "48px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
              <div style={{ width: "48px", height: "2px", backgroundColor: "#C8960C" }} />
              <span style={{ color: "#C8960C", fontSize: "11px", fontWeight: 700, letterSpacing: "5px", textTransform: "uppercase" }}>
                Watch
              </span>
            </div>
            <h2 style={{ color: "#FFFFFF", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 900, fontFamily: "'Playfair Display', Georgia, serif" }}>
              Featured <span style={{ color: "#C8960C", fontStyle: "italic" }}>Episodes</span>
            </h2>
          </div>
          <a href="#" style={{ color: "#C8960C", fontSize: "14px", fontWeight: 600, textDecoration: "none", borderBottom: "1px solid #C8960C", paddingBottom: "2px" }}>
            View All Episodes
          </a>
        </div>

        <div ref={gridRef}>

          <div style={{
            position: "relative", borderRadius: "16px", overflow: "hidden",
            cursor: "pointer", marginBottom: "24px", height: "480px",
          }}
          onMouseEnter={e => e.currentTarget.querySelector("img").style.transform = "scale(1.03)"}
          onMouseLeave={e => e.currentTarget.querySelector("img").style.transform = "scale(1)"}
          >
            <img src={featured.image} alt={featured.title}
              style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s ease" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)" }} />

            <div style={{ position: "absolute", top: "24px", left: "24px" }}>
              <span style={{ backgroundColor: "#C8960C", color: "#050F08", fontSize: "10px", fontWeight: 800, padding: "4px 12px", borderRadius: "4px", letterSpacing: "2px" }}>
                {featured.tag}
              </span>
            </div>

            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "64px", height: "64px", backgroundColor: "rgba(200,150,12,0.9)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#050F08", fontSize: "22px", marginLeft: "4px" }}>▶</span>
            </div>

            <div style={{ position: "absolute", bottom: "28px", left: "28px", right: "28px" }}>
              <h3 style={{ color: "#FFFFFF", fontSize: "26px", fontWeight: 800, lineHeight: 1.3, marginBottom: "12px", fontFamily: "'Playfair Display', Georgia, serif" }}>
                {featured.title}
              </h3>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", marginBottom: "16px" }}>{featured.desc}</p>
              <div style={{ display: "flex", gap: "20px" }}>
                <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px" }}>Duration: {featured.duration}</span>
                <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px" }}>Region: {featured.region}</span>
              </div>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "16px" }}>
            {rest.map((video, i) => (
              <div key={i}
                style={{ borderRadius: "12px", overflow: "hidden", backgroundColor: "#111916", border: "1px solid #1E3022", cursor: "pointer", transition: "all 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = tagColors[video.tag] || "#C8960C"; e.currentTarget.style.transform = "translateY(-6px)" }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#1E3022"; e.currentTarget.style.transform = "translateY(0)" }}
              >
                <div style={{ position: "relative", height: "140px" }}>
                  <img src={video.image} alt={video.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ width: "36px", height: "36px", backgroundColor: "rgba(200,150,12,0.9)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ color: "#050F08", fontSize: "12px", marginLeft: "2px" }}>▶</span>
                    </div>
                  </div>
                </div>
                <div style={{ padding: "16px" }}>
                  <span style={{ color: tagColors[video.tag] || "#C8960C", fontSize: "9px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>
                    {video.tag}
                  </span>
                  <p style={{ color: "#FFFFFF", fontSize: "13px", fontWeight: 600, lineHeight: 1.4, marginTop: "8px", marginBottom: "10px" }}>
                    {video.title}
                  </p>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px" }}>{video.duration}</span>
                    <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px" }}>{video.region}</span>
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
