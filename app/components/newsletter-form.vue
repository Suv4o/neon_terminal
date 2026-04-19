<script setup lang="ts">
const email = ref("");
const submitted = ref(false);

function handleSubmit() {
    if (email.value) {
        submitted.value = true;
    }
}
</script>

<template>
    <section class="border-muted bg-surface border-2 p-6">
        <h2 class="text-primary mb-4 font-mono text-xl font-bold">[ NEWSLETTER_DAEMON ]</h2>

        <div v-if="!submitted">
            <p class="text-muted mb-4 font-mono text-sm">&gt; ./subscribe.sh</p>
            <form class="flex gap-2" @submit.prevent="handleSubmit">
                <div class="relative flex-1">
                    <span class="text-muted absolute top-1/2 left-0 -translate-y-1/2 font-mono">&gt;</span>
                    <input
                        v-model="email"
                        type="email"
                        placeholder="user@terminal.dev"
                        required
                        class="border-muted text-text placeholder:text-text/30 focus:border-primary w-full border-b-2 bg-transparent py-2 pl-5 font-mono text-sm outline-none"
                    />
                </div>
                <button
                    type="submit"
                    class="border-primary text-primary hover:bg-primary hover:text-background hover:shadow-glow border-2 px-4 py-2 font-mono text-sm font-semibold transition-all duration-150"

                >
                    [ENTER]
                </button>
            </form>
        </div>

        <div v-else class="text-accent font-mono text-sm">
            <p>&gt; SUBSCRIPTION_CONFIRMED</p>
            <p class="text-text/60 mt-1">Thank you for subscribing to the newsletter daemon.</p>
        </div>
    </section>
</template>
