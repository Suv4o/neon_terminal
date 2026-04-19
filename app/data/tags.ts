export interface Tag {
    name: string;
    color: string;
}

// Colours sourced from spec-kit-context.md and extended with sensible
// on-brand variants for tags that appear in the migrated articles.
export const TAG_COLORS: Record<string, string> = {
    JavaScript: "#ffd700",
    TypeScript: "#3075bf",
    AI: "#03e3fc",
    CSS: "#a30d8a",
    NuxtJS: "#022832",
    "Nuxt.js": "#022832",
    Firebase: "#ff9900",
    Node: "#3e863d",
    "Node.js": "#3e863d",
    Python: "#356B99",
    ReactJS: "#61dafb",
    "React.js": "#61dafb",
    Vite: "#bd34fe",
    "Vue.js": "#42b883",
    "Nest.js": "#e0234e",
    Nitro: "#00dc82",
    LangChain: "#1c3d5a",
    AWS: "#ff9900",
    FrontEnd: "#ee5f53",
    BackEnd: "#f1918b",
    DevOps: "#6b7280",
    VSCode: "#007acc",
    UI: "#a30d8a",
    Tech: "#03e3fc",
    Productivity: "#00ff41",
    Advice: "#f1918b",
    Hobby: "#ffd700",
    Entertainment: "#bd34fe",
    Other: "#6b7280",
};
