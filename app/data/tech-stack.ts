export interface TechStackItem {
    name: string;
    category: "frontend" | "backend" | "tools" | "cloud";
}

export const techStack: TechStackItem[] = [
    { name: "Vue.js", category: "frontend" },
    { name: "Nuxt", category: "frontend" },
    { name: "TypeScript", category: "frontend" },
    { name: "Tailwind CSS", category: "frontend" },
    { name: "React", category: "frontend" },
    { name: "HTML/CSS", category: "frontend" },
    { name: "Node.js", category: "backend" },
    { name: "Python", category: "backend" },
    { name: "PostgreSQL", category: "backend" },
    { name: "Firebase", category: "backend" },
    { name: "REST APIs", category: "backend" },
    { name: "GraphQL", category: "backend" },
    { name: "Git", category: "tools" },
    { name: "VS Code", category: "tools" },
    { name: "Docker", category: "tools" },
    { name: "Figma", category: "tools" },
    { name: "Vite", category: "tools" },
    { name: "Prettier", category: "tools" },
    { name: "Vercel", category: "cloud" },
    { name: "AWS", category: "cloud" },
    { name: "Google Cloud", category: "cloud" },
    { name: "Cloudflare", category: "cloud" },
];
