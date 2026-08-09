# Download ENIDE

Download enide, check the guide and see all supported language in our official website is avaliable on https://enide.vercel.app/

# Enide Grammar


Official repository of the **Enide** language grammar - a living document, collaboratively built by the community.

---

## What is this repository?

This repository contains the **complete grammar of the Enide language**: its rules, structures, patterns, and conventions. It is the source of truth for anyone who wants to understand, use, or contribute to the language.

Each language grammar is represented by a `Language` class instance that holds a `LanguageGrammar` object - a structured definition covering commands, built-in libraries, types, methods, sentences, and error messages.

The grammar is treated as a living document - subject to continuous revisions, corrections, and improvements with the help of the community.

---

## Repository structure

```
enide-lang/
├── src/
│   ├── languages/
│   │   ├── grammars/                    # Grammar definition files (one per language, 90 files)
│   │   ├── interfaces/                  # TypeScript interfaces for every grammar section
│   │   │   ├── libraries/               # Interfaces for each built-in library
│   │   │   │   ├── date.library.ts
│   │   │   │   ├── math.library.ts
│   │   │   │   ├── standard.library.ts
│   │   │   │   └── string.library.ts
│   │   │   ├── accessModifiers.interface.ts
│   │   │   ├── command.interface.ts
│   │   │   ├── error.interface.ts
│   │   │   ├── examples.interface.ts
│   │   │   ├── library.interface.ts
│   │   │   ├── methods.interface.ts
│   │   │   ├── specialValues.grammar.ts
│   │   │   ├── types.interface.ts
│   │   │   └── words.interface.ts
│   │   ├── mappers/                     # Normalizes each grammar section into its final shape
│   │   │   ├── commands.mapper.ts
│   │   │   ├── errors.mapper.ts
│   │   │   ├── examples.mapper.ts
│   │   │   ├── library.mapper.ts
│   │   │   ├── methods.mapper.ts
│   │   │   └── types.mapper.ts
│   │   ├── utils/                       # String casing, Unicode normalization, and structure helpers
│   │   │   ├── cases.string.ts
│   │   │   ├── stucture.grammar.ts
│   │   │   ├── transforms.ts
│   │   │   └── unicodeNormalize.ts
│   │   ├── GLOBALMAP.ts                 # Character transliteration table (see GLOBAL_REPLACE.md)
│   │   ├── grammar.class.ts             # `Language` class - wraps a raw grammar object and normalizes it
│   │   ├── grammar.import.ts            # Loads and aggregates every grammar listed in language-list.json
│   │   ├── grammar.interface.ts         # `LanguageGrammar` and `DocStructure` top-level interfaces
│   │   ├── grammar.ts                   # `Grammer()` - look up a language grammar by name
│   │   └── language-list.json           # List of registered language keys
│   └── index.ts                         # Usage example / main entry point
├── .gitignore
├── package.json
├── CHANGELOG.md
├── CONTRIBUTING.md
├── GLOBAL_REPLACE.md
├── readme.md
└── tsconfig.json
```

> `package.json`, `tsconfig.json`, and `.gitignore` are part of the project but are not included in every source export (e.g. this one) - they're standard Node/TypeScript project files, not something the grammar contribution workflow touches.

---

## Basic usage

Every grammar is wrapped in a `Language` class instance and exported from its file in `src/languages/grammars/`. `grammar.import.ts` loads every language listed in `language-list.json` and aggregates them into a single object; `Grammer(name)` looks one up by its `language` field (case-insensitive):

```ts
import { Grammer } from "./languages/grammar.js";

const grammar = Grammer("english");
console.log(grammar);
```

`Grammer()` returns the fully normalized `LanguageGrammar` object (see below), or `null` if no grammar matches the given name.

---

## Grammar structure

Every language grammar file must implement the `LanguageGrammar` interface and be wrapped in a `Language` class instance. Calling `.grammar()` on that instance runs every section through the mappers in `src/languages/mappers/`, which apply consistent casing and Unicode normalization (via `GLOBALMAP.ts`) to each field before the grammar is used. The full structure is described below.

