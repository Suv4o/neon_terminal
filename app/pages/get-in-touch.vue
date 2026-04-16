<script setup lang="ts">
import { socialLinks } from "~/data/social";

useHead({ title: "Get In Touch — Neon Terminal" });

const form = reactive({
    name: "",
    email: "",
    message: "",
});
const submitted = ref(false);
const errors = reactive({
    name: "",
    email: "",
    message: "",
});

function validate(): boolean {
    errors.name = form.name.trim() ? "" : "IDENTIFY_USER required";
    errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? "" : "Valid RETURN_PATH required";
    errors.message = form.message.trim() ? "" : "TRANSMISSION_DATA required";
    return !errors.name && !errors.email && !errors.message;
}

function handleSubmit() {
    if (validate()) {
        submitted.value = true;
    }
}
</script>

<template>
    <div class="mx-auto max-w-2xl">
        <h1 class="text-primary mb-8 font-mono text-4xl font-bold">&gt; mail -s "Hello"</h1>

        <div v-if="!submitted" class="border-muted bg-surface border-2 p-6">
            <form class="space-y-6" @submit.prevent="handleSubmit">
                <!-- Name -->
                <div>
                    <label class="text-muted mb-2 block font-mono text-sm">IDENTIFY_USER</label>
                    <div class="relative">
                        <span class="text-muted absolute top-1/2 left-0 -translate-y-1/2 font-mono">&gt;</span>
                        <input
                            v-model="form.name"
                            type="text"
                            class="text-text focus:border-primary w-full border-b-2 border-transparent bg-transparent py-2 pl-5 font-mono text-sm outline-none"
                            placeholder="your_name"
                        />
                    </div>
                    <p v-if="errors.name" class="text-primary mt-1 font-mono text-xs">{{ errors.name }}</p>
                </div>

                <!-- Email -->
                <div>
                    <label class="text-muted mb-2 block font-mono text-sm">RETURN_PATH</label>
                    <div class="relative">
                        <span class="text-muted absolute top-1/2 left-0 -translate-y-1/2 font-mono">&gt;</span>
                        <input
                            v-model="form.email"
                            type="email"
                            class="text-text focus:border-primary w-full border-b-2 border-transparent bg-transparent py-2 pl-5 font-mono text-sm outline-none"
                            placeholder="user@domain.com"
                        />
                    </div>
                    <p v-if="errors.email" class="text-primary mt-1 font-mono text-xs">{{ errors.email }}</p>
                </div>

                <!-- Message -->
                <div>
                    <label class="text-muted mb-2 block font-mono text-sm">TRANSMISSION_DATA</label>
                    <div class="relative">
                        <span class="text-muted absolute top-3 left-0 font-mono">&gt;</span>
                        <textarea
                            v-model="form.message"
                            rows="5"
                            class="text-text focus:border-primary w-full resize-none border-b-2 border-transparent bg-transparent py-2 pl-5 font-mono text-sm outline-none"
                            placeholder="Enter transmission data..."
                        ></textarea>
                    </div>
                    <p v-if="errors.message" class="text-primary mt-1 font-mono text-xs">{{ errors.message }}</p>
                </div>

                <ActionButton label="SEND_TRANSMISSION.EXE" type="submit" />
            </form>
        </div>

        <div v-else class="border-accent bg-surface border-2 p-6">
            <p class="text-accent font-mono text-lg">&gt; TRANSMISSION_SENT</p>
            <p class="text-text/60 mt-2 font-mono text-sm">
                Your message has been received. Thank you for reaching out.
            </p>
        </div>

        <!-- Social Links -->
        <section class="mt-12">
            <h2 class="text-muted mb-4 font-mono text-lg">// ALTERNATE_CHANNELS</h2>
            <div class="space-y-2">
                <a
                    v-for="link in socialLinks"
                    :key="link.name"
                    :href="link.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-text hover:text-primary block font-mono text-sm transition-colors duration-150"
                    style="cursor: crosshair"
                >
                    &gt; ssh {{ link.url.replace("https://", "") }}
                </a>
            </div>
        </section>
    </div>
</template>
