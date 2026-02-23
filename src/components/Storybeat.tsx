"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode } from "react";

interface StorybeatProps {
    children: ReactNode;
    range: [number, number, number, number];
    position?: "left" | "right" | "center" | "bottom";
}

export default function Storybeat({ children, range, position = "center" }: StorybeatProps) {
    const { scrollYProgress } = useScroll();

    const opacity = useTransform(scrollYProgress, range, [0, 1, 1, 0]);
    const y = useTransform(scrollYProgress, range, [50, 0, 0, -50]);
    const scale = useTransform(scrollYProgress, range, [0.94, 1, 1, 1.04]);

    const alignClass =
        position === "left"
            ? "items-center md:items-start text-center md:text-left justify-center md:pl-[10vw] px-4"
            : position === "right"
                ? "items-center md:items-end text-center md:text-right justify-center md:pr-[10vw] px-4"
                : position === "bottom"
                    ? "items-center text-center justify-end pb-8 md:pb-[12vh] px-4"
                    : "items-center text-center justify-center px-4";

    return (
        <motion.div
            style={{ opacity, y, scale }}
            className={`fixed inset-0 flex flex-col ${alignClass} pointer-events-none z-40`}
        >
            <div
                className="max-w-2xl w-full"
                style={{
                    background: "linear-gradient(135deg, rgba(5,5,5,0.6) 0%, rgba(15,12,8,0.55) 100%)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    borderRadius: "16px",
                    border: "1px solid rgba(200,169,106,0.15)",
                    boxShadow: "0 8px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)",
                    padding: "clamp(1rem, 4vw, 2.5rem)",
                }}
            >
                {children}
            </div>
        </motion.div>
    );
}
