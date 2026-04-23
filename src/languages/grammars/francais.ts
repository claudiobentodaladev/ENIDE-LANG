import { Language } from "../grammar.class.js";

export const francais = new Language({
  language: "francais",
  about:
    "ENIDE est un transpilateur traduisible qui permet de programmer dans n importe quelle langue",
  include: {
    main: "Inclure",
    __description: "Utilisé pour inclure du langage ou des bibliothèques",
  },
  commands: {
    all: {
      __about: {
        main: "apropos",
        __description: "pour obtenir des informations sur ENIDE",
      },
      __help: {
        main: "aide",
        __description:
          "pour obtenir la liste de toutes les commandes disponibles",
      },
      __version: {
        main: "version",
        __description: "pour obtenir la version actuelle de ENIDE",
      },
      __languages: {
        main: "langues",
        __description:
          "pour obtenir la liste de toutes les langues disponibles",
      },
      __documentation: {
        main: "doc",
        __description: "pour obtenir la documentation d une langue",
      },
    },
  },
  library: {
    __math: {
      main: {
        main: "mathematiques",
        __description: "pour acceder aux fonctions mathematiques",
      },
      __pi: {
        main: "PI",
        __description: "pour obtenir la valeur de pi",
      },
      __sqrt: {
        main: "RacineCarree",
        __description: "pour obtenir la racine carree",
      },
      __pow: {
        main: "Puissance",
        __description: "pour obtenir la puissance d un nombre",
      },
      __round: {
        main: "Arrondir",
        __description: "pour arrondir un nombre",
      },
      __random: {
        main: "Aleatoire",
        __description: "pour obtenir un nombre aleatoire",
      },
      __max: {
        main: "Maximum",
        __description: "pour obtenir la valeur maximale",
      },
      __min: {
        main: "Minimum",
        __description: "pour obtenir la valeur minimale",
      },
      __isNumber: {
        main: "EstNombre",
        __description: "pour verifier si une valeur est un nombre",
      },
      __isInteger: {
        main: "EstEntier",
        __description: "pour verifier si une valeur est un entier",
      },
      __isFloat: {
        main: "EstDecimal",
        __description: "pour verifier si une valeur est un decimal",
      },
    },
    __string: {
      main: {
        main: "chaine",
        __description: "pour acceder aux fonctions de manipulation de chaines",
      },
      __length: {
        main: "Longueur",
        __description: "pour obtenir la longueur d une chaine",
      },
      __toUpperCase: {
        main: "EnMajuscules",
        __description: "pour convertir une chaine en majuscules",
      },
      __toLowerCase: {
        main: "EnMinuscules",
        __description: "pour convertir une chaine en minuscules",
      },
    },
    __date: {
      main: {
        main: "date",
        __description: "pour acceder aux fonctions de date et heure",
      },
      __year: {
        main: "Annee",
        __description: "pour obtenir l annee",
      },
      __month: {
        main: "Mois",
        __description: "pour obtenir le mois",
      },
      __dayMonth: {
        main: "JourMois",
        __description: "pour obtenir le jour du mois",
      },
      __dayWeek: {
        main: "JourSemaine",
        __description: "pour obtenir le jour de la semaine",
      },
      __hour: {
        main: "Heure",
        __description: "pour obtenir l heure",
      },
      __minute: {
        main: "Minute",
        __description: "pour obtenir la minute",
      },
      __second: {
        main: "Seconde",
        __description: "pour obtenir la seconde",
      },
    },
  },
  types: {
    __object: {
      main: "objet",
      __description: "pour declarer un objet statique",
    },
    __number: {
      main: "nombre",
      __description: "pour declarer une variable de type nombre",
    },
    __string: {
      main: "chaine",
      __description: "pour declarer une variable de type chaine",
    },
    __boolean: {
      main: "bool",
      values: {
        __true: "Vrai",
        __false: "Faux",
      },
      __description: "pour declarer une variable de type booleen",
    },
  },
  methods: {
    method: {
      __print: {
        main: "afficher",
        __description: "pour afficher une valeur a l ecran",
      },
      __scan: {
        main: "lire",
        __description: "pour lire une valeur depuis l entree",
      },
      __return: {
        main: "retourner",
        __description: "pour retourner une valeur depuis une fonction",
      },
    },
    sentences: {
      __function: {
        main: "fonction",
        __description: "pour declarer une fonction",
      },
      __if: {
        main: "si",
        __description: "pour declarer une condition",
      },
      __else: {
        main: "sinon",
        __description: "pour declarer une condition alternative",
      },
      __while: {
        main: "tantque",
        __description: "pour declarer une boucle tantque",
      },
      __for: {
        main: "pour",
        __description: "pour declarer une boucle pour",
      },
      __switch: {
        main: "selectionner",
        __description: "pour declarer une structure de selection",
      },
      __case: {
        main: "cas",
        __description: "pour declarer un cas dans la structure de selection",
      },
      __default: {
        main: "defaut",
        __description:
          "pour declarer le cas par defaut dans la structure de selection",
      },
      __try: {
        main: "essayer",
        __description: "pour declarer un bloc essayer",
      },
      __catch: {
        main: "attraper",
        __description: "pour declarer un bloc de gestion des erreurs",
      },
      __finally: {
        main: "finalement",
        __description: "pour declarer un bloc qui s execute toujours",
      },
    },
  },
  errors: {
    main: { tag: "ERREUR", message: "Erreur generique du systeme" },
    __UNKNOWN_ERROR: {
      tag: "ERREUR_INCONNUE",
      message: "Erreur completement inconnue",
    },
    __TypeError: {
      tag: "ERREUR_TYPE",
      message: "Type invalide dans l operation",
    },
    __ReferenceError: {
      tag: "ERREUR_REFERENCE",
      message: "La variable n existe pas dans le scope",
    },
    __SyntaxError: { tag: "ERREUR_SYNTAXE", message: "Code invalide" },
    __RangeError: {
      tag: "ERREUR_PLAGE",
      message: "Valeur hors de la plage autorisee",
    },
    __URIError: { tag: "ERREUR_URI", message: "URI mal formee ou invalide" },
    __EvalError: { tag: "ERREUR_EVAL", message: "Erreur liee a eval" },
  },
}).grammar();
