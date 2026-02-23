"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const LAYERS = [
    {
        id: "crystal",
        label: "Sapphire Crystal",
        color: "#7EB8D4",
        desc: "Multi-layer anti-reflective sapphire, 9H hardness — scratch-proof clarity from every angle.",
    },
    {
        id: "dial",
        label: "Skeleton Dial",
        color: "#C8A96A",
        desc: "Open-heart exhibition dial exposing the full gear train, balance wheel and escapement.",
    },
    {
        id: "movement",
        label: "Caliber 7A20-S",
        color: "#E2C98E",
        desc: "In-house automatic movement, 22 jewels, 36-hour power reserve, regulated ±10/30 s/day.",
    },
    {
        id: "case",
        label: "Stainless Steel Case",
        color: "#B8B0A0",
        desc: "Grade 316L steel, brushed and polished, sealed to 50 m water resistance.",
    },
    {
        id: "bracelet",
        label: "Ceramic Fusion Bracelet",
        color: "#C8A96A",
        desc: "Alternating steel and ceramic centre links — butterfly deployment, 22 mm lug.",
    },
];

const SCREWS = [
    { top: "8%", left: "38%", delay: 0 },
    { top: "8%", left: "58%", delay: 0.05 },
    { top: "30%", left: "20%", delay: 0.1 },
    { top: "30%", left: "76%", delay: 0.12 },
    { top: "55%", left: "22%", delay: 0.07 },
    { top: "55%", left: "74%", delay: 0.09 },
    { top: "76%", left: "38%", delay: 0.04 },
    { top: "76%", left: "58%", delay: 0.06 },
];

/* ── Animated screw component ─────────────────── */
function Screw({ top, left, delay, accent }: { top: string; left: string; delay: number; accent: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay, duration: 0.4, ease: "backOut" }}
            className="absolute"
            style={{ top, left }}
        >
            <div
                className="w-3 h-3 rounded-full flex items-center justify-center"
                style={{
                    background: `radial-gradient(circle at 35% 35%, ${accent}cc, ${accent}44)`,
                    boxShadow: `0 0 6px ${accent}55`,
                    border: `1px solid ${accent}88`,
                }}
            >
                <div className="w-1 h-[7px] rounded-full" style={{ background: accent, opacity: 0.7 }} />
            </div>
        </motion.div>
    );
}

