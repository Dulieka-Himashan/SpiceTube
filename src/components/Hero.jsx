export default function Hero() {

  const stats = [
    { number: "500+", label: "Farmers Featured" },
    { number: "120+", label: "Video Episodes" },
    { number: "30+", label: "Countries Reached" },
    { number: "50+", label: "Export Partners" },
  ]

  return (
    <section style={{ position: "relative", minHeight: "100vh", width: "100%", overflow: "hidden" }}>

      <img
        src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1920&q=90"
        alt="Ceylon Spices"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
      />

      <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.75)" }} />

      <div style={{ position: "relative", zIndex: 10, height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", maxWidth: "1280px", margin: "0 auto", padding: "140px 64px 100px 64px" }}>

        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
          <div style={{ width: "48px", height: "2px", backgroundColor: "#C8960C" }} />
          <span style={{ color: "#FFFFFF", fontSize: "11px", fontWeight: 700, letterSpacing: "5px", textTransform: "uppercase" }}>
            Sri Lanka's Digital Voice of Ceylon Spices
          </span>
        </div>

        <h1 style={{ fontSize: "clamp(48px, 6vw, 86px)", fontWeight: 900, color: "#FFFFFF", lineHeight: 1.05, marginBottom: "28px", fontFamily: "'Playfair Display', Georgia, serif", maxWidth: "700px", letterSpacing: "-1px" }}>
          The Global
          <br />
          <span style={{ color: "#C8960C", fontStyle: "italic" }}>Digital Voice</span>
          <br />
          of Ceylon Spices
        </h1>

        <p style={{ color: "#FFFFFF", fontSize: "18px", lineHeight: 1.8, marginBottom: "48px", maxWidth: "460px" }}>
          Educating, Connecting, and Empowering<br />
          Sri Lanka's Spice Ecosystem to the World.
        </p>

        <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginBottom: "64px" }}>
          <button style={{ backgroundColor: "#C8960C", color: "#050F08", padding: "15px 34px", borderRadius: "8px", fontWeight: 800, fontSize: "14px", border: "none", cursor: "pointer" }}
            onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px)"}
            onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
          >Watch Latest Episode</button>

          <button style={{ backgroundColor: "rgba(255,255,255,0.1)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.35)", color: "#FFFFFF", padding: "15px 34px", borderRadius: "8px", fontWeight: 600, fontSize: "14px", cursor: "pointer" }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.2)"}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)"}
          >Explore Farmer Stories</button>

          <button style={{ backgroundColor: "transparent", border: "1px solid #C8960C", color: "#C8960C", padding: "15px 34px", borderRadius: "8px", fontWeight: 600, fontSize: "14px", cursor: "pointer" }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = "rgba(200,150,12,0.15)"}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = "transparent"}
          >Partner With Us</button>
        </div>

        <div style={{ display: "flex", borderTop: "1px solid rgba(255,255,255,0.2)", paddingTop: "32px", maxWidth: "560px" }}>
          {stats.map((stat, i) => (
            <div key={i} style={{ flex: 1, paddingRight: i < stats.length - 1 ? "24px" : "0", marginRight: i < stats.length - 1 ? "24px" : "0", borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.2)" : "none" }}>
              <div style={{ color: "#C8960C", fontSize: "28px", fontWeight: 800 }}>{stat.number}</div>
              <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "11px", marginTop: "4px" }}>{stat.label}</div>
            </div>
          ))}
        </div>

      </div>

      <div style={{ position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", zIndex: 10 }}>
        <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "10px", letterSpacing: "4px" }}>SCROLL</span>
        <div style={{ width: "1px", height: "50px", background: "linear-gradient(to bottom, #C8960C, transparent)" }} />
      </div>

    </section>
  )
}
