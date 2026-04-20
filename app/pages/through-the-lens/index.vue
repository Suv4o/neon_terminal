<script setup lang="ts">
import { photoCategories } from "~/data/photos";

useHead({ title: "Through The Lens — Neon Terminal" });

useSeoMeta({
    description:
        "Through The Lens — landscape photography by Aleksandar Trpkovski. Moments from the mountains, coasts, and cities.",
    ogDescription:
        "Through The Lens — landscape photography by Aleksandar Trpkovski. Moments from the mountains, coasts, and cities.",
    ogTitle: "Through The Lens — Neon Terminal",
});
</script>

<template>
    <div>
        <h1 class="text-primary mb-4 font-mono text-4xl font-bold">&gt; ls /media/photos</h1>

        <p class="text-text/80 mb-8 max-w-2xl text-sm leading-relaxed">
            Welcome to <span class="text-primary font-mono">Through The Lens</span> — a personal gallery of images
            I've taken in my free time. Landscapes shaped by towering mountains, endless coastlines, the vibrant glow of
            city nights and the quiet magic of starry skies.
        </p>

        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <PhotoCategoryCard v-for="cat in photoCategories" :key="cat.slug" :category="cat" />
        </div>

        <div class="mt-12 text-center">
            <p class="text-muted/40 font-mono text-xs">[ END OF GALLERY INDEX ]</p>
        </div>
    </div>
</template>
