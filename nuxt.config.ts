import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    devtools: { enabled: true },
    modules: ["@nuxt/content", "@nuxt/fonts"],
    app: {
        head: {
            htmlAttrs: { lang: "en" },
            meta: [
                {
                    name: "description",
                    content: "Aleksandar Trpkovski — Full-stack developer blog with a retro terminal aesthetic.",
                },
                { property: "og:type", content: "website" },
                { property: "og:site_name", content: "trpkovski.com" },
                {
                    property: "og:description",
                    content: "A developer blog with a retro-futuristic Neon Terminal design.",
                },
            ],
        },
    },
    css: ["./app/assets/css/main.css"],
    vite: {
        plugins: [tailwindcss()],
    },
    nitro: {
        preset: "vercel-static",
    },
    fonts: {
        families: [
            { name: "Fira Code", provider: "google" },
            { name: "Ubuntu", provider: "google" },
        ],
    },
});
