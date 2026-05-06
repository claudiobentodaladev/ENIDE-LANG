import { Capitalize } from "../utils/capitalize.js";
import { Normalize } from "../utils/unicodeNormalize.js";

import { DocStructure } from "../grammar.interface.js";
import { ErrorLabels, ErrorStructure } from "../interfaces/error.interface.js";

// ─── Primitives ───────────────────────────────────────────────────────────────

export const low = (s: string) => s.toLowerCase();
export const up = (s: string) => s.toUpperCase();
export const norm = (s: string) => Normalize(low(s));
export const normUp = (s: string) => Normalize(up(s));
export const normCap = (s: string) => Normalize(Capitalize(s));

/** main → norm(lowercase)     | keywords, sentences, methods  */
export const normEntry = (entry: Partial<DocStructure>) => {
  return {
    main: norm(entry.main ?? ""),
    __description: low(entry.__description ?? ""),
  };
};

/** main → normCap(Capitalize) | library sub-functions         */
export const capEntry = (entry: Partial<DocStructure>) => {
  return {
    main: normCap(entry.main ?? ""),
    __description: low(entry.__description ?? ""),
  };
};

/** main → normUp(uppercase)   | special case: Math.PI         */
export const upEntry = (entry: Partial<DocStructure>) => {
  return {
    main: normUp(entry.main ?? ""),
    __description: low(entry.__description ?? ""),
  };
};

/** { tag, message }           | error entries                  */
export const errorEntry = (entry: Partial<ErrorStructure>) => {
  return { tag: up(entry.tag ?? ""), message: low(entry.message ?? "") };
};

export const errorLabelEntry = (entry: Partial<ErrorLabels>): ErrorLabels => {
  return {
    message: normCap(entry.message ?? ""),
    value: low(entry.value ?? ""),
    variable: low(entry.variable ?? ""),
    property: low(entry.property ?? ""),
    object: low(entry.object ?? ""),
    expected: low(entry.expected ?? ""),
    received: low(entry.received ?? ""),

    token: low(entry.token ?? ""),
    hint: low(entry.hint ?? ""),
    unexpectedEnd: low(entry.unexpectedEnd ?? ""),
    invalidToken: low(entry.invalidToken ?? ""),
    stackOverflow: low(entry.stackOverflow ?? ""),
    constAssignment: low(entry.constAssignment ?? ""),
    duplicateParam: low(entry.duplicateParam ?? ""),
  };
};

//=====

export const exemplesEntry = (entry: string[]) => {
  return entry?.map(norm).filter((item) => item !== null);
};
