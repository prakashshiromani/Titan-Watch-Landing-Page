import ScrollCanvas from "@/components/ScrollCanvas";
import Storybeat from "@/components/Storybeat";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative w-full bg-luxury-bg">

      {/* ─── SCROLL ANIMATION STAGE ─── */}
      <div className="relative h-[600vh] w-full">
        <ScrollCanvas />

        {/* ── HERO / INTRO (0–15%) ── */}
        <Storybeat range={[0, 0.05, 0.12, 0.15]} position="center">
          <p className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.5em] text-luxury-gold mb-3 sm:mb-5 flex items-center justify-center gap-3">
            <span className="inline-block w-6 sm:w-8 h-px bg-luxury-gold/60" />
            Titan Automatic
            <span className="inline-block w-6 sm:w-8 h-px bg-luxury-gold/60" />
          </p>

          {/* Hero headline — Plus Jakarta Sans bold */}
          <h1
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter text-white mb-3 sm:mb-5 leading-[1.0]"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            Titan Ceramic<br />
            <span className="text-gold-shimmer">Fusion</span>
          </h1>

          {/* Sub-caption — Cormorant Garamond italic for elegance */}
          <p
            className="text-luxury-gold/80 text-base sm:text-lg md:text-xl tracking-wide mb-3 sm:mb-5"
            style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic", fontWeight: 400 }}
          >
            Where engineering meets elegance.
          </p>

          <p className="text-white/50 text-sm sm:text-base md:text-lg font-light leading-relaxed">
            A bold expression of precision, crafted for those<br className="hidden md:block" /> who value timeless design.
          </p>
        </Storybeat>

        {/* ── ENGINEERING REVEAL (18–40%) ── */}
        <Storybeat range={[0.18, 0.22, 0.35, 0.40]} position="left">
          <p className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.5em] text-luxury-gold/70 mb-3 sm:mb-4 flex items-center gap-3">
            <span className="inline-block w-5 sm:w-6 h-px bg-luxury-gold/50" />
            Engineering
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter text-white mb-3 sm:mb-5 leading-[1.05]"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            Crafted with<br />
            <span className="text-luxury-gold">mechanical precision.</span>
          </h2>
          <div className="space-y-2 sm:space-y-3">
            <div className="flex items-start gap-3">
              <span className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-luxury-gold" />
              <p className="text-white/60 text-sm sm:text-base leading-relaxed">An automatic movement powered purely by motion.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-luxury-gold" />
              <p className="text-white/60 text-sm sm:text-base leading-relaxed">Every component engineered for accuracy and longevity.</p>
            </div>
          </div>
        </Storybeat>

        {/* ── AUTOMATIC MOVEMENT (42–65%) ── */}
        <Storybeat range={[0.42, 0.48, 0.60, 0.65]} position="right">
          <p className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.5em] text-luxury-gold/70 mb-3 sm:mb-4 flex items-center justify-end gap-3">
            Movement
            <span className="inline-block w-5 sm:w-6 h-px bg-luxury-gold/50" />
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter text-white mb-3 sm:mb-5 leading-[1.05]"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            Powered<br />
            <span className="text-luxury-gold">by motion.</span>
          </h2>
          <ul className="space-y-2 sm:space-y-3">
            {[
              "Self-winding automatic mechanism",
              "Precision-calibrated gear system",
              "No battery. Pure craftsmanship.",
            ].map((item) => (
              <li key={item} className="flex items-center justify-end gap-3 text-white/60 text-sm sm:text-base">
                <span>{item}</span>
                <span className="flex-shrink-0 w-1 h-1 rounded-full bg-luxury-gold" />
              </li>
            ))}
          </ul>
        </Storybeat>

        {/* ── SKELETON DESIGN (68–85%) ── */}
        <Storybeat range={[0.68, 0.72, 0.82, 0.85]} position="left">
          <p className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.5em] text-luxury-gold/70 mb-3 sm:mb-4 flex items-center gap-3">
            <span className="inline-block w-5 sm:w-6 h-px bg-luxury-gold/50" />
            Design Language
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter text-white mb-3 sm:mb-5 leading-[1.05]"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            Design that<br />
            <span className="text-luxury-gold">reveals its soul.</span>
          </h2>
          <div className="space-y-2 sm:space-y-3">
            {[
              "Skeleton dial showcasing intricate mechanics.",
              "Ceramic fusion for strength and elegance.",
              "A bold blue dial accent for modern sophistication.",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-luxury-gold" />
                <p className="text-white/60 text-sm sm:text-base leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </Storybeat>
      </div>

      {/* ─── FINAL CTA SECTION ─── */}
      <section className="relative z-20 w-full bg-luxury-bg flex flex-col items-center justify-center text-center px-5 py-16 sm:py-28 overflow-hidden border-t border-white/5">

        {/* Atmospheric glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[700px] h-[240px] sm:h-[500px] bg-luxury-gold opacity-[0.04] blur-[120px] sm:blur-[140px] rounded-full" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-luxury-gold/20 to-transparent" />
        </div>

        {/* Eyebrow */}
        <p className="text-[9px] font-semibold uppercase tracking-[0.5em] text-luxury-gold/70 mb-5 sm:mb-6 flex items-center gap-3 sm:gap-4">
          <span className="inline-block w-5 sm:w-8 h-px bg-luxury-gold/40" />
          Titan Automatic Collection
          <span className="inline-block w-5 sm:w-8 h-px bg-luxury-gold/40" />
        </p>

        {/* Headline — Plus Jakarta Sans */}
        <h2
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white mb-3 sm:mb-4 leading-[0.92]"
          style={{ fontFamily: "var(--font-plus-jakarta)" }}
        >
          Timeless.{" "}
          <span
            style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic", fontWeight: 400, letterSpacing: "0.02em" }}
            className="text-luxury-gold/90"
          >
            Powerful.
          </span>{" "}
          Distinct.
        </h2>

        {/* Sub-copy */}
        <p className="text-white/40 text-xs sm:text-sm font-light tracking-[0.2em] uppercase mb-8 sm:mb-12 max-w-lg px-2 mt-4">
          Titan Automatic — engineered to move with you.
        </p>

        {/* CTA buttons */}
        <div className="relative z-30 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5 w-full max-w-xs sm:max-w-lg px-2">
          <Link
            href="/buy"
            className="flex items-center justify-center py-4 px-8 rounded-full font-bold uppercase tracking-[0.2em] text-xs text-black transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 cursor-pointer"
            style={{
              fontFamily: "var(--font-plus-jakarta)",
              background: "linear-gradient(135deg, #C8A96A 0%, #E2C98E 50%, #C8A96A 100%)",
              boxShadow: "0 4px 20px rgba(200,169,106,0.4), inset 0 1px 0 rgba(255,255,255,0.2)",
            }}
          >
            Buy Now
          </Link>
          <Link
            href="/specs"
            className="flex items-center justify-center py-4 px-8 rounded-full font-bold uppercase tracking-[0.2em] text-xs text-white/70 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 cursor-pointer"
            style={{
              fontFamily: "var(--font-plus-jakarta)",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(8px)",
            }}
          >
            View Specifications
          </Link>
        </div>

        {/* Bottom decorative rule */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </section>

    </main>
  );
}
