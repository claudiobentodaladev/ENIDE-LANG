import { Language } from "../grammar.class.js";

export const arabiyyah = new Language({
  language: "arabiyyah",
  about: "ENIDE هو مترجم برمجي قابل للترجمة يسمح بالبرمجة بأي لغة",
  include: {
    main: "تضمين",
    __description: "لإدراج اللغة أو المكتبة",
  },
  commands: {
    all: {
      __about: {
        main: "حول",
        __description: "للحصول على معلومات حول ENIDE",
      },
      __help: {
        main: "مساعدة",
        __description: "للحصول على قائمة بجميع الأوامر المتاحة",
      },
      __version: {
        main: "نسخة",
        __description: "للحصول على النسخة الحالية من ENIDE",
      },
      __languages: {
        main: "لغات",
        __description: "للحصول على قائمة بجميع اللغات المتاحة",
      },
      __documentation: {
        main: "توثيق",
        __description: "للحصول على توثيق اللغة",
      },
    },
  },
  library: {
    __math: {
      main: {
        main: "رياضيات",
        __description: "للوصول إلى الدوال الرياضية",
      },
      __pi: {
        main: "باي",
        __description: "للحصول على قيمة ط",
      },
      __sqrt: {
        main: "جذر",
        __description: "للحصول على الجذر التربيعي",
      },
      __pow: {
        main: "قوة",
        __description: "للحصول على قوة عدد",
      },
      __round: {
        main: "تقريب",
        __description: "لتقريب الرقم",
      },
      __random: {
        main: "عشوائي",
        __description: "للحصول على رقم عشوائي",
      },
      __max: {
        main: "اقصى",
        __description: "للحصول على القيمة القصوى",
      },
      __min: {
        main: "ادنى",
        __description: "للحصول على القيمة الدنيا",
      },
      __isNumber: {
        main: "هل_رقم",
        __description: "للتحقق مما إذا كانت القيمة رقما",
      },
      __isInteger: {
        main: "هل_صحيح",
        __description: "للتحقق مما إذا كانت القيمة عددا صحيحا",
      },
      __isFloat: {
        main: "هل_عشري",
        __description: "للتحقق مما إذا كانت القيمة عددا عشريا",
      },
    },
    __string: {
      main: {
        main: "نص",
        __description: "للوصول إلى دوال معالجة النصوص",
      },
      __length: {
        main: "طول",
        __description: "للحصول على طول النص",
      },
      __toUpperCase: {
        main: "حرف_كبير",
        __description: "لتحويل النص إلى أحرف كبيرة",
      },
      __toLowerCase: {
        main: "حرف_صغير",
        __description: "لتحويل النص إلى أحرف صغيرة",
      },
    },
    __date: {
      main: {
        main: "تاريخ",
        __description: "للوصول إلى دوال معالجة التاريخ والوقت",
      },
      __year: {
        main: "سنة",
        __description: "للحصول على السنة",
      },
      __month: {
        main: "شهر",
        __description: "للحصول على الشهر",
      },
      __dayMonth: {
        main: "يوم_الشهر",
        __description: "للحصول على يوم الشهر",
      },
      __dayWeek: {
        main: "يوم_الأسبوع", // Correção ortográfica
        __description: "للحصول على يوم الأسبوع",
      },
      __hour: {
        main: "ساعة",
        __description: "للحصول على الساعة",
      },
      __minute: {
        main: "دقيقة",
        __description: "للحصول على الدقيقة",
      },
      __second: {
        main: "ثانية",
        __description: "للحصول على الثانية",
      },
    },
  },
  types: {
    __object: {
      main: "كائن",
      __description: "لإعلان كائن ثابت",
    },
    __number: {
      main: "رقم",
      __description: "للإعلان عن متغير من نوع رقم",
    },
    __string: {
      main: "نص",
      __description: "للإعلان عن متغير من نوع نص",
    },
    __boolean: {
      main: "منطقي",
      values: { __true: "صحيح", __false: "خطأ" },
      __description: "للإعلان عن متغير من نوع منطقي",
    },
  },
  methods: {
    method: {
      __print: {
        main: "اطبع",
        __description: "لطباعة قيمة على الشاشة",
      },
      __scan: {
        main: "ادخل",
        __description: "لقراءة قيمة من المدخلات",
      },
      __return: {
        main: "ارجاع",
        __description: "لإرجاع قيمة من دالة",
      },
    },
    sentences: {
      __function: {
        main: "دالة",
        __description: "للإعلان عن دالة",
      },
      __if: {
        main: "اذا",
        __description: "للإعلان عن شرط",
      },
      __else: {
        main: "والا",
        __description: "للإعلان عن شرط بديل",
      },
      __while: {
        main: "طالما",
        __description: "للإعلان عن حلقة طالما",
      },
      __for: {
        main: "لأجل",
        __description: "للإعلان عن حلقة لأجل",
      },
      __switch: {
        main: "اختيار",
        __description: "للإعلان عن هيكل اختيار",
      },
      __case: {
        main: "حالة",
        __description: "للإعلان عن حالة في هيكل الاختيار",
      },
      __default: {
        main: "افتراضي",
        __description: "للإعلان عن الحالة الافتراضية",
      },
      __try: {
        main: "حاول",
        __description: "للإعلان عن كتلة محاولة",
      },
      __catch: {
        main: "التقط",
        __description: "للإعلان عن كتلة معالجة الأخطاء",
      },
      __finally: {
        main: "اخيرا",
        __description: "للإعلان عن كتلة تنفذ في كل الأحوال",
      },
    },
  },
  errors: {
    main: {
      tag: "خطأ",
      message: "خطأ عام في النظام",
    },
    __UNKNOWN_ERROR: {
      tag: "خطأ_غير_معروف",
      message: "خطأ غير معروف تماما",
    },
    __TypeError: {
      tag: "خطأ_نوع",
      message: "نوع غير صالح في العملية",
    },
    __ReferenceError: {
      tag: "خطأ_مرجع",
      message: "المتغير غير موجود في النطاق",
    },
    __SyntaxError: {
      tag: "خطأ_صياغة",
      message: "كود غير صالح",
    },
    __RangeError: {
      tag: "خطأ_نطاق",
      message: "القيمة خارج النطاق المسموح به",
    },
    __URIError: {
      tag: "خطأ_العنوان",
      message: "عنوان URI غير صحيح أو تالف",
    },
    __EvalError: {
      tag: "خطأ_eval",
      message: "خطأ يتعلق بدالة eval",
    },
  },
}).grammar();
