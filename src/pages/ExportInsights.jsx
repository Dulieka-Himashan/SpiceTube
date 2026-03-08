import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

gsap.registerPlugin(ScrollTrigger)

export default function ExportInsights() {

  const heroTextRef = useRef(null)
  const stepsRef = useRef(null)
  const articlesRef = useRef(null)
  const imgRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(heroTextRef.current.children,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.9, stagger: 0.15, ease: "power3.out", delay: 0.3 }
    )

    const handleScroll = () => {
      if (imgRef.current) {
        imgRef.current.style.transform = `translateY(${window.scrollY * 0.15}px)`
      }
    }
    window.addEventListener("scroll", handleScroll)

    gsap.fromTo(stepsRef.current.children,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: stepsRef.current, start: "top 90%", once: true } }
    )
    gsap.fromTo(articlesRef.current.children,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: articlesRef.current, start: "top 90%", once: true } }
    )

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const steps = [
    { number: "01", title: "Register Your Business", desc: "Register with the Sri Lanka Export Development Board (EDB) and obtain your exporter registration certificate.", tag: "FIRST STEP" },
    { number: "02", title: "Obtain Certifications", desc: "Get ISO, HACCP, Organic, or Fairtrade certifications depending on your target market requirements.", tag: "COMPLIANCE" },
    { number: "03", title: "Quality Testing", desc: "Send samples to certified labs for pesticide residue, heavy metals, and microbiology testing.", tag: "QUALITY" },
    { number: "04", title: "Prepare Documentation", desc: "Certificate of Origin, Phytosanitary Certificate, Commercial Invoice, Packing List, and Bill of Lading.", tag: "DOCUMENTS" },
    { number: "05", title: "Find Buyers", desc: "List on EDB buyer database, attend trade fairs, and connect through SpiceTubeLK partner network.", tag: "MARKET ACCESS" },
    { number: "06", title: "Ship & Track", desc: "Work with a licensed freight forwarder. Ensure proper packaging, labeling, and cold chain if required.", tag: "LOGISTICS" },
  ]

  const articles = [
    { tag: "MARKET TRENDS", title: "Global Demand for Ceylon Cinnamon Surges in 2025", desc: "European and North American markets show 18% growth in Ceylon cinnamon imports.", date: "March 1, 2025", read: "5 min read", image: "/images/cinnamon.jpeg" },
    { tag: "CERTIFICATION", title: "Complete Guide to EU Organic Certification for Spice Exporters", desc: "Step-by-step breakdown of what Sri Lankan exporters need to qualify.", date: "Feb 24, 2025", read: "8 min read", image: "/images/shop.jpeg" },
    { tag: "BUYER GUIDE", title: "How to Verify International Spice Buyers: A Safety Guide", desc: "Protect your business from fraud with these verification steps.", date: "Feb 18, 2025", read: "6 min read", image: "/images/spices-in-cups.jpeg" },
    { tag: "PRICING", title: "Ceylon Pepper Export Pricing Trends: Q1 2025 Report", desc: "Comprehensive analysis of black and white pepper pricing across key export markets.", date: "Feb 10, 2025", read: "7 min read", image: "/images/farmer.jpeg" },
    { tag: "TRADE POLICY", title: "New India-Sri Lanka Trade Agreement: Impact on Spice Exports", desc: "What the new bilateral agreement means for Ceylon spice exporters.", date: "Feb 5, 2025", read: "5 min read", image: "/images/second-farmer.jpeg" },
  ]

  const tagColors = { "MARKET TRENDS": "#C8960C", "CERTIFICATION": "#2196F3", "BUYER GUIDE": "#4CAF50", "PRICING": "#FF9800", "TRADE POLICY": "#9C27B0" }
  const featured = articles[0]
  const rest = articles.slice(1)

  return (
    <div style={{ backgroundColor: "#0A0F0D", minHeight: "100vh" }}>
      <Navbar />

      {/* HERO - Split Layout */}
      <section style={{ display: "flex", minHeight: "100vh", paddingTop: "80px" }}>

        {/* LEFT - Dark text panel */}
        <div style={{ width: "50%", backgroundColor: "#050F08", display: "flex", alignItems: "center", padding: "0 64px", borderRight: "1px solid #1E3022" }}>
          <div ref={heroTextRef}>

            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
              <div style={{ width: "48px", height: "2px", backgroundColor: "#C8960C" }} />
              <span style={{ color: "#C8960C", fontSize: "11px", fontWeight: 700, letterSpacing: "5px", textTransform: "uppercase" }}>Export Insights</span>
            </div>

            <h1 style={{ fontSize: "clamp(36px, 4.5vw, 68px)", fontWeight: 900, color: "#FFFFFF", lineHeight: 1.1, marginBottom: "24px", fontFamily: "'Playfair Display', Georgia, serif" }}>
              A Complete Guide to
              <br />
              <span style={{ color: "#C8960C", fontStyle: "italic" }}>Exporting Ceylon</span>
              <br />
              Spices Globally
            </h1>

            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "16px", lineHeight: 1.8, marginBottom: "40px", maxWidth: "440px" }}>
              From certification to shipping — everything Sri Lankan spice exporters need to reach global markets successfully.
            </p>

            <div style={{ display: "flex", gap: "14px", marginBottom: "48px" }}>
              <button style={{ backgroundColor: "#C8960C", color: "#050F08", padding: "14px 28px", borderRadius: "8px", fontWeight: 800, fontSize: "14px", border: "none", cursor: "pointer", transition: "all 0.3s" }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
               onClick={() => { const a = document.createElement("a"); a.href = "/SpiceTubeLK_Export_Guide.pdf"; a.download = "SpiceTubeLK_Export_Guide.pdf"; a.click(); }}>Download Export Guide</button>
              <button style={{ backgroundColor: "transparent", border: "1px solid rgba(255,255,255,0.3)", color: "#FFFFFF", padding: "14px 28px", borderRadius: "8px", fontWeight: 600, fontSize: "14px", cursor: "pointer", onClick: undefined }} onClick={() => window.location.href="/watch"}>Watch Videos</button>
            </div>

            <div style={{ display: "flex", gap: "32px", paddingTop: "32px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
              {[{ n: "6", l: "Step Process" }, { n: "25+", l: "Export Guides" }, { n: "40+", l: "Countries" }, { n: "Free", l: "Resources" }].map((s, i) => (
                <div key={i}>
                  <div style={{ color: "#C8960C", fontSize: "24px", fontWeight: 800 }}>{s.n}</div>
                  <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px", marginTop: "4px" }}>{s.l}</div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* RIGHT - Cinnamon image with parallax */}
        <div style={{ width: "50%", position: "relative", overflow: "hidden" }}>
          <img
            ref={imgRef}
            src="/images/pepper.jpeg"
            alt="Ceylon Cinnamon"
            style={{ width: "100%", height: "115%", objectFit: "cover", objectPosition: "center", marginTop: "-7.5%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #050F08 0%, rgba(5,15,8,0.2) 30%, rgba(5,15,8,0) 100%)" }} />
          <div style={{ position: "absolute", bottom: "40px", right: "40px", backgroundColor: "rgba(0,0,0,0.8)", backdropFilter: "blur(12px)", border: "1px solid rgba(200,150,12,0.4)", borderRadius: "12px", padding: "20px 24px" }}>
            <div style={{ color: "#C8960C", fontSize: "10px", fontWeight: 700, letterSpacing: "3px", marginBottom: "6px" }}>LIVE MARKET PRICE</div>
            <div style={{ color: "#FFFFFF", fontSize: "18px", fontWeight: 800, fontFamily: "'Playfair Display', serif", marginBottom: "4px" }}>Ceylon Cinnamon</div>
            <div style={{ color: "#4CAF50", fontSize: "16px", fontWeight: 700 }}>USD 12.50 / kg <span style={{ fontSize: "12px" }}>+12% Q1 2025</span></div>
          </div>
        </div>

      </section>

      {/* STEPS */}
      <section style={{ backgroundColor: "#080D0A", padding: "100px 0", borderTop: "1px solid #1E3022" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 64px" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
              <div style={{ width: "32px", height: "1px", backgroundColor: "#C8960C" }} />
              <span style={{ color: "#C8960C", fontSize: "11px", fontWeight: 700, letterSpacing: "5px", textTransform: "uppercase" }}>Step By Step</span>
              <div style={{ width: "32px", height: "1px", backgroundColor: "#C8960C" }} />
            </div>
            <h2 style={{ color: "#FFFFFF", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 900, fontFamily: "'Playfair Display', Georgia, serif" }}>
              The Export <span style={{ color: "#C8960C", fontStyle: "italic" }}>Process</span>
            </h2>
          </div>
          <div ref={stepsRef} style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {steps.map((step, i) => (
              <div key={i}
                style={{ backgroundColor: "#111916", border: "1px solid #1E3022", borderRadius: "16px", padding: "32px", transition: "all 0.3s", position: "relative", overflow: "hidden", cursor: "pointer" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#C8960C"; e.currentTarget.style.transform = "translateY(-6px)" }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#1E3022"; e.currentTarget.style.transform = "translateY(0)" }}
              >
                <div style={{ fontSize: "56px", fontWeight: 900, color: "rgba(200,150,12,0.07)", position: "absolute", top: "12px", right: "20px", fontFamily: "'Playfair Display', serif", lineHeight: 1 }}>{step.number}</div>
                <span style={{ color: "#C8960C", fontSize: "9px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "12px", display: "block" }}>{step.tag}</span>
                <h3 style={{ color: "#FFFFFF", fontSize: "18px", fontWeight: 800, marginBottom: "12px", fontFamily: "'Playfair Display', serif", lineHeight: 1.3 }}>{step.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", lineHeight: 1.7 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section style={{ backgroundColor: "#0A0F0D", padding: "100px 0", borderTop: "1px solid #1E3022" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 64px" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "48px" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
                <div style={{ width: "48px", height: "2px", backgroundColor: "#C8960C" }} />
                <span style={{ color: "#C8960C", fontSize: "11px", fontWeight: 700, letterSpacing: "5px", textTransform: "uppercase" }}>Resources</span>
              </div>
              <h2 style={{ color: "#FFFFFF", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 900, fontFamily: "'Playfair Display', Georgia, serif" }}>
                Latest <span style={{ color: "#C8960C", fontStyle: "italic" }}>Export Guides</span>
              </h2>
            </div>
            <a href="#" style={{ color: "#C8960C", fontSize: "14px", fontWeight: 600, textDecoration: "none", borderBottom: "1px solid #C8960C", paddingBottom: "2px" }}>View All</a>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
            <div style={{ borderRadius: "16px", overflow: "hidden", backgroundColor: "#111916", border: "1px solid #1E3022", cursor: "pointer", transition: "all 0.3s", gridRow: "span 2" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#C8960C"; e.currentTarget.style.transform = "translateY(-6px)" }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#1E3022"; e.currentTarget.style.transform = "translateY(0)" }}
            >
              <div style={{ position: "relative", height: "300px" }}>
                <img src={featured.image} alt={featured.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)" }} />
                <div style={{ position: "absolute", top: "16px", left: "16px" }}>
                  <span style={{ backgroundColor: "#C8960C", color: "#050F08", fontSize: "9px", fontWeight: 800, padding: "4px 12px", borderRadius: "4px", letterSpacing: "2px" }}>{featured.tag}</span>
                </div>
              </div>
              <div style={{ padding: "28px" }}>
                <h3 style={{ color: "#FFFFFF", fontSize: "22px", fontWeight: 800, lineHeight: 1.35, marginBottom: "12px", fontFamily: "'Playfair Display', Georgia, serif" }}>{featured.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", lineHeight: 1.7, marginBottom: "16px" }}>{featured.desc}</p>
                <div style={{ display: "flex", gap: "16px" }}>
                  <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "12px" }}>{featured.date}</span>
                  <span style={{ color: "#C8960C", fontSize: "12px", fontWeight: 600 }}>{featured.read}</span>
                </div>
              </div>
            </div>

            <div ref={articlesRef} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {rest.map((article, i) => (
                <div key={i}
                  style={{ display: "grid", gridTemplateColumns: "110px 1fr", borderRadius: "12px", overflow: "hidden", backgroundColor: "#111916", border: "1px solid #1E3022", cursor: "pointer", transition: "all 0.3s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = tagColors[article.tag] || "#C8960C"; e.currentTarget.style.transform = "translateX(6px)" }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#1E3022"; e.currentTarget.style.transform = "translateX(0)" }}
                >
                  <img src={article.image} alt={article.title} style={{ width: "110px", height: "100%", objectFit: "cover", minHeight: "90px" }} />
                  <div style={{ padding: "14px" }}>
                    <span style={{ color: tagColors[article.tag] || "#C8960C", fontSize: "9px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>{article.tag}</span>
                    <p style={{ color: "#FFFFFF", fontSize: "13px", fontWeight: 600, lineHeight: 1.4, marginTop: "6px", marginBottom: "8px" }}>{article.title}</p>
                    <div style={{ display: "flex", gap: "12px" }}>
                      <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "11px" }}>{article.date}</span>
                      <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px", fontWeight: 600 }}>{article.read}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}
