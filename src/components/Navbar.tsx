"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Overview", href: "#overview" },
    { name: "Design", href: "/design" },
    { name: "Specs", href: "/specs" },
    { name: "Explore Collection", href: "/specs" },
];

export default function Navbar() {
    const pathname = usePathname();
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 60);
    });

    if (pathname !== "/") return null;

    return (
        <>
            <motion.header
                className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4"
                initial={{ y: -120, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
                <div
                    className={cn(
                        "flex items-center justify-between px-3 sm:px-6 py-2.5 sm:py-3.5 rounded-[40px] transition-all duration-700 w-full max-w-5xl",
                        isScrolled || menuOpen
                            ? "border border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.4)]"
                            : "border border-transparent"
                    )}
                    style={isScrolled || menuOpen ? {
                        background: "linear-gradient(135deg, rgba(10,8,5,0.92) 0%, rgba(18,14,8,0.88) 100%)",
                        backdropFilter: "blur(24px)",
                        WebkitBackdropFilter: "blur(24px)",
                    } : {}}
                >
                    {/* Left: Brand */}
                    <Link href="/" className="flex items-center gap-2 group" onClick={() => setMenuOpen(false)}>
                        <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-luxury-gold/80 group-hover:text-luxury-gold transition-colors duration-300">
                            ✦
                        </span>
                        <span className="text-lg font-bold tracking-[0.2em] text-white group-hover:text-luxury-gold transition-colors duration-300">
                            TITAN
                        </span>
                    </Link>

                    {/* Center: Desktop Links */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="relative text-xs font-medium uppercase tracking-[0.2em] text-white/60 hover:text-white transition-all duration-300 group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-luxury-gold group-hover:w-full transition-all duration-300" />
                            </Link>
                        ))}
                    </nav>

                    {/* Right: CTA + Hamburger */}
                    <div className="flex items-center gap-3">
                        <Link
                            href="/buy"
                            className="relative text-xs font-bold uppercase tracking-[0.2em] text-black px-4 sm:px-6 py-2 sm:py-2.5 rounded-full overflow-hidden group transition-all duration-300 transform hover:-translate-y-0.5"
                            style={{
                                background: "linear-gradient(135deg, #C8A96A 0%, #E2C98E 50%, #C8A96A 100%)",
                                boxShadow: "0 2px 12px rgba(200,169,106,0.4)",
                            }}
                        >
                            <span className="relative z-10">Buy Now</span>
                        </Link>

                        {/* Hamburger — mobile only */}
                        <button
                            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition-all duration-200"
                            onClick={() => setMenuOpen((o) => !o)}
                            aria-label="Toggle menu"
                        >
                            <motion.span
                                animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                                transition={{ duration: 0.25 }}
                                className="w-4 h-px bg-white block origin-center"
                            />
                            <motion.span
                                animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                                transition={{ duration: 0.2 }}
                                className="w-4 h-px bg-white block origin-center"
                            />
                            <motion.span
                                animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                                transition={{ duration: 0.25 }}
                                className="w-4 h-px bg-white block origin-center"
                            />
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Dropdown Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0, y: -16, scaleY: 0.9 }}
                        animate={{ opacity: 1, y: 0, scaleY: 1 }}
                        exit={{ opacity: 0, y: -12, scaleY: 0.95 }}
                        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed top-[72px] left-4 right-4 z-40 rounded-3xl overflow-hidden md:hidden origin-top"
                        style={{
                            background: "linear-gradient(145deg, rgba(10,8,5,0.97) 0%, rgba(20,16,10,0.95) 100%)",
                            backdropFilter: "blur(32px)",
                            WebkitBackdropFilter: "blur(32px)",
                            border: "1px solid rgba(200,169,106,0.12)",
                            boxShadow: "0 24px 64px rgba(0,0,0,0.6)",
                        }}
                    >
                        <nav className="flex flex-col py-2">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -12 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.06, duration: 0.25 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setMenuOpen(false)}
                                        className="flex items-center justify-between px-6 py-4 text-sm font-medium uppercase tracking-[0.2em] text-white/70 hover:text-white hover:bg-white/[0.04] transition-all duration-200 group"
                                        style={{
                                            borderBottom: i < navLinks.length - 1
                                                ? "1px solid rgba(255,255,255,0.04)"
                                                : "none",
                                        }}
                                    >
                                        <span>{link.name}</span>
                                        <span className="text-luxury-gold/50 group-hover:text-luxury-gold transition-colors text-xs">→</span>
                                    </Link>
                                </motion.div>
                            ))}

                            {/* Bottom CTA inside menu */}
                            <div className="px-6 py-4 mt-1 border-t border-white/5">
                                <Link
                                    href="/buy"
                                    onClick={() => setMenuOpen(false)}
                                    className="flex items-center justify-center w-full py-3.5 rounded-full font-bold uppercase tracking-[0.2em] text-xs text-black transition-all duration-300"
                                    style={{
                                        background: "linear-gradient(135deg, #C8A96A 0%, #E2C98E 50%, #C8A96A 100%)",
                                        boxShadow: "0 4px 20px rgba(200,169,106,0.35)",
                                    }}
                                >
                                    Buy Now — ₹34,995
                                </Link>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Backdrop */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        key="backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-30 md:hidden"
                        style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(4px)" }}
                        onClick={() => setMenuOpen(false)}
                    />
                )}
            </AnimatePresence>
        </>
    );
}
