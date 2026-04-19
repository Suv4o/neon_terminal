<script setup lang="ts">
import { TAG_COLORS, TAGS_BY_NAME } from "~/data/tags";

interface Props {
    tag: string;
    linked?: boolean;
}

const props = withDefaults(defineProps<Props>(), { linked: true });

const bgColor = computed(() => TAG_COLORS[props.tag] ?? "#f1918b");
const tagSlug = computed(() => TAGS_BY_NAME[props.tag]?.slug ?? props.tag.toLowerCase().replace(/[^a-z0-9]/g, ""));

const textColor = computed(() => {
    const hex = bgColor.value.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.45 ? "#173353" : "#e0e6ed";
});
</script>

<template>
    <NuxtLink
        v-if="props.linked"
        :to="`/${tagSlug}`"
        class="inline-block px-2 py-0.5 font-mono text-xs font-normal no-underline transition-opacity hover:opacity-80"
        :style="{ backgroundColor: bgColor, color: textColor }"
        @click.stop
    >
        [#{{ props.tag }}]
    </NuxtLink>
    <span
        v-else
        class="inline-block px-2 py-0.5 font-mono text-xs font-normal"
        :style="{ backgroundColor: bgColor, color: textColor }"
    >
        [#{{ props.tag }}]
    </span>
</template>
