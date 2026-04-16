<script setup lang="ts">
useHead({ title: "Articles — Neon Terminal" });

const searchQuery = ref("");
const pageSize = 10;
const visibleCount = ref(pageSize);

const { data: allArticles } = await useAsyncData("all-articles", () =>
    queryCollection("articles").order("date", "DESC").all(),
);

const filteredArticles = computed(() => {
    if (!allArticles.value) return [];
    const query = searchQuery.value.toLowerCase();
    if (!query) return allArticles.value;
    return allArticles.value.filter(
        (a) => a.title.toLowerCase().includes(query) || a.tags.some((t: string) => t.toLowerCase().includes(query)),
    );
});

const visibleArticles = computed(() => filteredArticles.value.slice(0, visibleCount.value));
const hasMore = computed(() => visibleCount.value < filteredArticles.value.length);

function loadMore() {
    visibleCount.value += pageSize;
}

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
        <h1 class="text-primary mb-8 font-mono text-4xl font-bold">&gt; ls -la ./archive</h1>

        <SearchFilter v-model="searchQuery" />

        <div v-if="visibleArticles.length" class="mt-8 space-y-0">
            <NuxtLink
                v-for="article in visibleArticles"
                :key="article.path"
                :to="article.path"
                class="border-muted/30 hover:bg-surface/50 flex flex-col gap-2 border-b border-dotted py-4 transition-colors duration-150 sm:flex-row sm:items-center sm:gap-4"
            >
                <span class="text-muted/60 shrink-0 font-mono text-xs">{{ formatDate(article.date) }}</span>
                <span class="text-text flex-1 font-mono text-sm">{{ article.title }}</span>
                <div class="flex gap-2">
                    <TagBadge v-for="tag in article.tags" :key="tag" :tag="tag" />
                </div>
            </NuxtLink>
        </div>

        <div v-else class="mt-12 text-center">
            <p class="text-muted font-mono text-lg">NO LOGS FOUND</p>
        </div>

        <div v-if="hasMore" class="mt-8 text-center">
            <button
                class="border-muted text-muted hover:border-primary hover:text-primary hover:shadow-glow border-2 px-6 py-2 font-mono text-sm transition-all duration-150"
                style="cursor: crosshair"
                @click="loadMore"
            >
                [ LOAD_MORE.EXE ]
            </button>
        </div>

        <div v-if="!hasMore && visibleArticles.length" class="mt-8 text-center">
            <p class="text-muted/40 font-mono text-xs">[ END OF LOG ]</p>
        </div>
    </div>
</template>
