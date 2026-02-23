"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const VARIANTS = [
    { label: "Rose Gold", accent: "#C8A96A", image: "/images/watch-rose-gold.png", glow: "#C8A96A" },
    { label: "Silver", accent: "#b0bec5", image: "/images/watch-silver.png", glow: "#90a4ae" },
    { label: "Steel Blue", accent: "#7EB8D4", image: "/images/watch-blue.png", glow: "#7EB8D4" },
];

const SPECS = [
    { value: "42.2 mm", label: "Case Width", sub: "Diameter" },
    { value: "13.4 mm", label: "Thickness", sub: "Slim Profile" },
    { value: "22 mm", label: "Strap Width", sub: "Lug Width" },
    { value: "22J", label: "Jewels", sub: "Movement" },
    { value: "36H", label: "Power Reserve", sub: "Auto Wind" },
    { value: "50M", label: "Water Resist.", sub: "ATM5" },
];

const FEATURES = [
    {
        icon: "⚙️",
        title: "In-House Caliber 7A20-S",
        desc: "Titan's own automatic movement — 22 jewels, 36-hour power reserve, regulated ±10/30 s/day.",
    },
    {
        icon: "🔷",
        title: "Ceramic Fusion Bracelet",
        desc: "Alternating solid stainless steel and ceramic center links with a butterfly deployment clasp.",
    },
    {
        icon: "👁",
        title: "Skeleton Exhibition Dial",
        desc: "Open-heart architecture exposing the gear train, balance wheel, and escapement at full depth.",
    },
    {
        icon: "💧",
        title: "50 m Water Resistance",
        desc: "Sealed crown and case back for everyday water exposure, swimming, and light submersion.",
    },
    {
        icon: "🌀",
        title: "Self-Winding Rotor",
        desc: "22-karat gold-tone oscillating weight harvests kinetic energy from every wrist movement.",
    },
    {
        icon: "🪞",
        title: "Anti-Reflective Sapphire",
        desc: "Scratch-hardened sapphire crystal with multi-layer anti-reflective coating on both sides.",
    },
];

const DETAILS = [
    { label: "Brand", value: "Titan" },
    { label: "Model", value: "Ceramic Fusion Automatic" },
    { label: "Reference", value: "90174KD02" },
    { label: "Movement", value: "Caliber 7A20-S Automatic" },
    { label: "Case Material", value: "Stainless Steel" },
    { label: "Case Shape", value: "Round" },
    { label: "Case Dimensions", value: "48.0 × 42.2 × 13.4 mm" },
    { label: "Crystal", value: "Anti-Reflective Sapphire Glass" },
    { label: "Dial Color", value: "Blue Skeleton" },
    { label: "Bracelet", value: "Stainless Steel + Ceramic Links" },
    { label: "Clasp", value: "Butterfly Deployment" },
    { label: "Water Resistance", value: "50 m / 5 ATM" },
    { label: "Jewels", value: "22 Jewels" },
    { label: "Power Reserve", value: "36 Hours" },
    { label: "Accuracy", value: "−10 / +30 sec / day" },
    { label: "Strap Width", value: "22 mm" },
];

