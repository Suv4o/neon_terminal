<script setup lang="ts">
const pitchValues = [-20, -15, -10, -5, 0, 5, 10, 15, 20];
const pupilXValues = [-15, -10, -5, 0, 5, 10, 15];
const pupilYValues = [-15, -7, 0, 7, 15];

const imageFiles: string[] = [];
for (const pitch of pitchValues) {
    for (const px of pupilXValues) {
        for (const py of pupilYValues) {
            imageFiles.push(`image_pitch${pitch}_px${px}_py${py}.webp`);
        }
    }
}

const currentImage = ref("image_pitch0_px0_py0.webp");
const isMobile = ref(false);
const motionEnabled = ref(false);
const motionSupported = ref(false);
const imagesLoaded = ref(false);

function findClosest(target: number, values: number[]): number {
    return values.reduce((prev, curr) => (Math.abs(curr - target) < Math.abs(prev - target) ? curr : prev));
}

function findClosestImage(targetPitch: number, targetPupilX: number, targetPupilY: number): string {
    const closestPitch = findClosest(targetPitch, pitchValues);
    const closestPupilX = findClosest(targetPupilX, pupilXValues);
    const closestPupilY = findClosest(targetPupilY, pupilYValues);

    const filename = `image_pitch${closestPitch}_px${closestPupilX}_py${closestPupilY}.webp`;
    if (imageFiles.includes(filename)) return filename;

    let minDistance = Infinity;
    let closestFile = "image_pitch0_px0_py0.webp";
    for (const file of imageFiles) {
        const match = file.match(/image_pitch(-?\d+)_px(-?\d+)_py(-?\d+)\.webp/);
        if (match?.[1] && match[2] && match[3]) {
            const distance =
                Math.abs(parseInt(match[1]) - targetPitch) +
                Math.abs(parseInt(match[2]) - targetPupilX) +
                Math.abs(parseInt(match[3]) - targetPupilY);
            if (distance < minDistance) {
                minDistance = distance;
                closestFile = file;
            }
        }
    }
    return closestFile;
}

function handleMouseMove(event: MouseEvent): void {
    if (motionEnabled.value) return;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const offsetX = (event.clientX - centerX) / centerX;
    const offsetY = (event.clientY - centerY) / centerY;
    currentImage.value = findClosestImage(offsetY * 20, offsetX * 15, -offsetY * 15);
}

function handleDeviceOrientation(event: DeviceOrientationEvent): void {
    if (!motionEnabled.value) return;
    const beta = event.beta ?? 0;
    const gamma = event.gamma ?? 0;
    const normalizedBeta = Math.max(-45, Math.min(45, beta - 45));
    const normalizedGamma = Math.max(-45, Math.min(45, gamma));
    currentImage.value = findClosestImage(
        (normalizedBeta / 45) * 20,
        (normalizedGamma / 45) * 15,
        -(normalizedBeta / 45) * 15,
    );
}

async function toggleMotion(): Promise<void> {
    if (!motionEnabled.value) {
        if (
            typeof DeviceOrientationEvent !== "undefined" &&
            typeof (DeviceOrientationEvent as any).requestPermission === "function"
        ) {
            try {
                const permission = await (DeviceOrientationEvent as any).requestPermission();
                if (permission !== "granted") return;
            } catch {
                return;
            }
        }
        motionEnabled.value = true;
        window.addEventListener("deviceorientation", handleDeviceOrientation);
    } else {
        motionEnabled.value = false;
        window.removeEventListener("deviceorientation", handleDeviceOrientation);
        currentImage.value = "image_pitch0_px0_py0.webp";
    }
}

function preloadImages(): void {
    let loadedCount = 0;
    for (const file of imageFiles) {
        const img = new Image();
        img.onload = img.onerror = () => {
            loadedCount++;
            if (loadedCount === imageFiles.length) imagesLoaded.value = true;
        };
        img.src = `/images/portrait-eye-tracking/${file}`;
    }
}

onMounted(() => {
    isMobile.value =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
        ("ontouchstart" in window && window.DeviceOrientationEvent !== undefined);
    motionSupported.value = "DeviceOrientationEvent" in window;
    preloadImages();
    window.addEventListener("mousemove", handleMouseMove);
});

onUnmounted(() => {
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("deviceorientation", handleDeviceOrientation);
});
</script>

<template>
    <div>
        <div class="relative mx-auto aspect-square w-full overflow-hidden">
            <img
                v-for="file in imageFiles"
                :key="file"
                :src="`/images/portrait-eye-tracking/${file}`"
                alt="Interactive portrait of Aleksandar Trpkovski"
                class="absolute inset-0 h-full w-full object-contain"
                :class="{ 'opacity-100 z-10': currentImage === file, 'opacity-0 z-0': currentImage !== file }"
                loading="eager"
            />
        </div>

        <div v-if="isMobile && motionSupported" class="mt-4 flex justify-center">
            <button
                class="border-primary text-primary hover:bg-primary hover:text-background border-2 px-4 py-2 font-mono text-xs transition-all duration-150"
                @click="toggleMotion"
            >
                &gt; {{ motionEnabled ? "DISABLE_MOTION.SH" : "ENABLE_MOTION.SH" }}
            </button>
        </div>

        <p class="text-muted/60 mt-3 text-center font-mono text-xs">
            <span v-if="!isMobile">[ MOVE CURSOR TO TRACK ]</span>
            <span v-else-if="motionEnabled">[ TILT DEVICE TO TRACK ]</span>
            <span v-else>[ TAP ABOVE TO ENABLE MOTION ]</span>
        </p>
    </div>
</template>
