import { ErrorStructure, ErrorLabels } from "../interfaces/error.interface.js";
import { DocStructure } from "../grammar.interface.js";
import { norm, low } from "./transforms.js";

export function DocStr(main: string, __description: string): DocStructure {
  return {
    main: norm(main),
    __description: low(__description),
  };
}

export function errorMessage(tag: string, message: string): ErrorStructure {
  return { tag, message };
}

export function errorLabel(
  message: string,
  value: string,
  variable: string,
  property: string,
  object: string,
  expected: string,
  received: string,
  constAssignment: string,
  duplicateParam: string,
  hint: string,
  invalidToken: string,
  stackOverflow: string,
  token: string,
  unexpectedEnd: string,
): ErrorLabels {
  return {
    message,
    value,
    expected,
    object,
    property,
    variable,
    received,
    constAssignment,
    duplicateParam,
    hint,
    invalidToken,
    stackOverflow,
    token,
    unexpectedEnd,
  };
}
