import { CommandsGrammar } from "./interfaces/command.interface.js";
import { LibraryGrammar } from "./interfaces/library.interface.js";
import { TypesGrammar } from "./interfaces/types.interface.js";
import { accessModifiers } from "./interfaces/accessModifiers.interface.js";
import { specialValues } from "./interfaces/specialValues.grammar.js";
import { MethodsGrammar } from "./interfaces/methods.interface.js";
import { words } from "./interfaces/words.interface.js";
import { ErrorMessage } from "./interfaces/error.interface.js";
import { ExamplesIdentifier } from "./interfaces/examples.interface.js";

export interface LanguageGrammar {
  language: string;
  about: string;
  include: DocStructure;
  commands: CommandsGrammar;
  library: LibraryGrammar;
  types: TypesGrammar;
  accessModifiers: accessModifiers;
  specialValues: specialValues;
  methods: MethodsGrammar;
  words: words;
  errors: ErrorMessage;
  example: ExamplesIdentifier;
}

export interface DocStructure {
  main: string;
  __description: string;
}
