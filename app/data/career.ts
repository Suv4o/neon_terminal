export interface CareerEntry {
    company: string;
    role: string;
    dateRange: string;
    commitHash: string;
    description?: string;
}

export const careerEntries: CareerEntry[] = [
    {
        company: "Kmart Group",
        role: "Senior Software Engineer",
        dateRange: "Sep 2025 – Present",
        commitHash: "f7a3e1b",
        description:
            "Building AI-driven developer productivity tools including MCP servers for coding standards and semantic search.",
    },
    {
        company: "Revium",
        role: "Lead Developer",
        dateRange: "Dec 2021 – Sep 2025",
        commitHash: "b2d9c4f",
        description:
            "Led delivery of RAG-based search engines, AI chatbots, and agentic systems. Architected full-stack apps with React, Vue, Node.js, and TypeScript. Directed auth migration for 1M+ users. Mentored junior developers.",
    },
    {
        company: "Lizard Software / Praktika",
        role: "Frontend Web Developer",
        dateRange: "Jan 2021 – Dec 2021",
        commitHash: "8e1f6a3",
        description:
            "Designed and implemented frontend features for Praktika, a cloud-based dental practice management SaaS using Vue.js, PHP, and PostgreSQL.",
    },
    {
        company: "Zenexus (now Visy Retail Services)",
        role: "Web Developer",
        dateRange: "Jul 2019 – Jan 2021",
        commitHash: "3c7d2e9",
        description:
            "Developed customer-facing websites and internal apps using Vue.js, Node.js, Firebase, and WordPress. Built a custom interactive rack planner with real-time pricing.",
    },
    {
        company: "Victoria University",
        role: "IT Researcher",
        dateRange: "Mar 2016 – Aug 2018",
        commitHash: "1a4b8f0",
        description:
            "Conducted ML research using CNNs to analyse tourist visual content across 120 Melbourne hotels. Built web scraping and image classification pipelines.",
    },
];
