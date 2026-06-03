"use client";

import { motion } from "framer-motion";
import { SCREWS } from "@/constants/watchData";
import Screw from "./Screw";

interface ExplodedWatchViewProps {
    activeLayer: number;
    setActiveLayer: (layer: number) => void;
    accent: string;
}

export default function ExplodedWatchView({ activeLayer, setActiveLayer, accent }: ExplodedWatchViewProps) {
    return (
        <div className="relative lg:w-1/2 flex items-center justify-center bg-[#080806] overflow-hidden" style={{ minHeight: "clamp(320px, 80vw, 100vh)" }}>

            {/* Background glow */}
            <div
                className="absolute w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] rounded-full pointer-events-none transition-all duration-700"
                style={{
                    background: accent,
                    opacity: 0.055,
                    filter: "blur(120px)",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                }}
            />

            {/* Exploded SVG illustration */}
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
                    className="absolute left-1/2 -translate-x-1/2 rounded-[40px] flex items-center justify-center cursor-pointer"
                    style={{
                        top: 30,
                        width: 200,
                        height: 56,
                        background: "linear-gradient(135deg, rgba(126,184,212,0.25) 0%, rgba(180,220,240,0.08) 100%)",
                        border: "1px solid rgba(126,184,212,0.4)",
                        backdropFilter: "blur(8px)",
                        boxShadow: activeLayer === 0
                            ? "0 0 30px rgba(126,184,212,0.4), 0 0 60px rgba(126,184,212,0.15)"
                            : "0 4px 20px rgba(0,0,0,0.5)",
                    }}
                    onClick={() => setActiveLayer(0)}
                >
                    <span className="text-[9px] uppercase tracking-[0.25em] text-[#7EB8D4]/80 select-none">Sapphire Crystal</span>
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
                                    top: "50%",
                                    left: "50%",
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
                                width: 28,
                                height: 28,
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%,-50%)",
                                background: `radial-gradient(circle, ${accent}, ${accent}55)`,
                                boxShadow: `0 0 16px ${accent}`,
                            }}
                        />
                        {/* Hands */}
                        <div
                            className="absolute rounded-full"
                            style={{
                                width: 3,
                                height: 56,
                                background: "white",
                                bottom: "50%",
                                left: "50%",
                                transformOrigin: "bottom center",
                                transform: "translateX(-50%) rotate(-60deg)",
                            }}
                        />
                        <div
                            className="absolute rounded-full"
                            style={{
                                width: 2,
                                height: 72,
                                background: accent,
                                bottom: "50%",
                                left: "50%",
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
                                width: 24,
                                height: 24,
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%,-50%)",
                                background: "radial-gradient(circle, #E2C98E, #E2C98E55)",
                                boxShadow: "0 0 12px #E2C98E",
                            }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-[7px] uppercase tracking-[0.15em] text-[#E2C98E]/40 mt-12 select-none">Caliber 7A20-S</span>
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
    );
}
