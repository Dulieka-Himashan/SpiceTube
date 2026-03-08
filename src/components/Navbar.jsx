import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function Navbar() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links = [
    { label: "Watch", href: "/watch" },
    { label: "Farmer Stories", href: "/farmer-stories" },
    { label: "Export Insights", href: "/export-insights" },
    { label: "Sustainability", href: "/sustainability" },
    { label: "Innovation", href: "/innovation" },
    { label: "News", href: "/#news" },
  ]

  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100 }}>

      <div style={{ backgroundColor: "#C8960C", padding: "7px 48px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ color: "#0D1A0F", fontSize: "11px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>
          Sri Lanka's Digital Voice of Ceylon Spices
        </span>
        <div style={{ display: "flex", gap: "24px" }}>
          <a href="#newsletter" style={{ color: "#0D1A0F", fontSize: "11px", fontWeight: 600, textDecoration: "none" }}>Newsletter</a>
          <a href="#partner" style={{ color: "#0D1A0F", fontSize: "11px", fontWeight: 600, textDecoration: "none" }}>Partner With Us</a>
        </div>
      </div>

      <div style={{
        backgroundColor: scrolled ? "rgba(5,15,8,0.98)" : "rgba(5,15,8,0.90)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(200,150,12,0.15)",
        padding: "0 48px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: "64px", transition: "all 0.3s",
      }}>

        <a href="/" style={{ textDecoration: "none" }}>
          <span style={{ fontSize: "22px", fontWeight: 900, color: "#FFFFFF", letterSpacing: "-0.5px", fontFamily: "'Playfair Display', Georgia, serif" }}>
            Spice<span style={{ color: "#C8960C" }}>Tube</span>LK
          </span>
        </a>

        <nav style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          {links.map((link) => (
            <Link key={link.label} to={link.href} style={{ color: "#A0B8A4", fontSize: "13px", fontWeight: 500, textDecoration: "none", padding: "6px 14px", borderRadius: "6px", transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.color = "#FFFFFF"; e.currentTarget.style.backgroundColor = "rgba(200,150,12,0.15)" }}
              onMouseLeave={e => { e.currentTarget.style.color = "#A0B8A4"; e.currentTarget.style.backgroundColor = "transparent" }}
            >{link.label}</Link>
          ))}
        </nav>

        <button style={{ backgroundColor: "#C8960C", color: "#050F08", padding: "9px 22px", borderRadius: "6px", fontWeight: 700, fontSize: "13px", border: "none", cursor: "pointer", transition: "all 0.2s" }}
          onMouseEnter={e => { e.currentTarget.style.backgroundColor = "#E5AC14"; e.currentTarget.style.transform = "translateY(-2px)" }}
          onMouseLeave={e => { e.currentTarget.style.backgroundColor = "#C8960C"; e.currentTarget.style.transform = "translateY(0)" }}
        onClick={() => navigate("/watch")}>
          Watch Now
        </button>

      </div>
    </header>
  )
}
