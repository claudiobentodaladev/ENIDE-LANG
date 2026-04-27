import { LanguageGrammar } from "./grammar.interface.js";
import { Capitalize } from "./utils/capitalize.js";
import { Normalize } from "./utils/unicodeNormalize.js";

export class Language {
  #grammar: LanguageGrammar;
  constructor(grammar: LanguageGrammar) {
    this.#grammar = grammar;
  }

  grammar(): LanguageGrammar {
    return {
      language: Normalize(this.#grammar.language.toLowerCase()),
      about: Normalize(this.#grammar.about.toLowerCase()),
      include: {
        main: Normalize(this.#grammar.include.main.toLowerCase()),
        __description: this.#grammar.include.__description.toLowerCase(),
      },
      commands: {
        all: {
          __about: {
            main: Normalize(
              Normalize(this.#grammar.commands.all.__about.main.toLowerCase()),
            ),
            __description:
              this.#grammar.commands.all.__about.__description.toLowerCase(),
          },
          __help: {
            main: Normalize(
              Normalize(this.#grammar.commands.all.__help.main.toLowerCase()),
            ),
            __description:
              this.#grammar.commands.all.__help.__description.toLowerCase(),
          },
          __version: {
            main: Normalize(
              Normalize(
                this.#grammar.commands.all.__version.main.toLowerCase(),
              ),
            ),
            __description:
              this.#grammar.commands.all.__version.__description.toLowerCase(),
          },
          __documentation: {
            main: Normalize(
              Normalize(
                this.#grammar.commands.all.__documentation.main.toLowerCase(),
              ),
            ),
            __description:
              this.#grammar.commands.all.__documentation.__description.toLowerCase(),
          },
          __languages: {
            main: Normalize(
              Normalize(
                this.#grammar.commands.all.__languages.main.toLowerCase(),
              ),
            ),
            __description:
              this.#grammar.commands.all.__languages.__description.toLowerCase(),
          },
        },
      },
      library: {
        __math: {
          main: {
            main: Normalize(
              Normalize(this.#grammar.library.__math.main.main.toLowerCase()),
            ),
            __description:
              this.#grammar.library.__math.main.__description.toLowerCase(),
          },
          __pi: {
            main: Normalize(
              this.#grammar.library.__math.__pi.main.toUpperCase(),
            ),
            __description:
              this.#grammar.library.__math.__pi.__description.toLowerCase(),
          },
          __sqrt: {
            main: Normalize(
              Capitalize(this.#grammar.library.__math.__sqrt.main),
            ),
            __description:
              this.#grammar.library.__math.__sqrt.__description.toLowerCase(),
          },
          __pow: {
            main: Normalize(
              Capitalize(this.#grammar.library.__math.__pow.main),
            ),
            __description:
              this.#grammar.library.__math.__pow.__description.toLowerCase(),
          },
          __round: {
            main: Normalize(
              Capitalize(this.#grammar.library.__math.__round.main),
            ),
            __description:
              this.#grammar.library.__math.__round.__description.toLowerCase(),
          },
          __random: {
            main: Normalize(
              Capitalize(this.#grammar.library.__math.__random.main),
            ),
            __description:
              this.#grammar.library.__math.__random.__description.toLowerCase(),
          },
          __max: {
            main: Normalize(
              Capitalize(this.#grammar.library.__math.__max.main),
            ),
            __description:
              this.#grammar.library.__math.__max.__description.toLowerCase(),
          },
          __min: {
            main: Normalize(
              Capitalize(this.#grammar.library.__math.__min.main),
            ),
            __description:
              this.#grammar.library.__math.__min.__description.toLowerCase(),
          },
          __isNumber: {
            main: Normalize(
              Capitalize(this.#grammar.library.__math.__isNumber.main),
            ),
            __description:
              this.#grammar.library.__math.__isNumber.__description.toLowerCase(),
          },
          __isInteger: {
            main: Normalize(
              Capitalize(this.#grammar.library.__math.__isInteger.main),
            ),
            __description:
              this.#grammar.library.__math.__isInteger.__description.toLowerCase(),
          },
          __isFloat: {
            main: Normalize(
              Capitalize(this.#grammar.library.__math.__isFloat.main),
            ),
            __description:
              this.#grammar.library.__math.__isFloat.__description.toLowerCase(),
          },
        },
        __string: {
          main: {
            main: Normalize(
              Capitalize(this.#grammar.library.__string.main.main),
            ),
            __description:
              this.#grammar.library.__string.main.__description.toLowerCase(),
          },
          __length: {
            main: Normalize(
              Capitalize(this.#grammar.library.__string.__length.main),
            ),
            __description:
              this.#grammar.library.__string.__length.__description.toLowerCase(),
          },
          __toUpperCase: {
            main: Normalize(
              Capitalize(this.#grammar.library.__string.__toUpperCase.main),
            ),
            __description:
              this.#grammar.library.__string.__toUpperCase.__description.toLowerCase(),
          },
          __toLowerCase: {
            main: Normalize(
              Capitalize(this.#grammar.library.__string.__toLowerCase.main),
            ),
            __description:
              this.#grammar.library.__string.__toLowerCase.__description.toLowerCase(),
          },
        },
        __date: {
          main: {
            main: Normalize(Capitalize(this.#grammar.library.__date.main.main)),
            __description:
              this.#grammar.library.__date.main.__description.toLowerCase(),
          },
          __year: {
            main: Normalize(
              Capitalize(this.#grammar.library.__date.__year.main),
            ),
            __description:
              this.#grammar.library.__date.__year.__description.toLowerCase(),
          },
          __month: {
            main: Normalize(
              Capitalize(this.#grammar.library.__date.__month.main),
            ),
            __description:
              this.#grammar.library.__date.__month.__description.toLowerCase(),
          },
          __dayMonth: {
            main: Normalize(
              Capitalize(this.#grammar.library.__date.__dayMonth.main),
            ),
            __description:
              this.#grammar.library.__date.__dayMonth.__description.toLowerCase(),
          },
          __dayWeek: {
            main: Normalize(
              Capitalize(this.#grammar.library.__date.__dayWeek.main),
            ),
            __description:
              this.#grammar.library.__date.__dayWeek.__description.toLowerCase(),
          },
          __hour: {
            main: Normalize(
              Capitalize(this.#grammar.library.__date.__hour.main),
            ),
            __description:
              this.#grammar.library.__date.__hour.__description.toLowerCase(),
          },
          __minute: {
            main: Normalize(
              Capitalize(this.#grammar.library.__date.__minute.main),
            ),
            __description:
              this.#grammar.library.__date.__minute.__description.toLowerCase(),
          },
          __second: {
            main: Normalize(
              Capitalize(this.#grammar.library.__date.__second.main),
            ),
            __description:
              this.#grammar.library.__date.__second.__description.toLowerCase(),
          },
        },
      },
      types: {
        __number: {
          main: Normalize(this.#grammar.types.__number.main.toLowerCase()),
          __description:
            this.#grammar.types.__number.__description.toLowerCase(),
        },
        __string: {
          main: Normalize(this.#grammar.types.__string.main.toLowerCase()),
          __description:
            this.#grammar.types.__string.__description.toLowerCase(),
        },
        __boolean: {
          main: Normalize(this.#grammar.types.__boolean.main.toLowerCase()),
          values: {
            __true: Normalize(
              this.#grammar.types.__boolean.values.__true.toLowerCase(),
            ),
            __false: Normalize(
              this.#grammar.types.__boolean.values.__false.toLowerCase(),
            ),
          },
          __description:
            this.#grammar.types.__boolean.__description.toLowerCase(),
        },
        __object: {
          main: Normalize(this.#grammar.types.__object.main.toLowerCase()),
          __description:
            this.#grammar.types.__object.__description.toLowerCase(),
        },
      },
      methods: {
        method: {
          __print: {
            main: Normalize(
              this.#grammar.methods.method.__print.main.toLowerCase(),
            ),
            __description:
              this.#grammar.methods.method.__print.__description.toLowerCase(),
          },
          __scan: {
            main: Normalize(
              this.#grammar.methods.method.__scan.main.toLowerCase(),
            ),
            __description:
              this.#grammar.methods.method.__scan.__description.toLowerCase(),
          },
          __return: {
            main: Normalize(
              this.#grammar.methods.method.__return.main.toLowerCase(),
            ),
            __description:
              this.#grammar.methods.method.__return.__description.toLowerCase(),
          },
        },
        sentences: {
          __function: {
            main: Normalize(
              this.#grammar.methods.sentences.__function.main.toLowerCase(),
            ),
            __description:
              this.#grammar.methods.sentences.__function.__description.toLowerCase(),
          },
          __if: {
            main: Normalize(
              this.#grammar.methods.sentences.__if.main.toLowerCase(),
            ),
            __description:
              this.#grammar.methods.sentences.__if.__description.toLowerCase(),
          },
          __else: {
            main: Normalize(
              this.#grammar.methods.sentences.__else.main.toLowerCase(),
            ),
            __description:
              this.#grammar.methods.sentences.__else.__description.toLowerCase(),
          },
          __while: {
            main: Normalize(
              this.#grammar.methods.sentences.__while.main.toLowerCase(),
            ),
            __description:
              this.#grammar.methods.sentences.__while.__description.toLowerCase(),
          },
          __for: {
            main: Normalize(
              this.#grammar.methods.sentences.__for.main.toLowerCase(),
            ),
            __description:
              this.#grammar.methods.sentences.__for.__description.toLowerCase(),
          },
          __switch: {
            main: Normalize(
              this.#grammar.methods.sentences.__switch.main.toLowerCase(),
            ),
            __description:
              this.#grammar.methods.sentences.__switch.__description.toLowerCase(),
          },
          __case: {
            main: Normalize(
              this.#grammar.methods.sentences.__case.main.toLowerCase(),
            ),
            __description:
              this.#grammar.methods.sentences.__case.__description.toLowerCase(),
          },
          __default: {
            main: Normalize(
              this.#grammar.methods.sentences.__default.main.toLowerCase(),
            ),
            __description:
              this.#grammar.methods.sentences.__default.__description.toLowerCase(),
          },
          __try: {
            main: Normalize(
              this.#grammar.methods.sentences.__try.main.toLowerCase(),
            ),
            __description:
              this.#grammar.methods.sentences.__try.__description.toLowerCase(),
          },
          __catch: {
            main: Normalize(
              this.#grammar.methods.sentences.__catch.main.toLowerCase(),
            ),
            __description:
              this.#grammar.methods.sentences.__catch.__description.toLowerCase(),
          },
          __finally: {
            main: Normalize(
              this.#grammar.methods.sentences.__finally.main.toLowerCase(),
            ),
            __description:
              this.#grammar.methods.sentences.__finally.__description.toLowerCase(),
          },
        },
      },
      errors: {
        main: {
          tag: this.#grammar.errors.main.tag.toUpperCase(),
          message: this.#grammar.errors.main.message.toLowerCase(),
        },
        __TypeError: {
          tag: this.#grammar.errors.__TypeError.tag.toUpperCase(),
          message: this.#grammar.errors.__TypeError.message.toLowerCase(),
        },
        __ReferenceError: {
          tag: this.#grammar.errors.__ReferenceError.tag.toUpperCase(),
          message: this.#grammar.errors.__ReferenceError.message.toLowerCase(),
        },
        __SyntaxError: {
          tag: this.#grammar.errors.__SyntaxError.tag.toUpperCase(),
          message: this.#grammar.errors.__SyntaxError.message.toLowerCase(),
        },
        __RangeError: {
          tag: this.#grammar.errors.__RangeError.tag.toUpperCase(),
          message: this.#grammar.errors.__RangeError.message.toLowerCase(),
        },
        __URIError: {
          tag: this.#grammar.errors.__URIError.tag.toUpperCase(),
          message: this.#grammar.errors.__URIError.message.toLowerCase(),
        },
        __EvalError: {
          tag: this.#grammar.errors.__EvalError.tag.toUpperCase(),
          message: this.#grammar.errors.__EvalError.message.toLowerCase(),
        },
        __UNKNOWN_ERROR: {
          tag: this.#grammar.errors.__UNKNOWN_ERROR.tag.toUpperCase(),
          message: this.#grammar.errors.__UNKNOWN_ERROR.message.toLowerCase(),
        },
      },
    };
  }
}
