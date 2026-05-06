import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const shona = new Language({
  language: "shona",
  about:
    "ENIDE chirongwa chinobvumira kushandura makodhi uye kuprograma mumitauro yakasiyana",

  include: DocStr(
    "batanidza",
    "inoshandiswa kubatanidza mitauro, maraibhurari kana mamodule ekunze",
  ),

  commands: {
    __about: DocStr("nezve", "kuwana ruzivo nezve chirongwa che ENIDE"),
    __help: DocStr("rubatsiro", "kuratidza mirairo yose iripo mu ENIDE"),
    __version: DocStr("shanduro", "kuratidza shanduro iripo ye ENIDE"),
    __languages: DocStr(
      "mitauro",
      "kuratidza mitauro yose inotsigirwa ne ENIDE",
    ),
    __documentation: DocStr(
      "gwaro",
      "kuratidza gwaro rekushandisa mutauro uyu",
    ),
    __grammar: DocStr("grama", "mitemo yomanyorerwo emutauro uyu"),
  },

  library: {
    __standard: {
      main: DocStr("yakajairika", "kuwana mabasa ekutanga ehurongwa"),
      __isarray: DocStr(
        "inhungamiro",
        "kuona kana kukosha kuri nhengo dzerondedzero",
      ),
      __isobject: DocStr(
        "ichinhu",
        "kuona kana kukosha kuri chinhu chakarongeka",
      ),
      __typeof: DocStr("mhando_ye", "kudzora mhando yedata riri muchinhu"),
      __parse: DocStr(
        "ongorora",
        "kushandura mameseji kuita mhando yedata kwayo",
      ),
    },
    __math: {
      main: DocStr("masvomhu", "mabasa emasvomhu nezvinhu zvisingachinji"),
      __pi: DocStr("PI", "kukosha kwechisingachinji chinonzi Pi"),
      __sqrt: DocStr("mudzi", "kuziva mudzi weskweya wenhamba"),
      __pow: DocStr("simba", "kusimudza nhamba kusimba rakati"),
      __round: DocStr(
        "tenderedza",
        "kutenderedza nhamba kusvika pane iri pedyo",
      ),
      __random: DocStr("zvakasarudzwa", "kugadzira nhamba isina kurongeka"),
      __max: DocStr("huru", "kudzora nhamba huru pane dzapihwa"),
      __min: DocStr("diki", "kudzora nhamba diki pane dzapihwa"),
      __isNumber: DocStr("inhamba", "kuona kana kukosha kuri nhamba"),
      __isInteger: DocStr("inhambaYose", "kuona kana nhamba iri yose"),
      __isFloat: DocStr("inedesimali", "kuona kana nhamba ine desimali"),
      __cos: DocStr("kosi", "kuziva cosine"),
      __sin: DocStr("sini", "kuziva sine"),
      __tan: DocStr("tani", "kuziva tangent"),
    },

    __string: {
      main: DocStr("chinyorwa", "mabasa ekushanda nemashoko nemavara"),
      __length: DocStr("kureba", "kudzora urefu hwechinyorwa"),
      __toUpperCase: DocStr("mavaraMakuru", "kushandura mavara kuita makuru"),
      __toLowerCase: DocStr("mavaraMadiki", "kushandura mavara kuita madiki"),
      __include: DocStr(
        "ine_mo",
        "kuona kana chinyorwa chine rimwe shoko mukati",
      ),
      __repeat: DocStr("dzokorora", "kudzokorora chinyorwa kashoma"),
    },

    __date: {
      main: DocStr("nguva", "mabasa enguva nemazuva"),
      __now: DocStr("izvozvi", "nguva nezuva ranhasi"),
      __year: DocStr("gore", "kuwana gore"),
      __month: DocStr("mwedzi", "kuwana mwedzi"),
      __dayMonth: DocStr("zuva_mwedzi", "zuva remwedzi"),
      __dayWeek: DocStr("zuva_vhiki", "zuva revhiki"),
      __hour: DocStr("awa", "kuwana awa"),
      __minute: DocStr("maminitsi", "kuwana maminitsi"),
      __second: DocStr("sekondi", "kuwana sekondi"),
    },
  },

  types: {
    __number: DocStr("nhamba", "kutsanangura nhamba"),
    __string: DocStr("chinyorwa", "kutsanangura mavara nemashoko"),
    __boolean: DocStr("chokwadiNhema", "kutsanangura chokwadi kana nhema"),
    __object: DocStr("chinhu", "kutsanangura chinhu chakarongeka"),
    __void: DocStr("isina", "kurudziro yekuti hapana chinodzorwa"),
    __array: DocStr("nhungamiro", "kutsanangura rondedzero yezvinhu"),
  },

  specialValues: {
    __true: DocStr("chokwadi", "kukosha kwechokwadi"),
    __false: DocStr("nhema", "kukosha kwenhema"),
    __null: DocStr("hapana", "kushaikwa kwekukosha"),
  },

  words: {
    __new: DocStr("itsva", "kugadzira chinhu chitsva kubva mukirasi"),
    __this: DocStr("ichi", "kunongedzera kuchinhu chiripo iye zvino"),
    __extends: DocStr("inowedzera", "kushandisa nhaka kubva kune imwe kirasi"),
  },

  accessModifiers: {
    __private: DocStr("pachivande", "inowanikwa mukati mekurasii chete"),
    __public: DocStr("pachena", "inowanikwa kwese kwese"),
    __protected: DocStr("yakachengetedzwa", "inowanikwa mukirasi nevana vayo"),
    __readonly: DocStr("kuverenga_chete", "kukosha hakugoni kuchinjwa"),
    __static: DocStr("isingazununguki", "ndeye kirasi, kwete yechinhu chimwe"),
  },

  methods: {
    method: {
      __print: DocStr("dhinda", "kuratidza pachiratidziri"),
      __scan: DocStr("verenga", "kutora input kubva kumushandisi"),
      __return: DocStr("dzorera", "kudzosa kukosha kubva mubasa"),
      __break: DocStr("mira", "kumira kuitwa kwe loop pakarepo"),
      __continue: DocStr("enderera", "kuenda kune imwe nhanho ye loop"),
    },

    sentences: {
      __function: DocStr("basa", "kugadzira basa idzva"),
      __if: DocStr("kana", "kutarisa mamiriro"),
      __else: DocStr("zvimwe", "nzira kana mamiriro asiri echokwadi"),
      __while: DocStr("apo", "loop inomhanya kana mamiriro ari echokwadi"),
      __for: DocStr("kune", "loop ine kuverenga kwakatarwa"),
      __switch: DocStr("sarudza", "sarudzo pakati pezvakawanda"),
      __case: DocStr("nyaya", "nyaya imwe chete musarudzo"),
      __default: DocStr("yakajairika", "kana pasina nyaya yabatwa"),
      __try: DocStr("edza", "kuyedza kumhanyisa kodhi"),
      __catch: DocStr("bata", "kubata zvikanganiso zvamuka"),
      __finally: DocStr("pakupedzisira", "kodhi inomhanya nguva dzose"),
      __class: DocStr("kirasi", "kugadzira kirasi idzva"),
      __constructor: DocStr("muvaki", "basa rekugadzira chinhu chekirasi"),
    },
  },

  errors: {
    __labels: errorLabel(
      "Mharidzo",
      "Kukosha",
      "Chinhu",
      "Pfuma",
      "ChinhuChakarongeka",
      "Zvaishuvewa",
      "Zvawanikwa",
      "Kupa_kukosha_kuchisingachinji",
      "Zita_rakadzokororwa",
      "Zano",
      "Tocheni_isiri_iyo",
      "Staka_remerwa",
      "Tocheni",
      "Input_yapera_zvisizvo",
    ),
    main: errorMessage(
      "KUKANGANISA",
      "kukanganisa kwehurongwa hwechimbichimbi",
    ),
    __TypeError: errorMessage(
      "KUKANGANISA_MHANDO",
      "mhando yedata isiri iyo pakushanda",
    ),
    __InitError: errorMessage(
      "KUKANGANISA_INIT",
      "chinhu hachina kugadzirwa zvakanaka",
    ),
    __ReferenceError: errorMessage(
      "KUKANGANISA_REF",
      "kunongedzera kuchinhu chisipo",
    ),
    __SyntaxError: errorMessage(
      "KUKANGANISA_SYNTAX",
      "manyorerwo ekodhi asiri aya",
    ),
    __RangeError: errorMessage(
      "KUKANGANISA_RANGE",
      "nhamba iri kunze kwemiganhu inotenderwa",
    ),
    __URIError: errorMessage("KUKANGANISA_URI", "mamiriro e URI asiri iwo"),
    __EvalError: errorMessage("KUKANGANISA_EVAL", "kukanganisa mubasa re eval"),
    __UNKNOWN_ERROR: errorMessage(
      "KUKANGANISA_KUSAZIVIKWA",
      "kukanganisa kusingazivikanwi kwaitika",
    ),
  },

  example: {
    __array: [
      "kudya",
      "nyika",
      "mazita",
      "nhamba",
      "mavara",
      "zvinhu",
      "vashandisi",
      "mupanda",
      "zvibodzwa",
      "mitauro",
    ],
    __boolean: [
      "mamiriro",
      "iri_kushanda",
      "inobvumirwa",
      "yapera",
      "mvumo",
      "pa_indaneti",
      "munzira",
      "yaitwa",
      "yaongororwa",
      "yadzimwa",
    ],
    __function: [
      "toraZita",
      "verengaKukosha",
      "ratidzaData",
      "vandudzaProfil",
      "gadziraChinyorwa",
      "ongororaKodhi",
      "tarisaData",
      "chengetedzaGwaro",
      "tumiraShoko",
      "sanganisaZvose",
    ],
    __number: [
      "zera",
      "gore_rekuberekwa",
      "avhareji",
      "zvose",
      "mutengo",
      "indekisi",
      "nguva",
      "huwandu",
      "mhedzisiro",
      "awa",
    ],
    __object: [
      "munhu",
      "mutengi",
      "zvirongwa",
      "mhinduro",
      "mubhadharo",
      "magadzirirwo",
      "profil",
      "kwaunogara",
      "metadata",
      "nguva_yekushanda",
    ],
    __string: [
      "zita",
      "musoro_wenyaya",
      "tsananguro",
      "tsamba",
      "pasiwedi",
      "mharidzo",
      "tegi",
      "kiyi",
      "url",
      "linki",
    ],
    __void: [
      "mhanya",
      "dzima",
      "mira",
      "chenesa",
      "paradza",
      "buda",
      "isina_buffer",
      "chengetedza_zvose",
      "tumira",
      "pinda",
    ],
  },
}).grammar();
