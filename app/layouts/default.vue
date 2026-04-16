<template>
    <div class="bg-background text-text min-h-screen">
        <NavBar />
        <main class="mx-auto max-w-7xl px-4 pt-20 pb-12">
            <slot />
        </main>
        <FooterBar />
        <CrtOverlay />
    </div>
</template>
