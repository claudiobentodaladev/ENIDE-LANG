import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const emakhuwa = new Language({
  language: "emakhuwa",
  about:
    "ENIDE tiri nkalasetero ootaphuleeya onalipihererya opurokerama ni nttaava ni na nnene",

  include: DocStr(
    "Ohela",
    "ennivarela muteko ohela elugha wala ibiblioteka wala etrutura ya vaavale",
  ),

  commands: {
    __about: DocStr("vooloca", "waaca itthu sa ENIDE"),
    __help: DocStr("nikhualihero", "waaca nlenge na ikomanto sotheene"),
    __version: DocStr("iversau", "waaca iversau a ENIDE a ninaano"),
    __languages: DocStr("malotta", "waaca nlenge na malotta otheene"),
    __documentation: DocStr("dokumentu", "waaca dokumentu a nttaava"),
    __grammar: DocStr("elugha_emuteko", "waaca emuteko wa nttaava"),
  },

  library: {
    __standard: {
      main: DocStr("nimalelo", "ovarela muteko duna sa nimalelo"),
      __isarray: DocStr("ti_nlenge", "otokosa nakhala evalore ti nlenge"),
      __isobject: DocStr("ti_nthu", "otokosa nakhala evalore ti nthu"),
      __typeof: DocStr("tipo_yawe", "waaca tipo ya evalore"),
      __parse: DocStr(
        "Opantula",
        "otatuxerya evalore ya moolumo okhala tipo yake",
      ),
    },

    __math: {
      main: DocStr("matematika", "ovarela muteko duna sa matematika"),
      __pi: DocStr("PI", "waaca evalore a pi"),
      __sqrt: DocStr("mothako", "waaca mothako oolikana"),
      __pow: DocStr("owerya", "waaca owerya wa numero"),
      __round: DocStr("oolelihererya", "oolelihererya numero"),
      __random: DocStr("woohasaka", "waaca numero oohasaka"),
      __max: DocStr("wuulupale", "waaca evalore yuulupale"),
      __min: DocStr("eyani", "waaca evalore eyani"),
      __isNumber: DocStr("ti_nambaru", "otokosa nakhala evalore ti numero"),
      __isInteger: DocStr("ti_kima", "otokosa nakhala evalore ti inteiro"),
      __isFloat: DocStr(
        "ti_nambaru_mwayani",
        "otokosa nakhala evalore ti desimal",
      ),
      __cos: DocStr("Cos", "waaca cosseno wa okhoni mu radiano"),
      __sin: DocStr("Sin", "waaca seno wa okhoni mu radiano"),
      __tan: DocStr("Tan", "waaca tangente wa okhoni mu radiano"),
    },

    __string: {
      main: DocStr("moolumo", "ovarela muteko duna sa opaka moolumo"),
      __length: DocStr("orakama", "waaca orakama wa moolumo"),
      __toUpperCase: DocStr(
        "mulepelo_muulupale",
        "otatuxerya moolumo okhala muulupale",
      ),
      __toLowerCase: DocStr(
        "mulepelo_mwayani",
        "otatuxerya moolumo okhala mwayani",
      ),
      __include: DocStr(
        "Ohela_Vaavale",
        "otokosa nakhala moolumo ohela nimoolumo nikina",
      ),
      __repeat: DocStr("Othikixa_Tena", "othikixa moolumo mara enene"),
    },

    __date: {
      main: DocStr("nihiku", "ovarela muteko duna sa nihiku ni okathi"),
      __now: DocStr("Ninaano", "waaca nihiku ni okathi wa ninaano"),
      __year: DocStr("eyaakha", "waaca eyaakha"),
      __month: DocStr("mweeri", "waaca mweeri"),
      __dayMonth: DocStr("nihiku_na_mweeri", "waaca nihiku na mweeri"),
      __dayWeek: DocStr("nihiku_na_esumana", "waaca nihiku na esumana"),
      __hour: DocStr("iwoora", "waaca iwoora"),
      __minute: DocStr("minutu", "waaca minutu"),
      __second: DocStr("segundo", "waaca segundo"),
    },
  },

  types: {
    __number: DocStr("numero", "olaleya nivariyavili na numero"),
    __string: DocStr("moolumo", "olaleya nivariyavili na moolumo"),
    __boolean: DocStr("bool", "olaleya nivariyavili na logika"),
    __object: DocStr("nthu", "okhazimula nthu wa kudumala"),
    __void: DocStr("soowa", "olaleya duna yoothia evalore"),
    __array: DocStr("nlenge", "olaleya etrutura ya nlenge"),
  },

  specialValues: {
    __true: DocStr("Ekweekwee", "evalore ya logika ekweekwee"),
    __false: DocStr("Woothia", "evalore ya logika woothia"),
    __null: DocStr("Oohi", "okhalapo kwa evalore"),
  },

  words: {
    __new: DocStr("Wapya", "okhela nkalasetero wapya wa nikuu"),
    __this: DocStr("niwe", "ovarela muteko wa nivariyavili za nikuu"),
    __extends: DocStr(
      "ophandula",
      "olaleya nakhala nikuu ohela ya nikuu nikina",
    ),
  },

  accessModifiers: {
    __private: DocStr("osiri", "ovareerwa mu nikuu otheela"),
    __public: DocStr("wotheene", "ovareerwa vaavale votheene"),
    __protected: DocStr("olindwa", "ovareerwa mu nikuu ni nikuu yake"),
    __readonly: DocStr(
      "osoma_otheela",
      "evalore yolaleeywa mara imwene otheela",
    ),
    __static: DocStr("kudumala", "ya nikuu otheela si ya nkalasetero"),
  },

  methods: {
    method: {
      __print: DocStr("olepa", "ohelerya evalore va ekra"),
      __scan: DocStr("osoma", "osoma evalore ya owerya"),
      __return: DocStr("otthikixa", "otthikixa evalore ya duna"),
      __break: DocStr("omaliherya_laco", "ophika laco"),
      __continue: DocStr("oenderera", "okhuwa oenderera mu laco"),
    },

    sentences: {
      __function: DocStr("duna", "olaleya duna"),
      __if: DocStr("nakhala", "olaleya nreerelo"),
      __else: DocStr("vakhala_voo", "olaleya nreerelo nikina"),
      __while: DocStr("okathi", "olaleya laco ya okathi"),
      __for: DocStr("ni", "olaleya laco ya ni"),
      __switch: DocStr("othanla", "olaleya etrutura ya othanla"),
      __case: DocStr("mwaha", "olaleya mwaha mu etrutura ya othanla"),
      __default: DocStr(
        "nimalelo_waa",
        "olaleya mwaha wa nimalelo mu etrutura",
      ),
      __try: DocStr("weehererya", "olaleya nikuu na weehererya"),
      __catch: DocStr("ovara", "olaleya nikuu na ovarela yowothea"),
      __finally: DocStr("omaliherya", "olaleya nikuu ninapaka itthu sotheene"),
      __class: DocStr("nikuu", "olaleya nikuu"),
      __constructor: DocStr("omupa", "etrutura yolaleya nivariyavili mu nikuu"),
    },
  },

  errors: {
    __labels: errorLabel(
      "Moolumo",
      "Evalore",
      "Nivariyavili",
      "Itthu_Yawe",
      "Nthu",
      "Eyaathareerwa",
      "Eyavareerwa",
      "Othanla_Kudumala",
      "Nivariyavili_Ophiriwe",
      "Epaaphiro",
      "Sinal_Yoohireerela",
      "Omathero_Oovela",
      "Sinal",
      "Omaliherya_Yoohiterwa",
    ),
    main: errorMessage("YOWOTHEA", "yowothea ya sistemu"),
    __TypeError: errorMessage("YOWOTHEA_YA_TIPO", "tipo yoohireerela mu opaka"),
    __InitError: errorMessage(
      "YOWOTHEA_YA_OKHUMULA",
      "nivariyavili yoohikhumuleerwa",
    ),
    __ReferenceError: errorMessage(
      "YOWOTHEA_YA_REFERENSIA",
      "nivariyavili, duna wala ibiblioteka khiri vaavale",
    ),
    __SyntaxError: errorMessage("YOWOTHEA_YA_SINTAKSE", "kodigu yoohireerela"),
    __RangeError: errorMessage(
      "YOWOTHEA_YA_INTERVALO",
      "evalore tiri otheela mupuro oolikana",
    ),
    __URIError: errorMessage("YOWOTHEA_YA_URI", "URI yoohireerela"),
    __EvalError: errorMessage("YOWOTHEA_YA_EVAL", "yowothea vooloca ni eval"),
    __UNKNOWN_ERROR: errorMessage(
      "YOWOTHEA_YOOHIA",
      "yowothea yoohi suwanyeya",
    ),
  },

  example: {
    __array: [
      "ilyakwa",
      "inchi",
      "itthu",
      "etikheta",
      "rangi",
      "vipande",
      "ovalumi",
      "makategoria",
      "pointi",
      "malotta",
    ],
    __boolean: [
      "omwaha",
      "ti_mphaxe",
      "ti_musomo",
      "ti_wooneeka",
      "ena_ruhusa",
      "ti_ndongoyo",
      "ti_muthiwa",
      "ti_omaliwa",
      "ti_otokoswa",
      "ti_ofutwa",
    ],
    __function: [
      "waacaItta",
      "waacaEvalore",
      "opakaMhaka",
      "waacaVaavale",
      "ophakulaNihiku",
      "opantulaOwerya",
      "otokosaFomo",
      "ohelerya_Itthu",
      "ohaaromuOmwaha",
      "ovarangaJumlisha",
    ],
    __number: [
      "makore",
      "eyaakha",
      "olevo",
      "jumlisha",
      "naraha",
      "nomboro",
      "okathi",
      "olevela",
      "pointi",
      "wakhati",
    ],
    __object: [
      "mwanaadamu",
      "movalumi",
      "mipangilio",
      "ijibu",
      "malipo",
      "mipangilio_yawe",
      "profaili",
      "anuani",
      "vaavale_vake",
      "okathi_wawe",
    ],
    __string: [
      "itta",
      "omuteko",
      "ophakulera",
      "email",
      "nenosiri",
      "moolumo",
      "etiketa",
      "token",
      "url",
      "slug",
    ],
    __void: [
      "ondongoyo",
      "okhumula",
      "osaniya",
      "orejesha",
      "ofuta",
      "ophika",
      "osaniya_cache",
      "omara_DB",
      "otuma_email",
      "oandika_mhaka",
    ],
  },
}).grammar();