export default function SpecsPage() {
    const [activeVariant, setActiveVariant] = useState(0);

    const accent = VARIANTS[activeVariant].accent;

    return (
        <main className="min-h-screen bg-[#050505] text-white">

            {/* ── BACK NAV ── */}
            <div className="fixed top-4 left-4 sm:top-5 sm:left-6 z-50">
                <Link
                    href="/"
                    className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-xs uppercase tracking-widest group"
                >
                    <span className="inline-block transform group-hover:-translate-x-1 transition-transform">←</span>
                    Back
                </Link>
            </div>

            {/* ══════════════════════════════════════════════
          HERO — split layout
      ══════════════════════════════════════════════ */}
            <section className="relative flex flex-col lg:flex-row overflow-hidden pt-12 sm:pt-0">

                {/* Left — product image */}
                <div className="relative lg:w-1/2 flex items-center justify-center min-h-[50vw] sm:min-h-[60vh] lg:min-h-screen bg-[#080806] overflow-hidden">
                    {/* Ambient glow — color-matched to the selected variant */}
                    <div
                        className="absolute w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full blur-[120px] sm:blur-[180px] pointer-events-none transition-all duration-700"
                        style={{ background: VARIANTS[activeVariant].glow, opacity: 0.13, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
                    />

                    {/* Real watch photo */}
                    <motion.div
                        key={activeVariant}
                        initial={{ opacity: 0, scale: 0.88, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                        className="relative z-10"
                        style={{ width: "min(85vw, 380px)", height: "min(55vw, 460px)" }}
                    >
                        <Image
                            src={VARIANTS[activeVariant].image}
                            alt={`Titan Ceramic Fusion ${VARIANTS[activeVariant].label}`}
                            fill
                            className="object-contain drop-shadow-2xl"
                            priority
                            sizes="(max-width: 768px) 85vw, 380px"
                        />
                    </motion.div>

                    {/* Separator */}
                    <div
                        className="hidden lg:block absolute right-0 top-0 bottom-0 w-px"
                        style={{ background: `linear-gradient(to bottom, transparent, ${accent}33, transparent)` }}
                    />
                </div>

                {/* Right — product info */}
                <div className="lg:w-1/2 flex flex-col justify-center px-5 sm:px-8 md:px-16 py-10 sm:py-12 lg:py-0">

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
                            Technical Specifications
                        </p>

                        {/* Title */}
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter text-white mb-3 leading-[1.05]">
                            Every Detail,<br />
                            <span style={{ color: accent }}>Engineered.</span>
                        </h1>

                        <p className="text-white/50 text-sm sm:text-base md:text-lg font-light leading-relaxed mb-7 sm:mb-10 max-w-md">
                            From the 22-jewel Caliber 7A20-S movement to the sapphire-fused ceramic bracelet,
                            every specification is crafted for enduring precision.
                        </p>

                        {/* Color Selector */}
                        <div className="mb-7 sm:mb-10">
                            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-3 sm:mb-4">Colour Variant</p>
                            <div className="flex items-center gap-4">
                                {VARIANTS.map((v, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setActiveVariant(i)}
                                        className="flex flex-col items-center gap-2 group"
                                    >
                                        <div
                                            className="relative w-9 h-9 rounded-full overflow-hidden transition-all duration-300 border-2"
                                            style={{
                                                borderColor: activeVariant === i ? v.accent : "transparent",
                                                boxShadow: activeVariant === i
                                                    ? `0 0 0 2px #050505, 0 0 0 4px ${v.accent}, 0 0 16px ${v.glow}66`
                                                    : "0 0 0 1px rgba(255,255,255,0.1)",
                                                transform: activeVariant === i ? "scale(1.18)" : "scale(1)",
                                            }}
                                        >
                                            <Image
                                                src={v.image}
                                                alt={v.label}
                                                fill
                                                className="object-cover"
                                                sizes="36px"
                                            />
                                        </div>
                                        <span className={`text-[10px] uppercase tracking-wide transition-colors ${activeVariant === i ? "text-white" : "text-white/30"}`}>
                                            {v.label}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Price + CTA */}
                        <div className="flex flex-wrap items-center gap-4 mb-8 sm:mb-12">
                            <div>
                                <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-1">Price</p>
                                <p className="text-3xl font-bold text-white">₹34,995</p>
                            </div>
                            <div className="flex gap-3">
                                <a
                                    href="https://www.titan.co.in"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 py-3.5 px-7 rounded-full font-bold uppercase tracking-[0.15em] text-xs text-black transition-all duration-300 hover:-translate-y-0.5 hover:scale-105"
                                    style={{
                                        background: `linear-gradient(135deg, ${accent} 0%, #E2C98E 50%, ${accent} 100%)`,
                                        boxShadow: `0 4px 20px ${accent}55`,
                                    }}
                                >
                                    Buy Now
                                </a>
                                <button
                                    className="flex items-center gap-2 py-3.5 px-7 rounded-full font-bold uppercase tracking-[0.15em] text-xs text-white/70 hover:text-white transition-all duration-300 hover:-translate-y-0.5"
                                    style={{
                                        background: "rgba(255,255,255,0.04)",
                                        border: "1px solid rgba(255,255,255,0.12)",
                                    }}
                                >
                                    Wishlist ♡
                                </button>
                            </div>
                        </div>

                        {/* Quick stat strip */}
                        <div
                            className="grid grid-cols-3 gap-px rounded-xl sm:rounded-2xl overflow-hidden"
                            style={{ background: `${accent}15`, border: `1px solid ${accent}20` }}
                        >
                            {SPECS.slice(0, 3).map((s) => (
                                <div key={s.label} className="flex flex-col items-center py-3 sm:py-5 px-2 sm:px-3 text-center bg-[#050505]/70">
                                    <span className="text-base sm:text-xl font-bold mb-0.5" style={{ color: accent }}>{s.value}</span>
                                    <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-white/60">{s.label}</span>
                                    <span className="text-[8px] sm:text-[9px] text-white/30">{s.sub}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════
          FULL SPEC BAR (like the reference screenshot)
      ══════════════════════════════════════════════ */}
            <section
                className="w-full py-16 border-y"
                style={{ borderColor: `${accent}18`, background: "#080806" }}
            >
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x"
                        style={{ borderColor: `${accent}15` }}>
                        {SPECS.map((s) => (
                            <div key={s.label} className="flex flex-col items-center text-center py-4 md:py-0">
                                <span
                                    className="text-3xl md:text-4xl font-bold tracking-tighter mb-1"
                                    style={{ color: accent }}
                                >
                                    {s.value}
                                </span>
                                <span className="text-xs uppercase tracking-widest text-white/70">{s.label}</span>
                                <span className="text-[10px] text-white/30 mt-0.5">{s.sub}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════
          FEATURES GRID
      ══════════════════════════════════════════════ */}
            <section className="max-w-6xl mx-auto px-6 py-28">
                <div className="text-center mb-16">
                    <p className="text-[10px] uppercase tracking-[0.5em] mb-4 flex items-center justify-center gap-3"
                        style={{ color: `${accent}99` }}>
                        <span className="w-8 h-px inline-block" style={{ background: accent }} />
                        Craftsmanship
                        <span className="w-8 h-px inline-block" style={{ background: accent }} />
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
                        Precision in <span style={{ color: accent }}>every layer.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {FEATURES.map((f, i) => (
                        <motion.div
                            key={f.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.07 }}
                            className="group rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
                            style={{
                                background: "linear-gradient(135deg, rgba(15,12,8,0.7), rgba(8,8,6,0.5))",
                                border: `1px solid rgba(200,169,106,0.1)`,
                                boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
                            }}
                            onMouseEnter={e => {
                                (e.currentTarget as HTMLDivElement).style.borderColor = `${accent}44`;
                                (e.currentTarget as HTMLDivElement).style.boxShadow = `0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px ${accent}22`;
                            }}
                            onMouseLeave={e => {
                                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(200,169,106,0.1)";
                                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 24px rgba(0,0,0,0.3)";
                            }}
                        >
                            <div className="text-3xl mb-4">{f.icon}</div>
                            <h3 className="text-base font-bold text-white mb-2 tracking-tight">{f.title}</h3>
                            <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ══════════════════════════════════════════════
          FULL DETAILS TABLE
      ══════════════════════════════════════════════ */}
            <section
                className="py-24"
                style={{ background: "#080806", borderTop: `1px solid ${accent}15` }}
            >
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-14">
                        <p className="text-[10px] uppercase tracking-[0.5em] mb-4"
                            style={{ color: `${accent}99` }}>
                            Complete Specifications
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white">
                            Model <span style={{ color: accent }}>90174KD02</span>
                        </h2>
                    </div>

                    <div className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${accent}18` }}>
                        {DETAILS.map((d, i) => (
                            <div
                                key={d.label}
                                className={`flex items-center justify-between px-7 py-4 transition-colors duration-200 hover:bg-white/[0.02] ${i !== DETAILS.length - 1 ? "border-b" : ""}`}
                                style={{ borderColor: `${accent}12` }}
                            >
                                <span className="text-xs uppercase tracking-[0.2em] text-white/40">{d.label}</span>
                                <span className="text-sm font-medium text-white/90">{d.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════
          FOOTER CTA
      ══════════════════════════════════════════════ */}
            <section
                className="relative w-full py-32 flex flex-col items-center justify-center text-center px-6 overflow-hidden"
                style={{ borderTop: `1px solid ${accent}12` }}
            >
                <div
                    className="absolute w-[600px] h-[400px] rounded-full blur-[160px] opacity-[0.06] pointer-events-none"
                    style={{ background: accent, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
                />
                <p className="text-[10px] uppercase tracking-[0.5em] mb-6 flex items-center gap-4"
                    style={{ color: `${accent}88` }}>
                    <span className="w-10 h-px inline-block" style={{ background: `${accent}44` }} />
                    Ready to Own It
                    <span className="w-10 h-px inline-block" style={{ background: `${accent}44` }} />
                </p>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-5">
                    Timeless. Powerful.<br />
                    <span style={{ color: accent }}>Distinct.</span>
                </h2>
                <p className="text-white/40 text-base tracking-widest uppercase mb-12">
                    Titan Automatic — engineered to move with you.
                </p>
                <div className="flex flex-col md:flex-row items-center gap-5 w-full max-w-lg">
                    <a
                        href="https://www.titan.co.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center py-5 px-10 rounded-full font-bold uppercase tracking-[0.2em] text-sm text-black transition-all duration-300 hover:-translate-y-1 hover:scale-105"
                        style={{
                            background: `linear-gradient(135deg, ${accent} 0%, #E2C98E 50%, ${accent} 100%)`,
                            boxShadow: `0 4px 24px ${accent}44, inset 0 1px 0 rgba(255,255,255,0.25)`,
                        }}
                    >
                        Buy from Titan ↗
                    </a>
                    <Link
                        href="/"
                        className="w-full flex items-center justify-center py-5 px-10 rounded-full font-bold uppercase tracking-[0.2em] text-sm text-white/60 hover:text-white transition-all duration-300 hover:-translate-y-1"
                        style={{
                            background: "rgba(255,255,255,0.03)",
                            border: "1px solid rgba(255,255,255,0.1)",
                        }}
                    >
                        ← Back to Story
                    </Link>
                </div>
            </section>
        </main>
    );
}
