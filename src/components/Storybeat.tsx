"use client";

import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

interface StorybeatProps {
    children: ReactNode;
    range: [number, number, number, number];
    position?: "left" | "right" | "center" | "bottom";
}

export default function Storybeat({ children, range, position = "center" }: StorybeatProps) {
    const { scrollYProgress } = useScroll();
    const [isActive, setIsActive] = useState(false);

    const opacity = useTransform(scrollYProgress, range, [0, 1, 1, 0]);
    const y = useTransform(scrollYProgress, range, [50, 0, 0, -50]);
    const scale = useTransform(scrollYProgress, range, [0.93, 1, 1, 1.03]);
    const contentOpacity = useTransform(scrollYProgress, range, [0, 0.88, 1, 0.2]);
    const contentY = useTransform(scrollYProgress, range, [30, 0, 0, -18]);
    const contentScale = useTransform(scrollYProgress, range, [0.975, 1, 1, 0.99]);
    const contentRotateX = useTransform(scrollYProgress, range, [8, 0, 0, -5]);
    const glowOpacity = useTransform(scrollYProgress, range, [0, 0.65, 0.65, 0]);
    const lightSweepX = useTransform(scrollYProgress, range, ["-40%", "8%", "28%", "55%"]);
    const borderGlowOpacity = useTransform(scrollYProgress, range, [0, 0.9, 0.9, 0]);
    const borderColor = useMotionTemplate`rgba(200,169,106,${borderGlowOpacity})`;
    const panelShadow = useMotionTemplate`0 8px 40px rgba(0,0,0,0.5), 0 0 28px rgba(200,169,106,${borderGlowOpacity}), inset 0 1px 0 rgba(255,255,255,0.05)`;

    const x =
        position === "left"
            ? useTransform(scrollYProgress, range, [-14, 0, 0, 10])
            : position === "right"
                ? useTransform(scrollYProgress, range, [14, 0, 0, -10])
                : useTransform(scrollYProgress, range, [0, 0, 0, 0]);

    const alignClass =
        position === "left"
            ? "items-center md:items-start text-center md:text-left justify-center md:pl-[10vw] px-4"
            : position === "right"
                ? "items-center md:items-end text-center md:text-right justify-center md:pr-[10vw] px-4"
                : position === "bottom"
                    ? "items-center text-center justify-end pb-8 md:pb-[12vh] px-4"
                    : "items-center text-center justify-center px-4";

    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (value) => {
            setIsActive(value >= range[1] && value <= range[2]);
        });
        return unsubscribe;
    }, [range, scrollYProgress]);

    return (
        <motion.div
            style={{ opacity, y, scale, x }}
            className={`fixed inset-0 flex flex-col ${alignClass} pointer-events-none z-40`}
        >
            <motion.div
                className="max-w-2xl w-full"
                style={{
                    background: "linear-gradient(135deg, rgba(5,5,5,0.46) 0%, rgba(15,12,8,0.42) 100%)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    borderRadius: "16px",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor,
                    boxShadow: panelShadow,
                    padding: "clamp(1rem, 4vw, 2.5rem)",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                <motion.div
                    aria-hidden
                    className="pointer-events-none absolute -top-16 -bottom-16 w-1/2"
                    style={{
                        left: lightSweepX,
                        opacity: glowOpacity,
                        background:
                            "linear-gradient(120deg, rgba(255,255,255,0) 20%, rgba(226,201,142,0.12) 50%, rgba(255,255,255,0) 80%)",
                        filter: "blur(6px)",
                    }}
                />

                <motion.div
                    className={isActive ? "storybeat-active" : ""}
                    style={{
                        opacity: contentOpacity,
                        y: contentY,
                        scale: contentScale,
                        rotateX: contentRotateX,
                        transformPerspective: 1200,
                    }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                    {children}
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
