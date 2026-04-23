import { Language } from "../grammar.class.js";

export const ozbek = new Language({
  language: "ozbek",
  about:
    "ENIDE har qanday tilda dasturlash imkonini beruvchi tarjima qilinadigan transpilerdir",
  include: {
    main: "QamrabOlmoq",
    __description: "Til yoki kutubxonalarni kiritish uchun ishlatiladi",
  },
  commands: {
    all: {
      __about: {
        main: "haqida",
        __description: "ENIDE haqida malumot olish uchun",
      },
      __help: {
        main: "yordam",
        __description: "barcha mavjud buyruqlar royxatini olish uchun",
      },
      __version: {
        main: "versiya",
        __description: "ENIDE ning joriy versiyasini olish uchun",
      },
      __languages: {
        main: "tillar",
        __description: "barcha mavjud tillar royxatini olish uchun",
      },
      __documentation: {
        main: "hujjat",
        __description: "til uchun hujjatlarni olish uchun",
      },
    },
  },
  library: {
    __math: {
      main: {
        main: "matematika",
        __description: "matematik funksiyalardan foydalanish uchun",
      },
      __pi: { main: "PI", __description: "pi qiymatini olish uchun" },
      __sqrt: {
        main: "KvadratIldiz",
        __description: "kvadrat ildizni olish uchun",
      },
      __pow: {
        main: "Daraja",
        __description: "sonning darajasini hisoblash uchun",
      },
      __round: {
        main: "Yaxlitlash",
        __description: "sonni yaxlitlash uchun",
      },
      __random: {
        main: "Tasodifiy",
        __description: "tasodifiy son olish uchun",
      },
      __max: {
        main: "Maksimum",
        __description: "maksimal qiymatni olish uchun",
      },
      __min: {
        main: "Minimum",
        __description: "minimal qiymatni olish uchun",
      },
      __isNumber: {
        main: "Sonmi",
        __description: "qiymat son ekanligini tekshirish uchun",
      },
      __isInteger: {
        main: "Butunmi",
        __description: "qiymat butun son ekanligini tekshirish uchun",
      },
      __isFloat: {
        main: "Onlikmi",
        __description: "qiymat onlik son ekanligini tekshirish uchun",
      },
    },
    __string: {
      main: {
        main: "satr",
        __description: "satr funksiyalari bilan ishlash uchun",
      },
      __length: {
        main: "Uzunlik",
        __description: "satr uzunligini olish uchun",
      },
      __toUpperCase: {
        main: "KattaHarf",
        __description: "satrni katta harflarga otkazish",
      },
      __toLowerCase: {
        main: "KichikHarf",
        __description: "satrni kichik harflarga otkazish",
      },
    },
    __date: {
      main: {
        main: "sana",
        __description: "vaqt va sana funksiyalari bilan ishlash uchun",
      },
      __year: { main: "Yil", __description: "yilni olish uchun" },
      __month: { main: "Oy", __description: "oyni olish uchun" },
      __dayMonth: {
        main: "Kun",
        __description: "oyning kunini olish uchun",
      },
      __dayWeek: {
        main: "HaftaKuni",
        __description: "hafta kunini olish uchun",
      },
      __hour: { main: "Soat", __description: "soatni olish uchun" },
      __minute: { main: "Daqiqa", __description: "daqiqani olish uchun" },
      __second: { main: "Soniya", __description: "soniyani olish uchun" },
    },
  },
  types: {
    __object: {
      main: "obyekt",
      __description: "statik obyekt elon qilish uchun",
    },
    __number: {
      main: "son",
      __description: "son turidagi ozgaruvchini elon qilish",
    },
    __string: {
      main: "satr",
      __description: "satr turidagi ozgaruvchini elon qilish",
    },
    __boolean: {
      main: "mantiq",
      values: { __true: "Togri", __false: "Notogri" },
      __description: "mantiqiy turdagi ozgaruvchini elon qilish",
    },
  },
  methods: {
    method: {
      __print: {
        main: "chopEt",
        __description: "qiymatni ekranga chiqarish",
      },
      __scan: {
        main: "oqish",
        __description: "kiruvchi qiymatni oqish",
      },
      __return: {
        main: "qaytarish",
        __description: "funksiyadan qiymatni qaytarish",
      },
    },
    sentences: {
      __function: {
        main: "funksiya",
        __description: "funksiyani elon qilish",
      },
      __if: {
        main: "agar",
        __description: "shartni elon qilish",
      },
      __else: {
        main: "aksHolda",
        __description: "muqobil shartni elon qilish",
      },
      __while: {
        main: "toki",
        __description: "toki siklini elon qilish",
      },
      __for: {
        main: "uchun",
        __description: "uchun siklini elon qilish",
      },
      __switch: {
        main: "tanlash",
        __description: "tanlash strukturasi",
      },
      __case: {
        main: "holat",
        __description: "tanlash strukturasi holati",
      },
      __default: {
        main: "standart",
        __description: "standart holat",
      },
      __try: {
        main: "urinish",
        __description: "urinish blokini elon qilish",
      },
      __catch: {
        main: "tutish",
        __description: "xatolarni tutish bloki",
      },
      __finally: {
        main: "nihoyat",
        __description: "har doim bajariladigan blok",
      },
    },
  },
  errors: {
    main: { tag: "XATO", message: "Umumiy tizim xatosi" },
    __UNKNOWN_ERROR: {
      tag: "NAMALUM_XATO",
      message: "Mutlaqo nomalum xato",
    },
    __TypeError: {
      tag: "TUR_XATOSI",
      message: "Amaliyotda notogri tur",
    },
    __ReferenceError: {
      tag: "HAVOLA_XATOSI",
      message: "Ozgaruvchi mavjud emas",
    },
    __SyntaxError: {
      tag: "SINTAKSIS_XATOSI",
      message: "Notogri kod",
    },
    __RangeError: {
      tag: "ORALIK_XATOSI",
      message: "Qiymat ruxsat etilgan oraliqdan tashqarida",
    },
    __URIError: {
      tag: "URI_XATOSI",
      message: "Notogri URI shakli",
    },
    __EvalError: {
      tag: "EVAL_XATOSI",
      message: "Eval bilan bogliq xato",
    },
  },
}).grammar();
