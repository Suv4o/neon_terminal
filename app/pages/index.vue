<script setup lang="ts">
useHead({ title: "trpkovski.com — Neon Terminal" });

const { data: articles } = await useAsyncData("latest-articles", () =>
    queryCollection("articles").order("date", "DESC").limit(3).all(),
);
</script>

<template>
    <div class="flex flex-col gap-12 lg:flex-row">
        <!-- Hero Sidebar (40%) -->
        <aside class="lg:sticky lg:top-24 lg:w-2/5 lg:self-start">
            <TerminalCard filename="whoami.sh">
                <template #media>
                    <PortraitEyeTracker />
                </template>

                <div class="space-y-4">
                    <h1 class="text-primary glow-pulse font-mono text-3xl font-bold">&gt; whoami</h1>
                    <p class="text-muted font-mono text-sm">
                        Hello, I'm <span class="text-primary">Aleks</span>
                    </p>
                    <p class="text-text/80 text-sm leading-relaxed">
                        Welcome to my blog! I'm a Software Engineer with years of hands-on experience, passionate about
                        all things JavaScript! This is where I share my thoughts, learnings, and experiments with new
                        tech. If you're curious to know more about me, check out the <NuxtLink to="/about-me" class="text-primary underline">about me</NuxtLink> section. Feel free to
                        reach out or connect with me on social media. I hope this blog becomes a helpful resource on
                        your journey.
                    </p>
                </div>
            </TerminalCard>
        </aside>

        <!-- Article Cards (60%) -->
        <section class="flex flex-col gap-8 lg:w-3/5">
            <h2 class="text-muted font-mono text-lg">&gt; cat /var/log/latest</h2>

            <ArticleCard
                v-for="article in articles"
                :key="article.path"
                :title="article.title"
                :description="article.description"
                :date="article.date"
                :image="article.image"
                :article-tags="article.articleTags"
                :read-time="article.readTime"
                :path="article.path"
            />

            <NewsletterForm />
        </section>
    </div>
</template>
