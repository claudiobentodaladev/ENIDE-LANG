import { Language } from "../grammar.class.js";

export const melayu = new Language({
  language: "melayu",
  about:
    "ENIDE ialah transpiler yang boleh diterjemahkan yang membolehkan pengaturcaraan dalam mana-mana bahasa",
  include: {
    main: "Termasuk",
    __description: "Digunakan untuk memasukkan bahasa atau perpustakaan",
  },
  commands: {
    all: {
      __about: {
        main: "Tentang",
        __description: "untuk mendapatkan maklumat tentang ENIDE",
      },
      __help: {
        main: "Bantuan",
        __description: "untuk mendapatkan senarai semua arahan yang tersedia",
      },
      __version: {
        main: "Versi",
        __description: "untuk mendapatkan versi semasa ENIDE",
      },
      __languages: {
        main: "Bahasa",
        __description: "untuk mendapatkan senarai semua bahasa yang tersedia",
      },
      __documentation: {
        main: "Dokumentasi",
        __description: "untuk mendapatkan dokumentasi bagi sesuatu bahasa",
      },
    },
  },
  library: {
    __math: {
      main: {
        main: "Matematik",
        __description: "untuk mengakses fungsi matematik",
      },
      __pi: {
        main: "Pi",
        __description: "untuk mendapatkan nilai pi",
      },
      __sqrt: {
        main: "PuncaKuasaDua",
        __description: "untuk mendapatkan punca kuasa dua",
      },
      __pow: {
        main: "Kuasa",
        __description: "untuk mendapatkan kuasa sesuatu nombor",
      },
      __round: {
        main: "Bulatkan",
        __description: "untuk membulatkan nombor",
      },
      __random: {
        main: "Rawak",
        __description: "untuk mendapatkan nombor rawak",
      },
      __max: {
        main: "Maksimum",
        __description: "untuk mendapatkan nilai maksimum",
      },
      __min: {
        main: "Minimum",
        __description: "untuk mendapatkan nilai minimum",
      },
      __isNumber: {
        main: "IalahNombor",
        __description: "untuk memeriksa sama ada nilai ialah nombor",
      },
      __isInteger: {
        main: "NomborBulat",
        __description: "untuk memeriksa sama ada nilai ialah nombor bulat",
      },
      __isFloat: {
        main: "NomborPerpuluhan",
        __description: "untuk memeriksa sama ada nilai ialah nombor perpuluhan",
      },
    },
    __string: {
      main: {
        main: "Teks",
        __description: "untuk mengakses fungsi manipulasi teks",
      },
      __length: {
        main: "Panjang",
        __description: "untuk mendapatkan panjang teks",
      },
      __toUpperCase: {
        main: "KeHurufBesar",
        __description: "untuk menukar teks kepada huruf besar",
      },
      __toLowerCase: {
        main: "KeHurufKecil",
        __description: "untuk menukar teks kepada huruf kecil",
      },
    },
    __date: {
      main: {
        main: "Tarikh",
        __description: "untuk mengakses fungsi tarikh dan masa",
      },
      __year: {
        main: "Tahun",
        __description: "untuk mendapatkan tahun",
      },
      __month: {
        main: "Bulan",
        __description: "untuk mendapatkan bulan",
      },
      __dayMonth: {
        main: "HariBulan",
        __description: "untuk mendapatkan hari dalam bulan",
      },
      __dayWeek: {
        main: "HariMinggu",
        __description: "untuk mendapatkan hari dalam minggu",
      },
      __hour: {
        main: "Jam",
        __description: "untuk mendapatkan jam",
      },
      __minute: {
        main: "Minit",
        __description: "untuk mendapatkan minit",
      },
      __second: {
        main: "Saat",
        __description: "untuk mendapatkan saat",
      },
    },
  },
  types: {
    __object: {
      main: "Objek",
      __description: "untuk mengisytiharkan objek statik",
    },
    __number: {
      main: "Nombor",
      __description: "untuk mengisytiharkan pemboleh ubah jenis nombor",
    },
    __string: {
      main: "Teks",
      __description: "untuk mengisytiharkan pemboleh ubah jenis teks",
    },
    __boolean: {
      main: "BenarSalah",
      values: { __true: "Benar", __false: "Salah" },
      __description: "untuk mengisytiharkan pemboleh ubah jenis boolean",
    },
  },
  methods: {
    method: {
      __print: {
        main: "Cetak",
        __description: "untuk mencetak nilai ke skrin",
      },
      __scan: {
        main: "Baca",
        __description: "untuk membaca nilai dari input",
      },
      __return: {
        main: "Pulangkan",
        __description: "untuk memulangkan nilai dari fungsi",
      },
    },
    sentences: {
      __function: {
        main: "Fungsi",
        __description: "untuk mengisytiharkan fungsi",
      },
      __if: {
        main: "Jika",
        __description: "untuk mengisytiharkan syarat",
      },
      __else: {
        main: "Lain",
        __description: "untuk mengisytiharkan syarat alternatif",
      },
      __while: {
        main: "Selagi",
        __description: "untuk mengisytiharkan gelung selagi",
      },
      __for: {
        main: "Untuk",
        __description: "untuk mengisytiharkan gelung untuk",
      },
      __switch: {
        main: "Pilih",
        __description: "untuk mengisytiharkan struktur pilihan",
      },
      __case: {
        main: "Kes",
        __description: "untuk mengisytiharkan kes dalam struktur pilihan",
      },
      __default: {
        main: "Lalai",
        __description: "untuk mengisytiharkan kes lalai dalam struktur pilihan",
      },
      __try: {
        main: "Cuba",
        __description: "untuk mengisytiharkan blok cuba",
      },
      __catch: {
        main: "Tangkap",
        __description: "untuk mengisytiharkan blok pengendalian ralat",
      },
      __finally: {
        main: "Akhirnya",
        __description: "untuk mengisytiharkan blok yang sentiasa dijalankan",
      },
    },
  },
  errors: {
    main: { tag: "RALAT", message: "Ralat sistem umum" },
    __UNKNOWN_ERROR: {
      tag: "RALAT_TIDAK_DIKETAHUI",
      message: "Ralat yang langsung tidak diketahui",
    },
    __TypeError: {
      tag: "RALAT_JENIS",
      message: "Jenis tidak sah dalam operasi",
    },
    __ReferenceError: {
      tag: "RALAT_RUJUKAN",
      message: "Pemboleh ubah tidak wujud dalam skop",
    },
    __SyntaxError: { tag: "RALAT_SINTAKS", message: "Kod tidak sah" },
    __RangeError: {
      tag: "RALAT_JULAT",
      message: "Nilai di luar julat yang dibenarkan",
    },
    __URIError: { tag: "RALAT_URI", message: "URI cacat atau tidak sah" },
    __EvalError: { tag: "RALAT_EVAL", message: "Ralat berkaitan eval" },
  },
}).grammar();
