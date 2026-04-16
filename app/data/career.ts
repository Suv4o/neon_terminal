export interface CareerEntry {
    company: string;
    role: string;
    dateRange: string;
    commitHash: string;
    description?: string;
}

export const careerEntries: CareerEntry[] = [
    {
        company: "TechCorp Global",
        role: "Senior Frontend Developer",
        dateRange: "2023 – Present",
        commitHash: "a3f2c1d",
        description: "Leading the frontend architecture team, building design systems and performance-critical UIs.",
    },
    {
        company: "StartupIO",
        role: "Full-Stack Developer",
        dateRange: "2020 – 2023",
        commitHash: "7b4e9f2",
        description: "Built and maintained multiple web applications using Vue.js, Node.js, and Firebase.",
    },
    {
        company: "Digital Agency Co",
        role: "Frontend Developer",
        dateRange: "2018 – 2020",
        commitHash: "e1d8a3c",
        description: "Developed responsive web applications and e-commerce platforms for enterprise clients.",
    },
    {
        company: "University of Technology",
        role: "Computer Science (BSc)",
        dateRange: "2014 – 2018",
        commitHash: "0f2b7e1",
        description: "Studied computer science with a focus on web technologies and human-computer interaction.",
    },
];
