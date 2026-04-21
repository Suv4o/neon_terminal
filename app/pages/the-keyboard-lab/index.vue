<script setup lang="ts">
import { keyboards } from "~/data/keyboards";

useHead({ title: "The Keyboard Lab — Neon Terminal" });

useSeoMeta({
    description:
        "The Keyboard Lab — custom mechanical keyboard builds by Aleksandar Trpkovski. Specs, mods, and build details.",
    ogDescription:
        "The Keyboard Lab — custom mechanical keyboard builds by Aleksandar Trpkovski. Specs, mods, and build details.",
    ogTitle: "The Keyboard Lab — Neon Terminal",
});
</script>

<template>
    <div>
        <h1 class="text-primary mb-4 font-mono text-4xl font-bold">&gt; ls /dev/keyboards</h1>

        <p class="text-text/80 mb-8 max-w-2xl text-sm leading-relaxed">
            Welcome to <span class="text-primary font-mono">The Keyboard Lab</span> — a dedicated corner where I
            showcase my custom mechanical keyboard builds. From switches and keycaps to the mods and layouts, each build
            is documented with specs, personal notes, and insights that might help you on your own mechanical keyboard
            journey.
        </p>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <KeyboardCard v-for="kb in keyboards" :key="kb.slug" :keyboard="kb" />
        </div>

        <div class="mt-12 text-center">
            <p class="text-muted/40 font-mono text-xs">[ END OF KEYBOARD INDEX ]</p>
        </div>
    </div>
</template>
