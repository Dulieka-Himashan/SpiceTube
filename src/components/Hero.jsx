import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function Hero() {
  const navigate = useNavigate();
  const textRef = useRef(null);

  useEffect(() => {
    const els = textRef.current?.querySelectorAll(".anim");
    els?.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(40px)";
      setTimeout(() => {
        el.style.transition = "opacity 0.9s ease, transform 0.9s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 200 + i * 150);
    });
  }, []);

  const stats = [
    { number: "500+", label: "Farmers Featured" },
    { number: "120+", label: "Video Episodes" },
    { number: "30+", label: "Countries Reached" },
    { number: "50+", label: "Export Partners" },
  ];

  return (
    <section style={{ position: "relative", minHeight: "100vh", overflow: "hidden", background: "#050F08" }}>

      {/* Background */}
      <img
        src="https://images.unsplash.com/photo-1743810746210-4b1c9595e7be?q=80&w=1727&auto=format&fit=crop"
        alt="Ceylon Spices"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
      />

      {/* Dark overlay - left side only so image shows on right */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(5,15,8,0.95) 40%, rgba(5,15,8,0.4) 70%, rgba(5,15,8,0.1) 100%)" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(5,15,8,1) 0%, transparent 30%)" }} />

      {/* Decorative circles */}
      <div style={{ position: "absolute", right: "6%", top: "12%", width: "450px", height: "450px", borderRadius: "50%", border: "1px solid rgba(200,150,12,0.2)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", right: "11%", top: "18%", width: "300px", height: "300px", borderRadius: "50%", border: "1px solid rgba(200,150,12,0.12)", pointerEvents: "none" }} />

      {/* Vertical side text */}
      <div style={{ position: "absolute", right: "28px", top: "50%", transform: "translateY(-50%) rotate(90deg)", color: "rgba(200,150,12,0.35)", fontSize: "9px", letterSpacing: "6px", fontFamily: "Inter, sans-serif", fontWeight: 700, pointerEvents: "none", whiteSpace: "nowrap" }}>
        SINCE 2020 — NEGOMBO, SRI LANKA
      </div>

      {/* Content */}
      <div ref={textRef} style={{ position: "relative", zIndex: 10, minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "140px 80px 100px" }}>

        <div className="anim" style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "36px" }}>
          <div style={{ width: "52px", height: "1px", background: "#C8960C" }} />
          <span style={{ color: "#C8960C", fontSize: "10px", fontWeight: 700, letterSpacing: "6px", fontFamily: "Inter, sans-serif" }}>SRI LANKA'S DIGITAL VOICE OF CEYLON SPICES</span>
        </div>

        <h1 className="anim" style={{ fontSize: "clamp(52px, 7.5vw, 100px)", fontWeight: 900, color: "#fff", lineHeight: 0.95, fontFamily: "'Playfair Display', serif", letterSpacing: "-2px", margin: "0 0 6px 0" }}>
          The Global
        </h1>
        <h1 className="anim" style={{ fontSize: "clamp(52px, 7.5vw, 100px)", fontWeight: 900, color: "#C8960C", fontStyle: "italic", lineHeight: 0.95, fontFamily: "'Playfair Display', serif", letterSpacing: "-2px", margin: "0 0 6px 0" }}>
          Digital Voice
        </h1>
        <h1 className="anim" style={{ fontSize: "clamp(52px, 7.5vw, 100px)", fontWeight: 900, color: "#fff", lineHeight: 0.95, fontFamily: "'Playfair Display', serif", letterSpacing: "-2px", margin: "0 0 36px 0" }}>
          of Ceylon Spices
        </h1>

        <p className="anim" style={{ color: "rgba(255,255,255,0.6)", fontSize: "17px", lineHeight: 1.8, marginBottom: "48px", maxWidth: "420px", fontFamily: "Inter, sans-serif" }}>
          Educating, Connecting, and Empowering<br />Sri Lanka's Spice Ecosystem to the World.
        </p>

        <div className="anim" style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginBottom: "72px" }}>
          <button onClick={() => navigate('/watch')}
            style={{ background: "#C8960C", color: "#050F08", padding: "16px 36px", borderRadius: "4px", fontWeight: 800, fontSize: "13px", border: "none", cursor: "pointer", fontFamily: "Inter, sans-serif", letterSpacing: "1px", textTransform: "uppercase", transition: "all 0.3s" }}
            onMouseEnter={e => { e.currentTarget.style.background = "#E5AC14"; e.currentTarget.style.transform = "translateY(-3px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#C8960C"; e.currentTarget.style.transform = "translateY(0)"; }}>
            Watch Latest Episode
          </button>
          <button onClick={() => navigate('/farmer-stories')}
            style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.3)", color: "#fff", padding: "16px 36px", borderRadius: "4px", fontWeight: 600, fontSize: "13px", cursor: "pointer", fontFamily: "Inter, sans-serif", letterSpacing: "1px", textTransform: "uppercase", transition: "all 0.3s" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#C8960C"; e.currentTarget.style.color = "#C8960C"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; e.currentTarget.style.color = "#fff"; }}>
            Explore Farmer Stories
          </button>
          <button onClick={() => window.location.href = 'mailto:partner@spicetube.lk'}
            style={{ background: "transparent", border: "1px solid #C8960C", color: "#C8960C", padding: "16px 36px", borderRadius: "4px", fontWeight: 600, fontSize: "13px", cursor: "pointer", fontFamily: "Inter, sans-serif", letterSpacing: "1px", textTransform: "uppercase", transition: "all 0.3s" }}
            onMouseEnter={e => { e.currentTarget.style.background = "#C8960C"; e.currentTarget.style.color = "#000"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#C8960C"; }}>
            Partner With Us
          </button>
        </div>

        <div className="anim" style={{ display: "flex", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "36px", maxWidth: "580px" }}>
          {stats.map((stat, i) => (
            <div key={i} style={{ flex: 1, paddingRight: "24px", marginRight: "24px", borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none" }}>
              <div style={{ color: "#C8960C", fontSize: "32px", fontWeight: 900, fontFamily: "'Playfair Display', serif", lineHeight: 1 }}>{stat.number}</div>
              <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "11px", marginTop: "6px", fontFamily: "Inter, sans-serif", letterSpacing: "1px" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: "absolute", bottom: "36px", left: "80px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", zIndex: 10 }}>
        <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "9px", letterSpacing: "5px", fontFamily: "Inter, sans-serif" }}>SCROLL</span>
        <div style={{ width: "1px", height: "60px", background: "linear-gradient(to bottom, #C8960C, transparent)" }} />
      </div>

    </section>
  );
}
