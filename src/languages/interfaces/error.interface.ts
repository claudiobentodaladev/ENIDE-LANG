export interface ErrorStructure {
  tag: string;
  message: string;
}

export const ERROR_EXTRA_LABEL_KEYS = [
  "file",
  "includedFrom",
  "didYouMean",
  "size",
  "index",
  "path",
  "available",
  "element",
  "hintMissingEquals",
  "hintMissingSemicolon",
  "hintUnclosedBlock",
  "hintUnclosedBracket",
  "hintUnclosedComment",
  "hintUnclosedString",
  "hintModuleNotFound",
  "hintLibraryUnknown",
  "hintIndexRange",
  "hintIndexEmpty",
  "hintNotArray",
  "hintNull",
  "hintNaN",
  "hintInfinite",
  "hintNoInput",
  "hintInternal",
  "hintDuplicateProperty",
  "hintMissingProperty",
  "hintArrayMixed",
  "hintArrayEmpty",
  "hintObjectArrayShape",
  "hintLoopCounter",
  "hintErrorsFound",
] as const;

export type ErrorExtraLabelKey = (typeof ERROR_EXTRA_LABEL_KEYS)[number];
export type ErrorExtraLabels = Partial<Record<ErrorExtraLabelKey, string>>;

export interface ErrorLabels extends ErrorExtraLabels {
  message: string;
  value: string;
  variable: string;
  property: string;
  object: string;
  expected: string;
  received: string;
  token: string;
  hint: string;
  unexpectedEnd: string;
  invalidToken: string;
  stackOverflow: string;
  constAssignment: string;
  duplicateParam: string;
}
export interface ErrorMessage {
  __labels: ErrorLabels;
  main: ErrorStructure;
  __TypeError: ErrorStructure;
  __InitError: ErrorStructure;
  __ReferenceError: ErrorStructure;
  __SyntaxError: ErrorStructure;
  __RangeError: ErrorStructure;
  __URIError: ErrorStructure;
  __EvalError: ErrorStructure;
  __UNKNOWN_ERROR: ErrorStructure;
}
