import { Language } from "../grammar.class.js";

export const azerbaycan = new Language({
  language: "azerbaycan",
  about:
    "ENIDE istenilen dilde proqramlasmaga imkan veren tercume edile bilen transpaylerdir",
  include: {
    main: "Daxil_etmek",
    __description:
      "Dilləri və ya kitabxanaları daxil etmək üçün istifadə olunur",
  },
  commands: {
    all: {
      __about: {
        main: "haqqinda",
        __description: "ENIDE haqqinda melumat almaq ucun",
      },
      __help: {
        main: "komek",
        __description: "movcud emrlerin siyahisini almaq ucun",
      },
      __version: {
        main: "versiya",
        __description: "ENIDE-nin cari versiyasini almaq ucun",
      },
      __languages: {
        main: "diller",
        __description: "movcud dillerin siyahisini almaq ucun",
      },
      __documentation: {
        main: "sened",
        __description: "dil ucun senedleri almaq ucun",
      },
    },
  },
  library: {
    __math: {
      main: {
        main: "riyaziyyat",
        __description: "riyazi funksiyalara daxil olmaq ucun",
      },
      __pi: { main: "PI", __description: "pi qiymetini almaq ucun" },
      __sqrt: { main: "Kokalti", __description: "kvadrat koku almaq ucun" },
      __pow: { main: "Quvvet", __description: "ededin quvvetini almaq ucun" },
      __round: {
        main: "Yuvarlaq",
        __description: "ededi yuvarlaqlasdirmaq ucun",
      },
      __random: { main: "Tesadufi", __description: "tesadufi eded almaq ucun" },
      __max: { main: "Maksimum", __description: "maksimum qiymeti almaq ucun" },
      __min: { main: "Minimum", __description: "minimum qiymeti almaq ucun" },
      __isNumber: {
        main: "Ededdir",
        __description: "qiymetin eded olub-olmadigini yoxlamaq ucun",
      },
      __isInteger: {
        main: "Tamdir",
        __description: "qiymetin tam eded olub-olmadigini yoxlamaq ucun",
      },
      __isFloat: {
        main: "Kesrdir",
        __description: "qiymetin kesr eded olub-olmadigini yoxlamaq ucun",
      },
    },
    __string: {
      main: {
        main: "metn",
        __description: "metn funksiyalarina daxil olmaq ucun",
      },
      __length: {
        main: "Uzunluq",
        __description: "metnin uzunlugunu almaq ucun",
      },
      __toUpperCase: {
        main: "BoyukHerf",
        __description: "metni boyuk herflere cevirmek ucun",
      },
      __toLowerCase: {
        main: "KicikHerf",
        __description: "metni kicik herflere cevirmek ucun",
      },
    },
    __date: {
      main: {
        main: "tarix",
        __description: "tarix ve vaxt funksiyalarina daxil olmaq ucun",
      },
      __year: { main: "Il", __description: "ili almaq ucun" },
      __month: { main: "Ay", __description: "ayi almaq ucun" },
      __dayMonth: { main: "AyinGunu", __description: "ayin gununu almaq ucun" },
      __dayWeek: {
        main: "HefteninGunu",
        __description: "heftenin gununu almaq ucun",
      },
      __hour: { main: "Saat", __description: "saati almaq ucun" },
      __minute: { main: "Deqiqe", __description: "deqiqeni almaq ucun" },
      __second: { main: "Saniye", __description: "saniyeni almaq ucun" },
    },
  },
  types: {
    __object: { main: "obekt", __description: "statik obekt elan etmek ucun" },
    __number: {
      main: "eded",
      __description: "eded tipli deyisen elan etmek ucun",
    },
    __string: {
      main: "metn",
      __description: "metn tipli deyisen elan etmek ucun",
    },
    __boolean: {
      main: "mentiqi",
      values: {
        __true: "Dogru",
        __false: "Sehv",
      },
      __description: "mentiqi tipli deyisen elan etmek ucun",
    },
  },
  methods: {
    method: {
      __print: {
        main: "cap_et",
        __description: "qiymeti ekrana cixarmaq ucun",
      },
      __scan: {
        main: "oxu",
        __description: "qiymeti daxil etmeden oxumaq ucun",
      },
      __return: {
        main: "qaytar",
        __description: "funksiyadan qiymeti qaytarmaq ucun",
      },
    },
    sentences: {
      __function: {
        main: "funksiya",
        __description: "funksiya elan etmek ucun",
      },
      __if: { main: "eger", __description: "sert elan etmek ucun" },
      __else: {
        main: "eks_halda",
        __description: "alternativ sert elan etmek ucun",
      },
      __while: { main: "helenki", __description: "dovr elan etmek ucun" },
      __for: { main: "ucun", __description: "ucun dovru elan etmek ucun" },
      __switch: {
        main: "secim",
        __description: "secim strukturu elan etmek ucun",
      },
      __case: {
        main: "hal",
        __description: "secim strukturunda hal elan etmek ucun",
      },
      __default: {
        main: "susmaya_gore",
        __description: "susmaya gore hal elan etmek ucun",
      },
      __try: {
        main: "cehd_et",
        __description: "cehd_et bloku elan etmek ucun",
      },
      __catch: {
        main: "tut",
        __description: "xeta idaresi bloku elan etmek ucun",
      },
      __finally: {
        main: "nehayet",
        __description: "her bir halda icra edilen blok",
      },
    },
  },
  errors: {
    main: { tag: "XETA", message: "Umumi sistem xetasi" },
    __UNKNOWN_ERROR: { tag: "NAMELUM_XETA", message: "Tamamile namelum xeta" },
    __TypeError: { tag: "TIP_XETASI", message: "Emeliyyatda yanlis tip" },
    __ReferenceError: {
      tag: "ISTINAD_XETASI",
      message: "Deyisen movcud deyil",
    },
    __SyntaxError: { tag: "SINTAKSIS_XETASI", message: "Yanlis kod" },
    __RangeError: {
      tag: "DIAPAZON_XETASI",
      message: "Qiymet icaze verilen diapazondan kenardir",
    },
    __URIError: { tag: "URI_XETASI", message: "Sehv ve ya yanlis URI" },
    __EvalError: { tag: "EVAL_XETASI", message: "Eval ile elaqeli xeta" },
  },
}).grammar();
