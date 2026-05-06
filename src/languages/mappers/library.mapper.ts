import { LanguageGrammar } from "../grammar.interface.js";
import { normEntry, capEntry, upEntry } from "../utils/transforms.js";

type Library = LanguageGrammar["library"];

function mapStd(std: Library["__standard"]) {
  return {
    main: normEntry(std.main),
    __isarray: capEntry(std.__isarray),
    __isobject: capEntry(std.__isobject),
    __typeof: capEntry(std.__typeof),
    __parse: capEntry(std.__parse),
  };
}

function mapMath(math: Library["__math"]) {
  return {
    main: normEntry(math.main),
    __pi: upEntry(math.__pi),
    __sqrt: capEntry(math.__sqrt),
    __pow: capEntry(math.__pow),
    __round: capEntry(math.__round),
    __random: capEntry(math.__random),
    __max: capEntry(math.__max),
    __min: capEntry(math.__min),
    __isNumber: capEntry(math.__isNumber),
    __isInteger: capEntry(math.__isInteger),
    __isFloat: capEntry(math.__isFloat),
    __cos: capEntry(math.__cos),
    __sin: capEntry(math.__sin),
    __tan: capEntry(math.__tan),
  };
}

function mapString(string: Library["__string"]) {
  return {
    main: normEntry(string.main),
    __length: capEntry(string.__length),
    __toUpperCase: capEntry(string.__toUpperCase),
    __toLowerCase: capEntry(string.__toLowerCase),
    __include: capEntry(string.__include),
    __repeat: capEntry(string.__repeat),
  };
}

function mapDate(date: Library["__date"]) {
  return {
    main: normEntry(date.main),
    __now: capEntry(date.__now),
    __year: capEntry(date.__year),
    __month: capEntry(date.__month),
    __dayMonth: capEntry(date.__dayMonth),
    __dayWeek: capEntry(date.__dayWeek),
    __hour: capEntry(date.__hour),
    __minute: capEntry(date.__minute),
    __second: capEntry(date.__second),
  };
}

export function mapLibrary(library: Library) {
  return {
    __standard: mapStd(library.__standard),
    __math: mapMath(library.__math),
    __string: mapString(library.__string),
    __date: mapDate(library.__date),
  };
}
