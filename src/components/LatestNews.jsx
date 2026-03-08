import { useRef, useEffect } from "react";

const news = [
  {
    tag: "INDUSTRY NEWS",
    tagColor: "#C8960C",
    title: "Ceylon Cinnamon Prices Rise 12% in Q1 2025 Amid Global Demand Surge",
    date: "March 1, 2025",
    read: "3 min read",
    image: "/images/cinnamon.jpeg",
    featured: true,
    excerpt: "Global buyers are turning to Ceylon cinnamon as health trends drive unprecedented demand across European and North American markets."
  },
  {
    tag: "REGULATION",
    tagColor: "#2196F3",
    title: "New EU Organic Certification Requirements Effective March 2025",
    date: "Feb 28, 2025",
    read: "4 min read",
    image: "/images/spices-pack.jpeg",
  },
  {
    tag: "TRADE",
    tagColor: "#4CAF50",
    title: "Sri Lanka Signs New Spice Export Agreement with UAE",
    date: "Feb 25, 2025",
    read: "3 min read",
    image: "/images/shop.jpeg",
  },
  {
    tag: "SUSTAINABILITY",
    tagColor: "#8BC34A",
    title: "Regenerative Agriculture Program Reaches 500 Farmers",
    date: "Feb 20, 2025",
    read: "5 min read",
    image: "/images/hands-spices.jpeg",
  },
  {
    tag: "INNOVATION",
    tagColor: "#9C27B0",
    title: "New Spice Processing Facility Opens in Matale Creating 200 Jobs",
    date: "Feb 18, 2025",
    read: "3 min read",
    image: "/images/spices-in-cups.jpeg",
  },
  {
    tag: "FARMER STORIES",
    tagColor: "#FF5722",
    title: "Young Farmers in Kandy Revive Heirloom Pepper Varieties",
    date: "Feb 15, 2025",
    read: "4 min read",
    image: "/images/pepper.jpeg",
  },
];

export default function LatestNews() {
  const featured = news[0];
  const rest = news.slice(1);

  return (
    <section style={{ background: "#080D0A", padding: "80px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "48px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
              <div style={{ width: "40px", height: "2px", background: "#C8960C" }} />
              <span style={{ color: "#C8960C", fontSize: "12px", letterSpacing: "3px", fontFamily: "Inter, sans-serif" }}>LATEST NEWS</span>
            </div>
            <h2 style={{ color: "#fff", fontSize: "36px", fontFamily: "Playfair Display, serif", margin: 0 }}>
              From the Spice World
            </h2>
          </div>
          <a href="#" style={{ color: "#C8960C", fontFamily: "Inter, sans-serif", fontSize: "14px", textDecoration: "none", borderBottom: "1px solid #C8960C", paddingBottom: "2px" }}>
            View All News →
          </a>
        </div>

        {/* Layout: Featured left + grid right */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", alignItems: "start" }}>

          {/* Featured big card */}
          <div style={{ background: "#111916", borderRadius: "16px", overflow: "hidden", cursor: "pointer", border: "1px solid #1E3022" }}>
            <div style={{ position: "relative", height: "280px", overflow: "hidden" }}>
              <img src={featured.image} alt={featured.title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)" }} />
              <span style={{
                position: "absolute", top: "16px", left: "16px",
                background: featured.tagColor, color: "#000",
                fontSize: "10px", fontWeight: "700", letterSpacing: "2px",
                padding: "4px 10px", borderRadius: "4px", fontFamily: "Inter, sans-serif"
              }}>{featured.tag}</span>
            </div>
            <div style={{ padding: "24px" }}>
              <h3 style={{ color: "#fff", fontSize: "22px", fontFamily: "Playfair Display, serif", marginBottom: "12px", lineHeight: "1.4" }}>
                {featured.title}
              </h3>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", fontFamily: "Inter, sans-serif", lineHeight: "1.6", marginBottom: "16px" }}>
                {featured.excerpt}
              </p>
              <div style={{ display: "flex", gap: "16px", color: "rgba(255,255,255,0.4)", fontSize: "12px", fontFamily: "Inter, sans-serif" }}>
                <span>{featured.date}</span>
                <span>{featured.read}</span>
              </div>
            </div>
          </div>

          {/* Right side: 2x2 small cards + 1 wide */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

            {/* Top row - 2 cards */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              {rest.slice(0, 2).map((item, i) => (
                <div key={i} style={{ background: "#111916", borderRadius: "12px", overflow: "hidden", border: "1px solid #1E3022", cursor: "pointer" }}>
                  <div style={{ height: "120px", overflow: "hidden", position: "relative" }}>
                    <img src={item.image} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    <span style={{
                      position: "absolute", top: "8px", left: "8px",
                      background: item.tagColor, color: "#000",
                      fontSize: "9px", fontWeight: "700", letterSpacing: "1px",
                      padding: "3px 8px", borderRadius: "3px", fontFamily: "Inter, sans-serif"
                    }}>{item.tag}</span>
                  </div>
                  <div style={{ padding: "12px" }}>
                    <p style={{ color: "#fff", fontSize: "13px", fontFamily: "Playfair Display, serif", lineHeight: "1.4", marginBottom: "8px" }}>
                      {item.title}
                    </p>
                    <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px", fontFamily: "Inter, sans-serif" }}>{item.date}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom - horizontal cards */}
            {rest.slice(2).map((item, i) => (
              <div key={i} style={{ background: "#111916", borderRadius: "12px", overflow: "hidden", border: "1px solid #1E3022", cursor: "pointer", display: "flex", height: "100px" }}>
                <img src={item.image} alt={item.title} style={{ width: "120px", minWidth: "120px", objectFit: "cover" }} />
                <div style={{ padding: "16px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "6px" }}>
                  <span style={{ background: item.tagColor, color: "#000", fontSize: "9px", fontWeight: "700", letterSpacing: "1px", padding: "2px 8px", borderRadius: "3px", fontFamily: "Inter, sans-serif", width: "fit-content" }}>{item.tag}</span>
                  <p style={{ color: "#fff", fontSize: "13px", fontFamily: "Playfair Display, serif", lineHeight: "1.3", margin: 0 }}>{item.title}</p>
                  <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px", fontFamily: "Inter, sans-serif" }}>{item.date} · {item.read}</span>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
