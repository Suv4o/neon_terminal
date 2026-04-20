<script setup lang="ts">
import { photoCategories } from "~/data/photos";

const route = useRoute();
const slug = route.params.category as string;

const category = photoCategories.find((c) => c.slug === slug);

if (!category) {
    throw createError({ statusCode: 404, message: "Category not found" });
}

useHead({ title: `${category.name} — Through The Lens` });

useSeoMeta({
    description: category.description,
    ogDescription: category.description,
    ogTitle: `${category.name} — Through The Lens`,
});

const { data: categoryPage } = await useAsyncData(`gallery-${slug}`, () =>
    queryCollection("throughTheLens").path(`/through-the-lens/${slug}`).first(),
);

const gridImages = computed(() => (categoryPage.value as any)?.gridImages ?? []);

function slugFromTitle(title: string): string {
    return title
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "");
}

function aspectClass(aspect?: string): string {
    switch (aspect) {
        case "portrait":
            return "aspect-[3/4]";
        case "landscape":
            return "aspect-[4/3]";
        case "square":
            return "aspect-square";
        default:
            return "aspect-[4/3]";
    }
}
</script>

<template>
    <div>
        <NuxtLink to="/through-the-lens" class="text-muted hover:text-primary mb-6 inline-block font-mono text-sm">
            &lt; BACK_TO_GALLERY.EXE
        </NuxtLink>

        <div class="mb-8">
            <div class="flex items-center gap-3">
                <span class="text-2xl">{{ category.emoji }}</span>
                <h1 class="text-primary font-mono text-3xl font-bold">{{ category.name }}</h1>
            </div>
            <span class="text-muted mt-1 block font-mono text-xs">{{ category.terminalName }}</span>
            <p class="text-text/70 mt-2 text-sm">{{ category.description }}</p>
        </div>

        <div v-if="gridImages.length" class="columns-1 gap-4 sm:columns-2 lg:columns-3">
            <div
                v-for="img in gridImages"
                :key="img.filename"
                class="group mb-4 break-inside-avoid overflow-hidden"
            >
                <NuxtLink :to="`/through-the-lens/${slug}/${slugFromTitle(img.title)}`" class="block">
                    <div class="border-muted border-2 transition-all duration-150 group-hover:border-primary">
                        <div class="overflow-hidden" :class="aspectClass(img.aspect)">
                            <img
                                :src="`/images/through-the-lens/${slug}/${img.filename}`"
                                :alt="img.title"
                                class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                loading="lazy"
                            />
                        </div>
                        <div class="bg-surface px-3 py-2">
                            <p class="text-text truncate font-mono text-xs font-bold">{{ img.title }}</p>
                            <p v-if="img.location" class="text-muted/60 truncate font-mono text-xs">
                                {{ img.location }}
                            </p>
                        </div>
                    </div>
                </NuxtLink>
            </div>
        </div>

        <div v-else class="mt-12 text-center">
            <p class="text-muted font-mono text-lg">NO IMAGES FOUND</p>
        </div>

        <div v-if="gridImages.length" class="mt-8 text-center">
            <p class="text-muted/40 font-mono text-xs">
                [ {{ gridImages.length }} IMAGES — END OF GALLERY ]
            </p>
        </div>
    </div>
</template>
