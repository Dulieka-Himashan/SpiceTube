import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const farmers = [
  {
    id: 1, name: "Sunil Bandara", location: "Matale, Central Province",
    spices: ["Ceylon Cinnamon", "Organic & Regenerative"],
    cert: "ISO Certified", category: "Cinnamon", featured: true,
    image: "/images/cinnamon.jpeg",
    bio: "Third generation cinnamon farmer transforming traditional practices with sustainable methods, now exporting to 12 countries.",
  },
  {
    id: 2, name: "Kamala Perera", location: "Kandy, Central Province",
    spices: ["Black Pepper & Cardamom", "Women-Led Cooperative"],
    cert: "Fairtrade Certified", category: "Women-Led",
    image: "/images/spices-in-cups.jpeg",
    bio: "Leading a cooperative of 45 women farmers, Kamala has tripled household incomes through direct export partnerships.",
  },
  {
    id: 3, name: "Ranjith Silva", location: "Galle, Southern Province",
    spices: ["Cloves & Nutmeg", "Agroforestry"],
    cert: "Organic Certified", category: "Cloves",
    image: "/images/pepper.jpeg",
    bio: "Pioneer of agroforestry techniques in Southern Sri Lanka, producing premium quality cloves for European markets.",
  },
  {
    id: 4, name: "Priya Wijesinghe", location: "Kurunegala, North Western",
    spices: ["Turmeric & Ginger", "Youth Agriculture Leader"],
    cert: "HACCP Certified", category: "Turmeric",
    image: "/images/hands-spices.jpeg",
    bio: "At 28, Priya is revolutionizing turmeric processing with modern extraction technology, creating value-added products.",
  },
  {
    id: 5, name: "Dharmasiri Jayawardena", location: "Hambantota, Southern Province",
    spices: ["Ceylon Pepper", "Climate-Resilient Farming"],
    cert: "GlobalG.A.P Certified", category: "Pepper",
    image: "/images/farmer.jpeg",
    bio: "Using climate-smart agriculture techniques, Dharmasiri has maintained consistent yields despite changing weather patterns.",
  },
  {
    id: 6, name: "Anoma Fernando", location: "Ratnapura, Sabaragamuwa",
    spices: ["Cinnamon & Vanilla", "Community Transformation"],
    cert: "Rainforest Alliance", category: "Women-Led",
    image: "/images/spices.jpeg",
    bio: "Anoma's community project has brought 200 small farmers together under one export brand, changing lives across her village.",
  },
  {
    id: 7, name: "Nimal Rajapaksa", location: "Matale, Central Province",
    spices: ["Ceylon Cinnamon", "Regenerative Agriculture"],
    cert: "Organic Certified", category: "Cinnamon",
    image: "/images/second-farmer.jpeg",
    bio: "After switching to regenerative practices, Nimal's farm saw a 40% increase in soil health and doubling of yield within 2 years.",
  },
  {
    id: 8, name: "Chamari Wickramasinghe", location: "Kandy, Central Province",
    spices: ["Cardamom & Pepper", "Women-Led Cooperative"],
    cert: "Fairtrade Certified", category: "Women-Led",
    image: "/images/spices-pack.jpeg",
    bio: "Chamari led her 30-member cooperative to full organic certification, opening doors to premium European markets.",
  },
  {
    id: 9, name: "Asela Fernando", location: "Galle, Southern Province",
    spices: ["Black Pepper", "Agroforestry"],
    cert: "Rainforest Alliance", category: "Pepper",
    image: "/images/shop.jpeg",
    bio: "By integrating native trees with his pepper vines, Asela restored biodiversity and reduced water usage by 35%.",
  },
];

const filters = ["All", "Cinnamon", "Pepper", "Cardamom", "Turmeric", "Cloves", "Women-Led"];

