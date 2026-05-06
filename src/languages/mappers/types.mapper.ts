import { LanguageGrammar } from "../grammar.interface.js";
import { normEntry } from "../utils/transforms.js";

type Types = LanguageGrammar["types"];
type Words = LanguageGrammar["words"];
type SpecialValues = LanguageGrammar["specialValues"];
type AccessModifier = LanguageGrammar["accessModifiers"];

export function mapTypes(types: Types) {
  return {
    __number: normEntry(types.__number),
    __string: normEntry(types.__string),
    __boolean: normEntry(types.__boolean),
    __object: normEntry(types.__object),
    __void: normEntry(types.__void),
    __array: normEntry(types.__array),
  };
}

export function mapSpecialValues(specialValues: SpecialValues) {
  return {
    __true: normEntry(specialValues.__true),
    __false: normEntry(specialValues.__false),
    __null: normEntry(specialValues.__null),
  };
}

export function mapWords(words: Words) {
  return {
    __new: normEntry(words.__new),
    __extends: normEntry(words.__extends),
    __this: normEntry(words.__this),
  };
}

export function mapAccessModifiers(modifiers: AccessModifier) {
  return {
    __private: normEntry(modifiers.__private),
    __public: normEntry(modifiers.__public),
    __protected: normEntry(modifiers.__protected),
    __readonly: normEntry(modifiers.__readonly),
    __static: normEntry(modifiers.__static),
  };
}
