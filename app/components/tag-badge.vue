<script setup lang="ts">
import { TAG_COLORS } from "~/data/tags";

interface Props {
    tag: string;
}

const props = defineProps<Props>();

const bgColor = computed(() => TAG_COLORS[props.tag] ?? "#f1918b");
</script>

<template>
    <span
        class="text-background inline-block px-2 py-0.5 font-mono text-xs font-normal"
        :style="{ backgroundColor: bgColor }"
    >
        [#{{ props.tag }}]
    </span>
</template>
