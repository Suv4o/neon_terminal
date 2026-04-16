<script setup lang="ts">
interface Props {
    label: string;
    to?: string;
    type?: "button" | "submit";
}

const props = withDefaults(defineProps<Props>(), {
    to: undefined,
    type: "button",
});
</script>

<template>
    <NuxtLink
        v-if="props.to"
        :to="props.to"
        class="border-primary text-primary hover:bg-primary hover:text-background hover:shadow-glow inline-block border-2 bg-transparent px-6 py-2 font-mono text-base font-semibold uppercase transition-all duration-150"
        style="cursor: crosshair"
    >
        &gt; {{ props.label }}
    </NuxtLink>
    <button
        v-else
        :type="props.type"
        class="border-primary text-primary hover:bg-primary hover:text-background hover:shadow-glow inline-block border-2 bg-transparent px-6 py-2 font-mono text-base font-semibold uppercase transition-all duration-150"
        style="cursor: crosshair"
    >
        &gt; {{ props.label }}
    </button>
</template>
