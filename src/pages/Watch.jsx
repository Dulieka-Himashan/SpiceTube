import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const videos = [
  { id:1, tag:"FARMER STORIES", tagColor:"#FF6B35", title:"From Soil to Global Markets: The Ceylon Cinnamon Story", location:"Matale", views:"12.4K", duration:"8 min", image:"/images/cinnamon.jpeg" },
  { id:2, tag:"EXPORT INSIGHTS", tagColor:"#C8960C", title:"New EU Regulations: What Spice Exporters Need to Know in 2025", location:"Industry", views:"8.2K", duration:"6 min", image:"/images/spices-pack.jpeg" },
  { id:3, tag:"INNOVATION", tagColor:"#2196F3", title:"How Freeze-Drying is Revolutionizing Ceylon Pepper Export", location:"Colombo", views:"6.7K", duration:"5 min", image:"/images/spices-in-cups.jpeg" },
  { id:4, tag:"SUSTAINABILITY", tagColor:"#8BC34A", title:"Regenerative Agriculture: Healing Sri Lanka's Spice Farms", location:"Southern Province", views:"5.1K", duration:"7 min", image:"/images/hands-spices.jpeg" },
  { id:5, tag:"FARMER STORIES", tagColor:"#FF6B35", title:"Women Leading the Organic Cinnamon Revolution in Kandy", location:"Kandy", views:"9.3K", duration:"4 min", image:"/images/farmer.jpeg" },
  { id:6, tag:"INDUSTRY DIALOGUES", tagColor:"#9C27B0", title:"Roundtable: The Future of Ceylon Spice Exports 2025", location:"Colombo", views:"4.8K", duration:"12 min", image:"/images/shop.jpeg" },
  { id:7, tag:"EXPORT INSIGHTS", tagColor:"#C8960C", title:"Step-by-Step: Getting Your First Spice Export Certificate", location:"Industry", views:"11.2K", duration:"9 min", image:"/images/spices.jpeg" },
  { id:8, tag:"FARMER STORIES", tagColor:"#FF6B35", title:"Youth Farmers Transforming Turmeric Production in Kurunegala", location:"Kurunegala", views:"3.9K", duration:"5 min", image:"/images/second-farmer.jpeg" },
  { id:9, tag:"INNOVATION", tagColor:"#2196F3", title:"Smart Packaging: QR Codes Connecting Farmers to Global Buyers", location:"Colombo", views:"5.5K", duration:"4 min", image:"/images/pepper.jpeg" },
  { id:10, tag:"SUSTAINABILITY", tagColor:"#8BC34A", title:"Agroforestry: Growing Spices Under the Forest Canopy", location:"Galle", views:"4.2K", duration:"6 min", image:"/images/spicy.jpeg" },
];

const filters = ["All","Farmer Stories","Export Insights","Innovation","Sustainability","Industry Dialogues"];

