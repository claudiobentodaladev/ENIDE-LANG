import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const cestina = new Language({
  language: "cestina",
  about:
    "ENIDE je vícejazyčný programovací jazyk, který vám umožňuje programovat v jakémkoli jazyce.",
  include: DocStr(
    "Zahrnout",
    "Používá se k zahrnutí jazyka, knihoven nebo datových struktur z jiného souboru",
  ),

  commands: {
    __about: DocStr("o", "Pro získání informací o ENIDE"),
    __help: DocStr("pomoc", "Pro získání seznamu všech dostupných příkazů"),
    __version: DocStr("verze", "Pro získání aktuální verze ENIDE"),
    __languages: DocStr(
      "jazyky",
      "Pro získání seznamu všech dostupných jazyků",
    ),
    __documentation: DocStr("dok", "Pro získání dokumentace pro jazyk"),
    __grammar: DocStr("gramatika", "Pro získání gramatiky pro jazyk"),
  },

  library: {
    __standard: {
      main: DocStr("standardní", "Pro přístup ke standardním pomocným metodám"),
      __isarray: DocStr("JePole", "Pro ověření, zda je hodnota pole"),
      __isobject: DocStr("JeObjekt", "Pro ověření, zda je hodnota objekt"),
      __typeof: DocStr("Typ", "Pro získání typu hodnoty"),
      __parse: DocStr(
        "Zparsovat",
        "Pro převod hodnoty z řetězce na správný typ",
      ),
    },

    __math: {
      main: DocStr("matematika", "Pro přístup k matematickým funkcím"),
      __pi: DocStr("PI", "Pro získání hodnoty pi"),
      __sqrt: DocStr("DruháOdmocnina", "Pro získání druhé odmocniny čísla"),
      __pow: DocStr("Mocnina", "Pro získání mocniny čísla"),
      __round: DocStr("Zaokrouhlit", "Pro zaokrouhlení čísla"),
      __random: DocStr("Náhodný", "Pro získání náhodného čísla"),
      __max: DocStr("Maximum", "Pro získání maximální hodnoty"),
      __min: DocStr("Minimum", "Pro získání minimální hodnoty"),
      __isNumber: DocStr("JeČíslo", "Pro ověření, zda je hodnota číslo"),
      __isInteger: DocStr(
        "JeCeléČíslo",
        "Pro ověření, zda je hodnota celé číslo",
      ),
      __isFloat: DocStr(
        "JeDesetinné",
        "Pro ověření, zda je hodnota desetinné číslo",
      ),
      __cos: DocStr("Cos", "Pro získání kosinu úhlu v radiánech"),
      __sin: DocStr("Sin", "Pro získání sinu úhlu v radiánech"),
      __tan: DocStr("Tan", "Pro získání tangentu úhlu v radiánech"),
    },

    __string: {
      main: DocStr("řetězec", "Pro přístup k funkcím manipulace s řetězci"),
      __length: DocStr("Délka", "Pro získání délky řetězce"),
      __toUpperCase: DocStr("NaVelká", "Pro převod řetězce na velká písmena"),
      __toLowerCase: DocStr("NaMalá", "Pro převod řetězce na malá písmena"),
      __include: DocStr(
        "Obsahuje",
        "Pro ověření, zda řetězec obsahuje podřetězec",
      ),
      __repeat: DocStr("Opakovat", "Pro opakování řetězce zadaný počet krát"),
    },

    __date: {
      main: DocStr("datum", "Pro přístup k funkcím data a času"),
      __now: DocStr("Nyní", "Pro získání aktuálního data a času"),
      __year: DocStr("Rok", "Pro získání roku"),
      __month: DocStr("Měsic", "Pro získání měsíce"),
      __dayMonth: DocStr("DenMěsíce", "Pro získání dne měsíce"),
      __dayWeek: DocStr("DenTýdne", "Pro získání dne týdne"),
      __hour: DocStr("Hodina", "Pro získání hodiny"),
      __minute: DocStr("Minuta", "Pro získání minuty"),
      __second: DocStr("Sekunda", "Pro získání sekundy"),
    },
  },

  types: {
    __number: DocStr("číslo", "Pro deklaraci proměnné typu číslo"),
    __string: DocStr("řetězec", "Pro deklaraci proměnné typu řetězec"),
    __boolean: DocStr("bool", "Pro deklaraci proměnné typu logický"),
    __object: DocStr("objekt", "Pro deklaraci statického objektu"),
    __void: DocStr("prázdný", "Pro deklaraci funkce, která nevrací hodnotu"),
    __array: DocStr("pole", "Pro deklaraci datové struktury pole"),
  },

  specialValues: {
    __true: DocStr("Pravda", "Logická hodnota pravda"),
    __false: DocStr("Nepravda", "Logická hodnota nepravda"),
    __null: DocStr("Nic", "Absence hodnoty"),
  },

  words: {
    __new: DocStr("nový", "Pro vytvoření nové instance třídy"),
    __this: DocStr("toto", "Pro přístup k atributům vlastní třídy"),
    __extends: DocStr("rozšiřuje", "Pro deklaraci, že třída dědí z jiné třídy"),
  },

  accessModifiers: {
    __private: DocStr("soukromý", "Přístupné pouze uvnitř třídy"),
    __public: DocStr("veřejný", "Přístupné odkudkoli"),
    __protected: DocStr("chráněný", "Přístupné uvnitří třídy a jejích podtříd"),
    __readonly: DocStr(
      "jenProČtení",
      "Hodnota může být přiřazena pouze jednou",
    ),
    __static: DocStr("statické", "Patří třídě samotné, nikoli instancím"),
  },

  methods: {
    method: {
      __print: DocStr("vypsat", "Pro výpis hodnoty na obrazovku"),
      __scan: DocStr("načíst", "Pro načtení hodnoty ze vstupu"),
      __return: DocStr("vrátit", "Pro vrácení hodnoty z funkce"),
      __break: DocStr("přerušit", "Pro ukončení cyklu"),
      __continue: DocStr("pokračovat", "Pro přeskočení na další iteraci cyklu"),
    },

    sentences: {
      __function: DocStr("funkce", "Pro deklaraci funkce"),
      __if: DocStr("pokud", "Pro deklaraci podmínky"),
      __else: DocStr("jinak", "Pro deklaraci alternativní podmínky"),
      __while: DocStr("dokud", "Pro deklaraci cyklu dokud"),
      __for: DocStr("pro", "Pro deklaraci cyklu pro"),
      __switch: DocStr("výběr", "Pro deklaraci struktury výběru"),
      __case: DocStr("případ", "Pro deklaraci případu ve struktuře výběru"),
      __default: DocStr(
        "výchozí",
        "Pro deklaraci výchozího případu ve struktuře výběru",
      ),
      __try: DocStr("zkusit", "Pro deklaraci bloku zkusit"),
      __catch: DocStr("zachytit", "Pro deklaraci bloku zpracování chyb"),
      __finally: DocStr(
        "nakonec",
        "Pro deklaraci bloku, který se vždy provede",
      ),
      __class: DocStr("třída", "Pro deklaraci třídy"),
      __constructor: DocStr(
        "konstruktor",
        "Struktura, která umožňuje deklaraci atributů v třídě",
      ),
    },
  },

  errors: {
    __labels: errorLabel(
      "Zpráva",
      "Hodnota",
      "Proměnná",
      "Vlastnost",
      "Objekt",
      "Očekáváno",
      "Přijato",
      "Přiřazení_Konstanty",
      "Duplicitní_Parametr",
      "Nápověda",
      "Neplatný_Token",
      "Přetečení_Zásobníku",
      "Token",
      "Neočekávaný_Konec_Vstupu",
    ),
    main: errorMessage("CHYBA", "Obecná chyba systému"),
    __TypeError: errorMessage("CHYBA_TYPU", "Neplatný typ v operaci"),
    __InitError: errorMessage(
      "CHYBA_INICIALIZACE",
      "Proměnná nebyla inicializována",
    ),
    __ReferenceError: errorMessage(
      "CHYBA_REFERENCE",
      "Proměnná, funkce nebo knihovna neexistuje v rozsahu",
    ),
    __SyntaxError: errorMessage("CHYBA_SYNTAXE", "Neplatný kód"),
    __RangeError: errorMessage("CHYBA_ROZSAHU", "Hodnota mimo povolený rozsah"),
    __URIError: errorMessage("CHYBA_URI", "Chybné nebo neplatné URI"),
    __EvalError: errorMessage("CHYBA_EVAL", "Chyba související s eval"),
    __UNKNOWN_ERROR: errorMessage("NEZNÁMÁ_CHYBA", "Úplně neznámá chyba"),
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
      "máOprávnění",
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
      "zparsovatVstup",
      "overitFormular",
      "zobrazitPolozku",
      "aktualizovatStav",
      "vypočítatCelkem",
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
      "vyčistitCache",
      "ulozitDoDB",
      "odeslitEmail",
      "zaznamenatUdalost",
    ],
  },
}).grammar();
