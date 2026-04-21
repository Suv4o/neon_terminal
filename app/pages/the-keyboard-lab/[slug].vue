<script setup lang="ts">
import { keyboards } from "~/data/keyboards";

const route = useRoute();
const slug = route.params.slug as string;

const keyboard = keyboards.find((kb) => kb.slug === slug);

if (!keyboard) {
    throw createError({ statusCode: 404, message: "Keyboard not found" });
}

useHead({ title: `${keyboard.name} — The Keyboard Lab` });

useSeoMeta({
    description: keyboard.description.replace(/<[^>]*>/g, "").slice(0, 160),
    ogTitle: `${keyboard.emoji} ${keyboard.name} — The Keyboard Lab`,
    ogImage: keyboard.image,
});

const currentIndex = keyboards.findIndex((kb) => kb.slug === slug);
const prevKeyboard = currentIndex > 0 ? keyboards[currentIndex - 1] : null;
const nextKeyboard = currentIndex < keyboards.length - 1 ? keyboards[currentIndex + 1] : null;
</script>

<template>
    <div v-if="keyboard" class="mx-auto max-w-5xl">
        <!-- Back to lab -->
        <NuxtLink to="/the-keyboard-lab" class="text-muted hover:text-primary mb-6 inline-block font-mono text-sm">
            &lt; BACK_TO_LAB.EXE
        </NuxtLink>

        <!-- Header -->
        <header class="mb-6">
            <h1 class="text-primary mb-2 font-mono text-3xl font-bold">
                {{ keyboard.emoji }} {{ keyboard.name }}
            </h1>
            <p class="text-muted font-mono text-xs">{{ keyboard.tags }}</p>
        </header>

        <!-- Two-column layout -->
        <div class="flex flex-col gap-8 lg:flex-row">
            <!-- Main content -->
            <div class="lg:flex-1">
                <!-- Description -->
                <div class="text-text/80 mb-6 leading-relaxed" v-html="keyboard.description"></div>

                <!-- Featured image -->
                <div class="border-muted border-2">
                    <div class="bg-surface text-muted flex h-6 items-center gap-2 px-3 font-mono text-xs">
                        <span class="opacity-60">[ ]</span>
                        <span class="opacity-60">[ ]</span>
                        <span class="opacity-60">[x]</span>
                        <span class="ml-2 truncate">{{ keyboard.terminalName }}_IMG.BMP</span>
                    </div>
                    <img
                        :src="keyboard.image"
                        :alt="keyboard.name"
                        class="w-full object-cover"
                        loading="eager"
                    />
                </div>
            </div>

            <!-- Specs sidebar -->
            <div class="w-full lg:w-72 lg:flex-none">
                <div class="border-muted border-2">
                    <div class="bg-surface text-muted flex h-6 items-center gap-2 px-3 font-mono text-xs">
                        <span class="truncate">// SYSTEM_SPECS</span>
                    </div>
                    <div class="divide-muted/30 divide-y p-4">
                        <div v-for="spec in keyboard.specs" :key="spec.id" class="py-3 first:pt-0 last:pb-0">
                            <h3 class="text-primary mb-2 font-mono text-sm font-bold">{{ spec.title }}</h3>
                            <div class="spec-list text-text/80 text-sm" v-html="spec.description"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Navigation -->
        <div class="border-muted mt-12 border-t-2 pt-6">
            <div class="flex items-center justify-between">
                <ActionButton
                    v-if="prevKeyboard"
                    label="PREV"
                    :to="`/the-keyboard-lab/${prevKeyboard.slug}`"
                />
                <div v-else />

                <span class="text-muted/40 font-mono text-xs">
                    {{ currentIndex + 1 }} of {{ keyboards.length }}
                </span>

                <ActionButton
                    v-if="nextKeyboard"
                    label="NEXT"
                    :to="`/the-keyboard-lab/${nextKeyboard.slug}`"
                />
                <div v-else />
            </div>
        </div>
    </div>
</template>

<style scoped>
.spec-list :deep(ul) {
    list-style: disc;
    padding-left: 1.25rem;
}

.spec-list :deep(li) {
    margin-bottom: 0.25rem;
    font-family: var(--font-mono);
    font-size: 0.8rem;
}
</style>
