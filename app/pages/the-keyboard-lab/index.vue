<script setup lang="ts">
import { keyboards } from "~/data/keyboards";

useHead({ title: "The Keyboard Lab — Neon Terminal" });
</script>

<template>
    <div>
        <h1 class="text-primary mb-8 font-mono text-4xl font-bold">&gt; ls /dev/keyboards</h1>

        <div class="grid gap-8 md:grid-cols-2">
            <KeyboardCard v-for="kb in keyboards" :key="kb.slug" :keyboard="kb" />
        </div>
    </div>
</template>
