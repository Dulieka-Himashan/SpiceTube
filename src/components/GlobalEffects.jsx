import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

export default function GlobalEffects() {
  const [phase, setPhase] = useState("intro"); // intro -> reveal -> done
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);
  const location = useLocation();

  // ── CURTAIN INTRO ──────────────────────────────────────────────────────────
  useEffect(() => {
    if (sessionStorage.getItem("curtainShown")) {
      setPhase("done");
      return;
    }
    const t1 = setTimeout(() => setPhase("reveal"), 3000);
    const t2 = setTimeout(() => {
      setPhase("done");
      sessionStorage.setItem("curtainShown", "true");
    }, 3800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  // ── CUSTOM CURSOR ──────────────────────────────────────────────────────────
  useEffect(() => {
    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;
    if (!dot || !ring) return;
    let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0, rafId;
    const onMove = (e) => {
      mouseX = e.clientX; mouseY = e.clientY;
      dot.style.left = mouseX + "px"; dot.style.top = mouseY + "px";
    };
    const animate = () => {
      ringX += (mouseX - ringX) * 0.12; ringY += (mouseY - ringY) * 0.12;
      ring.style.left = ringX + "px"; ring.style.top = ringY + "px";
      rafId = requestAnimationFrame(animate);
    };
    const onEnter = () => { dot.style.transform = "translate(-50%,-50%) scale(3)"; ring.style.transform = "translate(-50%,-50%) scale(1.8)"; ring.style.borderColor = "#C8960C"; };
    const onLeave = () => { dot.style.transform = "translate(-50%,-50%) scale(1)"; ring.style.transform = "translate(-50%,-50%) scale(1)"; ring.style.borderColor = "rgba(200,150,12,0.6)"; };
    window.addEventListener("mousemove", onMove);
    rafId = requestAnimationFrame(animate);
    const addListeners = () => document.querySelectorAll("button, a").forEach(el => { el.addEventListener("mouseenter", onEnter); el.addEventListener("mouseleave", onLeave); });
    addListeners();
    const obs = new MutationObserver(addListeners);
    obs.observe(document.body, { childList: true, subtree: true });
    return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(rafId); obs.disconnect(); };
  }, []);

  // ── SCROLL PROGRESS ────────────────────────────────────────────────────────
  useEffect(() => {
    const bar = document.getElementById("scroll-progress");
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (bar) bar.style.width = ((window.scrollY / total) * 100) + "%";
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [location]);

  // ── COUNTER ANIMATION ──────────────────────────────────────────────────────
  useEffect(() => {
    const counters = document.querySelectorAll("[data-count]");
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.getAttribute("data-count"));
        const suffix = el.getAttribute("data-suffix") || "";
        let current = 0;
        const step = Math.ceil(target / 60);
        const timer = setInterval(() => {
          current = Math.min(current + step, target);
          el.textContent = current + suffix;
          if (current >= target) clearInterval(timer);
        }, 25);
        obs.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach(c => obs.observe(c));
    return () => obs.disconnect();
  }, [location]);

  // Spice particles for intro
  const spices = ["🌶️","✨","🍂","⭐","💛","🌿","🔥","⚡","🌟","💫","🍁","🌾"];
  const particles = Array.from({length: 30}, (_, i) => ({
    id: i,
    emoji: spices[i % spices.length],
    left: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 1.5 + Math.random() * 1.5,
    size: 16 + Math.random() * 24,
    rotate: Math.random() * 360,
  }));

  return (
    <>
      {/* Scroll progress bar */}
      <div style={{ position: "fixed", top: 0, left: 0, zIndex: 9999, height: "2px", background: "rgba(200,150,12,0.15)", width: "100%" }}>
        <div id="scroll-progress" style={{ height: "100%", background: "linear-gradient(to right, #C8960C, #FFD700)", width: "0%", transition: "width 0.1s linear" }} />
      </div>

      {/* Custom cursor */}
      <div ref={cursorDotRef} style={{ position: "fixed", width: "8px", height: "8px", background: "#C8960C", borderRadius: "50%", pointerEvents: "none", zIndex: 99999, transform: "translate(-50%,-50%)", transition: "transform 0.2s", mixBlendMode: "difference" }} />
      <div ref={cursorRingRef} style={{ position: "fixed", width: "36px", height: "36px", border: "1.5px solid rgba(200,150,12,0.6)", borderRadius: "50%", pointerEvents: "none", zIndex: 99998, transform: "translate(-50%,-50%)", transition: "border-color 0.3s" }} />

      {/* CINEMATIC INTRO */}
      {phase !== "done" && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 999999,
          background: "#050F08",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          overflow: "hidden",
          opacity: phase === "reveal" ? 0 : 1,
          transform: phase === "reveal" ? "translateY(-100%)" : "translateY(0)",
          transition: phase === "reveal" ? "opacity 0.5s ease, transform 0.8s cubic-bezier(0.76,0,0.24,1)" : "none",
        }}>

          {/* Falling spice particles */}
          {particles.map(p => (
            <div key={p.id} style={{
              position: "absolute", top: "-60px", left: p.left + "%",
              fontSize: p.size + "px", opacity: 0.6,
              animation: `fall ${p.duration}s ${p.delay}s ease-in infinite`,
              transform: `rotate(${p.rotate}deg)`,
              pointerEvents: "none",
            }}>{p.emoji}</div>
          ))}

          {/* Spice bowl image */}
          <div style={{
            width: "120px", height: "120px", borderRadius: "50%",
            overflow: "hidden", marginBottom: "28px",
            border: "2px solid rgba(200,150,12,0.4)",
            boxShadow: "0 0 60px rgba(200,150,12,0.3)",
            animation: "bowlReveal 0.8s ease forwards",
            opacity: 0,
          }}>
            <img src="/images/spices-in-cups.jpeg" alt="Spices"
              style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>

          {/* Logo */}
          <div style={{
            fontSize: "52px", fontWeight: 900, fontFamily: "'Playfair Display', serif",
            color: "#fff", letterSpacing: "-1px",
            animation: "logoUp 0.8s 0.3s ease forwards", opacity: 0,
          }}>
            Spice<span style={{ color: "#C8960C" }}>Tube</span>LK
          </div>

          {/* Tagline */}
          <div style={{
            color: "rgba(200,150,12,0.7)", fontSize: "10px", letterSpacing: "6px",
            fontFamily: "Inter, sans-serif", marginTop: "12px",
            animation: "logoUp 0.8s 0.6s ease forwards", opacity: 0,
          }}>
            SRI LANKA'S DIGITAL VOICE OF CEYLON SPICES
          </div>

          {/* Gold loading bar */}
          <div style={{
            marginTop: "48px", width: "180px", height: "2px",
            background: "rgba(255,255,255,0.08)", borderRadius: "2px", overflow: "hidden"
          }}>
            <div style={{
              height: "100%", background: "linear-gradient(to right, #C8960C, #FFD700)",
              animation: "loadBar 2.5s ease forwards",
              boxShadow: "0 0 8px rgba(200,150,12,0.6)"
            }} />
          </div>

          {/* Decorative rings */}
          <div style={{ position: "absolute", width: "500px", height: "500px", borderRadius: "50%", border: "1px solid rgba(200,150,12,0.08)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", width: "700px", height: "700px", borderRadius: "50%", border: "1px solid rgba(200,150,12,0.05)", pointerEvents: "none" }} />
        </div>
      )}

      <style>{`
        @keyframes fall {
          0% { transform: translateY(0) rotate(0deg); opacity: 0.7; }
          100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
        }
        @keyframes bowlReveal {
          from { opacity: 0; transform: scale(0.5) rotate(-10deg); }
          to { opacity: 1; transform: scale(1) rotate(0deg); }
        }
        @keyframes logoUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes loadBar {
          from { width: 0%; }
          to { width: 100%; }
        }
        * { cursor: none !important; }
      `}</style>
    </>
  );
}
