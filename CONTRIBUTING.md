# Contributing to Enide Grammar

Thank you for taking the time to contribute. This document explains everything you need to know to propose changes, report issues, and get your contributions merged into the Enide grammar.

---

## Table of contents

- [Code of conduct](#code-of-conduct)
- [Getting started](#getting-started)
- [Project structure](#project-structure)
- [How to contribute](#how-to-contribute)
  - [Reporting errors](#reporting-errors)
  - [Suggesting improvements](#suggesting-improvements)
  - [Submitting a pull request](#submitting-a-pull-request)
- [Commit message conventions](#commit-message-conventions)
- [Branch naming conventions](#branch-naming-conventions)
- [Writing conventions](#writing-conventions)
- [Review process](#review-process)

---

## Code of conduct

All contributors are expected to engage with respect and good faith. Criticism should be directed at ideas, not people. Every contribution — regardless of the contributor's experience level — is valued.

---

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- [npm](https://www.npmjs.com/) v9 or higher
- [Git](https://git-scm.com/)

### Setup

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/claudiobentodaladev/enide-lang.git
   cd enide-lang
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a new branch for your changes:
   ```bash
   git checkout -b fix/your-branch-name
   ```

---

## Project structure

```
enide-lang/
├── src/
│   ├── languages/
│   │   ├── grammars/             # Grammar definition files
│   │   ├── grammar.class.ts      # Grammar class definition
│   │   ├── grammar.import.ts     # Grammar import logic
│   │   ├── grammar.ts            # Core grammar entry point
│   │   └── language-list.json    # List of supported languages
│   └── index.ts                  # Main entry point
├── .gitignore
├── package.json
├── CHANGELOG.md
├── CONTRIBUTING.md
├── readme.md
└── tsconfig.json
```

When making changes, always work inside `src/languages/`. If you are adding a new language, register it in `language-list.json` before creating its grammar file inside `grammars/`.

---

## How to contribute

### Reporting errors

If you found a grammar error, inconsistency, or incorrect rule but are not sure how to fix it, open an **Issue** on GitHub.

Your issue should include:

- **File and section** where the error is located
- **Description of the problem** — what is wrong and why
- **Expected behavior** — what the correct rule or output should be (if known)

Apply one of the following labels to your issue:

| Label | Description |
|---|---|
| `grammar-error` | Incorrect rule or definition |
| `inconsistency` | Conflicting rules across files |
| `incorrect-example` | A usage example that does not match the rule |
| `suggestion` | An idea to improve or extend the grammar |

### Suggesting improvements

For broader suggestions — new grammar structures, refactoring of existing rules, or language additions — open a **Discussion** on GitHub before submitting a pull request. This helps align your work with the project direction before you invest time writing code.

### Submitting a pull request

1. Make sure your changes are limited to a single concern per pull request.
2. Update `CHANGELOG.md` under the `[Unreleased]` section to describe your change.
3. Push your branch:
   ```bash
   git push origin fix/your-branch-name
   ```
4. Open a Pull Request on GitHub targeting the `main` branch.
5. Fill in the pull request template with a clear description of what was changed and why.

---

## Commit message conventions

This project follows the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.

### Format

```
<type>(<scope>): <short description>
```

### Types

| Type | When to use |
|---|---|
| `fix` | Correcting a grammar error or bug |
| `feat` | Adding a new grammar rule or language |
| `docs` | Changes to documentation only |
| `refactor` | Restructuring existing grammar without changing behavior |
| `chore` | Maintenance tasks (dependencies, config) |

### Examples

```bash
fix(grammar): correct verbal inversion rule in grammar.ts
feat(languages): add support for new language in language-list.json
docs(readme): update project structure section
refactor(grammar): split grammar.ts into smaller rule modules
```

---

## Branch naming conventions

Use the following prefixes for branch names:

| Prefix | Purpose |
|---|---|
| `fix/` | Bug fixes and grammar corrections |
| `feat/` | New features or language additions |
| `docs/` | Documentation-only changes |
| `refactor/` | Code or structure refactoring |
| `chore/` | Maintenance and configuration |

Examples:

```
fix/syntax-word-order
feat/add-portuguese-grammar
docs/update-contributing-guide
```

---

## Writing conventions

- Follow the existing patterns in `grammar.class.ts` when defining new grammar rules
- Keep grammar files focused — one responsibility per file
- When adding a new language, always register it in `language-list.json` first
- Maintain terminological consistency with the rest of the grammar
- Avoid mixing grammar concerns across unrelated files

---

## Review process

All pull requests are reviewed by a maintainer before merging. During review, you may be asked to:

- Clarify the motivation for a change
- Adjust the scope of the pull request
- Fix formatting or convention issues

Please be patient and responsive during the review process. Pull requests that remain inactive for 30 days without a response may be closed.

---

If you have any questions, open a Discussion on GitHub and the community will be happy to help.