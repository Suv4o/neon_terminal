<script setup lang="ts">
import { TAGS_BY_SLUG } from "~/data/tags";

const route = useRoute();
const slug = route.params.slug as string;

const tagMeta = TAGS_BY_SLUG[slug];

if (!tagMeta) {
    throw createError({ statusCode: 404, message: "Page not found" });
}

useHead({ title: `${tagMeta.title} — Neon Terminal` });

useSeoMeta({
    keywords: tagMeta.keywords,
    description: tagMeta.description,
    ogDescription: tagMeta.description,
    title: tagMeta.title,
    ogTitle: tagMeta.title,
    ogImage:
        "https://res.cloudinary.com/suv4o/image/upload/q_auto,f_auto,w_1200,e_sharpen:100/v1744618697/blog/emoji-hi-aleks_vvzmnd",
    ogUrl: `https://www.trpkovski.com/${route.path}`,
    ogSiteName: "Articles by Aleks Trpkovski",
    twitterTitle: tagMeta.title,
    twitterDescription: tagMeta.description,
    twitterImage:
        "https://res.cloudinary.com/suv4o/image/upload/q_auto,f_auto,w_1200,e_sharpen:100/v1744618697/blog/emoji-hi-aleks_vvzmnd",
    twitterCard: "summary",
});

const { data: allArticles } = await useAsyncData(`articles-tag-${slug}`, () =>
    queryCollection("articles").order("date", "DESC").all(),
);

const filteredArticles = computed(() => {
    if (!allArticles.value) return [];
    return allArticles.value.filter((a) => (a.articleTags ?? []).includes(tagMeta.tag));
});

function formatDate(date: string) {
    return new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
}
</script>

<template>
    <div>
        <h1 class="text-primary mb-8 font-mono text-4xl font-bold">&gt; grep -r "#{{ tagMeta.tag }}"</h1>

        <div v-if="filteredArticles.length" class="mt-8 space-y-0">
            <div
                v-for="article in filteredArticles"
                :key="article.path"
                class="border-muted/30 hover:bg-surface/50 flex cursor-pointer flex-col gap-2 border-b border-dotted py-4 transition-colors duration-150 sm:flex-row sm:items-center sm:gap-4"
                role="link"
                :tabindex="0"
                @click="navigateTo(article.path)"
                @keydown.enter="navigateTo(article.path)"
            >
                <span class="text-muted/60 shrink-0 font-mono text-xs">{{ formatDate(article.date) }}</span>
                <NuxtLink :to="article.path" class="text-text flex-1 font-mono text-sm no-underline">{{
                    article.title
                }}</NuxtLink>
                <div class="flex flex-wrap gap-2">
                    <TagBadge v-for="t in article.articleTags" :key="t" :tag="t" />
                </div>
            </div>
        </div>

        <div v-else class="mt-12 text-center">
            <p class="text-muted font-mono text-lg">NO LOGS FOUND FOR #{{ tagMeta.tag }}</p>
        </div>

        <div v-if="filteredArticles.length" class="mt-8 text-center">
            <p class="text-muted/40 font-mono text-xs">[ END OF LOG ]</p>
        </div>
    </div>
</template>
