<script setup lang="ts">
import { photoCategories } from "~/data/photos";

useHead({ title: "Through The Lens — Neon Terminal" });
</script>

<template>
    <div>
        <h1 class="text-primary mb-8 font-mono text-4xl font-bold">&gt; ls /media/photos</h1>

        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <PhotoCategoryCard v-for="cat in photoCategories" :key="cat.slug" :category="cat" />
        </div>
    </div>
</template>
