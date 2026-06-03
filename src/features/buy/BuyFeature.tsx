"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { VARIANTS, PERKS } from "@/constants/watchData";
import StarRating from "@/components/ui/StarRating";
import WatchImage from "./components/WatchImage";
import ProductTabs from "./components/ProductTabs";

export default function BuyFeature() {
    const [activeVariant, setActiveVariant] = useState(0);
    const [qty, setQty] = useState(1);
    const [added, setAdded] = useState(false);
    const [wishlist, setWishlist] = useState(false);

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
                        <div
                            className="absolute inset-0 pointer-events-none transition-all duration-700"
                            style={{ background: `radial-gradient(ellipse at 50% 50%, ${ac}10 0%, transparent 70%)` }}
                        />

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeVariant}
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
                            <button
                                key={i}
                                onClick={() => setActiveVariant(i)}
                                className="flex flex-col items-center gap-2 group cursor-pointer"
                            >
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
                        <p
                            className="text-[10px] uppercase tracking-[0.4em] mb-2 sm:mb-3 flex items-center gap-2"
                            style={{ color: `${ac}99` }}
                        >
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
                            <StarRating count={5} />
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
                        <span
                            className="mb-1 px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wide text-black"
                            style={{ background: ac }}
                        >
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
                                <button
                                    key={i}
                                    onClick={() => setActiveVariant(i)}
                                    title={vt.label}
                                    className="relative w-9 h-9 rounded-full overflow-hidden transition-all duration-300 cursor-pointer"
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
                        <div
                            className="flex items-center gap-0 w-fit rounded-full overflow-hidden"
                            style={{ border: `1px solid rgba(255,255,255,0.12)` }}
                        >
                            <button
                                onClick={() => setQty(q => Math.max(1, q - 1))}
                                className="w-11 h-11 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/5 transition-all text-lg font-light cursor-pointer"
                            >
                                −
                            </button>
                            <span className="w-10 text-center text-white font-semibold text-sm">{qty}</span>
                            <button
                                onClick={() => setQty(q => Math.min(5, q + 1))}
                                className="w-11 h-11 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/5 transition-all text-lg font-light cursor-pointer"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <motion.button
                            whileTap={{ scale: 0.97 }}
                            onClick={handleAdd}
                            className="flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-full font-bold uppercase tracking-[0.15em] text-sm text-black transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 cursor-pointer"
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
                            className="flex items-center justify-center gap-2 py-4 px-7 rounded-full font-bold uppercase tracking-[0.15em] text-sm transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
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
                            <div
                                key={p.title}
                                className="flex flex-col items-center text-center p-3 sm:p-4 rounded-xl"
                                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
                            >
                                <span className="text-lg sm:text-xl mb-1 sm:mb-1.5">{p.icon}</span>
                                <span className="text-[10px] sm:text-[11px] font-semibold text-white/80 uppercase tracking-wide">{p.title}</span>
                                <span className="text-[9px] sm:text-[10px] text-white/30 mt-0.5">{p.sub}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product description / spec / reviews tabs */}
            <ProductTabs
                accentColor={ac}
                variantCode={v.code}
                variantLabel={v.label}
            />

            {/* ── STICKY BOTTOM BAR (mobile) ── */}
            <div
                className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between gap-3 px-4 py-3 md:hidden"
                style={{ background: "rgba(5,5,5,0.97)", backdropFilter: "blur(20px)", borderTop: `1px solid ${ac}20` }}
            >
                <div className="pl-10">
                    <p className="text-xs text-white/40 uppercase tracking-widest">Price</p>
                    <p className="text-lg font-bold text-white">₹{v.price.toLocaleString("en-IN")}</p>
                </div>
                <button
                    onClick={handleAdd}
                    className="flex-1 py-3.5 rounded-full font-bold uppercase tracking-[0.15em] text-sm text-black transition-all cursor-pointer"
                    style={{ background: `linear-gradient(135deg, ${ac}, #E2C98E, ${ac})`, boxShadow: `0 4px 16px ${ac}44` }}
                >
                    {added ? "✓ Added!" : "Add to Cart"}
                </button>
            </div>
            <div className="h-24 md:hidden" />
        </main>
    );
}
