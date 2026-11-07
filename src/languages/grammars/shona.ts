import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabels } from "../utils/stucture.grammar.js";

export const shona = new Language({
  language: "shona",
  about:
    "ENIDE mutauro wepurogiramu wekombiyuta unotaura mitauro yakawanda unokubvumira kunyora purogiramu mumutauro chero upi zvawo",
  include: DocStr(
    "Pinza",
    "Inoshandiswa kupinza mitauro, maraibhurari kana mamodule ekunze muchirongwa",
  ),

  commands: {
    __about: DocStr("Nezve", "Kuwana ruzivo nezve chirongwa che-ENIDE"),
    __help: DocStr("Rubatsiro", "Kuratidza mirairo yose iripo mu-ENIDE"),
    __version: DocStr("Shanduro", "Kuratidza shanduro yemazuva ano ye-ENIDE"),
    __languages: DocStr(
      "Mitauro",
      "Kuratidza mitauro yose inotsigirwa ne-ENIDE",
    ),
    __documentation: DocStr(
      "Magwaro",
      "Kuratidza gwaro rine tsananguro dzekushandisa mutauro uyu",
    ),
    __grammar: DocStr("Manyorerwo", "Mitemo yemanyorerwo emutauro uyu"),
  },

  library: {
    __standard: {
      main: DocStr(
        "Zvepakutanga",
        "Kuwana mabasa ekutanga ehurongwa hwesistimu",
      ),
      __isarray: DocStr(
        "InoRondedzero",
        "Kuona kana kukosha kuri nhengo dzerondedzero (array)",
      ),
      __isobject: DocStr(
        "InoChinhu",
        "Kuona kana kukosha kuri chinhu chakarongeka (object)",
      ),
      __typeof: DocStr("MhandoYe", "Kudzora mhando yedata riri muchinhu"),
      __parse: DocStr(
        "Chazulura",
        "Kushandura mameseji kuita mhando yedata inogona kuverengwa nesistimu",
      ),
    },
    __math: {
      main: DocStr("Masvomhu", "Mabasa emasvomhu nezvinhu zvisingachinji"),
      __pi: DocStr("PI", "Kukosha kwechisingachinji chinonzi Pi"),
      __sqrt: DocStr(
        "MudziWemakwere",
        "Kuziva mudzi wemakwere wenhamba (square root)",
      ),
      __pow: DocStr("Simba", "Kusimudza nhamba kusimba rakati (puissance)"),
      __round: DocStr(
        "Tenderedza",
        "Kutenderedza nhamba kusvika pane iri pedyo kwayo",
      ),
      __random: DocStr(
        "ZvisinaUrongwa",
        "Kugadzira nhamba isina kurongeka ngebhaqo",
      ),
      __max: DocStr("HuruPazvose", "Kudzora nhamba huru pane dzapihwa"),
      __min: DocStr("DikiPazvose", "Kudzora nhamba diki pane dzapihwa"),
      __isNumber: DocStr("Inhamba", "Kuona kana kukosha ikoko kuri nhamba"),
      __isInteger: DocStr(
        "InhambaIzere",
        "Kuona kana nhamba iri yose isina desimali (integer)",
      ),
      __isFloat: DocStr("IneDhesimali", "Kuona kana nhamba ine dhesimali"),
      __cos: DocStr("kosi", "Kuverenga i-cosine"),
      __sin: DocStr("sini", "Kuverenga i-sine"),
      __tan: DocStr("tani", "Kuverenga i-tangent"),
    },

    __string: {
      main: DocStr("Chinyorwa", "Mabasa ekushanda nemashoko nemavara (string)"),
      __length: DocStr("Kureba", "Kudzora urefu hwechinyorwa"),
      __toUpperCase: DocStr("MavaraMakuru", "Kushandura mavara kuita makuru"),
      __toLowerCase: DocStr("MavaraMadiki", "Kushandura mavara kuita madiki"),
      __include: DocStr(
        "Inemukati",
        "Kuona kana chinyorwa chine rimwe shoko mukati macho",
      ),
      __repeat: DocStr(
        "Dzokorora",
        "Kudzokorora chinyorwa kashoma zvichienderana nenguva",
      ),
    },

    __date: {
      main: DocStr("Nguva", "Mabasa enguva nemazuva esistimu"),
      __now: DocStr("Izvozvi", "Nguva nezuva ranhasi"),
      __year: DocStr("Gore", "Kuwana gore riripo"),
      __month: DocStr("Mwedzi", "Kuwana mwedzi uripo"),
      __dayMonth: DocStr("ZuvaRemwedzi", "Zuva remwedzi"),
      __dayWeek: DocStr("ZuvaRevhiki", "Zuva revhiki"),
      __hour: DocStr("Awa", "Kuwana awa"),
      __minute: DocStr("Maminitsi", "Kuwana maminitsi"),
      __second: DocStr("Sekondi", "Kuwana sekondi"),
      __milliseconds: DocStr(
        "MasekondiMadiki",
        "Kuwana masekondi madiki (milliseconds)",
      ),
    },

    __array: {
      main: DocStr(
        "Rondedzero",
        "Kuwana mabasa ekushandura nekuronga rondedzero",
      ),
      __addStart: DocStr(
        "WedzeraPakutanga",
        "Inoisa zvinhu zvitsva pakutanga perondedzero, uye inodzora urefu hutsva hwerondedzero.",
      ),
      __addEnd: DocStr(
        "WedzeraPekupedzisira",
        "Inowedzera zvinhu zvitsva kumagumo erondedzero",
      ),
      __join: DocStr(
        "Sanganisa",
        "Inosanganisa zvese zviri murondedzero kuita chinyorwa chimwe, zvakaganhurwa nechinyorwa chakatarwa, uye inodzora chinyorwa ichocho.",
      ),
      __length: DocStr(
        "RondedzeroKureba",
        "Inotora kana kugadza urefu hwerondedzero",
      ),
    },

    __time: {
      main: DocStr("Nguva", "Kuwana mabasa enguva ekuronga kumhanya kwekhodhi"),
      __timeOut: DocStr(
        "NguvaYakatarwa",
        "Kumhanyisa basa kamwe chete mushure menonoko yakatarwa mumasekondi madiki",
      ),
      __timeInterval: DocStr(
        "NguvaInodzokorora",
        "Kumhanyisa basa dzokororo panguva dzakatarwa mumasekondi madiki",
      ),
    },
  },

  types: {
    __number: DocStr("Nhamba", "Kutsanangura nguva yekuchinja kwenhamba"),
    __string: DocStr("Chinyorwa", "Kutsanangura mavara nemashoko echinyorwa"),
    __boolean: DocStr("ChokwadiNhema", "Kutsanangura kana chiri chokwadi kana nhema"),
    __object: DocStr(
      "Chinhu",
      "Kutsanangura chinhu chakarongeka chisingachinji",
    ),
    __void: DocStr("Isina", "Kurudziro yekuti hapana chinodzorwa nemethod"),
    __array: DocStr(
      "Rondedzero",
      "Kutsanangura rondedzero yezvinhu zvakatevedzana",
    ),
  },

  specialValues: {
    __true: DocStr("Chokwadi", "Kukosha kwechokwadi (true)"),
    __false: DocStr("Nhema", "Kukosha kwenhema (false)"),
    __null: DocStr("Hapana", "Kushaikwa kwechinhu kana kukosha"),
  },

  words: {
    __new: DocStr(
      "Itsva",
      "Kugadzira chinhu chitsva kubva mukirasi (instance)",
    ),
    __this: DocStr("Ichi", "Kunongedzera kuchinhu chiripo iye zvino mukirasi"),
    __extends: DocStr(
      "Inowedzera",
      "Kushandisa nhaka kubva kune imwe kirasi (inheritance)",
    ),
  },

  accessModifiers: {
    __private: DocStr("Pachivande", "Inowanikwa mukati mekirasi iyi chete"),
    __public: DocStr(
      "Pachena",
      "Inowanikwa kwese kwese kune dzimwe kirasi",
    ),
    __protected: DocStr(
      "Yakadzivirirwa",
      "Inowanikwa mukirasi iyi nevana vayo chete",
    ),
    __readonly: DocStr(
      "VerengaChete",
      "Kukosha kwayo hakugoni kuchinjwa pashure pokubhalwa",
    ),
    __static: DocStr(
      "Yakamira",
      "Ndeye kirasi yose, kwete yechinhu chimwe chete",
    ),
  },

  methods: {
    method: {
      __print: DocStr("Bonisa", "Kuratidza kana kudhinda pachiratidziri"),
      __clear: DocStr("Chenesa", "Kubvisa zviri pachiratidziro"),
      __scan: DocStr("Verenga", "Kutora mashoko anoiswa nemushandisi (input)"),
      __return: DocStr("Dzorera", "Kudzosa kukosha kunobva mubasa (function)"),
      __break: DocStr("Mira", "Kumira kuitwa kwe-loop pakarepo"),
      __continue: DocStr(
        "Enderera",
        "Kuenda kune imwe nhanho inotevera ye-loop",
      ),
    },

    sentences: {
      __function: DocStr("Basa", "Kugadzira basa idzva rekhodhi (function)"),
      __if: DocStr("Kana", "Kutarisa mamiriro emeko yekutanga"),
      __else: DocStr(
        "Zvimwe",
        "Nzira ichatevedzwa kana mamiriro ekutanga asiri echokwadi",
      ),
      __while: DocStr(
        "Apo",
        "Loop inomhanya kana mamiriro ezvinhu ari echokwadi",
      ),
      __for: DocStr("Kune", "Loop ine kuverenga kwakatarwa zvakanaka"),
      __switch: DocStr("Sarudza", "Sarudzo pakati pezvakawanda zvakasiyana"),
      __case: DocStr("Mamiriro", "Mamiriro akafanorongwa musarudzo"),
      __default: DocStr(
        "ZvakagaraZvakadaro",
        "Kana pasina mamiriro kwayo yabatwa",
      ),
      __try: DocStr("Edza", "Kuyedza kumhanyisa kodhi ine njodzi"),
      __catch: DocStr("Bata", "Kubata zvikanganiso nezvikanganiso zvamuka"),
      __finally: DocStr(
        "Pakupedzisira",
        "Kodhi inomhanya nguva dzose pashure pe-try ne-catch",
      ),
      __class: DocStr("Kirasi", "Kugadzira kirasi idzva"),
      __constructor: DocStr(
        "Muvaki",
        "Basa rakasikwa rekugadzira nekutanga chinhu chekirasi",
      ),
    },
  },

  errors: {
    __labels: errorLabels({
      message: "Meseji",
      value: "Kukosha",
      variable: "Shanduko",
      property: "Chivakwa",
      object: "Chinhu",
      expected: "Zvinotarisirwa",
      received: "Zvakagamuchirwa",
      constAssignment: "Kugovera kweConstant",
      duplicateParam: "Paramita Yakadzokororwa",
      hint: "Zano",
      invalidToken: "Token Isiri Yo",
      stackOverflow: "Stack Overflow",
      token: "Token",
      unexpectedEnd: "Magumo Ekuisa Asina Kutarisirwa",
      file: "faira",
      didYouMean: "waireva",
      includedFrom: "zvakaiswa kubva ku",
      size: "ukuru",
      index: "index",
      path: "nzira",
      available: "iripo",
      element: "chinhu",
      hintMissingEquals: 'panoshaya "=" pakati pezita ne kukosha',
      hintMissingSemicolon: 'panoshaya ";" pamberi pemurairo uyu',
      hintUnclosedBlock:
        '"{" yakavhurwa pamutsara {line} haina kumbovharwa ne "}"',
      hintUnclosedBracket:
        '"[" yakavhurwa pamutsara {line} haina kumbovharwa ne "]"',
      hintUnclosedComment:
        "tsananguro yakavhurwa pamutsara {line} haina kumbovharwa ne */",
      hintUnclosedString:
        "mavara akavhurwa pamutsara {line} anoshaya kavha yekuvhara",
      hintModuleNotFound: 'moduli haisi kuwanikwa; yakatsvakwa mu "{path}"',
      hintLibraryUnknown: "raibhurari isingazivikanwe; iripo: {list}",
      hintIndexRange:
        "rondedzero ine ukuru {size}; ma index anoshanda: {range}",
      hintIndexEmpty: "rondedzero isina chinhu, saka haina ma index anoshanda",
      hintNotArray: "kukosha hakusi rondedzero",
      hintNull: "hapana kukosha kwakapapiwa (null kana undefined)",
      hintNaN: "nhamba haisiri yechokwadi (NaN)",
      hintInfinite: "nhamba haina magumo",
      hintNoInput: "chirongwa chakakumbira kuisa asi kuisa kwakapera",
      hintInternal:
        "izvi zvinoita senge kanganiso yemukati ye-ENIDE, hachisi kanganiso mune chako chirongwa; tapota zivisa",
      hintDuplicateProperty: 'chivakwa "{name}" chakaziviswa kanopfuura kamwe',
      hintMissingProperty: 'chivakwa "{name}" hakipo',
      hintArrayMixed:
        "rondedzero haigone kusanganisa rondedzero nehunhu hwakareruka",
      hintArrayEmpty: "rondedzero inoda kanenge kukosha kumwe chete",
      hintObjectArrayShape:
        'chinhu {index} hachifambiri nechinhu chekutanga: tarisa chivakwa "{name}"',
      hintLoopCounter: "kaunti ye-loop inofanira kuva nhamba",
      hintErrorsFound: "{count} zvikanganiso zvawanikwa",
    }),
    main: errorMessage("KANGANISO", "kanganiso yemaitiro e-sistimu"),
    __TypeError: errorMessage(
      "RUDZI_RWEKANGANISO",
      "rudzi rusiri rwechokwadi mukushanda",
    ),
    __InitError: errorMessage(
      "KUVAMBIRA_KWEKANGANISO",
      "shanduko haina kutanga kuvambwa",
    ),
    __ReferenceError: errorMessage(
      "KANGANISO_YENONGEZERERO",
      "shanduko, basa kana raibhurari hazvipo muchikamu",
    ),
    __SyntaxError: errorMessage("KANGANISO_YESYNTAX", "kodhi isiri iyo"),
    __RangeError: errorMessage(
      "KANGANISO_YERUNJI",
      "kukosha kuri kunze kwerunji runobvumirwa",
    ),
    __URIError: errorMessage("KANGANISO_YEURI", "URI isina kumiswa kana isiri iyo"),
    __EvalError: errorMessage("KANGANISO_YEEVAL", "kanganiso ine chekuita ne-eval"),
    __UNKNOWN_ERROR: errorMessage(
      "KANGANISO_ISINGAZIVIKANWE",
      "kanganiso isingazivikanwe zvachose",
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
