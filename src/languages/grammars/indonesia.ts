import { Language } from "../grammar.class.js";

export const indonesia = new Language({
  language: "indonesia",
  about:
    "ENIDE adalah transpiler yang dapat diterjemahkan yang memungkinkan pemrograman dalam bahasa apa pun",
  include: {
    main: "Sertakan",
    __description: "Digunakan untuk menyertakan bahasa atau pustaka",
  },
  commands: {
    all: {
      __about: {
        main: "tentang",
        __description: "untuk mendapatkan informasi tentang ENIDE",
      },
      __help: {
        main: "bantuan",
        __description: "untuk mendapatkan daftar semua perintah yang tersedia",
      },
      __version: {
        main: "versi",
        __description: "untuk mendapatkan versi ENIDE saat ini",
      },
      __languages: {
        main: "bahasa",
        __description: "untuk mendapatkan daftar semua bahasa yang tersedia",
      },
      __documentation: {
        main: "dok",
        __description: "untuk mendapatkan dokumentasi suatu bahasa",
      },
    },
  },
  library: {
    __math: {
      main: {
        main: "matematika",
        __description: "untuk mengakses fungsi matematika",
      },
      __pi: {
        main: "PI",
        __description: "untuk mendapatkan nilai pi",
      },
      __sqrt: {
        main: "AkarKuadrat",
        __description: "untuk mendapatkan akar kuadrat",
      },
      __pow: {
        main: "Pangkat",
        __description: "untuk mendapatkan pangkat suatu bilangan",
      },
      __round: {
        main: "Bulat",
        __description: "untuk membulatkan bilangan",
      },
      __random: {
        main: "Acak",
        __description: "untuk mendapatkan bilangan acak",
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
        main: "AdalahBilangan",
        __description: "untuk memeriksa apakah suatu nilai adalah bilangan",
      },
      __isInteger: {
        main: "AdalahBulat",
        __description:
          "untuk memeriksa apakah suatu nilai adalah bilangan bulat",
      },
      __isFloat: {
        main: "AdalahDesimal",
        __description:
          "untuk memeriksa apakah suatu nilai adalah bilangan desimal",
      },
    },
    __string: {
      main: {
        main: "teks",
        __description: "untuk mengakses fungsi manipulasi teks",
      },
      __length: {
        main: "Panjang",
        __description: "untuk mendapatkan panjang teks",
      },
      __toUpperCase: {
        main: "KeHurufBesar",
        __description: "untuk mengubah teks menjadi huruf besar",
      },
      __toLowerCase: {
        main: "KeHurufKecil",
        __description: "untuk mengubah teks menjadi huruf kecil",
      },
    },
    __date: {
      main: {
        main: "tanggal",
        __description: "untuk mengakses fungsi tanggal dan waktu",
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
        main: "Menit",
        __description: "untuk mendapatkan menit",
      },
      __second: {
        main: "Detik",
        __description: "untuk mendapatkan detik",
      },
    },
  },
  types: {
    __object: {
      main: "objek",
      __description: "untuk mendeklarasikan objek statis",
    },
    __number: {
      main: "bilangan",
      __description: "untuk mendeklarasikan variabel bertipe bilangan",
    },
    __string: {
      main: "teks",
      __description: "untuk mendeklarasikan variabel bertipe teks",
    },
    __boolean: {
      main: "bool",
      values: { __true: "Benar", __false: "Salah" },
      __description: "untuk mendeklarasikan variabel bertipe boolean",
    },
  },
  methods: {
    method: {
      __print: {
        main: "cetak",
        __description: "untuk mencetak nilai ke layar",
      },
      __scan: {
        main: "baca",
        __description: "untuk membaca nilai dari masukan",
      },
      __return: {
        main: "kembalikan",
        __description: "untuk mengembalikan nilai dari fungsi",
      },
    },
    sentences: {
      __function: {
        main: "fungsi",
        __description: "untuk mendeklarasikan fungsi",
      },
      __if: {
        main: "jika",
        __description: "untuk mendeklarasikan kondisi",
      },
      __else: {
        main: "lain",
        __description: "untuk mendeklarasikan kondisi alternatif",
      },
      __while: {
        main: "selama",
        __description: "untuk mendeklarasikan perulangan selama",
      },
      __for: {
        main: "untuk",
        __description: "untuk mendeklarasikan perulangan untuk",
      },
      __switch: {
        main: "pilih",
        __description: "untuk mendeklarasikan struktura pilihan",
      },
      __case: {
        main: "kasus",
        __description: "untuk mendeklarasikan kasus dalam struktura pilihan",
      },
      __default: {
        main: "bawaan",
        __description:
          "untuk mendeklarasikan kasus bawaan dalam struktura pilihan",
      },
      __try: {
        main: "coba",
        __description: "untuk mendeklarasikan blok coba",
      },
      __catch: {
        main: "tangkap",
        __description: "untuk mendeklarasikan blok penanganan kesalahan",
      },
      __finally: {
        main: "akhirnya",
        __description: "untuk mendeklarasikan blok yang selalu dijalankan",
      },
    },
  },
  errors: {
    main: { tag: "KESALAHAN", message: "Kesalahan sistem umum" },
    __UNKNOWN_ERROR: {
      tag: "KESALAHAN_TIDAK_DIKENAL",
      message: "Kesalahan yang sama sekali tidak dikenal",
    },
    __TypeError: {
      tag: "KESALAHAN_TIPE",
      message: "Tipe tidak valid dalam operasi",
    },
    __ReferenceError: {
      tag: "KESALAHAN_REFERENSI",
      message: "Variabel tidak ada dalam cakupan",
    },
    __SyntaxError: { tag: "KESALAHAN_SINTAKS", message: "Kode tidak valid" },
    __RangeError: {
      tag: "KESALAHAN_RENTANG",
      message: "Nilai di luar rentang yang diizinkan",
    },
    __URIError: {
      tag: "KESALAHAN_URI",
      message: "URI salah bentuk atau tidak valid",
    },
    __EvalError: { tag: "KESALAHAN_EVAL", message: "Kesalahan terkait eval" },
  },
}).grammar();
