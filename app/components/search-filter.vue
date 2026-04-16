<script setup lang="ts">
const model = defineModel<string>({ default: "" });
</script>

<template>
    <div class="relative">
        <span class="text-muted absolute top-1/2 left-0 -translate-y-1/2 font-mono">&gt;</span>
        <input
            v-model="model"
            type="text"
            placeholder='grep "search..."'
            class="border-muted text-text placeholder:text-text/30 focus:border-primary w-full border-b-2 bg-transparent py-2 pl-5 font-mono text-sm outline-none"
        />
    </div>
</template>
