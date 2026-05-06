import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const ukrainska = new Language({
  language: "ukrainska",
  about:
    "ENIDE - tse transpilyator, yakyy mozhna perekladaty, shcho dozvolyaye prohramuvaty bud-yakoyu movoyu",

  include: DocStr(
    "Vklyuchyty",
    "Vykorystovuyet'sya dlya vklyuchennya movy abo bibliotek ya-da dasky modullary gosmak ucin ulanylyar",
  ),

  commands: {
    __about: DocStr("ProEnide", "shchob otrymaty informatsiyu pro ENIDE"),
    __help: DocStr(
      "Dopomoha",
      "shchob otrymaty spisok usikh dostupnykh komand",
    ),
    __version: DocStr("Versiya", "shchob otrymaty potochnu versiyu ENIDE"),
    __languages: DocStr("Movy", "shchob otrymaty spisok usikh dostupnykh mov"),
    __documentation: DocStr(
      "Dokumentatsiya",
      "shchob otrymaty dokumentatsiyu dlya movy",
    ),
    __grammar: DocStr("Syntaksys", "pokazuye pravyla hramatyky movy"),
  },

  library: {
    __standard: {
      main: DocStr("Standart", "osnovni funktsiyi systemy"),
      __isarray: DocStr(
        "TseSpysok",
        "pereviryaye chy ye znachennya spyskom (array)",
      ),
      __isobject: DocStr("TseObiekt", "pereviryaye chy ye znachennya obiektom"),
      __typeof: DocStr("TypZminnoyi", "povertaye typ danykh zminnoyi"),
      __parse: DocStr(
        "Rozibraty",
        "peretvoryuye tekst u vidpovidnyy typ danykh",
      ),
    },
    __math: {
      main: DocStr("Matematyka", "dlya dostupu do matematychnykh funktsiy"),
      __pi: DocStr("PI", "shchob otrymaty znachennya pi"),
      __sqrt: DocStr("Korin", "shchob otrymaty kvadratnyy korin"),
      __pow: DocStr("Stepin", "shchob pidnesty chyslo do stepenya"),
      __round: DocStr("Okruhlyty", "shchob okruhlyty chyslo"),
      __random: DocStr("Vipadkovo", "shchob otrymaty vipadkove chyslo"),
      __max: DocStr("Maksymum", "shchob otrymaty maksymalne znachennya"),
      __min: DocStr("Minimum", "shchob otrymaty minimalne znachennya"),
      __isNumber: DocStr("TseChyslo", "pereviryaye chy ye znachennya chyslom"),
      __isInteger: DocStr(
        "TseTsile",
        "pereviryaye chy ye znachennya tsilym chyslom",
      ),
      __isFloat: DocStr("TseDrobove", "pereviryaye chy ye znachennya drobovym"),
      __cos: DocStr("cos", "obchyslyuye kosynus"),
      __sin: DocStr("sin", "obchyslyuye synus"),
      __tan: DocStr("tan", "obchyslyuye tanhins"),
    },

    __string: {
      main: DocStr("Ryadok", "funktsiyi manipulyatsiyi ryadkamy"),
      __length: DocStr("Dovzhyna", "shchob otrymaty dovzhynu ryadka"),
      __toUpperCase: DocStr(
        "VelykiBukvy",
        "peretvoryuye ryadok u velyki bukvy",
      ),
      __toLowerCase: DocStr("MaliBukvy", "peretvoryuye ryadok u mali bukvy"),
      __include: DocStr("Mistyt", "pereviryaye chy mistyt' ryadok peven tekst"),
      __repeat: DocStr(
        "Povtoryty",
        "povtoryuye ryadok vkazanu kil'kist' raziv",
      ),
    },

    __date: {
      main: DocStr("Data", "funktsiyi manipulyatsiyi datoyu ta chasom"),
      __now: DocStr("Zaraz", "povertaye potochnu datu ta chas"),
      __year: DocStr("Rik", "shchob otrymaty rik"),
      __month: DocStr("Misyats", "shchob otrymaty misyats"),
      __dayMonth: DocStr("DenMisyatsya", "shchob otrymaty den misyatsya"),
      __dayWeek: DocStr("DenTyzhnya", "shchob otrymaty den tyzhnya"),
      __hour: DocStr("Hodyna", "shchob otrymaty hodynu"),
      __minute: DocStr("Khvilyna", "shchob otrymaty khvilynu"),
      __second: DocStr("Sekunda", "shchob otrymaty sekundu"),
    },
  },

  types: {
    __number: DocStr("Chyslo", "oholoshennya zminnoyi typu chyslo"),
    __string: DocStr("Ryadok", "oholoshennya zminnoyi typu ryadok"),
    __boolean: DocStr("Lohik", "oholoshennya lohichnoho typu danykh"),
    __object: DocStr("Obiekt", "oholoshennia statychnoho obiekta"),
    __void: DocStr(
      "Porozhno",
      "oznachaye shcho funktsiya ne povertaye znachen'",
    ),
    __array: DocStr("Spysok", "oholoshennya spysku elementiv"),
  },

  specialValues: {
    __true: DocStr("Istyna", "lohichne znachennya istyna"),
    __false: DocStr("Khyba", "lohichne znachennya khyba"),
    __null: DocStr("Nisho", "vidsutnist' bud-yakohov znachennya"),
  },

  words: {
    __new: DocStr("Novyy", "stvoryuye novyy ekzemplyar klasu"),
    __this: DocStr("Tsey", "posylannya na potochnyy obiekt"),
    __extends: DocStr("Rozshyryuye", "nasliduvannya klasu"),
  },

  accessModifiers: {
    __private: DocStr("Pryvatnyy", "dostupnyy til'ky vseredyni klasu"),
    __public: DocStr("Publichnyy", "dostupnyy usim"),
    __protected: DocStr("Zakhyshchenyy", "dostupnyy u klasi ta nashchadkakh"),
    __readonly: DocStr("TilkyChytannya", "znachennya ne mozhna zminyty"),
    __static: DocStr("Statychnyy", "nalezhyt' klasu, a ne ekzemplyaru"),
  },

  methods: {
    method: {
      __print: DocStr("Druk", "vyvesty znachennya na ekran"),
      __scan: DocStr("Skan", "prochytaty znachennya z vvodu"),
      __return: DocStr("Povernuty", "povernuty znachennya z funktsiyi"),
      __break: DocStr("Perervaty", "zupynyaye potochnyy tsykl"),
      __continue: DocStr("Prodovzhyty", "perekhodyt' do nastupnoyi iteratsiyi"),
    },

    sentences: {
      __function: DocStr("Funktsiya", "oholoshennya novoyi funktsiyi"),
      __if: DocStr("Yakshcho", "umovnyy operator"),
      __else: DocStr("Inakshe", "blok yakshcho umova ne vykonana"),
      __while: DocStr("Poky", "tsykl yakyy tryvaye poky umova istynna"),
      __for: DocStr("Dlya", "tsykl iz fiksirovanoyu kil'kistyu povtoren'"),
      __switch: DocStr(
        "Perekluchaty",
        "struktura vyboru z bahat'okh variantiv",
      ),
      __case: DocStr("Vypadok", "okremyy variant u strukturi vyboru"),
      __default: DocStr(
        "Standart",
        "variant yakshcho zhoden inshyy ne pidkhodyt'",
      ),
      __try: DocStr("Sprobuvaty", "blok dlya perevirky pomylok"),
      __catch: DocStr("Spiymaty", "obrobka spiymanoyi pomylky"),
      __finally: DocStr("Vreshti", "blok yakyy vykonuyet'sya zavzhdy"),
      __class: DocStr("Klas", "oholoshennya novoho klasu"),
      __constructor: DocStr("Konstruktor", "funktsiya dlya stvorennya obiekta"),
    },
  },

  errors: {
    __labels: errorLabel(
      "Povidomlennya",
      "Znachennya",
      "Zminna",
      "Vlastyvist",
      "Obiekt",
      "Ochikuvane",
      "Otrymane",
      "PryznachennyaKonstanty",
      "PovtorenyyParametr",
      "Porada",
      "NekorektnyySymvol",
      "PerepovnennyaSteku",
      "Symvol",
      "NeochikuvanyyKinetsVvodu",
    ),
    main: errorMessage("POMYLKA", "Zahalna pomylka systemy"),
    __TypeError: errorMessage("PomylkaTypu", "Neprypustymyy typ v operatsiyi"),
    __InitError: errorMessage(
      "PomylkaInitsializatsiyi",
      "Zminna ne bula initsializovana",
    ),
    __ReferenceError: errorMessage(
      "PomylkaPosylannya",
      "Zminna ne isnuye v oblasti vydymosti",
    ),
    __SyntaxError: errorMessage("PomylkaSyntaksysu", "Neprypustymyy kod"),
    __RangeError: errorMessage(
      "PomylkaDiapazonu",
      "Znachennya poza dopustymym diapazonom",
    ),
    __URIError: errorMessage("PomylkaUri", "Nepravylynyy abo nevalidnyy URI"),
    __EvalError: errorMessage("PomylkaEval", "Pomylka povyazana z eval"),
    __UNKNOWN_ERROR: errorMessage(
      "NevidomaPomylka",
      "Povnistyu nevidoma pomylka",
    ),
  },

  example: {
    __array: [
      "spysok_pitts",
      "mista",
      "spysok_chysel",
      "chysla",
      "kolory",
      "produkty",
      "korystuvachi",
      "viddily",
      "baly",
      "movy",
    ],
    __boolean: [
      "stan",
      "pratsyuye",
      "dostup_nadano",
      "hotovyy",
      "pidtverdzheno",
      "zakryto",
      "tryvaye",
      "zaversheno",
      "perevireno",
      "skasovano",
    ],
    __function: [
      "otyatyImya",
      "obchyslytyZnachennya",
      "pokazatyDani",
      "onovytyProfil",
      "formatuvatyTekst",
      "analiuvatyKod",
      "perevirytyDani",
      "zberehtyDokument",
      "vidslatyPovidomlennya",
      "dodatyVse",
    ],
    __number: [
      "vik",
      "rik_narodzhennya",
      "serednye",
      "suma",
      "tsina",
      "indeks",
      "chas",
      "kilkist",
      "baly",
      "hodyna",
    ],
    __object: [
      "lyudyna",
      "kliyent",
      "nalashtuvannya",
      "vidpovid",
      "oplata",
      "konfihuratsiya",
      "profil",
      "adresa",
      "metadani",
      "sesiya",
    ],
    __string: [
      "imya",
      "adresa",
      "opys",
      "poshta",
      "parol",
      "povidomlennya",
      "nomer",
      "klyuch",
      "url",
      "posylannya",
    ],
    __void: [
      "ydy",
      "vydaly",
      "stiy",
      "ochysty",
      "znyshch",
      "vyydy",
      "ochystyBufer",
      "zberehtyVse",
      "vidshly",
      "uviydy",
    ],
  },
}).grammar();
