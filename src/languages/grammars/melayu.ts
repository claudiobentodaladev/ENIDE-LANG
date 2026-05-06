import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const melayu = new Language({
  language: "melayu",
  about:
    "ENIDE ialah transpiler boleh terjemah yang membolehkan pengaturcaraan dalam mana-mana bahasa",

  include: DocStr(
    "termasuk",
    "digunakan untuk memasukkan bahasa, perpustakaan, atau modul daripada fail lain",
  ),

  commands: {
    __about: DocStr("tentang", "mendapatkan maklumat mengenai sistem ENIDE"),
    __help: DocStr(
      "bantuan",
      "senarai semua arahan yang tersedia dalam sistem",
    ),
    __version: DocStr("versi", "mendapatkan versi semasa ENIDE"),
    __languages: DocStr("bahasa", "senarai semua bahasa yang disokong"),
    __documentation: DocStr("dokumentasi", "mendapatkan manual rujukan bahasa"),
    __grammar: DocStr("tatabahasa", "mendapatkan definisi tatabahasa bahasa"),
  },

  library: {
    __standard: {
      main: DocStr("standard", "akses kepada kaedah standard sistem"),
      __isarray: DocStr(
        "ialah_tatausunan",
        "memeriksa jika nilai ialah tatausunan (array)",
      ),
      __isobject: DocStr("ialah_objek", "memeriksa jika nilai ialah objek"),
      __typeof: DocStr("Jenis", "mendapatkan jenis bagi sesuatu nilai"),
      __parse: DocStr("Hurai", "menukar teks kepada jenis data yang sesuai"),
    },
    __math: {
      main: DocStr("matematik", "akses kepada fungsi pengiraan matematik"),
      __pi: DocStr("PI", "mendapatkan nilai pemalar Pi"),
      __sqrt: DocStr("Punca", "mendapatkan punca kuasa dua nombor"),
      __pow: DocStr("Kuasa", "mengira kuasa bagi sesuatu nombor"),
      __round: DocStr("Bundar", "membundarkan nombor kepada integer terdekat"),
      __random: DocStr("Rawak", "menjana nombor rawak"),
      __max: DocStr("Maksimum", "mendapatkan nilai terbesar dalam set"),
      __min: DocStr("Minimum", "mendapatkan nilai terkecil dalam set"),
      __isNumber: DocStr("IalahNombor", "memeriksa jika nilai ialah nombor"),
      __isInteger: DocStr(
        "IalahInteger",
        "memeriksa jika nilai ialah nombor bulat",
      ),
      __isFloat: DocStr(
        "IalahPerpuluhan",
        "memeriksa jika nilai ialah nombor perpuluhan",
      ),
      __cos: DocStr("Kos", "mendapatkan kosinus bagi nombor"),
      __sin: DocStr("Sin", "mendapatkan sinus bagi nombor"),
      __tan: DocStr("Tan", "mendapatkan tangen bagi nombor"),
    },

    __string: {
      main: DocStr("teks", "akses kepada fungsi manipulasi teks"),
      __length: DocStr("Panjang", "mendapatkan jumlah aksara dalam teks"),
      __toUpperCase: DocStr(
        "HurufBesar",
        "menukar teks kepada huruf besar sepenuhnya",
      ),
      __toLowerCase: DocStr(
        "HurufKecil",
        "menukar teks kepada huruf kecil sepenuhnya",
      ),
      __include: DocStr(
        "Mengandungi",
        "memeriksa jika teks mengandungi subteks",
      ),
      __repeat: DocStr("Ulang", "mengulang teks mengikut bilangan tertentu"),
    },

    __date: {
      main: DocStr("tarikh", "akses kepada fungsi tarikh dan masa"),
      __now: DocStr("Sekarang", "mendapatkan tarikh dan masa semasa"),
      __year: DocStr("Tahun", "mendapatkan tahun"),
      __month: DocStr("Bulan", "mendapatkan bulan"),
      __dayMonth: DocStr("HariBulan", "mendapatkan hari dalam bulan"),
      __dayWeek: DocStr("HariMinggu", "mendapatkan hari dalam minggu"),
      __hour: DocStr("Jam", "mendapatkan jam"),
      __minute: DocStr("Minit", "mendapatkan minit"),
      __second: DocStr("Saat", "mendapatkan saat"),
    },
  },

  types: {
    __number: DocStr("nombor", "isytihar pemboleh ubah jenis nombor"),
    __string: DocStr("teks", "isytihar pemboleh ubah jenis teks"),
    __boolean: DocStr("bool", "isytihar pemboleh ubah jenis logik"),
    __object: DocStr("objek", "isytihar struktur objek statik"),
    __void: DocStr("kosong", "fungsi yang tidak memulangkan sebarang nilai"),
    __array: DocStr("tatausunan", "isytihar struktur senarai tatausunan"),
  },

  specialValues: {
    __true: DocStr("benar", "nilai logik benar"),
    __false: DocStr("salah", "nilai logik salah"),
    __null: DocStr("null", "ketiadaan nilai"),
  },

  words: {
    __new: DocStr("baru", "mencipta contoh baharu bagi kelas"),
    __this: DocStr("ini", "merujuk kepada contoh kelas semasa"),
    __extends: DocStr("mewarisi", "isytihar bahawa kelas mewarisi kelas lain"),
  },

  accessModifiers: {
    __private: DocStr("peribadi", "hanya boleh diakses dalam kelas yang sama"),
    __public: DocStr("awam", "boleh diakses dari mana-mana sahaja"),
    __protected: DocStr("dilindungi", "boleh diakses dalam kelas dan warisnya"),
    __readonly: DocStr(
      "baca_sahaja",
      "nilai yang tidak boleh diubah selepas diisytihar",
    ),
    __static: DocStr("statik", "milik kelas itu sendiri, bukan contoh kelas"),
  },

  methods: {
    method: {
      __print: DocStr("cetak", "memaparkan nilai ke skrin"),
      __scan: DocStr("baca", "membaca input daripada pengguna"),
      __return: DocStr("pulangkan", "memulangkan nilai daripada fungsi"),
      __break: DocStr("henti", "keluar daripada gelung atau blok"),
      __continue: DocStr(
        "teruskan",
        "melompat ke lelaran seterusnya dalam gelung",
      ),
    },

    sentences: {
      __function: DocStr("fungsi", "mengisytiharkan fungsi baharu"),
      __if: DocStr("jika", "mengisytiharkan blok syarat"),
      __else: DocStr("lain", "blok alternatif jika syarat tidak dipenuhi"),
      __while: DocStr("selagi", "gelung berdasarkan syarat"),
      __for: DocStr("untuk", "gelung berdasarkan pembilang"),
      __switch: DocStr("pilih", "struktur pilihan pelbagai"),
      __case: DocStr("kes", "isytihar kes dalam struktur pilih"),
      __default: DocStr("lalai", "kes jika tiada padanan ditemui"),
      __try: DocStr("cuba", "memulakan pengendalian ralat"),
      __catch: DocStr("tangkap", "mengendalikan ralat yang berlaku"),
      __finally: DocStr("akhirnya", "blok yang sentiasa dilaksanakan"),
      __class: DocStr("kelas", "mengisytiharkan kelas baharu"),
      __constructor: DocStr(
        "pembina",
        "fungsi yang membina contoh kelas baharu",
      ),
    },
  },

  errors: {
    __labels: errorLabel(
      "Mesej",
      "Nilai",
      "Pembolehubah",
      "Ciri",
      "Objek",
      "Dijangka",
      "Diterima",
      "Tugasan pemalar",
      "Parameter bertindih",
      "Petunjuk",
      "Token tidak sah",
      "Limpahan tindanan",
      "Token",
      "Akhir input tidak dijangka",
    ),
    main: errorMessage("RALAT", "ralat sistem umum"),
    __TypeError: errorMessage(
      "RALAT_JENIS",
      "jenis data tidak sah dalam operasi",
    ),
    __InitError: errorMessage(
      "RALAT_AWALAN",
      "pemboleh ubah tidak dimulakan dengan betul",
    ),
    __ReferenceError: errorMessage(
      "RALAT_RUJUKAN",
      "pemboleh ubah atau fungsi tidak wujud",
    ),
    __SyntaxError: errorMessage(
      "RALAT_SINTAKS",
      "kesalahan dalam penulisan kod",
    ),
    __RangeError: errorMessage(
      "RALAT_JULAT",
      "nilai berada di luar julat yang dibenarkan",
    ),
    __URIError: errorMessage("RALAT_URI", "format URI tidak sah"),
    __EvalError: errorMessage("RALAT_EVAL", "ralat dalam fungsi eval"),
    __UNKNOWN_ERROR: errorMessage(
      "RALAT_TIDAK_DIKETAHUI",
      "ralat yang tidak dapat dikenal pasti berlaku",
    ),
  },

  example: {
    __array: [
      "makanan",
      "negara",
      "senarai_nama",
      "markah",
      "warna",
      "produk",
      "pengguna",
      "kategori",
      "titik",
      "bahasa",
    ],
    __boolean: [
      "status",
      "ialah_aktif",
      "boleh_guna",
      "nampak_ke",
      "dibenarkan",
      "sudah_logmasuk",
      "sedang_jalan",
      "siap",
      "disahkan",
      "dipadam",
    ],
    __function: [
      "ambilNama",
      "kiraJumlah",
      "senaraikanData",
      "kemaskiniProfil",
      "formatTeks",
      "analisisKod",
      "sahkanInput",
      "simpanFail",
      "hantarEropah",
      "ringkaskan",
    ],
    __number: [
      "umur",
      "tahun_lahir",
      "purata",
      "jumlah",
      "harga",
      "indeks",
      "tempoh",
      "kuantiti",
      "skor",
      "masa",
    ],
    __object: [
      "orang",
      "pelanggan",
      "tetapan",
      "respon",
      "pembayaran",
      "konfigurasi",
      "profil",
      "alamat",
      "metadata",
      "sesi",
    ],
    __string: [
      "nama",
      "tajuk",
      "penerangan",
      "emel",
      "kata_laluan",
      "mesej",
      "label",
      "kunci",
      "url",
      "pautan",
    ],
    __void: [
      "mula",
      "padam",
      "berhenti",
      "tetap_semula",
      "musnahkan",
      "keluar",
      "cuci_cache",
      "simpan_semua",
      "hantar",
      "log_masuk",
    ],
  },
}).grammar();
