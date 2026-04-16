<script setup lang="ts">
interface Props {
    title: string;
    description: string;
    date: string;
    cover: string;
    tags: string[];
    readingTime: number;
    slug: string;
}

const props = defineProps<Props>();

const formattedDate = computed(() => {
    return new Date(props.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
});
</script>

<template>
    <TerminalCard :filename="slug + '.md'" :grayscale-hover="true">
        <template #media>
            <img :src="props.cover" :alt="props.title" class="aspect-video w-full object-cover" loading="lazy" />
        </template>

        <div class="space-y-3">
            <div class="text-muted flex items-center gap-3 font-mono text-xs">
                <span>{{ formattedDate }}</span>
                <span>EXEC_TIME: {{ props.readingTime }}ms</span>
            </div>

            <h3 class="text-text font-mono text-lg font-bold">{{ props.title }}</h3>

            <p class="text-text/70 text-sm">{{ props.description }}</p>

            <div class="flex flex-wrap gap-2">
                <TagBadge v-for="tag in props.tags" :key="tag" :tag="tag" />
            </div>

            <ActionButton label="READ.EXE" :to="`/articles/${props.slug}`" />
        </div>
    </TerminalCard>
</template>