### Top-level: `LanguageGrammar`

| Field | Type | Description |
|---|---|---|
| `language` | `string` | The name of the language |
| `about` | `string` | A short description of the language |
| `include` | `DocStructure` | Include/import statement definition |
| `commands` | `CommandsGrammar` | CLI command definitions |
| `library` | `LibraryGrammar` | Built-in library definitions |
| `types` | `TypesGrammar` | Supported data type definitions |
| `words` | `words` | Object-oriented keyword definitions (`new`, `this`, `extends`) |
| `specialValues` | `specialValues` | Literal keyword definitions (`true`, `false`, `null`) |
| `accessModifiers` | `accessModifiers` | Class member visibility keyword definitions |
| `methods` | `MethodsGrammar` | Built-in methods and control flow sentences |
| `errors` | `ErrorMessage` | Error tag and message definitions |
| `example` | `ExamplesIdentifier` | Sample identifier names per type, for docs/tooling |

> `DocStructure` is a base shape used throughout the grammar: `{ main: string, __description: string }`. The `main` field holds the keyword as it appears in the language, and `__description` holds its human-readable explanation.

> **Note on booleans:** booleans are no longer a special-cased type. `__boolean` in `TypesGrammar` is a plain `DocStructure` describing the *type keyword* (e.g. `bool`); the literal keywords for `true`/`false` live separately under the top-level `specialValues` field.

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
| `__grammar` | Gets the grammar definition for a language |

---

### Library: `LibraryGrammar`

Defines the built-in standard libraries.

#### Standard - `__standard`

| Member | Description |
|---|---|
| `main` | The keyword used to reference the standard library |
| `__isarray` | Checks if a value is an array |
| `__isobject` | Checks if a value is an object |
| `__typeof` | Returns the type of a value |
| `__parse` | Parses a string into its corresponding value |

#### Math - `__math`

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
| `__sin` | Sine of an angle (radians) |
| `__cos` | Cosine of an angle (radians) |
| `__tan` | Tangent of an angle (radians) |

#### String - `__string`

| Member | Description |
|---|---|
| `main` | The keyword used to reference the string library |
| `__length` | Returns the length of a string |
| `__toUpperCase` | Converts a string to uppercase |
| `__toLowerCase` | Converts a string to lowercase |
| `__include` | Checks if a string contains a substring |
| `__repeat` | Repeats a string a given number of times |

#### Date - `__date`

| Member | Description |
|---|---|
| `main` | The keyword used to reference the date library |
| `__now` | Returns the current date and time |
| `__year` | Returns the current year |
| `__month` | Returns the current month |
| `__dayMonth` | Returns the day of the month |
| `__dayWeek` | Returns the day of the week |
| `__hour` | Returns the current hour |
| `__minute` | Returns the current minute |
| `__second` | Returns the current second |

---

### Types: `TypesGrammar`

Defines the built-in data types of the language. Every member is a plain `DocStructure`.

| Type | Description |
|---|---|
| `__number` | Numeric type definition |
| `__string` | String type definition |
| `__boolean` | Boolean type keyword definition |
| `__object` | Object type definition |
| `__void` | "No return value" type definition, used for functions |
| `__array` | Array/list type definition |

---

### Words: `words`

Object-oriented keywords used outside of class member declarations.

| Word | Description |
|---|---|
| `__new` | Creates a new instance of a class |
| `__this` | References an attribute or method of the current instance |
| `__extends` | Declares that a class inherits from another |

---

### Special values: `specialValues`

Literal keywords for the language's built-in values.

| Value | Description |
|---|---|
| `__true` | Boolean true literal |
| `__false` | Boolean false literal |
| `__null` | Absence-of-value literal |

---

### Access modifiers: `accessModifiers`

Visibility keywords for class members.

| Modifier | Description |
|---|---|
| `__public` | Accessible from anywhere |
| `__private` | Accessible only within the declaring class |
| `__protected` | Accessible within the class and its subclasses |
| `__static` | Belongs to the class itself, not to instances |
| `__readonly` | Value can only be assigned once |

