import { DocStructure } from "../../grammar.interface.js";

export interface DateGrammar {
  main: DocStructure;
  __now: DocStructure;
  __year: DocStructure;
  __month: DocStructure;
  __dayMonth: DocStructure;
  __dayWeek: DocStructure;
  __hour: DocStructure;
  __minute: DocStructure;
  __second: DocStructure;
}
