<script setup lang="ts">
import { TAG_COLORS, TAGS_BY_NAME } from "~/data/tags";

interface Props {
    tag: string;
    linked?: boolean;
}

const props = withDefaults(defineProps<Props>(), { linked: true });

const bgColor = computed(() => TAG_COLORS[props.tag] ?? "#f1918b");
const tagSlug = computed(() => TAGS_BY_NAME[props.tag]?.slug ?? props.tag.toLowerCase().replace(/[^a-z0-9]/g, ""));
</script>

<template>
    <NuxtLink
        v-if="props.linked"
        :to="`/${tagSlug}`"
        class="text-background inline-block px-2 py-0.5 font-mono text-xs font-normal no-underline transition-opacity hover:opacity-80"
        :style="{ backgroundColor: bgColor }"
        @click.stop
    >
        [#{{ props.tag }}]
    </NuxtLink>
    <span
        v-else
        class="text-background inline-block px-2 py-0.5 font-mono text-xs font-normal"
        :style="{ backgroundColor: bgColor }"
    >
        [#{{ props.tag }}]
    </span>
</template>
