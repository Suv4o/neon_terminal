<script setup lang="ts">
defineProps<{ error: { statusCode: number; message: string } }>();
</script>

<template>
    <div class="bg-background flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <CrtOverlay />
        <h1 class="text-primary mb-4 font-mono text-6xl font-bold">{{ error.statusCode }}</h1>
        <p class="text-muted mb-2 font-mono text-2xl">ERR_CONNECTION_REFUSED</p>
        <p class="text-text/60 mb-8 font-mono text-sm">{{ error.message }}</p>
        <ActionButton label="RETURN_HOME.EXE" to="/" />
    </div>
</template>
