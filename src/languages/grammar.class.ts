import { LanguageGrammar } from "./grammar.interface.js";
import { norm, low } from "./utils/cases.string.js";
import { mapCommands } from "./mappers/commands.mapper.js";
import { mapLibrary } from "./mappers/library.mapper.js";
import { mapMethods } from "./mappers/methods.mapper.js";
import { mapErrors } from "./mappers/errors.mapper.js";
import { mapExemples } from "./mappers/examples.mapper.js";
import {
  mapTypes,
  mapWords,
  mapSpecialValues,
  mapAccessModifiers,
} from "./mappers/types.mapper.js";

export class Language {
  #grammar: LanguageGrammar;

  constructor(grammar: LanguageGrammar) {
    this.#grammar = grammar;
  }

  grammar(): LanguageGrammar {
    const Grammar = this.#grammar;

    return {
      language: norm(Grammar.language ?? "", true),
      about: norm(Grammar.about ?? "", false),

      include: {
        main: norm(Grammar.include?.main ?? "", true),
        __description: low(Grammar.include?.__description ?? "", false),
      },

      commands: mapCommands(Grammar.commands),
      library: mapLibrary(Grammar.library),
      types: mapTypes(Grammar.types),
      words: mapWords(Grammar.words),
      specialValues: mapSpecialValues(Grammar.specialValues),
      accessModifiers: mapAccessModifiers(Grammar.accessModifiers),
      methods: mapMethods(Grammar.methods),
      errors: mapErrors(Grammar.errors),
      example: mapExemples(Grammar.example),
    };
  }
}
