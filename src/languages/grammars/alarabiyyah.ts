import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const alarabiyyah = new Language({
  language: "alarabiyyah",
  about:
    "ENIDE huwa mutarjim fawri qabil lil-tarjamah yasmah bil-barmajah bi-ayyi lughah",

  include: DocStr(
    "Tadmin",
    "yushtakhdamu li-tadmini lughatin aw maktabat aw hayakil bayanat min malaf akhar",
  ),

  commands: {
    __about: DocStr("hawla", "lil-husul ala malumat hawla ENIDE"),
    __help: DocStr(
      "musaadah",
      "lil-husul ala qaimat jami al-awamir al-mutahah",
    ),
    __version: DocStr("isdar", "lil-husul ala isdar ENIDE al-hali"),
    __languages: DocStr(
      "lughat",
      "lil-husul ala qaimat jami al-lughat al-mutahah",
    ),
    __documentation: DocStr("tawthiq", "lil-husul ala tawthiq al-lughah"),
    __grammar: DocStr("qawaid_al_lughah", "lil-husul ala qawaid al-lughah"),
  },

  library: {
    __standard: {
      main: DocStr("maiyar", "lil-wusul ila asalib al-maiyar al-mufiydah"),
      __isarray: DocStr(
        "HalHiyaMasfoufah",
        "lil-tahaqquq mimma idha kanat al-qimah masfoufah",
      ),
      __isobject: DocStr(
        "HalHuwaKayin",
        "lil-tahaqquq mimma idha kanat al-qimah kayinan",
      ),
      __typeof: DocStr("Naw", "lil-husul ala naw al-qimah"),
      __parse: DocStr(
        "Tahlil",
        "li-tahlil qimah min al-nass ila qimatiha al-sahihah",
      ),
    },

    __math: {
      main: DocStr("riyadiyyat", "lil-wusul ila al-dawal al-riyadiyyah"),
      __pi: DocStr("PI", "lil-husul ala qimat pi"),
      __sqrt: DocStr("Jidhr", "lil-husul ala al-jidhr al-tarbii"),
      __pow: DocStr("Quwwah", "li-raf al-adaad ila quwwah"),
      __round: DocStr("Taqrib", "li-taqrib al-adaad"),
      __random: DocStr("Ashwai", "lil-husul ala adad ashwai"),
      __max: DocStr("Aqsa", "lil-husul ala ala qimah"),
      __min: DocStr("Adna", "lil-husul ala aqall qimah"),
      __isNumber: DocStr(
        "HalHuwaAdad",
        "lil-tahaqquq mimma idha kanat al-qimah adadan",
      ),
      __isInteger: DocStr(
        "HalHuwaSahih",
        "lil-tahaqquq mimma idha kanat al-qimah adadan sahihan",
      ),
      __isFloat: DocStr(
        "HalHuwaAshri",
        "lil-tahaqquq mimma idha kanat al-qimah adadan ashriyan",
      ),
      __cos: DocStr("Cos", "lil-husul ala jayb al-tamam li-zawiyah bil-radyan"),
      __sin: DocStr("Sin", "lil-husul ala jayb al-zawiyah bil-radyan"),
      __tan: DocStr("Tan", "lil-husul ala al-dhil lil-zawiyah bil-radyan"),
    },

    __string: {
      main: DocStr("nass", "lil-wusul ila dawal muajalat al-nusus"),
      __length: DocStr("Tul", "lil-husul ala tul al-nass"),
      __toUpperCase: DocStr(
        "HurufKabirah",
        "li-tahwil al-nass ila huruf kabirah",
      ),
      __toLowerCase: DocStr(
        "HurufSaghirah",
        "li-tahwil al-nass ila huruf saghirah",
      ),
      __include: DocStr(
        "Yatadamman",
        "lil-tahaqquq mimma idha kana al-nass yahtawi ala nass far",
      ),
      __repeat: DocStr("Tikrar", "li-tikrar al-nass adadan min al-marrat"),
    },

    __date: {
      main: DocStr("tarikh", "lil-wusul ila dawal al-tarikh wal-waqt"),
      __now: DocStr("Alan", "lil-husul ala al-tarikh wal-waqt al-hali"),
      __year: DocStr("Sanah", "lil-husul ala al-sanah"),
      __month: DocStr("Shahr", "lil-husul ala al-shahr"),
      __dayMonth: DocStr("YawmAlShahr", "lil-husul ala yawm al-shahr"),
      __dayWeek: DocStr("YawmAlUsbua", "lil-husul ala yawm al-usbua"),
      __hour: DocStr("Saah", "lil-husul ala al-saah"),
      __minute: DocStr("Daqiqah", "lil-husul ala al-daqiqah"),
      __second: DocStr("Thaniyah", "lil-husul ala al-thaniyah"),
    },
  },

  types: {
    __number: DocStr("adad", "li-taarif mutaghayyir min naw adad"),
    __string: DocStr("nass", "li-taarif mutaghayyir min naw nass"),
    __boolean: DocStr("mantiqi", "li-taarif mutaghayyir min naw mantiqi"),
    __object: DocStr("kayin", "li-iilan kayin thabit"),
    __void: DocStr("farigh", "li-taarif dallah la turji qimah"),
    __array: DocStr("masfoufah", "li-taarif haykal masfoufah"),
  },

  specialValues: {
    __true: DocStr("Sahih", "qimah mantiqiyyah sahihah"),
    __false: DocStr("Batil", "qimah mantiqiyyah batilah"),
    __null: DocStr("Adum", "giyab al-qimah"),
  },

  words: {
    __new: DocStr("Insha", "li-insha naskhah jadidah min sinf"),
    __this: DocStr("hadha", "lil-wusul ila khasaiss al-sinf al-khass"),
    __extends: DocStr("Yarith", "li-iilan ann sinf yarith min sinf akhar"),
  },

  accessModifiers: {
    __private: DocStr(
      "khass",
      "la yumkin al-wusul ilayhi illa min dakhil al-sinf",
    ),
    __public: DocStr("amm", "yumkin al-wusul ilayhi min ayy makan"),
    __protected: DocStr(
      "mahmiy",
      "yumkin al-wusul ilayhi min al-sinf wa-al-asnaf al-fariyah",
    ),
    __readonly: DocStr(
      "qiraah_faqat",
      "la yumkin tahsis al-qimah illa marra wahidah",
    ),
    __static: DocStr("istati", "yantami lil-sinf nafsihi la lil-nasakhat"),
  },

  methods: {
    method: {
      __print: DocStr("itba", "li-ard al-qimah ala al-shashah"),
      __scan: DocStr("imsah", "li-qiraat qimah min al-mudkhalat"),
      __return: DocStr("arjia", "li-irjaa qimah min ad-dallah"),
      __break: DocStr("qatia", "lil-khuruj min al-halqah"),
      __continue: DocStr(
        "istimrar",
        "lil-intiqal ila al-tikrar al-tali fil-halqah",
      ),
    },

    sentences: {
      __function: DocStr("dallah", "li-taarif dallah"),
      __if: DocStr("idha", "li-taarif shart"),
      __else: DocStr("wa_illa", "li-taarif shart badil"),
      __while: DocStr("talama", "li-taarif halqat talama"),
      __for: DocStr("li_kulli", "li-taarif halqat li-kulli"),
      __switch: DocStr("tabdil", "li-taarif hikal al-ikhtiyar"),
      __case: DocStr("halah", "li-taarif halah fi hikal al-ikhtiyar"),
      __default: DocStr(
        "iftiradi",
        "li-taarif al-halah al-iftiradiyyah fi hikal al-ikhtiyar",
      ),
      __try: DocStr("hawil", "li-taarif kutlat al-muhawalah"),
      __catch: DocStr("imsik", "li-taarif kutlat mualajat al-khata"),
      __finally: DocStr(
        "fi_al_nihayah",
        "li-taarif kutlatun tatanfadhun daiman",
      ),
      __class: DocStr("sinf", "li-taarif sinf"),
      __constructor: DocStr(
        "munshy",
        "haykal yasmah bi-iilan al-khasaiss fi al-sinf",
      ),
    },
  },

  errors: {
    __labels: errorLabel(
      "Risalah",
      "Qimah",
      "Mutaghayyir",
      "Khassiyyah",
      "Kayin",
      "Mutawaqqa",
      "Mustalam",
      "Tahsis_Thabit",
      "Miyas_Mukrar",
      "Imaah",
      "Ramz_Ghayr_Salih",
      "Fayadh_Al_Mujamma",
      "Ramz",
      "Nihayah_Ghayr_Mutawaqqa",
    ),
    main: errorMessage("KHATA", "khata nizam amm"),
    __TypeError: errorMessage(
      "KHATA_AL_NAW",
      "naw ghayr salih fi al-amaliyyah",
    ),
    __InitError: errorMessage("KHATA_AL_IBTIDAR", "al-mutaghayyir lam yubadar"),
    __ReferenceError: errorMessage(
      "KHATA_AL_MARJIA",
      "al-mutaghayyir aw al-dallah aw al-maktabah ghayr mawjud fi al-nitaq",
    ),
    __SyntaxError: errorMessage("KHATA_AL_QAWAID", "kud ghayr salih"),
    __RangeError: errorMessage(
      "KHATA_AL_MADA",
      "al-qimah kharij al-mada al-masmuh bih",
    ),
    __URIError: errorMessage("KHATA_URI", "URI ghayr salih"),
    __EvalError: errorMessage("KHATA_EVAL", "khata mutaalliq bi-eval"),
    __UNKNOWN_ERROR: errorMessage("KHATA_MAJHUL", "khata majhul tamaman"),
  },

  example: {
    __array: [
      "taaam",
      "duwal",
      "asnaaf",
      "wasmat",
      "alwan",
      "muntajat",
      "mustakhdimun",
      "fatayat",
      "nuqat",
      "lughat",
    ],
    __boolean: [
      "halah",
      "huwaBaligh",
      "huwaNashit",
      "huwaZahir",
      "ladihi_Idhn",
      "huwaMusajjal",
      "huwaMufaal",
      "huwaManhi",
      "huwaMothaqqaq",
      "huwaMarfud",
    ],
    __function: [
      "khudhAlIsm",
      "khudhAlQimah",
      "aarijAlNaqr",
      "jalbAlBayanat",
      "nasiqqAlTarikh",
      "hallilAlMudkhal",
      "taqqqAlNamodhaj",
      "ardAlUnsur",
      "haddithAlHalah",
      "ihsabAlMajmuu",
    ],
    __number: [
      "umr",
      "sanah",
      "adad",
      "majmuu",
      "siar",
      "fahras",
      "muddah",
      "kammiyyah",
      "nuqtah",
      "mawqit",
    ],
    __object: [
      "shakhss",
      "mustakhdim",
      "idadat",
      "istijabah",
      "dafah",
      "tafdiylat",
      "malaf_shakhssi",
      "unwan",
      "bayanat_wasifiyyah",
      "jalsah",
    ],
    __string: [
      "ism",
      "unwan",
      "wasf",
      "barid_iliktruny",
      "kalimat_murur",
      "risalah",
      "bitaqah",
      "ramz",
      "url",
      "slug",
    ],
    __void: [
      "dakhul",
      "ibdaa",
      "tanzif",
      "iadat_dabt",
      "tadmir",
      "khuruj",
      "tanzif_almakhzn",
      "hifz_fi_qaaida",
      "irsal_barid",
      "tasjiyl_hadath",
    ],
  },
}).grammar();
