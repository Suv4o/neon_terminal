export interface KeyboardSpec {
    id: number;
    title: string;
    description: string;
}

export interface Keyboard {
    name: string;
    slug: string;
    emoji: string;
    terminalName: string;
    cover: string;
    tags: string;
    description: string;
    image: string;
    specs: KeyboardSpec[];
}

export const keyboards: Keyboard[] = [
    {
        name: "Pastel Paws",
        slug: "pastel-paws",
        emoji: "\uD83D\uDC3E",
        terminalName: "KB_01_PAWS.EXE",
        cover: "https://res.cloudinary.com/suv4o/image/upload/q_auto,f_auto,w_500,e_sharpen:100/v1754297235/blog/the-keyboard-lab/Pastel_Paws_yuyysg",
        tags: "cute, dreamy, pastel, cat-inspired",
        description:
            'Built for budget-conscious thock lovers, <strong>Pastel Paws</strong> is a custom TKL mechanical keyboard that delivers premium feel, sound, and style without breaking the bank. Designed with beginners in mind, this build features smooth typing, crisp acoustics, and playful visual flair with animal-themed XDA keycaps and a coiled cable. It\'s <strong>customised from the inside out</strong> with hand-lubed switches and stabilisers, a gasket-mounted structure, and mods like tape and case stuffing for that satisfying "thock" sound. Whether you\'re coding, writing, or just vibing to music, <strong>Pastel Paws</strong> makes every keystroke feel personal.',
        image: "https://res.cloudinary.com/suv4o/image/upload/q_auto,f_auto,w_900,e_sharpen:100/v1754297235/blog/the-keyboard-lab/Pastel_Paws_yuyysg",
        specs: [
            {
                id: 1,
                title: "Type of Keyboard",
                description:
                    "<ul><li>GMK87 Tenkeyless</li><li>Hot-swappable</li><li>Gasket-mounted</li><li>Plastic case</li><li>LCD screen + knob</li><li>Wireless + USB-C</li></ul>",
            },
            {
                id: 2,
                title: "Type of Switches",
                description:
                    "<ul><li>Akko Cream Yellow Pro (Linear, 50g)</li><li>Factory-lubed, re-lubed with Krytox 205g0</li><li>Switch films added for improved sound and stability</li></ul>",
            },
            {
                id: 3,
                title: "Type of Keycaps",
                description:
                    "<ul><li>XDA Profile</li><li>PBT plastic</li><li>95-key set</li><li>Blue & white colourway with cat illustrations</li></ul>",
            },
            {
                id: 4,
                title: "Type of Cable",
                description:
                    "<ul><li>Light blue coiled USB-C cable</li><li>Aviator connector for modular look and tidier cable routing</li></ul>",
            },
            {
                id: 5,
                title: "Mods",
                description:
                    "<ul><li>Stabilisers removed and lubed with dielectric grease</li><li>Switches lubed and filmed for smoother action and tighter sound</li><li>Tape mod applied to back of PCB (3 layers of masking tape)</li><li>Case stuffed with Poly-Fil to eliminate hollowness and deepen sound</li></ul>",
            },
        ],
    },
    {
        name: "Lemon Milk",
        slug: "lemon-milk",
        emoji: "\uD83C\uDF4B",
        terminalName: "KB_02_LEMON.EXE",
        cover: "https://res.cloudinary.com/suv4o/image/upload/q_auto,f_auto,w_500,e_sharpen:100/v1754209966/blog/the-keyboard-lab/keyboard-2_r8ujln",
        tags: "refreshing, warm, creamy, sunny",
        description:
            "Bright, bold, and buttery smooth \u2014 <strong>Lemon Milk</strong> is a 75% custom mechanical keyboard designed to strike a balance between premium feel and vibrant personality. Built around the solid and mod-friendly Keychron Q1, this build features silky Tealios V2 switches that are lubed and filmed for optimal performance. The XDA yellow and white keycaps offer a minimalist yet playful vibe, while internal mods like case foam and tape mod help achieve a thocky and clean acoustic profile. Topped off with a yellow coiled cable and aviator connector, <strong>Lemon Milk</strong> is a sunny daily driver you\u2019ll actually want to use \u2014 and show off.",
        image: "https://res.cloudinary.com/suv4o/image/upload/q_auto,f_auto,w_900,e_sharpen:100/v1754209966/blog/the-keyboard-lab/keyboard-2_r8ujln",
        specs: [
            {
                id: 1,
                title: "Type of Keyboard",
                description:
                    "<ul><li>Keychron Q1 (75% layout)</li><li>Hot-swappable PCB</li><li>Double-gasket design</li><li>Full CNC-machined aluminum case</li><li>Wired (USB-C)</li></ul>",
            },
            {
                id: 2,
                title: "Type of Switches",
                description:
                    "<ul><li>Tealios V2 (Linear, 67g actuation force)</li><li>Filmed for stability</li><li>Lubed with Krytox 205g0 for smoother feel</li></ul>",
            },
            {
                id: 3,
                title: "Type of Keycaps",
                description:
                    "<ul><li>XDA Profile</li><li>PBT plastic</li><li>Yellow and white colourway</li><li>Minimalist and clean aesthetic</li></ul>",
            },
            {
                id: 4,
                title: "Type of Cable",
                description:
                    "<ul><li>High-quality coiled USB-C cable</li><li>Yellow to match the lemon-themed design</li><li>Aviator connector for modularity and tidier routing</li></ul>",
            },
            {
                id: 5,
                title: "Mods",
                description:
                    "<ul><li>Stabilisers removed and lubed with dielectric grease</li><li>Switches lubed and filmed for smoother action and tighter sound</li><li>PCB tape mod (3 layers of masking tape applied to the back)</li><li>Case stuffed with Poly-Fil to reduce hollowness and deepen acoustics</li><li>Padding applied between top and bottom case housing to prevent aluminum ping</li></ul>",
            },
        ],
    },
    {
        name: "Retrograde",
        slug: "retrograde",
        emoji: "\uD83D\uDD79\uFE0F",
        terminalName: "KB_03_RETRO.EXE",
        cover: "https://res.cloudinary.com/suv4o/image/upload/q_auto,f_auto,w_500,e_sharpen:100/v1754297235/blog/the-keyboard-lab/Retrograde_lfxjf3",
        tags: "sci-fi meets vintage, minimal, retro",
        description:
            "<strong>Retrograde</strong> is a sleek, wireless-capable 65% mechanical keyboard that brings together modern performance with a nostalgic, colorful twist. Built on the Gamakay LK67, this build combines a triple-mode connection (wired, Bluetooth, 2.4GHz) with a tactile media knob and vibrant RGB underglow. Outfitted with lubed Gateron Yellow Milky Pro switches and retro DSA keycaps, every keystroke is smooth, consistent, and full of personality. Extensive internal mods \u2014 including silicone filling, lubed stabilisers, and a layered tape mod \u2014 transform the plastic case into a surprisingly deep and refined thock machine. Whether you\u2019re gaming, working, or vibing, <strong>Retrograde</strong> is a love letter to the past with the functionality of the future.",
        image: "https://res.cloudinary.com/suv4o/image/upload/q_auto,f_auto,w_900,e_sharpen:100/v1754297235/blog/the-keyboard-lab/Retrograde_lfxjf3",
        specs: [
            {
                id: 1,
                title: "Type of Keyboard",
                description:
                    "<ul><li>Gamakay LK67 (65% layout)</li><li>Hot-swappable (3-pin and 5-pin switch support)</li><li>Triple-mode: Wired, Bluetooth 5.0, and 2.4GHz</li><li>Plastic housing (white case)</li><li>Multi-function media knob (volume/play/pause)</li><li>RGB backlighting with sidelight effects</li></ul>",
            },
            {
                id: 2,
                title: "Type of Switches",
                description:
                    "<ul><li>Gateron Yellow Milky Pro (Linear)</li><li>Lubed with Krytox 205g0</li><li>Switch films added for improved acoustics and stability</li></ul>",
            },
            {
                id: 3,
                title: "Type of Keycaps",
                description:
                    "<ul><li>DSA Profile</li><li>PBT plastic</li><li>Colourful retro-themed look with matte finish</li></ul>",
            },
            {
                id: 4,
                title: "Type of Cable",
                description:
                    "<ul><li>High-quality coiled USB-C cable</li><li>Grey and green to match retro aesthetic</li><li>Aviator connector for modularity and clean routing</li></ul>",
            },
            {
                id: 5,
                title: "Mods",
                description:
                    "<ul><li>Stabilisers removed and lubed with dielectric grease</li><li>Switches lubed and filmed for smoother action and tighter sound</li><li>PCB tape mod (3 layers of masking tape applied to the back)</li><li>Silicone liquid filling applied inside case housing to eliminate hollowness</li></ul>",
            },
        ],
    },
];
