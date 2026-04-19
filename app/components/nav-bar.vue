<script setup lang="ts">
const isMenuOpen = ref(false);
const route = useRoute();

const navLinks = [
    { label: "Articles", to: "/articles" },
    { label: "The Keyboard Lab", to: "/the-keyboard-lab" },
    { label: "Through The Lens", to: "/through-the-lens" },
    { label: "About Me", to: "/about-me" },
    { label: "Get In Touch", to: "/get-in-touch" },
];

function isActive(to: string): boolean {
    const path = route.path;
    if (to === "/articles") {
        return path === "/articles" || path.startsWith("/articles/");
    }
    return path === to || path.startsWith(to + "/");
}
</script>

<template>
    <nav class="border-muted bg-background/90 fixed top-0 z-50 w-full border-b-2 backdrop-blur-md">
        <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
            <!-- Brand -->
            <NuxtLink to="/" class="text-primary font-mono text-lg font-bold">
                trpkovski.com &#x1f525;
            </NuxtLink>

            <!-- Desktop Links -->
            <div class="hidden gap-6 md:flex">
                <NuxtLink
                    v-for="link in navLinks"
                    :key="link.to"
                    :to="link.to"
                    class="font-mono text-sm uppercase transition-all duration-150"
                    :class="
                        isActive(link.to)
                            ? 'text-primary shadow-glow'
                            : 'text-text hover:text-primary hover:shadow-glow'
                    "
                >
                    {{ link.label }}
                </NuxtLink>
            </div>

            <!-- Mobile Hamburger -->
            <button
                class="text-text md:hidden"
                               aria-label="Toggle navigation menu"
                @click="isMenuOpen = !isMenuOpen"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                >
                    <path
                        v-if="!isMenuOpen"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                    <path v-else stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>

        <!-- Mobile Menu Panel -->
        <div v-if="isMenuOpen" class="border-muted bg-background border-t-2 md:hidden">
            <NuxtLink
                v-for="link in navLinks"
                :key="link.to"
                :to="link.to"
                class="block border-b px-4 py-3 font-mono text-sm uppercase transition-all duration-150"
                :class="
                    isActive(link.to)
                        ? 'border-muted/30 bg-surface text-primary'
                        : 'border-muted/30 text-text hover:bg-surface hover:text-primary'
                "
                               @click="isMenuOpen = false"
            >
                {{ link.label }}
            </NuxtLink>
        </div>
    </nav>
</template>
