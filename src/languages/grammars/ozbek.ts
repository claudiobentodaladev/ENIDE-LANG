import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const ozbek = new Language({
  language: "ozbek",
  about:
    "ENIDE har qanday tilda dasturlash imkonini beruvchi tarjima qilinadigan transpilerdir",

  include: DocStr(
    "qamrab_olmoq",
    "tillar, kutubxonalar yoki modullarni loyihaga kiritish uchun ishlatiladi",
  ),

  commands: {
    __about: DocStr("haqida", "ENIDE haqida ma'lumot olish"),
    __help: DocStr("yordam", "barcha mavjud buyruqlar ro'yxatini ko'rish"),
    __version: DocStr(
      "versiya",
      "ENIDE loyihasining joriy versiyasini ko'rish",
    ),
    __languages: DocStr("tillar", "tizimdagi barcha mavjud tillar ro'yxati"),
    __documentation: DocStr(
      "hujjat",
      "tanlangan til uchun hujjatlarni ko'rish",
    ),
    __grammar: DocStr("gramatika", "tilning sintaksis qoidalarini ko'rish"),
  },

  library: {
    __standard: {
      main: DocStr("standart", "tizimning asosiy funksiyalariga kirish"),
      __isarray: DocStr(
        "lista_mi",
        "qiymat ro'yxat (array) ekanligini tekshiradi",
      ),
      __isobject: DocStr("obyekt_mi", "qiymat obyekt ekanligini tekshiradi"),
      __typeof: DocStr("turi", "o'zgaruvchining ma'lumot turini qaytaradi"),
      __parse: DocStr("tahlil", "satrni tegishli ma'lumot turiga o'tkazadi"),
    },
    __math: {
      main: DocStr("matematika", "matematik hisob-kitob funksiyalari"),
      __pi: DocStr("PI", "Pi sonining qiymati"),
      __sqrt: DocStr("kvadrat_ildiz", "sonning kvadrat ildizini hisoblaydi"),
      __pow: DocStr("daraja", "sonni ko'rsatilgan darajaga ko'taradi"),
      __round: DocStr(
        "yaxlitlash",
        "sonni eng yaqin butun songacha yaxlitlaydi",
      ),
      __random: DocStr("tasodifiy", "tasodifiy son yaratadi"),
      __max: DocStr("maksimum", "ro'yxatdagi eng katta qiymatni topadi"),
      __min: DocStr("minimum", "ro'yxatdagi eng kichik qiymatni topadi"),
      __isNumber: DocStr("son_mi", "qiymat son ekanligini tekshiradi"),
      __isInteger: DocStr("butun_mi", "qiymat butun son ekanligini tekshiradi"),
      __isFloat: DocStr("onlik_mi", "qiymat o'nlik son ekanligini tekshiradi"),
      __cos: DocStr("kos", "kosinusni hisoblaydi"),
      __sin: DocStr("sin", "sinusni hisoblaydi"),
      __tan: DocStr("tan", "tangensni hisoblaydi"),
    },

    __string: {
      main: DocStr("satr", "matnli ma'lumotlar bilan ishlash funksiyalari"),
      __length: DocStr("uzunlik", "satrning belgilar sonini qaytaradi"),
      __toUpperCase: DocStr(
        "katta_harf",
        "matnni hamma harflarini katta qiladi",
      ),
      __toLowerCase: DocStr(
        "kichik_harf",
        "matnni hamma harflarini kichik qiladi",
      ),
      __include: DocStr(
        "ichida_bormi",
        "satr ichida qidirilayotgan matn borligini tekshiradi",
      ),
      __repeat: DocStr("takrorlash", "satrni berilgan miqdorda takrorlaydi"),
    },

    __date: {
      main: DocStr("sana", "vaqt va sana bilan ishlash funksiyalari"),
      __now: DocStr("hozir", "joriy vaqt va sanani qaytaradi"),
      __year: DocStr("yil", "joriy yilni qaytaradi"),
      __month: DocStr("oy", "joriy oyni qaytaradi"),
      __dayMonth: DocStr("oy_kuni", "oyning kunini qaytaradi"),
      __dayWeek: DocStr("hafta_kuni", "hafta kunini qaytaradi"), // Fixed: Changed from [] to DocStr
      __hour: DocStr("soat", "soatni qaytaradi"),
      __minute: DocStr("daqiqa", "daqiqani qaytaradi"),
      __second: DocStr("soniya", "soniyani qaytaradi"),
    },
  },

  types: {
    __number: DocStr("son", "raqamli ma'lumot turi"),
    __string: DocStr("satr", "matnli ma'lumot turi"),
    __boolean: DocStr("mantiq", "mantiqiy ma'lumot turi (to'g'ri/noto'g'ri)"),
    __object: DocStr("obyekt", "obyekt strukturasi ma'lumot turi"),
    __void: DocStr("bosh", "funksiya hech narsa qaytarmasligini bildiradi"),
    __array: DocStr("lista", "ro'yxat ma'lumot turi"),
  },

  specialValues: {
    __true: DocStr("togri", "mantiqiy rost qiymat"),
    __false: DocStr("notogri", "mantiqiy yolg'on qiymat"),
    __null: DocStr("nol", "qiymat mavjud emasligi"),
  },

  words: {
    __new: DocStr("yangi", "klassning yangi nusxasini yaratish"),
    __this: DocStr("bu", "joriy nusxaga havola"),
    __extends: DocStr("voris", "klassning boshqa klassdan meros olishi"),
  },

  accessModifiers: {
    __private: DocStr("shaxsiy", "faqat klass ichida foydalanish mumkin"),
    __public: DocStr("umumiy", "hamma joydan foydalanish mumkin"),
    __protected: DocStr("himoyalangan", "klass va uning vorislari uchun"),
    __readonly: DocStr("faqat_oqish", "qiymatni o'zgartirib bo'lmaydi"),
    __static: DocStr(
      "statik",
      "klassning o'ziga tegishli metod yoki xususiyat",
    ),
  },

  methods: {
    method: {
      __print: DocStr("chop_et", "qiymatni ekranga chiqarish"),
      __scan: DocStr("oqish", "foydalanuvchidan ma'lumot qabul qilish"),
      __return: DocStr("qaytarish", "funksiyadan natijani qaytarish"),
      __break: DocStr("toxtatish", "siklni darhol to'xtatish"),
      __continue: DocStr("davom_etish", "siklni keyingi bosqichiga o'tish"),
    },

    sentences: {
      __function: DocStr("funksiya", "yangi funksiya e'lon qilish"),
      __if: DocStr("agar", "shartli operatorning boshlanishi"),
      __else: DocStr("aks_holda", "shart bajarilmaganda ishlaydigan blok"),
      __while: DocStr("toki", "shartga asoslangan takrorlanish"),
      __for: DocStr("uchun", "sanoqqa asoslangan takrorlanish"),
      __switch: DocStr("tanlash", "ko'p variantli tanlov strukturasi"),
      __case: DocStr("holat", "tanlov strukturasidagi aniq holat"),
      __default: DocStr(
        "standart",
        "hech bir holat mos kelmaganda ishlaydigan blok",
      ),
      __try: DocStr("urinish", "xato yuz berishi mumkin bo'lgan kod bloki"),
      __catch: DocStr("tutish", "yuz bergan xatoni ushlash"),
      __finally: DocStr(
        "nihoyat",
        "xato bo'lishidan qat'iy nazar ishlovchi blok",
      ),
      __class: DocStr("klass", "yangi klass yaratish"),
      __constructor: DocStr(
        "konstruktor",
        "klass obyekti yaratilganda ishlovchi metod",
      ),
    },
  },

  errors: {
    __labels: errorLabel(
      "Xabar",
      "Qiymat",
      "Ozgaruvchi",
      "Xususiyat",
      "Obyekt",
      "Kutilgan",
      "Olingan",
      "Konstantaga_tayinlash",
      "Takroriy_parametr",
      "Yordam",
      "Notogri_token",
      "Stek_tolib_ketdi",
      "Token",
      "Kutilmagan_yakun",
    ),
    main: errorMessage("XATO", "umumiy tizim xatosi"),
    __TypeError: errorMessage(
      "TUR_XATOSI",
      "operatsiyada ma'lumot turi noto'g'ri",
    ),
    __InitError: errorMessage(
      "INIZIALIZATSIYA_XATOSI",
      "o'zgaruvchi qiymati belgilanmagan",
    ),
    __ReferenceError: errorMessage("HAVOLA_XATOSI", "o'zgaruvchi topilmadi"),
    __SyntaxError: errorMessage(
      "SINTAKSIS_XATOSI",
      "kod yozilishida xatolik bor",
    ),
    __RangeError: errorMessage(
      "ORALIK_XATOSI",
      "qiymat ruxsat etilgan chegaradan tashqarida",
    ),
    __URIError: errorMessage("URI_XATOSI", "URI noto'g'ri shakllangan"),
    __EvalError: errorMessage(
      "EVAL_XATOSI",
      "eval funksiyasi bilan bog'liq xato",
    ),
    __UNKNOWN_ERROR: errorMessage(
      "NAMALUM_XATO",
      "aniqlanmagan xatolik yuz berdi",
    ),
  },

  example: {
    __array: [
      "mevalar",
      "davlatlar",
      "ism_listasi",
      "raqamlar",
      "ranglar",
      "mahsulotlar",
      "foydalanuvchilar",
      "kategoriyalar",
      "ballar",
      "tillar",
    ],
    __boolean: [
      "holat",
      "faol_mi",
      "ishlatsa_boladi",
      "tayyor_mi",
      "ruxsat_berilgan",
      "ulangan",
      "bajarilmoqda",
      "tugadi",
      "tasdiqlandi",
      "ochirilgan",
    ],
    __function: [
      "ismniOl",
      "qiymatniHisobla",
      "malumotniKorsat",
      "profilniYangila",
      "matnniFormatla",
      "kodniTahlilQil",
      "kirishniTekshir",
      "faylniSaqla",
      "xabarYubor",
      "hammasiniQosh",
    ],
    __number: [
      "yosh",
      "tugilgan_yil",
      "ortacha",
      "jami",
      "narx",
      "indeks",
      "vaqt",
      "miqdor",
      "natija",
      "soat",
    ],
    __object: [
      "shaxs",
      "mijoz",
      "konfiguratsiya",
      "javob",
      "tolov",
      "sozlamalar",
      "profil",
      "manzil",
      "metada",
      "sessiya",
    ],
    __string: [
      "ism",
      "sarlavha",
      "tavsif",
      "email",
      "parol",
      "xabar",
      "teg",
      "kalit",
      "url",
      "havola",
    ],
    __void: [
      "boshlash",
      "ochirish",
      "toxtatish",
      "tozalash",
      "yoq_qilish",
      "chiqish",
      "keshni_tozalash",
      "saqlash",
      "yuborish",
      "kirish",
    ],
  },
}).grammar();
