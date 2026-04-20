<script setup lang="ts">
const route = useRoute();
const slugParts = route.params.slug as string[];
const slug = slugParts.join("/");

const { data: article } = await useAsyncData(`article-${slug}`, () =>
    queryCollection("articles").path(`/articles/${slug}`).first(),
);

if (!article.value) {
    throw createError({ statusCode: 404, message: "Article not found" });
}

useHead({ title: `${article.value.title} — Neon Terminal` });

const { data: allArticles } = await useAsyncData("articles-for-nav", () =>
    queryCollection("articles").order("date", "DESC").all(),
);

const nextArticle = computed(() => {
    if (!allArticles.value || !article.value) return null;
    const idx = allArticles.value.findIndex((a) => a.path === article.value!.path);
    return idx >= 0 && idx < allArticles.value.length - 1 ? allArticles.value[idx + 1] : null;
});

function formatDate(date: string) {
    return new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

function shareArticle() {
    if (typeof window !== "undefined") {
        navigator.clipboard.writeText(window.location.href);
    }
}
</script>

<template>
    <div v-if="article" class="flex gap-8">
        <!-- TOC Sidebar -->
        <TableOfContents v-if="article.body?.toc?.links" :links="article.body.toc.links" class="hidden lg:block" />

        <!-- Article Content -->
        <article class="max-w-[720px] min-w-0 flex-1">
            <!-- Header -->
            <header class="mb-8">
                <div class="text-muted mb-4 flex flex-wrap items-center gap-3 font-mono text-xs">
                    <span>{{ formatDate(article.date) }}</span>
                    <span>EXEC_TIME: {{ article.readTime }}ms</span>
                </div>

                <h1 class="text-primary mb-4 font-mono text-3xl font-bold">{{ article.title }}</h1>

                <div class="mb-6 flex flex-wrap gap-2">
                    <TagBadge v-for="tag in article.articleTags" :key="tag" :tag="tag" />
                </div>
            </header>

            <!-- Markdown Content -->
            <div class="prose-terminal mt-8">
                <ContentRenderer :value="article" />
            </div>

            <!-- EOF + Navigation -->
            <div class="border-muted mt-12 border-t-2 pt-6">
                <p class="text-muted/40 mb-4 text-center font-mono text-sm">EOF</p>
                <div class="flex justify-between">
                    <ActionButton label="SHARE.SH" type="button" @click="shareArticle" />
                    <ActionButton v-if="nextArticle" label="NEXT_POST" :to="nextArticle.path" />
                </div>
            </div>
        </article>

        <!-- Whitespace Column -->
        <div class="hidden w-16 lg:block" />
    </div>
</template>

<style>
/* Prose styling for markdown content */
.prose-terminal h1 {
    display: none; /* Original articles include an H1 matching the title which is already rendered above */
}

.prose-terminal h2 {
    font-family: var(--font-mono);
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-primary);
    margin-top: 2rem;
    margin-bottom: 1rem;
}

.prose-terminal h3 {
    font-family: var(--font-mono);
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--color-text);
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
}

.prose-terminal p {
    margin-bottom: 1rem;
    line-height: 1.75;
}

.prose-terminal h2 code,
.prose-terminal h3 code {
    font-size: inherit;
    background-color: transparent;
    padding: 0;
}

.prose-terminal code {
    font-family: var(--font-mono);
    font-size: 0.875rem;
    background-color: var(--color-surface);
    padding: 0.125rem 0.375rem;
    color: var(--color-primary);
}

.prose-terminal pre {
    position: relative;
    background-color: #0d1f35;
    border-left: 3px solid var(--color-primary);
    padding: 1rem;
    margin: 1.5rem 0;
    overflow-x: auto;
    border-radius: 4px;
    line-height: 1.7;
    font-size: 0.875rem;
}

.prose-terminal pre code {
    background: none;
    padding: 0;
    color: #e0e6ed;
    font-family: var(--font-mono);
    font-size: 0.875rem;
}

/* Override Shiki background to match Neon Terminal */
.prose-terminal pre .shiki {
    background-color: #0d1f35 !important;
}

.prose-terminal ul,
.prose-terminal ol {
    list-style: disc;
    padding-left: 1.5rem;
    margin-bottom: 1rem;
}

.prose-terminal ol {
    list-style: decimal;
}

.prose-terminal li {
    margin-bottom: 0.25rem;
}

.prose-terminal a {
    color: var(--color-primary);
    text-decoration: underline;
}

.prose-terminal img {
    max-width: 100%;
    height: auto;
    border: 2px solid var(--color-muted);
    margin: 1rem 0;
}

.prose-terminal blockquote {
    border-left: 3px solid var(--color-muted);
    padding-left: 1rem;
    margin: 1rem 0;
    color: var(--color-text);
    opacity: 0.8;
}
</style>
