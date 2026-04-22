<script setup lang="ts">
interface TranscriptSegment {
    start: number;
    end: number;
    text: string;
}

interface Props {
    audioSrc: string;
    transcriptSrc: string;
}

const props = defineProps<Props>();

const audioRef = ref<HTMLAudioElement | null>(null);
const progressBarRef = ref<HTMLElement | null>(null);
const isPlaying = ref(false);
const currentTime = ref(0);
const duration = ref(0);
const transcript = ref<TranscriptSegment[]>([]);
const isLoaded = ref(false);
const hasAudio = ref(true);
const isDragging = ref(false);
const showTranscript = ref(false);

onMounted(async () => {
    try {
        const res = await fetch(props.transcriptSrc);
        if (!res.ok) {
            hasAudio.value = false;
            return;
        }
        transcript.value = await res.json();
        // Use last transcript segment end time as fallback duration
        if (!duration.value && transcript.value.length) {
            duration.value = transcript.value[transcript.value.length - 1].end;
        }
    } catch {
        hasAudio.value = false;
    }

    // Pick up duration if audio already loaded before mount
    if (audioRef.value && audioRef.value.duration && isFinite(audioRef.value.duration)) {
        duration.value = audioRef.value.duration;
    }

    document.addEventListener("mousemove", onDragMove);
    document.addEventListener("mouseup", onDragEnd);
    document.addEventListener("touchmove", onTouchDragMove);
    document.addEventListener("touchend", onDragEnd);
});

onUnmounted(() => {
    document.removeEventListener("mousemove", onDragMove);
    document.removeEventListener("mouseup", onDragEnd);
    document.removeEventListener("touchmove", onTouchDragMove);
    document.removeEventListener("touchend", onDragEnd);
});

function updateDuration() {
    if (audioRef.value && audioRef.value.duration && isFinite(audioRef.value.duration)) {
        duration.value = audioRef.value.duration;
        isLoaded.value = true;
    }
}

function onLoadedMetadata() {
    updateDuration();
}

function onTimeUpdate() {
    if (!audioRef.value) return;
    if (!isDragging.value) {
        currentTime.value = audioRef.value.currentTime;
    }
    updateDuration();
}

function onEnded() {
    isPlaying.value = false;
}

async function togglePlay() {
    if (!audioRef.value) return;
    if (isPlaying.value) {
        audioRef.value.pause();
        isPlaying.value = false;
    } else {
        await audioRef.value.play();
        isPlaying.value = true;
    }
}

function seekFromEvent(clientX: number) {
    if (!audioRef.value || !duration.value || !progressBarRef.value) return;
    const rect = progressBarRef.value.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    audioRef.value.currentTime = ratio * duration.value;
    currentTime.value = audioRef.value.currentTime;
}

function onProgressClick(event: MouseEvent) {
    seekFromEvent(event.clientX);
}

function onDragStart(event: MouseEvent) {
    isDragging.value = true;
    seekFromEvent(event.clientX);
}

function onTouchDragStart(event: TouchEvent) {
    isDragging.value = true;
    seekFromEvent(event.touches[0].clientX);
}

function onDragMove(event: MouseEvent) {
    if (!isDragging.value) return;
    seekFromEvent(event.clientX);
}

function onTouchDragMove(event: TouchEvent) {
    if (!isDragging.value) return;
    seekFromEvent(event.touches[0].clientX);
}

function onDragEnd() {
    isDragging.value = false;
}

function seekToSegment(segment: TranscriptSegment) {
    if (!audioRef.value) return;
    audioRef.value.currentTime = segment.start;
    if (!isPlaying.value) {
        audioRef.value.play();
        isPlaying.value = true;
    }
}

const progress = computed(() => {
    if (!duration.value) return 0;
    return (currentTime.value / duration.value) * 100;
});

const activeSegmentIndex = computed(() => {
    return transcript.value.findIndex((s) => currentTime.value >= s.start && currentTime.value < s.end);
});

function formatTime(seconds: number): string {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
}
</script>

<template>
    <div v-if="hasAudio" class="border-surface bg-background mt-8 border-2">
        <!-- Terminal Header -->
        <div class="border-surface flex items-center gap-2 border-b-2 px-4 py-2">
            <span class="bg-primary h-2.5 w-2.5 rounded-full" style="animation: glow-dot 2s ease-in-out infinite"></span>
            <span class="bg-muted/40 h-2.5 w-2.5 rounded-full"></span>
            <span class="bg-muted/40 h-2.5 w-2.5 rounded-full"></span>
            <span class="text-muted ml-2 font-mono text-xs">AUDIO_SUMMARY.SH</span>
        </div>

        <div class="p-4">
            <audio
                ref="audioRef"
                :src="props.audioSrc"
                preload="auto"
                @loadedmetadata="onLoadedMetadata"
                @durationchange="onLoadedMetadata"
                @timeupdate="onTimeUpdate"
                @ended="onEnded"
            />

            <!-- Controls Row -->
            <div class="flex items-center gap-4">
                <!-- Play/Pause Button -->
                <button
                    class="text-primary border-primary flex h-10 w-10 shrink-0 items-center justify-center border-2 font-mono transition-colors duration-150 hover:bg-primary hover:text-background"
                    @click="togglePlay"
                >
                    <span v-if="isPlaying" class="text-sm">| |</span>
                    <span v-else class="ml-0.5 text-sm">&#9654;</span>
                </button>

                <!-- Progress Bar -->
                <div
                    ref="progressBarRef"
                    class="progress-bar group relative flex-1 cursor-pointer select-none py-3"
                    @click="onProgressClick"
                    @mousedown="onDragStart"
                    @touchstart.prevent="onTouchDragStart"
                >
                    <!-- Track -->
                    <div class="bg-surface relative h-1.5">
                        <!-- Fill -->
                        <div class="bg-primary h-full" :style="{ width: progress + '%' }"></div>
                    </div>
                </div>

                <!-- Time -->
                <span class="text-muted shrink-0 font-mono text-xs">
                    {{ formatTime(currentTime) }} / {{ formatTime(duration) }}
                </span>
            </div>

            <!-- Transcript Toggle -->
            <button
                v-if="transcript.length"
                class="text-muted hover:text-primary mt-3 font-mono text-xs transition-colors duration-150"
                @click="showTranscript = !showTranscript"
            >
                {{ showTranscript ? "[-] HIDE_TRANSCRIPT" : "[+] SHOW_TRANSCRIPT" }}
            </button>

            <!-- Transcript -->
            <div v-if="transcript.length && showTranscript" class="mt-3 max-h-32 overflow-y-auto">
                <div class="space-y-1">
                    <button
                        v-for="(segment, i) in transcript"
                        :key="i"
                        class="block w-full text-left font-mono text-sm transition-colors duration-100"
                        :class="activeSegmentIndex === i ? 'text-primary' : 'text-text/50 hover:text-text/80'"
                        @click="seekToSegment(segment)"
                    >
                        <span class="text-muted/40 mr-2 text-xs">{{ formatTime(segment.start) }}</span>
                        {{ segment.text }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
