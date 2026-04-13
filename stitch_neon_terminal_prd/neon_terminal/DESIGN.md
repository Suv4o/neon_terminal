# Neon Terminal Design System

### 1. Overview & Creative North Star
**Creative North Star: The Sovereign Console**
Neon Terminal is an editorial design system that rejects the "soft" aesthetics of modern SaaS in favor of the high-contrast, high-intent atmosphere of 90s terminal interfaces and cyberpunk hardware. It treats the browser as a tactical display, utilizing raw mechanical textures, monospace precision, and glowing phosphors.

The system breaks the standard grid through **Asymmetrical Anchoring**—where heavy left-hand sticky sidebars ground the layout while the right-hand content stream flows with intentional vertical offsets and "brutalist" card stacking.

### 2. Colors
The palette is built on a foundation of deep oceanic blues (`#173353`) and high-energy "Alert Red" (`#ee6053`).

*   **The "No-Line" Rule:** Traditional 1px borders are replaced by background shifts (e.g., `surface` to `surface_container`) or high-contrast utility borders (2px solid) that act as "frames" rather than dividers. Sectioning is achieved through the use of scanline overlays and tonal shifts.
*   **Surface Hierarchy:** 
    *   **Base:** `surface` (#173353) for the main environment.
    *   **Panels:** `surface_container` (#1b3b60) for interactive card bodies.
    *   **Headers:** `surface_container_lowest` for "hardware" bars and navigation strips.
*   **Signature Textures:** Every surface should feel "active." This is achieved through a global CRT Scanline overlay (4px repeating linear gradient) and a subtle radial vignette to focus the user's eye on the center of the "terminal."

### 3. Typography
Typography is the voice of the system: authoritative, technical, and rhythmic.

*   **Display & Headlines:** Space Grotesk (sizes: `2.25rem`, `1.5rem`). Used for page titles and card headers to provide a futuristic, wide-set feel.
*   **Body:** Plus Jakarta Sans (sizes: `1rem`, `1.125rem`). Chosen for high legibility within technical descriptions, providing a clean contrast to the monospace accents.
*   **Labels & Code:** Fira Code / Mono (sizes: `0.875rem`, `0.75rem`). Used for system status, "AVAILABLE COMMANDS," and metadata.

The hierarchy uses the `>` character as a prompt prefix, signaling that every headline is a potential command or entry point.

### 4. Elevation & Depth
Elevation is not conveyed through soft shadows, but through **Tonal Layering** and "Glow States."

*   **The Layering Principle:** Content exists on a flat Z-axis but is visually "stacked" using `surface_container` tiers.
*   **Ambient Shadows:** We use "Neon Glows" instead of shadows. 
    *   **Standard Elevation:** `0 0 15px rgba(238, 96, 83, 0.5)` (Primary Glow).
    *   **Utility Shadow:** `shadow-sm` for minor depth.
*   **Glassmorphism:** Navigation bars use `bg-transparent` with a backdrop blur and a bottom border of `primary/30` to simulate a floating HUD (Heads-Up Display).

### 5. Components
*   **Terminal Cards:** A three-part construction: a "Hardware Header" (darker bar with status icons), the "Media Bay" (image with a primary color overlay), and the "Console Output" (text content).
*   **Action Buttons:** Styled as `READ.EXE`—sharp corners (0.125rem), 1px primary border, and a "solid-fill" hover state that inverted text color.
*   **Input Fields:** Styled as a command prompt. No bounding box; only a label followed by an active blinking cursor (`animate-blink`).
*   **Status Tags:** High-contrast blocks with specific syntax: `[#TagValue]`. Uses a palette of vibrant coding-language colors (Gold, Blue, Cyan, Magenta) to provide immediate visual scanning.

### 6. Do's and Don'ts
*   **Do:** Use `cursor: crosshair` for interactive terminal elements to enhance the "targeting" metaphor.
*   **Do:** Implement "typing" animations for primary page headers to simulate data loading.
*   **Don't:** Use rounded corners exceeding `0.5rem` (xl). The system must feel rigid and engineered.
*   **Don't:** Use transitions slower than 200ms. Interactions should feel "clicky" and instantaneous, like mechanical switches.
*   **Do:** Ensure a contrast ratio of at least 7:1 for all "Command" text (Primary on Surface) to maintain accessibility within the dark environment.