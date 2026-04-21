<script setup lang="ts">
interface Props {
    filename: string;
    grayscaleHover?: boolean;
}

withDefaults(defineProps<Props>(), {
    grayscaleHover: false,
});
</script>

<template>
    <div class="border-muted group/card border-2">
        <!-- Hardware Header -->
        <div class="bg-surface text-muted flex h-6 items-center gap-2 px-3 font-mono text-xs">
            <span class="opacity-60">[ ]</span>
            <span class="opacity-60">[ ]</span>
            <span class="opacity-60">[x]</span>
            <span class="ml-2 truncate">{{ filename }}</span>
        </div>

        <!-- Media Bay -->
        <div v-if="$slots.media" class="media-bay relative overflow-hidden">
            <div
                :class="
                    grayscaleHover
                        ? 'media-grayscale grayscale transition-[filter] duration-150 hover:grayscale-0'
                        : ''
                "
            >
                <slot name="media" />
            </div>
        </div>

        <!-- Console Output -->
        <div v-if="$slots.default" class="bg-surface p-4">
            <slot />
        </div>
    </div>
</template>
