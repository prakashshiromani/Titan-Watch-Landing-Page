export interface WatchVariant {
    label: string;
    code: string;
    accent: string;
    glow: string;
    image: string;
    price: number;
    original: number;
}

export const VARIANTS: WatchVariant[] = [
    {
        label: "Rose Gold & Black",
        code: "90174KD01",
        accent: "#C8A96A",
        glow: "#C8A96A",
        image: "/images/watch-rose-gold.png",
        price: 34995,
        original: 42000,
    },
    {
        label: "Steel Blue",
        code: "90174KD02",
        accent: "#7EB8D4",
        glow: "#7EB8D4",
        image: "/images/watch-blue.png",
        price: 34995,
        original: 42000,
    },
    {
        label: "Silver",
        code: "90174KD03",
        accent: "#b0bec5",
        glow: "#90a4ae",
        image: "/images/watch-silver.png",
        price: 36995,
        original: 44000,
    },
];

export const PERKS = [
    { icon: "🚚", title: "Free Shipping", sub: "Pan India delivery" },
    { icon: "🛡️", title: "2 Year Warranty", sub: "Titan certified" },
    { icon: "↩️", title: "30-Day Returns", sub: "No questions asked" },
    { icon: "📦", title: "Luxury Packaging", sub: "Gift-ready box" },
];

export const REVIEWS = [
    { name: "Aryan S.", stars: 5, text: "Absolutely stunning timepiece. The skeleton dial is mesmerising in person. Worth every rupee." },
    { name: "Meera K.", stars: 5, text: "The ceramic bracelet feels premium and the automatic movement winds beautifully. Gift of a lifetime." },
    { name: "Ravi P.", stars: 4, text: "Exceptional quality for the price. Sapphire glass, ceramic links, and that gorgeous blue dial — unbeatable." },
];

export const SPECS = [
    { value: "42.2 mm", label: "Case Width", sub: "Diameter" },
    { value: "13.4 mm", label: "Thickness", sub: "Slim Profile" },
    { value: "22 mm", label: "Strap Width", sub: "Lug Width" },
    { value: "22J", label: "Jewels", sub: "Movement" },
    { value: "36H", label: "Power Reserve", sub: "Auto Wind" },
    { value: "50M", label: "Water Resist.", sub: "ATM5" },
];

export const FEATURES = [
    {
        icon: "⚙️",
        title: "In-House Caliber 7A20-S",
        desc: "Titan's own automatic movement — 22 jewels, 36-hour power reserve, regulated ±10/30 s/day.",
    },
    {
        icon: "🔷",
        title: "Ceramic Fusion Bracelet",
        desc: "Alternating solid stainless steel and ceramic center links with a butterfly deployment clasp.",
    },
    {
        icon: "👁",
        title: "Skeleton Exhibition Dial",
        desc: "Open-heart architecture exposing the gear train, balance wheel, and escapement at full depth.",
    },
    {
        icon: "💧",
        title: "50 m Water Resistance",
        desc: "Sealed crown and case back for everyday water exposure, swimming, and light submersion.",
    },
    {
        icon: "🌀",
        title: "Self-Winding Rotor",
        desc: "22-karat gold-tone oscillating weight harvests kinetic energy from every wrist movement.",
    },
    {
        icon: "🪞",
        title: "Anti-Reflective Sapphire",
        desc: "Scratch-hardened sapphire crystal with multi-layer anti-reflective coating on both sides.",
    },
];

export const DETAILS = [
    { label: "Brand", value: "Titan" },
    { label: "Model", value: "Ceramic Fusion Automatic" },
    { label: "Reference", value: "90174KD02" },
    { label: "Movement", value: "Caliber 7A20-S Automatic" },
    { label: "Case Material", value: "Stainless Steel" },
    { label: "Case Shape", value: "Round" },
    { label: "Case Dimensions", value: "48.0 × 42.2 × 13.4 mm" },
    { label: "Crystal", value: "Anti-Reflective Sapphire Glass" },
    { label: "Dial Color", value: "Blue Skeleton" },
    { label: "Bracelet", value: "Stainless Steel + Ceramic Links" },
    { label: "Clasp", value: "Butterfly Deployment" },
    { label: "Water Resistance", value: "50 m / 5 ATM" },
    { label: "Jewels", value: "22 Jewels" },
    { label: "Power Reserve", value: "36 Hours" },
    { label: "Accuracy", value: "−10 / +30 sec / day" },
    { label: "Strap Width", value: "22 mm" },
];

export const LAYERS = [
    {
        id: "crystal",
        label: "Sapphire Crystal",
        color: "#7EB8D4",
        desc: "Multi-layer anti-reflective sapphire, 9H hardness — scratch-proof clarity from every angle.",
    },
    {
        id: "dial",
        label: "Skeleton Dial",
        color: "#C8A96A",
        desc: "Open-heart exhibition dial exposing the full gear train, balance wheel and escapement.",
    },
    {
        id: "movement",
        label: "Caliber 7A20-S",
        color: "#E2C98E",
        desc: "In-house automatic movement, 22 jewels, 36-hour power reserve, regulated ±10/30 s/day.",
    },
    {
        id: "case",
        label: "Stainless Steel Case",
        color: "#B8B0A0",
        desc: "Grade 316L steel, brushed and polished, sealed to 50 m water resistance.",
    },
    {
        id: "bracelet",
        label: "Ceramic Fusion Bracelet",
        color: "#C8A96A",
        desc: "Alternating steel and ceramic centre links — butterfly deployment, 22 mm lug.",
    },
];

export const SCREWS = [
    { top: "8%", left: "38%", delay: 0 },
    { top: "8%", left: "58%", delay: 0.05 },
    { top: "30%", left: "20%", delay: 0.1 },
    { top: "30%", left: "76%", delay: 0.12 },
    { top: "55%", left: "22%", delay: 0.07 },
    { top: "55%", left: "74%", delay: 0.09 },
    { top: "76%", left: "38%", delay: 0.04 },
    { top: "76%", left: "58%", delay: 0.06 },
];
