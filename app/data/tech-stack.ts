export interface TechStackItem {
    name: string;
    category: "frontend" | "backend" | "ai";
}

export const techStack: TechStackItem[] = [
    { name: "JavaScript", category: "frontend" },
    { name: "TypeScript", category: "frontend" },
    { name: "Vue.js", category: "frontend" },
    { name: "Nuxt", category: "frontend" },
    { name: "React", category: "frontend" },
    { name: "Tailwind CSS", category: "frontend" },
    { name: "CSS", category: "frontend" },
    { name: "Vite", category: "frontend" },
    { name: "Node.js", category: "backend" },
    { name: "Python", category: "backend" },
    { name: "Firebase", category: "backend" },
    { name: "PostgreSQL", category: "backend" },
    { name: "REST APIs", category: "backend" },
    { name: "GraphQL", category: "backend" },
    { name: "LLMs", category: "ai" },
    { name: "Embeddings", category: "ai" },
    { name: "Prompt Engineering", category: "ai" },
    { name: "AI Integrations", category: "ai" },
];
