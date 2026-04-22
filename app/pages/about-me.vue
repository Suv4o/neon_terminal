<script setup lang="ts">
import { careerEntries } from "~/data/career";
import { techStack } from "~/data/tech-stack";

useHead({ title: "About Me — Neon Terminal" });

const categories = ["frontend", "backend", "ai"] as const;

function itemsByCategory(category: string) {
    return techStack.filter((item) => item.category === category);
}
</script>

<template>
    <div class="mx-auto max-w-4xl">
        <h1 class="text-primary mb-8 font-mono text-4xl font-bold">&gt; cat /etc/about_me</h1>

        <!-- Avatar -->
        <TerminalCard filename="IMG_VIEWER.SH">
            <template #media>
                <div class="mx-auto w-[400px] max-w-full">
                    <PortraitEyeTracker />
                </div>
            </template>

            <div class="space-y-4">
                <p class="text-muted font-mono text-sm">&gt; <span class="text-primary">Aleks Trpkovski</span></p>
                <p class="text-text/80 text-sm leading-relaxed">
                    Hi, I'm Aleks Trpkovski, a Software Engineer with nearly a decade of experience in the tech
                    industry. I'm passionate about building modern, user-friendly applications using JavaScript
                    and its related technologies. My work revolves around creating seamless, engaging web
                    experiences, and I'm always exploring new ways to push the boundaries of what's possible on the web.
                </p>
                <p class="text-text/80 text-sm leading-relaxed">
                    Recently, I've been diving deep into the world of AI and Large Language Models (LLMs). I'm
                    fascinated by how these technologies can enhance the way we build software, and I love
                    experimenting with ways to integrate AI into everyday development workflows. Whether it's
                    automating repetitive tasks or creating smarter user interactions, AI is something I'm
                    incredibly excited about and actively exploring.
                </p>
                <p class="text-text/80 text-sm leading-relaxed">
                    This blog is my space to share what I've learned along the way. Through my
                    <NuxtLink to="/articles" class="text-primary underline">articles</NuxtLink>, I cover a range
                    of topics from JavaScript frameworks and modern web development to practical AI applications.
                    I enjoy breaking down complex concepts into approachable, easy-to-follow guides that can help
                    developers at any level.
                </p>
                <p class="text-text/80 text-sm leading-relaxed">
                    Beyond coding, I have a love for mechanical keyboards. There's something satisfying about the
                    tactile feedback and the craftsmanship behind each build. I enjoy reviewing and sharing my
                    collection, which you can explore in the
                    <NuxtLink to="/the-keyboard-lab" class="text-primary underline">Keyboard Lab</NuxtLink>
                    section.
                </p>
                <p class="text-text/80 text-sm leading-relaxed">
                    I'm also an avid landscape photographer. I find peace in capturing the beauty of the natural
                    world, and I've made some of my favourite shots available as free wallpapers on my
                    <a href="https://github.com/Suv4o/wallpaper-images" target="_blank" rel="noopener noreferrer" class="text-primary underline">GitHub wallpaper repository</a>.
                    You can also browse my photography in the
                    <NuxtLink to="/through-the-lens" class="text-primary underline">Through The Lens</NuxtLink>
                    section of this site.
                </p>
                <p class="text-text/80 text-sm leading-relaxed">
                    I hope this blog serves as a helpful resource for you, whether you're here to learn about the
                    latest in web development, explore AI, or just find some inspiration. Feel free to reach out
                    and connect with me, I'd love to hear from you!
                </p>
            </div>
        </TerminalCard>

        <!-- Tech Stack -->
        <section class="mt-12">
            <h2 class="text-muted mb-6 font-mono text-2xl font-bold">SYSTEM_CAPABILITIES --LIST</h2>
            <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div v-for="cat in categories" :key="cat" class="border-muted bg-surface border-2 p-4">
                    <h3 class="text-primary mb-3 font-mono text-sm font-bold uppercase">// {{ cat }}</h3>
                    <ul class="space-y-1">
                        <li v-for="item in itemsByCategory(cat)" :key="item.name" class="text-text font-mono text-xs">
                            &gt; {{ item.name }}
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- Career Timeline -->
        <section class="mt-12">
            <h2 class="text-muted mb-6 font-mono text-2xl font-bold">GIT_LOG --CAREER --ONELINE</h2>
            <div class="space-y-4">
                <div
                    v-for="entry in careerEntries"
                    :key="entry.commitHash"
                    class="border-muted/20 flex gap-4 border-b pb-4"
                >
                    <span class="text-primary shrink-0 font-mono text-xs">{{ entry.commitHash }}</span>
                    <div>
                        <p class="text-text font-mono text-sm font-bold">{{ entry.role }}</p>
                        <p class="text-muted font-mono text-xs">{{ entry.company }} · {{ entry.dateRange }}</p>
                        <p v-if="entry.description" class="text-text/60 mt-1 text-sm">{{ entry.description }}</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
