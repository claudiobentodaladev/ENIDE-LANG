import { Language } from "../grammar.class.js";

export const urdu = new Language({
  language: "urdu",
  about:
    "ENIDE aik qabil e tarjuma transpaailer hai jo kisi bhi zaban mein programming ki ijazat deta hai",
  include: {
    main: "ShamilKarein",
    __description:
      "زبان یا لائبریریوں کو شامل کرنے کے لیے استعمال کیا جاتا ہے۔",
  },
  commands: {
    all: {
      __about: {
        main: "KeBareMein",
        __description: "ENIDE کے بارے میں معلومات حاصل کرنے کے لیے",
      },
      __help: {
        main: "Madad",
        __description: "تمام دستیاب کمانڈز کی فہرست حاصل کرنے کے لیے",
      },
      __version: {
        main: "Version",
        __description: "ENIDE کا موجودہ ورژن حاصل کرنے کے لیے",
      },
      __languages: {
        main: "Zabanein",
        __description: "تمام دستیاب زبانوں کی فہرست حاصل کرنے کے لیے",
      },
      __documentation: {
        main: "Dastavezaat",
        __description: "زبان کی دستاویزات حاصل کرنے کے لیے",
      },
    },
  },
  library: {
    __math: {
      main: {
        main: "Rayazi",
        __description: "ریاضی کے افعال تک رسائی کے لیے",
      },
      __pi: {
        main: "Pai",
        __description: "پائی کی قیمت حاصل کرنے کے لیے",
      },
      __sqrt: {
        main: "Jazr",
        __description: "مربع جزر حاصل کرنے کے لیے",
      },
      __pow: {
        main: "Taaqat",
        __description: "کسی عدد کی طاقت حاصل کرنے کے لیے",
      },
      __round: {
        main: "Round",
        __description: "عدد کو راؤنڈ کرنے کے لیے",
      },
      __random: {
        main: "Ittifaqi",
        __description: "ایک اتفاقی عدد حاصل کرنے کے لیے",
      },
      __max: {
        main: "ZyadaSeZyada",
        __description: "زیادہ سے زیادہ قیمت حاصل کرنے کے لیے",
      },
      __min: {
        main: "KamSeKam",
        __description: "کم سے کم قیمت حاصل کرنے کے لیے",
      },
      __isNumber: {
        main: "KyaAdadHai",
        __description: "چیک کرنے کے لیے کہ آیا قیمت ایک عدد ہے",
      },
      __isInteger: {
        main: "KyaSahihAdadHai",
        __description: "چیک کرنے کے لیے کہ آیا قیمت ایک صحیح عدد ہے",
      },
      __isFloat: {
        main: "KyaAashariyaHai",
        __description: "چیک کرنے کے لیے کہ آیا قیمت اعشاریہ ہے",
      },
    },
    __string: {
      main: {
        main: "Tahreer",
        __description: "تحریر میں تبدیلی کے افعال کے لیے",
      },
      __length: {
        main: "Lambai",
        __description: "تحریر کی لمبائی حاصل کرنے کے لیے",
      },
      __toUpperCase: {
        main: "BadeHuroof",
        __description: "تحریر کو بڑے حروف میں بدلنے کے لیے",
      },
      __toLowerCase: {
        main: "ChhoteHuroof",
        __description: "تحریر کو چھوٹے حروف میں بدلنے کے لیے",
      },
    },
    __date: {
      main: {
        main: "Tarikh",
        __description: "تاریخ اور وقت کے افعال کے لیے",
      },
      __year: {
        main: "Saal",
        __description: "سال حاصل کرنے کے لیے",
      },
      __month: {
        main: "Mahina",
        __description: "مہینہ حاصل کرنے کے لیے",
      },
      __dayMonth: {
        main: "TarikhMahina",
        __description: "مہینے کا دن حاصل کرنے کے لیے",
      },
      __dayWeek: {
        main: "DinHafta",
        __description: "ہفتے کا دن حاصل کرنے کے لیے",
      },
      __hour: {
        main: "Ghanta",
        __description: "گھنٹہ حاصل کرنے کے لیے",
      },
      __minute: {
        main: "Minute",
        __description: "منٹ حاصل کرنے کے لیے",
      },
      __second: {
        main: "Second",
        __description: "سیکنڈ حاصل کرنے کے لیے",
      },
    },
  },
  types: {
    __object: {
      main: "Cheez",
      __description: "ایک ساکن چیز کا اعلان کرنے کے لیے",
    },
    __number: {
      main: "Adad",
      __description: "عدد قسم کا متغیر ظاہر کرنے کے لیے",
    },
    __string: {
      main: "Tahreer",
      __description: "تحریر قسم کا متغیر ظاہر کرنے کے لیے",
    },
    __boolean: {
      main: "Mantiqi",
      values: { __true: "Sach", __false: "Jhoot" },
      __description: "منطقی قسم کا متغیر ظاہر کرنے کے لیے",
    },
  },
  methods: {
    method: {
      __print: {
        main: "Likho",
        __description: "اسکرین پر قیمت دکھانے کے لیے",
      },
      __scan: {
        main: "Parho",
        __description: "ان پٹ سے قیمت پڑھنے کے لیے",
      },
      __return: {
        main: "WapasKaro",
        __description: "فنکشن سے قیمت واپس کرنے کے لیے",
      },
    },
    sentences: {
      __function: {
        main: "Function",
        __description: "فنکشن بنانے کے لیے",
      },
      __if: {
        main: "Agar",
        __description: "شرط ظاہر کرنے کے لیے",
      },
      __else: {
        main: "Warna",
        __description: "متبادل شرط کے لیے",
      },
      __while: {
        main: "JabTak",
        __description: "لوپ بنانے کے لیے",
      },
      __for: {
        main: "For",
        __description: "فار لوپ کے لیے",
      },
      __switch: {
        main: "TabdeelKaro",
        __description: "انتخابی ڈھانچہ",
      },
      __case: {
        main: "Soorat",
        __description: "انتخابی صورت",
      },
      __default: {
        main: "Default",
        __description: "بنیادی صورت",
      },
      __try: {
        main: "Koshish",
        __description: "کوشش کا بلاک",
      },
      __catch: {
        main: "Pakro",
        __description: "غلطی پکڑنے کا بلاک",
      },
      __finally: {
        main: "AakhirKar",
        __description: "بلا تفریق چلنے والا بلاک",
      },
    },
  },
  errors: {
    main: {
      tag: "Ghalti",
      message: "نظامی غلطی",
    },
    __UNKNOWN_ERROR: {
      tag: "NamaloomGhalti",
      message: "مکمل طور پر نامعلوم غلطی",
    },
    __TypeError: {
      tag: "QismKiGhalti",
      message: "آپریشن میں غلط قسم",
    },
    __ReferenceError: {
      tag: "HawalaKiGhalti",
      message: "متغیر موجود نہیں ہے",
    },
    __SyntaxError: {
      tag: "NahwKiGhalti",
      message: "غلط کوڈ",
    },
    __RangeError: {
      tag: "HadKiGhalti",
      message: "قیمت حد سے باہر ہے",
    },
    __URIError: {
      tag: "URI_Ghalti",
      message: "غلط URI",
    },
    __EvalError: {
      tag: "Eval_Ghalti",
      message: "eval سے متعلق غلطی",
    },
  },
}).grammar();