export default function DesignPage() {
    const [activeLayer, setActiveLayer] = useState(1);
    const [hovered, setHovered] = useState<number | null>(null);
    const accent = "#C8A96A";

    const layer = LAYERS[activeLayer];

    useEffect(() => {
        const t = setInterval(() => {
            setActiveLayer((i) => (i + 1) % LAYERS.length);
        }, 3500);
        return () => clearInterval(t);
    }, []);

    return (
        <main className="min-h-screen bg-[#050505] text-white overflow-x-hidden">

            {/* ── TOP NAV BAR ── */}
            <div
                className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 py-3 sm:py-3.5 border-b border-white/5"
                style={{ background: "rgba(5,5,5,0.9)", backdropFilter: "blur(20px)" }}
            >
                <Link
                    href="/"
                    className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-xs uppercase tracking-[0.2em] group"
                >
                    <span className="group-hover:-translate-x-1 transition-transform inline-block">←</span>
                    <span>Back</span>
                </Link>
                <p className="text-xs uppercase tracking-[0.3em] text-white/40 hidden sm:block">Design Language</p>
                <Link
                    href="/buy"
                    className="text-xs font-bold uppercase tracking-[0.2em] text-black px-4 sm:px-5 py-1.5 sm:py-2 rounded-full"
                    style={{
                        background: "linear-gradient(135deg, #C8A96A 0%, #E2C98E 50%, #C8A96A 100%)",
                    }}
                >
                    Buy Now
                </Link>
            </div>

            {/* ══════════════════════════════════
          HERO — EXPLODED VIEW
      ══════════════════════════════════ */}
            <section className="relative flex flex-col lg:flex-row overflow-hidden pt-12 sm:pt-14">

                {/* ── LEFT: Exploded watch illustration ── */}
                <div className="relative lg:w-1/2 flex items-center justify-center bg-[#080806] overflow-hidden" style={{ minHeight: "clamp(320px, 80vw, 100vh)" }}>

                    {/* Background glow */}
                    <div
                        className="absolute w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] rounded-full pointer-events-none transition-all duration-700"
                        style={{
                            background: accent,
                            opacity: 0.055,
                            filter: "blur(120px)",
                            top: "50%", left: "50%",
                            transform: "translate(-50%, -50%)",
                        }}
                    />

                    {/* ─ Exploded SVG illustration ─ */}
                    <div
                        className="relative z-10 origin-center"
                        style={{ width: "min(340px, 80vw)", height: "min(520px, 122vw)" }}
                    >

                        {/* Floating screws */}
                        {SCREWS.map((s, i) => (
                            <Screw key={i} {...s} accent={accent} />
                        ))}

                        {/* Crystal layer — top */}
                        <motion.div
                            animate={{ y: activeLayer === 0 ? -18 : 0, scale: activeLayer === 0 ? 1.04 : 1 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute left-1/2 -translate-x-1/2 rounded-[40px] flex items-center justify-center"
                            style={{
                                top: 30, width: 200, height: 56,
                                background: "linear-gradient(135deg, rgba(126,184,212,0.25) 0%, rgba(180,220,240,0.08) 100%)",
                                border: "1px solid rgba(126,184,212,0.4)",
                                backdropFilter: "blur(8px)",
                                boxShadow: activeLayer === 0
                                    ? "0 0 30px rgba(126,184,212,0.4), 0 0 60px rgba(126,184,212,0.15)"
                                    : "0 4px 20px rgba(0,0,0,0.5)",
                            }}
                            onClick={() => setActiveLayer(0)}
                        >
                            <span className="text-[9px] uppercase tracking-[0.25em] text-[#7EB8D4]/80">Sapphire Crystal</span>
                        </motion.div>

                        {/* Dial layer */}
                        <motion.div
                            animate={{ y: activeLayer === 1 ? -12 : 0, scale: activeLayer === 1 ? 1.04 : 1 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute left-1/2 -translate-x-1/2"
                            style={{ top: 120, width: 200, height: 200, cursor: "pointer" }}
                            onClick={() => setActiveLayer(1)}
                        >
                            {/* Dial ring */}
                            <div
                                className="absolute inset-0 rounded-full"
                                style={{
                                    background: "radial-gradient(ellipse at 35% 30%, #1a1208ee, #030303)",
                                    border: `2px solid ${activeLayer === 1 ? accent : accent + "44"}`,
                                    boxShadow: activeLayer === 1
                                        ? `0 0 40px ${accent}55, 0 0 80px ${accent}20, inset 0 0 40px rgba(0,0,0,0.6)`
                                        : "inset 0 0 40px rgba(0,0,0,0.6)",
                                    transition: "box-shadow 0.5s",
                                }}
                            >
                                {/* Hour markers */}
                                {[...Array(12)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="absolute"
                                        style={{
                                            width: i % 3 === 0 ? 5 : 2,
                                            height: i % 3 === 0 ? 5 : 2,
                                            borderRadius: "50%",
                                            background: accent,
                                            top: "50%", left: "50%",
                                            transform: `translate(-50%,-50%) rotate(${i * 30}deg) translateY(-84px)`,
                                        }}
                                    />
                                ))}
                                {/* Skeleton gear pattern */}
                                <div
                                    className="absolute inset-6 rounded-full opacity-30"
                                    style={{
                                        background: `repeating-conic-gradient(from 0deg, ${accent}33 0deg, transparent 2deg, transparent 28deg, ${accent}33 30deg)`,
                                    }}
                                />
                                {/* Centre jewel */}
                                <div
                                    className="absolute rounded-full"
                                    style={{
                                        width: 28, height: 28,
                                        top: "50%", left: "50%",
                                        transform: "translate(-50%,-50%)",
                                        background: `radial-gradient(circle, ${accent}, ${accent}55)`,
                                        boxShadow: `0 0 16px ${accent}`,
                                    }}
                                />
                                {/* Hands */}
                                <div
                                    className="absolute rounded-full"
                                    style={{
                                        width: 3, height: 56,
                                        background: "white",
                                        bottom: "50%", left: "50%",
                                        transformOrigin: "bottom center",
                                        transform: "translateX(-50%) rotate(-60deg)",
                                    }}
                                />
                                <div
                                    className="absolute rounded-full"
                                    style={{
                                        width: 2, height: 72,
                                        background: accent,
                                        bottom: "50%", left: "50%",
                                        transformOrigin: "bottom center",
                                        transform: "translateX(-50%) rotate(110deg)",
                                    }}
                                />
                            </div>
                        </motion.div>

                        {/* Movement layer */}
                        <motion.div
                            animate={{ y: activeLayer === 2 ? 12 : 0, scale: activeLayer === 2 ? 1.04 : 1 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute left-1/2 -translate-x-1/2"
                            style={{ top: 262, width: 180, height: 180, cursor: "pointer" }}
                            onClick={() => setActiveLayer(2)}
                        >
                            <div
                                className="absolute inset-0 rounded-full"
                                style={{
                                    background: "radial-gradient(ellipse at 40% 35%, #2a1e0a, #0a0804)",
                                    border: `2px solid ${activeLayer === 2 ? "#E2C98E" : "#E2C98E44"}`,
                                    boxShadow: activeLayer === 2
                                        ? "0 0 40px #E2C98E55, 0 0 80px #E2C98E20"
                                        : "none",
                                    transition: "box-shadow 0.5s",
                                }}
                            >
                                {/* Gear teeth ring */}
                                <div
                                    className="absolute inset-3 rounded-full opacity-40"
                                    style={{
                                        background: `repeating-conic-gradient(from 0deg, #E2C98E22 0deg, transparent 4deg, transparent 26deg, #E2C98E22 30deg)`,
                                    }}
                                />
                                <div
                                    className="absolute rounded-full"
                                    style={{
                                        width: 24, height: 24,
                                        top: "50%", left: "50%",
                                        transform: "translate(-50%,-50%)",
                                        background: "radial-gradient(circle, #E2C98E, #E2C98E55)",
                                        boxShadow: "0 0 12px #E2C98E",
                                    }}
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-[7px] uppercase tracking-[0.15em] text-[#E2C98E]/40 mt-12">Caliber 7A20-S</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Bracelet / strap below */}
                        <motion.div
                            animate={{ y: activeLayer === 4 ? 15 : 0, scale: activeLayer === 4 ? 1.03 : 1 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute left-1/2 -translate-x-1/2"
                            style={{ top: 410, width: 180, height: 80, cursor: "pointer" }}
                            onClick={() => setActiveLayer(4)}
                        >
                            {/* Bracelet links */}
                            {[...Array(5)].map((_, i) => (
                                <div
                                    key={i}
                                    className="absolute rounded-sm transition-all duration-300"
                                    style={{
                                        height: 14,
                                        left: i % 2 === 0 ? "15%" : "30%",
                                        right: i % 2 === 0 ? "30%" : "15%",
                                        top: i * 14,
                                        background: i % 2 === 0
                                            ? "linear-gradient(90deg, #1a1510, #2a2018)"
                                            : `linear-gradient(90deg, ${accent}44, ${accent}22)`,
                                        border: `1px solid ${activeLayer === 4 ? accent : accent + "22"}`,
                                        boxShadow: activeLayer === 4 ? `0 2px 8px ${accent}33` : "none",
                                    }}
                                />
                            ))}
                        </motion.div>

                        {/* Gold divider lines between layers */}
                        {[200, 330].map((top, i) => (
                            <div
                                key={i}
                                className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
                                style={{ top, width: 1, height: 30 + (i * 10) }}
                            >
                                <div className="w-full h-full" style={{ background: `linear-gradient(to bottom, transparent, ${accent}44, transparent)` }} />
                            </div>
                        ))}
                    </div>

                    {/* Right separator */}
                    <div
                        className="hidden lg:block absolute right-0 top-0 bottom-0 w-px"
                        style={{ background: `linear-gradient(to bottom, transparent, ${accent}22, transparent)` }}
                    />
                </div>

                {/* ── RIGHT: Text content ── */}
                <div className="lg:w-1/2 flex flex-col justify-center px-5 sm:px-8 md:px-16 py-10 sm:py-16 lg:py-0">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {/* Eyebrow */}
                        <p
                            className="text-[10px] font-semibold uppercase tracking-[0.5em] mb-6 flex items-center gap-3"
                            style={{ color: `${accent}bb` }}
                        >
                            <span className="inline-block w-8 h-px" style={{ background: accent }} />
                            Design Language
                        </p>

                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter text-white mb-3 leading-[1.0]">
                            Design that<br />
                            <span style={{ color: accent }}>reveals its soul.</span>
                        </h1>

                        <p className="text-white/50 text-sm sm:text-base md:text-lg font-light leading-relaxed mb-8 sm:mb-12 max-w-md">
                            Every surface, curve, and component is intentional. Click a layer to explore how the Ceramic Fusion is constructed, piece by piece.
                        </p>

                        {/* Layer selector cards */}
                        <div className="flex flex-col gap-3 max-w-md">
                            {LAYERS.map((l, i) => (
                                <button
                                    key={l.id}
                                    onClick={() => setActiveLayer(i)}
                                    onMouseEnter={() => setHovered(i)}
                                    onMouseLeave={() => setHovered(null)}
                                    className="flex items-start gap-4 p-4 rounded-2xl text-left transition-all duration-300"
                                    style={{
                                        background: activeLayer === i
                                            ? `linear-gradient(135deg, ${l.color}12, ${l.color}06)`
                                            : hovered === i
                                                ? "rgba(255,255,255,0.03)"
                                                : "transparent",
                                        border: `1px solid ${activeLayer === i ? l.color + "44" : "rgba(255,255,255,0.06)"}`,
                                        transform: activeLayer === i ? "translateX(6px)" : "translateX(0)",
                                    }}
                                >
                                    {/* Dot */}
                                    <div
                                        className="flex-shrink-0 w-2 h-2 rounded-full mt-1.5 transition-all duration-300"
                                        style={{
                                            background: l.color,
                                            boxShadow: activeLayer === i ? `0 0 8px ${l.color}` : "none",
                                        }}
                                    />
                                    <div>
                                        <p className="text-sm font-semibold text-white mb-0.5">{l.label}</p>
                                        <p
                                            className="text-xs leading-relaxed transition-all duration-300"
                                            style={{ color: activeLayer === i ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.3)" }}
                                        >
                                            {l.desc}
                                        </p>
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* Price + CTA */}
                        <div className="flex flex-wrap items-center gap-4 mt-8 sm:mt-12">
                            <div>
                                <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-1">Starting from</p>
                                <p className="text-2xl sm:text-3xl font-bold text-white">₹34,995</p>
                            </div>
                            <Link
                                href="/buy"
                                className="flex items-center gap-2 py-3.5 px-8 rounded-full font-bold uppercase tracking-[0.15em] text-xs text-black transition-all duration-300 hover:-translate-y-0.5 hover:scale-105"
                                style={{
                                    background: `linear-gradient(135deg, ${accent} 0%, #E2C98E 50%, ${accent} 100%)`,
                                    boxShadow: `0 4px 20px ${accent}55`,
                                }}
                            >
                                Buy Now →
                            </Link>
                            <Link
                                href="/specs"
                                className="flex items-center gap-2 py-3.5 px-8 rounded-full font-bold uppercase tracking-[0.15em] text-xs text-white/60 hover:text-white transition-all duration-300"
                                style={{
                                    background: "rgba(255,255,255,0.04)",
                                    border: "1px solid rgba(255,255,255,0.12)",
                                }}
                            >
                                View Specs
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════════════════════
          THREE DESIGN PILLARS
      ══════════════════════════════════ */}
            {/* THREE DESIGN PILLARS */}
            <section
                className="py-16 sm:py-28 border-t"
                style={{ borderColor: `${accent}18`, background: "#080806" }}
            >
                <div className="max-w-6xl mx-auto px-5 sm:px-6">
                    <div className="text-center mb-10 sm:mb-16">
                        <p className="text-[10px] uppercase tracking-[0.5em] mb-4 flex items-center justify-center gap-3" style={{ color: `${accent}88` }}>
                            <span className="w-8 h-px inline-block" style={{ background: accent }} />
                            Philosophy
                            <span className="w-8 h-px inline-block" style={{ background: accent }} />
                        </p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-white">
                            Three pillars of <span style={{ color: accent }}>design.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                num: "01",
                                title: "Material Honesty",
                                body: "Every material is chosen for what it is, not what it looks like. Ceramic for its hardness and lightness. Sapphire for its clarity. Steel for its resilience.",
                                color: "#C8A96A",
                            },
                            {
                                num: "02",
                                title: "Mechanical Transparency",
                                body: "The skeleton dial rejects decoration. It reveals the truth of the movement — gears, balance wheel, escapement — all in full view.",
                                color: "#7EB8D4",
                            },
                            {
                                num: "03",
                                title: "Enduring Form",
                                body: "Round yet structured, slim yet substantial. The proportions are calibrated to remain elegant across decades and on any wrist.",
                                color: "#E2C98E",
                            },
                        ].map((p) => (
                            <motion.div
                                key={p.num}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="group p-5 sm:p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                                style={{
                                    background: "linear-gradient(135deg, rgba(15,12,8,0.8), rgba(8,8,6,0.6))",
                                    border: `1px solid ${p.color}18`,
                                }}
                            >
                                <p className="text-4xl font-bold mb-5 tracking-tighter" style={{ color: `${p.color}44` }}>{p.num}</p>
                                <h3 className="text-lg font-bold text-white mb-3" style={{ color: p.color }}>{p.title}</h3>
                                <p className="text-white/50 text-sm leading-relaxed">{p.body}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
          FOOTER CTA
      ══════════════════════════════════ */}
            <section
                className="relative py-16 sm:py-28 flex flex-col items-center justify-center text-center px-5 sm:px-6 overflow-hidden"
                style={{ borderTop: `1px solid ${accent}12` }}
            >
                <div
                    className="absolute w-[600px] h-[400px] rounded-full blur-[160px] opacity-[0.06] pointer-events-none"
                    style={{ background: accent, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
                />
                <p className="text-[10px] uppercase tracking-[0.5em] mb-6 flex items-center gap-4" style={{ color: `${accent}88` }}>
                    <span className="w-10 h-px inline-block" style={{ background: `${accent}44` }} />
                    Own the Craft
                    <span className="w-10 h-px inline-block" style={{ background: `${accent}44` }} />
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4 sm:mb-5 leading-[0.95]">
                    Design that moves<br />
                    <span style={{ color: accent }}>with you.</span>
                </h2>
                <p className="text-white/40 text-xs md:text-sm tracking-[0.2em] uppercase mb-8 sm:mb-12 max-w-xs sm:max-w-none">
                    Titan Ceramic Fusion Automatic — starting at ₹34,995
                </p>
                <div className="flex flex-col md:flex-row items-center gap-5 w-full max-w-md">
                    <Link
                        href="/buy"
                        className="w-full flex items-center justify-center py-4 px-8 rounded-full font-bold uppercase tracking-[0.2em] text-xs text-black transition-all duration-300 hover:-translate-y-1 hover:scale-105"
                        style={{
                            background: `linear-gradient(135deg, ${accent} 0%, #E2C98E 50%, ${accent} 100%)`,
                            boxShadow: `0 4px 20px ${accent}44`,
                        }}
                    >
                        Buy Now →
                    </Link>
                    <Link
                        href="/"
                        className="w-full flex items-center justify-center py-4 px-8 rounded-full font-bold uppercase tracking-[0.2em] text-xs text-white/60 hover:text-white transition-all duration-300"
                        style={{
                            background: "rgba(255,255,255,0.03)",
                            border: "1px solid rgba(255,255,255,0.10)",
                        }}
                    >
                        ← Back to Story
                    </Link>
                </div>
            </section>
        </main>
    );
}
