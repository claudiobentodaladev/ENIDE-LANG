import { Language } from "../grammar.class.js";

export const emakhuwa = new Language({
  language: "emakhuwa",
  about:
    "ENIDE tiri nkalasetero ootaphuleeya onalipihererya opurokerama ni nttaava ni na nnene",
  include: {
    main: "Ohela",
    __description: "Ennivarela muteko ohela elugha wala ibiblioteka",
  },
  commands: {
    all: {
      __about: { main: "vooloca", __description: "waaca itthu sa ENIDE" },
      __help: {
        main: "nikhualihero",
        __description: "waaca nlenge na ikomanto sotheene",
      },
      __version: {
        main: "iversau",
        __description: "waaca iversau a ENIDE a ninaano",
      },
      __languages: {
        main: "malotta",
        __description: "waaca nlenge na malotta otheene",
      },
      __documentation: {
        main: "dokumentu",
        __description: "waaca dokumentu a nttaava",
      },
    },
  },
  library: {
    __math: {
      main: {
        main: "matematika",
        __description: "ovarela muteko duna sa matematika",
      },
      __pi: { main: "PI", __description: "waaca evalore a pi" },
      __sqrt: { main: "mothako", __description: "waaca mothako oolikana" },
      __pow: { main: "owerya", __description: "waaca owerya wa numero" },
      __round: { main: "oolelihererya", __description: "oolelihererya numero" },
      __random: { main: "woohasaka", __description: "waaca numero oohasaka" },
      __max: { main: "wuulupale", __description: "waaca evalore yuulupale" },
      __min: { main: "eyani", __description: "waaca evalore eyani" },
      __isNumber: {
        main: "ti_nambaru",
        __description: "otokosa nakhala evalore ti numero",
      },
      __isInteger: {
        main: "ti_kima",
        __description: "otokosa nakhala evalore ti inteiro",
      },
      __isFloat: {
        main: "ti_nambaru_mwayani",
        __description: "otokosa nakhala evalore ti desimal",
      },
    },
    __string: {
      main: {
        main: "moolumo",
        __description: "ovarela muteko duna sa opaka moolumo",
      },
      __length: { main: "orakama", __description: "waaca orakama wa moolumo" },
      __toUpperCase: {
        main: "mulepelo_muulupale",
        __description: "otatuxerya moolumo okhala muulupale",
      },
      __toLowerCase: {
        main: "mulepelo_mwayani",
        __description: "otatuxerya moolumo okhala mwayani",
      },
    },
    __date: {
      main: {
        main: "nihiku",
        __description: "ovarela muteko duna sa nihiku ni okathi",
      },
      __year: { main: "eyaakha", __description: "waaca eyaakha" },
      __month: { main: "mweeri", __description: "waaca mweeri" },
      __dayMonth: {
        main: "nihiku_na_mweeri",
        __description: "waaca nihiku na mweeri",
      },
      __dayWeek: {
        main: "nihiku_na_esumana",
        __description: "waaca nihiku na esumana",
      },
      __hour: { main: "iwoora", __description: "waaca iwoora" },
      __minute: { main: "minutu", __description: "waaca minutu" },
      __second: { main: "segundo", __description: "waaca segundo" },
    },
  },
  types: {
    __object: { main: "nthu", __description: "okhazimula nthu wa kudumala" },
    __number: {
      main: "numero",
      __description: "olaleya nivariyavili na numero",
    },
    __string: {
      main: "moolumo",
      __description: "olaleya nivariyavili na moolumo",
    },
    __boolean: {
      main: "bool",
      values: {
        __true: "Ekweekwee",
        __false: "Woothia",
      },
      __description: "olaleya nivariyavili na logika",
    },
  },
  methods: {
    method: {
      __print: { main: "olepa", __description: "ohelerya evalore va ekrã" },
      __scan: { main: "osoma", __description: "osoma evalore ya owerya" },
      __return: {
        main: "otthikixa",
        __description: "otthikixa evalore ya duna",
      },
    },
    sentences: {
      __function: { main: "duna", __description: "olaleya duna" },
      __if: { main: "nakhala", __description: "olaleya nreerelo" },
      __else: { main: "vakhala_voo", __description: "olaleya nreerelo nikina" },
      __while: { main: "okathi", __description: "olaleya laco ya okathi" },
      __for: { main: "ni", __description: "olaleya laco ya ni" },
      __switch: {
        main: "othanla",
        __description: "olaleya etrutura ya othanla",
      },
      __case: {
        main: "mwaha",
        __description: "olaleya mwaha mu etrutura ya othanla",
      },
      __default: {
        main: "nimalelo",
        __description: "olaleya mwaha wa nimalelo",
      },
      __try: {
        main: "weehererya",
        __description: "olaleya nikuu na weehererya",
      },
      __catch: {
        main: "ovara",
        __description: "olaleya nikuu na ovarela yowothea",
      },
      __finally: {
        main: "omaliherya",
        __description: "olaleya nikuu ninapaka itthu sotheene",
      },
    },
  },
  errors: {
    main: { tag: "YOWOTHEA", message: "Yowothea ya sistemu" },
    __UNKNOWN_ERROR: {
      tag: "YOWOTHEA_YOOHIA",
      message: "Yowothea yoohi suwanyeya",
    },
    __TypeError: {
      tag: "YOWOTHEA_YA_TIPO",
      message: "Tipo yoohireerela mu opaka",
    },
    __ReferenceError: {
      tag: "YOWOTHEA_YA_REFERENSIA",
      message: "Nivariyavili khiri vaavale",
    },
    __SyntaxError: {
      tag: "YOWOTHEA_YA_SINTAKSE",
      message: "Kodigu yoohireerela",
    },
    __RangeError: {
      tag: "YOWOTHEA_YA_INTERVALO",
      message: "Evalore tiri otheela mupuro oolikana",
    },
    __URIError: { tag: "YOWOTHEA_YA_URI", message: "URI yoohireerela" },
    __EvalError: {
      tag: "YOWOTHEA_YA_EVAL",
      message: "Yowothea vooloca ni eval",
    },
  },
}).grammar();
