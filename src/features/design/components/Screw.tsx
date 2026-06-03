import { motion } from "framer-motion";

export default function Screw({ top, left, delay, accent }: { top: string; left: string; delay: number; accent: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay, duration: 0.4, ease: "backOut" }}
            className="absolute"
            style={{ top, left }}
        >
            <div
                className="w-3 h-3 rounded-full flex items-center justify-center"
                style={{
                    background: `radial-gradient(circle at 35% 35%, ${accent}cc, ${accent}44)`,
                    boxShadow: `0 0 6px ${accent}55`,
                    border: `1px solid ${accent}88`,
                }}
            >
                <div className="w-1 h-[7px] rounded-full" style={{ background: accent, opacity: 0.7 }} />
            </div>
        </motion.div>
    );
}
