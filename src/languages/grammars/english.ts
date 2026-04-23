import { Language } from "../grammar.class.js";

export const english = new Language({
  language: "english",
  about:
    "ENIDE is a translatable transpiler that allows programming in any language",
  include: {
    main: "include",
    __description: "used to include language or libraries",
  },
  commands: {
    all: {
      __about: {
        main: "about",
        __description: "to get information about ENIDE",
      },
      __help: {
        main: "help",
        __description: "to get the list of all available commands",
      },
      __version: {
        main: "version",
        __description: "to get the current version of ENIDE",
      },
      __languages: {
        main: "languages",
        __description: "to get the list of all available languages",
      },
      __documentation: {
        main: "doc",
        __description: "to get the documentation for a language",
      },
    },
  },
  library: {
    __math: {
      main: {
        main: "math",
        __description: "to access math functions",
      },
      __pi: {
        main: "PI",
        __description: "to get the value of pi",
      },
      __sqrt: {
        main: "Sqrt",
        __description: "to get the square root",
      },
      __pow: {
        main: "Power",
        __description: "to get the power of a number",
      },
      __round: {
        main: "Round",
        __description: "to round a number",
      },
      __random: {
        main: "Random",
        __description: "to get a random number",
      },
      __max: {
        main: "Max",
        __description: "to get the maximum value",
      },
      __min: {
        main: "Min",
        __description: "to get the minimum value",
      },
      __isNumber: {
        main: "IsNumber",
        __description: "to check if a value is a number",
      },
      __isInteger: {
        main: "IsInteger",
        __description: "to check if a value is an integer",
      },
      __isFloat: {
        main: "IsFloat",
        __description: "to check if a value is a decimal",
      },
    },
    __string: {
      main: {
        main: "string",
        __description: "to access string manipulation functions",
      },
      __length: {
        main: "Length",
        __description: "to get the length of a string",
      },
      __toUpperCase: {
        main: "ToUpperCase",
        __description: "to convert a string to uppercase",
      },
      __toLowerCase: {
        main: "ToLowerCase",
        __description: "to convert a string to lowercase",
      },
    },
    __date: {
      main: {
        main: "date",
        __description: "to access date and time manipulation functions",
      },
      __year: {
        main: "Year",
        __description: "to get the year",
      },
      __month: {
        main: "Month",
        __description: "to get the month",
      },
      __dayMonth: {
        main: "DayMonth",
        __description: "to get the day of the month",
      },
      __dayWeek: {
        main: "DayWeek",
        __description: "to get the day of the week",
      },
      __hour: {
        main: "Hour",
        __description: "to get the hour",
      },
      __minute: {
        main: "Minute",
        __description: "to get the minute",
      },
      __second: {
        main: "Second",
        __description: "to get the second",
      },
    },
  },
  types: {
    __number: {
      main: "number",
      __description: "to declare a variable of type number",
    },
    __string: {
      main: "string",
      __description: "to declare a variable of type string",
    },
    __object: {
      main: "object",
      __description: "to declare a static object"
    },
    __boolean: {
      main: "bool",
      values: {
        __false: "false",
        __true: "true",
      },
      __description: "to declare a variable of type boolean",
    },
  },
  methods: {
    method: {
      __print: {
        main: "print",
        __description: "to print a value to the screen",
      },
      __scan: {
        main: "scan",
        __description: "to read a value from input",
      },
      __return: {
        main: "return",
        __description: "to return a value from a function",
      },
    },
    sentences: {
      __function: {
        main: "function",
        __description: "to declare a function",
      },
      __if: {
        main: "if",
        __description: "to declare a condition",
      },
      __else: {
        main: "else",
        __description: "to declare an alternative condition",
      },
      __while: {
        main: "while",
        __description: "to declare a while loop",
      },
      __for: {
        main: "for",
        __description: "to declare a for loop",
      },
      __switch: {
        main: "switch",
        __description: "to declare a selection structure",
      },
      __case: {
        main: "case",
        __description: "to declare a case in the selection structure",
      },
      __default: {
        main: "default",
        __description: "to declare the default case in the selection structure",
      },
      __try: {
        main: "try",
        __description: "to declare a try block",
      },
      __catch: {
        main: "catch",
        __description: "to declare an error handling block",
      },
      __finally: {
        main: "finally",
        __description: "to declare a block that executes regardless",
      },
    },
  },
  errors: {
    main: {
      tag: "ERROR",
      message: "Generic system error",
    },
    __UNKNOWN_ERROR: {
      tag: "UNKNOWN_ERROR",
      message: "Completely unknown error",
    },
    __TypeError: {
      tag: "TYPE_ERROR",
      message: "Invalid type in operation",
    },
    __ReferenceError: {
      tag: "REFERENCE_ERROR",
      message: "Variable does not exist in scope",
    },
    __SyntaxError: {
      tag: "SYNTAX_ERROR",
      message: "Invalid code",
    },
    __RangeError: {
      tag: "RANGE_ERROR",
      message: "Value out of allowed range",
    },
    __URIError: {
      tag: "URI_ERROR",
      message: "Malformed or invalid URI",
    },
    __EvalError: {
      tag: "EVAL_ERROR",
      message: "Error related to eval",
    },
  },
}).grammar();
