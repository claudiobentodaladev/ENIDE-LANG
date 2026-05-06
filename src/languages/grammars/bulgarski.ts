import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const bulgarski = new Language({
  language: "bulgarski",
  about:
    "ENIDE e prevodim transpiler, koito pozvoliava programirane na vsiakakuv ezik",

  include: DocStr(
    "Vklyuchvane",
    "izpolzva se za vklyuchvane na ezik, biblioteki ili strukturi ot drug fail",
  ),

  commands: {
    __about: DocStr("otnosno", "za poluchavane na informatsia za ENIDE"),
    __help: DocStr("pomosht", "za spisuk s vsichki dostupni komandi"),
    __version: DocStr("versia", "za tekushtata versia na ENIDE"),
    __languages: DocStr("ezici", "za spisuk s vsichki dostupni ezici"),
    __documentation: DocStr(
      "dokumentatsia",
      "za dokumentatsiata na daden ezik",
    ),
    __grammar: DocStr("gramatika", "za gramitikata na daden ezik"),
  },

  library: {
    __standard: {
      main: DocStr("standarten", "za dostup do standartni pomoshni metodi"),
      __isarray: DocStr("EMasiv", "proverka dali stoinostta e masiv"),
      __isobject: DocStr("EObekt", "proverka dali stoinostta e obekt"),
      __typeof: DocStr("Tip", "za tipa na stoinostta"),
      __parse: DocStr(
        "Razchleni",
        "za preobrazuvane na stoinost ot niz v pravilnia tip",
      ),
    },

    __math: {
      main: DocStr("matematika", "za dostup do matematicheski funktsii"),
      __pi: DocStr("PI", "za stoinostta na pi"),
      __sqrt: DocStr("KorenKvadraten", "za kvadraten koren"),
      __pow: DocStr("Stepen", "za povdigane na chislo na stepen"),
      __round: DocStr("Zakrugli", "za zakruglyane na chislo"),
      __random: DocStr("Sluchaino", "za sluchaino chislo"),
      __max: DocStr("Maks", "za maksimalna stoinost"),
      __min: DocStr("Min", "za minimalna stoinost"),
      __isNumber: DocStr("EChislo", "proverka dali stoinostta e chislo"),
      __isInteger: DocStr(
        "ETsyaloChislo",
        "proverka dali stoinostta e tsyalo chislo",
      ),
      __isFloat: DocStr(
        "EDrobnoChislo",
        "proverka dali stoinostta e drobno chislo",
      ),
      __cos: DocStr("Cos", "za kosinusa na ugul v radiani"),
      __sin: DocStr("Sin", "za sinusa na ugul v radiani"),
      __tan: DocStr("Tan", "za tangensa na ugul v radiani"),
    },

    __string: {
      main: DocStr("niz", "za funktsii za rabota s tekstovi nizove"),
      __length: DocStr("Dulzhina", "za dulzhinata na niza"),
      __toUpperCase: DocStr("GolemiBukvi", "prevrushtane v golemi bukvi"),
      __toLowerCase: DocStr("MalkiBukvi", "prevrushtane v malki bukvi"),
      __include: DocStr("Sudurzha", "proverka dali nizut sudurzha podniz"),
      __repeat: DocStr("Povtori", "za povtarane na niz dadeno broi puti"),
    },

    __date: {
      main: DocStr("data", "za funktsii za rabota s data i chas"),
      __now: DocStr("Sega", "za tekushtata data i chas"),
      __year: DocStr("Godina", "za godinata"),
      __month: DocStr("Mesets", "za mesetsa"),
      __dayMonth: DocStr("DenOtMesetsa", "za denya ot mesetsa"),
      __dayWeek: DocStr("DenOtSedmitsata", "za denya ot sedmitsata"),
      __hour: DocStr("Chas", "za chasa"),
      __minute: DocStr("Minuta", "za minutata"),
      __second: DocStr("Sekunda", "za sekundata"),
    },
  },

  types: {
    __number: DocStr("chislo", "za deklarirane na promenliva ot tip chislo"),
    __string: DocStr("niz", "za deklarirane na promenliva ot tip niz"),
    __boolean: DocStr("bulev", "za deklarirane na promenliva ot bulev tip"),
    __object: DocStr("obekt", "za obyavyavane na statichen obekt"),
    __void: DocStr(
      "prazen",
      "za deklarirane na funktsia koiato ne vrushta stoinost",
    ),
    __array: DocStr("masiv", "za deklarirane na masivna struktura"),
  },

  specialValues: {
    __true: DocStr("Vyarno", "bulevska stoinost vyarno"),
    __false: DocStr("Nevyarno", "bulevska stoinost nevyarno"),
    __null: DocStr("Nishto", "otsastvie na stoinost"),
  },

  words: {
    __new: DocStr("nov", "za suzdavane na nov ekzemplar ot klas"),
    __this: DocStr("tozi", "za dostup do atributite na sobstvenia klas"),
    __extends: DocStr(
      "razshiryava",
      "za deklarirane che klasut nasledyava drug klas",
    ),
  },

  accessModifiers: {
    __private: DocStr("chastno", "dostupno samo vutre v klasa"),
    __public: DocStr("publichno", "dostupno ot vsyakude"),
    __protected: DocStr(
      "zashtiteno",
      "dostupno vutre v klasa i podklasovete mu",
    ),
    __readonly: DocStr(
      "samoZaChitane",
      "stoinostta mozhe da se prisvoiava samo vednauzh",
    ),
    __static: DocStr("statichno", "prinadlezhi na klasa a ne na ekzemplyarite"),
  },

  methods: {
    method: {
      __print: DocStr("pechatai", "za izvezhdane na stoinost na ekrana"),
      __scan: DocStr("cheti", "za chetene na stoinost ot vkhoda"),
      __return: DocStr("vurni", "za vrushtane na stoinost ot funktsia"),
      __break: DocStr("spri", "za izhod ot tsikula"),
      __continue: DocStr("produlzhi", "za prekhod kum sledvashtata iteratsiya"),
    },

    sentences: {
      __function: DocStr("funktsia", "za deklarirane na funktsia"),
      __if: DocStr("ako", "za deklarirane na uslovie"),
      __else: DocStr("inache", "za alternativno uslovie"),
      __while: DocStr("dokato", "za while tsikul"),
      __for: DocStr("za", "za for tsikul"),
      __switch: DocStr("prevkluchi", "za struktura za izbor"),
      __case: DocStr("sluchai", "za otdelen sluchai v strukturata"),
      __default: DocStr(
        "poPodrazbirane",
        "za sluchai po podrazbirane v strukturata",
      ),
      __try: DocStr("opitai", "za try blok"),
      __catch: DocStr("uhvani", "za blok za obrabotka na greshki"),
      __finally: DocStr("nakraya", "za blok koito se izpulniava vinagi"),
      __class: DocStr("klas", "za deklarirane na klas"),
      __constructor: DocStr(
        "konstruktor",
        "struktura koiato pozvoliava deklarirane na atributi v klasa",
      ),
    },
  },

  errors: {
    __labels: errorLabel(
      "Suobshtenie",
      "Stoinost",
      "Promenliva",
      "Svoistvo",
      "Obekt",
      "Ochakvano",
      "Polucheno",
      "Prisvoiavane_Na_Konstanta",
      "Dublikat_Parametur",
      "Podskazka",
      "Nevaliден_Token",
      "Prepulvane_Na_Stek",
      "Token",
      "Neochakvan_Krai_Na_Vkhoda",
    ),
    main: errorMessage("GRESHKA", "obshta sistemna greshka"),
    __TypeError: errorMessage("GRESHKA_V_TIPA", "nevaliden tip v operatsiyata"),
    __InitError: errorMessage(
      "GRESHKA_PRI_INICIALIZATSIA",
      "promenlivata ne e bila inicializirana",
    ),
    __ReferenceError: errorMessage(
      "GRESHKA_V_REFERENTSIYATA",
      "promenlivata, funktsiyata ili bibliotekata ne sushtestvuva v obkhvata",
    ),
    __SyntaxError: errorMessage("SINTAKTICHNA_GRESHKA", "nevaliden kod"),
    __RangeError: errorMessage(
      "GRESHKA_V_OBKHVATA",
      "stoinostta e izvun dopustimia diapazon",
    ),
    __URIError: errorMessage("URI_GRESHKA", "losh ili nevaliden URI"),
    __EvalError: errorMessage("EVAL_GRESHKA", "greshka svurzana s eval"),
    __UNKNOWN_ERROR: errorMessage(
      "NEIZVESTNA_GRESHKA",
      "napulno neizvestna greshka",
    ),
  },

  example: {
    __array: [
      "hrana",
      "strani",
      "elementi",
      "etiketi",
      "tsvetove",
      "produkti",
      "potrebiteli",
      "kategorii",
      "ochki",
      "ezici",
    ],
    __boolean: [
      "status",
      "ePulunoletno",
      "eAktivno",
      "eVidimo",
      "imaRazreshenie",
      "eVpisano",
      "eVklyucheno",
      "eGotovo",
      "ePotвurdeno",
      "eIztrито",
    ],
    __function: [
      "vzeмiIme",
      "vzeмiStoinost",
      "obработiKlik",
      "zaредiDanni",
      "formatiraiData",
      "razchleниVhod",
      "validiтaiForma",
      "vizualiziтaiElement",
      "aktualiziрaiSustояnie",
      "izчisliObshto",
    ],
    __number: [
      "vazrast",
      "godina",
      "broi",
      "obshto",
      "tsena",
      "indeks",
      "traene",
      "kolichestvo",
      "ochki",
      "timeout",
    ],
    __object: [
      "chovek",
      "potrebitel",
      "konfiguratsia",
      "otgovor",
      "plashtane",
      "nastroiki",
      "profil",
      "adres",
      "metadanni",
      "sesia",
    ],
    __string: [
      "ime",
      "zaglavie",
      "opisanie",
      "email",
      "parola",
      "suobshtenie",
      "etiket",
      "token",
      "url",
      "slug",
    ],
    __void: [
      "vpisvane",
      "inicializirai",
      "iztrii",
      "nulirai",
      "unishtozhi",
      "izpisvane",
      "iztriиКеша",
      "zapaziVBaza",
      "izpratиEmail",
      "zapisheSubitie",
    ],
  },
}).grammar();
