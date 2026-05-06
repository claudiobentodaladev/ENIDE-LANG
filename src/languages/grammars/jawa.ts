import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const jawa = new Language({
  language: "jawa",
  about:
    "ENIDE iku transpiler sing bisa diterjemahake kang ngidini pemrograman ing basa apa wae",

  include: DocStr(
    "Nglebokake",
    "Digunakake kanggo nglebokake basa, perpustakaan, utawa struktur saka file liyane"
  ),

  commands: {
    __about: DocStr("bab", "kanggo ngerti informasi bab ENIDE"),
    __help: DocStr("tulung", "kanggo ngerti dhaftar kabeh perintah sing kasedhiya"),
    __version: DocStr("versi", "kanggo ngerti versi ENIDE saiki"),
    __languages: DocStr("basa", "kanggo ngerti dhaftar kabeh basa sing kasedhiya"),
    __documentation: DocStr("dok", "kanggo ngerti dokumentasi sawijining basa"),
    __grammar: DocStr("gramatika", "kanggo ngerti gramatika sawijining basa"),
  },

  library: {
    __standard: {
      main: DocStr("standar", "kanggo ngakses metode standar sing migunani"),
      __isarray: DocStr("IkuArray", "kanggo mriksa apa nilai iku array"),
      __isobject: DocStr("IkuObyek", "kanggo mriksa apa nilai iku obyek"),
      __typeof: DocStr("Jenis", "kanggo ngerti jenis saka nilai"),
      __parse: DocStr("Parse", "kanggo ngowahi teks dadi nilai sing bener"),
    },
    __math: {
      main: DocStr("matematika", "kanggo ngakses fungsi matematika"),
      __pi: DocStr("PI", "kanggo ngerti nilai pi"),
      __sqrt: DocStr("AkarKuadrat", "kanggo ngerti akar kuadrat"),
      __pow: DocStr("Pangkat", "kanggo ngerti pangkat sawijining angka"),
      __round: DocStr("Bunderke", "kanggo mbunderke angka"),
      __random: DocStr("Acak", "kanggo ngerti angka acak"),
      __max: DocStr("PalingGedhe", "kanggo ngerti nilai paling gedhe"),
      __min: DocStr("PalingCilik", "kanggo ngerti nilai paling cilik"),
      __isNumber: DocStr("IkuAngka", "kanggo mriksa apa nilai iku angka"),
      __isInteger: DocStr("IkuBulat", "kanggo mriksa apa nilai iku angka bulat"),
      __isFloat: DocStr("IkuDesimal", "kanggo mriksa apa nilai iku angka desimal"),
      __cos: DocStr("Cos", "kanggo ngerti cosinus sudut"),
      __sin: DocStr("Sin", "kanggo ngerti sinus sudut"),
      __tan: DocStr("Tan", "kanggo ngerti tangen sudut"),
    },

    __string: {
      main: DocStr("tulisan", "kanggo ngakses fungsi manipulasi teks"),
      __length: DocStr("Dawane", "kanggo ngerti dawane teks"),
      __toUpperCase: DocStr("DadiBesar", "kanggo ngowahi teks dadi huruf gedhe"),
      __toLowerCase: DocStr("DadiCilik", "kanggo ngowahi teks dadi huruf cilik"),
      __include: DocStr("Ngandhut", "kanggo mriksa apa teks ngandhut substring"),
      __repeat: DocStr("Baleni", "kanggo mbaleni teks kaping pirang-pirang"),
    },

    __date: {
      main: DocStr("tanggal", "kanggo ngakses fungsi tanggal lan wektu"),
      __now: DocStr("Saiki", "kanggo ngerti tanggal lan wektu saiki"),
      __year: DocStr("Taun", "kanggo ngerti taun"),
      __month: DocStr("Sasi", "kanggo ngerti sasi"),
      __dayMonth: DocStr("DinaIngSasi", "kanggo ngerti dina ing sasi"),
      __dayWeek: DocStr("DinaIngPekanan", "kanggo ngerti dina ing pekanan"),
      __hour: DocStr("Jam", "kanggo ngerti jam"),
      __minute: DocStr("Menit", "kanggo ngerti menit"),
      __second: DocStr("Detik", "kanggo ngerti detik"),
    },
  },

  types: {
    __number: DocStr("angka", "kanggo ngumumake variabel jenis angka"),
    __string: DocStr("teks", "kanggo ngumumake variabel jenis teks"),
    __boolean: DocStr("bool", "kanggo ngumumake variabel jenis bool"),
    __object: DocStr("obyek", "kanggo ngumumake obyek statis"),
    __void: DocStr("kosong", "kanggo fungsi sing ora ngasilake nilai"),
    __array: DocStr("array", "kanggo ngumumake struktur array"),
  },

  specialValues: {
    __true: DocStr("Bener", "nilai boolean bener"),
    __false: DocStr("Salah", "nilai boolean salah"),
    __null: DocStr("Null", "ora ana nilai"),
  },

  words: {
    __new: DocStr("anyar", "kanggo nggawe instance anyar saka kelas"),
    __this: DocStr("iki", "kanggo ngakses properti kelas dhewe"),
    __extends: DocStr("ngwaris", "kanggo ngumumake kelas sing ngwaris saka liyane"),
  },

  accessModifiers: {
    __private: DocStr("pribadi", "mung bisa diakses ing jero kelas"),
    __public: DocStr("umum", "bisa diakses saka ngendi wae"),
    __protected: DocStr("dilindungi", "bisa diakses ing kelas lan subkelas"),
    __readonly: DocStr("macaMung", "nilai mung bisa diwenehi sepisan"),
    __static: DocStr("statis", "milik kelas, dudu instance"),
  },

  methods: {
    method: {
      __print: DocStr("cithak", "kanggo nyithak nilai ing layar"),
      __scan: DocStr("waca", "kanggo maca nilai saka input"),
      __return: DocStr("balekake", "kanggo mbalekake nilai saka fungsi"),
      __break: DocStr("mandek", "kanggo mandek ing perulangan"),
      __continue: DocStr("terus", "kanggo nerusake menyang iterasi sabanjure"),
    },

    sentences: {
      __function: DocStr("fungsi", "kanggo ngumumake fungsi"),
      __if: DocStr("yen", "kanggo ngumumake kondisi"),
      __else: DocStr("liyane", "kanggo ngumumake kondisi alternatif"),
      __while: DocStr("nalika", "kanggo ngumumake perulangan nalika"),
      __for: DocStr("kanggo", "kanggo ngumumake perulangan kanggo"),
      __switch: DocStr("pilih", "kanggo ngumumake struktur pilihan"),
      __case: DocStr("kasus", "kanggo ngumumake kasus"),
      __default: DocStr("gawan", "yen ora ana kasus sing cocog"),
      __try: DocStr("nyoba", "kanggo ngumumake blok nyoba"),
      __catch: DocStr("cekel", "kanggo ngumumake blok penanganan kesalahan"),
      __finally: DocStr("pungkasane", "blok sing tansah dijalankan"),
      __class: DocStr("kelas", "kanggo ngumumake kelas"),
      __constructor: DocStr("konstruktor", "struktur kanggo ngumumake properti ing kelas"),
    },
  },

  errors: {
    __labels: errorLabel(
      "Pesan",
      "Nilai",
      "Variabel",
      "Properti",
      "Obyek",
      "Dikarepake",
      "Ditampa",
      "Penugasan Konstan",
      "Parameter Duplikat",
      "Petunjuk",
      "Token Ora Valid",
      "Stack Overflow",
      "Token",
      "Pungkasan Input Ora Kaduga"
    ),
    main: errorMessage("KESALAHAN", "kesalahan sistem umum"),
    __TypeError: errorMessage("KESALAHAN_JENIS", "jenis ora valid ing operasi"),
    __InitError: errorMessage("KESALAHAN_INISIALISASI", "variabel durung diinisialisasi"),
    __ReferenceError: errorMessage("KESALAHAN_REFERENSI", "variabel, fungsi utawa perpustakaan ora ditemokake"),
    __SyntaxError: errorMessage("KESALAHAN_SINTAKS", "kode ora valid"),
    __RangeError: errorMessage("KESALAHAN_RENTANG", "nilai ing njaba rentang sing diidini"),
    __URIError: errorMessage("KESALAHAN_URI", "URI salah wujud utawa ora valid"),
    __EvalError: errorMessage("KESALAHAN_EVAL", "kesalahan sing gegandhengan karo eval"),
    __UNKNOWN_ERROR: errorMessage("KESALAHAN_ORA_DIKENAL", "kesalahan kang ora dikenal babar pisan"),
  },

  example: {
    __array: [
      "pangan",
      "negara",
      "barang",
      "tag",
      "warna",
      "produk",
      "panganggo",
      "kategori",
      "poin",
      "basa"
    ],
    __boolean: [
      "aktif",
      "dewasa",
      "terbuka",
      " katon",
      "duweIjin",
      "wisLogin",
      "diaktifake",
      "rampung",
      "diverifikasi",
      "dibusak"
    ],
    __function: [
      "entukJeneng",
      "entukNilai",
      "daftar",
      "jupukData",
      "formatData",
      "parseInput",
      "validasiForm",
      "anyariBarang",
      "anyariStatus",
      "itungTotal"
    ],
    __number: [
      "umur",
      "taun",
      "rataRata",
      "total",
      "rega",
      "indeks",
      "durasi",
      "jumlah",
      "poin",
      "wektu"
    ],
    __object: [
      "wong",
      "panganggo",
      "konfigurasi",
      "jawaban",
      "pembayaran",
      "pengaturan",
      "profil",
      "alamat",
      "metadata",
      "sesi"
    ],
    __string: [
      "jeneng",
      "judul",
      "katrangan",
      "email",
      "sandhi",
      "pesen",
      "label",
      "token",
      "url",
      "slug"
    ],
    __void: [
      "login",
      "wiwiti",
      "resiki",
      "reset",
      "rusak",
      "logout",
      "resikiCache",
      "simpen",
      "kirimEmail",
      "mlebu"
    ],
  },
}).grammar();