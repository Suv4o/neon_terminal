<script setup lang="ts">
interface TocLink {
    id: string;
    text: string;
    depth: number;
    children?: TocLink[];
}

interface Props {
    links: TocLink[];
}

defineProps<Props>();

const activeId = ref("");

function flattenLinks(links: TocLink[]): TocLink[] {
    const result: TocLink[] = [];
    for (const link of links) {
        result.push(link);
        if (link.children) {
            result.push(...flattenLinks(link.children));
        }
    }
    return result;
}

onMounted(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    activeId.value = entry.target.id;
                }
            }
        },
        { rootMargin: "-80px 0px -70% 0px" },
    );

    const headings = document.querySelectorAll("article h2, article h3");
    headings.forEach((heading) => observer.observe(heading));

    onUnmounted(() => observer.disconnect());
});
</script>

<template>
    <nav class="sticky top-24 max-h-[calc(100vh-8rem)] w-[250px] shrink-0 self-start overflow-y-auto" aria-label="Table of contents">
        <h2 class="text-muted mb-4 font-mono text-sm font-bold">// TABLE_OF_CONTENTS</h2>
        <ul class="space-y-2">
            <li v-for="link in flattenLinks(links)" :key="link.id">
                <a
                    :href="`#${link.id}`"
                    class="block font-mono text-xs transition-colors duration-150"
                    :class="[
                        activeId === link.id ? 'text-primary' : 'text-text/50 hover:text-text',
                        link.depth === 3 ? 'pl-4' : '',
                    ]"
                >
                    <span v-if="activeId === link.id">&gt; </span>{{ link.text }}
                </a>
            </li>
        </ul>
    </nav>
</template>
