export interface ErrorStructure {
  tag: string;
  message: string;
}

export interface ErrorLabels {
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
