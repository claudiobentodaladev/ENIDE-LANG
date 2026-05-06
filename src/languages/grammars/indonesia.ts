import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const indonesia = new Language({
  language: "indonesia",
  about:
    "ENIDE adalah transpiler yang dapat diterjemahkan yang memungkinkan pemrograman dalam bahasa apa pun",

  include: DocStr(
    "Sertakan",
    "Digunakan untuk menyertakan bahasa, pustaka, atau struktur dari file lain",
  ),

  commands: {
    __about: DocStr("tentang", "untuk mendapatkan informasi tentang ENIDE"),
    __help: DocStr(
      "bantuan",
      "untuk mendapatkan daftar semua perintah yang tersedia",
    ),
    __version: DocStr("versi", "untuk mendapatkan versi ENIDE saat ini"),
    __languages: DocStr(
      "bahasa",
      "untuk mendapatkan daftar semua bahasa yang tersedia",
    ),
    __documentation: DocStr(
      "dok",
      "untuk mendapatkan dokumentasi suatu bahasa",
    ),
    __grammar: DocStr("gramatika", "untuk mendapatkan gramatika suatu bahasa"),
  },

  library: {
    __standard: {
      main: DocStr("standar", "untuk mengakses metode standar yang berguna"),
      __isarray: DocStr(
        "ApakahArray",
        "untuk memeriksa apakah nilai adalah array",
      ),
      __isobject: DocStr(
        "ApakahObjek",
        "untuk memeriksa apakah nilai adalah objek",
      ),
      __typeof: DocStr("Tipe", "untuk mendapatkan tipe suatu nilai"),
      __parse: DocStr("Parse", "untuk mengubah teks menjadi nilai yang benar"),
    },
    __math: {
      main: DocStr("matematika", "untuk mengakses fungsi matematika"),
      __pi: DocStr("PI", "untuk mendapatkan nilai pi"),
      __sqrt: DocStr("AkarKuadrat", "untuk mendapatkan akar kuadrat"),
      __pow: DocStr("Pangkat", "untuk mendapatkan pangkat suatu bilangan"),
      __round: DocStr("Bulat", "untuk membulatkan bilangan"),
      __random: DocStr("Acak", "untuk mendapatkan bilangan acak"),
      __max: DocStr("Maksimum", "untuk mendapatkan nilai maksimum"),
      __min: DocStr("Minimum", "untuk mendapatkan nilai minimum"),
      __isNumber: DocStr(
        "AdalahBilangan",
        "untuk memeriksa apakah nilai adalah bilangan",
      ),
      __isInteger: DocStr(
        "AdalahBulat",
        "untuk memeriksa apakah nilai adalah bilangan bulat",
      ),
      __isFloat: DocStr(
        "AdalahDesimal",
        "untuk memeriksa apakah nilai adalah bilangan desimal",
      ),
      __cos: DocStr("Cos", "untuk mendapatkan cosinus sudut"),
      __sin: DocStr("Sin", "untuk mendapatkan sinus sudut"),
      __tan: DocStr("Tan", "untuk mendapatkan tangen sudut"),
    },

    __string: {
      main: DocStr("teks", "untuk mengakses fungsi manipulasi teks"),
      __length: DocStr("Panjang", "untuk mendapatkan panjang teks"),
      __toUpperCase: DocStr(
        "KeHurufBesar",
        "untuk mengubah teks menjadi huruf besar",
      ),
      __toLowerCase: DocStr(
        "KeHurufKecil",
        "untuk mengubah teks menjadi huruf kecil",
      ),
      __include: DocStr(
        "Mengandung",
        "untuk memeriksa apakah teks mengandung substring",
      ),
      __repeat: DocStr(
        "Ulangi",
        "untuk mengulang teks sebanyak jumlah tertentu",
      ),
    },

    __date: {
      main: DocStr("tanggal", "untuk mengakses fungsi tanggal dan waktu"),
      __now: DocStr("Sekarang", "untuk mendapatkan tanggal dan waktu saat ini"),
      __year: DocStr("Tahun", "untuk mendapatkan tahun"),
      __month: DocStr("Bulan", "untuk mendapatkan bulan"),
      __dayMonth: DocStr("HariBulan", "untuk mendapatkan hari dalam bulan"),
      __dayWeek: DocStr("HariMinggu", "untuk mendapatkan hari dalam minggu"),
      __hour: DocStr("Jam", "untuk mendapatkan jam"),
      __minute: DocStr("Menit", "untuk mendapatkan menit"),
      __second: DocStr("Detik", "untuk mendapatkan detik"),
    },
  },

  types: {
    __number: DocStr(
      "bilangan",
      "untuk mendeklarasikan variabel bertipe bilangan",
    ),
    __string: DocStr("teks", "untuk mendeklarasikan variabel bertipe teks"),
    __boolean: DocStr("bool", "untuk mendeklarasikan variabel bertipe boolean"),
    __object: DocStr("objek", "untuk mendeklarasikan objek statis"),
    __void: DocStr("kosong", "untuk fungsi yang tidak mengembalikan nilai"),
    __array: DocStr("array", "untuk mendeklarasikan struktur array"),
  },

  specialValues: {
    __true: DocStr("Benar", "nilai boolean benar"),
    __false: DocStr("Salah", "nilai boolean salah"),
    __null: DocStr("Null", "tidak ada nilai"),
  },

  words: {
    __new: DocStr("baru", "untuk membuat instance baru dari kelas"),
    __this: DocStr("ini", "untuk mengakses properti kelas sendiri"),
    __extends: DocStr(
      "mewarisi",
      "untuk mendeklarasikan kelas yang mewarisi kelas lain",
    ),
  },

  accessModifiers: {
    __private: DocStr("pribadi", "hanya dapat diakses di dalam kelas"),
    __public: DocStr("publik", "dapat diakses dari mana saja"),
    __protected: DocStr("terlindung", "dapat diakses di kelas dan subkelas"),
    __readonly: DocStr("bacaSaja", "nilai hanya dapat ditetapkan sekali"),
    __static: DocStr("statis", "milik kelas bukan instance"),
  },

  methods: {
    method: {
      __print: DocStr("cetak", "untuk mencetak nilai ke layar"),
      __scan: DocStr("baca", "untuk membaca nilai dari masukan"),
      __return: DocStr("kembalikan", "untuk mengembalikan nilai dari fungsi"),
      __break: DocStr("henti", "untuk keluar dari perulangan"),
      __continue: DocStr("lanjut", "untuk melanjutkan ke iterasi berikutnya"),
    },

    sentences: {
      __function: DocStr("fungsi", "untuk mendeklarasikan fungsi"),
      __if: DocStr("jika", "untuk mendeklarasikan kondisi"),
      __else: DocStr("lain", "untuk mendeklarasikan kondisi alternatif"),
      __while: DocStr("selama", "untuk mendeklarasikan perulangan selama"),
      __for: DocStr("untuk", "untuk mendeklarasikan perulangan for"),
      __switch: DocStr("pilih", "untuk mendeklarasikan struktur pilihan"),
      __case: DocStr("kasus", "untuk mendeklarasikan kasus"),
      __default: DocStr("bawaan", "ketika tidak ada kasus yang cocok"),
      __try: DocStr("coba", "untuk mendeklarasikan blok coba"),
      __catch: DocStr(
        "tangkap",
        "untuk mendeklarasikan blok penanganan kesalahan",
      ),
      __finally: DocStr("akhirnya", "blok yang selalu dijalankan"),
      __class: DocStr("kelas", "untuk mendeklarasikan kelas"),
      __constructor: DocStr(
        "konstruktor",
        "struktur untuk mendeklarasikan properti kelas",
      ),
    },
  },

  errors: {
    __labels: errorLabel(
      "Pesan",
      "Nilai",
      "Variabel",
      "Properti",
      "Objek",
      "Diharapkan",
      "Diterima",
      "Penugasan Konstan",
      "Parameter Duplikat",
      "Petunjuk",
      "Token Tidak Valid",
      "Stack Overflow",
      "Token",
      "Akhir Masukan Tak Terduga",
    ),
    main: errorMessage("KESALAHAN", "kesalahan sistem umum"),
    __TypeError: errorMessage(
      "KESALAHAN_TIPE",
      "tipe tidak valid dalam operasi",
    ),
    __InitError: errorMessage(
      "KESALAHAN_INISIALISASI",
      "variabel belum diinisialisasi",
    ),
    __ReferenceError: errorMessage(
      "KESALAHAN_REFERENSI",
      "variabel, fungsi atau pustaka tidak ditemukan",
    ),
    __SyntaxError: errorMessage("KESALAHAN_SINTAKS", "kode tidak valid"),
    __RangeError: errorMessage(
      "KESALAHAN_RENTANG",
      "nilai di luar rentang yang diizinkan",
    ),
    __URIError: errorMessage(
      "KESALAHAN_URI",
      "URI salah bentuk atau tidak valid",
    ),
    __EvalError: errorMessage("KESALAHAN_EVAL", "kesalahan terkait eval"),
    __UNKNOWN_ERROR: errorMessage(
      "KESALAHAN_TIDAK_DIKENAL",
      "kesalahan yang sama sekali tidak dikenal",
    ),
  },

  example: {
    __array: [
      "makanan",
      "negara",
      "item",
      "tag",
      "warna",
      "produk",
      "pengguna",
      "kategori",
      "poin",
      "bahasa",
    ],
    __boolean: [
      "aktif",
      "dewasa",
      "terbuka",
      "terlihat",
      "punyaIzin",
      "sudahLogin",
      "diaktifkan",
      "selesai",
      "terverifikasi",
      "dihapus",
    ],
    __function: [
      "dapatkanNama",
      "dapatkanNilai",
      "daftar",
      "ambilData",
      "formatData",
      "parseInput",
      "validasiForm",
      "perbaruiItem",
      "perbaruiStatus",
      "hitungTotal",
    ],
    __number: [
      "usia",
      "tahun",
      "rataRata",
      "total",
      "harga",
      "indeks",
      "durasi",
      "jumlah",
      "poin",
      "waktu",
    ],
    __object: [
      "orang",
      "pengguna",
      "konfigurasi",
      "respons",
      "pembayaran",
      "pengaturan",
      "profil",
      "alamat",
      "metadata",
      "sesi",
    ],
    __string: [
      "nama",
      "judul",
      "deskripsi",
      "email",
      "kataSandi",
      "pesan",
      "label",
      "token",
      "url",
      "slug",
    ],
    __void: [
      "login",
      "mulai",
      "bersihkan",
      "reset",
      "hapus",
      "keluar",
      "bersihkanCache",
      "simpan",
      "kirimEmail",
      "masuk",
    ],
  },
}).grammar();
