export interface Photo {
    src: string;
    alt: string;
    caption?: string;
}

export interface PhotoCategory {
    name: string;
    slug: string;
    cover: string;
    terminalName: string;
    photos: Photo[];
}

export const photoCategories: PhotoCategory[] = [
    {
        name: "Astrophotography",
        slug: "astrophotography",
        cover: "/images/photos/astro-cover.svg",
        terminalName: "CAT_01_ASTRO.EXE",
        photos: [
            { src: "/images/photos/astro-1.svg", alt: "Milky Way over mountain range" },
            { src: "/images/photos/astro-2.svg", alt: "Star trails over lake" },
            { src: "/images/photos/astro-3.svg", alt: "Orion nebula close-up" },
        ],
    },
    {
        name: "Street Photography",
        slug: "street",
        cover: "/images/photos/street-cover.svg",
        terminalName: "CAT_02_STREET.EXE",
        photos: [
            { src: "/images/photos/street-1.svg", alt: "Neon signs in rain" },
            { src: "/images/photos/street-2.svg", alt: "Urban geometry shadows" },
        ],
    },
    {
        name: "Architecture",
        slug: "architecture",
        cover: "/images/photos/arch-cover.svg",
        terminalName: "CAT_03_ARCH.EXE",
        photos: [
            { src: "/images/photos/arch-1.svg", alt: "Brutalist concrete building" },
            { src: "/images/photos/arch-2.svg", alt: "Glass facade reflections" },
            { src: "/images/photos/arch-3.svg", alt: "Spiral staircase from above" },
            { src: "/images/photos/arch-4.svg", alt: "Bridge at sunset" },
        ],
    },
    {
        name: "Nature",
        slug: "nature",
        cover: "/images/photos/nature-cover.svg",
        terminalName: "CAT_04_NATURE.EXE",
        photos: [
            { src: "/images/photos/nature-1.svg", alt: "Autumn forest path" },
            { src: "/images/photos/nature-2.svg", alt: "Mountain lake reflection" },
        ],
    },
    {
        name: "Travel",
        slug: "travel",
        cover: "/images/photos/travel-cover.svg",
        terminalName: "CAT_05_TRAVEL.EXE",
        photos: [
            { src: "/images/photos/travel-1.svg", alt: "Mediterranean village" },
            { src: "/images/photos/travel-2.svg", alt: "Tokyo alleyway at night" },
            { src: "/images/photos/travel-3.svg", alt: "Desert sand dunes" },
        ],
    },
    {
        name: "Portraits",
        slug: "portraits",
        cover: "/images/photos/portrait-cover.svg",
        terminalName: "CAT_06_PORTRAIT.EXE",
        photos: [
            { src: "/images/photos/portrait-1.svg", alt: "Environmental portrait" },
            { src: "/images/photos/portrait-2.svg", alt: "Studio headshot with dramatic lighting" },
        ],
    },
];
