<script setup lang="ts">
import type { PhotoCategory } from "~/data/photos";

interface Props {
    category: PhotoCategory;
}

defineProps<Props>();
</script>

<template>
    <NuxtLink :to="`/through-the-lens/${category.slug}`" class="group block">
        <div class="border-muted border-2">
            <!-- Terminal Header -->
            <div class="bg-surface text-muted flex h-6 items-center gap-2 px-3 font-mono text-xs">
                <span class="opacity-60">[ ]</span>
                <span class="opacity-60">[ ]</span>
                <span class="opacity-60">[x]</span>
                <span class="ml-2 truncate">{{ category.terminalName }}</span>
            </div>

            <!-- Image with Overlay -->
            <div class="relative aspect-[4/5] overflow-hidden">
                <img
                    :src="category.cover"
                    :alt="category.name"
                    class="h-full w-full object-cover transition-transform duration-150 group-hover:scale-105"
                    loading="lazy"
                />
                <div
                    class="bg-background/60 absolute inset-0 flex flex-col items-center justify-center backdrop-blur-sm"
                >
                    <h3 class="text-text font-mono text-xl font-bold">{{ category.name }}</h3>
                    <span class="text-muted mt-2 font-mono text-xs">[ {{ category.photos.length }} PHOTOS ]</span>
                </div>
            </div>
        </div>
    </NuxtLink>
</template>
