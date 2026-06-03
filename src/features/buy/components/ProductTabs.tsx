"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StarRating from "@/components/ui/StarRating";
import { REVIEWS, DETAILS } from "@/constants/watchData";

interface ProductTabsProps {
    accentColor: string;
    variantCode: string;
    variantLabel: string;
}

export default function ProductTabs({ accentColor, variantCode, variantLabel }: ProductTabsProps) {
    const [tab, setTab] = useState<"desc" | "specs" | "reviews">("desc");

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-10 sm:py-16 border-t border-white/5">

            {/* Tab buttons */}
            <div
                className="flex gap-1 mb-12 p-1 rounded-full w-fit"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
                {(["desc", "specs", "reviews"] as const).map((t) => (
                    <button
                        key={t}
                        onClick={() => setTab(t)}
                        className="px-7 py-2.5 rounded-full text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 cursor-pointer"
                        style={{
                            background: tab === t ? accentColor : "transparent",
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
                    <motion.div
                        key="desc"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.35 }}
                        className="grid md:grid-cols-2 gap-12"
                    >
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-white mb-5">
                                Time, laid bare<br />
                                <span style={{ color: accentColor }}>in every detail.</span>
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
                                <div
                                    key={title}
                                    className="p-5 rounded-2xl"
                                    style={{ background: "rgba(255,255,255,0.02)", border: `1px solid ${accentColor}18` }}
                                >
                                    <p className="text-sm font-bold text-white mb-1.5" style={{ color: accentColor }}>{title}</p>
                                    <p className="text-white/50 text-sm leading-relaxed">{body}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* SPECIFICATIONS */}
                {tab === "specs" && (
                    <motion.div
                        key="specs"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.35 }}
                        className="max-w-2xl"
                    >
                        <div className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${accentColor}18` }}>
                            {DETAILS.map((d, i, arr) => {
                                // Dynamic code/label for current active variant
                                let displayValue = d.value;
                                if (d.label === "Reference") displayValue = variantCode;
                                if (d.label === "Colour Variant") displayValue = variantLabel;

                                return (
                                    <div
                                        key={d.label}
                                        className={`flex items-center justify-between px-7 py-4 hover:bg-white/[0.015] transition-colors ${i !== arr.length - 1 ? "border-b" : ""}`}
                                        style={{ borderColor: `${accentColor}12` }}
                                    >
                                        <span className="text-xs uppercase tracking-[0.2em] text-white/40">{d.label}</span>
                                        <span className="text-sm font-medium text-white/90">{displayValue}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                )}

                {/* REVIEWS */}
                {tab === "reviews" && (
                    <motion.div
                        key="reviews"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.35 }}
                    >
                        {/* Rating summary */}
                        <div
                            className="flex items-center gap-6 mb-10 p-6 rounded-2xl w-fit"
                            style={{ background: "rgba(255,255,255,0.02)", border: `1px solid ${accentColor}18` }}
                        >
                            <div className="text-center">
                                <p className="text-5xl font-bold text-white">4.8</p>
                                <StarRating count={5} />
                                <p className="text-xs text-white/30 mt-1">1,247 reviews</p>
                            </div>
                            <div className="space-y-1.5 min-w-[180px]">
                                {[5, 4, 3, 2, 1].map((s) => (
                                    <div key={s} className="flex items-center gap-2">
                                        <span className="text-[11px] text-white/40 w-3">{s}</span>
                                        <div className="flex-1 h-1.5 rounded-full overflow-hidden bg-white/5">
                                            <div
                                                className="h-full rounded-full transition-all"
                                                style={{
                                                    width: s === 5 ? "78%" : s === 4 ? "15%" : s === 3 ? "5%" : "1%",
                                                    background: accentColor,
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-5">
                            {REVIEWS.map((r) => (
                                <div
                                    key={r.name}
                                    className="p-6 rounded-2xl"
                                    style={{ background: "rgba(255,255,255,0.02)", border: `1px solid ${accentColor}15` }}
                                >
                                    <StarRating count={r.stars} />
                                    <p className="text-white/70 text-sm leading-relaxed mt-3 mb-5 italic">
                                        &ldquo;{r.text}&rdquo;
                                    </p>
                                    <p className="text-xs uppercase tracking-widest text-white/40">— {r.name}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
