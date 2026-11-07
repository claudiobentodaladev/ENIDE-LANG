import { low, up, norm, normCap, normUp } from "./cases.string.js";

import { DocStructure } from "../grammar.interface.js";
import {
  ERROR_EXTRA_LABEL_KEYS,
  ErrorLabels,
  ErrorStructure,
} from "../interfaces/error.interface.js";

export const normEntry = (entry: Partial<DocStructure>) => {
  return {
    main: norm(entry.main ?? "", true),
    __description: low(entry.__description ?? "", false),
  };
};

export const capEntry = (entry: Partial<DocStructure>) => {
  return {
    main: normCap(entry.main ?? "", true),
    __description: low(entry.__description ?? "", false),
  };
};

export const upEntry = (entry: Partial<DocStructure>) => {
  return {
    main: normUp(entry.main ?? "", true),
    __description: low(entry.__description ?? "", false),
  };
};

export const errorEntry = (entry: Partial<ErrorStructure>) => {
  return {
    tag: up(entry.tag ?? "", true),
    message: low(entry.message ?? "", false),
  };
};

const EXTRA_LABELS_TO_LOWER = [
  "file",
  "didYouMean",
  "includedFrom",
  "size",
  "index",
  "path",
  "available",
  "element",
] as const;

const extraLabels = (entry: Partial<ErrorLabels>): Partial<ErrorLabels> => {
  const extras: Record<string, string> = {};

  for (const key of ERROR_EXTRA_LABEL_KEYS) {
    const value = entry[key];
    if (typeof value !== "string" || !value.trim()) continue;

    extras[key] = (EXTRA_LABELS_TO_LOWER as readonly string[]).includes(key)
      ? low(value, false)
      : value.trim();
  }

  return extras;
};

export const errorLabelEntry = (entry: Partial<ErrorLabels>): ErrorLabels => {
  return {
    ...extraLabels(entry),
    message: normCap(entry.message ?? "", false),
    value: low(entry.value ?? "", false),
    variable: low(entry.variable ?? "", false),
    property: low(entry.property ?? "", false),
    object: low(entry.object ?? "", false),
    expected: low(entry.expected ?? "", false),
    received: low(entry.received ?? "", false),

    token: low(entry.token ?? "", false),
    hint: low(entry.hint ?? "", false),
    unexpectedEnd: low(entry.unexpectedEnd ?? "", false),
    invalidToken: low(entry.invalidToken ?? "", false),
    stackOverflow: low(entry.stackOverflow ?? "", false),
    constAssignment: low(entry.constAssignment ?? "", false),
    duplicateParam: low(entry.duplicateParam ?? "", false),
  };
};

export const exemplesEntry = (entry: string[]) => {
  if (entry.length < 10) {
    for (let index = 0; index < 10 - entry.length; index++) {
      entry.push(`Var${index + 1}`);
    }
  }
  return entry
    ?.map((items) => norm(items, true))
    .filter((item) => item !== null);
};
