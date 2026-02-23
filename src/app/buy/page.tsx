"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/* ── DATA ──────────────────────────────────────────────── */
const VARIANTS = [
    {
        label: "Rose Gold & Black",
        code: "90174KD01",
        accent: "#C8A96A",
        glow: "#C8A96A",
        image: "/images/watch-rose-gold.png",
        price: 34995,
        original: 42000,
    },
    {
        label: "Steel Blue",
        code: "90174KD02",
        accent: "#7EB8D4",
        glow: "#7EB8D4",
        image: "/images/watch-blue.png",
        price: 34995,
        original: 42000,
    },
    {
        label: "Silver",
        code: "90174KD03",
        accent: "#b0bec5",
        glow: "#90a4ae",
        image: "/images/watch-silver.png",
        price: 36995,
        original: 44000,
    },
];

const PERKS = [
    { icon: "🚚", title: "Free Shipping", sub: "Pan India delivery" },
    { icon: "🛡️", title: "2 Year Warranty", sub: "Titan certified" },
    { icon: "↩️", title: "30-Day Returns", sub: "No questions asked" },
    { icon: "📦", title: "Luxury Packaging", sub: "Gift-ready box" },
];

const REVIEWS = [
    { name: "Aryan S.", stars: 5, text: "Absolutely stunning timepiece. The skeleton dial is mesmerising in person. Worth every rupee." },
    { name: "Meera K.", stars: 5, text: "The ceramic bracelet feels premium and the automatic movement winds beautifully. Gift of a lifetime." },
    { name: "Ravi P.", stars: 4, text: "Exceptional quality for the price. Sapphire glass, ceramic links, and that gorgeous blue dial — unbeatable." },
];

/* ── WATCH IMAGE ─────────────────────────────────────────── */
function WatchImage({ variant }: { variant: typeof VARIANTS[0] }) {
    return (
        <div className="relative" style={{ width: "min(80vw, 340px)", height: "min(55vw, 420px)" }}>
            <Image
                src={variant.image}
                alt={`Titan Ceramic Fusion ${variant.label}`}
                fill
                className="object-contain drop-shadow-2xl"
                priority
                sizes="(max-width: 768px) 80vw, 340px"
            />
        </div>
    );
}

/* ── STAR RATING ─────────────────────────────────────────── */
function Stars({ count }: { count: number }) {
    return (
        <span className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <polygon points="7,1 8.8,5.2 13.4,5.6 10,8.6 11,13.2 7,10.6 3,13.2 4,8.6 0.6,5.6 5.2,5.2"
                        fill={i < count ? "#C8A96A" : "rgba(255,255,255,0.15)"} />
                </svg>
            ))}
        </span>
    );
}

