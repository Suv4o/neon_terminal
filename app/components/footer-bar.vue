<script setup lang="ts">
import { socialLinks } from "~/data/social";
</script>

<template>
    <footer class="border-muted bg-surface border-t-2">
        <div class="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-8">
            <div class="flex gap-6">
                <a
                    v-for="link in socialLinks"
                    :key="link.name"
                    :href="link.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-muted hover:text-primary hover:shadow-glow font-mono text-sm transition-all duration-150"

                    :aria-label="link.name"
                >
                    {{ link.name }}
                </a>
            </div>
            <p class="text-muted/60 font-mono text-xs">SYSTEM_STATUS: ONLINE</p>
        </div>
    </footer>
</template>
