<script setup lang="ts">
import type { Keyboard } from "~/data/keyboards";

interface Props {
    keyboard: Keyboard;
}

defineProps<Props>();
</script>

<template>
    <TerminalCard :filename="`ID: ${keyboard.hexId}`" :grayscale-hover="true">
        <template #media>
            <img :src="keyboard.cover" :alt="keyboard.name" class="aspect-video w-full object-cover" loading="lazy" />
        </template>

        <div class="space-y-3">
            <h3 class="text-text font-mono text-lg font-bold">{{ keyboard.name }}</h3>
            <p class="text-muted font-mono text-xs">&gt; Switch: [{{ keyboard.switchType }}]</p>
            <p class="text-muted font-mono text-xs">&gt; Layout: [{{ keyboard.layout }}]</p>
            <p class="text-text/70 text-sm">{{ keyboard.description }}</p>
            <ActionButton label="INSPECT.EXE" :to="`/the-keyboard-lab/${keyboard.slug}`" />
        </div>
    </TerminalCard>
</template>
