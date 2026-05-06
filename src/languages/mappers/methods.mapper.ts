import { LanguageGrammar } from "../grammar.interface.js";
import { normEntry } from "../utils/transforms.js";

type Methods = LanguageGrammar["methods"];

export function mapMethods(methods: Methods) {
  return {
    method: {
      __print: normEntry(methods.method?.__print),
      __scan: normEntry(methods.method?.__scan),
      __return: normEntry(methods.method?.__return),
      __break: normEntry(methods.method?.__break),
      __continue: normEntry(methods.method?.__continue),
    },
    sentences: {
      __function: normEntry(methods.sentences?.__function),
      __if: normEntry(methods.sentences?.__if),
      __else: normEntry(methods.sentences?.__else),
      __while: normEntry(methods.sentences?.__while),
      __for: normEntry(methods.sentences?.__for),
      __switch: normEntry(methods.sentences?.__switch),
      __case: normEntry(methods.sentences?.__case),
      __default: normEntry(methods.sentences?.__default),
      __try: normEntry(methods.sentences?.__try),
      __catch: normEntry(methods.sentences?.__catch),
      __finally: normEntry(methods.sentences?.__finally),
      __class: normEntry(methods.sentences?.__class),
      __constructor: normEntry(methods.sentences?.__constructor),
    },
  };
}
