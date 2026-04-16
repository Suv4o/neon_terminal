---
title: "Building a Terminal UI with CSS"
description: "How to create retro CRT effects and terminal-style interfaces using modern CSS techniques like gradients, filters, and animations."
date: "2026-03-15"
cover: "/images/articles/terminal-css.svg"
tags: ["CSS", "TypeScript"]
readingTime: 5
---

## Introduction

Building terminal-style user interfaces with CSS is a fascinating exercise in creative web development. The retro aesthetic of CRT monitors and command-line interfaces has seen a resurgence in modern web design.

## The Scanline Effect

The classic CRT scanline effect can be achieved with a simple `repeating-linear-gradient`:

```css
.scanlines {
    background: repeating-linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.15),
        rgba(0, 0, 0, 0.15) 1px,
        transparent 1px,
        transparent 2px
    );
}
```

## Neon Glow Effects

Neon glows are created using `box-shadow` with colour-matched rgba values:

```css
.neon-glow {
    box-shadow: 0 0 12px rgba(238, 95, 83, 0.6);
}
```

## Typography Choices

Monospace fonts are essential for the terminal aesthetic. Fira Code provides ligatures that make code look even more authentic.

## Conclusion

With just CSS, you can create convincing terminal interfaces that feel retro yet perform like modern web applications.
