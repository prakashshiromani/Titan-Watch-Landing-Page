"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 240;
// How many frames to pre-load before showing canvas (just the first few)
const CRITICAL_FRAMES = 8;

function frameSrc(i: number) {
    return `/images/1/ezgif-frame-${i.toString().padStart(3, "0")}.jpg`;
}

export default function ScrollCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(FRAME_COUNT).fill(null));
    const [canvasReady, setCanvasReady] = useState(false); // true once first frame is painted

    const { scrollYProgress } = useScroll();

    // Prevent scroll restoration on refresh so user starts from the top
    useEffect(() => {
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }
        window.scrollTo(0, 0);
    }, []);

    // ── DRAW ──────────────────────────────────────────────────────────
    const drawFrame = (index: number) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // Walk backwards to find the nearest loaded frame
        let img: HTMLImageElement | null = null;
        for (let i = index; i >= 0; i--) {
            if (imagesRef.current[i]?.complete && imagesRef.current[i]?.naturalWidth) {
                img = imagesRef.current[i];
                break;
            }
        }
        if (!img) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const dpr = window.devicePixelRatio || 1;
        const displayWidth = window.innerWidth;
        const displayHeight = window.innerHeight;

        if (canvas.width !== displayWidth * dpr || canvas.height !== displayHeight * dpr) {
            canvas.width = displayWidth * dpr;
            canvas.height = displayHeight * dpr;
        }

        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.fillStyle = "#050505";
        ctx.fillRect(0, 0, displayWidth, displayHeight);

        const imgRatio = 1920 / 1080;
        const canvasRatio = displayWidth / displayHeight;
        let drawWidth: number, drawHeight: number;

        if (canvasRatio > imgRatio) {
            drawWidth = displayWidth;
            drawHeight = displayWidth / imgRatio;
        } else {
            drawWidth = displayHeight * imgRatio;
            drawHeight = displayHeight;
        }

        const x = (displayWidth - drawWidth) / 2;
        const y = (displayHeight - drawHeight) / 2;
        ctx.drawImage(img, x, y, drawWidth, drawHeight);
    };

    // ── LOAD STRATEGY ─────────────────────────────────────────────────
    useEffect(() => {
        const images = imagesRef.current;

        // Phase 1: load the very first critical frames, draw as each one arrives
        let criticalLoaded = 0;

        for (let i = 0; i < CRITICAL_FRAMES; i++) {
            const img = new Image();
            img.src = frameSrc(i + 1);
            img.onload = () => {
                images[i] = img;
                criticalLoaded++;
                // Paint frame 0 immediately when it's ready
                if (i === 0) {
                    requestAnimationFrame(() => {
                        drawFrame(0);
                        setCanvasReady(true);
                    });
                }
                // When all critical frames done, kick off the rest
                if (criticalLoaded === CRITICAL_FRAMES) {
                    loadRemainingFrames();
                }
            };
            img.onerror = () => {
                criticalLoaded++;
                if (criticalLoaded === CRITICAL_FRAMES) loadRemainingFrames();
            };
            images[i] = img;
        }

        // Phase 2: load remaining frames in the background
        function loadRemainingFrames() {
            const BATCH = 20; // load N frames at a time to avoid saturating network
            let next = CRITICAL_FRAMES;

            function loadBatch() {
                const end = Math.min(next + BATCH, FRAME_COUNT);
                let batchLeft = end - next;
                if (batchLeft <= 0) return;

                for (let i = next; i < end; i++) {
                    if (images[i]?.complete && images[i]?.naturalWidth) {
                        batchLeft--;
                        if (batchLeft === 0) { next = end; loadBatch(); }
                        continue;
                    }
                    const img = new Image();
                    img.src = frameSrc(i + 1);
                    const idx = i;
                    img.onload = img.onerror = () => {
                        images[idx] = img;
                        batchLeft--;
                        if (batchLeft === 0) { next = end; loadBatch(); }
                    };
                    images[i] = img;
                }
            }

            loadBatch();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // ── SCROLL ────────────────────────────────────────────────────────
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const maxIndex = FRAME_COUNT - 1;
        const index = Math.max(0, Math.min(Math.floor(latest * maxIndex), maxIndex));
        requestAnimationFrame(() => drawFrame(index));
    });

    // ── RESIZE ────────────────────────────────────────────────────────
    useEffect(() => {
        const handleResize = () => {
            const maxIndex = FRAME_COUNT - 1;
            const index = Math.max(0, Math.min(Math.floor(scrollYProgress.get() * maxIndex), maxIndex));
            drawFrame(index);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scrollYProgress]);

    return (
        <div className="sticky top-0 left-0 w-full h-screen overflow-hidden z-0 bg-luxury-bg">
            {/* Canvas fades in from nothing — no loading screen */}
            <canvas
                ref={canvasRef}
                className="block w-full h-full object-cover transition-opacity duration-500"
                style={{
                    width: "100vw",
                    height: "100vh",
                    opacity: canvasReady ? 1 : 0,
                }}
            />

            {/* Cinematic vignette */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_40%,#050505_100%)] opacity-80" />
        </div>
    );
}
