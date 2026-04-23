import { Language } from "../grammar.class.js";

export const romana = new Language({
  language: "romana",
  about:
    "ENIDE este un transpilator traductibil care permite programarea in orice limba",
  include: {
    main: "Include",
    __description: "Folosit pentru a include limbaj sau biblioteci",
  },
  commands: {
    all: {
      __about: {
        main: "despre",
        __description: "pentru a obtine informatii despre ENIDE",
      },
      __help: {
        main: "ajutor",
        __description: "pentru a obtine lista tuturor comenzilor disponibile",
      },
      __version: {
        main: "versiune",
        __description: "pentru a obtine versiunea curenta a ENIDE",
      },
      __languages: {
        main: "limbi",
        __description: "pentru a obtine lista tuturor limbilor disponibile",
      },
      __documentation: {
        main: "doc",
        __description: "pentru a obtine documentatia pentru o limba",
      },
    },
  },
  library: {
    __math: {
      main: {
        main: "matematica",
        __description: "pentru a accesa functiile matematice",
      },
      __pi: {
        main: "PI",
        __description: "pentru a obtine valoarea lui pi",
      },
      __sqrt: {
        main: "RadacinaPatrata",
        __description: "pentru a obtine radacina patrata",
      },
      __pow: {
        main: "Putere",
        __description: "pentru a obtine puterea unui numar",
      },
      __round: {
        main: "Rotunjeste",
        __description: "pentru a rotunji un numar",
      },
      __random: {
        main: "Aleator",
        __description: "pentru a obtine un numar aleator",
      },
      __max: {
        main: "Maxim",
        __description: "pentru a obtine valoarea maxima",
      },
      __min: {
        main: "Minim",
        __description: "pentru a obtine valoarea minima",
      },
      __isNumber: {
        main: "EsteNumar",
        __description: "pentru a verifica daca o valoare este un numar",
      },
      __isInteger: {
        main: "EsteIntreg",
        __description: "pentru a verifica daca o valoare este un intreg",
      },
      __isFloat: {
        main: "EsteZecimal",
        __description: "pentru a verifica daca o valoare este un zecimal",
      },
    },
    __string: {
      main: {
        main: "sir",
        __description: "pentru a accesa functiile de manipulare a sirurilor",
      },
      __length: {
        main: "Lungime",
        __description: "pentru a obtine lungimea unui sir",
      },
      __toUpperCase: {
        main: "LaMajuscule",
        __description: "pentru a converti un sir in majuscule",
      },
      __toLowerCase: {
        main: "LaMinuscule",
        __description: "pentru a converti un sir in minuscule",
      },
    },
    __date: {
      main: {
        main: "data",
        __description: "pentru a accesa functiile de data si ora",
      },
      __year: {
        main: "An",
        __description: "pentru a obtine anul",
      },
      __month: {
        main: "Luna",
        __description: "pentru a obtine luna",
      },
      __dayMonth: {
        main: "ZiuaLunii",
        __description: "pentru a obtine ziua lunii",
      },
      __dayWeek: {
        main: "ZiuaSaptamanii",
        __description: "pentru a obtine ziua saptamanii",
      },
      __hour: {
        main: "Ora",
        __description: "pentru a obtine ora",
      },
      __minute: {
        main: "Minut",
        __description: "pentru a obtine minutul",
      },
      __second: {
        main: "Secunda",
        __description: "pentru a obtine secunda",
      },
    },
  },
  types: {
    __object: {
      main: "obiect",
      __description: "pentru a declara un obiect static",
    },
    __number: {
      main: "numar",
      __description: "pentru a declara o variabila de tip numar",
    },
    __string: {
      main: "sir",
      __description: "pentru a declara o variabila de tip sir",
    },
    __boolean: {
      main: "bool",
      values: { __true: "Adevarat", __false: "Fals" },
      __description: "pentru a declara o variabila de tip boolean",
    },
  },
  methods: {
    method: {
      __print: {
        main: "afiseaza",
        __description: "pentru a afisa o valoare pe ecran",
      },
      __scan: {
        main: "citeste",
        __description: "pentru a citi o valoare din input",
      },
      __return: {
        main: "returneaza",
        __description: "pentru a returna o valoare dintr-o functie",
      },
    },
    sentences: {
      __function: {
        main: "functie",
        __description: "pentru a declara o functie",
      },
      __if: {
        main: "daca",
        __description: "pentru a declara o conditie",
      },
      __else: {
        main: "altfel",
        __description: "pentru a declara o conditie alternativa",
      },
      __while: {
        main: "cattimp",
        __description: "pentru a declara o bucla cattimp",
      },
      __for: {
        main: "pentru",
        __description: "pentru a declara o bucla pentru",
      },
      __switch: {
        main: "selectie",
        __description: "pentru a declara o structura de selectie",
      },
      __case: {
        main: "caz",
        __description: "pentru a declara un caz in structura de selectie",
      },
      __default: {
        main: "implicit",
        __description:
          "pentru a declara cazul implicit in structura de selectie",
      },
      __try: {
        main: "incearca",
        __description: "pentru a declara un bloc incearca",
      },
      __catch: {
        main: "prinde",
        __description: "pentru a declara un bloc de gestionare a erorilor",
      },
      __finally: {
        main: "final",
        __description: "pentru a declara un bloc care se executa indiferent",
      },
    },
  },
  errors: {
    main: { tag: "EROARE", message: "Eroare generica de sistem" },
    __UNKNOWN_ERROR: {
      tag: "EROARE_NECUNOSCUTA",
      message: "Eroare complet necunoscuta",
    },
    __TypeError: { tag: "EROARE_TIP", message: "Tip invalid in operatie" },
    __ReferenceError: {
      tag: "EROARE_REFERINTA",
      message: "Variabila nu exista in scope",
    },
    __SyntaxError: { tag: "EROARE_SINTAXA", message: "Cod invalid" },
    __RangeError: {
      tag: "EROARE_INTERVAL",
      message: "Valoare in afara intervalului permis",
    },
    __URIError: { tag: "EROARE_URI", message: "URI malformat sau invalid" },
    __EvalError: { tag: "EROARE_EVAL", message: "Eroare legata de eval" },
  },
}).grammar();