export default function FarmerStoriesPage() {
  const [active, setActive] = useState("All");
  const [visible, setVisible] = useState(farmers);
  const navigate = useNavigate();
  const cardRefs = useRef([]);
  const heroRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    if (active === "All") setVisible(farmers);
    else setVisible(farmers.filter(f => f.category === active));
  }, [active]);

  // Animate cards on scroll
  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, visible.length);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, idx) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0) scale(1)";
          }, idx * 80);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    cardRefs.current.forEach(ref => {
      if (ref) {
        ref.style.opacity = "0";
        ref.style.transform = "translateY(50px) scale(0.97)";
        ref.style.transition = "opacity 0.55s ease, transform 0.55s ease";
        observer.observe(ref);
      }
    });

    return () => observer.disconnect();
  }, [visible]);

  // Hero parallax on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ background: "#080D0A", minHeight: "100vh" }}>

      {/* HERO with parallax */}
      <div style={{ position: "relative", height: "70vh", overflow: "hidden" }}>
        <div ref={heroRef} style={{ position: "absolute", inset: "-20%", willChange: "transform" }}>
          <img src="/images/spices.jpeg" alt="Farmers"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
        </div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,0,0,0.75) 40%, rgba(0,0,0,0.15)), linear-gradient(to top, rgba(8,13,10,1) 0%, transparent 30%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "0 80px", paddingTop: "80px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px", animation: "fadeUp 0.8s ease forwards" }}>
              <div style={{ width: "40px", height: "2px", background: "#C8960C" }} />
              <span style={{ color: "#C8960C", fontSize: "11px", letterSpacing: "4px", fontFamily: "Inter, sans-serif", fontWeight: 700 }}>FARMER STORIES</span>
            </div>
            <h1 style={{ color: "#fff", fontFamily: "Playfair Display, serif", fontSize: "clamp(42px, 5vw, 76px)", lineHeight: 1.05, marginBottom: "20px", fontWeight: 900 }}>
              The Faces Behind<br />
              <span style={{ color: "#C8960C", fontStyle: "italic" }}>Ceylon Spices</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "16px", fontFamily: "Inter, sans-serif", lineHeight: 1.8, maxWidth: "440px" }}>
              Real stories from the farmers, cooperatives, and communities who grow, harvest and export Sri Lanka's finest spices to the world.
            </p>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "48px 24px" }}>

        {/* FILTERS */}
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "48px" }}>
          {filters.map(f => (
            <button key={f} onClick={() => setActive(f)} style={{
              padding: "10px 22px", borderRadius: "50px", fontSize: "13px",
              fontFamily: "Inter, sans-serif", fontWeight: 600, cursor: "pointer",
              transition: "all 0.25s", border: "1px solid",
              background: active === f ? "#C8960C" : "transparent",
              color: active === f ? "#000" : "rgba(255,255,255,0.6)",
              borderColor: active === f ? "#C8960C" : "rgba(255,255,255,0.2)",
              transform: active === f ? "scale(1.05)" : "scale(1)",
            }}>{f}</button>
          ))}
        </div>

        {/* CARDS GRID */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", marginBottom: "64px" }}>
          {visible.map((farmer, i) => (
            <div
              key={farmer.id}
              ref={el => cardRefs.current[i] = el}
              onClick={() => navigate('/watch')}
              style={{
                background: "#111916", borderRadius: "16px", overflow: "hidden",
                border: "1px solid #1E3022", cursor: "pointer",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow = "0 24px 48px rgba(0,0,0,0.5)";
                e.currentTarget.style.borderColor = "#C8960C";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "#1E3022";
              }}
            >
              {/* Image */}
              <div style={{ position: "relative", height: "220px", overflow: "hidden" }}>
                <img src={farmer.image} alt={farmer.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", transition: "transform 0.6s ease" }}
                  onMouseEnter={e => e.currentTarget.style.transform = "scale(1.08)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 55%)" }} />
                <span style={{
                  position: "absolute", bottom: "14px", left: "14px",
                  background: "#C8960C", color: "#000", fontSize: "10px",
                  fontWeight: 700, letterSpacing: "1px", padding: "4px 12px",
                  borderRadius: "4px", fontFamily: "Inter, sans-serif"
                }}>{farmer.cert}</span>
                {farmer.featured && (
                  <span style={{
                    position: "absolute", top: "14px", right: "14px",
                    background: "rgba(200,150,12,0.95)", color: "#000", fontSize: "9px",
                    fontWeight: 800, letterSpacing: "2px", padding: "4px 10px",
                    borderRadius: "4px", fontFamily: "Inter, sans-serif"
                  }}>FEATURED</span>
                )}
              </div>

              {/* Content */}
              <div style={{ padding: "22px" }}>
                <h3 style={{ color: "#fff", fontSize: "19px", fontFamily: "Playfair Display, serif", marginBottom: "4px", fontWeight: 700 }}>{farmer.name}</h3>
                <p style={{ color: "#C8960C", fontSize: "12px", fontFamily: "Inter, sans-serif", marginBottom: "14px", fontWeight: 600, letterSpacing: "0.5px" }}>{farmer.location}</p>
                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "14px" }}>
                  {farmer.spices.map(s => (
                    <span key={s} style={{
                      border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.55)",
                      fontSize: "11px", padding: "3px 10px", borderRadius: "20px", fontFamily: "Inter, sans-serif"
                    }}>{s}</span>
                  ))}
                </div>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px", fontFamily: "Inter, sans-serif", lineHeight: 1.65, marginBottom: "18px" }}>{farmer.bio}</p>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#C8960C", fontSize: "13px", fontFamily: "Inter, sans-serif", fontWeight: 600 }}>
                  <span>Read Full Story</span>
                  <span style={{ transition: "transform 0.2s" }}>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* LOAD MORE */}
        <div style={{ textAlign: "center", paddingBottom: "80px" }}>
          
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
