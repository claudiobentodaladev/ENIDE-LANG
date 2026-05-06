import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const sotho = new Language({
  language: "sotho",
  about:
    "ENIDE ke transpiler e kgonang ho fetoha e dumellang ho ngola programo ka puo efe kapa efe",

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
        "ke_lethathamo",
        "netefatsa hore boleng ke lethathamo (array)",
      ),
      __isobject: DocStr("ke_ntho", "netefatsa hore boleng ke ntho (object)"),
      __typeof: DocStr("mofuta_wa", "khutlisa mofuta wa data wa phetoho"),
      __parse: DocStr(
        "hlahloba",
        "fetolela mongolo ho ba mofuta o nepahetseng wa data",
      ),
    },
    __math: {
      main: DocStr("dipalo", "mesebetsi ya dipalo le dipalo tse sa fetogeng"),
      __pi: DocStr("PI", "boleng ba palo ya Pi"),
      __sqrt: DocStr("metso", "ho fumana motso wa skwere (square root)"),
      __pow: DocStr("matla", "ho fumana matla a palo (power)"),
      __round: DocStr("potolohisa", "ho potolohisa palo ho e isa ho e haufi"),
      __random: DocStr("leeto", "ho hlahisa palo ya leeto (random number)"),
      __max: DocStr("seholo", "ho fumana boleng bo phahameng ka ho fetisisa"),
      __min: DocStr("senyenyane", "ho fumana boleng bo tlase ka ho fetisisa"),
      __isNumber: DocStr("ke_nomoro", "ho netefatsa hore boleng ke nomoro"),
      __isInteger: DocStr(
        "ke_palo_e_tletseng",
        "netefatsa hore ke palo e tletseng",
      ),
      __isFloat: DocStr("ke_desimale", "netefatsa hore ke palo ya desimale"),
      __cos: DocStr("cos", "bala cosine"),
      __sin: DocStr("sin", "bala sine"),
      __tan: DocStr("tan", "bala tangent"),
    },

    __string: {
      main: DocStr(
        "thapo",
        "mesebetsi ya ho laola le ho fetola thapo (string)",
      ),
      __length: DocStr("bolelele", "bala palo ya ditlhaku thapong"),
      __toUpperCase: DocStr(
        "ka_ditlhaku_tse_kgolo",
        "fetola ditlhaku ho ba tse kgolo",
      ),
      __toLowerCase: DocStr(
        "ka_ditlhaku_tse_nyenyane",
        "fetola ditlhaku ho ba tse nyenyane",
      ),
      __include: DocStr(
        "e_na_le",
        "netefatsa hore thapo e na le mongolo o itseng",
      ),
      __repeat: DocStr("pheta", "pheta thapo makgetlo a itseng"),
    },

    __date: {
      main: DocStr("letsatsi", "mesebetsi ya letsatsi le nako"),
      __now: DocStr("hona_joale", "fumana letsatsi le nako ya hona joale"),
      __year: DocStr("selemo", "fumana selemo"),
      __month: DocStr("kgwedi", "fumana kgwedi"),
      __dayMonth: DocStr("letsatsi_kgwedi", "fumana letsatsi la kgwedi"),
      __dayWeek: DocStr("letsatsi_veke", "fumana letsatsi la veke"),
      __hour: DocStr("hora", "fumana hora"),
      __minute: DocStr("metsotso", "fumana metsotso"),
      __second: DocStr("motsotswana", "fumana motsotswana"),
    },
  },

  types: {
    __number: DocStr("nomoro", "mofuta wa data wa dipalo"),
    __string: DocStr("thapo", "mofuta wa data wa mongolo"),
    __boolean: DocStr("bool", "mofuta wa data wa nnete kapa mashano"),
    __object: DocStr("ntho", "mofuta wa data wa ntho e itseng"),
    __void: DocStr("lefeela", "ho bontsha hore mosebetsi ha o khutlise letho"),
    __array: DocStr("lethathamo", "mofuta wa data wa lethathamo la dintho"),
  },

  specialValues: {
    __true: DocStr("nnete", "boleng ba logic ba nnete"),
    __false: DocStr("mashano", "boleng ba logic ba mashano"),
    __null: DocStr("lefeela", "ho bontsha hore ha ho na boleng"),
  },

  words: {
    __new: DocStr("ncha", "theha ntho e ncha ho tswa ho sehlopha"),
    __this: DocStr("ena", "tshupiso ya ntho ya hona joale"),
    __extends: DocStr("eketsa", "ho bontsha bojalefa ba sehlopha"),
  },

  accessModifiers: {
    __private: DocStr("lekunutu", "e fumaneha feela ka hare ho sehlopha"),
    __public: DocStr("phatlalatsa", "e fumaneha hohle"),
    __protected: DocStr(
      "e_sirelelitshweng",
      "e fumaneha sehlopheng le mahlaseding",
    ),
    __readonly: DocStr("bala_feela", "boleng bo ke keng ba fetolwa"),
    __static: DocStr("e_sa_fetogeng", "e amana le sehlopha, eseng ntho"),
  },

  methods: {
    method: {
      __print: DocStr("gatisa", "ho gatisa boleng skiring"),
      __scan: DocStr("bala", "ho bala boleng ho tswa ho mosebedisi"),
      __return: DocStr("khutlisa", "ho khutlisa boleng ho tswa mosebetsing"),
      __break: DocStr("emisa", "ho emisa loop hang-hang"),
      __continue: DocStr("tsoela_pele", "ho tlolela potolohong e latelang"),
    },

    sentences: {
      __function: DocStr("mosebetsi", "ho phatlalatsa mosebetsi o mocha"),
      __if: DocStr("haeba", "ho qala polelo ya boemo"),
      __else: DocStr("ntle", "karolo ya bobeli ya boemo"),
      __while: DocStr("ha", "ho etsa loop ha boemo bo ntse bo le nnete"),
      __for: DocStr("ho", "ho etsa loop e nang le palo e itseng"),
      __switch: DocStr("kgetho", "ho kgetha ho tswa ho maemo a mangata"),
      __case: DocStr("boleng", "boemo bo itseng ka hare ho kgetho"),
      __default: DocStr(
        "tlwaelo",
        "karolo e sebetsang ha maemo a mang a hloleha",
      ),
      __try: DocStr("leka", "ho qala bloko ya ho hlahloba diphoso"),
      __catch: DocStr("tshwara", "ho tshwara le ho laola phoso e hlahileng"),
      __finally: DocStr("qetellong", "karolo e sebetsang kamehla qetellong"),
      __class: DocStr("sehlopha", "ho phatlalatsa sehlopha se secha"),
      __constructor: DocStr("moahi", "mosebetsi o thehang ntho e ncha"),
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
      "Kabofela_ho_sa_fetogeng",
      "Pharamente_e_phetiloeng",
      "Keletso",
      "Letshwao_le_sa_siamang",
      "Stack_e_tletse",
      "Letshwao",
      "Qetello_e_sa_lebeletswang",
    ),
    main: errorMessage("PHOSO", "Phoso e tlwaelehileng ya sisteme"),
    __TypeError: errorMessage(
      "PHOSO_MOFUTA",
      "Mofuta wa data ha o siame tshebedisong",
    ),
    __InitError: errorMessage("PHOSO_QALOHO", "Phetoho ha e a qala hantle"),
    __ReferenceError: errorMessage(
      "PHOSO_TSHUPISO",
      "Phetoho e koptwang ha e yo",
    ),
    __SyntaxError: errorMessage(
      "PHOSO_SINTAKISI",
      "Khoutu ha e a ngolwa hantle",
    ),
    __RangeError: errorMessage(
      "PHOSO_BOPHARA",
      "Boleng bo ka ntle ho bophara bo dumellwang",
    ),
    __URIError: errorMessage("PHOSO_URI", "URI e fanoeng ha e a loka"),
    __EvalError: errorMessage(
      "PHOSO_EVAL",
      "Phoso e hlahile tshebedisong ya eval",
    ),
    __UNKNOWN_ERROR: errorMessage(
      "PHOSO_E_SA_TSEJOENG",
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
