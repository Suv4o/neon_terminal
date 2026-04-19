#!/usr/bin/env node
/**
 * One-off migration script: copies the legacy blog articles from
 * `articles/YYYY/MM/DD/slug.md` into `content/articles/slug.md`,
 * stripping Nuxt Content v1 syntax that is incompatible with Nuxt
 * Content v3 and injecting a machine-sortable `date` field derived
 * from the directory path.
 */

import { readdirSync, readFileSync, writeFileSync, rmSync, existsSync, mkdirSync, statSync } from "node:fs";
import { join, basename, dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const SOURCE = join(ROOT, "articles");
const TARGET = join(ROOT, "content", "articles");

function walk(dir) {
    const results = [];
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
        const full = join(dir, entry.name);
        if (entry.isDirectory()) {
            results.push(...walk(full));
        } else if (entry.isFile() && entry.name.endsWith(".md") && entry.name !== "index.md") {
            results.push(full);
        }
    }
    return results;
}

function extractDateFromPath(filePath) {
    // Path shape: <SOURCE>/YYYY/MM/DD/slug.md
    const rel = relative(SOURCE, filePath);
    const match = rel.match(/^(\d{4})\/(\d{2})\/(\d{2})\//);
    if (!match) {
        throw new Error(`Could not extract date from path: ${rel}`);
    }
    return `${match[1]}-${match[2]}-${match[3]}`;
}

function parseFrontmatter(content) {
    const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
    if (!match) {
        throw new Error("No frontmatter found");
    }
    return { raw: match[1], body: match[2] };
}

function stripLegacySyntax(body) {
    let cleaned = body;

    // Remove the "{{$document.published}} • ... by **[...]](/)**" metadata line
    // (typically appears right after the H1 heading)
    cleaned = cleaned.replace(/^_\{\{\$document\.[\s\S]*?\}\}[^\n]*_\s*$/gm, "");

    // Remove ::tag-pills{...}:: blocks
    cleaned = cleaned.replace(/::tag-pills\{[^}]*\}\s*\n::\s*\n?/g, "");

    // Remove ::audio-player{...}:: blocks (multi-line safe)
    cleaned = cleaned.replace(/::audio-player\{[^}]*\}\s*\n::\s*\n?/g, "");

    // Remove any lingering ::Error404:: blocks
    cleaned = cleaned.replace(/::Error404\s*\n::\s*\n?/g, "");

    // Rewrite legacy cross-article URLs from /YYYY/MM/DD/slug to /articles/YYYY/MM/DD/slug.
    // Matches any `/YYYY/MM/DD/slug` that is preceded by a URL-context character
    // (`"`, `'`, `(`, `[`, `=`, whitespace, or start-of-line). This intentionally
    // skips relative paths like `content/2026/...` which appear inside code blocks
    // as filesystem-path examples and must not be rewritten.
    cleaned = cleaned.replace(/(^|["'(\[=\s])\/(\d{4}\/\d{2}\/\d{2}\/[a-z0-9-]+)/gim, "$1/articles/$2");

    // Collapse 3+ consecutive newlines to 2
    cleaned = cleaned.replace(/\n{3,}/g, "\n\n");

    return cleaned.trim() + "\n";
}

function injectDate(frontmatterRaw, isoDate) {
    // If a `date:` field already exists, leave it. Otherwise insert one.
    if (/^date:/m.test(frontmatterRaw)) {
        return frontmatterRaw;
    }
    return `date: "${isoDate}"\n${frontmatterRaw}`;
}

function main() {
    if (!existsSync(TARGET)) {
        mkdirSync(TARGET, { recursive: true });
    }

    // Clean the target directory recursively
    if (existsSync(TARGET)) {
        rmSync(TARGET, { recursive: true });
    }
    mkdirSync(TARGET, { recursive: true });

    const sourceFiles = walk(SOURCE);
    let migrated = 0;

    for (const srcPath of sourceFiles) {
        const isoDate = extractDateFromPath(srcPath);
        const raw = readFileSync(srcPath, "utf8");

        let fm, body;
        try {
            ({ raw: fm, body } = parseFrontmatter(raw));
        } catch (err) {
            console.warn(`Skipping (no frontmatter): ${basename(srcPath)}`);
            continue;
        }

        const cleanedBody = stripLegacySyntax(body);
        const newFm = injectDate(fm, isoDate);
        const output = `---\n${newFm}\n---\n\n${cleanedBody}`;

        // Preserve YYYY/MM/DD subdirectory structure
        const rel = relative(SOURCE, srcPath);
        const targetPath = join(TARGET, rel);
        mkdirSync(dirname(targetPath), { recursive: true });
        writeFileSync(targetPath, output, "utf8");
        migrated++;
    }

    console.log(`Migrated ${migrated} articles to content/articles/`);
}

main();
