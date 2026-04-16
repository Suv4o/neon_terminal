<script setup lang="ts">
import { keyboards } from "~/data/keyboards";

const route = useRoute();
const slug = route.params.slug as string;

const keyboard = keyboards.find((kb) => kb.slug === slug);

if (!keyboard) {
    throw createError({ statusCode: 404, message: "Keyboard not found" });
}

useHead({ title: `${keyboard.name} — The Keyboard Lab` });
</script>

<template>
    <div v-if="keyboard" class="mx-auto max-w-3xl">
        <NuxtLink to="/the-keyboard-lab" class="text-muted hover:text-primary mb-6 inline-block font-mono text-sm">
            &lt; BACK_TO_LAB.EXE
        </NuxtLink>

        <h1 class="text-primary mb-2 font-mono text-3xl font-bold">{{ keyboard.name }}</h1>
        <p class="text-muted mb-6 font-mono text-xs">ID: {{ keyboard.hexId }}</p>

        <TerminalCard :filename="`${keyboard.hexId}_IMG.BMP`">
            <template #media>
                <img
                    :src="keyboard.cover"
                    :alt="keyboard.name"
                    class="aspect-video w-full object-cover"
                    loading="eager"
                />
            </template>
        </TerminalCard>

        <p class="text-text/80 mt-6">{{ keyboard.description }}</p>

        <div class="border-muted bg-surface mt-8 border-2 p-6">
            <h2 class="text-muted mb-4 font-mono text-lg font-bold">// SYSTEM_SPECS</h2>
            <div class="space-y-2">
                <p v-for="(value, key) in keyboard.specs" :key="key" class="text-text font-mono text-sm">
                    <span class="text-muted">&gt;</span> {{ key }}: <span class="text-primary">[{{ value }}]</span>
                </p>
            </div>
        </div>
    </div>
</template>
