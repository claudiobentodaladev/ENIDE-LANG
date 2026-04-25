import { Language } from "../grammar.class.js";

export const turkce = new Language({
  language: "turkce",
  about:
    "ENIDE herhangi bir dilde programlamaya izin veren tercüme edilebilir bir transpiler'dir",

  include: {
    main: "DahilEtme",
    __description: "Dil veya kitaplıkları dahil etmek için kullanılır.",
  },

  commands: {
    all: {
      __about: {
        main: "Hakkinda",
        __description: "ENIDE hakkında bilgi almak için",
      },
      __help: {
        main: "Yardim",
        __description: "mevcut tüm komutların listesini almak için",
      },
      __version: {
        main: "Sürum",
        __description: "ENIDE'nin mevcut sürümünü almak için",
      },
      __languages: {
        main: "Diller",
        __description: "mevcut tüm dillerin listesini almak için",
      },
      __documentation: {
        main: "Dok",
        __description: "bir dil için belgeleri almak için",
      },
    },
  },

  library: {
    __math: {
      main: {
        main: "Matematik",
        __description: "matematik fonksiyonlarına erişim için",
      },
      __pi: {
        main: "PI",
        __description: "pi değerini almak için",
      },
      __sqrt: {
        main: "KareKok",
        __description: "kare koku almak için",
      },
      __pow: {
        main: "Us",
        __description: "bir sayının üssünü almak için",
      },
      __round: {
        main: "Yuvarla",
        __description: "bir sayıyı yuvarlamak için",
      },
      __random: {
        main: "Rastgele",
        __description: "rastgele sayı almak için",
      },
      __max: {
        main: "Maksimum",
        __description: "maksimum değeri almak için",
      },
      __min: {
        main: "Minimum",
        __description: "minimum değeri almak için",
      },
      __isNumber: {
        main: "SayiMi",
        __description: "bir değerin sayı olup olmadığını kontrol etmek için",
      },
      __isInteger: {
        main: "TamSayiMi",
        __description:
          "bir değerin tam sayı olup olmadığını kontrol etmek için",
      },
      __isFloat: {
        main: "OndalikMi",
        __description:
          "bir değerin ondalık sayı olup olmadığını kontrol etmek için",
      },
    },

    __string: {
      main: {
        main: "Metin",
        __description: "metin işlem fonksiyonlarına erişim için",
      },
      __length: {
        main: "Uzunluk",
        __description: "bir metnin uzunluğunu almak için",
      },
      __toUpperCase: {
        main: "BuyukHarfe",
        __description: "bir metni büyük harfe dönüştürmek için",
      },
      __toLowerCase: {
        main: "KucukHarfe",
        __description: "bir metni küçük harfe dönüştürmek için",
      },
    },

    __date: {
      main: {
        main: "Tarih",
        __description: "tarih ve saat fonksiyonlarına erişim için",
      },
      __year: {
        main: "Yil",
        __description: "yılı almak için",
      },
      __month: {
        main: "Ay",
        __description: "ayı almak için",
      },
      __dayMonth: {
        main: "AyinGunu",
        __description: "ayın gününü almak için",
      },
      __dayWeek: {
        main: "HaftaninGunu",
        __description: "haftanın gününü almak için",
      },
      __hour: {
        main: "Saat",
        __description: "saati almak için",
      },
      __minute: {
        main: "Dakika",
        __description: "dakikayı almak için",
      },
      __second: {
        main: "Saniye",
        __description: "saniyeyi almak için",
      },
    },
  },

  types: {
    __object: {
      main: "Nesne",
      __description: "statik bir nesne tanımlamak için",
    },
    __number: {
      main: "Sayi",
      __description: "sayı türünde değişken bildirmek için",
    },
    __string: {
      main: "Metin",
      __description: "metin türünde değişken bildirmek için",
    },
    __boolean: {
      main: "Bool",
      values: { __true: "Dogru", __false: "Yanlis" },
      __description: "mantıksal türünde değişken bildirmek için",
    },
  },

  methods: {
    method: {
      __print: {
        main: "Yazdir",
        __description: "ekrana değer yazdırmak için",
      },
      __scan: {
        main: "Oku",
        __description: "girişten değer okumak için",
      },
      __return: {
        main: "Dondur",
        __description: "bir fonksiyondan değer döndürmek için",
      },
    },

    sentences: {
      __function: {
        main: "Fonksiyon",
        __description: "fonksiyon bildirmek için",
      },
      __if: {
        main: "Eger",
        __description: "koşul bildirmek için",
      },
      __else: {
        main: "Degilse",
        __description: "alternatif koşul bildirmek için",
      },
      __while: {
        main: "Iken",
        __description: "iken döngüsü bildirmek için",
      },
      __for: {
        main: "Icin",
        __description: "için döngüsü bildirmek için",
      },
      __switch: {
        main: "Sec",
        __description: "seçim yapısı bildirmek için",
      },
      __case: {
        main: "Durum",
        __description: "seçim yapısında durum bildirmek için",
      },
      __default: {
        main: "Varsayilan",
        __description: "seçim yapısında varsayılan durumu bildirmek için",
      },
      __try: {
        main: "Dene",
        __description: "dene bloğu bildirmek için",
      },
      __catch: {
        main: "Yakala",
        __description: "hata işlem bloğu bildirmek için",
      },
      __finally: {
        main: "Sonunda",
        __description: "her zaman yürütülen bloğu bildirmek için",
      },
    },
  },

  errors: {
    main: {
      tag: "HATA",
      message: "Genel sistem hatası",
    },
    __UNKNOWN_ERROR: {
      tag: "BILINMEYEN_HATA",
      message: "Tamamen bilinmeyen hata",
    },
    __TypeError: {
      tag: "TUR_HATASI",
      message: "İşlemde geçersiz tür",
    },
    __ReferenceError: {
      tag: "REFERANS_HATASI",
      message: "Değişken kapsam içerisinde mevcut değil",
    },
    __SyntaxError: {
      tag: "SOZDIZIMI_HATASI",
      message: "Geçersiz kod",
    },
    __RangeError: {
      tag: "ARALIK_HATASI",
      message: "Değer izin verilen aralık dışında",
    },
    __URIError: {
      tag: "URI_HATASI",
      message: "Yanlış biçimlenmiş veya geçersiz URI",
    },
    __EvalError: {
      tag: "EVAL_HATASI",
      message: "eval ile ilgili hata",
    },
  },
}).grammar();
