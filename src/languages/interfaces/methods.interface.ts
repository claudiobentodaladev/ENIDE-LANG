import { DocStructure } from "../grammar.interface.js";

interface MethodsMethod {
  __print: DocStructure;
  __scan: DocStructure;
  __return: DocStructure;
  __continue: DocStructure;
  __break: DocStructure;
}

interface MethodsSentences {
  __function: DocStructure;
  __if: DocStructure;
  __else: DocStructure;
  __while: DocStructure;
  __for: DocStructure;
  __switch: DocStructure;
  __case: DocStructure;
  __default: DocStructure;
  __try: DocStructure;
  __catch: DocStructure;
  __finally: DocStructure;
  __class: DocStructure;
  __constructor: DocStructure;
}

export interface MethodsGrammar {
  method: MethodsMethod;
  sentences: MethodsSentences;
}