/* ── PAGE ────────────────────────────────────────────────── */
export default function BuyPage() {
    const [activeVariant, setActiveVariant] = useState(0);
    const [qty, setQty] = useState(1);
    const [added, setAdded] = useState(false);
    const [wishlist, setWishlist] = useState(false);
    const [tab, setTab] = useState<"desc" | "specs" | "reviews">("desc");

    const v = VARIANTS[activeVariant];
    const ac = v.accent;
    const saved = Math.round(((v.original - v.price) / v.original) * 100);

    function handleAdd() {
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    }

    return (
        <main className="min-h-screen bg-[#050505] text-white">

            {/* ── TOP BAR ── */}
            <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 py-3 sm:py-3.5 border-b border-white/5"
                style={{ background: "rgba(5,5,5,0.9)", backdropFilter: "blur(20px)" }}>
                <Link href="/" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-xs uppercase tracking-[0.2em] group">
                    <span className="group-hover:-translate-x-1 transition-transform inline-block">←</span>
                    <span>Back</span>
                </Link>
                <p className="text-xs uppercase tracking-[0.3em] text-white/40 hidden sm:block">Titan Ceramic Fusion</p>
                <div className="flex items-center gap-3 sm:gap-5 text-[10px] sm:text-[11px] uppercase tracking-widest text-white/40">
                    <span>Free Shipping</span>
                    <span className="hidden md:block">30-Day Returns</span>
                </div>
            </div>

            {/* ── BREADCRUMB ── */}
            <div className="pt-16 sm:pt-20 pb-0 px-4 sm:px-6 md:px-12">
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">
                    <Link href="/" className="hover:text-luxury-gold transition-colors">Home</Link>
                    {" / "}
                    <Link href="/specs" className="hover:text-luxury-gold transition-colors">Collection</Link>
                    {" / "}
                    <span style={{ color: ac }}>Ceramic Fusion Automatic</span>
                </p>
            </div>

            {/* ══════════════════════════════════════════════
          MAIN PRODUCT LAYOUT
      ══════════════════════════════════════════════ */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-6 sm:py-12 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-start">

                {/* ─── LEFT: IMAGE ─── */}
                <div className="sticky top-16 sm:top-24">
                    {/* Product card */}
                    <motion.div
                        className="relative rounded-2xl sm:rounded-3xl overflow-hidden flex items-center justify-center"
                        style={{
                            minHeight: "min(70vw, 480px)",
                            background: "linear-gradient(145deg,#0d0a06,#080604)",
                            border: `1px solid ${ac}22`,
                            boxShadow: `0 0 80px ${ac}10, 0 40px 120px rgba(0,0,0,0.8)`,
                        }}
                    >
                        {/* ambient glow */}
                        <div className="absolute inset-0 pointer-events-none transition-all duration-700"
                            style={{ background: `radial-gradient(ellipse at 50% 50%, ${ac}10 0%, transparent 70%)` }} />

                        <AnimatePresence mode="wait">
                            <motion.div key={activeVariant}
                                initial={{ opacity: 0, scale: 0.88, y: 24 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: -16 }}
                                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                                className="py-6 sm:py-8"
                            >
                                <WatchImage variant={v} />
                            </motion.div>
                        </AnimatePresence>

                        {/* Stock badge */}
                        <div className="absolute bottom-5 left-5 flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/50">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            In Stock — Ships in 24H
                        </div>
                    </motion.div>

                    {/* Thumbnail variant pills */}
                    <div className="flex gap-4 mt-5 justify-center">
                        {VARIANTS.map((vt, i) => (
                            <button key={i} onClick={() => setActiveVariant(i)}
                                className="flex flex-col items-center gap-2 group">
                                <div
                                    className="relative w-12 h-12 rounded-full overflow-hidden transition-all duration-300"
                                    style={{
                                        boxShadow: activeVariant === i
                                            ? `0 0 0 2px #050505, 0 0 0 3px ${vt.accent}, 0 0 14px ${vt.glow}66`
                                            : "0 0 0 1px rgba(255,255,255,0.1)",
                                        transform: activeVariant === i ? "scale(1.18)" : "scale(1)",
                                    }}
                                >
                                    <Image
                                        src={vt.image}
                                        alt={vt.label}
                                        fill
                                        className="object-cover"
                                        sizes="48px"
                                    />
                                </div>
                                <span className={`text-[9px] uppercase tracking-wide transition-colors ${activeVariant === i ? "text-white" : "text-white/30"}`}>
                                    {vt.label}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* ─── RIGHT: PRODUCT INFO ─── */}
                <div className="flex flex-col gap-6 sm:gap-8">

                    {/* Header */}
                    <div>
                        <p className="text-[10px] uppercase tracking-[0.4em] mb-2 sm:mb-3 flex items-center gap-2"
                            style={{ color: `${ac}99` }}>
                            <span className="w-6 h-px inline-block" style={{ background: ac }} />
                            Titan — Ref. {v.code}
                        </p>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-white mb-2 leading-[1.0]">
                            Titan Ceramic<br />Fusion Automatic
                        </h1>
                        <p className="text-white/50 text-sm sm:text-base font-light leading-relaxed">
                            Skeleton dial · Caliber 7A20-S · 22 Jewels · 50m Water Resistant
                        </p>

                        {/* Rating */}
                        <div className="flex items-center gap-3 mt-4">
                            <Stars count={5} />
                            <span className="text-sm text-white/60">4.8 out of 5</span>
                            <span className="text-xs text-white/30">(1,247 reviews)</span>
                        </div>
                    </div>

                    {/* Price */}
                    <div className="flex items-end gap-4 pb-6 border-b border-white/5">
                        <span className="text-4xl font-bold text-white">
                            ₹{v.price.toLocaleString("en-IN")}
                        </span>
                        <span className="text-lg text-white/30 line-through mb-1">
                            ₹{v.original.toLocaleString("en-IN")}
                        </span>
                        <span className="mb-1 px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wide text-black"
                            style={{ background: ac }}>
                            Save {saved}%
                        </span>
                    </div>

                    {/* Color */}
                    <div>
                        <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-3">
                            Colour — <span className="text-white">{v.label}</span>
                        </p>
                        <div className="flex gap-3">
                            {VARIANTS.map((vt, i) => (
                                <button key={i} onClick={() => setActiveVariant(i)}
                                    title={vt.label}
                                    className="relative w-9 h-9 rounded-full overflow-hidden transition-all duration-300"
                                    style={{
                                        boxShadow: activeVariant === i
                                            ? `0 0 0 2px #050505, 0 0 0 3px ${vt.accent}, 0 0 12px ${vt.glow}66`
                                            : "0 0 0 1px rgba(255,255,255,0.12)",
                                        transform: activeVariant === i ? "scale(1.2)" : "scale(1)",
                                    }}
                                >
                                    <Image
                                        src={vt.image}
                                        alt={vt.label}
                                        fill
                                        className="object-cover"
                                        sizes="36px"
                                    />
                                    {activeVariant === i && (
                                        <div className="absolute inset-0 flex items-center justify-center" style={{ background: "rgba(0,0,0,0.35)" }}>
                                            <span className="text-white text-xs font-black">✓</span>
                                        </div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Quantity */}
                    <div>
                        <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-3">Quantity</p>
                        <div className="flex items-center gap-0 w-fit rounded-full overflow-hidden"
                            style={{ border: `1px solid rgba(255,255,255,0.12)` }}>
                            <button onClick={() => setQty(q => Math.max(1, q - 1))}
                                className="w-11 h-11 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/5 transition-all text-lg font-light">
                                −
                            </button>
                            <span className="w-10 text-center text-white font-semibold text-sm">{qty}</span>
                            <button onClick={() => setQty(q => Math.min(5, q + 1))}
                                className="w-11 h-11 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/5 transition-all text-lg font-light">
                                +
                            </button>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <motion.button
                            whileTap={{ scale: 0.97 }}
                            onClick={handleAdd}
                            className="flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-full font-bold uppercase tracking-[0.15em] text-sm text-black transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
                            style={{
                                background: added
                                    ? "#22c55e"
                                    : `linear-gradient(135deg, ${ac} 0%, #E2C98E 50%, ${ac} 100%)`,
                                boxShadow: `0 4px 20px ${ac}44, inset 0 1px 0 rgba(255,255,255,0.2)`,
                            }}
                        >
                            <AnimatePresence mode="wait">
                                {added ? (
                                    <motion.span key="check" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
                                        ✓ Added to Cart
                                    </motion.span>
                                ) : (
                                    <motion.span key="add" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                        Add to Cart — ₹{(v.price * qty).toLocaleString("en-IN")}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </motion.button>

                        <button
                            onClick={() => setWishlist(w => !w)}
                            className="flex items-center justify-center gap-2 py-4 px-7 rounded-full font-bold uppercase tracking-[0.15em] text-sm transition-all duration-300 hover:-translate-y-0.5"
                            style={{
                                background: wishlist ? `${ac}18` : "rgba(255,255,255,0.04)",
                                border: `1px solid ${wishlist ? ac : "rgba(255,255,255,0.12)"}`,
                                color: wishlist ? ac : "rgba(255,255,255,0.7)",
                            }}
                        >
                            {wishlist ? "♥" : "♡"} Wishlist
                        </button>
                    </div>

                    {/* Buy Direct CTA */}
                    <a
                        href="https://www.titan.co.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 py-4 px-6 rounded-full font-bold uppercase tracking-[0.15em] text-sm text-white/70 hover:text-white border border-white/8 hover:border-white/20 transition-all duration-300 hover:-translate-y-0.5"
                        style={{ background: "rgba(255,255,255,0.02)" }}
                    >
                        Buy from Titan.co.in ↗
                    </a>

                    {/* Perks strip */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
                        {PERKS.map((p) => (
                            <div key={p.title}
                                className="flex flex-col items-center text-center p-3 sm:p-4 rounded-xl"
                                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                                <span className="text-lg sm:text-xl mb-1 sm:mb-1.5">{p.icon}</span>
                                <span className="text-[10px] sm:text-[11px] font-semibold text-white/80 uppercase tracking-wide">{p.title}</span>
                                <span className="text-[9px] sm:text-[10px] text-white/30 mt-0.5">{p.sub}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════
          TABS: Description / Specs / Reviews
      ══════════════════════════════════════════════ */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-10 sm:py-16 border-t border-white/5">

                {/* Tab buttons */}
                <div className="flex gap-1 mb-12 p-1 rounded-full w-fit"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    {(["desc", "specs", "reviews"] as const).map((t) => (
                        <button key={t} onClick={() => setTab(t)}
                            className="px-7 py-2.5 rounded-full text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300"
                            style={{
                                background: tab === t ? ac : "transparent",
                                color: tab === t ? "#000" : "rgba(255,255,255,0.5)",
                            }}
                        >
                            {t === "desc" ? "Description" : t === "specs" ? "Specifications" : "Reviews"}
                        </button>
                    ))}
                </div>

                <AnimatePresence mode="wait">

                    {/* DESCRIPTION */}
                    {tab === "desc" && (
                        <motion.div key="desc"
                            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.35 }}
                            className="grid md:grid-cols-2 gap-12"
                        >
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-white mb-5">
                                    Time, laid bare<br />
                                    <span style={{ color: ac }}>in every detail.</span>
                                </h2>
                                <div className="space-y-4 text-white/55 text-base leading-relaxed">
                                    <p>The Titan Ceramic Fusion Automatic is a symphony of mechanical artistry and modern material science. Through its open skeleton dial, the precisely regulated Caliber 7A20-S movement is fully visible — gears, escapement, and balance wheel, all in harmonious motion.</p>
                                    <p>The bracelet alternates between polished stainless steel and smooth black ceramic links — a contrast of warmth and strength secured by a precision butterfly clasp. Scratch-resistant sapphire glass with anti-reflective coating keeps the view flawless from every angle.</p>
                                    <p>The 36-hour power reserve and 22-jewel movement ensure unwavering accuracy across every day, wound silently by the arc of your own wrist.</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                {[
                                    ["In-house Caliber 7A20-S", "Titan's own automatic movement, assembled in India with Swiss-grade precision tolerances."],
                                    ["Ceramic Fusion Bracelet", "Alternating steel and ceramic centre links for a dual-toned look that resists scratches and skin irritation."],
                                    ["Open-heart Skeleton Dial", "Exhibition-style architecture revealing the gear train, balance wheel, and tourbillon cage."],
                                    ["Sapphire Crystal", "Multi-layer anti-reflective coating on both sides for glare-free visibility in all lighting."],
                                ].map(([title, body]) => (
                                    <div key={title} className="p-5 rounded-2xl"
                                        style={{ background: "rgba(255,255,255,0.02)", border: `1px solid ${ac}18` }}>
                                        <p className="text-sm font-bold text-white mb-1.5" style={{ color: ac }}>{title}</p>
                                        <p className="text-white/50 text-sm leading-relaxed">{body}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* SPECIFICATIONS */}
                    {tab === "specs" && (
                        <motion.div key="specs"
                            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.35 }}
                            className="max-w-2xl"
                        >
                            <div className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${ac}18` }}>
                                {[
                                    ["Brand", "Titan"],
                                    ["Model", "Ceramic Fusion Automatic"],
                                    ["Reference", v.code],
                                    ["Movement", "Caliber 7A20-S Automatic"],
                                    ["Jewels", "22 Jewels"],
                                    ["Power Reserve", "36 Hours"],
                                    ["Accuracy", "−10 / +30 sec / day"],
                                    ["Case Material", "Stainless Steel"],
                                    ["Case Dimensions", "48.0 × 42.2 × 13.4 mm"],
                                    ["Crystal", "Anti-Reflective Sapphire"],
                                    ["Dial", "Blue Open-Heart Skeleton"],
                                    ["Bracelet", "Stainless Steel + Ceramic Links"],
                                    ["Clasp", "Butterfly Deployment"],
                                    ["Strap Width", "22 mm"],
                                    ["Water Resistance", "50 m / 5 ATM"],
                                    ["Colour Variant", v.label],
                                ].map(([label, value], i, arr) => (
                                    <div key={label}
                                        className={`flex items-center justify-between px-7 py-4 hover:bg-white/[0.015] transition-colors ${i !== arr.length - 1 ? "border-b" : ""}`}
                                        style={{ borderColor: `${ac}12` }}>
                                        <span className="text-xs uppercase tracking-[0.2em] text-white/40">{label}</span>
                                        <span className="text-sm font-medium text-white/90">{value}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* REVIEWS */}
                    {tab === "reviews" && (
                        <motion.div key="reviews"
                            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.35 }}
                        >
                            {/* Rating summary */}
                            <div className="flex items-center gap-6 mb-10 p-6 rounded-2xl w-fit"
                                style={{ background: "rgba(255,255,255,0.02)", border: `1px solid ${ac}18` }}>
                                <div className="text-center">
                                    <p className="text-5xl font-bold text-white">4.8</p>
                                    <Stars count={5} />
                                    <p className="text-xs text-white/30 mt-1">1,247 reviews</p>
                                </div>
                                <div className="space-y-1.5 min-w-[180px]">
                                    {[5, 4, 3, 2, 1].map((s) => (
                                        <div key={s} className="flex items-center gap-2">
                                            <span className="text-[11px] text-white/40 w-3">{s}</span>
                                            <div className="flex-1 h-1.5 rounded-full overflow-hidden bg-white/5">
                                                <div className="h-full rounded-full transition-all"
                                                    style={{ width: s === 5 ? "78%" : s === 4 ? "15%" : s === 3 ? "5%" : "1%", background: ac }} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="grid md:grid-cols-3 gap-5">
                                {REVIEWS.map((r) => (
                                    <div key={r.name} className="p-6 rounded-2xl"
                                        style={{ background: "rgba(255,255,255,0.02)", border: `1px solid ${ac}15` }}>
                                        <Stars count={r.stars} />
                                        <p className="text-white/70 text-sm leading-relaxed mt-3 mb-5 italic">"{r.text}"</p>
                                        <p className="text-xs uppercase tracking-widest text-white/40">— {r.name}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>

            {/* ── STICKY BOTTOM BAR (mobile) ── */}
            <div className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between gap-3 px-4 py-3 md:hidden"
                style={{ background: "rgba(5,5,5,0.97)", backdropFilter: "blur(20px)", borderTop: `1px solid ${ac}20` }}>
                <div className="pl-10">
                    <p className="text-xs text-white/40 uppercase tracking-widest">Price</p>
                    <p className="text-lg font-bold text-white">₹{v.price.toLocaleString("en-IN")}</p>
                </div>
                <button onClick={handleAdd}
                    className="flex-1 py-3.5 rounded-full font-bold uppercase tracking-[0.15em] text-sm text-black transition-all"
                    style={{ background: `linear-gradient(135deg, ${ac}, #E2C98E, ${ac})`, boxShadow: `0 4px 16px ${ac}44` }}>
                    {added ? "✓ Added!" : "Add to Cart"}
                </button>
            </div>
            <div className="h-24 md:hidden" />
        </main>
    );
}
