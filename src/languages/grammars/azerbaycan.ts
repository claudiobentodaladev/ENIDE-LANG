import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const azerbaycan = new Language({
  language: "azerbaycan",
  about:
    "ENIDE istenilen dilde proqramlasmaga imkan veren tercume edile bilen transpaylerdir",

  include: DocStr(
    "Daxil_etmek",
    "Dilleri ve ya kitabxanalari daxil etmek ucun istifade olunur",
  ),

  commands: {
    __about: DocStr("haqqinda", "ENIDE haqqinda melumat almaq ucun"),
    __help: DocStr("komek", "movcud emrlerin siyahisini almaq ucun"),
    __version: DocStr("versiya", "ENIDE-nin cari versiyasini almaq ucun"),
    __languages: DocStr("diller", "movcud dillerin siyahisini almaq ucun"),
    __documentation: DocStr("sened", "dil ucun senedleri almaq ucun"),
    __grammar: DocStr("qrammatika", "dil ucun qrammatikani almaq ucun"),
  },

  library: {
    __standard: {
      main: DocStr("standart", "standart yardimci metodlara daxil olmaq ucun"),
      __isarray: DocStr(
        "Massivdir",
        "qiymetin massiv olub-olmadigini yoxlamaq ucun",
      ),
      __isobject: DocStr(
        "Obektdir",
        "qiymetin obekt olub-olmadigini yoxlamaq ucun",
      ),
      __typeof: DocStr("Tip", "qiymetin tipini almaq ucun"),
      __parse: DocStr("Parse", "metni dogru tipli qiymetlere cevirmek ucun"),
    },

    __math: {
      main: DocStr("riyaziyyat", "riyazi funksiyalara daxil olmaq ucun"),
      __pi: DocStr("PI", "pi qiymetini almaq ucun"),
      __sqrt: DocStr("Kokalti", "kvadrat koku almaq ucun"),
      __pow: DocStr("Quvvet", "ededin quvvetini almaq ucun"),
      __round: DocStr("Yuvarlaq", "ededi yuvarlaqlasdirmaq ucun"),
      __random: DocStr("Tesadufi", "tesadufi eded almaq ucun"),
      __max: DocStr("Maksimum", "maksimum qiymeti almaq ucun"),
      __min: DocStr("Minimum", "minimum qiymeti almaq ucun"),
      __isNumber: DocStr(
        "Ededdir",
        "qiymetin eded olub-olmadigini yoxlamaq ucun",
      ),
      __isInteger: DocStr(
        "Tamdir",
        "qiymetin tam eded olub-olmadigini yoxlamaq ucun",
      ),
      __isFloat: DocStr(
        "Kesrdir",
        "qiymetin kesr eded olub-olmadigini yoxlamaq ucun",
      ),
      __cos: DocStr(
        "Cos",
        "radianla ifade olunan bucagin kosinusunu almaq ucun",
      ),
      __sin: DocStr("Sin", "radianla ifade olunan bucagin sinusunu almaq ucun"),
      __tan: DocStr(
        "Tan",
        "radianla ifade olunan bucagin tangensini almaq ucun",
      ),
    },

    __string: {
      main: DocStr("metn", "metn funksiyalarina daxil olmaq ucun"),
      __length: DocStr("Uzunluq", "metnin uzunlugunu almaq ucun"),
      __toUpperCase: DocStr("BoyukHerf", "metni boyuk herflere cevirmek ucun"),
      __toLowerCase: DocStr("KicikHerf", "metni kicik herflere cevirmek ucun"),
      __include: DocStr(
        "Ehtiva",
        "metnin alt-metn icine alib-almadigini yoxlamaq ucun",
      ),
      __repeat: DocStr("Tekrar", "metni mueyyen sayde tekrarlamaq ucun"),
    },

    __date: {
      main: DocStr("tarix", "tarix ve vaxt funksiyalarina daxil olmaq ucun"),
      __now: DocStr("İndi", "cari tarix ve vaxti almaq ucun"),
      __year: DocStr("Il", "ili almaq ucun"),
      __month: DocStr("Ay", "ayi almaq ucun"),
      __dayMonth: DocStr("AyinGunu", "ayin gununu almaq ucun"),
      __dayWeek: DocStr("HefteninGunu", "heftenin gununu almaq ucun"),
      __hour: DocStr("Saat", "saati almaq ucun"),
      __minute: DocStr("Deqiqe", "deqiqeni almaq ucun"),
      __second: DocStr("Saniye", "saniyeni almaq ucun"),
    },
  },

  types: {
    __number: DocStr("eded", "eded tipli deyisen elan etmek ucun"),
    __string: DocStr("metn", "metn tipli deyisen elan etmek ucun"),
    __boolean: DocStr("mentiqi", "mentiqi tipli deyisen elan etmek ucun"),
    __object: DocStr("obekt", "statik obekt elan etmek ucun"),
    __void: DocStr("neticesis", "qiymet qaytarmayan funksiya elan etmek ucun"),
    __array: DocStr("massiv", "massiv data strukturu elan etmek ucun"),
  },

  specialValues: {
    __true: DocStr("Dogru", "mentiqi dogru qiymeti"),
    __false: DocStr("Sehv", "mentiqi sehv qiymeti"),
    __null: DocStr("yoxdur", "qiymetin yoxlugu"),
  },

  words: {
    __new: DocStr("yeni", "sinifin yeni nusxesini yaratmaq ucun"),
    __this: DocStr("ozum", "oz sinifinde atributlara daxil olmaq ucun"),
    __extends: DocStr(
      "miras_alir",
      "sinifin basqa sinifden miras aldigini elan etmek ucun",
    ),
  },

  accessModifiers: {
    __private: DocStr("gizli", "yalniz sinif daxilinde erisile bilen"),
    __public: DocStr("umumi", "herhansi bir yerden erisile bilen"),
    __protected: DocStr("qorumali", "sinif ve alt-siniflerinde erisile bilen"),
    __readonly: DocStr(
      "yalniz_oxu",
      "qiymet yalniz bir defe teyinat oluna biler",
    ),
    __static: DocStr("statik", "nusxeye deyil, sinife aid olan"),
  },

  methods: {
    method: {
      __print: DocStr("cap_et", "qiymeti ekrana cixarmaq ucun"),
      __scan: DocStr("oxu", "giristen qiymeti oxumaq ucun"),
      __return: DocStr("qaytar", "funksiyadan qiymeti qaytarmaq ucun"),
      __break: DocStr("dur", "dovrden cixmaq ucun"),
      __continue: DocStr("davam", "novbeti iterasiyaya kecmek ucun"),
    },

    sentences: {
      __function: DocStr("funksiya", "funksiya elan etmek ucun"),
      __if: DocStr("eger", "sert elan etmek ucun"),
      __else: DocStr("eks_halda", "alternativ sert elan etmek ucun"),
      __while: DocStr("helenki", "helenki dovru elan etmek ucun"),
      __for: DocStr("ucun", "ucun dovru elan etmek ucun"),
      __switch: DocStr("secim", "secim strukturu elan etmek ucun"),
      __case: DocStr("hal", "secim strukturunda hal elan etmek ucun"),
      __default: DocStr("susmaya_gore", "susmaya gore hal elan etmek ucun"),
      __try: DocStr("cehd_et", "cehd_et bloku elan etmek ucun"),
      __catch: DocStr("tut", "xeta idaresi bloku elan etmek ucun"),
      __finally: DocStr(
        "nehayet",
        "her bir halda icra edilen blok elan etmek ucun",
      ),
      __class: DocStr("sinif", "sinif elan etmek ucun"),
      __constructor: DocStr(
        "konstruktor",
        "sinifde atributlari elan etmek ucun quruluş",
      ),
    },
  },

  errors: {
    __labels: errorLabel(
      "Xeber",
      "Qiymet",
      "Deyisen",
      "Xususiyyet",
      "Obekt",
      "Gozlenilen",
      "Alinmis",
      "Sabit_Menimseme",
      "Tekrar_Parametr",
      "Ipucu",
      "Yanlis_Token",
      "Yigin_Dasmasi",
      "Token",
      "Gozlenilmez_Son",
    ),
    main: errorMessage("XETA", "umumi sistem xetasi"),
    __TypeError: errorMessage("TIP_XETASI", "emeliyyatda yanlis tip"),
    __InitError: errorMessage(
      "BASLANQIC_XETASI",
      "deyisen baslanqic deyeri almayib",
    ),
    __ReferenceError: errorMessage(
      "ISTINAD_XETASI",
      "deyisen, funksiya ve ya kitabxana scope-da movcud deyil",
    ),
    __SyntaxError: errorMessage("SINTAKSIS_XETASI", "yanlis kod"),
    __RangeError: errorMessage(
      "DIAPAZON_XETASI",
      "qiymet icaze verilen diapazondan kenardir",
    ),
    __URIError: errorMessage("URI_XETASI", "sehv ve ya yanlis URI"),
    __EvalError: errorMessage("EVAL_XETASI", "eval ile elaqeli xeta"),
    __UNKNOWN_ERROR: errorMessage("NAMELUM_XETA", "tamamile namelum xeta"),
  },

  example: {
    __array: [
      "yemekler",
      "olkeler",
      "esyalar",
      "tags",
      "renkler",
      "mehsullar",
      "istifadeciler",
      "kateqoriyalar",
      "xaller",
      "diller",
    ],
    __boolean: [
      "veziyyet",
      "yetkindir",
      "aktivdir",
      "gorununur",
      "icazesiVar",
      "girisEdib",
      "aktivEdilib",
      "tamamlanib",
      "tesdiqlenmis",
      "silinmis",
    ],
    __function: [
      "adiAl",
      "qiymatiAl",
      "dusmeyeBas",
      "melumatAl",
      "tariхiFormatEt",
      "girisiAyir",
      "formuYoxla",
      "elementiGoster",
      "veziyyetiYenile",
      "cemiHesabla",
    ],
    __number: [
      "yas",
      "il",
      "say",
      "cem",
      "qiymet",
      "indeks",
      "muddet",
      "miqdar",
      "xal",
      "vaxt",
    ],
    __object: [
      "shexs",
      "istifadeci",
      "konfiqur",
      "cavab",
      "odenis",
      "parametrler",
      "profil",
      "unvan",
      "metadata",
      "sessiya",
    ],
    __string: [
      "ad",
      "baslig",
      "acıqlama",
      "email",
      "sifre",
      "mesaj",
      "etiket",
      "token",
      "url",
      "slug",
    ],
    __void: [
      "giris",
      "basla",
      "temizle",
      "sifirla",
      "mhevEt",
      "cix",
      "kesnTemizle",
      "dbdeSaxla",
      "emailGonder",
      "hadiseniQeydEt",
    ],
  },
}).grammar();
