<script setup lang="ts">
import { photoCategories } from "~/data/photos";

const route = useRoute();
const slug = route.params.category as string;

const category = photoCategories.find((c) => c.slug === slug);

if (!category) {
    throw createError({ statusCode: 404, message: "Category not found" });
}

useHead({ title: `${category.name} — Through The Lens` });
</script>

<template>
    <div v-if="category">
        <NuxtLink to="/through-the-lens" class="text-muted hover:text-primary mb-6 inline-block font-mono text-sm">
            &lt; BACK_TO_GALLERY.EXE
        </NuxtLink>

        <div class="mb-8 flex items-center gap-4">
            <h1 class="text-primary font-mono text-3xl font-bold">{{ category.name }}</h1>
            <span class="text-muted font-mono text-xs">{{ category.terminalName }}</span>
        </div>

        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div v-for="(photo, idx) in category.photos" :key="idx" class="border-muted border-2">
                <img :src="photo.src" :alt="photo.alt" class="aspect-square w-full object-cover" loading="lazy" />
                <p v-if="photo.caption" class="bg-surface text-muted px-3 py-2 font-mono text-xs">
                    {{ photo.caption }}
                </p>
            </div>
        </div>
    </div>
</template>
