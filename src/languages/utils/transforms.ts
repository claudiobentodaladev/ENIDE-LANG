import { low, up, norm, normCap, normUp } from "./cases.string.js";

import { DocStructure } from "../grammar.interface.js";
import { ErrorLabels, ErrorStructure } from "../interfaces/error.interface.js";

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

export const errorLabelEntry = (entry: Partial<ErrorLabels>): ErrorLabels => {
  return {
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
  return entry
    ?.map((items) => norm(items, true))
    .filter((item) => item !== null);
};
