"use client";

import { useState } from "react";
import {
    motion,
    useScroll,
    useMotionValueEvent,
    AnimatePresence,
} from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Overview", href: "#overview" },
    { name: "Design",   href: "/design" },
    { name: "Specs",    href: "/specs" },
    { name: "Collection", href: "/specs" },
];

/* ── Individual nav link with gold sweep hover ── */
function NavLink({ link }: { link: typeof navLinks[number] }) {
    const [hovered, setHovered] = useState(false);

    return (
        <Link
            href={link.href}
            className="relative flex flex-col items-center group"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Label */}
            <span
                className="text-[12px] font-bold uppercase tracking-[0.15em] transition-all duration-300"
                style={{
                    fontFamily: "var(--font-plus-jakarta)",
                    color: hovered ? "#ffffff" : "rgba(255,255,255,0.5)",
                    textShadow: hovered ? "0 0 20px rgba(200,169,106,0.6)" : "none",
                }}
            >
                {link.name}
            </span>

            {/* Animated gold underline */}
            <motion.span
                className="absolute -bottom-1 left-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, #C8A96A, transparent)" }}
                initial={{ width: "0%", opacity: 0 }}
                animate={{ width: hovered ? "100%" : "0%", opacity: hovered ? 1 : 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            />

            {/* Subtle glow blob on hover */}
            <AnimatePresence>
                {hovered && (
                    <motion.span
                        className="absolute -inset-2 rounded-lg pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        style={{
                            background: "radial-gradient(ellipse at center, rgba(200,169,106,0.08) 0%, transparent 70%)",
                        }}
                    />
                )}
            </AnimatePresence>
        </Link>
    );
}

