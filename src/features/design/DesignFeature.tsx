"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { LAYERS } from "@/constants/watchData";
import ExplodedWatchView from "./components/ExplodedWatchView";

export default function DesignFeature() {
    const [activeLayer, setActiveLayer] = useState(1);
    const [hovered, setHovered] = useState<number | null>(null);
    const accent = "#C8A96A";

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
                <ExplodedWatchView
                    activeLayer={activeLayer}
                    setActiveLayer={setActiveLayer}
                    accent={accent}
                />

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
                                    className="flex items-start gap-4 p-4 rounded-2xl text-left transition-all duration-300 cursor-pointer"
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

            {/* ─── THREE DESIGN PILLARS ─── */}
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

            {/* ─── FOOTER CTA ─── */}
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
