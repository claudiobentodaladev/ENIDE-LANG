import { LanguageGrammar } from "../grammar.interface.js";
import { errorEntry, errorLabelEntry } from "../utils/transforms.js";

type Errors = LanguageGrammar["errors"];

export function mapErrors(errors: Errors) {
  return {
    main: errorEntry(errors.main),
    __labels: errorLabelEntry(errors.__labels),
    __TypeError: errorEntry(errors.__TypeError),
    __InitError: errorEntry(errors.__InitError),
    __ReferenceError: errorEntry(errors.__ReferenceError),
    __SyntaxError: errorEntry(errors.__SyntaxError),
    __RangeError: errorEntry(errors.__RangeError),
    __URIError: errorEntry(errors.__URIError),
    __EvalError: errorEntry(errors.__EvalError),
    __UNKNOWN_ERROR: errorEntry(errors.__UNKNOWN_ERROR),
  };
}
