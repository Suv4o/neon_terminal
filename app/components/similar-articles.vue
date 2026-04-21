<script setup lang="ts">
interface Article {
    path: string;
    title: string;
    description: string;
    date: string;
    image: string;
    articleTags: string[];
    readTime: number;
}

defineProps<{
    articles: Article[];
}>();

function formatDate(date: string) {
    return new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
}
</script>

<template>
    <div v-if="articles.length" class="mt-12">
        <h2 class="text-primary mb-6 font-mono text-lg font-bold">// SIMILAR_ARTICLES</h2>

        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <NuxtLink
                v-for="article in articles"
                :key="article.path"
                :to="article.path"
                class="group/sim border-surface hover:border-primary block border-2 transition-colors duration-150"
            >
                <img
                    :src="article.image"
                    :alt="article.title"
                    class="aspect-video w-full object-cover grayscale transition-all duration-300 group-hover/sim:grayscale-0"
                    loading="lazy"
                />
                <div class="p-4">
                    <div class="text-muted mb-2 flex items-center gap-3 font-mono text-xs">
                        <span>{{ formatDate(article.date) }}</span>
                        <span>EXEC_TIME: {{ article.readTime }}ms</span>
                    </div>
                    <h3 class="text-text line-clamp-2 font-mono text-sm font-bold">{{ article.title }}</h3>
                    <div class="mt-3 flex flex-wrap gap-1.5">
                        <TagBadge v-for="tag in article.articleTags" :key="tag" :tag="tag" />
                    </div>
                </div>
            </NuxtLink>
        </div>
    </div>
</template>
