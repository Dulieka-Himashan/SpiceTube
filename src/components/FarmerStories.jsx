import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function FarmerStories() {

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

  const farmers = [
    {
      name: "Sunil Bandara",
      region: "Matale, Central Province",
      crop: "Ceylon Cinnamon",
      method: "Organic & Regenerative",
      cert: "ISO Certified",
      story: "Third generation cinnamon farmer transforming traditional practices with sustainable methods, now exporting to 12 countries.",
      image: "/images/second-farmer.jpeg",
    },
    {
      name: "Kamala Perera",
      region: "Kandy, Central Province",
      crop: "Black Pepper & Cardamom",
      method: "Women-Led Cooperative",
      cert: "Fairtrade Certified",
      story: "Leading a cooperative of 45 women farmers, Kamala has tripled household incomes through direct export partnerships.",
      image: "/images/farmer.jpeg",
    },
    {
      name: "Ranjith Silva",
      region: "Galle, Southern Province",
      crop: "Cloves & Nutmeg",
      method: "Agroforestry",
      cert: "Organic Certified",
      story: "Pioneer of agroforestry techniques in Southern Sri Lanka, Ranjith's farm produces premium quality cloves for European markets.",
      image: "/images/second-farmer.jpeg",
    },
    {
      name: "Priya Wijesinghe",
      region: "Kurunegala, North Western",
      crop: "Turmeric & Ginger",
      method: "Youth Agriculture Leader",
      cert: "HACCP Certified",
      story: "At 28, Priya is revolutionizing turmeric processing with modern extraction technology, creating value-added products.",
      image: "/images/second-farmer.jpeg",
    },
    {
      name: "Dharmasiri Jayawardena",
      region: "Hambantota, Southern Province",
      crop: "Ceylon Pepper",
      method: "Climate-Resilient Farming",
      cert: "GlobalG.A.P Certified",
      story: "Using climate-smart agriculture techniques, Dharmasiri has maintained consistent yields despite changing weather patterns.",
      image: "/images/second-farmer.jpeg",
    },
    {
      name: "Anoma Fernando",
      region: "Ratnapura, Sabaragamuwa",
      crop: "Cinnamon & Vanilla",
      method: "Community Transformation",
      cert: "Rainforest Alliance",
      story: "Anoma's community project has brought 200 small farmers together under one export brand, changing lives across her village.",
      image: "/images/second-farmer.jpeg",
    },
  ]

  return (
    <section style={{ backgroundColor: "#0A0F0D", padding: "100px 0 100px 0", borderTop: "1px solid #1E3022" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 64px" }}>

        <div ref={headRef} style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "56px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
              <div style={{ width: "48px", height: "2px", backgroundColor: "#C8960C" }} />
              <span style={{ color: "#C8960C", fontSize: "11px", fontWeight: 700, letterSpacing: "5px", textTransform: "uppercase" }}>
                Farmer Stories
              </span>
            </div>
            <h2 style={{ color: "#FFFFFF", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 900, fontFamily: "'Playfair Display', Georgia, serif" }}>
              Meet the Farmers Behind
              <span style={{ color: "#C8960C", fontStyle: "italic" }}> Ceylon Spices</span>
            </h2>
          </div>
          <a href="#" style={{ color: "#C8960C", fontSize: "14px", fontWeight: 600, textDecoration: "none", borderBottom: "1px solid #C8960C", paddingBottom: "2px" }}>
            View All Stories
          </a>
        </div>

        <div ref={gridRef} style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
          {farmers.map((farmer, i) => (
            <div key={i}
              style={{ backgroundColor: "#111916", border: "1px solid #1E3022", borderRadius: "16px", overflow: "hidden", cursor: "pointer", transition: "all 0.3s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#C8960C"; e.currentTarget.style.transform = "translateY(-8px)" }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#1E3022"; e.currentTarget.style.transform = "translateY(0)" }}
            >
              <div style={{ position: "relative", height: "220px" }}>
                <img src={farmer.image} alt={farmer.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)" }} />
                <div style={{ position: "absolute", bottom: "16px", left: "16px" }}>
                  <span style={{ backgroundColor: "#C8960C", color: "#050F08", fontSize: "9px", fontWeight: 800, padding: "3px 10px", borderRadius: "4px", letterSpacing: "2px" }}>
                    {farmer.cert}
                  </span>
                </div>
              </div>
              <div style={{ padding: "24px" }}>
                <h3 style={{ color: "#FFFFFF", fontSize: "18px", fontWeight: 800, marginBottom: "4px", fontFamily: "'Playfair Display', serif" }}>
                  {farmer.name}
                </h3>
                <p style={{ color: "#C8960C", fontSize: "12px", fontWeight: 600, marginBottom: "12px" }}>
                  {farmer.region}
                </p>
                <div style={{ display: "flex", gap: "8px", marginBottom: "16px", flexWrap: "wrap" }}>
                  <span style={{ backgroundColor: "rgba(200,150,12,0.1)", border: "1px solid rgba(200,150,12,0.2)", color: "rgba(255,255,255,0.7)", fontSize: "11px", padding: "3px 10px", borderRadius: "20px" }}>
                    {farmer.crop}
                  </span>
                  <span style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)", fontSize: "11px", padding: "3px 10px", borderRadius: "20px" }}>
                    {farmer.method}
                  </span>
                </div>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "13px", lineHeight: 1.7, marginBottom: "20px" }}>
                  {farmer.story}
                </p>
                <a href="#" style={{ color: "#C8960C", fontSize: "13px", fontWeight: 600, textDecoration: "none" }}>
                  Read Full Story →
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
