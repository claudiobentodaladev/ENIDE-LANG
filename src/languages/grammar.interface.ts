export interface LanguageGrammar {
  language: string;
  about: string;
  include: DocStructure;
  commands: CommandsGrammar;
  library: LibraryGrammar;
  types: TypesGrammar;
  methods: MethodsGrammar;
  errors: ErrorMessage;
}

interface DocStructure {
  main: string;
  __description: string;
}

interface AllCommandsGrammar {
  __about: DocStructure;
  __help: DocStructure;
  __version: DocStructure;
  __languages: DocStructure;
  __documentation: DocStructure;
}

interface CommandsGrammar {
  all: AllCommandsGrammar;
}

interface LibraryGrammar {
  __math: MathGrammar;
  __string: StringGrammar;
  __date: DateGrammar;
}

interface MathGrammar {
  main: DocStructure;
  __pi: DocStructure;
  __sqrt: DocStructure;
  __pow: DocStructure;
  __round: DocStructure;
  __random: DocStructure;
  __max: DocStructure;
  __min: DocStructure;
  __isNumber: DocStructure;
  __isInteger: DocStructure;
  __isFloat: DocStructure;
}

interface StringGrammar {
  main: DocStructure;
  __length: DocStructure;
  __toUpperCase: DocStructure;
  __toLowerCase: DocStructure;
}

interface DateGrammar {
  main: DocStructure;
  __year: DocStructure;
  __month: DocStructure;
  __dayMonth: DocStructure;
  __dayWeek: DocStructure;
  __hour: DocStructure;
  __minute: DocStructure;
  __second: DocStructure;
}

interface ValuesBoolean {
  __true: string;
  __false: string;
}

interface BooleanStructure {
  main: string;
  values: ValuesBoolean;
  __description: string;
}

interface TypesGrammar {
  __number: DocStructure;
  __string: DocStructure;
  __boolean: BooleanStructure;
  __object: DocStructure;
}

interface MethodsMethod {
  __print: DocStructure;
  __scan: DocStructure;
  __return: DocStructure;
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
}

interface MethodsGrammar {
  method: MethodsMethod;
  sentences: MethodsSentences;
}

interface ErrorStructure {
  tag: string;
  message: string;
}

interface ErrorMessage {
  main: ErrorStructure;
  __TypeError: ErrorStructure;
  __ReferenceError: ErrorStructure;
  __SyntaxError: ErrorStructure;
  __RangeError: ErrorStructure;
  __URIError: ErrorStructure;
  __EvalError: ErrorStructure;
  __UNKNOWN_ERROR: ErrorStructure;
}
