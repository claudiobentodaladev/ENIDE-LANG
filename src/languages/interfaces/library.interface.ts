import { MathGrammar } from "./libraries/math.library.js";
import { StringGrammar } from "./libraries/string.library.js";
import { DateGrammar } from "./libraries/date.library.js";
import { StandardGrammar } from "./libraries/standard.library.js";

export interface LibraryGrammar {
  __standard: StandardGrammar;
  __math: MathGrammar;
  __string: StringGrammar;
  __date: DateGrammar;
}
