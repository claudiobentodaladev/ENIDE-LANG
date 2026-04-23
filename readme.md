# Download ENIDE

Download enide, check the guide and see all supported language in our official website is avaliable on http://www.enide.com

# Enide Grammar


Official repository of the **Enide** language grammar — a living document, collaboratively built by the community.

---

## What is this repository?

This repository contains the **complete grammar of the Enide language**: its rules, structures, patterns, and conventions. It is the source of truth for anyone who wants to understand, use, or contribute to the language.

Each language grammar is represented by a `Language` class instance that holds a `LanguageGrammar` object — a structured definition covering commands, built-in libraries, types, methods, sentences, and error messages.

The grammar is treated as a living document — subject to continuous revisions, corrections, and improvements with the help of the community.

---

## Repository structure

```
enide-lang/
├── src/
│   ├── languages/
│   │   ├── grammars/             # Grammar definition files (one per language)
│   │   ├── grammar.class.ts      # Language class and all grammar interfaces
│   │   ├── grammar.import.ts     # Grammar import logic
│   │   ├── grammar.ts            # Core grammar entry point
│   │   └── language-list.json    # List of registered languages
│   └── index.ts                  # Main entry point
├── .gitignore
├── package.json
├── CHANGELOG.md
├── CONTRIBUTING.md
├── readme.md
└── tsconfig.json
```

---

## Grammar structure

Every language grammar file must implement the `LanguageGrammar` interface and be wrapped in a `Language` class instance. The full structure is described below.

### Top-level: `LanguageGrammar`

| Field | Type | Description |
|---|---|---|
| `language` | `string` | The name of the language |
| `about` | `string` | A short description of the language |
| `include` | `DocStructure` | Include/import statement definition |
| `commands` | `CommandsGrammar` | CLI command definitions |
| `library` | `LibraryGrammar` | Built-in library definitions |
| `types` | `TypesGrammar` | Supported data type definitions |
| `methods` | `MethodsGrammar` | Built-in methods and control flow sentences |
| `errors` | `ErrorMessage` | Error tag and message definitions |

> `DocStructure` is a base shape used throughout the grammar: `{ main: string, __description: string }`. The `main` field holds the keyword as it appears in the language, and `__description` holds its human-readable explanation.

---

### Commands: `CommandsGrammar`

Defines the CLI commands available in the language.

| Command | Description |
|---|---|
| `__about` | Displays information about the language |
| `__help` | Shows the help menu |
| `__version` | Prints the current language version |
| `__languages` | Lists all available languages |
| `__documentation` | Opens or displays the documentation |

---

### Library: `LibraryGrammar`

Defines the built-in standard libraries.

#### Math — `__math`

| Member | Description |
|---|---|
| `main` | The keyword used to reference the math library |
| `__pi` | The Pi constant |
| `__sqrt` | Square root function |
| `__pow` | Power/exponentiation function |
| `__round` | Rounding function |
| `__random` | Random number generator |
| `__max` | Returns the maximum value |
| `__min` | Returns the minimum value |
| `__isNumber` | Checks if a value is a number |
| `__isInteger` | Checks if a value is an integer |
| `__isFloat` | Checks if a value is a float |

#### String — `__string`

| Member | Description |
|---|---|
| `main` | The keyword used to reference the string library |
| `__length` | Returns the length of a string |
| `__toUpperCase` | Converts a string to uppercase |
| `__toLowerCase` | Converts a string to lowercase |

#### Date — `__date`

| Member | Description |
|---|---|
| `main` | The keyword used to reference the date library |
| `__year` | Returns the current year |
| `__month` | Returns the current month |
| `__dayMonth` | Returns the day of the month |
| `__dayWeek` | Returns the day of the week |
| `__hour` | Returns the current hour |
| `__minute` | Returns the current minute |
| `__second` | Returns the current second |

---

### Types: `TypesGrammar`

Defines the built-in data types of the language.

| Type | Shape | Description |
|---|---|---|
| `__number` | `DocStructure` | Numeric type definition |
| `__string` | `DocStructure` | String type definition |
| `__boolean` | `BooleanStructure` | Boolean type with `values.__true` and `values.__false` keywords |
| `__object` | `DocStructure` | Object type definition |

> `BooleanStructure` extends the base with a `values` field containing the language-specific keywords for `true` and `false`.

---

### Methods: `MethodsGrammar`

Divided into two categories: built-in methods and control flow sentences.

#### Built-in Methods — `method`

| Method | Description |
|---|---|
| `__print` | Outputs a value to the console |
| `__scan` | Reads input from the user |
| `__return` | Returns a value from a function |

#### Control Flow Sentences — `sentences`

| Sentence | Description |
|---|---|
| `__function` | Function declaration keyword |
| `__if` | Conditional if statement |
| `__else` | Else branch of a conditional |
| `__while` | While loop |
| `__for` | For loop |
| `__switch` | Switch statement |
| `__case` | Case branch inside a switch |
| `__default` | Default branch inside a switch |
| `__try` | Try block for error handling |
| `__catch` | Catch block for error handling |
| `__finally` | Finally block for error handling |

---

### Errors: `ErrorMessage`

Defines the error tags and messages used throughout the language runtime.

| Error | Description |
|---|---|
| `main` | Base error structure (tag + message) |
| `__TypeError` | Raised when a value is of the wrong type |
| `__ReferenceError` | Raised when a variable is not defined |
| `__SyntaxError` | Raised when the syntax is invalid |
| `__RangeError` | Raised when a value is out of range |
| `__URIError` | Raised on malformed URI operations |
| `__EvalError` | Raised on invalid eval usage |
| `__UNKNOWN_ERROR` | Fallback for unrecognized errors |

> Each error entry follows the `ErrorStructure` shape: `{ tag: string, message: string }`, where `tag` is the language-specific error label and `message` is the human-readable description.

---

## How to contribute

The Enide grammar only improves with attentive eyes. If you spotted an error, inconsistency, or want to suggest an improvement, your contribution is welcome.

### Types of accepted contributions

- **Bug fixes** — typos, inconsistencies between sections, incorrect grammar rules
- **Text revision** — improve clarity, accuracy, or fluency of explanations
- **New grammar definitions** — add new grammar files inside `src/languages/grammars/`
- **Rule review** — identify contradictory or poorly defined rules in `grammar.ts` or related files
- **Language support** — register new language entries in `language-list.json`

### Step-by-step guide to contributing

1. **Fork** this repository
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Create a branch** with a descriptive name:
   ```bash
   git checkout -b fix/grammar-rule-description
   ```
4. **Make your changes** in the corresponding file inside `src/languages/`
5. **Clearly describe** what was changed and why in the commit message:
   ```bash
   git commit -m "fix(grammar): correct incorrect rule in grammar.ts"
   ```
6. **Open a Pull Request** with a clear title and a brief description of the change

> Before contributing, read the [`CONTRIBUTING.md`](./CONTRIBUTING.md) file to understand the project conventions.

---

## Reporting errors

Found a problem but don't know how to fix it? Open an **Issue** describing:

- Where the error is (file and section)
- What is wrong
- What it should be (if you know)

Use the available labels to categorize: `grammar-error`, `inconsistency`, `incorrect-example`, `suggestion`.

---

## Version history

See [`CHANGELOG.md`](./CHANGELOG.md) for the complete history of grammar changes.

---

## License

This project is licensed under the [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/). You may use, adapt, and redistribute the content as long as you give proper credit.

---

## Community

Questions? General suggestions? Discussions about the language?

- Open a **Discussion** here on GitHub
- Contribute with respect and good faith — every review is welcome, regardless of experience level

---
