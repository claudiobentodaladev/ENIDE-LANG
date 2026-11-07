import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabels } from "../utils/stucture.grammar.js";

export const deutsch = new Language({
  language: "deutsch",
  about:
    "ENIDE ist eine mehrsprachige Programmiersprache, die es Ihnen ermöglicht, in jeder beliebigen Sprache zu programmieren.",
  include: DocStr(
    "Einbinden",
    "Wird verwendet, um Sprachen oder Bibliotheken einzubinden",
  ),

  commands: {
    __about: DocStr("über", "um Informationen über ENIDE zu erhalten"),
    __help: DocStr(
      "hilfe",
      "um die Liste aller verfügbaren Befehle zu erhalten",
    ),
    __version: DocStr(
      "version",
      "um die aktuelle Version von ENIDE zu erhalten",
    ),
    __languages: DocStr(
      "sprachen",
      "um die Liste aller verfügbaren Sprachen zu erhalten",
    ),
    __documentation: DocStr(
      "dok",
      "um die Dokumentation für eine Sprache zu erhalten",
    ),
    __grammar: DocStr(
      "grammatik",
      "um die Grammatik für eine Sprache zu erhalten",
    ),
  },

  library: {
    __standard: {
      main: DocStr("standard", "um auf nützliche Standardmethoden zuzugreifen"),
      __isarray: DocStr("IstArray", "um zu prüfen, ob ein Wert ein Array ist"),
      __isobject: DocStr(
        "IstObjekt",
        "um zu prüfen, ob ein Wert ein Objekt ist",
      ),
      __typeof: DocStr("Typ", "um den Typ eines Wertes zu erhalten"),
      __parse: DocStr(
        "Parsen",
        "um einen Wert aus einer Zeichenkette in den richtigen Typ umzuwandeln",
      ),
    },

    __math: {
      main: DocStr("mathematik", "um auf mathematische Funktionen zuzugreifen"),
      __pi: DocStr("PI", "um den Wert von Pi zu erhalten"),
      __sqrt: DocStr("Quadratwurzel", "um die Quadratwurzel zu erhalten"),
      __pow: DocStr("Potenz", "um die Potenz einer Zahl zu erhalten"),
      __round: DocStr("Runden", "um eine Zahl zu runden"),
      __random: DocStr("Zufall", "um eine Zufallszahl zu erhalten"),
      __max: DocStr("Maximum", "um den maximalen Wert zu erhalten"),
      __min: DocStr("Minimum", "um den minimalen Wert zu erhalten"),
      __isNumber: DocStr("IstZahl", "um zu prüfen, ob ein Wert eine Zahl ist"),
      __isInteger: DocStr(
        "IstGanzzahl",
        "um zu prüfen, ob ein Wert eine ganze Zahl ist",
      ),
      __isFloat: DocStr(
        "IstDezimal",
        "um zu prüfen, ob ein Wert eine Dezimalzahl ist",
      ),
      __cos: DocStr(
        "Cos",
        "um den Kosinus eines Winkels in Radiant zu erhalten",
      ),
      __sin: DocStr("Sin", "um den Sinus eines Winkels in Radiant zu erhalten"),
      __tan: DocStr(
        "Tan",
        "um den Tangens eines Winkels in Radiant zu erhalten",
      ),
    },

    __string: {
      main: DocStr(
        "zeichenkette",
        "um auf Zeichenketten-Funktionen zuzugreifen",
      ),
      __length: DocStr("Länge", "um die Länge einer Zeichenkette zu erhalten"),
      __toUpperCase: DocStr(
        "ZuGroßbuchstaben",
        "um eine Zeichenkette in Großbuchstaben umzuwandeln",
      ),
      __toLowerCase: DocStr(
        "ZuKleinbuchstaben",
        "um eine Zeichenkette in Kleinbuchstaben umzuwandeln",
      ),
      __include: DocStr(
        "Enthält",
        "um zu prüfen, ob eine Zeichenkette eine Teilzeichenkette enthält",
      ),
      __repeat: DocStr(
        "Wiederholen",
        "um eine Zeichenkette eine bestimmte Anzahl mal zu wiederholen",
      ),
    },

    __date: {
      main: DocStr("datum", "um auf Datums- und Zeitfunktionen zuzugreifen"),
      __now: DocStr(
        "Jetzt",
        "um das aktuelle Datum und die aktuelle Uhrzeit zu erhalten",
      ),
      __year: DocStr("Jahr", "um das Jahr zu erhalten"),
      __month: DocStr("Monat", "um den Monat zu erhalten"),
      __dayMonth: DocStr("TagMonat", "um den Tag des Monats zu erhalten"),
      __dayWeek: DocStr("TagWoche", "um den Tag der Woche zu erhalten"),
      __hour: DocStr("Stunde", "um die Stunde zu erhalten"),
      __minute: DocStr("Minute", "um die Minute zu erhalten"),
      __second: DocStr("Sekunde", "um die Sekunde zu erhalten"),
      __milliseconds: DocStr(
        "Millisekunden",
        "um die Millisekunden zu erhalten",
      ),
    },

    __array: {
      main: DocStr("array", "um auf Array-Funktionen zuzugreifen"),
      __addStart: DocStr(
        "AmAnfangHinzufügen",
        "Fügt neue Elemente am Anfang eines Arrays ein und gibt die neue Länge des Arrays zurück.",
      ),
      __addEnd: DocStr(
        "AmEndeHinzufügen",
        "Hängt neue Elemente an das Ende eines Arrays an",
      ),
      __join: DocStr(
        "Verbinden",
        "Fügt alle Elemente eines Arrays zu einer Zeichenkette zusammen, getrennt durch die angegebene Trennzeichenkette, und gibt die resultierende Zeichenkette zurück.",
      ),
      __length: DocStr(
        "arrayLänge",
        "Ruft die Länge des Arrays ab oder legt sie fest",
      ),
    },

    __time: {
      main: DocStr(
        "zeit",
        "um auf Zeitfunktionen zuzugreifen, mit denen die Ausführung von Code geplant wird",
      ),
      __timeOut: DocStr(
        "Verzögerung",
        "führt eine Funktion einmal nach einer bestimmten Verzögerung in Millisekunden aus",
      ),
      __timeInterval: DocStr(
        "Intervall",
        "führt eine Funktion wiederholt in festen Zeitintervallen in Millisekunden aus",
      ),
    },
  },

  types: {
    __number: DocStr("zahl", "um eine Variable vom Typ Zahl zu deklarieren"),
    __string: DocStr(
      "zeichenkette",
      "um eine Variable vom Typ Zeichenkette zu deklarieren",
    ),
    __boolean: DocStr(
      "bool",
      "um eine Variable vom Typ Boolescher Wert zu deklarieren",
    ),
    __object: DocStr("objekt", "um ein statisches Objekt zu deklarieren"),
    __void: DocStr(
      "leer",
      "um eine Funktion zu deklarieren, die keinen Wert zurückgibt",
    ),
    __array: DocStr("array", "um eine Array-Datenstruktur zu deklarieren"),
  },

  specialValues: {
    __true: DocStr("Wahr", "boolescher Wert wahr"),
    __false: DocStr("Falsch", "boolescher Wert falsch"),
    __null: DocStr("Nichts", "Abwesenheit eines Wertes"),
  },

  words: {
    __new: DocStr("neu", "um eine neue Instanz einer Klasse zu erstellen"),
    __this: DocStr("dies", "um auf Attribute der eigenen Klasse zuzugreifen"),
    __extends: DocStr(
      "erweitert",
      "um zu deklarieren, dass eine Klasse von einer anderen erbt",
    ),
  },

  accessModifiers: {
    __private: DocStr("privat", "nur innerhalb der Klasse zugänglich"),
    __public: DocStr("öffentlich", "von überall zugänglich"),
    __protected: DocStr(
      "geschützt",
      "innerhalb der Klasse und ihrer Unterklassen zugänglich",
    ),
    __readonly: DocStr(
      "nurLesen",
      "der Wert kann nur einmal zugewiesen werden",
    ),
    __static: DocStr("statisch", "gehört zur Klasse, nicht zur Instanz"),
  },

  methods: {
    method: {
      __print: DocStr("drucken", "um einen Wert auf dem Bildschirm auszugeben"),
      __clear: DocStr("sauber", "den Bildschirm löschen"),
      __scan: DocStr("lesen", "um einen Wert aus der Eingabe zu lesen"),
      __return: DocStr(
        "zurückgeben",
        "um einen Wert aus einer Funktion zurückzugeben",
      ),
      __break: DocStr("abbrechen", "um eine Schleife zu verlassen"),
      __continue: DocStr(
        "fortfahren",
        "um zur nächsten Iteration der Schleife zu springen",
      ),
    },

    sentences: {
      __function: DocStr("funktion", "um eine Funktion zu deklarieren"),
      __if: DocStr("wenn", "um eine Bedingung zu deklarieren"),
      __else: DocStr("sonst", "um eine alternative Bedingung zu deklarieren"),
      __while: DocStr("solange", "um eine solange-Schleife zu deklarieren"),
      __for: DocStr("für", "um eine für-Schleife zu deklarieren"),
      __switch: DocStr("auswahl", "um eine Auswahlstruktur zu deklarieren"),
      __case: DocStr(
        "fall",
        "um einen Fall in der Auswahlstruktur zu deklarieren",
      ),
      __default: DocStr(
        "standard",
        "um den Standardfall in der Auswahlstruktur zu deklarieren",
      ),
      __try: DocStr("versuchen", "um einen versuchen-Block zu deklarieren"),
      __catch: DocStr(
        "abfangen",
        "um einen Fehlerbehandlungsblock zu deklarieren",
      ),
      __finally: DocStr(
        "schließlich",
        "um einen Block zu deklarieren, der immer ausgeführt wird",
      ),
      __class: DocStr("klasse", "um eine Klasse zu deklarieren"),
      __constructor: DocStr(
        "konstruktor",
        "Struktur zur Deklaration von Attributen in einer Klasse",
      ),
    },
  },

  errors: {
    __labels: errorLabels({
      message: "Nachricht",
      value: "Wert",
      variable: "Variable",
      property: "Eigenschaft",
      object: "Objekt",
      expected: "Erwartet",
      received: "Erhalten",
      constAssignment: "Konstante_Zuweisung",
      duplicateParam: "Doppelter_Parameter",
      hint: "Hinweis",
      invalidToken: "Ungültiges_Token",
      stackOverflow: "Stapelüberlauf",
      token: "Token",
      unexpectedEnd: "Unerwartetes_Ende",
      file: "datei",
      didYouMean: "meinten sie",
      includedFrom: "eingebunden von",
      size: "größe",
      index: "index",
      path: "pfad",
      available: "verfügbar",
      element: "element",
      hintMissingEquals: "das \"=\" zwischen Name und Wert fehlt",
      hintMissingSemicolon: "vor dieser Anweisung fehlt \";\"",
      hintUnclosedBlock: "die in Zeile {line} geöffnete \"{\" wird nie mit \"}\" geschlossen",
      hintUnclosedBracket: "die in Zeile {line} geöffnete \"[\" wird nie mit \"]\" geschlossen",
      hintUnclosedComment: "der in Zeile {line} geöffnete Kommentar wird nie mit */ geschlossen",
      hintUnclosedString: "dem in Zeile {line} geöffneten Text fehlt das schließende Anführungszeichen",
      hintModuleNotFound: "Modul nicht gefunden; gesucht in \"{path}\"",
      hintLibraryUnknown: "unbekannte Bibliothek; verfügbar: {list}",
      hintIndexRange: "das Array hat die Größe {size}; gültige Indizes: {range}",
      hintIndexEmpty: "das Array ist leer und hat daher keinen gültigen Index",
      hintNotArray: "der Wert ist kein Array",
      hintNull: "es wurde kein Wert angegeben (null oder undefiniert)",
      hintNaN: "die Zahl ist ungültig (NaN)",
      hintInfinite: "die Zahl ist unendlich",
      hintNoInput: "das Programm erwartete eine Eingabe, aber die Eingabe ist zu Ende",
      hintInternal: "das sieht nach einem internen Enide-Fehler aus, nicht nach einem Fehler in Ihrem Programm; bitte melden Sie ihn",
      hintDuplicateProperty: "die Eigenschaft \"{name}\" wird mehrfach deklariert",
      hintMissingProperty: "die Eigenschaft \"{name}\" existiert nicht",
      hintArrayMixed: "ein Array darf Arrays und einzelne Werte nicht mischen",
      hintArrayEmpty: "ein Array braucht mindestens einen Wert",
      hintObjectArrayShape: "Element {index} passt nicht zum ersten Element: prüfen Sie die Eigenschaft \"{name}\"",
      hintLoopCounter: "der Schleifenzähler muss eine Zahl sein",
      hintErrorsFound: "{count} Fehler gefunden",
    }),
    main: errorMessage("FEHLER", "allgemeiner Systemfehler"),
    __TypeError: errorMessage("TYP_FEHLER", "ungültiger Typ in der Operation"),
    __InitError: errorMessage(
      "INITIALISIERUNGS_FEHLER",
      "Variable wurde nicht initialisiert",
    ),
    __ReferenceError: errorMessage(
      "REFERENZ_FEHLER",
      "Variable, Funktion oder Bibliothek existiert nicht im Scope",
    ),
    __SyntaxError: errorMessage("SYNTAX_FEHLER", "ungültiger Code"),
    __RangeError: errorMessage(
      "BEREICH_FEHLER",
      "Wert außerhalb des erlaubten Bereichs",
    ),
    __URIError: errorMessage("URI_FEHLER", "fehlerhafte oder ungültige URI"),
    __EvalError: errorMessage("EVAL_FEHLER", "Fehler im Zusammenhang mit eval"),
    __UNKNOWN_ERROR: errorMessage(
      "UNBEKANNTER_FEHLER",
      "vollständig unbekannter Fehler",
    ),
  },

  example: {
    __array: [
      "lebensmittel",
      "länder",
      "elemente",
      "tags",
      "farben",
      "produkte",
      "benutzer",
      "kategorien",
      "punkte",
      "sprachen",
    ],
    __boolean: [
      "zustand",
      "istErwachsen",
      "istAktiv",
      "istSichtbar",
      "hatBerechtigung",
      "istAngemeldet",
      "istAktiviert",
      "istFertig",
      "istVerifiziert",
      "istGelöscht",
    ],
    __function: [
      "nameAbrufen",
      "wertAbrufen",
      "klickVerarbeiten",
      "datenAbrufen",
      "datumFormatieren",
      "eingabeVerarbeiten",
      "formularValidieren",
      "elementRendern",
      "zustandAktualisieren",
      "gesamtBerechnen",
    ],
    __number: [
      "alter",
      "jahr",
      "zähler",
      "gesamt",
      "preis",
      "index",
      "dauer",
      "menge",
      "punkte",
      "timeout",
    ],
    __object: [
      "person",
      "benutzer",
      "konfiguration",
      "antwort",
      "zahlung",
      "einstellungen",
      "profil",
      "adresse",
      "metadaten",
      "sitzung",
    ],
    __string: [
      "name",
      "titel",
      "beschreibung",
      "email",
      "passwort",
      "nachricht",
      "bezeichnung",
      "token",
      "url",
      "slug",
    ],
    __void: [
      "anmelden",
      "initialisieren",
      "bereinigen",
      "zurücksetzen",
      "zerstören",
      "abmelden",
      "cacheLeeren",
      "inDbSpeichern",
      "emailSenden",
      "ereignisProtokollieren",
    ],
  },
}).grammar();
