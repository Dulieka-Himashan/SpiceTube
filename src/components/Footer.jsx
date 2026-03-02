export default function Footer() {

  const links = {
    "Content": ["Watch", "Farmer Stories", "Export Insights", "Sustainability", "Innovation", "Industry Dialogues"],
    "Resources": ["Export Guide", "Certification Info", "Market Reports", "Video Archive", "News & Updates"],
    "Company": ["About Us", "Our Mission", "Partners", "Advertise With Us", "Contact"],
  }

  return (
    <footer style={{ backgroundColor: "#050F08", borderTop: "1px solid #1E3022", padding: "80px 0 0 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 64px" }}>

        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "60px", marginBottom: "60px" }}>

          <div>
            <span style={{ fontSize: "24px", fontWeight: 900, color: "#FFFFFF", fontFamily: "'Playfair Display', Georgia, serif" }}>
              Spice<span style={{ color: "#C8960C" }}>Tube</span>LK
            </span>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "14px", lineHeight: 1.8, marginTop: "16px", marginBottom: "24px", maxWidth: "280px" }}>
              Sri Lanka's first dedicated digital content platform for Ceylon spices, regenerative agriculture, and export excellence.
            </p>
            <div style={{ display: "flex", gap: "12px" }}>
              {["YouTube", "LinkedIn", "Instagram", "Facebook"].map((s) => (
                <a key={s} href="#" style={{ backgroundColor: "#111916", border: "1px solid #1E3022", color: "rgba(255,255,255,0.5)", fontSize: "11px", fontWeight: 600, padding: "8px 14px", borderRadius: "6px", textDecoration: "none", transition: "all 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#C8960C"; e.currentTarget.style.color = "#C8960C" }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#1E3022"; e.currentTarget.style.color = "rgba(255,255,255,0.5)" }}
                >{s}</a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 style={{ color: "#FFFFFF", fontSize: "13px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "20px" }}>{category}</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {items.map((item) => (
                  <a key={item} href="#" style={{ color: "rgba(255,255,255,0.45)", fontSize: "13px", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => e.currentTarget.style.color = "#C8960C"}
                    onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.45)"}
                  >{item}</a>
                ))}
              </div>
            </div>
          ))}

        </div>

        <div style={{ borderTop: "1px solid #1E3022", padding: "24px 0", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "12px" }}>
            2025 SpiceTubeLK. All rights reserved. The Voice of Ceylon Spices.
          </span>
          <div style={{ display: "flex", gap: "24px" }}>
            <a href="#" style={{ color: "rgba(255,255,255,0.3)", fontSize: "12px", textDecoration: "none" }}>Privacy Policy</a>
            <a href="#" style={{ color: "rgba(255,255,255,0.3)", fontSize: "12px", textDecoration: "none" }}>Terms of Use</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
