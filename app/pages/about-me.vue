<script setup lang="ts">
import { careerEntries } from "~/data/career";
import { techStack } from "~/data/tech-stack";

useHead({ title: "About Me — Neon Terminal" });

const categories = ["frontend", "backend", "tools", "cloud"] as const;

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

            <div class="space-y-2">
                <p class="text-muted font-mono text-sm">&gt; <span class="text-primary">Aleksandar Trpkovski</span></p>
                <p class="text-text/80 text-sm leading-relaxed">
                    Full-stack developer based in Melbourne, Australia. I love building fast, accessible web
                    applications, collecting mechanical keyboards, and taking photos of interesting things.
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
