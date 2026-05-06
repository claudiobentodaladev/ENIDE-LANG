# Character Transliteration Map — `GLOBAL_MAP`

## Overview

`GLOBAL_MAP` is a character-by-character transliteration dictionary. Its purpose is to convert special, accented, or non-Latin characters into their closest ASCII/Latin equivalents. This is particularly useful for tasks like URL slug generation, search normalization, file naming, and any context where only plain ASCII characters are acceptable.

Each entry in the map follows the same principle: **the original character on the left becomes the replacement string on the right.**

---

## How It Works

When a string is processed using this map, every character that appears as a key is replaced by its corresponding value. Characters not present in the map are left unchanged. Some characters map to nothing (empty string), meaning they are simply removed from the output.

---

## Supported Character Groups

### Special Latin Characters

This group covers characters that exist in extended Latin alphabets used across various European languages — characters that look similar to standard Latin letters but carry diacritical features or ligatures.

| Original | Becomes | Notes |
|----------|---------|-------|
| æ / Æ | ae / AE | Latin ae ligature |
| œ / Œ | oe / OE | Latin oe ligature |
| ß | ss | German sharp s |
| ð / Ð | d / D | Icelandic eth |
| þ / Þ | th / TH | Icelandic thorn |
| ø / Ø | o / O | Scandinavian o with stroke |
| ł / Ł | l / L | Polish l with stroke |
| đ / Đ | d / D | Slavic d with stroke |
| ħ / Ħ | h / H | Maltese h with stroke |
| ŧ / Ŧ | t / T | Sami t with stroke |
| ŋ / Ŋ | n / N | Eng (used in Nordic and African languages) |
| ı / İ | i / I | Turkish dotless/dotted i |
| ĳ / Ĳ | ij / IJ | Dutch ij digraph ligature |

**Case is preserved wherever applicable** — lowercase originals produce lowercase results, and uppercase originals produce uppercase results.

---

### Cyrillic (Russian / Ukrainian)

The Cyrillic script, used in Russian, Ukrainian, and other Slavic languages, is transliterated following a common phonetic convention.

Some highlights:

- Single-letter characters (е, а, о, etc.) map to a single Latin letter.
- Characters with distinct sounds map to digraphs: for example, ж becomes **zh**, ш becomes **sh**, ч becomes **ch**, ю becomes **yu**, and я becomes **ya**.
- The soft sign (ь) and hard sign (ъ) have no phonetic equivalent in Latin and are therefore **removed entirely** (mapped to an empty string).
- Ukrainian-specific letters are also covered: і → i, ї → yi, є → ye, ґ → g.

---

### Greek

Greek letters are transliterated to their standard phonetic Latin equivalents, following the conventions commonly used in academic and technical contexts.

Some highlights:

- Most single Greek letters map to a single Latin letter (α → a, β → v, γ → g, etc.).
- Letters with multi-consonant sounds use digraphs: θ → **th**, χ → **ch**, ψ → **ps**, ξ → **x**.
- Both the standard sigma (σ) and the word-final sigma (ς) map to **s**.
- η (eta) maps to **i**, reflecting its modern Greek pronunciation.

---

### Arabic / Persian

Arabic letters are transliterated using a simplified, widely-understood Romanization system. Since Arabic is an abjad (consonant-based alphabet), each letter maps to one or more Latin characters representing its phonetic value.

Some highlights:

- Most letters map to a single character (ب → b, ت → t, د → d, etc.).
- Emphatic or guttural letters that have no direct Latin equivalent use digraphs: خ → **kh**, ش → **sh**, غ → **gh**, ذ → **dh**.
- The letter ع (ayin), a pharyngeal consonant, is approximated as **a**.
- Persian-specific letters are also included: پ → p, چ → **ch**, ژ → **zh**, گ → g.

---

## Key Behaviours to Note

- **One-to-many mapping:** A single character can produce multiple Latin characters (e.g., ß → ss, ж → zh). The resulting string may therefore be longer than the original.
- **Removal:** Some characters produce an empty result and are simply dropped (ь, ъ).
- **Case sensitivity:** The map distinguishes between uppercase and lowercase where relevant and preserves the appropriate casing in output.
- **Unchanged characters:** Any character not listed in the map passes through unmodified — this includes standard Latin letters, digits, punctuation, and whitespace.

---

## Example Transformations

| Input | Output | Language |
|-------|--------|----------|
| Ångström | Angstrom | — |
| Müßiggang | Mussiggang | German |
| Москва | Moskva | Russian |
| Αθήνα | Athina | Greek |
| القاهرة | Alqahrt | Arabic |
| Łódź | Lodz | Polish |
| Þórsmörk | THorsmork | Icelandic |

> Note: The examples above illustrate the map's character-level replacements. Characters not in the map (like standard accented vowels with diacritics — é, ü, etc.) would pass through unchanged unless handled by a separate normalization step.