/* ── Main Navbar ── */
export default function Navbar() {
    const pathname = usePathname();
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 60);
    });

    if (pathname !== "/") return null;

    const glassStyle = isScrolled || menuOpen
        ? {
            background: "linear-gradient(135deg, rgba(8,6,3,0.96) 0%, rgba(16,12,6,0.93) 100%)",
            backdropFilter: "blur(32px) saturate(180%)",
            WebkitBackdropFilter: "blur(32px) saturate(180%)",
            borderColor: "rgba(200,169,106,0.15)",
            boxShadow: "0 8px 48px rgba(0,0,0,0.6), 0 0 0 1px rgba(200,169,106,0.07), inset 0 1px 0 rgba(255,255,255,0.05)",
        }
        : {
            borderColor: "transparent",
        };

    return (
        <>
            {/* ═══════════════════════════════════════
                DESKTOP NAVBAR
            ═══════════════════════════════════════ */}
            <motion.header
                className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            >
                <div
                    className="flex items-center justify-between px-4 sm:px-7 py-2.5 sm:py-3.5 rounded-[50px] border transition-all duration-700 w-[83%] max-w-none"
                    style={glassStyle}
                >

                    {/* ── LEFT: Brand ── */}
                    <Link href="/" className="flex items-center gap-3 group" onClick={() => setMenuOpen(false)}>

                        {/* Animated gold ✦ icon */}
                        <motion.span
                            className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full"
                            style={{
                                background: "linear-gradient(135deg, rgba(200,169,106,0.15), rgba(200,169,106,0.06))",
                                border: "1px solid rgba(200,169,106,0.25)",
                            }}
                            whileHover={{ scale: 1.15, rotate: 180 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            <span
                                className="text-[11px] text-luxury-gold leading-none"
                                style={{ fontFamily: "var(--font-cormorant)" }}
                            >
                                ✦
                            </span>
                        </motion.span>

                        {/* Brand text stack */}
                        <div className="flex flex-col leading-none">
                            <span
                                className="text-[17px] sm:text-[19px] font-extrabold tracking-[0.35em] text-white group-hover:text-luxury-gold/90 transition-colors duration-400"
                                style={{ fontFamily: "var(--font-plus-jakarta)", letterSpacing: "0.35em" }}
                            >
                                TITAN
                            </span>
                            <span
                                className="hidden sm:block text-[9px] tracking-[0.25em] text-luxury-gold/40 group-hover:text-luxury-gold/60 transition-colors duration-400 mt-[1px]"
                                style={{
                                    fontFamily: "var(--font-cormorant)",
                                    fontStyle: "italic",
                                    fontWeight: 300,
                                }}
                            >
                                Automatic Collection
                            </span>
                        </div>
                    </Link>

                    {/* ── CENTER: Desktop Nav Links ── */}
                    <nav className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <NavLink key={link.name} link={link} />
                        ))}
                    </nav>

                    {/* ── RIGHT: CTA + Hamburger ── */}
                    <div className="flex items-center gap-3">

                        {/* Buy Now button — with sweep shine */}
                        <Link
                            href="/buy"
                            className="relative overflow-hidden group flex items-center gap-2 font-extrabold uppercase rounded-full transition-all duration-400 transform hover:-translate-y-0.5"
                            style={{
                                fontFamily: "var(--font-plus-jakarta)",
                                fontSize: "10px",
                                letterSpacing: "0.28em",
                                color: "#1a0f00",
                                padding: "10px 22px",
                                background: "linear-gradient(135deg, #B8924A 0%, #C8A96A 30%, #E2C98E 55%, #D4AF70 75%, #C8A96A 100%)",
                                boxShadow: "0 2px 16px rgba(200,169,106,0.45), inset 0 1px 0 rgba(255,255,255,0.25)",
                            }}
                        >
                            {/* Shine sweep */}
                            <motion.span
                                className="absolute inset-0 pointer-events-none"
                                style={{
                                    background: "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.35) 50%, transparent 80%)",
                                    transform: "translateX(-120%) skewX(-15deg)",
                                }}
                                whileHover={{ x: "240%" }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                            />

                            {/* Glow ring on hover */}
                            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{ boxShadow: "0 0 24px rgba(200,169,106,0.55), 0 0 6px rgba(226,201,142,0.4)" }}
                            />

                            <span className="relative z-10">Buy Now</span>

                            {/* Tiny price tag */}
                            <span
                                className="relative z-10 hidden sm:inline text-[8px] opacity-60 font-semibold tracking-widest"
                                style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic" }}
                            >
                                ₹34,995
                            </span>
                        </Link>

                        {/* Hamburger — mobile only */}
                        <motion.button
                            className="md:hidden relative flex flex-col justify-center items-center w-10 h-10 gap-[5px] rounded-full border transition-all duration-300"
                            style={{
                                border: menuOpen
                                    ? "1px solid rgba(200,169,106,0.4)"
                                    : "1px solid rgba(255,255,255,0.12)",
                                background: menuOpen
                                    ? "rgba(200,169,106,0.08)"
                                    : "rgba(255,255,255,0.05)",
                                boxShadow: menuOpen ? "0 0 16px rgba(200,169,106,0.2)" : "none",
                            }}
                            onClick={() => setMenuOpen((o) => !o)}
                            aria-label="Toggle menu"
                            whileTap={{ scale: 0.92 }}
                        >
                            <motion.span
                                animate={menuOpen ? { rotate: 45, y: 5, backgroundColor: "#C8A96A" } : { rotate: 0, y: 0, backgroundColor: "#ffffff" }}
                                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                className="w-[18px] h-[1.5px] block origin-center rounded-full"
                            />
                            <motion.span
                                animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                                transition={{ duration: 0.2 }}
                                className="w-[18px] h-[1.5px] bg-white block origin-center rounded-full"
                            />
                            <motion.span
                                animate={menuOpen ? { rotate: -45, y: -5, backgroundColor: "#C8A96A" } : { rotate: 0, y: 0, backgroundColor: "#ffffff" }}
                                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                className="w-[18px] h-[1.5px] block origin-center rounded-full"
                            />
                        </motion.button>
                    </div>

                </div>
            </motion.header>


            {/* ═══════════════════════════════════════
                MOBILE MENU — Cinematic slide down
            ═══════════════════════════════════════ */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0, y: -24, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -16, scale: 0.98 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed top-[80px] left-3 right-3 z-40 rounded-[28px] overflow-hidden md:hidden"
                        style={{
                            background: "linear-gradient(160deg, rgba(10,8,5,0.98) 0%, rgba(18,14,7,0.97) 100%)",
                            backdropFilter: "blur(40px) saturate(180%)",
                            WebkitBackdropFilter: "blur(40px) saturate(180%)",
                            border: "1px solid rgba(200,169,106,0.16)",
                            boxShadow: "0 28px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(200,169,106,0.05)",
                        }}
                    >
                        {/* ── Top brand strip ── */}
                        <div
                            className="flex items-center justify-between px-6 py-4"
                            style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                        >
                            <div className="flex flex-col">
                                <span
                                    className="text-[15px] font-extrabold tracking-[0.3em] text-white"
                                    style={{ fontFamily: "var(--font-plus-jakarta)" }}
                                >
                                    TITAN
                                </span>
                                <span
                                    className="text-[9px] text-luxury-gold/40 tracking-[0.2em] mt-[1px]"
                                    style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic", fontWeight: 300 }}
                                >
                                    Automatic Collection
                                </span>
                            </div>
                            <span
                                className="text-[10px] font-semibold uppercase tracking-[0.5em] text-luxury-gold/30"
                                style={{ fontFamily: "var(--font-plus-jakarta)" }}
                            >
                                Menu
                            </span>
                        </div>

                        {/* ── Nav Links ── */}
                        <nav className="flex flex-col">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.06 + i * 0.07, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setMenuOpen(false)}
                                        className="flex items-center justify-between px-6 py-4 group hover:bg-white/[0.03] transition-colors duration-200"
                                        style={{
                                            borderBottom: "1px solid rgba(255,255,255,0.035)",
                                        }}
                                    >
                                        <div className="flex items-center">
                                            {/* Name */}
                                            <span
                                                className="text-[14px] font-bold uppercase tracking-[0.25em] text-white/60 group-hover:text-white transition-colors duration-300"
                                                style={{ fontFamily: "var(--font-plus-jakarta)" }}
                                            >
                                                {link.name}
                                            </span>
                                        </div>

                                        {/* Arrow — slides right on hover */}
                                        <motion.span
                                            className="text-luxury-gold/30 group-hover:text-luxury-gold text-base transition-colors duration-300"
                                            whileHover={{ x: 4 }}
                                        >
                                            ›
                                        </motion.span>
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        {/* ── Bottom CTA ── */}
                        <motion.div
                            className="px-6 pt-4 pb-6"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.35, duration: 0.3 }}
                            style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
                        >
                            <Link
                                href="/buy"
                                onClick={() => setMenuOpen(false)}
                                className="relative flex flex-col items-center justify-center w-full py-4 rounded-2xl overflow-hidden group transition-all duration-300"
                                style={{
                                    background: "linear-gradient(135deg, #B8924A 0%, #C8A96A 30%, #E2C98E 55%, #C8A96A 100%)",
                                    boxShadow: "0 6px 28px rgba(200,169,106,0.4)",
                                }}
                            >
                                {/* shine sweep */}
                                <motion.span
                                    className="absolute inset-0 pointer-events-none"
                                    style={{
                                        background: "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.3) 50%, transparent 80%)",
                                        transform: "translateX(-120%) skewX(-15deg)",
                                    }}
                                    whileHover={{ x: "240%" }}
                                    transition={{ duration: 0.6 }}
                                />
                                <span
                                    className="relative z-10 text-[12px] font-extrabold uppercase tracking-[0.3em] text-black"
                                    style={{ fontFamily: "var(--font-plus-jakarta)" }}
                                >
                                    Buy Now
                                </span>
                                <span
                                    className="relative z-10 text-[11px] text-black/50 mt-0.5"
                                    style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic", fontWeight: 400 }}
                                >
                                    ₹34,995 · Free Shipping
                                </span>
                            </Link>

                            {/* Warranty note */}
                            <p
                                className="text-center text-[9px] text-white/15 mt-3 tracking-[0.2em] uppercase"
                                style={{ fontFamily: "var(--font-plus-jakarta)" }}
                            >
                                2-Year International Warranty
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ── Backdrop ── */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        key="backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-30 md:hidden"
                        style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(6px)" }}
                        onClick={() => setMenuOpen(false)}
                    />
                )}
            </AnimatePresence>
        </>
    );
}