---

### Methods: `MethodsGrammar`

Divided into two categories: built-in methods and control flow sentences.

#### Built-in Methods - `method`

| Method | Description |
|---|---|
| `__print` | Outputs a value to the console |
| `__scan` | Reads input from the user |
| `__return` | Returns a value from a function |
| `__break` | Exits a loop |
| `__continue` | Skips to the next iteration of a loop |

#### Control Flow Sentences - `sentences`

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
| `__class` | Class declaration keyword |
| `__constructor` | Declares the attribute-initializing structure of a class |

---

### Errors: `ErrorMessage`

Defines the error tags and messages used throughout the language runtime.

| Error | Description |
|---|---|
| `__labels` | Human-readable labels used when formatting error output (see `ErrorLabels` below) |
| `main` | Base error structure (tag + message) |
| `__TypeError` | Raised when a value is of the wrong type |
| `__InitError` | Raised when a variable is used before being initialized |
| `__ReferenceError` | Raised when a variable, function, or library does not exist in scope |
| `__SyntaxError` | Raised when the syntax is invalid |
| `__RangeError` | Raised when a value is out of range |
| `__URIError` | Raised on malformed URI operations |
| `__EvalError` | Raised on invalid eval usage |
| `__UNKNOWN_ERROR` | Fallback for unrecognized errors |

> Each error entry (other than `__labels`) follows the `ErrorStructure` shape: `{ tag: string, message: string }`, where `tag` is the language-specific error label and `message` is the human-readable description.

`ErrorLabels` supplies the individual word labels used to build formatted runtime error messages (e.g. "Expected: ... Received: ..."):

| Label | Description |
|---|---|
| `message` | Label for the error message itself |
| `value` | Label for a value in the error output |
| `variable` | Label for a variable name |
| `property` | Label for an object property |
| `object` | Label for an object |
| `expected` | Label for the expected value/type |
| `received` | Label for the value/type that was actually received |
| `token` | Label for a parser token |
| `hint` | Label for a hint/suggestion |
| `unexpectedEnd` | Label for an unexpected end-of-input error |
| `invalidToken` | Label for an invalid-token error |
| `stackOverflow` | Label for a stack overflow error |
| `constAssignment` | Label for a reassigned-constant error |
| `duplicateParam` | Label for a duplicate function parameter error |

---

### Examples: `ExamplesIdentifier`

Sample identifier names for each type, one string array per type (`__number`, `__string`, `__boolean`, `__object`, `__void`, `__array`, `__function`). These are used for documentation and tooling - for example, suggesting a realistic variable name when scaffolding a snippet. Each grammar file provides ten example names per type.

---

## Supported languages

`language-list.json` currently registers 89 languages. The `src/languages/grammars/` folder contains 90 grammar files - `hangugeo.ts` (Korean) exists as a complete grammar but is **not yet registered** in `language-list.json`, so `Grammer("hangugeo")` currently returns `null`. Registering it is a good first contribution - see [`CONTRIBUTING.md`](./CONTRIBUTING.md).

---

## How to contribute

The Enide grammar only improves with attentive eyes. If you spotted an error, inconsistency, or want to suggest an improvement, your contribution is welcome.

### Types of accepted contributions

- **Bug fixes** - typos, inconsistencies between sections, incorrect grammar rules
- **Text revision** - improve clarity, accuracy, or fluency of explanations
- **New grammar definitions** - add new grammar files inside `src/languages/grammars/`
- **Rule review** - identify contradictory or poorly defined rules in `grammar.ts` or related files
- **Language support** - register new language entries in `language-list.json` (e.g. `hangugeo`, see [Supported languages](#supported-languages))
- **Transliteration fixes** - correct or extend `GLOBALMAP.ts` and its documentation in [`GLOBAL_REPLACE.md`](./GLOBAL_REPLACE.md)

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
- Contribute with respect and good faith - every review is welcome, regardless of experience level

---
