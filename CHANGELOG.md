# Changelog

All notable changes to the Enide grammar will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Added

- Grammar synchronised with `enide-cli`: new `__array` library (`__length`, `__join`, `__addStart`, `__addEnd`) and `__time` library (`__timeOut`, `__timeInterval`), `__date.__milliseconds`, and `methods.method.__clear`, in the interfaces, mappers and all grammar files.
- `ErrorLabels` now accepts 31 optional extra labels (`file`, `didYouMean`, `includedFrom`, `size`, `index`, `path`, `available`, `element` and the `hint*` messages). The new `errorLabels({...})` helper replaces the positional `errorLabel(...)` for declaring them, which is kept for backwards compatibility.
- `exemplesEntry` pads each example list to 10 names.

### Changed

- Translation updates synchronised from `enide-cli`, mainly in `kimbundu`, `kriolu`, `lingala`, `shona`, `yoruba` and `zulu` (for example the `boolean` type keyword in `kimbundu`, `kriolu` and `yoruba`), plus `constAssignment` in `english`.

### Fixed

- `readme.md` rewritten to match the current grammar shape: documented the `words`, `specialValues`, `accessModifiers`, and `example` top-level fields, the new `__standard` library, `__grammar` command, `__break`/`__continue` methods, `__class`/`__constructor` sentences, and the `__labels`/`__InitError` additions to `errors`. Removed the outdated `BooleanStructure` description - booleans are now a plain `DocStructure` type, with `true`/`false`/`null` literals living under `specialValues`.
- `readme.md` and `CONTRIBUTING.md` project structure diagrams updated to include `interfaces/`, `mappers/`, `utils/`, and `GLOBALMAP.ts`, which existed in the codebase but weren't documented.
- `GLOBAL_REPLACE.md` example table corrected: `Αθήνα` transliterates to `Athna` (not `Athina`) and `القاهرة` transliterates to `ALQAHR` (not `Alqahrt`), verified against the actual `Normalize()` implementation. Added a "Known limitations" section explaining why (accented-letter lookups miss the map, caseless scripts force uppercase output, and unmapped characters with no Latin decomposition are dropped rather than approximated).

### Known issues

- `src/languages/grammars/hangugeo.ts` (Korean) is a complete grammar file that is **not registered** in `language-list.json`, so it's currently unreachable via `Grammer("hangugeo")`. Flagged in `readme.md` and `CONTRIBUTING.md` as an open contribution.

- Ongoing grammar reviews and community contributions.

---

## [0.1.0] - 2026-04-23

### Added

- Initial grammar structure under `src/languages/`
- Core grammar entry point `grammar.ts`
- Grammar class definition in `grammar.class.ts`
- Grammar import logic in `grammar.import.ts`
- Initial language registry in `language-list.json`
- Project scaffolding with `tsconfig.json` and `package.json`

---

## How to read this file

Each version entry is divided into the following sections when applicable:

- **Added** - new features, rules, or files introduced
- **Changed** - changes to existing grammar rules or behavior
- **Deprecated** - rules or features that will be removed in a future version
- **Removed** - rules or features that have been removed
- **Fixed** - grammar errors, inconsistencies, or bugs that were corrected
- **Security** - any security-related changes

---
