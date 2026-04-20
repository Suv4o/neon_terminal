<script setup lang="ts">
import { photoCategories } from "~/data/photos";

const route = useRoute();
const categorySlug = route.params.category as string;
const photoSlug = route.params.photo as string;

const category = photoCategories.find((c) => c.slug === categorySlug);

if (!category) {
    throw createError({ statusCode: 404, message: "Category not found" });
}

const { data: photo } = await useAsyncData(`photo-${categorySlug}-${photoSlug}`, () =>
    queryCollection("throughTheLens").path(`/through-the-lens/${categorySlug}/${photoSlug}`).first(),
);

if (!photo.value) {
    throw createError({ statusCode: 404, message: "Photo not found" });
}

useHead({ title: `${photo.value.title} — Through The Lens` });

useSeoMeta({
    description: photo.value.description,
    ogDescription: photo.value.description,
    ogTitle: photo.value.title,
    ogImage: photo.value.image,
});

const { data: categoryPage } = await useAsyncData(`gallery-nav-${categorySlug}`, () =>
    queryCollection("throughTheLens").path(`/through-the-lens/${categorySlug}`).first(),
);

const gridImages = computed(() => (categoryPage.value as any)?.gridImages ?? []);

function slugFromTitle(title: string): string {
    return title
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "");
}

const currentIndex = computed(() => gridImages.value.findIndex((img: any) => slugFromTitle(img.title) === photoSlug));

const prevPhoto = computed(() => {
    if (currentIndex.value <= 0) return null;
    const img = gridImages.value[currentIndex.value - 1];
    return { slug: slugFromTitle(img.title), title: img.title };
});

const nextPhoto = computed(() => {
    if (currentIndex.value < 0 || currentIndex.value >= gridImages.value.length - 1) return null;
    const img = gridImages.value[currentIndex.value + 1];
    return { slug: slugFromTitle(img.title), title: img.title };
});
</script>

<template>
    <div v-if="photo" class="mx-auto max-w-4xl">
        <!-- Back to category -->
        <NuxtLink
            :to="`/through-the-lens/${categorySlug}`"
            class="text-muted hover:text-primary mb-6 inline-block font-mono text-sm"
        >
            &lt; BACK_TO_{{ category!.name.toUpperCase().replace(/\s/g, "_") }}.EXE
        </NuxtLink>

        <!-- Photo Header -->
        <header class="mb-6">
            <h1 class="text-primary mb-2 font-mono text-3xl font-bold">{{ photo.title }}</h1>
            <div class="text-muted flex flex-wrap items-center gap-3 font-mono text-xs">
                <span v-if="(photo as any).location">{{ (photo as any).location }}</span>
                <span v-if="gridImages.length">
                    {{ currentIndex + 1 }} / {{ gridImages.length }}
                </span>
            </div>
        </header>

        <!-- Markdown Content (includes photo, description, and Google Maps link) -->
        <div class="prose-terminal mb-8">
            <ContentRenderer :value="photo" />
        </div>

        <!-- Navigation -->
        <div class="border-muted mt-12 border-t-2 pt-6">
            <div class="flex items-center justify-between">
                <ActionButton
                    v-if="prevPhoto"
                    label="PREV"
                    :to="`/through-the-lens/${categorySlug}/${prevPhoto.slug}`"
                />
                <div v-else />

                <span class="text-muted/40 font-mono text-xs">
                    {{ currentIndex + 1 }} of {{ gridImages.length }}
                </span>

                <ActionButton
                    v-if="nextPhoto"
                    label="NEXT"
                    :to="`/through-the-lens/${categorySlug}/${nextPhoto.slug}`"
                />
                <div v-else />
            </div>
        </div>
    </div>
</template>

<style scoped>
.prose-terminal :deep(p) {
    margin-bottom: 1rem;
    line-height: 1.75;
}

.prose-terminal :deep(a) {
    color: var(--color-primary);
    font-family: var(--font-mono);
    font-size: 0.85rem;
    text-decoration: none;
    border: 2px solid var(--color-primary);
    padding: 0.35rem 0.75rem;
    display: inline-block;
    margin-bottom: 1rem;
    transition: background-color 0.15s, color 0.15s;
}

.prose-terminal :deep(a:hover) {
    background-color: var(--color-primary);
    color: var(--color-background);
}

.prose-terminal :deep(img) {
    max-width: 100%;
    height: auto;
    border: 2px solid var(--color-muted);
    margin: 1rem 0;
}
</style>
