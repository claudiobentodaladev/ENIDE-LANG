import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const romana = new Language({
  language: "romana",
  about:
    "ENIDE este un transpilator traductibil care permite programarea in orice limba",

  include: DocStr(
    "include",
    "folosit pentru a include limbaje, biblioteci sau module externe",
  ),

  commands: {
    __about: DocStr("despre", "afișează informații despre proiectul ENIDE"),
    __help: DocStr("ajutor", "afișează lista tuturor comenzilor disponibile"),
    __version: DocStr("versiune", "afișează versiunea curentă a ENIDE"),
    __languages: DocStr("limbi", "afișează lista tuturor limbilor suportate"),
    __documentation: DocStr(
      "doc",
      "afișează documentația pentru limbajul curent",
    ),
    __grammar: DocStr(
      "gramatica",
      "afișează regulile sintactice ale limbajului",
    ),
  },

  library: {
    __standard: {
      main: DocStr("standard", "acces la funcțiile de bază ale sistemului"),
      __isarray: DocStr(
        "este_lista",
        "verifică dacă valoarea este o listă (tablou)",
      ),
      __isobject: DocStr(
        "este_obiect",
        "verifică dacă valoarea este un obiect",
      ),
      __typeof: DocStr("tip_de", "returnează tipul de date al variabilei"),
      __parse: DocStr(
        "analizeaza",
        "convertește un text în tipul de date corespunzător",
      ),
    },
    __math: {
      main: DocStr("matematica", "acces la funcții și constante matematice"),
      __pi: DocStr("PI", "valoarea constantei Pi"),
      __sqrt: DocStr("radacina_patrata", "calculează rădăcina pătrată"),
      __pow: DocStr("putere", "ridică un număr la o putere"),
      __round: DocStr(
        "rotunjeste",
        "rotunjește un număr la cel mai apropiat întreg",
      ),
      __random: DocStr("aleator", "generează un număr aleatoriu"),
      __max: DocStr("maxim", "returnează cea mai mare valoare dintr-o listă"),
      __min: DocStr("minim", "returnează cea mai mică valoare dintr-o listă"),
      __isNumber: DocStr("este_numar", "verifică dacă valoarea este un număr"),
      __isInteger: DocStr("este_intreg", "verifică dacă numărul este întreg"),
      __isFloat: DocStr("este_zecimal", "verifică dacă numărul are zecimale"),
      __cos: DocStr("cos", "calculează cosinusul"),
      __sin: DocStr("sin", "calculează sinusul"),
      __tan: DocStr("tan", "calculează tangenta"),
    },

    __string: {
      main: DocStr("sir", "funcții pentru manipularea șirurilor de caractere"),
      __length: DocStr("lungime", "returnează lungimea șirului"),
      __toUpperCase: DocStr("la_majuscule", "convertește textul în majuscule"),
      __toLowerCase: DocStr("la_minuscule", "convertește textul în minuscule"),
      __include: DocStr(
        "contine",
        "verifică dacă șirul conține un anumit subșir",
      ),
      __repeat: DocStr("repeta", "repetă șirul de un număr de ori"),
    },

    __date: {
      main: DocStr("data", "funcții pentru manipularea datei și orei"),
      __now: DocStr("acum", "returnează data și ora curentă"),
      __year: DocStr("an", "returnează anul"),
      __month: DocStr("luna", "returnează luna"),
      __dayMonth: DocStr("ziua_lunii", "returnează ziua din lună"),
      __dayWeek: DocStr("ziua_saptamanii", "returnează ziua din săptămână"),
      __hour: DocStr("ora", "returnează ora"),
      __minute: DocStr("minut", "returnează minutele"),
      __second: DocStr("secunda", "returnează secundele"),
    },
  },

  types: {
    __number: DocStr("numar", "declararea unei variabile numerice"),
    __string: DocStr("sir", "declararea unei variabile de tip text"),
    __boolean: DocStr(
      "bool",
      "declararea unei variabile logice (adevarat/fals)",
    ),
    __object: DocStr("obiect", "declararea unei structuri de obiect"),
    __void: DocStr("vid", "indică lipsa unei valori returnate de o funcție"),
    __array: DocStr("lista", "declararea unei structuri de listă"),
  },

  specialValues: {
    __true: DocStr("adevarat", "valoare logică de adevăr"),
    __false: DocStr("fals", "valoare logică de falsitate"),
    __null: DocStr("nul", "reprezintă absența unei valori"),
  },

  words: {
    __new: DocStr("nou", "creează o instanță nouă a unei clase"),
    __this: DocStr("acesta", "referință la instanța curentă a obiectului"),
    __extends: DocStr("extinde", "indică moștenirea unei clase"),
  },

  accessModifiers: {
    __private: DocStr("privat", "accesibil doar în interiorul clasei"),
    __public: DocStr("public", "accesibil de oriunde"),
    __protected: DocStr("protejat", "accesibil în clasă și în subclase"),
    __readonly: DocStr(
      "doar_citire",
      "valoarea nu poate fi modificată după inițializare",
    ),
    __static: DocStr("static", "aparține clasei, nu unei instanțe"),
  },

  methods: {
    method: {
      __print: DocStr("afiseaza", "afișează o valoare pe ecran"),
      __scan: DocStr("citeste", "citește date de la utilizator"),
      __return: DocStr("returneaza", "returnează o valoare dintr-o funcție"),
      __break: DocStr("opreste", "întrerupe execuția buclei curente"),
      __continue: DocStr("continua", "trece la următoarea iterație a buclei"),
    },

    sentences: {
      __function: DocStr("functie", "declararea unei funcții noi"),
      __if: DocStr("daca", "instrucțiune condițională"),
      __else: DocStr(
        "altfel",
        "bloc executat dacă condiția nu este îndeplinită",
      ),
      __while: DocStr(
        "cattimp",
        "buclă executată cât timp condiția este adevărată",
      ),
      __for: DocStr("pentru", "buclă iterativă cu contor"),
      __switch: DocStr("selectie", "structură de selecție multiplă"),
      __case: DocStr("caz", "un caz specific în structura de selecție"),
      __default: DocStr(
        "implicit",
        "executat dacă niciun caz nu se potrivește",
      ),
      __try: DocStr("incearca", "începutul blocului de gestionare a erorilor"),
      __catch: DocStr("prinde", "gestionarea erorii interceptate"),
      __finally: DocStr("sfarsit", "bloc executat întotdeauna la final"),
      __class: DocStr("clasa", "declararea unei clase noi"),
      __constructor: DocStr(
        "constructor",
        "funcție care inițializează un obiect",
      ),
    },
  },

  errors: {
    __labels: errorLabel(
      "Mesaj",
      "Valoare",
      "Variabila",
      "Proprietate",
      "Obiect",
      "Asteptat",
      "Primit",
      "Atribuire_la_constanta",
      "Parametru_duplicat",
      "Sfat",
      "Token_invalid",
      "Stack_overflow",
      "Token",
      "Sfarsit_neașteptat_al_intrării",
    ),
    main: errorMessage("EROARE", "eroare generică de sistem"),
    __TypeError: errorMessage(
      "EROARE_TIP",
      "tip de date invalid pentru operație",
    ),
    __InitError: errorMessage(
      "EROARE_INITIALIZARE",
      "variabila nu a fost inițializată",
    ),
    __ReferenceError: errorMessage(
      "EROARE_REFERINTA",
      "referință la o variabilă inexistentă",
    ),
    __SyntaxError: errorMessage("EROARE_SINTAXA", "eroare în sintaxa codului"),
    __RangeError: errorMessage(
      "EROARE_INTERVAL",
      "valoare în afara limitelor permise",
    ),
    __URIError: errorMessage("EROARE_URI", "format URI invalid"),
    __EvalError: errorMessage("EROARE_EVAL", "eroare legată de funcția eval"),
    __UNKNOWN_ERROR: errorMessage(
      "EROARE_NECUNOSCUTA",
      "a apărut o eroare necunoscută",
    ),
  },

  example: {
    __array: [
      "mancare",
      "tara",
      "lista_nume",
      "numere",
      "culori",
      "produse",
      "utilizatori",
      "categorii",
      "puncte",
      "limbi",
    ],
    __boolean: [
      "status",
      "este_activ",
      "poate_utiliza",
      "este_gata",
      "autorizat",
      "conectat",
      "in_curs",
      "finalizat",
      "verificat",
      "sters",
    ],
    __function: [
      "obtineNume",
      "calculeazaValoare",
      "afiseazaDate",
      "actualizeazaProfil",
      "formateazaText",
      "analizeazaCod",
      "verificaDate",
      "salveazaFisier",
      "trimiteMesaj",
      "sumaTotala",
    ],
    __number: [
      "varsta",
      "an_nastere",
      "medie",
      "total",
      "pret",
      "index",
      "timp",
      "cantitate",
      "scor",
      "ora",
    ],
    __object: [
      "persoana",
      "client",
      "setari",
      "raspuns",
      "plata",
      "configuratie",
      "profil",
      "adresa",
      "metadate",
      "sesiune",
    ],
    __string: [
      "prenume",
      "titlu",
      "descriere",
      "email",
      "parola",
      "mesaj",
      "eticheta",
      "cheie",
      "url",
      "link",
    ],
    __void: [
      "porneste",
      "sterge",
      "opreste",
      "curata",
      "distruge",
      "iesire",
      "goleste_buffer",
      "salveaza_tot",
      "trimite",
      "conectare",
    ],
  },
}).grammar();
