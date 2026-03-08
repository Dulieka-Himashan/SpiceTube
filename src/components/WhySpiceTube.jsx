import { useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function WhySpiceTube() {
  const navigate = useNavigate();

  const sectionRef = useRef(null)
  const labelRef = useRef(null)
  const headingRef = useRef(null)
  const textRef = useRef(null)
  const btnRef = useRef(null)
  const statsRef = useRef(null)
  const pillarsRef = useRef(null)
  const pillarsHeadRef = useRef(null)

  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.fromTo(
        [labelRef.current, headingRef.current, textRef.current, btnRef.current],
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out",
          scrollTrigger: {
            trigger: labelRef.current,
            start: "top 90%",
            once: true,
          }
        }
      )

      gsap.fromTo(
        statsRef.current.children,
        { opacity: 0, y: 60, scale: 0.85 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.15, ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 90%",
            once: true,
          }
        }
      )

      gsap.fromTo(
        pillarsHeadRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: {
            trigger: pillarsHeadRef.current,
            start: "top 90%",
            once: true,
          }
        }
      )

      gsap.fromTo(
        pillarsRef.current.children,
        { opacity: 0, y: 80 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: "power3.out",
          scrollTrigger: {
            trigger: pillarsRef.current,
            start: "top 90%",
            once: true,
          }
        }
      )

      ScrollTrigger.refresh()

    }, sectionRef)

    return () => ctx.revert()

  }, [])

  const pillars = [
    { tag: "SERIES", title: "Farmer & Community Stories", desc: "Meet the farmers behind Ceylon spices. Women-led initiatives, youth leaders, regional features from Matale, Kandy and Southern Province.", color: "#C8960C" },
    { tag: "INSIGHTS", title: "Export & Market Insights", desc: "Step-by-step export guides, certification education, international buyer interviews and global market trends.", color: "#4CAF50" },
    { tag: "INNOVATION", title: "Innovation & Value Addition", desc: "Processing techniques, essential oils, packaging innovations, freeze drying and quality assurance labs.", color: "#2196F3" },
    { tag: "SUSTAINABILITY", title: "Sustainability & Regen Agriculture", desc: "Soil regeneration, composting, agroforestry, biodiversity protection and climate-resilient farming.", color: "#8BC34A" },
    { tag: "DIALOGUES", title: "Industry Dialogues", desc: "Interviews with policymakers, roundtable discussions, regulatory updates and industry outlook forecasts.", color: "#FF9800" },
  ]

  const stats = [
    { number: "500+", label: "Farmers Featured" },
    { number: "120+", label: "Video Episodes" },
    { number: "30+", label: "Countries Reached" },
    { number: "50+", label: "Export Partners" },
  ]

  return (
    <section ref={sectionRef} style={{ backgroundColor: "#0A0F0D", padding: "100px 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 64px" }}>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center", marginBottom: "100px" }}>

          <div>
            <div ref={labelRef} style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
              <div style={{ width: "48px", height: "2px", backgroundColor: "#C8960C" }} />
              <span style={{ color: "#C8960C", fontSize: "11px", fontWeight: 700, letterSpacing: "5px", textTransform: "uppercase" }}>
                Why SpiceTube
              </span>
            </div>

            <h2 ref={headingRef} style={{
              fontSize: "clamp(32px, 4vw, 54px)",
              fontWeight: 900, color: "#FFFFFF",
              lineHeight: 1.1, marginBottom: "28px",
              fontFamily: "'Playfair Display', Georgia, serif",
            }}>
              Building Transparency
              <br />
              <span style={{ color: "#C8960C", fontStyle: "italic" }}>in the Spice</span>
              <br />
              Value Chain
            </h2>

            <div ref={textRef}>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "16px", lineHeight: 1.9, marginBottom: "16px" }}>
                SpiceTubeLK.com bridges the gap between farmers, exporters, policymakers, innovators, and international buyers through compelling storytelling and educational content.
              </p>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "16px", lineHeight: 1.9, marginBottom: "40px" }}>
                We highlight the journey of spices from soil to global markets — ensuring trust, traceability, and quality recognition.
              </p>
            </div>

            <button ref={btnRef} style={{
              backgroundColor: "transparent",
              border: "2px solid #C8960C",
              color: "#C8960C", padding: "14px 32px",
              borderRadius: "8px", fontWeight: 700,
              fontSize: "14px", cursor: "pointer",
              transition: "all 0.3s",
            }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = "#C8960C"; e.currentTarget.style.color = "#050F08" }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "#C8960C" }}
            onClick={() => window.location.href="/farmer-stories"}
            >
              Learn More About Us
            </button>
          </div>

          <div ref={statsRef} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            {stats.map((stat) => (
              <div key={stat.number} style={{
                backgroundColor: "#111916",
                border: "1px solid #1E3022",
                borderRadius: "16px", padding: "36px 24px",
                textAlign: "center", transition: "all 0.3s",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#C8960C"; e.currentTarget.style.transform = "translateY(-4px)" }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#1E3022"; e.currentTarget.style.transform = "translateY(0)" }}
              >
                <div style={{ color: "#C8960C", fontSize: "40px", fontWeight: 900, lineHeight: 1, marginBottom: "8px", fontFamily: "'Playfair Display', serif" }}>
                  {stat.number}
                </div>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", fontWeight: 500 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>

        <div style={{ borderTop: "1px solid #1E3022", paddingTop: "80px" }}>

          <div ref={pillarsHeadRef} style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
              <div style={{ width: "32px", height: "1px", backgroundColor: "#C8960C" }} />
              <span style={{ color: "#C8960C", fontSize: "11px", fontWeight: 700, letterSpacing: "5px", textTransform: "uppercase" }}>
                What We Cover
              </span>
              <div style={{ width: "32px", height: "1px", backgroundColor: "#C8960C" }} />
            </div>
            <h3 style={{
              color: "#FFFFFF", fontSize: "clamp(28px, 3vw, 42px)",
              fontWeight: 900, fontFamily: "'Playfair Display', Georgia, serif",
            }}>
              Our <span style={{ color: "#C8960C", fontStyle: "italic" }}>Content Pillars</span>
            </h3>
          </div>

          <div ref={pillarsRef} style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "16px" }}>
            {pillars.map((pillar) => (
              <div key={pillar.title}
                style={{
                  backgroundColor: "#111916",
                  border: "1px solid #1E3022",
                  borderRadius: "16px", padding: "32px 20px",
                  textAlign: "center", cursor: "pointer",
                  transition: "all 0.3s",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = pillar.color
                  e.currentTarget.style.transform = "translateY(-8px)"
                  e.currentTarget.style.backgroundColor = "#141f17"
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "#1E3022"
                  e.currentTarget.style.transform = "translateY(0)"
                  e.currentTarget.style.backgroundColor = "#111916"
                }}
              >
                <div style={{ width: "48px", height: "3px", backgroundColor: pillar.color, margin: "0 auto 20px auto", borderRadius: "2px" }} />
                <div style={{ color: pillar.color, fontSize: "9px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "12px" }}>
                  {pillar.tag}
                </div>
                <div style={{ color: "#FFFFFF", fontSize: "13px", fontWeight: 700, marginBottom: "12px", lineHeight: 1.4 }}>
                  {pillar.title}
                </div>
                <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "12px", lineHeight: 1.6 }}>
                  {pillar.desc}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
