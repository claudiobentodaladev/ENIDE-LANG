import { DocStructure } from "../../grammar.interface.js";

export interface TimeGrammar {
  main: DocStructure;
  __timeOut: DocStructure;
  __timeInterval: DocStructure;
}
