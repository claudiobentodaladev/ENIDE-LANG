import { Language } from "../grammar.class.js";

export const amharic = new Language({
  language: "amharic",
  about:
    "ENIDE bemananyawum quanquwa prwgiram lemadreg yemiyachil transpiler new",
  include: {
    main: "Makatet",
    __description: "Qwanqwawochin weyim béta-matsahiftin lémakatet yagelyilal",
  },
  commands: {
    all: {
      __about: { main: "sile", __description: "sile ENIDE merja lemagnet" },
      __help: { main: "erdata", __description: "ye_ajaj_zerzer_lemayet" },
      __version: {
        main: "vershen",
        __description: "ye_ENIDE_vershen_lemayet",
      },
      __languages: {
        main: "quanquwaoch",
        __description: "ye_quanquwaoch_zerzer",
      },
      __documentation: {
        main: "dawkumenteshen",
        __description: "ye_quanquwa_merja",
      },
    },
  },
  library: {
    __math: {
      main: { main: "hisab", __description: "ye_hisab_shirawoch" },
      __pi: { main: "PI", __description: "ye_pi_waga" },
      __sqrt: { main: "skwer_rut", __description: "ye_skwer_rut_lemagnet" },
      __pow: { main: "pawer", __description: "ye_qutir_pawer" },
      __round: { main: "rawwund", __description: "qutir_lemamulat" },
      __random: { main: "randam", __description: "yetasaba_qutir" },
      __max: { main: "tilaq", __description: "ka_hulu_tilaq" },
      __min: { main: "tinnish", __description: "ka_hulu_tinnish" },
      __isNumber: {
        main: "qutir_new",
        __description: "qutir_mehonun_lemaregaget",
      },
      __isInteger: { main: "mulu_qutir", __description: "mulu_qutir_mehonun" },
      __isFloat: { main: "desimal_new", __description: "desimal_mehonun" },
    },
    __string: {
      main: { main: "qalt", __description: "ye_qalt_shirawoch" },
      __length: { main: "rizmet", __description: "ye_qalt_rizmet" },
      __toUpperCase: {
        main: "tilaq_fidel",
        __description: "wed_tilaq_fidel_lemalewet",
      },
      __toLowerCase: {
        main: "tinnish_fidel",
        __description: "wed_tinnish_fidel_lemalewet",
      },
    },
    __date: {
      main: { main: "qen", __description: "ye_qen_inna_saat" },
      __year: { main: "amet", __description: "amet_lemagnet" },
      __month: { main: "wer", __description: "wer_lemagnet" },
      __dayMonth: { main: "yewer_qen", __description: "yewer_qen_lemagnet" },
      __dayWeek: { main: "yessammint_qen", __description: "yessammint_qen" },
      __hour: { main: "saat", __description: "saat_lemagnet" },
      __minute: { main: "deqiqa", __description: "deqiqa_lemagnet" },
      __second: { main: "sekond", __description: "sekond_lemagnet" },
    },
  },
  types: {
    __object: { main: "neger", __description: "yemayitakakel neger lamisasel" },
    __number: { main: "qutir", __description: "ye_qutir_aynet" },
    __string: { main: "qalt", __description: "ye_qalt_aynet" },
    __boolean: {
      main: "ewunet_hetet",
      values: {
        __true: "Ewnet",
        __false: "Haset",
      },
      __description: "ye_ewunet_hetet_aynet",
    },
  },
  methods: {
    method: {
      __print: { main: "atim", __description: "merja_lemassayet" },
      __scan: { main: "anbib", __description: "merja_lemanbebt" },
      __return: { main: "mellis", __description: "waga_lememelles" },
    },
    sentences: {
      __function: { main: "tighbar", __description: "tighbar_lememessret" },
      __if: { main: "kama", __description: "huneta_lemamlket" },
      __else: { main: "kalehoni", __description: "le_huneta_meleyet" },
      __while: { main: "iskihon", __description: "lemeziget" },
      __for: { main: "le", __description: "le_meziget" },
      __switch: { main: "mircha", __description: "le_mircha" },
      __case: { main: "huneta", __description: "ye_mircha_aynet" },
      __default: { main: "idile", __description: "idile_huneta" },
      __try: { main: "mokkir", __description: "lememokker" },
      __catch: { main: "yay", __description: "sihitet_lemeyaz" },
      __finally: { main: "mecherrasha", __description: "bemecherrasha" },
    },
  },
  errors: {
    main: { tag: "SIHITET", message: "ye_sistem_sihitet" },
    __UNKNOWN_ERROR: { tag: "YALETAWWEQE", message: "yaletawweqe_sihitet" },
    __TypeError: {
      tag: "YE_AYNET_SIHITET",
      message: "aynetu_le_shiraw_ayihonim",
    },
    __ReferenceError: { tag: "YE_MARJI_SIHITET", message: "variable_yelem" },
    __SyntaxError: { tag: "YE_SINTAKS_SIHITET", message: "ye_tsihuf_sihitet" },
    __RangeError: { tag: "YE_WESSEN_SIHITET", message: "bewessen_wichi_new" },
    __URIError: { tag: "YE_URI_SIHITET", message: "URI_sihitet" },
    __EvalError: { tag: "YE_EVAL_SIHITET", message: "eval_sihitet" },
  },
}).grammar();
