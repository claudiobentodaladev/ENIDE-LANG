import { Language } from "../grammar.class.js";

export const italiano = new Language({
  language: "italiano",
  about:
    "ENIDE e un transpilatore traducibile che permette di programmare in qualsiasi lingua",
  include: {
    main: "Includere",
    __description: "Usato per includere linguaggi o librerie",
  },
  commands: {
    all: {
      __about: {
        main: "informazioni",
        __description: "per ottenere informazioni su ENIDE",
      },
      __help: {
        main: "aiuto",
        __description: "per ottenere la lista di tutti i comandi disponibili",
      },
      __version: {
        main: "versione",
        __description: "per ottenere la versione attuale di ENIDE",
      },
      __languages: {
        main: "lingue",
        __description: "per ottenere la lista di tutte le lingue disponibili",
      },
      __documentation: {
        main: "doc",
        __description: "per ottenere la documentazione per una lingua",
      },
    },
  },
  library: {
    __math: {
      main: {
        main: "matematica",
        __description: "per accedere alle funzioni matematiche",
      },
      __pi: {
        main: "PI",
        __description: "per ottenere il valore di pi greco",
      },
      __sqrt: {
        main: "RadiceQuadrata",
        __description: "per ottenere la radice quadrata",
      },
      __pow: {
        main: "Potenza",
        __description: "per ottenere la potenza di un numero",
      },
      __round: {
        main: "Arrotonda",
        __description: "per arrotondare un numero",
      },
      __random: {
        main: "Casuale",
        __description: "per ottenere un numero casuale",
      },
      __max: {
        main: "Massimo",
        __description: "per ottenere il valore massimo",
      },
      __min: {
        main: "Minimo",
        __description: "per ottenere il valore minimo",
      },
      __isNumber: {
        main: "ENumero",
        __description: "per verificare se un valore è un numero",
      },
      __isInteger: {
        main: "EIntero",
        __description: "per verificare se un valore è un intero",
      },
      __isFloat: {
        main: "EDecimale",
        __description: "per verificare se un valore è un decimale",
      },
    },
    __string: {
      main: {
        main: "stringa",
        __description: "per accedere alle funzioni di manipolazione del testo",
      },
      __length: {
        main: "Lunghezza",
        __description: "per ottenere la lunghezza di una stringa",
      },
      __toUpperCase: {
        main: "InMaiuscolo",
        __description: "per convertire una stringa in maiuscolo",
      },
      __toLowerCase: {
        main: "InMinuscolo",
        __description: "per convertire una stringa in minuscolo",
      },
    },
    __date: {
      main: {
        main: "data",
        __description: "per accedere alle funzioni di data e ora",
      },
      __year: {
        main: "Anno",
        __description: "per ottenere l'anno",
      },
      __month: {
        main: "Mese",
        __description: "per ottenere il mese",
      },
      __dayMonth: {
        main: "GiornoMese",
        __description: "per ottenere il giorno del mese",
      },
      __dayWeek: {
        main: "GiornoSettimana",
        __description: "per ottenere il giorno della settimana",
      },
      __hour: {
        main: "Ora",
        __description: "per ottenere l'ora",
      },
      __minute: {
        main: "Minuto",
        __description: "per ottenere il minuto",
      },
      __second: {
        main: "Secondo",
        __description: "per ottenere il secondo",
      },
    },
  },
  types: {
    __object: {
      main: "oggetto",
      __description: "per dichiarare un oggetto statico",
    },
    __number: {
      main: "numero",
      __description: "per dichiarare una variabile di tipo numero",
    },
    __string: {
      main: "testo",
      __description: "per dichiarare una variabile di tipo testo",
    },
    __boolean: {
      main: "bool",
      values: { __true: "Vero", __false: "Falso" },
      __description: "per dichiarare una variabile di tipo booleano",
    },
  },
  methods: {
    method: {
      __print: {
        main: "stampa",
        __description: "per stampare un valore sullo schermo",
      },
      __scan: {
        main: "leggi",
        __description: "per leggere un valore dall'input",
      },
      __return: {
        main: "ritorna",
        __description: "per restituire un valore da una funzione",
      },
    },
    sentences: {
      __function: {
        main: "funzione",
        __description: "per dichiarare una funzione",
      },
      __if: {
        main: "se",
        __description: "per dichiarare una condizione",
      },
      __else: {
        main: "altrimenti",
        __description: "per dichiarare una condizione alternativa",
      },
      __while: {
        main: "mentre",
        __description: "per dichiarare un ciclo mentre",
      },
      __for: {
        main: "per",
        __description: "per dichiarare un ciclo per",
      },
      __switch: {
        main: "seleziona",
        __description: "per dichiarare una struttura di selezione",
      },
      __case: {
        main: "caso",
        __description: "per dichiarare un caso nella struttura di selezione",
      },
      __default: {
        main: "predefinito",
        __description:
          "per dichiarare il caso predefinito nella struttura di selezione",
      },
      __try: {
        main: "prova",
        __description: "per dichiarare un blocco prova",
      },
      __catch: {
        main: "cattura",
        __description: "per dichiarare un blocco di gestione degli errori",
      },
      __finally: {
        main: "infine",
        __description: "per dichiarare un blocco che viene eseguito comunque",
      },
    },
  },
  errors: {
    main: { tag: "ERRORE", message: "Errore generico del sistema" },
    __UNKNOWN_ERROR: {
      tag: "ERRORE_SCONOSCIUTO",
      message: "Errore completamente sconosciuto",
    },
    __TypeError: {
      tag: "ERRORE_TIPO",
      message: "Tipo non valido nell operazione",
    },
    __ReferenceError: {
      tag: "ERRORE_RIFERIMENTO",
      message: "La variabile non esiste nell ambito",
    },
    __SyntaxError: { tag: "ERRORE_SINTASSI", message: "Codice non valido" },
    __RangeError: {
      tag: "ERRORE_INTERVALLO",
      message: "Valore fuori dall intervallo consentito",
    },
    __URIError: { tag: "ERRORE_URI", message: "URI malformato o non valido" },
    __EvalError: { tag: "ERRORE_EVAL", message: "Errore relativo a eval" },
  },
}).grammar();
