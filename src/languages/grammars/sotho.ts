import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const sotho = new Language({
  language: "sotho",
  about:
    "ENIDE ke puo ea lenaneo la lipuo tse ngata e u lumellang hore u etse mananeo ka puo efe kapa efe",
  include: DocStr(
    "kenyeletsa",
    "e sebelisetsoa ho kenyeletsa puo, lilaeborari kapa dimojulu tsa kantle",
  ),

  commands: {
    __about: DocStr("ka", "ho fumana tsebiso ka morero wa ENIDE"),
    __help: DocStr(
      "thuso",
      "ho fumana lethathamo la ditaelo tsohle tse fumanehang",
    ),
    __version: DocStr(
      "phetolelo",
      "ho fumana phetolelo (version) ya hona joale ya ENIDE",
    ),
    __languages: DocStr(
      "dipuo",
      "ho fumana lethathamo la dipuo tsohle tse fumanehang",
    ),
    __documentation: DocStr(
      "dikwalo",
      "ho fumana dikwalo tsa tshebediso ya puo",
    ),
    __grammar: DocStr("gramatika", "ho bona melao ya kaho ya polelo ya puo"),
  },

  library: {
    __standard: {
      main: DocStr("tlwaelo", "ho fumana mesebetsi ya motheo ya sisteme"),
      __isarray: DocStr(
        "WaaLethathamo",
        "netefatsa hore boleng ke lethathamo (array)",
      ),
      __isobject: DocStr("WaaNtho", "netefatsa hore boleng ke ntho (object)"),
      __typeof: DocStr("MofutaWa", "khutlisa mofuta wa data wa phetoho"),
      __parse: DocStr(
        "Hlahloba",
        "fetolela mongolo ho ba mofuta o nepahetseng wa data",
      ),
    },
    __math: {
      main: DocStr("dipalo", "mesebetsi ya dipalo le dipalo tse sa fetogeng"),
      __pi: DocStr("PI", "boleng ba palo ya Pi"),
      __sqrt: DocStr("Metso", "ho fumana motso wa skwere (square root)"),
      __pow: DocStr("Matla", "ho fumana matla a palo (power)"),
      __round: DocStr("Potolohisa", "ho potolohisa palo ho e isa ho e haufi"),
      __random: DocStr("Leeto", "ho hlahisa palo ya leeto (random number)"),
      __max: DocStr("Seholo", "ho fumana boleng bo phahameng ka ho fetisisa"),
      __min: DocStr("Senyenyane", "ho fumana boleng bo tlase ka ho fetisisa"),
      __isNumber: DocStr("WaaNomoro", "ho netefatsa hore boleng ke nomoro"),
      __isInteger: DocStr(
        "WaaPaloETletseng",
        "netefatsa hore ke palo e tletseng",
      ),
      __isFloat: DocStr("WaaDesimale", "netefatsa hore ke palo ya desimale"),
      __cos: DocStr("cos", "bala cosine"),
      __sin: DocStr("sin", "bala sine"),
      __tan: DocStr("tan", "bala tangent"),
    },

    __string: {
      main: DocStr(
        "thapo",
        "mesebetsi ya ho laola le ho fetola thapo (string)",
      ),
      __length: DocStr("Bolelele", "bala palo ya ditlhaku thapong"),
      __toUpperCase: DocStr(
        "FarDitlhakuTseKgolo",
        "fetola ditlhaku ho ba tse kgolo",
      ),
      __toLowerCase: DocStr(
        "FarDitlhakuTseNyenyane",
        "fetola ditlhaku ho ba tse nyenyane",
      ),
      __include: DocStr(
        "EnaLe",
        "netefatsa hore thapo e na le mongolo o itseng",
      ),
      __repeat: DocStr("Pheta", "pheta thapo makgetlo a itseng"),
    },

    __date: {
      main: DocStr("letsatsi", "mesebetsi ya letsatsi le nako"),
      __now: DocStr("HonaJoale", "fumana letsatsi le nako ya hona joale"),
      __year: DocStr("Selemo", "fumana selemo"),
      __month: DocStr("Kgwedi", "fumana kgwedi"),
      __dayMonth: DocStr("LetsatsiKgwedi", "fumana letsatsi la kgwedi"),
      __dayWeek: DocStr("LetsatsiVeke", "fumana letsatsi la veke"),
      __hour: DocStr("Hora", "fumana hora"),
      __minute: DocStr("Metsotso", "fumana metsotso"),
      __second: DocStr("Motsotswana", "fumana motsotswana"),
    },
  },

  types: {
    __number: DocStr("Nomoro", "mofuta wa data wa dipalo"),
    __string: DocStr("Thapo", "mofuta wa data wa mongolo"),
    __boolean: DocStr("Bool", "mofuta wa data wa nnete kapa mashano"),
    __object: DocStr("Ntho", "mofuta wa data wa ntho e itseng"),
    __void: DocStr("Lefeela", "ho bontsha hore mosebetsi ha o khutlise letho"),
    __array: DocStr("Lethathamo", "mofuta wa data wa lethathamo la dintho"),
  },

  specialValues: {
    __true: DocStr("Nnete", "boleng ba logic ba nnete"),
    __false: DocStr("Mashano", "boleng ba logic ba mashano"),
    __null: DocStr("Lefeela", "ho bontsha hore ha ho na boleng"),
  },

  words: {
    __new: DocStr("Ncha", "theha ntho e ncha ho tswa ho sehlopha"),
    __this: DocStr("Ena", "tshupiso ya ntho ya hona joale"),
    __extends: DocStr("Eketsa", "ho bontsha bojalefa ba sehlopha"),
  },

  accessModifiers: {
    __private: DocStr("Lekunutu", "e fumaneha feela ka hare ho sehlopha"),
    __public: DocStr("Phatlalatsa", "e fumaneha hohle"),
    __protected: DocStr(
      "ESirelelitshweng",
      "e fumaneha sehlopheng le mahlaseding",
    ),
    __readonly: DocStr("BalaFeela", "boleng bo ke keng ba fetolwa"),
    __static: DocStr("ESaFetogeng", "e amana le sehlopha, eseng ntho"),
  },

  methods: {
    method: {
      __print: DocStr("Gatisa", "ho gatisa boleng skiring"),
      __scan: DocStr("Bala", "ho bala boleng ho tswa ho mosebedisi"),
      __return: DocStr("Khutlisa", "ho khutlisa boleng ho tswa mosebetsing"),
      __break: DocStr("Emisa", "ho emisa loop hang-hang"),
      __continue: DocStr("TsoelaPele", "ho tlolela potolohong e latelang"),
    },

    sentences: {
      __function: DocStr("Mosebetsi", "ho phatlalatsa mosebetsi o mocha"),
      __if: DocStr("Haeba", "ho qala polelo ya boemo"),
      __else: DocStr("Ntle", "karolo ya bobeli ya boemo"),
      __while: DocStr("Ha", "ho etsa loop ha boemo bo ntse bo le nnete"),
      __for: DocStr("Ho", "ho etsa loop e nang le palo e itseng"),
      __switch: DocStr("Kgetho", "ho kgetha ho tswa ho maemo a mangata"),
      __case: DocStr("Boleng", "boemo bo itseng ka hare ho kgetho"),
      __default: DocStr(
        "Tlwaelo",
        "karolo e sebetsang ha maemo a mang a hloleha",
      ),
      __try: DocStr("Leka", "ho qala bloko ya ho hlahloba diphoso"),
      __catch: DocStr("Tshwara", "ho tshwara le ho laola phoso e hlahileng"),
      __finally: DocStr("Qetellong", "karolo e sebetsang kamehla qetellong"),
      __class: DocStr("Sehlopha", "ho phatlalatsa sehlopha se secha"),
      __constructor: DocStr("Moahi", "mosebetsi o thehang ntho e ncha"),
    },
  },

  errors: {
    __labels: errorLabel(
      "Molaetsa",
      "Boleng",
      "Phetoho",
      "Thepa",
      "Ntho",
      "Lebeletswe",
      "Amhetswe",
      "Kabofela",
      "Pharamente",
      "Keletso",
      "Letshwao",
      "StackTletse",
      "Letshwao",
      "Qetello",
    ),
    main: errorMessage("PHOSO", "Phoso e tlwaelehileng ya sisteme"),
    __TypeError: errorMessage(
      "PHOSOMOFUTA",
      "Mofuta wa data ha o siame tshebedisong",
    ),
    __InitError: errorMessage("PHOSOQALOHO", "Phetoho ha e a qala hantle"),
    __ReferenceError: errorMessage(
      "PHOSOTSHUPISO",
      "Phetoho e koptwang ha e yo",
    ),
    __SyntaxError: errorMessage(
      "PHOSOSINTAKISI",
      "Khoutu ha e a ngolwa hantle",
    ),
    __RangeError: errorMessage(
      "PHOSOBOPHARA",
      "Boleng bo ka ntle ho bophara bo dumellwang",
    ),
    __URIError: errorMessage("PHOSOURI", "URI e fanoeng ha e a loka"),
    __EvalError: errorMessage(
      "PHOSOEVAL",
      "Phoso e hlahile tshebedisong ya eval",
    ),
    __UNKNOWN_ERROR: errorMessage(
      "PHOSOEASATSEJOENG",
      "Ho hlahile phoso e sa tsejoeng",
    ),
  },

  example: {
    __array: [
      "dipizza",
      "ditoropo",
      "lethathamo_la_dipalo",
      "dipalo",
      "mebala",
      "dihlahiswa",
      "basebedisi",
      "dikgetho",
      "dintlha",
      "dipuo",
    ],
    __boolean: [
      "boemo",
      "e_sebetsa",
      "e_dumelletswe",
      "e_lokile",
      "e_netefaditsoe",
      "e_hoketswe",
      "e_ntse_e_tswa",
      "e_fedile",
      "e_hlahlobilwe",
      "e_hlobisitsoe",
    ],
    __function: [
      "fumanaLebitso",
      "balaBoleng",
      "bontshaData",
      "ntlafatsaProfil",
      "fetolaMongolo",
      "hlahlobaKhoutu",
      "netefatsaData",
      "bolokaTokomane",
      "romelaMolaetsa",
      "hlakanyaTsohle",
    ],
    __number: [
      "dilemo",
      "selemo_sa_tsoalo",
      "karolelano",
      "kakaretso",
      "theko",
      "indeksi",
      "nako",
      "palo",
      "dintlha",
      "hora",
    ],
    __object: [
      "motho",
      "moreki",
      "di-setting",
      "karabo",
      "tefo",
      "peakanyo",
      "profil",
      "aterese",
      "meta-data",
      "thuto",
    ],
    __string: [
      "lebitso",
      "aterese",
      "tlhaloso",
      "imeile",
      "phasewete",
      "molaetsa",
      "lebitso_la_mosebedisi",
      "senotlolo",
      "url",
      "hokahanya",
    ],
    __void: [
      "tsamaya",
      "hlakola",
      "emisa",
      "hlwekisa",
      "senya",
      "tsoa",
      "ntsha_mofumahadi",
      "boloka_tsohle",
      "romela",
      "kena",
    ],
  },
}).grammar();