export default function Watch() {
  const [active, setActive] = useState("All");
  const [visible, setVisible] = useState(videos);
  const navigate = useNavigate();
  const cardRefs = useRef([]);
  const heroRef = useRef(null);

  useEffect(() => {
    if (active === "All") setVisible(videos);
    else setVisible(videos.filter(v => {
      if (active === "Farmer Stories") return v.tag === "FARMER STORIES";
      if (active === "Export Insights") return v.tag === "EXPORT INSIGHTS";
      if (active === "Innovation") return v.tag === "INNOVATION";
      if (active === "Sustainability") return v.tag === "SUSTAINABILITY";
      if (active === "Industry Dialogues") return v.tag === "INDUSTRY DIALOGUES";
      return false;
    }));
  }, [active]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }, i * 60);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    cardRefs.current.forEach(ref => {
      if (ref) {
        ref.style.opacity = "0";
        ref.style.transform = "translateY(40px)";
        ref.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        observer.observe(ref);
      }
    });
    return () => observer.disconnect();
  }, [visible]);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) heroRef.current.style.transform = `translateY(${window.scrollY * 0.25}px)`;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const featured = videos[0];

  return (
    <div style={{ background: "#080D0A", minHeight: "100vh" }}>

      {/* HERO */}
      <div style={{ position: "relative", height: "65vh", overflow: "hidden" }}>
        <div ref={heroRef} style={{ position: "absolute", inset: "-20%", willChange: "transform" }}>
          <img src="/images/shop.jpeg" alt="Watch" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,0,0,0.88) 40%, rgba(0,0,0,0.2)), linear-gradient(to top, #080D0A 0%, transparent 35%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "0 80px", paddingTop: "80px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div style={{ width: "40px", height: "2px", background: "#C8960C" }} />
              <span style={{ color: "#C8960C", fontSize: "11px", letterSpacing: "4px", fontFamily: "Inter, sans-serif", fontWeight: 700 }}>VIDEO LIBRARY</span>
            </div>
            <h1 style={{ color: "#fff", fontFamily: "Playfair Display, serif", fontSize: "clamp(36px, 5vw, 68px)", lineHeight: 1.05, marginBottom: "16px", fontWeight: 900 }}>
              Watch & Learn<br />
              <span style={{ color: "#C8960C", fontStyle: "italic" }}>Ceylon Spice Stories</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "15px", fontFamily: "Inter, sans-serif", lineHeight: 1.7, maxWidth: "420px", marginBottom: "28px" }}>
              From farm to export — explore our full library of documentaries, guides, and farmer stories.
            </p>
            <div style={{ display: "flex", gap: "12px" }}>
              <button onClick={() => document.getElementById("episodes")?.scrollIntoView({behavior:"smooth"})}
                style={{ background: "#C8960C", color: "#000", padding: "13px 28px", borderRadius: "8px", fontWeight: 800, fontSize: "13px", border: "none", cursor: "pointer", fontFamily: "Inter, sans-serif" }}>
                Browse All Episodes
              </button>
              <button onClick={() => { setActive("Farmer Stories"); setTimeout(() => document.getElementById("episodes")?.scrollIntoView({behavior:"smooth"}), 100); }}
                style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.3)", color: "#fff", padding: "13px 28px", borderRadius: "8px", fontWeight: 600, fontSize: "13px", cursor: "pointer", fontFamily: "Inter, sans-serif" }}>
                Farmer Stories
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURED */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "48px 24px 0" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
          <div style={{ width: "32px", height: "2px", background: "#C8960C" }} />
          <span style={{ color: "#C8960C", fontSize: "11px", letterSpacing: "3px", fontFamily: "Inter, sans-serif", fontWeight: 700 }}>FEATURED EPISODE</span>
        </div>
        <div style={{ position: "relative", borderRadius: "16px", overflow: "hidden", height: "380px", cursor: "pointer", marginBottom: "48px" }}
          onMouseEnter={e => e.currentTarget.querySelector("img").style.transform = "scale(1.04)"}
          onMouseLeave={e => e.currentTarget.querySelector("img").style.transform = "scale(1)"}
        >
          <img src={featured.image} alt={featured.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s ease" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 60%, transparent)" }} />
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "64px", height: "64px", background: "rgba(200,150,12,0.9)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 0, height: 0, borderTop: "12px solid transparent", borderBottom: "12px solid transparent", borderLeft: "20px solid #000", marginLeft: "4px" }} />
          </div>
          <div style={{ position: "absolute", bottom: "28px", left: "28px", right: "28px" }}>
            <span style={{ background: featured.tagColor, color: "#000", fontSize: "10px", fontWeight: 700, letterSpacing: "2px", padding: "4px 12px", borderRadius: "4px", fontFamily: "Inter, sans-serif" }}>{featured.tag}</span>
            <h2 style={{ color: "#fff", fontFamily: "Playfair Display, serif", fontSize: "26px", marginTop: "10px", marginBottom: "8px", maxWidth: "600px" }}>{featured.title}</h2>
            <div style={{ display: "flex", gap: "20px", color: "rgba(255,255,255,0.6)", fontSize: "12px", fontFamily: "Inter, sans-serif" }}>
              <span>Region: {featured.location}</span>
              <span>Duration: {featured.duration}</span>
              <span>Views: {featured.views}</span>
            </div>
          </div>
        </div>

        {/* FILTERS */}
        <div id="episodes" style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "32px" }}>
          {filters.map(f => (
            <button key={f} onClick={() => setActive(f)} style={{
              padding: "9px 20px", borderRadius: "50px", fontSize: "12px",
              fontFamily: "Inter, sans-serif", fontWeight: 600, cursor: "pointer",
              transition: "all 0.2s", border: "1px solid",
              background: active === f ? "#C8960C" : "transparent",
              color: active === f ? "#000" : "rgba(255,255,255,0.6)",
              borderColor: active === f ? "#C8960C" : "rgba(255,255,255,0.2)",
            }}>{f}</button>
          ))}
        </div>

        {/* GRID */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", marginBottom: "80px" }}>
          {visible.map((v, i) => (
            <div key={v.id} ref={el => cardRefs.current[i] = el}
              style={{ background: "#111916", borderRadius: "14px", overflow: "hidden", border: "1px solid #1E3022", cursor: "pointer", transition: "transform 0.3s, box-shadow 0.3s, border-color 0.3s" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.5)"; e.currentTarget.style.borderColor = "#C8960C"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "#1E3022"; }}
            >
              <div style={{ position: "relative", height: "180px", overflow: "hidden" }}>
                <img src={v.image} alt={v.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s" }}
                  onMouseEnter={e => e.currentTarget.style.transform = "scale(1.07)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)" }} />
                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "44px", height: "44px", background: "rgba(200,150,12,0.85)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: 0, height: 0, borderTop: "8px solid transparent", borderBottom: "8px solid transparent", borderLeft: "14px solid #000", marginLeft: "3px" }} />
                </div>
                <span style={{ position: "absolute", top: "10px", left: "10px", background: v.tagColor, color: "#000", fontSize: "9px", fontWeight: 700, letterSpacing: "1px", padding: "3px 8px", borderRadius: "3px", fontFamily: "Inter, sans-serif" }}>{v.tag}</span>
                <span style={{ position: "absolute", bottom: "10px", right: "10px", background: "rgba(0,0,0,0.7)", color: "#fff", fontSize: "11px", padding: "2px 8px", borderRadius: "4px", fontFamily: "Inter, sans-serif" }}>{v.duration}</span>
              </div>
              <div style={{ padding: "16px" }}>
                <h3 style={{ color: "#fff", fontSize: "14px", fontFamily: "Playfair Display, serif", lineHeight: 1.4, marginBottom: "10px" }}>{v.title}</h3>
                <div style={{ display: "flex", justifyContent: "space-between", color: "rgba(255,255,255,0.4)", fontSize: "11px", fontFamily: "Inter, sans-serif" }}>
                  <span>{v.location}</span>
                  <span>{v.views} views</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
