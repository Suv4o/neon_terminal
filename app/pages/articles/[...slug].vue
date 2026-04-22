<script setup lang="ts">
import articlesEmbeddings from "~/data/articles-embeddings.json";

interface ArticleEmbedding {
    articlePath: string;
    embeddings: number[];
}

function cosineSimilarity(a: number[], b: number[]): number {
    let dot = 0;
    let magA = 0;
    let magB = 0;
    for (let i = 0; i < a.length; i++) {
        dot += a[i] * b[i];
        magA += a[i] * a[i];
        magB += b[i] * b[i];
    }
    magA = Math.sqrt(magA);
    magB = Math.sqrt(magB);
    if (magA === 0 || magB === 0) return 0;
    return dot / (magA * magB);
}

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

const audioBasePath = computed(() => `/audio-summary/${slug}`);
const audioSrc = computed(() => `${audioBasePath.value}/summary.mp3`);
const transcriptSrc = computed(() => `${audioBasePath.value}/summary.json`);

const { data: allArticles } = await useAsyncData(`articles-all-${slug}`, () =>
    queryCollection("articles").order("date", "DESC").all(),
);

const nextArticle = computed(() => {
    if (!allArticles.value || !article.value) return null;
    const idx = allArticles.value.findIndex((a) => a.path === article.value!.path);
    return idx >= 0 && idx < allArticles.value.length - 1 ? allArticles.value[idx + 1] : null;
});

const similarArticles = computed(() => {
    if (!article.value || !allArticles.value) return [];
    const data = articlesEmbeddings as ArticleEmbedding[];
    const current = data.find((a) => article.value!.path.endsWith(a.articlePath));
    if (!current) return [];
    const topPaths = data
        .filter((a) => a.articlePath !== current.articlePath)
        .map((a) => ({
            path: `/articles${a.articlePath}`,
            score: cosineSimilarity(current.embeddings, a.embeddings),
        }))
        .sort((a, b) => b.score - a.score)
        .slice(0, 3);
    return topPaths
        .map((sim) => allArticles.value!.find((a) => a.path === sim.path))
        .filter(Boolean);
});

function formatDate(date: string) {
    return new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

const shareLabel = ref("SHARE.SH");

async function shareArticle() {
    if (typeof window === "undefined") return;
    const url = window.location.href;
    const title = article.value?.title ?? "Neon Terminal";

    if (navigator.share) {
        try {
            await navigator.share({ title, url });
            return;
        } catch {
            // User cancelled or share failed — fall through to clipboard
        }
    }

    await navigator.clipboard.writeText(url);
    shareLabel.value = "COPIED!";
    setTimeout(() => {
        shareLabel.value = "SHARE.SH";
    }, 2000);
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

            <!-- Audio Summary -->
            <AudioPlayer :audio-src="audioSrc" :transcript-src="transcriptSrc" />

            <!-- Markdown Content -->
            <div class="prose-terminal mt-8">
                <ContentRenderer :value="article" />
            </div>

            <!-- EOF + Navigation -->
            <div class="border-muted mt-12 border-t-2 pt-6">
                <p class="text-muted/40 mb-4 text-center font-mono text-sm">EOF</p>
                <div class="flex justify-between">
                    <ActionButton :label="shareLabel" type="button" @click="shareArticle" />
                    <ActionButton v-if="nextArticle" label="NEXT_POST" :to="nextArticle.path" />
                </div>
            </div>

            <!-- Similar Articles -->
            <SimilarArticles :articles="similarArticles" />
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
