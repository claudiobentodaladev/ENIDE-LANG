import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabels } from "../utils/stucture.grammar.js";

export const francais = new Language({
  language: "français",
  about:
    "ENIDE est un langage de programmation multilingue qui vous permet de programmer dans n'importe quel langage.",
  include: DocStr(
    "Inclure",
    "utilise pour inclure du langage, des bibliotheques ou des structures de donnees d un autre fichier",
  ),

  commands: {
    __about: DocStr("apropos", "pour obtenir des informations sur ENIDE"),
    __help: DocStr(
      "aide",
      "pour obtenir la liste de toutes les commandes disponibles",
    ),
    __version: DocStr("version", "pour obtenir la version actuelle de ENIDE"),
    __languages: DocStr(
      "langues",
      "pour obtenir la liste de toutes les langues disponibles",
    ),
    __documentation: DocStr(
      "doc",
      "pour obtenir la documentation d une langue",
    ),
    __grammar: DocStr("grammaire", "pour obtenir la grammaire d une langue"),
  },

  library: {
    __standard: {
      main: DocStr(
        "standard",
        "pour acceder aux methodes utilitaires standard",
      ),
      __isarray: DocStr(
        "EstTableau",
        "pour verifier si la valeur est un tableau",
      ),
      __isobject: DocStr("EstObjet", "pour verifier si la valeur est un objet"),
      __typeof: DocStr("TypeDe", "pour obtenir le type d une valeur"),
      __parse: DocStr(
        "Analyser",
        "pour convertir une valeur d une chaine vers son type correct",
      ),
    },

    __math: {
      main: DocStr("mathematiques", "pour acceder aux fonctions mathematiques"),
      __pi: DocStr("PI", "pour obtenir la valeur de pi"),
      __sqrt: DocStr(
        "RacineCarree",
        "pour obtenir la racine carree d un nombre",
      ),
      __pow: DocStr("Puissance", "pour obtenir la puissance d un nombre"),
      __round: DocStr("Arrondir", "pour arrondir un nombre"),
      __random: DocStr("Aleatoire", "pour obtenir un nombre aleatoire"),
      __max: DocStr("Maximum", "pour obtenir la valeur maximale"),
      __min: DocStr("Minimum", "pour obtenir la valeur minimale"),
      __isNumber: DocStr(
        "EstNombre",
        "pour verifier si une valeur est un nombre",
      ),
      __isInteger: DocStr(
        "EstEntier",
        "pour verifier si une valeur est un entier",
      ),
      __isFloat: DocStr(
        "EstDecimal",
        "pour verifier si une valeur est un decimal",
      ),
      __cos: DocStr("Cos", "pour obtenir le cosinus d un angle en radians"),
      __sin: DocStr("Sin", "pour obtenir le sinus d un angle en radians"),
      __tan: DocStr("Tan", "pour obtenir la tangente d un angle en radians"),
    },

    __string: {
      main: DocStr(
        "chaine",
        "pour acceder aux fonctions de manipulation de chaines",
      ),
      __length: DocStr("Longueur", "pour obtenir la longueur d une chaine"),
      __toUpperCase: DocStr(
        "EnMajuscules",
        "pour convertir une chaine en majuscules",
      ),
      __toLowerCase: DocStr(
        "EnMinuscules",
        "pour convertir une chaine en minuscules",
      ),
      __include: DocStr(
        "Contient",
        "pour verifier si une chaine contient une sous-chaine",
      ),
      __repeat: DocStr("Repeter", "pour repeter une chaine un nombre de fois"),
    },

    __date: {
      main: DocStr("date", "pour acceder aux fonctions de date et heure"),
      __now: DocStr("Maintenant", "pour obtenir la date et l heure actuelles"),
      __year: DocStr("Annee", "pour obtenir l annee"),
      __month: DocStr("Mois", "pour obtenir le mois"),
      __dayMonth: DocStr("JourMois", "pour obtenir le jour du mois"),
      __dayWeek: DocStr("JourSemaine", "pour obtenir le jour de la semaine"),
      __hour: DocStr("Heure", "pour obtenir l heure"),
      __minute: DocStr("Minute", "pour obtenir la minute"),
      __second: DocStr("Seconde", "pour obtenir la seconde"),
      __milliseconds: DocStr("Millisecondes", "pour obtenir les millisecondes"),
    },

    __array: {
      main: DocStr(
        "tableau",
        "pour acceder aux fonctions de manipulation de tableaux",
      ),
      __addStart: DocStr(
        "AjouterDebut",
        "Insere de nouveaux elements au debut d un tableau et retourne la nouvelle longueur du tableau.",
      ),
      __addEnd: DocStr(
        "AjouterFin",
        "Ajoute de nouveaux elements a la fin d un tableau",
      ),
      __join: DocStr(
        "Joindre",
        "Assemble tous les elements d un tableau en une chaine, separes par la chaine separatrice specifiee, et retourne la chaine resultante.",
      ),
      __length: DocStr(
        "longueurTableau",
        "Obtient ou definit la longueur du tableau",
      ),
    },

    __time: {
      main: DocStr(
        "temps",
        "pour acceder aux fonctions de temps pour planifier l execution de code",
      ),
      __timeOut: DocStr(
        "Delai",
        "execute une fonction une fois apres un delai specifique en millisecondes",
      ),
      __timeInterval: DocStr(
        "Intervalle",
        "execute une fonction de maniere repetee a intervalles de temps fixes en millisecondes",
      ),
    },
  },

  types: {
    __number: DocStr("nombre", "pour declarer une variable de type nombre"),
    __string: DocStr("chaine", "pour declarer une variable de type chaine"),
    __boolean: DocStr("bool", "pour declarer une variable de type booleen"),
    __object: DocStr("objet", "pour declarer un objet statique"),
    __void: DocStr(
      "vide",
      "pour declarer une fonction qui ne retourne pas de valeur",
    ),
    __array: DocStr(
      "tableau",
      "pour declarer une structure de donnees tableau",
    ),
  },

  specialValues: {
    __true: DocStr("Vrai", "valeur booleenne vraie"),
    __false: DocStr("Faux", "valeur booleenne fausse"),
    __null: DocStr("Nul", "absence de valeur"),
  },

  words: {
    __new: DocStr("nouveau", "pour creer une nouvelle instance d une classe"),
    __this: DocStr("ceci", "pour acceder aux attributs de la propre classe"),
    __extends: DocStr(
      "etend",
      "pour declarer qu une classe herite d une autre",
    ),
  },

  accessModifiers: {
    __private: DocStr(
      "prive",
      "accessible uniquement a l interieur de la classe",
    ),
    __public: DocStr("public", "accessible depuis n importe ou"),
    __protected: DocStr(
      "protege",
      "accessible dans la classe et ses sous-classes",
    ),
    __readonly: DocStr(
      "lectureSeule",
      "la valeur ne peut etre assignee qu une seule fois",
    ),
    __static: DocStr(
      "statique",
      "appartient a la classe elle-meme et non aux instances",
    ),
  },

  methods: {
    method: {
      __print: DocStr("afficher", "pour afficher une valeur a l ecran"),
      __clear: DocStr("nettoyer", "effacer l'écran"),
      __scan: DocStr("lire", "pour lire une valeur depuis l entree"),
      __return: DocStr(
        "retourner",
        "pour retourner une valeur depuis une fonction",
      ),
      __break: DocStr("interrompre", "pour sortir d une boucle"),
      __continue: DocStr(
        "continuer",
        "pour passer a l iteration suivante d une boucle",
      ),
    },

    sentences: {
      __function: DocStr("fonction", "pour declarer une fonction"),
      __if: DocStr("si", "pour declarer une condition"),
      __else: DocStr("sinon", "pour declarer une condition alternative"),
      __while: DocStr("tantque", "pour declarer une boucle tantque"),
      __for: DocStr("pour", "pour declarer une boucle pour"),
      __switch: DocStr(
        "selectionner",
        "pour declarer une structure de selection",
      ),
      __case: DocStr(
        "cas",
        "pour declarer un cas dans la structure de selection",
      ),
      __default: DocStr(
        "defaut",
        "pour declarer le cas par defaut dans la structure de selection",
      ),
      __try: DocStr("essayer", "pour declarer un bloc essayer"),
      __catch: DocStr(
        "attraper",
        "pour declarer un bloc de gestion des erreurs",
      ),
      __finally: DocStr(
        "finalement",
        "pour declarer un bloc qui s execute toujours",
      ),
      __class: DocStr("classe", "pour declarer une classe"),
      __constructor: DocStr(
        "constructeur",
        "structure qui permet de declarer des attributs dans une classe",
      ),
    },
  },

  errors: {
    __labels: errorLabels({
      message: "Message",
      value: "Valeur",
      variable: "Variable",
      property: "Propriete",
      object: "Objet",
      expected: "Attendu",
      received: "Recu",
      constAssignment: "Assignation_Constante",
      duplicateParam: "Parametre_Duplique",
      hint: "Indice",
      invalidToken: "Token_Invalide",
      stackOverflow: "Debordement_Pile",
      token: "Token",
      unexpectedEnd: "Fin_Entree_Inattendue",
      file: "fichier",
      didYouMean: "vouliez-vous dire",
      includedFrom: "inclus depuis",
      size: "taille",
      index: "indice",
      path: "chemin",
      available: "disponibles",
      element: "élément",
      hintMissingEquals: "il manque le \"=\" entre le nom et la valeur",
      hintMissingSemicolon: "il manque \";\" avant cette instruction",
      hintUnclosedBlock: "le \"{\" ouvert à la ligne {line} n'est jamais fermé par \"}\"",
      hintUnclosedBracket: "le \"[\" ouvert à la ligne {line} n'est jamais fermé par \"]\"",
      hintUnclosedComment: "le commentaire ouvert à la ligne {line} n'est jamais fermé par */",
      hintUnclosedString: "le texte ouvert à la ligne {line} n'a pas de guillemet fermant",
      hintModuleNotFound: "module introuvable ; recherché dans \"{path}\"",
      hintLibraryUnknown: "bibliothèque inconnue ; disponibles : {list}",
      hintIndexRange: "le tableau a une taille de {size} ; indices valides : {range}",
      hintIndexEmpty: "le tableau est vide, il n'a donc aucun indice valide",
      hintNotArray: "la valeur n'est pas un tableau",
      hintNull: "aucune valeur n'a été fournie (null ou indéfini)",
      hintNaN: "le nombre n'est pas valide (NaN)",
      hintInfinite: "le nombre est infini",
      hintNoInput: "le programme attendait une saisie mais l'entrée est terminée",
      hintInternal: "ceci ressemble à une erreur interne d'Enide, pas à une erreur de votre programme ; merci de la signaler",
      hintDuplicateProperty: "la propriété \"{name}\" est déclarée plusieurs fois",
      hintMissingProperty: "la propriété \"{name}\" n'existe pas",
      hintArrayMixed: "un tableau ne peut pas mélanger tableaux et valeurs simples",
      hintArrayEmpty: "un tableau a besoin d'au moins une valeur",
      hintObjectArrayShape: "l'élément {index} ne correspond pas au premier : vérifiez la propriété \"{name}\"",
      hintLoopCounter: "le compteur de la boucle doit être un nombre",
      hintErrorsFound: "{count} erreurs trouvées",
    }),
    main: errorMessage("ERREUR", "erreur generique du systeme"),
    __TypeError: errorMessage("ERREUR_TYPE", "type invalide dans l operation"),
    __InitError: errorMessage(
      "ERREUR_INITIALISATION",
      "la variable n a pas ete initialisee",
    ),
    __ReferenceError: errorMessage(
      "ERREUR_REFERENCE",
      "la variable, la fonction ou la bibliotheque n existe pas dans le scope",
    ),
    __SyntaxError: errorMessage("ERREUR_SYNTAXE", "code invalide"),
    __RangeError: errorMessage("ERREUR_PLAGE", "valeur hors de la plage autorisee"),
    __URIError: errorMessage("ERREUR_URI", "URI mal formee ou invalide"),
    __EvalError: errorMessage("ERREUR_EVAL", "erreur liee a eval"),
    __UNKNOWN_ERROR: errorMessage(
      "ERREUR_INCONNUE",
      "erreur completement inconnue",
    ),
  },

  example: {
    __array: [
      "aliments",
      "pays",
      "elements",
      "etiquettes",
      "couleurs",
      "produits",
      "utilisateurs",
      "categories",
      "scores",
      "langues",
    ],
    __boolean: [
      "statut",
      "estAdulte",
      "estActif",
      "estVisible",
      "aPermission",
      "estConnecte",
      "estActive",
      "estTermine",
      "estVerifie",
      "estSupprime",
    ],
    __function: [
      "obtenirNom",
      "obtenirValeur",
      "gererClic",
      "chargerDonnees",
      "formaterDate",
      "analyserEntree",
      "validerFormulaire",
      "afficherElement",
      "mettreAjourEtat",
      "calculerTotal",
    ],
    __number: [
      "age",
      "annee",
      "compteur",
      "total",
      "prix",
      "indice",
      "duree",
      "quantite",
      "score",
      "delai",
    ],
    __object: [
      "personne",
      "utilisateur",
      "configuration",
      "reponse",
      "paiement",
      "parametres",
      "profil",
      "adresse",
      "metadonnees",
      "session",
    ],
    __string: [
      "nom",
      "titre",
      "description",
      "email",
      "motDePasse",
      "message",
      "etiquette",
      "token",
      "url",
      "slug",
    ],
    __void: [
      "connexion",
      "initialiser",
      "nettoyer",
      "reinitialiser",
      "detruire",
      "deconnexion",
      "viderCache",
      "sauvegarderDB",
      "envoyerEmail",
      "enregistrerEvenement",
    ],
  },
}).grammar();
