<script setup lang="ts">
import type { Keyboard } from "~/data/keyboards";

interface Props {
    keyboard: Keyboard;
}

defineProps<Props>();
</script>

<template>
    <NuxtLink :to="`/the-keyboard-lab/${keyboard.slug}`" class="group block">
        <div class="border-muted border-2">
            <!-- Terminal Header -->
            <div class="bg-surface text-muted flex h-6 items-center gap-2 px-3 font-mono text-xs">
                <span class="opacity-60">[ ]</span>
                <span class="opacity-60">[ ]</span>
                <span class="opacity-60">[x]</span>
                <span class="ml-2 truncate">{{ keyboard.terminalName }}</span>
            </div>

            <!-- Image -->
            <div class="relative overflow-hidden">
                <img
                    :src="keyboard.cover"
                    :alt="keyboard.name"
                    class="aspect-video w-full object-cover transition-transform duration-150 group-hover:scale-105"
                    loading="lazy"
                />
            </div>

            <!-- Info -->
            <div class="bg-surface/50 p-4">
                <div class="mb-2 flex items-center gap-2">
                    <span class="text-2xl">{{ keyboard.emoji }}</span>
                    <h3 class="text-text font-mono text-lg font-bold">{{ keyboard.name }}</h3>
                </div>
                <p class="text-muted/80 mb-3 font-mono text-xs">{{ keyboard.tags }}</p>
                <span
                    class="border-primary text-primary inline-block border-2 px-4 py-2 font-mono text-sm transition-colors duration-150 group-hover:bg-primary group-hover:text-background"
                >
                    [ INSPECT.EXE ]
                </span>
            </div>
        </div>
    </NuxtLink>
</template>
