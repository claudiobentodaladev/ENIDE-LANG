import { DocStructure } from "../grammar.interface.js";

export interface TypesGrammar {
  __number: DocStructure;
  __string: DocStructure;
  __boolean: DocStructure;
  __object: DocStructure;
  __void: DocStructure;
  __array: DocStructure;
}
