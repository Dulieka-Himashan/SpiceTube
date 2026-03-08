import { useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

gsap.registerPlugin(ScrollTrigger)

export default function Innovation() {
  const navigate = useNavigate();

  const heroRef = useRef(null)
  const statsRef = useRef(null)
  const featuresRef = useRef(null)
  const articlesRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(heroRef.current.children,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 0.9, stagger: 0.15, ease: "power3.out", delay: 0.3 }
    )
    gsap.fromTo(statsRef.current.children,
      { opacity: 0, y: 40, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.1, ease: "back.out(1.4)", scrollTrigger: { trigger: statsRef.current, start: "top 90%", once: true } }
    )
    gsap.fromTo(featuresRef.current.children,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: "power3.out", scrollTrigger: { trigger: featuresRef.current, start: "top 90%", once: true } }
    )
    gsap.fromTo(articlesRef.current.children,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: articlesRef.current, start: "top 90%", once: true } }
    )
  }, [])

  const stats = [
    { number: "15+", label: "Processing Technologies" },
    { number: "30+", label: "Innovation Partners" },
    { number: "200+", label: "Farmers Trained" },
    { number: "8", label: "New Products Launched" },
  ]

  const features = [
    { tag: "PROCESSING", title: "Freeze Drying Technology", desc: "Preserving the full aroma, flavor, and nutritional value of Ceylon spices through advanced freeze-drying techniques for premium global markets.", color: "#2196F3", image: "/images/farmer.jpeg" },
    { tag: "EXTRACTION", title: "Essential Oil Distillation", desc: "Steam distillation and CO2 extraction methods producing high-grade cinnamon, pepper and cardamom essential oils for pharmaceutical and cosmetic industries.", color: "#9C27B0", image: "/images/spices.jpeg" },
    { tag: "PACKAGING", title: "Smart Packaging Solutions", desc: "QR-coded, tamper-proof packaging with traceability from farm to shelf — building trust with international buyers and end consumers.", color: "#FF9800", image: "/images/second-farmer.jpeg" },
    { tag: "QUALITY", title: "Lab Testing & Certification", desc: "On-site and mobile laboratory testing for pesticide residue, heavy metals, and microbiology — ensuring compliance with EU, US and Japanese standards.", color: "#4CAF50", image: "/images/pepper.jpeg" },
    { tag: "DIGITAL", title: "Digital Farm Management", desc: "Mobile apps and IoT sensors helping farmers track soil health, weather patterns, and crop performance in real time.", color: "#00BCD4", image: "/images/spices-pack.jpeg" },
    { tag: "VALUE ADDITION", title: "Spice Blends & Ready Mixes", desc: "Developing premium Ceylon spice blends, pastes, and ready-to-use products targeting retail markets in Europe, USA and the Middle East.", color: "#C8960C", image: "/images/spices.jpeg" },
  ]

  const articles = [
    { tag: "TECHNOLOGY", title: "How Freeze-Drying is Revolutionizing Ceylon Pepper Export", desc: "A deep dive into how Sri Lankan exporters are using freeze-drying to command premium prices in global markets.", date: "March 1, 2025", read: "6 min read", image: "/images/hands-spices.jpeg" },
    { tag: "DIGITAL", title: "Mobile Apps Transforming Sri Lankan Spice Farming", desc: "How digital tools are helping farmers track yields, soil health and market prices from their smartphones.", date: "Feb 20, 2025", read: "5 min read", image: "/images/spices-pack.jpeg" },
    { tag: "PACKAGING", title: "QR Code Traceability: Building Trust with Global Buyers", desc: "SpiceTubeLK's packaging innovation initiative connects consumers directly to the farms that grew their spices.", date: "Feb 12, 2025", read: "4 min read", image: "/images/spicy.jpeg" },
    { tag: "EXTRACTION", title: "Ceylon Cinnamon Essential Oil: A Growing Global Market", desc: "The pharmaceutical and cosmetic industries are driving demand for high-grade Ceylon cinnamon oil.", date: "Feb 5, 2025", read: "7 min read", image: "/images/spices-pack.jpeg" },
  ]

  const tagColors = { "TECHNOLOGY": "#2196F3", "DIGITAL": "#00BCD4", "PACKAGING": "#FF9800", "EXTRACTION": "#9C27B0" }

  return (
    <div style={{ backgroundColor: "#0A0F0D", minHeight: "100vh" }}>
      <Navbar />

      {/* HERO */}
      <section style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
        <img
          src="/images/spices-in-cups.jpeg"
          alt="Innovation"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0.30) 70%, transparent 100%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,15,13,1) 0%, transparent 50%)" }} />

        <div ref={heroRef} style={{ position: "relative", zIndex: 10, height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", maxWidth: "1280px", margin: "0 auto", padding: "120px 64px 60px 64px" }}>

          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
            <div style={{ width: "48px", height: "2px", backgroundColor: "#2196F3" }} />
            <span style={{ color: "#2196F3", fontSize: "11px", fontWeight: 700, letterSpacing: "5px", textTransform: "uppercase" }}>Innovation</span>
          </div>

          <h1 style={{ fontSize: "clamp(44px, 6vw, 84px)", fontWeight: 900, color: "#FFFFFF", lineHeight: 1.05, marginBottom: "24px", fontFamily: "'Playfair Display', Georgia, serif", maxWidth: "750px" }}>
            The Future of
            <br />
            <span style={{ color: "#2196F3", fontStyle: "italic" }}>Ceylon Spice</span>
            <br />
            Technology
          </h1>

          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "18px", lineHeight: 1.8, maxWidth: "540px", marginBottom: "40px" }}>
            From freeze-drying to smart packaging — discover how Sri Lanka's spice industry is embracing innovation to compete in global premium markets.
          </p>

          <div style={{ display: "flex", gap: "14px" }}>
            <button style={{ backgroundColor: "#2196F3", color: "#FFFFFF", padding: "15px 34px", borderRadius: "8px", fontWeight: 800, fontSize: "14px", border: "none", cursor: "pointer", transition: "all 0.3s" }}
              onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px)"}
              onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
             onClick={() => navigate("/watch")}>Explore Technologies</button>
            <button style={{ backgroundColor: "transparent", border: "1px solid rgba(255,255,255,0.3)", color: "#FFFFFF", padding: "15px 34px", borderRadius: "8px", fontWeight: 600, fontSize: "14px", cursor: "pointer" }} onClick={() => navigate("/watch")}>Watch Innovation Videos
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
                style={{ backgroundColor: "#111916", border: "1px solid #1E3022", borderRadius: "16px", padding: "40px 28px", textAlign: "center", transition: "all 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#2196F3"; e.currentTarget.style.transform = "translateY(-4px)" }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#1E3022"; e.currentTarget.style.transform = "translateY(0)" }}
              >
                <div style={{ color: "#2196F3", fontSize: "44px", fontWeight: 900, lineHeight: 1, marginBottom: "10px", fontFamily: "'Playfair Display', serif" }}>{stat.number}</div>
                <div style={{ color: "rgba(255,255,255,0.55)", fontSize: "13px", fontWeight: 500, lineHeight: 1.4 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ backgroundColor: "#0A0F0D", padding: "100px 0", borderTop: "1px solid #1E3022" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 64px" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
              <div style={{ width: "32px", height: "1px", backgroundColor: "#2196F3" }} />
              <span style={{ color: "#2196F3", fontSize: "11px", fontWeight: 700, letterSpacing: "5px", textTransform: "uppercase" }}>Technologies</span>
              <div style={{ width: "32px", height: "1px", backgroundColor: "#2196F3" }} />
            </div>
            <h2 style={{ color: "#FFFFFF", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 900, fontFamily: "'Playfair Display', Georgia, serif" }}>
              Driving <span style={{ color: "#2196F3", fontStyle: "italic" }}>Industry Innovation</span>
            </h2>
          </div>

          <div ref={featuresRef} style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {features.map((item, i) => (
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

      {/* ARTICLES */}
      <section style={{ backgroundColor: "#080D0A", padding: "100px 0", borderTop: "1px solid #1E3022" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 64px" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "48px" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
                <div style={{ width: "48px", height: "2px", backgroundColor: "#2196F3" }} />
                <span style={{ color: "#2196F3", fontSize: "11px", fontWeight: 700, letterSpacing: "5px", textTransform: "uppercase" }}>Latest</span>
              </div>
              <h2 style={{ color: "#FFFFFF", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 900, fontFamily: "'Playfair Display', Georgia, serif" }}>
                Innovation <span style={{ color: "#2196F3", fontStyle: "italic" }}>Articles</span>
              </h2>
            </div>
            <a href="#" style={{ color: "#2196F3", fontSize: "14px", fontWeight: 600, textDecoration: "none", borderBottom: "1px solid #2196F3", paddingBottom: "2px" }}>View All</a>
          </div>

          <div ref={articlesRef} style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px" }}>
            {articles.map((article, i) => (
              <div key={i}
                style={{ display: "grid", gridTemplateColumns: "140px 1fr", borderRadius: "12px", overflow: "hidden", backgroundColor: "#111916", border: "1px solid #1E3022", cursor: "pointer", transition: "all 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = tagColors[article.tag] || "#2196F3"; e.currentTarget.style.transform = "translateY(-4px)" }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#1E3022"; e.currentTarget.style.transform = "translateY(0)" }}
              >
                <img src={article.image} alt={article.title} style={{ width: "140px", height: "100%", objectFit: "cover", minHeight: "120px" }} />
                <div style={{ padding: "20px" }}>
                  <span style={{ color: tagColors[article.tag] || "#2196F3", fontSize: "9px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>{article.tag}</span>
                  <h3 style={{ color: "#FFFFFF", fontSize: "15px", fontWeight: 700, lineHeight: 1.4, marginTop: "8px", marginBottom: "8px", fontFamily: "'Playfair Display', serif" }}>{article.title}</h3>
                  <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "12px", lineHeight: 1.6, marginBottom: "12px" }}>{article.desc}</p>
                  <div style={{ display: "flex", gap: "12px" }}>
                    <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "11px" }}>{article.date}</span>
                    <span style={{ color: "#2196F3", fontSize: "11px", fontWeight: 600 }}>{article.read}</span>
                  </div>
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
