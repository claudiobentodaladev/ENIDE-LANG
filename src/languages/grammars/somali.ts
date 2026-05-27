import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const somali = new Language({
  language: "somali",
  about:
    "ENIDE waa rogrogaha koodka (transpiler) kuu oggolaanaya inaad ku qorto barnaamij kasta luuqad kasta",

  include: DocStr(
    "SooGeli",
    "Loo isticmaalo in lagu soo geliyo luuqadaha, maktabadaha ama qaybaha dibadda ah",
  ),

  commands: {
    __about: DocStr("KuSaabsan", "Macluumaad ku saabsan mashruuca ENIDE"),
    __help: DocStr("Caawimo", "Liiska dhammaan amarrada la heli karo"),
    __version: DocStr("Nuqul", "Nuqulka hadda ee ENIDE"),
    __languages: DocStr("Luuqadaha", "Liiska luuqadaha uu ENIDE taageero"),
    __documentation: DocStr(
      "Dukumentiga",
      "Dukumentiga rasmiga ah ee luuqadda hadda la isticmaalayo",
    ),
    __grammar: DocStr(
      "Naxwe",
      "Xeerarka hab-qoraalka iyo isintaksiga luuqadda",
    ),
  },

  library: {
    __standard: {
      main: DocStr("Caadi", "Helitaanka hawlaha nidaamka asaasiga ah"),
      __isarray: DocStr("WaaLiis", "Hubi haddii qiimuhu yahay liis (array)"),
      __isobject: DocStr(
        "WaaWalax",
        "Hubi haddii qiimuhu yahay walax (object)",
      ),
      __typeof: DocStr("Nooca", "Soo celi nooca xogta ee beddelaha"),
      __parse: DocStr("Falanqee", "U beddel qoraalka nooca xogta saxda ah"),
    },
    __math: {
      main: DocStr("Xisaab", "Hawlaha xisaabta iyo tirooyinka go'an"),
      __pi: DocStr("PI", "Qiimaha tirada go'an ee Pi"),
      __sqrt: DocStr("Xidid", "Xidid laba-geesood ah (square root)"),
      __pow: DocStr("Quwad", "Kor u qaadista tiro mfanelo ah"),
      __round: DocStr("Koob", "U wareejinta tirada integer-ka ugu dhow"),
      __random: DocStr(
        "Nasiib",
        "Soo saar tiro aan la saadaalin karin hi bhaqo",
      ),
      __max: DocStr("UguWeyn", "Qiimaha ugu weyn ee liiska ku jira"),
      __min: DocStr("UguYar", "Qiimaha ugu yar ee liiska ku jira"),
      __isNumber: DocStr("WaaLambar", "Hubi haddii ay tahay lambar"),
      __isInteger: DocStr(
        "WaaIdil",
        "Hubi haddii ay tahay tiro idil (integer)",
      ),
      __isFloat: DocStr(
        "WaaJajab",
        "Hubi haddii ay leedahay qayb jajab ah (float)",
      ),
      __cos: DocStr("cos", "Xisaabi cosine"),
      __sin: DocStr("sin", "Xisaabi sine"),
      __tan: DocStr("tan", "Xisaabi tangent"),
    },

    __string: {
      main: DocStr(
        "Qoraal",
        "Hawlaha loo isticmaalo xogta qoraalka iyo xarfaha",
      ),
      __length: DocStr("Dherer", "Tirada xarfaha qoraalka ku jira"),
      __toUpperCase: DocStr(
        "FarWaaweyn",
        "U beddel dhammaan qoraalka xarfo waaweyn",
      ),
      __toLowerCase: DocStr(
        "FarYaryar",
        "U beddel dhammaan qoraalka xarfo yaryar",
      ),
      __include: DocStr(
        "KuJira",
        "Hubi haddii qoraalku ka kooban yahay erey gaar ah",
      ),
      __repeat: DocStr("KuCeli", "Ku celi qoraalka dhowr jeer oo la cayimay"),
    },

    __date: {
      main: DocStr("Taariikh", "Hawlaha waqtiga iyo taariikhda sistamka"),
      __now: DocStr("Hadda", "Waqtiga iyo taariikhda saxda ah ee hadda"),
      __year: DocStr("Sanad", "Soo saar sanadka hadda jira"),
      __month: DocStr("Bil", "Soo saar bisha"),
      __dayMonth: DocStr("MaalinBil", "Maalinta bisha ka midka ah"),
      __dayWeek: DocStr("MaalinToddobaad", "Maalinta toddobaadka ka midka ah"),
      __hour: DocStr("Saacad", "Saacadda nidaamka"),
      __minute: DocStr("Daqiiqad", "Daqiiqadaha"),
      __second: DocStr("Ilbiriqsi", "Ilbiriqsiyada"),
    },
  },

  types: {
    __number: DocStr("Tiro", "Nooca xogta ee tirooyinka"),
    __string: DocStr("Qoraal", "Nooca xogta ee qoraalka"),
    __boolean: DocStr("RunBeen", "Nooca xogta ee caqliga (boolean)"),
    __object: DocStr("Walax", "Nooca xogta ee walax taagan"),
    __void: DocStr("Maran", "Hab aan wax qiimo ah dib u soo celinayn"),
    __array: DocStr("Liis", "Nooca xogta ee liisaska xogta lala xiriiriyay"),
  },

  specialValues: {
    __true: DocStr("Run", "Qiimaha caqliga ee saxda ah (true)"),
    __false: DocStr("Been", "Qiimaha caqliga ee khaldan (false)"),
    __null: DocStr("Waxba", "Ka maqnaanshaha wax qiimo ah oo go'an"),
  },

  words: {
    __new: DocStr("Cusub", "Samee nuqul cusub oo heer ah (instance of class)"),
    __this: DocStr("Kan", "Tixraaca walaxda hadda taagan ee heerka"),
    __extends: DocStr(
      "KaFarcan",
      "Dhaxalka iyo kordhinta heerka kale (inheritance)",
    ),
  },

  accessModifiers: {
    __private: DocStr("Gaar", "Kaliya gudaha heerka hadda jira laga heli karo"),
    __public: DocStr("Guud", "Meel walba oo koodka ka mid ah laga heli karo"),
    __protected: DocStr(
      "Ilaashan",
      "Heerka iyo inta ka farcantay kaliya laga heli karo",
    ),
    __readonly: DocStr(
      "AkhrisKaliya",
      "Qiimaha aan la beddeli karin marka la qoro ka dib",
    ),
    __static: DocStr(
      "IsTaagan",
      "Waxaa iska leh heerka oo dhan, ma ahan nuqul gaar ah",
    ),
  },

  methods: {
    method: {
      __print: DocStr("Daabac", "Soo saar qiimaha ama qoraalka shaashadda"),
      __scan: DocStr(
        "Akhri",
        "Ka akhri xogta laga helayo isticmaalaha (input)",
      ),
      __return: DocStr(
        "Celi",
        "Natiijo ama qiimo ka soo celi hawsha (function)",
      ),
      __break: DocStr("KaBax", "Jooji oo ka bax wareegga hadda jira (loop)"),
      __continue: DocStr("SiiWad", "U gudub wareegga xiga ee ku xiga"),
    },

    sentences: {
      __function: DocStr("Hawl", "Qeexidda hawl cusub oo kood ah"),
      __if: DocStr("Haddii", "Xukun shardi ah oo bilow ah"),
      __else: DocStr("HaddiiKale", "Haddii shardigii hore uu fuli waayo"),
      __while: DocStr("Inta", "Wareeg shaqaynaya inta shardigu run yahay"),
      __for: DocStr("Tiri", "Wareeg soconaya inta xad cayiman la gaarayo"),
      __switch: DocStr("Doorasho", "Doorashada xaalado badan oo kala duwan"),
      __case: DocStr("Xaalad", "Xaalad gaar ah oo gudaha doorashada ku jirta"),
      __default: DocStr(
        "Aasaasi",
        "Fuli haddii xaaladaha kale oo dhan ay fuli waayaan",
      ),
      __try: DocStr(
        "IskuDay",
        "Isku day fulinta koodka laga yaabo inuu qaldmo",
      ),
      __catch: DocStr("Qabo", "Maamul dhacdooyinka iyo qabashada qaladka"),
      __finally: DocStr(
        "UguDambayn",
        "Fuli koodkan mar walba dhamaadka isku dayga",
      ),
      __class: DocStr("Heer", "Qeexidda heer (class) cusub"),
      __constructor: DocStr(
        "Dhise",
        "Hawsha dhisaysa walaxda cusub marka la abuuro",
      ),
    },
  },

  errors: {
    __labels: errorLabel(
      "Fariin",
      "Qiimaha",
      "Beddelaha",
      "Hantida",
      "Walaxda",
      "LaFilayay",
      "LaHelay",
      "UDiristaJoogtada",
      "MataanoBeegbeeg",
      "Talo",
      "CalaamadKhaldan",
      "BuuxDhaafisDabajoog",
      "Calaamad",
      "DhammaadLamaFilaanAh",
    ),
    main: errorMessage("QALAD", "Qalad guud oo nidaamka ah"),
    __TypeError: errorMessage(
      "QALAD_NOOCA",
      "Nooca xogta ma ku habboon hawshan la fulinayo",
    ),
    __InitError: errorMessage(
      "QALAD_BILOWGA",
      "Beddelaha si sax ah looma bilaabin",
    ),
    __ReferenceError: errorMessage(
      "QALAD_TIXRAACA",
      "Tixraaca beddelaha, hawsha, ama maktabadda ma jiro koodka dhexdiisa",
    ),
    __SyntaxError: errorMessage(
      "QALAD_HAB_QORAAL",
      "Qalad naxwaha koodka ama isintaksiga ah",
    ),
    __RangeError: errorMessage(
      "QALAD_XADKA",
      "Qiimuhu wuxuu ka baxsan yahay xadka la ogol yahay",
    ),
    __URIError: errorMessage("QALAD_URI", "Qaabka URI-ga la geliyay ma saxna"),
    __EvalError: errorMessage(
      "QALAD_EVAL",
      "Qalad ka dhashay hawsha eval dhexdeeda",
    ),
    __UNKNOWN_ERROR: errorMessage(
      "QALAD_LAMA_YAQAAN",
      "Qalad aan la aqoon ayaa ku dhacay nidaamka",
    ),
  },

  example: {
    __array: [
      "pizzaha",
      "magaalooyinka",
      "liiska_tirooyinka",
      "tirooyinka",
      "midabada",
      "alaabta",
      "isticmaalayaasha",
      "qaybaha",
      "dhibcaha",
      "luuqadaha",
    ],
    __boolean: [
      "xaaladda",
      "waa_firfircoon",
      "waa_loo_ogolaaday",
      "waa_diyaar",
      "la_hubiyay",
      "ku_xidhan",
      "socda",
      "dhamaaday",
      "la_xaqiijiyay",
      "la_baajiyay",
    ],
    __function: [
      "helMagaca",
      "xisaabiQiimaha",
      "tusXogta",
      "cusboonaysiiProfilka",
      "qaabeeyoQoraalka",
      "falanqeeKoodka",
      "hubiXogta",
      "kaydiDukumiintiga",
      "dirFariinta",
      "isu_geeyoDhammaan",
    ],
    __number: [
      "da'da",
      "sanadka_dhalashada",
      "celcelis",
      "guud_ahaan",
      "qiimaha",
      "tusmo",
      "waqti",
      "miisaan",
      "dhibcaha",
      "saacadda",
    ],
    __object: [
      "qofka",
      "macmiilka",
      "dejinta",
      "jawaabta",
      "bixinta",
      "qaabaynta",
      "profilka",
      "cinwaanka",
      "metaxogta",
      "fadhiga",
    ],
    __string: [
      "magaca",
      "cinwaanka",
      "faahfaahinta",
      "iimaylka",
      "ereyga_sirta",
      "fariinta",
      "sumadda",
      "furaha",
      "url-ka",
      "xidhiidhka",
    ],
    __void: [
      "soco",
      "tirtir",
      "jooji",
      "nadiifi",
      "bubi",
      "ka_bax",
      "faaruqi_kaydka",
      "kaydi_dhammaan",
      "dir",
      "gal",
    ],
  },
}).grammar();
