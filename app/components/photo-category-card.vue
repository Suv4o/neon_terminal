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
                    <span class="text-3xl">{{ category.emoji }}</span>
                    <h3 class="text-text mt-2 font-mono text-xl font-bold">{{ category.name }}</h3>
                    <p class="text-muted/80 mt-1 px-4 text-center font-mono text-xs">{{ category.description }}</p>
                    <div class="mt-3 flex flex-wrap justify-center gap-1">
                        <span
                            v-for="tag in category.tags"
                            :key="tag"
                            class="text-primary/80 font-mono text-xs"
                        >
                            #{{ tag }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </NuxtLink>
</template>
