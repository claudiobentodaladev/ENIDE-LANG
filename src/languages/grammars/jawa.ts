import { Language } from "../grammar.class.js";

export const jawa = new Language({
  language: "jawa",
  about:
    "ENIDE iku transpiler sing bisa diterjemahake kang ngidini pemrograman ing basa apa wae",
  include: {
    main: "Nglebokake",
    __description: "Digunakake kanggo nglebokake basa utawa perpustakaan",
  },
  commands: {
    all: {
      __about: {
        main: "bab",
        __description: "kanggo ngerti informasi bab ENIDE",
      },
      __help: {
        main: "tulung",
        __description: "kanggo ngerti dhaftar kabeh perintah kang kasedhiya",
      },
      __version: {
        main: "versi",
        __description: "kanggo ngerti versi ENIDE saiki",
      },
      __languages: {
        main: "basa",
        __description: "kanggo ngerti dhaftar kabeh basa kang kasedhiya",
      },
      __documentation: {
        main: "dok",
        __description: "kanggo ngerti dokumentasi sawijining basa",
      },
    },
  },
  library: {
    __math: {
      main: {
        main: "matematika",
        __description: "kanggo ngakses fungsi matematika",
      },
      __pi: {
        main: "PI",
        __description: "kanggo ngerti nilai pi",
      },
      __sqrt: {
        main: "AkarKuadrat",
        __description: "kanggo ngerti akar kuadrat",
      },
      __pow: {
        main: "Pangkat",
        __description: "kanggo ngerti pangkat sawijining angka",
      },
      __round: {
        main: "Bunderke",
        __description: "kanggo mbunderke angka",
      },
      __random: {
        main: "Acak",
        __description: "kanggo ngerti angka acak",
      },
      __max: {
        main: "PalingGedhe",
        __description: "kanggo ngerti nilai paling gedhe",
      },
      __min: {
        main: "PalingCilik",
        __description: "kanggo ngerti nilai paling cilik",
      },
      __isNumber: {
        main: "IkuAngka",
        __description: "kanggo mriksa apa nilai iku angka",
      },
      __isInteger: {
        main: "IkuBulat",
        __description: "kanggo mriksa apa nilai iku angka bulat",
      },
      __isFloat: {
        main: "IkuDesimal",
        __description: "kanggo mriksa apa nilai iku angka desimal",
      },
    },
    __string: {
      main: {
        main: "tulisan",
        __description: "kanggo ngakses fungsi manipulasi teks",
      },
      __length: {
        main: "Dawane",
        __description: "kanggo ngerti dawane teks",
      },
      __toUpperCase: {
        main: "DadiBesar",
        __description: "kanggo ngowahi teks dadi huruf gedhe",
      },
      __toLowerCase: {
        main: "DadiCilik",
        __description: "kanggo ngowahi teks dadi huruf cilik",
      },
    },
    __date: {
      main: {
        main: "tanggal",
        __description: "kanggo ngakses fungsi tanggal lan wektu",
      },
      __year: {
        main: "Taun",
        __description: "kanggo ngerti taun",
      },
      __month: {
        main: "Sasi",
        __description: "kanggo ngerti sasi",
      },
      __dayMonth: {
        main: "DinaIngSasi",
        __description: "kanggo ngerti dina ing sasi",
      },
      __dayWeek: {
        main: "DinaIngPekanan",
        __description: "kanggo ngerti dina ing pekanan",
      },
      __hour: {
        main: "Jam",
        __description: "kanggo ngerti jam",
      },
      __minute: {
        main: "Menit",
        __description: "kanggo ngerti menit",
      },
      __second: {
        main: "Detik",
        __description: "kanggo ngerti detik",
      },
    },
  },
  types: {
    __object: { main: "obyek", __description: "kanggo ngumumake obyek statis" },
    __number: {
      main: "angka",
      __description: "kanggo ngumumake variabel jenis angka",
    },
    __string: {
      main: "teks",
      __description: "kanggo ngumumake variabel jenis teks",
    },
    __boolean: {
      main: "bool",
      values: { __true: "Bener", __false: "Salah" },
      __description: "kanggo ngumumake variabel jenis bool",
    },
  },
  methods: {
    method: {
      __print: {
        main: "cithak",
        __description: "kanggo nyithak nilai ing layar",
      },
      __scan: {
        main: "waca",
        __description: "kanggo maca nilai saka input",
      },
      __return: {
        main: "balekake",
        __description: "kanggo mbalekake nilai saka fungsi",
      },
    },
    sentences: {
      __function: {
        main: "fungsi",
        __description: "kanggo ngumumake fungsi",
      },
      __if: {
        main: "yen",
        __description: "kanggo ngumumake kondisi",
      },
      __else: {
        main: "liyane",
        __description: "kanggo ngumumake kondisi alternatif",
      },
      __while: {
        main: "nalika",
        __description: "kanggo ngumumake perulangan nalika",
      },
      __for: {
        main: "kanggo",
        __description: "kanggo ngumumake perulangan kanggo",
      },
      __switch: {
        main: "pilih",
        __description: "kanggo ngumumake struktur pilihan",
      },
      __case: {
        main: "kasus",
        __description: "kanggo ngumumake kasus ing struktur pilihan",
      },
      __default: {
        main: "gawan",
        __description: "kanggo ngumumake kasus gawan ing struktur pilihan",
      },
      __try: {
        main: "nyoba",
        __description: "kanggo ngumumake blok nyoba",
      },
      __catch: {
        main: "cekel",
        __description: "kanggo ngumumake blok penanganan kesalahan",
      },
      __finally: {
        main: "pungkasane",
        __description: "kanggo ngumumake blok kang tansah dijalanake",
      },
    },
  },
  errors: {
    main: { tag: "KESALAHAN", message: "Kesalahan sistem umum" },
    __UNKNOWN_ERROR: {
      tag: "KESALAHAN_ORA_DIKENAL",
      message: "Kesalahan kang ora dikenal babar pisan",
    },
    __TypeError: {
      tag: "KESALAHAN_JENIS",
      message: "Jenis ora valid ing operasi",
    },
    __ReferenceError: {
      tag: "KESALAHAN_REFERENSI",
      message: "Variabel ora ana ing jangkauan",
    },
    __SyntaxError: { tag: "KESALAHAN_SINTAKS", message: "Kode ora valid" },
    __RangeError: {
      tag: "KESALAHAN_RENTANG",
      message: "Nilai ing njaba rentang kang diidini",
    },
    __URIError: {
      tag: "KESALAHAN_URI",
      message: "URI salah wujud utawa ora valid",
    },
    __EvalError: {
      tag: "KESALAHAN_EVAL",
      message: "Kesalahan sing gegandhengan karo eval",
    },
  },
}).grammar();
