import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const turkmen = new Language({
  language: "turkmen",
  about:
    "ENIDE islendik dilde programlamaga mumkincilik beryan terjime edilip bilinyan transpiler",

  include: DocStr("Gosmak", "Dil ya-da kitaphanalary gosmak ucin ulanylyar"),

  commands: {
    __about: DocStr("Hakda", "ENIDE hakda maglumat almak ucin"),
    __help: DocStr(
      "Komek",
      "eliyeterli buyruklaryn hemmesinin sanawyny almak ucin",
    ),
    __version: DocStr("Wersiya", "ENIDE-nin hazirki wersiyasyny almak ucin"),
    __languages: DocStr(
      "Diller",
      "eliyeterli dillerin hemmesinin sanawyny almak ucin",
    ),
    __documentation: DocStr("Dok", "dil ucin resminamany almak ucin"),
    __grammar: DocStr("Gramatika", "dilin sintaksis duzgunlerini gorkezyar"),
  },

  library: {
    __standard: {
      main: DocStr("Standard", "esasy ulgam funksiyalaryna giris"),
      __isarray: DocStr(
        "SanawMy",
        "gymmatyn sanaw (array) bolup-bolmandygyny barlayar",
      ),
      __isobject: DocStr(
        "ObektMi",
        "gymmatyn obekt bolup-bolmandygyny barlayar",
      ),
      __typeof: DocStr("Gornusi", "uytgeyjinyn maglumat gornusini gaytaryar"),
      __parse: DocStr("Razclani", "teksti degisli maglumat gornusine owuryar"),
    },
    __math: {
      main: DocStr("Matematika", "matematiki funksiyalar we konstantalar"),
      __pi: DocStr("PI", "Pi konstantasynyn gymmaty"),
      __sqrt: DocStr("KwadratKok", "kwadrat koki almak ucin"),
      __pow: DocStr("Dereje", "sanyn derejesini almak ucin"),
      __round: DocStr("Tegelek", "sany tegelemek ucin"),
      __random: DocStr("Tossun", "tossun san almak ucin"),
      __max: DocStr("InYokary", "in yokary gymmaty almak ucin"),
      __min: DocStr("InPes", "in pes gymmaty almak ucin"),
      __isNumber: DocStr("SanMy", "gymmatyn san bolup-bolmandygyny barlayar"),
      __isInteger: DocStr(
        "TamlaSanMy",
        "gymmatyn tam san bolup-bolmandygyny barlayar",
      ),
      __isFloat: DocStr(
        "OnlukSanMy",
        "gymmatyn onluk san bolup-bolmandygyny barlayar",
      ),
      __cos: DocStr("cos", "kosinusy hasaplayar"),
      __sin: DocStr("sin", "sinusy hasaplayar"),
      __tan: DocStr("tan", "tangensy hasaplayar"),
    },

    __string: {
      main: DocStr("Setir", "setir manipulyasiya funksiyalaryna girmek ucin"),
      __length: DocStr("Uzunluk", "setirin uzunlugyny almak ucin"),
      __toUpperCase: DocStr("UluHarplar", "setiri uly harplara owurmek ucin"),
      __toLowerCase: DocStr("KiciHarplar", "setiri kici harplara owurmek ucin"),
      __include: DocStr(
        "Saklayar",
        "setirin belli bir teksti saklayandygyny barlayar",
      ),
      __repeat: DocStr("Gaytala", "setiri bellenen gezek gaytalayar"),
    },

    __date: {
      main: DocStr("Sene", "sene we wagt funksiyalaryna girmek ucin"),
      __now: DocStr("Hazir", "hazirki seneni we wagty gaytaryar"),
      __year: DocStr("Yyl", "yyly almak ucin"),
      __month: DocStr("Ay", "ayi almak ucin"),
      __dayMonth: DocStr("AyinGuni", "ayin gunini almak ucin"),
      __dayWeek: DocStr("HepdaninGuni", "heptanin gunini almak ucin"),
      __hour: DocStr("Sagat", "sagady almak ucin"),
      __minute: DocStr("Minut", "minudy almak ucin"),
      __second: DocStr("Sekunt", "sekundy almak ucin"),
    },
  },

  types: {
    __number: DocStr("San", "san typli uytgeyjini yglan etmek ucin"),
    __string: DocStr("Setir", "setir typli uytgeyjini yglan etmek ucin"),
    __boolean: DocStr("Bool", "bool typli uytgeyjini yglan etmek ucin"),
    __object: DocStr("Obekt", "statik obekt yglan etmek ucin"),
    __void: DocStr(
      "Bos",
      "funksiyanyn hic hili gymmat gaytarmayandygyny anlatyar",
    ),
    __array: DocStr("Sanaw", "elementlerin sanawynyn beyany"),
  },

  specialValues: {
    __true: DocStr("Dogru", "logiki dogry gymmaty"),
    __false: DocStr("Yalan", "logiki yalan gymmaty"),
    __null: DocStr("Hic", "gymmatyn yokdugyny anlatyar"),
  },

  words: {
    __new: DocStr("Taze", "klasyn taze nusgasyny doredyar"),
    __this: DocStr("Bu", "hazirki obekti anlatyar"),
    __extends: DocStr("Dowamy", "klasyn nesil doredijiligini anlatyar"),
  },

  accessModifiers: {
    __private: DocStr("Sehsye", "dine klasyn icinden eliyeterli"),
    __public: DocStr("Acyk", "ahlisinden eliyeterli"),
    __protected: DocStr(
      "Goragly",
      "klasda we ondan doreyen klaslarda eliyeterli",
    ),
    __readonly: DocStr("DineOkamak", "bolung uytgedip bolmayar"),
    __static: DocStr("Statik", "nusga dal-de, klasa degisli"),
  },

  methods: {
    method: {
      __print: DocStr("CapEt", "gymmaty ekrana cap etmek ucin"),
      __scan: DocStr("Oku", "girisden gymmaty okamak ucin"),
      __return: DocStr("Gaytar", "funksiyadan gymmaty gaytarmak ucin"),
      __break: DocStr("Durdur", "hazirki sikli duruzyar"),
      __continue: DocStr("DowamEt", "siklin indiki aylawyna gecyar"),
    },

    sentences: {
      __function: DocStr("Funksiya", "funksiya yglan etmek ucin"),
      __if: DocStr("Eger", "sert yglan etmek ucin"),
      __else: DocStr("Yoksa", "alternatiw sert yglan etmek ucin"),
      __while: DocStr("Taydac", "taydac sikli yglan etmek ucin"),
      __for: DocStr("Ucin", "ucin sikli yglan etmek ucin"),
      __switch: DocStr("Saylaw", "saylaw strukturasyny yglan etmek ucin"),
      __case: DocStr("Hal", "saylaw strukturasynda hal yglan etmek ucin"),
      __default: DocStr(
        "Deslapky",
        "saylaw strukturasynda deslapky haly yglan etmek ucin",
      ),
      __try: DocStr("Synan", "synan blogy yglan etmek ucin"),
      __catch: DocStr("Tut", "yalnys dolandyrys blogyny yglan etmek ucin"),
      __finally: DocStr(
        "Ahyrynda",
        "hemise iyerine yetirilyan blogy yglan etmek ucin",
      ),
      __class: DocStr("Klas", "taze klas beyany"),
      __constructor: DocStr("Gurujy", "taze obekt doretmek ucin funksiya"),
    },
  },

  errors: {
    __labels: errorLabel(
      "Habar",
      "Gymmat",
      "Uytgeyji",
      "Hasiyet",
      "Obekt",
      "Garasylly",
      "Alyndy",
      "KonstantaBellemek",
      "GaytalanyanParametr",
      "Maslahat",
      "NadogryNysan",
      "StakDolupDasdy",
      "Nysan",
      "GarasylmadykGirisSony",
    ),
    main: errorMessage("YALNYS", "Umumy ulgam yalnysy"),
    __TypeError: errorMessage("TypYalnys", "Operasiyada nadogry gornus"),
    __InitError: errorMessage(
      "BaslangycYalnys",
      "uytgeyji baslangyc gymmat almady",
    ),
    __ReferenceError: errorMessage("SalgyYalnys", "Uytgeyji kapsulada yok"),
    __SyntaxError: errorMessage("SintaksisYalnys", "Nadogry kod"),
    __RangeError: errorMessage(
      "AralykYalnys",
      "Gymmat rugsat edilyan aralykdan dasynda",
    ),
    __URIError: errorMessage("UriYalnys", "Nadogry duzulen ya-da gecersiz URI"),
    __EvalError: errorMessage("EvalYalnys", "eval bilen baglanysykly yalnys"),
    __UNKNOWN_ERROR: errorMessage("NamalimYalnys", "Doly namalim yalnys"),
  },

  example: {
    __array: [
      "piccalar",
      "saherler",
      "sanlar_sanawy",
      "sanlar",
      "renkler",
      "onumler",
      "ulanyjylar",
      "bolumler",
      "utuklar",
      "diller",
    ],
    __boolean: [
      "yagday",
      "isleyar",
      "rugsat_berildi",
      "tayyar",
      "tassyklanan",
      "baglanan",
      "dowam_edyar",
      "tamamlandy",
      "barlanan",
      "yatay_edildi",
    ],
    __function: [
      "adyAl",
      "gymmatyHasapla",
      "maglumatyGorkez",
      "profiliTazele",
      "tekstiFormatla",
      "kodyDerne",
      "maglumatyBarla",
      "resminamanyYatdaSakla",
      "habarIber",
      "ahlisiniGosa",
    ],
    __number: [
      "yas",
      "doglan_yyly",
      "ortaca",
      "jemi",
      "baha",
      "indeks",
      "wagt",
      "mukdar",
      "utuklar",
      "sagat",
    ],
    __object: [
      "adam",
      "musderi",
      "sazlamalar",
      "jogap",
      "toleg",
      "konfigurasiya",
      "profil",
      "salgy",
      "metamaglumatlar",
      "sessiya",
    ],
    __string: [
      "at",
      "salgy",
      "dusundiris",
      "email",
      "parol",
      "habar",
      "belgi",
      "acar",
      "url",
      "baglanysyk",
    ],
    __void: [
      "git",
      "poz",
      "dur",
      "temizle",
      "yok_et",
      "cyk",
      "buferi_bosat",
      "ahlisini_sakla",
      "iber",
      "gir",
    ],
  },
}).grammar();
