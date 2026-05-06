import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const cestina = new Language({
  language: "cestina",
  about:
    "ENIDE je prelozitelny transpiler ktery umoznuje programovani v jakemkoli jazyce",

  include: DocStr(
    "Zahrnout",
    "pouziva se k zahrnutí jazyka, knihoven nebo datovych struktur z jineho souboru",
  ),

  commands: {
    __about: DocStr("o", "pro ziskani informaci o ENIDE"),
    __help: DocStr("pomoc", "pro ziskani seznamu vsech dostupnych prikazu"),
    __version: DocStr("verze", "pro ziskani aktualni verze ENIDE"),
    __languages: DocStr(
      "jazyky",
      "pro ziskani seznamu vsech dostupnych jazyku",
    ),
    __documentation: DocStr("dok", "pro ziskani dokumentace pro jazyk"),
    __grammar: DocStr("gramatika", "pro ziskani gramatiky pro jazyk"),
  },

  library: {
    __standard: {
      main: DocStr("standardni", "pro pristup ke standardnim pomocnym metodam"),
      __isarray: DocStr("JePole", "pro overeni zda je hodnota pole"),
      __isobject: DocStr("JeObjekt", "pro overeni zda je hodnota objekt"),
      __typeof: DocStr("Typ", "pro ziskani typu hodnoty"),
      __parse: DocStr(
        "Zparsovat",
        "pro prevod hodnoty z retezce na spravny typ",
      ),
    },

    __math: {
      main: DocStr("matematika", "pro pristup k matematickym funkcim"),
      __pi: DocStr("PI", "pro ziskani hodnoty pi"),
      __sqrt: DocStr("DruhOdmocnina", "pro ziskani druhe odmocniny cisla"),
      __pow: DocStr("Mocnina", "pro ziskani mocniny cisla"),
      __round: DocStr("Zaokrouhlit", "pro zaokrouhleni cisla"),
      __random: DocStr("Nahodny", "pro ziskani nahodneho cisla"),
      __max: DocStr("Maximum", "pro ziskani maximalni hodnoty"),
      __min: DocStr("Minimum", "pro ziskani minimalni hodnoty"),
      __isNumber: DocStr("JeCislo", "pro overeni zda je hodnota cislo"),
      __isInteger: DocStr(
        "JeCeleCislo",
        "pro overeni zda je hodnota cele cislo",
      ),
      __isFloat: DocStr(
        "JeDesetinne",
        "pro overeni zda je hodnota desetinne cislo",
      ),
      __cos: DocStr("Cos", "pro ziskani kosinu uhlu v radianech"),
      __sin: DocStr("Sin", "pro ziskani sinu uhlu v radianech"),
      __tan: DocStr("Tan", "pro ziskani tangentu uhlu v radianech"),
    },

    __string: {
      main: DocStr("retezec", "pro pristup k funkcim manipulace s retezci"),
      __length: DocStr("Delka", "pro ziskani delky retezce"),
      __toUpperCase: DocStr("NaVelka", "pro prevod retezce na velka pismena"),
      __toLowerCase: DocStr("NaMala", "pro prevod retezce na mala pismena"),
      __include: DocStr(
        "Obsahuje",
        "pro overeni zda retezec obsahuje podretezec",
      ),
      __repeat: DocStr("Opakovat", "pro opakovani retezce zadany pocet krat"),
    },

    __date: {
      main: DocStr("datum", "pro pristup k funkcim data a casu"),
      __now: DocStr("Nyni", "pro ziskani aktualniho data a casu"),
      __year: DocStr("Rok", "pro ziskani roku"),
      __month: DocStr("Mesic", "pro ziskani mesice"),
      __dayMonth: DocStr("DenMesice", "pro ziskani dne mesice"),
      __dayWeek: DocStr("DenTydne", "pro ziskani dne tydne"),
      __hour: DocStr("Hodina", "pro ziskani hodiny"),
      __minute: DocStr("Minuta", "pro ziskani minuty"),
      __second: DocStr("Sekunda", "pro ziskani sekundy"),
    },
  },

  types: {
    __number: DocStr("cislo", "pro deklaraci promenne typu cislo"),
    __string: DocStr("retezec", "pro deklaraci promenne typu retezec"),
    __boolean: DocStr("bool", "pro deklaraci promenne typu logicky"),
    __object: DocStr("objekt", "pro deklaraci statickeho objektu"),
    __void: DocStr("prazdny", "pro deklaraci funkce ktera nevraci hodnotu"),
    __array: DocStr("pole", "pro deklaraci datove struktury pole"),
  },

  specialValues: {
    __true: DocStr("Pravda", "logicka hodnota pravda"),
    __false: DocStr("Nepravda", "logicka hodnota nepravda"),
    __null: DocStr("Nic", "absence hodnoty"),
  },

  words: {
    __new: DocStr("novy", "pro vytvoreni nove instance tridy"),
    __this: DocStr("toto", "pro pristup k atributum vlastni tridy"),
    __extends: DocStr("rozsiruje", "pro deklaraci ze trida dedi z jine tridy"),
  },

  accessModifiers: {
    __private: DocStr("soukromy", "pristupne pouze uvnitr tridy"),
    __public: DocStr("verejny", "pristupne odkudkoli"),
    __protected: DocStr("chraneny", "pristupne uvnitr tridy a jejich podtrid"),
    __readonly: DocStr(
      "jenProCteni",
      "hodnota muze byt prirazena pouze jednou",
    ),
    __static: DocStr("staticke", "patri tride samotne nikoli instancim"),
  },

  methods: {
    method: {
      __print: DocStr("vypsat", "pro vypis hodnoty na obrazovku"),
      __scan: DocStr("nacist", "pro nacteni hodnoty ze vstupu"),
      __return: DocStr("vratit", "pro vraceni hodnoty z funkce"),
      __break: DocStr("prerusit", "pro ukonceni cyklu"),
      __continue: DocStr("pokracovat", "pro preskoceni na dalsi iteraci cyklu"),
    },

    sentences: {
      __function: DocStr("funkce", "pro deklaraci funkce"),
      __if: DocStr("pokud", "pro deklaraci podminky"),
      __else: DocStr("jinak", "pro deklaraci alternativni podminky"),
      __while: DocStr("dokud", "pro deklaraci cyklu dokud"),
      __for: DocStr("pro", "pro deklaraci cyklu pro"),
      __switch: DocStr("vyber", "pro deklaraci struktury vyberu"),
      __case: DocStr("pripad", "pro deklaraci pripadu ve strukture vyberu"),
      __default: DocStr(
        "vychozi",
        "pro deklaraci vychoziho pripadu ve strukture vyberu",
      ),
      __try: DocStr("zkusit", "pro deklaraci bloku zkusit"),
      __catch: DocStr("zachytit", "pro deklaraci bloku zpracovani chyb"),
      __finally: DocStr("nakonec", "pro deklaraci bloku ktery se vzdy provede"),
      __class: DocStr("trida", "pro deklaraci tridy"),
      __constructor: DocStr(
        "konstruktor",
        "struktura ktera umoznuje deklaraci atributu v tride",
      ),
    },
  },

  errors: {
    __labels: errorLabel(
      "Zprava",
      "Hodnota",
      "Promenna",
      "Vlastnost",
      "Objekt",
      "Ocekavano",
      "Prijato",
      "Prirazeni_Konstanty",
      "Duplicitni_Parametr",
      "Napoveda",
      "Neplatny_Token",
      "Preteceni_Zasobniku",
      "Token",
      "Neocekavany_Konec_Vstupu",
    ),
    main: errorMessage("CHYBA", "obecna chyba systemu"),
    __TypeError: errorMessage("CHYBA_TYPU", "neplatny typ v operaci"),
    __InitError: errorMessage(
      "CHYBA_INICIALIZACE",
      "promenna nebyla inicializovana",
    ),
    __ReferenceError: errorMessage(
      "CHYBA_REFERENCE",
      "promenna, funkce nebo knihovna neexistuje v rozsahu",
    ),
    __SyntaxError: errorMessage("CHYBA_SYNTAXE", "neplatny kod"),
    __RangeError: errorMessage("CHYBA_ROZSAHU", "hodnota mimo povoleny rozsah"),
    __URIError: errorMessage("CHYBA_URI", "chybne nebo neplatne URI"),
    __EvalError: errorMessage("CHYBA_EVAL", "chyba souvisejici s eval"),
    __UNKNOWN_ERROR: errorMessage("NEZNAMA_CHYBA", "uplne neznama chyba"),
  },

  example: {
    __array: [
      "jidlo",
      "zeme",
      "polozky",
      "stitky",
      "barvy",
      "produkty",
      "uzivatele",
      "kategorie",
      "body",
      "jazyky",
    ],
    __boolean: [
      "stav",
      "jeDospely",
      "jeAktivni",
      "jeViditelny",
      "maOprávnení",
      "jePrihlasen",
      "jePovoleno",
      "jeHotovo",
      "jeOvereno",
      "jeSmazan",
    ],
    __function: [
      "ziskatJmeno",
      "ziskatHodnotu",
      "zpracovatKlik",
      "nacistData",
      "formatovatDatum",
      "zparsоvatVstup",
      "overitFormular",
      "zobrazitPolozku",
      "aktualizovatStav",
      "vypocítatCelkem",
    ],
    __number: [
      "vek",
      "rok",
      "pocet",
      "celkem",
      "cena",
      "index",
      "trvani",
      "mnozstvi",
      "body",
      "timeout",
    ],
    __object: [
      "osoba",
      "uzivatel",
      "konfigurace",
      "odpoved",
      "platba",
      "nastaveni",
      "profil",
      "adresa",
      "metadata",
      "relace",
    ],
    __string: [
      "jmeno",
      "nazev",
      "popis",
      "email",
      "heslo",
      "zprava",
      "stitek",
      "token",
      "url",
      "slug",
    ],
    __void: [
      "prihlasit",
      "inicializovat",
      "vycistit",
      "resetovat",
      "znicit",
      "odhlasit",
      "vycistítCache",
      "ulozitDoDB",
      "odeslitEmail",
      "zaznamenatUdalost",
    ],
  },
}).grammar();
