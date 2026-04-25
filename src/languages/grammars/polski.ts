import { Language } from "../grammar.class.js";

export const polski = new Language({
  language: "polski",
  about:
    "ENIDE to tlumaczalny transpiler, ktory umozliwia programowanie w dowolnym jezyku",
  include: {
    main: "Dolacz",
    __description: "Używane do dołączania języka lub bibliotek",
  },
  commands: {
    all: {
      __about: {
        main: "o",
        __description: "aby uzyskać informacje o ENIDE",
      },
      __help: {
        main: "pomoc",
        __description: "aby uzyskać listę wszystkich dostępnych poleceń",
      },
      __version: {
        main: "wersja",
        __description: "aby uzyskać aktualną wersję ENIDE",
      },
      __languages: {
        main: "jezyki",
        __description: "aby uzyskać listę wszystkich dostępnych języków",
      },
      __documentation: {
        main: "dok",
        __description: "aby uzyskać dokumentację dla języka",
      },
    },
  },
  library: {
    __math: {
      main: {
        main: "matematyka",
        __description: "aby uzyskać dostęp do funkcji matematycznych",
      },
      __pi: {
        main: "PI",
        __description: "aby uzyskać wartość pi",
      },
      __sqrt: {
        main: "PierwiastekKwadratowy",
        __description: "aby uzyskać pierwiastek kwadratowy",
      },
      __pow: {
        main: "Potega",
        __description: "aby uzyskać potęgę liczby",
      },
      __round: {
        main: "Zaokraglij",
        __description: "aby zaokrąglić liczbę",
      },
      __random: {
        main: "Losowy",
        __description: "aby uzyskać losową liczbę",
      },
      __max: {
        main: "Maksimum",
        __description: "aby uzyskać wartość maksymalną",
      },
      __min: {
        main: "Minimum",
        __description: "aby uzyskać wartość minimalną",
      },
      __isNumber: {
        main: "JestLiczba",
        __description: "aby sprawdzić czy wartość jest liczbą",
      },
      __isInteger: {
        main: "JestCalkowita",
        __description: "aby sprawdzić czy wartość jest liczbą całkowitą",
      },
      __isFloat: {
        main: "JestDziesietna",
        __description: "aby sprawdzić czy wartość jest liczbą dziesiętną",
      },
    },
    __string: {
      main: {
        main: "tekst",
        __description: "aby uzyskać dostęp do funkcji manipulacji tekstem",
      },
      __length: {
        main: "Dlugosc",
        __description: "aby uzyskać długość tekstu",
      },
      __toUpperCase: {
        main: "NaWielkie",
        __description: "aby przekonwertować tekst na wielkie litery",
      },
      __toLowerCase: {
        main: "NaMale",
        __description: "aby przekonwertować tekst na małe litery",
      },
    },
    __date: {
      main: {
        main: "data",
        __description: "aby uzyskać dostęp do funkcji daty i czasu",
      },
      __year: {
        main: "Rok",
        __description: "aby uzyskać rok",
      },
      __month: {
        main: "Miesiac",
        __description: "aby uzyskać miesiąc",
      },
      __dayMonth: {
        main: "DzienMiesiaca",
        __description: "aby uzyskać dzień miesiąca",
      },
      __dayWeek: {
        main: "DzienTygodnia",
        __description: "aby uzyskać dzień tygodnia",
      },
      __hour: {
        main: "Godzina",
        __description: "aby uzyskać godzinę",
      },
      __minute: {
        main: "Minuta",
        __description: "aby uzyskać minutę",
      },
      __second: {
        main: "Sekunda",
        __description: "aby uzyskać sekundę",
      },
    },
  },
  types: {
    __object: {
      main: "obiekt",
      __description: "aby zadeklarować statyczny obiekt",
    },
    __number: {
      main: "liczba",
      __description: "aby zadeklarować zmienną typu liczba",
    },
    __string: {
      main: "tekst",
      __description: "aby zadeklarować zmienną typu tekst",
    },
    __boolean: {
      main: "bool",
      values: { __true: "Prawda", __false: "Falsz" },
      __description: "aby zadeklarować zmienną typu logicznego",
    },
  },
  methods: {
    method: {
      __print: {
        main: "wypisz",
        __description: "aby wypisać wartość na ekran",
      },
      __scan: {
        main: "wczytaj",
        __description: "aby wczytać wartość z wejścia",
      },
      __return: {
        main: "zwroc",
        __description: "aby zwrócić wartość z funkcji",
      },
    },
    sentences: {
      __function: {
        main: "funkcja",
        __description: "aby zadeklarować funkcję",
      },
      __if: {
        main: "jezeli",
        __description: "aby zadeklarować warunek",
      },
      __else: {
        main: "inaczej",
        __description: "aby zadeklarować alternatywny warunek",
      },
      __while: {
        main: "dopoki",
        __description: "aby zadeklarować pętlę dopóki",
      },
      __for: {
        main: "dla",
        __description: "aby zadeklarować pętlę dla",
      },
      __switch: {
        main: "wybor",
        __description: "aby zadeklarować strukturę wyboru",
      },
      __case: {
        main: "przypadek",
        __description: "aby zadeklarować przypadek w strukturze wyboru",
      },
      __default: {
        main: "domyslny",
        __description:
          "aby zadeklarować domyślny przypadek w strukturze wyboru",
      },
      __try: {
        main: "sprobuj",
        __description: "aby zadeklarować blok spróbuj",
      },
      __catch: {
        main: "zlap",
        __description: "aby zadeklarować blok obsługi błędów",
      },
      __finally: {
        main: "nakoniec",
        __description: "aby zadeklarować blok który zawsze się wykonuje",
      },
    },
  },
  errors: {
    main: { tag: "BLAD", message: "Ogólny błąd systemu" },
    __UNKNOWN_ERROR: {
      tag: "NIEZNANY_BLAD",
      message: "Całkowicie nieznany błąd",
    },
    __TypeError: {
      tag: "BLAD_TYPU",
      message: "Nieprawidłowy typ w operacji",
    },
    __ReferenceError: {
      tag: "BLAD_REFERENCJI",
      message: "Zmienna nie istnieje w zakresie",
    },
    __SyntaxError: {
      tag: "BLAD_SKLADNI",
      message: "Nieprawidłowy kod",
    },
    __RangeError: {
      tag: "BLAD_ZAKRESU",
      message: "Wartość poza dozwolonym zakresem",
    },
    __URIError: {
      tag: "BLAD_URI",
      message: "Nieprawidłowo sformowany lub nieprawidłowy URI",
    },
    __EvalError: {
      tag: "BLAD_EVAL",
      message: "Błąd związany z eval",
    },
  },
}).grammar();
