export interface PhotoCategory {
    name: string;
    slug: string;
    emoji: string;
    cover: string;
    terminalName: string;
    description: string;
    tags: string[];
}

export const photoCategories: PhotoCategory[] = [
    {
        name: "Starlit Wonders",
        slug: "starlit-wonders",
        emoji: "🌌",
        cover: "/images/through-the-lens/starlit-wonders/aura-australia-airey-inlet-lighthouse.jpg",
        terminalName: "CAT_01_ASTRO.EXE",
        description: "Night skies, cosmic silence, and the quiet drama above us.",
        tags: ["cosmic-views", "night-skies", "galactic-dreams"],
    },
    {
        name: "Wild Horizons",
        slug: "wild-horizons",
        emoji: "🌿",
        cover: "/images/through-the-lens/wild-horizons/alfred-nicholas-gardens.jpg",
        terminalName: "CAT_02_WILD.EXE",
        description: "Green worlds, moody light, and earth-toned quiet.",
        tags: ["green-escape", "earth-tones", "into-the-wild"],
    },
    {
        name: "Time in Motion",
        slug: "time-in-motion",
        emoji: "⏳",
        cover: "/images/through-the-lens/time-in-motion/balnarring-beach-pastel.jpg",
        terminalName: "CAT_03_MOTION.EXE",
        description: "Light trails, blurred beauty, and moving moments.",
        tags: ["light-trails", "blurred-beauty", "moving-moments"],
    },
    {
        name: "Urban Glow",
        slug: "urban-glow",
        emoji: "🌆",
        cover: "/images/through-the-lens/urban-glow/bitola-forty-holy-martyrs-krkardash.jpg",
        terminalName: "CAT_04_URBAN.EXE",
        description: "Neon nights, city lights, and street frames.",
        tags: ["neon-nights", "city-lights", "street-frames"],
    },
    {
        name: "Ocean Whispers",
        slug: "ocean-whispers",
        emoji: "🌊",
        cover: "/images/through-the-lens/ocean-whispers/balnarring-beach-wooden-wall.jpg",
        terminalName: "CAT_05_OCEAN.EXE",
        description: "Ocean breeze, coastal views, and blue horizons.",
        tags: ["ocean-breeze", "coastal-views", "blue-horizon"],
    },
    {
        name: "Liquid Cascades",
        slug: "liquid-cascades",
        emoji: "🏞️",
        cover: "/images/through-the-lens/liquid-cascades/beauchamp-falls.jpg",
        terminalName: "CAT_06_FALLS.EXE",
        description: "Falling waters, mist and magic, nature flow.",
        tags: ["falling-waters", "mist-and-magic", "nature-flow"],
    },
];
