import { Language } from "../grammar.class.js";

export const turkce = new Language({
  language: "turkce",
  about:
    "ENIDE herhangi bir dilde programlamaya izin veren tercume edilebilir bir transpiler dir",

  include: {
    main: "DahilEtme",
    __description: "Dil veya kitaplıkları dahil etmek için kullanılır.",
  },

  commands: {
    all: {
      __about: {
        main: "Hakkinda",
        __description: "ENIDE hakkinda bilgi almak icin",
      },
      __help: {
        main: "Yardim",
        __description: "mevcut tum komutlarin listesini almak icin",
      },
      __version: {
        main: "Surum",
        __description: "ENIDE nin mevcut surumunu almak icin",
      },
      __languages: {
        main: "Diller",
        __description: "mevcut tum dillerin listesini almak icin",
      },
      __documentation: {
        main: "Dok",
        __description: "bir dil icin belgeleri almak icin",
      },
    },
  },

  library: {
    __math: {
      main: {
        main: "Matematik",
        __description: "matematik fonksiyonlarina erisim icin",
      },
      __pi: {
        main: "PI",
        __description: "pi degerini almak icin",
      },
      __sqrt: {
        main: "KareKok",
        __description: "kare koku almak icin",
      },
      __pow: {
        main: "Us",
        __description: "bir sayinin ussunu almak icin",
      },
      __round: {
        main: "Yuvarla",
        __description: "bir sayiyi yuvarlak icin",
      },
      __random: {
        main: "Rastgele",
        __description: "rastgele sayi almak icin",
      },
      __max: {
        main: "Maksimum",
        __description: "maksimum degeri almak icin",
      },
      __min: {
        main: "Minimum",
        __description: "minimum degeri almak icin",
      },
      __isNumber: {
        main: "SayiMi",
        __description: "bir degerin sayi olup olmadigini kontrol etmek icin",
      },
      __isInteger: {
        main: "TamSayiMi",
        __description:
          "bir degerin tam sayi olup olmadigini kontrol etmek icin",
      },
      __isFloat: {
        main: "OndalikMi",
        __description:
          "bir degerin ondalik sayi olup olmadigini kontrol etmek icin",
      },
    },

    __string: {
      main: {
        main: "Metin",
        __description: "metin islem fonksiyonlarina erisim icin",
      },
      __length: {
        main: "Uzunluk",
        __description: "bir metnin uzunlugunu almak icin",
      },
      __toUpperCase: {
        main: "BuyukHarfe",
        __description: "bir metni buyuk harfe donusturmek icin",
      },
      __toLowerCase: {
        main: "KucukHarfe",
        __description: "bir metni kucuk harfe donusturmek icin",
      },
    },

    __date: {
      main: {
        main: "Tarih",
        __description: "tarih ve saat fonksiyonlarina erisim icin",
      },
      __year: {
        main: "Yil",
        __description: "yili almak icin",
      },
      __month: {
        main: "Ay",
        __description: "ayi almak icin",
      },
      __dayMonth: {
        main: "AyinGunu",
        __description: "ayin gununu almak icin",
      },
      __dayWeek: {
        main: "HaftaninGunu",
        __description: "haftanin gununu almak icin",
      },
      __hour: {
        main: "Saat",
        __description: "saati almak icin",
      },
      __minute: {
        main: "Dakika",
        __description: "dakikayi almak icin",
      },
      __second: {
        main: "Saniye",
        __description: "saniyeyi almak icin",
      },
    },
  },

  types: {
    __object: {
      main: "Nesne",
      __description: "statik bir nesne tanimlamak icin",
    },
    __number: {
      main: "Sayi",
      __description: "sayi turunde degisken bildirmek icin",
    },
    __string: {
      main: "Metin",
      __description: "metin turunde degisken bildirmek icin",
    },
    __boolean: {
      main: "Bool",
      values: { __true: "Dogru", __false: "Yanlis" },
      __description: "mantiksal turunde degisken bildirmek icin",
    },
  },

  methods: {
    method: {
      __print: {
        main: "Yazdir",
        __description: "ekrana deger yazdirmak icin",
      },
      __scan: {
        main: "Oku",
        __description: "giristen deger okumak icin",
      },
      __return: {
        main: "Dondur",
        __description: "bir fonksiyondan deger dondurmek icin",
      },
    },

    sentences: {
      __function: {
        main: "Fonksiyon",
        __description: "fonksiyon bildirmek icin",
      },
      __if: {
        main: "Eger",
        __description: "kosul bildirmek icin",
      },
      __else: {
        main: "Degilse",
        __description: "alternatif kosul bildirmek icin",
      },
      __while: {
        main: "Iken",
        __description: "iken dongusu bildirmek icin",
      },
      __for: {
        main: "Icin",
        __description: "icin dongusu bildirmek icin",
      },
      __switch: {
        main: "Sec",
        __description: "secim yapisi bildirmek icin",
      },
      __case: {
        main: "Durum",
        __description: "secim yapisinda durum bildirmek icin",
      },
      __default: {
        main: "Varsayilan",
        __description: "secim yapisinda varsayilan durumu bildirmek icin",
      },
      __try: {
        main: "Dene",
        __description: "dene blogu bildirmek icin",
      },
      __catch: {
        main: "Yakala",
        __description: "hata islem blogu bildirmek icin",
      },
      __finally: {
        main: "Sonunda",
        __description: "her zaman yurutulen blogu bildirmek icin",
      },
    },
  },

  errors: {
    main: {
      tag: "HATA",
      message: "Genel sistem hatasi",
    },
    __UNKNOWN_ERROR: {
      tag: "BilinmeyenHata",
      message: "Tamamen bilinmeyen hata",
    },
    __TypeError: {
      tag: "TurHatasi",
      message: "Islemde gecersiz tur",
    },
    __ReferenceError: {
      tag: "ReferansHatasi",
      message: "Degisken kapsam icerisinde mevcut degil",
    },
    __SyntaxError: {
      tag: "SozdizimiHatasi",
      message: "Gecersiz kod",
    },
    __RangeError: {
      tag: "AralikHatasi",
      message: "Deger izin verilen aralik disinda",
    },
    __URIError: {
      tag: "UriHatasi",
      message: "Yanlis bicimlenmis veya gecersiz URI",
    },
    __EvalError: {
      tag: "EvalHatasi",
      message: "eval ile ilgili hata",
    },
  },
}).grammar();
