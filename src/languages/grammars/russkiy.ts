import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const russkiy = new Language({
  language: "russkiy",
  about:
    "ENIDE - eto perevodimyy transpayler, pozvolyayushchiy programmirovat na lyubom yazyke",

  include: DocStr(
    "vklyuchit",
    "ispolzuyetsya dlya vklyucheniya yazykov, bibliotek ili vneshnikh moduley",
  ),

  commands: {
    __about: DocStr("o_programme", "vyvodit informatsiyu o proyekte ENIDE"),
    __help: DocStr("pomoshch", "spisok vsekh dostupnykh komand"),
    __version: DocStr("versiya", "tekushchaya versiya ENIDE"),
    __languages: DocStr("yazyki", "spisok vsekh podderzhivayemykh yazykov"),
    __documentation: DocStr("dok", "dokumentatsiya dlya vybrannogo yazyka"),
    __grammar: DocStr("grammatika", "pravila sintaksisa yazyka"),
  },

  library: {
    __standard: {
      main: DocStr("standart", "dostup k bazovym sistemnym funktsiyam"),
      __isarray: DocStr(
        "eto_spisok",
        "proveryayet, yavlyayetsya li znacheniye spiskom",
      ),
      __isobject: DocStr(
        "eto_obekt",
        "proveryayet, yavlyayetsya li znacheniye obektom",
      ),
      __typeof: DocStr("tip_dannykh", "vozvrashchayet tip peremennoy"),
      __parse: DocStr(
        "analizirovat",
        "preobrazuyet tekst v sootvetstvuyushchiy tip",
      ),
    },
    __math: {
      main: DocStr("matematika", "matematicheskiye funktsii i konstanty"),
      __pi: DocStr("PI", "znacheniye chisla Pi"),
      __sqrt: DocStr("koren", "vychislyayet kvadratnyy koren"),
      __pow: DocStr("stepen", "vozvodit chislo v stepen"),
      __round: DocStr("okruglit", "okruglyayet do blizhayshego tselogo"),
      __random: DocStr("sluchayno", "generiruyet sluchaynoye chislo"),
      __max: DocStr("maksimum", "vozvrashchayet naibolsheye znacheniye"),
      __min: DocStr("minimum", "vozvrashchayet naimensheye znacheniye"),
      __isNumber: DocStr(
        "eto_chislo",
        "proveryayet, yavlyayetsya li znacheniye chislom",
      ),
      __isInteger: DocStr(
        "tseloye",
        "proveryayet, yavlyayetsya li chislo tselym",
      ),
      __isFloat: DocStr(
        "drobnoye",
        "proveryayet, yest li u chisla drobnaya chast",
      ),
      __cos: DocStr("kos", "vychislyayet kosinus"),
      __sin: DocStr("sin", "vychislyayet sinus"),
      __tan: DocStr("tan", "vychislyayet tangens"),
    },

    __string: {
      main: DocStr("stroka", "funktsii dlya raboty s tekstom"),
      __length: DocStr("dlina", "vozvrashchayet dlinu stroki"),
      __toUpperCase: DocStr("v_verkhniy", "perevodit tekst v verkhniy registr"),
      __toLowerCase: DocStr("v_nizhniy", "perevodit tekst v nizhniy registr"),
      __include: DocStr(
        "soderzhit",
        "proveryayet nalichiye podstroki v tekste",
      ),
      __repeat: DocStr("povtorit", "povtoryayet stroku n-noye kolichestvo raz"),
    },

    __date: {
      main: DocStr("data", "funktsii raboty s datoy i vremenem"),
      __now: DocStr("seychas", "tekushchaya data i vremya"),
      __year: DocStr("god", "poluchit god"),
      __month: DocStr("mesyats", "poluchit mesyats"),
      __dayMonth: DocStr("den_mesyatsa", "poluchit den v mesyatse"),
      __dayWeek: DocStr("den_nedeli", "poluchit den nedeli"),
      __hour: DocStr("chas", "poluchit tekushchiy chas"),
      __minute: DocStr("minuta", "poluchit minuty"),
      __second: DocStr("sekunda", "poluchit sekundy"),
    },
  },

  types: {
    __number: DocStr("chislo", "obyavleniye chislovoy peremennoy"),
    __string: DocStr("tekst", "obyavleniye tekstovoy peremennoy"),
    __boolean: DocStr("logika", "obyavleniye logicheskoy peremennoy"),
    __object: DocStr("obekt", "obyavleniye struktury obekta"),
    __void: DocStr(
      "pusto",
      "ukazyvayet na otsutstviye vozvrashchayemogo znacheniya",
    ),
    __array: DocStr("spisok", "obyavleniye struktury spiska"),
  },

  specialValues: {
    __true: DocStr("istina", "logicheskoye znacheniye istiny"),
    __false: DocStr("lozh", "logicheskoye znacheniye lozhi"),
    __null: DocStr("nichego", "otsutstviye znacheniya"),
  },

  words: {
    __new: DocStr("novyy", "sozdast novyy ekzemplyar klassa"),
    __this: DocStr("etot", "ssylka na tekushchiy ekzemplyar obekta"),
    __extends: DocStr("nasleduyet", "ukazyvayet na nasledovaniye klassa"),
  },

  accessModifiers: {
    __private: DocStr("privatnyy", "dostupno tolko vnutri klassa"),
    __public: DocStr("publichnyy", "dostupno povsyudu"),
    __protected: DocStr(
      "zashchishchennyy",
      "dostupno v klasse i yego naslednikakh",
    ),
    __readonly: DocStr(
      "tolko_chteniye",
      "znacheniye nelzya izmenit posle initsializatsii",
    ),
    __static: DocStr("staticheskiy", "prinadlezhit klassu, a ne obektu"),
  },

  methods: {
    method: {
      __print: DocStr("pechat", "vyvod znacheniya na ekran"),
      __scan: DocStr("chitat", "chteniye dannykh ot polzovatelya"),
      __return: DocStr("vernut", "vozvrashchayet znacheniye iz funktsii"),
      __break: DocStr("preryvat", "nemedlennaya ostanovka tsikla"),
      __continue: DocStr(
        "prodolzhit",
        "perekhod k sleduyushchey iteratsii tsikla",
      ),
    },

    sentences: {
      __function: DocStr("funktsiya", "obyavleniye novoy funktsii"),
      __if: DocStr("esli", "uslovnyy operator"),
      __else: DocStr("inache", "blok, esli usloviye ne vypolneno"),
      __while: DocStr("poka", "tsikl, vypolnyayemyy poka usloviye istinno"),
      __for: DocStr("dlya", "tsikl s ischislyayemym kolichestvom povtoreniy"),
      __switch: DocStr("vybor", "struktura vybora neskolkikh variantov"),
      __case: DocStr("variant", "konkretnyy variant v strukture vybora"),
      __default: DocStr(
        "po_umolchaniyu",
        "blok, esli ni odin variant ne podoshel",
      ),
      __try: DocStr("poprobovat", "nachalo bloka obrabotki isklyucheniy"),
      __catch: DocStr("poymat", "obrabotka perekhvachennoy oshibki"),
      __finally: DocStr("v_itoge", "blok, kotoryy vypolnyayetsya vsegda"),
      __class: DocStr("klass", "obyavleniye novogo klassa"),
      __constructor: DocStr(
        "konstruktor",
        "funktsiya initsializatsii obekta klassa",
      ),
    },
  },

  errors: {
    __labels: errorLabel(
      "Soobshcheniye",
      "Znacheniye",
      "Peremennaya",
      "Svoystvo",
      "Obekt",
      "Ozhidalos",
      "Polucheno",
      "Prisvoyeniye_konstante",
      "Dublirovaniye_parametra",
      "Podskazka",
      "Nevernyy_token",
      "Perepolneniye_steka",
      "Token",
      "Neozhidannyy_konets_vvoda",
    ),
    main: errorMessage("OSHIBKA", "obshchaya sistemnaya oshibka"),
    __TypeError: errorMessage(
      "OSHIBKA_TIPA",
      "nevernyy tip dannykh v operatsii",
    ),
    __InitError: errorMessage(
      "OSHIBKA_INIT",
      "peremennaya ne byla initsializirovana",
    ),
    __ReferenceError: errorMessage(
      "OSHIBKA_SSYLKI",
      "ssylka na nesushchestvuyushchuyu peremennuyu",
    ),
    __SyntaxError: errorMessage(
      "OSHIBKA_SINTAKSISA",
      "oshibka v sintaksise koda",
    ),
    __RangeError: errorMessage(
      "OSHIBKA_DIAPAZONA",
      "znacheniye vne dopustimykh predelov",
    ),
    __URIError: errorMessage("OSHIBKA_URI", "nevernyy format URI"),
    __EvalError: errorMessage("OSHIBKA_EVAL", "oshibka v rabote funktsii eval"),
    __UNKNOWN_ERROR: errorMessage(
      "NEIZVESTNAYA_OSHIBKA",
      "proizoshla nepredvidennaya oshibka",
    ),
  },

  example: {
    __array: [
      "yeda",
      "strana",
      "spisok_imen",
      "chisla",
      "tsveta",
      "produkty",
      "polzovateli",
      "kategorii",
      "bally",
      "yazyki",
    ],
    __boolean: [
      "status",
      "aktivno",
      "mozhno_ispolzovat",
      "gotovo",
      "avtorizovan",
      "v_seti",
      "v_protsesse",
      "zaversheno",
      "provereno",
      "udaleno",
    ],
    __function: [
      "poluchitImya",
      "vychislitZnacheniye",
      "pokazatDannyye",
      "obnovitProfil",
      "formatirovatTekst",
      "analizirovatKod",
      "proveritDannyye",
      "sohranitFayl",
      "otpravitSoobshcheniye",
      "summirovatVse",
    ],
    __number: [
      "vozrast",
      "god_rozhdeniya",
      "sredneye",
      "summa",
      "tsena",
      "indeks",
      "vremya",
      "kolichestvo",
      "rezultat",
      "chas",
    ],
    __object: [
      "chelovek",
      "klient",
      "nastroyki",
      "otvet",
      "oplata",
      "konfiguratsiya",
      "profil",
      "adres",
      "metadannyye",
      "sessiya",
    ],
    __string: [
      "imya",
      "zagolovok",
      "opisaniye",
      "pochta",
      "parol",
      "soobshcheniye",
      "tekh",
      "klyuch",
      "url",
      "ssylka",
    ],
    __void: [
      "zapustit",
      "udalit",
      "ostanovit",
      "ochistit",
      "unichtozhit",
      "vykhod",
      "sbrosit_bufer",
      "sohranit_vse",
      "otpravit",
      "vkhod",
    ],
  },
}).grammar();
