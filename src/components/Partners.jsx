import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Partners() {

  const headRef = useRef(null)
  const gridRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: headRef.current, start: "top 90%", once: true } }
      )
      gsap.fromTo(gridRef.current.children,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: "power3.out", scrollTrigger: { trigger: gridRef.current, start: "top 90%", once: true } }
      )
    })
    return () => ctx.revert()
  }, [])

  const partners = [
    { name: "Ceylon Spice Exporters Association", type: "Export Body" },
    { name: "Sri Lanka Export Development Board", type: "Government" },
    { name: "Fairtrade International", type: "Certification" },
    { name: "Chamber of Spices Sri Lanka", type: "Industry Body" },
    { name: "Ministry of Agriculture", type: "Government" },
    { name: "Rainforest Alliance", type: "Sustainability" },
    { name: "ISO Certification Board", type: "Certification" },
    { name: "Global Spice Trade Council", type: "Trade Body" },
  ]

  return (
    <section style={{ backgroundColor: "#0A0F0D", padding: "100px 0", borderTop: "1px solid #1E3022" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 64px" }}>

        <div ref={headRef} style={{ textAlign: "center", marginBottom: "56px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
            <div style={{ width: "32px", height: "1px", backgroundColor: "#C8960C" }} />
            <span style={{ color: "#C8960C", fontSize: "11px", fontWeight: 700, letterSpacing: "5px", textTransform: "uppercase" }}>Our Partners</span>
            <div style={{ width: "32px", height: "1px", backgroundColor: "#C8960C" }} />
          </div>
          <h2 style={{ color: "#FFFFFF", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 900, fontFamily: "'Playfair Display', Georgia, serif" }}>
            Strategic <span style={{ color: "#C8960C", fontStyle: "italic" }}>Partners</span>
          </h2>
        </div>

        <div ref={gridRef} style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", marginBottom: "64px" }}>
          {partners.map((partner, i) => (
            <div key={i}
              style={{ backgroundColor: "#111916", border: "1px solid #1E3022", borderRadius: "12px", padding: "28px 20px", textAlign: "center", cursor: "pointer", transition: "all 0.3s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#C8960C"; e.currentTarget.style.transform = "translateY(-4px)" }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#1E3022"; e.currentTarget.style.transform = "translateY(0)" }}
            >
              <div style={{ width: "48px", height: "48px", backgroundColor: "rgba(200,150,12,0.1)", borderRadius: "12px", margin: "0 auto 16px auto", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: "24px", height: "2px", backgroundColor: "#C8960C" }} />
              </div>
              <div style={{ color: "#FFFFFF", fontSize: "13px", fontWeight: 700, marginBottom: "6px", lineHeight: 1.4 }}>{partner.name}</div>
              <div style={{ color: "#C8960C", fontSize: "10px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase" }}>{partner.type}</div>
            </div>
          ))}
        </div>

        <div style={{ backgroundColor: "#111916", border: "1px solid #C8960C", borderRadius: "16px", padding: "60px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
              <div style={{ width: "48px", height: "2px", backgroundColor: "#C8960C" }} />
              <span style={{ color: "#C8960C", fontSize: "11px", fontWeight: 700, letterSpacing: "5px", textTransform: "uppercase" }}>Newsletter</span>
            </div>
            <h3 style={{ color: "#FFFFFF", fontSize: "32px", fontWeight: 900, lineHeight: 1.2, marginBottom: "16px", fontFamily: "'Playfair Display', Georgia, serif" }}>
              Monthly <span style={{ color: "#C8960C", fontStyle: "italic" }}>Spice Industry</span> Digest
            </h3>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "15px", lineHeight: 1.8 }}>
              Get monthly insights on Ceylon spices, export trends, farmer stories, and industry news delivered to your inbox.
            </p>
          </div>
          <div>
            <input placeholder="Your full name" style={{ width: "100%", backgroundColor: "#0A0F0D", border: "1px solid #1E3022", borderRadius: "8px", padding: "14px 18px", color: "#FFFFFF", fontSize: "14px", marginBottom: "12px", boxSizing: "border-box", outline: "none" }}
              onFocus={e => e.currentTarget.style.borderColor = "#C8960C"}
              onBlur={e => e.currentTarget.style.borderColor = "#1E3022"}
            />
            <input placeholder="Your email address" style={{ width: "100%", backgroundColor: "#0A0F0D", border: "1px solid #1E3022", borderRadius: "8px", padding: "14px 18px", color: "#FFFFFF", fontSize: "14px", marginBottom: "12px", boxSizing: "border-box", outline: "none" }}
              onFocus={e => e.currentTarget.style.borderColor = "#C8960C"}
              onBlur={e => e.currentTarget.style.borderColor = "#1E3022"}
            />
            <button style={{ width: "100%", backgroundColor: "#C8960C", color: "#050F08", border: "none", padding: "14px", borderRadius: "8px", fontWeight: 700, fontSize: "14px", cursor: "pointer", transition: "all 0.3s" }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = "#E5AC14"}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = "#C8960C"}
            >
              Subscribe to Digest
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
