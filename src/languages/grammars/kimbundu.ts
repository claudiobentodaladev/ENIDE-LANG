import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const kimbundu = new Language({
  language: "kimbundu",
  about:
    "ENIDE muene mbulanguji ia kusoneka kikalakalu kia kitalu, iabana uhete ua kusoneka mu didimi dioso-dioso",

  include: DocStr(
    "kubandeka",
    "phala kubandeka madimi, mipunda isoneku mba mivulu ia itendelesu mu mifile iankua",
  ),

  commands: {
    __about: DocStr("madiandu", "phala kuíjia madiandu ma ENIDE kiki"),
    __help: DocStr(
      "kukuatisa",
      "phala kuíjia mulongu ua yikalakalu yoso ala ku",
    ),
    __version: DocStr(
      "mubangu",
      "phala kuíjia mubangu ua kindala ua ENIDE kiki",
    ),
    __languages: DocStr("madimi", "phala kuíjia mulongu ua madimi moso ala ku"),
    __documentation: DocStr(
      "itendelesu",
      "phala kuíjia divulu itendelesu ia madimi",
    ),
    __grammar: DocStr(
      "ijila ia madimi",
      "phala kuíjia ijila ia madimi mu ndundo imoxi",
    ),
  },

  library: {
    __standard: {
      main: DocStr(
        "musoneku",
        "phala kuendesa kikalakalu ia musoneku ituala ni kikalakalu",
      ),
      __isarray: DocStr("kialamilongu", "phala kumika se valolo kiala milongu"),
      __isobject: DocStr(
        "kialakimbambala",
        "phala kumika se valolo kiala kimbambala",
      ),
      __typeof: DocStr("muthindu", "phala kuíjia muthindu ua valolo"),
      __parse: DocStr(
        "Kukitula",
        "phala kusoneka valolo ia kisoneku mu valolo ia kuxika",
      ),
    },
    __math: {
      main: DocStr("italu", "phala kuendesa kikalakalu ia italu"),
      __pi: DocStr("PI", "phala kuíjia valolo ia PI"),
      __sqrt: DocStr("muji", "phala kuíjia muji ua kitalu"),
      __pow: DocStr("nguzu", "phala kuíjia nguzu ia kitalu"),
      __round: DocStr("kubulumuna", "phala kubulumuna kitalu"),
      __random: DocStr("kaluanda", "phala kuíjia kitalu kaluanda"),
      __max: DocStr("kota", "phala kuíjia valolo iakota ku moso"),
      __min: DocStr("ndenge", "phala kuíjia valolo iandenge ku moso"),
      __isNumber: DocStr("kialakitalu", "phala kumika se valolo kiala kitalu"),
      __isInteger: DocStr(
        "kialamvimba",
        "phala kumika se valolo kiala kitalu kia kuvimba",
      ),
      __isFloat: DocStr(
        "kialambinga",
        "phala kumika se valolo kiala kitalu kia mbinga",
      ),
      __cos: DocStr("Cos", "phala kuíjia Cos ua kiladianu mu jiladianu"),
      __sin: DocStr("Sin", "phala kuíjia Sin ua kiladianu mu jiladianu"),
      __tan: DocStr("Tan", "phala kuíjia Tan ua kiladianu mu jiladianu"),
    },

    __string: {
      main: DocStr(
        "kisoneku",
        "phala kuendesa kikalakalu ia kusoneka kisoneku",
      ),
      __length: DocStr("bunenu", "phala kuíjia bunenu ua kisoneku"),
      __toUpperCase: DocStr(
        "isoneku iakota",
        "phala kusoneka kisoneku mu isoneku iakota",
      ),
      __toLowerCase: DocStr(
        "isoneku iandenge",
        "phala kusoneka kisoneku mu isoneku iandenge",
      ),
      __include: DocStr(
        "kuendesa mu",
        "phala kumika se kisoneku kiala mu kaxaxi ka kisoneku",
      ),
      __repeat: DocStr("kuvutuka", "phala kuvutuka kisoneku mu veji javulu"),
    },

    __date: {
      main: DocStr(
        "izupunu",
        "phala kuendesa kikalakalu ia kusoneka kumbi ni izupunu",
      ),
      __now: DocStr("kindala", "phala kuíjia kumbi ni izupunu ia kindala"),
      __year: DocStr("muvu", "phala kuíjia muvu"),
      __month: DocStr("mbeji", "phala kuíjia mbeji"),
      __dayMonth: DocStr("kizuua kia mbeji", "phala kuíjia kizuua kia mbeji"),
      __dayWeek: DocStr(
        "kizuua kia lumingu",
        "phala kuíjia kizuua kia lumingu",
      ),
      __hour: DocStr("kumbi", "phala kuíjia kumbi"),
      __minute: DocStr("kaxaxi ka kumbi", "phala kuíjia kaxaxi ka kumbi"),
      __second: DocStr("kaxaxi kandenge", "phala kuíjia kaxaxi kandenge"),
    },
  },
  types: {
    __number: DocStr("kitalu", "phala kubandeka kialongo ia muthindu kitalu"),
    __string: DocStr(
      "kisoneku",
      "phala kubandeka kialongo ia muthindu kisoneku",
    ),
    __boolean: DocStr("bool", "phala kubandeka kialongo ia muthindu bool"),
    __object: DocStr("kimbambala", "phala kubandeka kimbambala ia musoneku"),
    __void: DocStr(
      "nguma",
      "phala kubandeka kikalakalu kia kuvutula valolo nguma",
    ),
    __array: DocStr("milongu", "phala kubandeka mivulu mu milongu"),
  },

  specialValues: {
    __true: DocStr("kidi", "valolo ia bool kidi"),
    __false: DocStr("makutu", "valolo ia bool makutu"),
    __null: DocStr("kana", "kumué ia valolo"),
  },

  words: {
    __new: DocStr("kubanga", "phala kubanga kialongo imoxi ia kitungua"),
    __this: DocStr("kiki", "phala kuendesa kima ia kitungua kiki"),
    __extends: DocStr(
      "kunenena",
      "phala kubandeka kitungua kimoxi kiala ni uhete ua kitungua kiankua",
    ),
  },

  accessModifiers: {
    __private: DocStr("kia kusueka", "kuendesa ngó mu kitungua kiki"),
    __public: DocStr("mbandu iosu", "kuendesa mu mbandu iosu"),
    __protected: DocStr(
      "kulanga",
      "kuendesa mu kitungua kiki ni mu mwana ua kitungua",
    ),
    __readonly: DocStr(
      "kutanga ngó",
      "valolo soko ku i kubanda kaxaxi kamoxi ngó",
    ),
    __static: DocStr(
      "kiximenu",
      "kiala ia kitungua kiki, ki kia kima kiatungua ê",
    ),
  },

  methods: {
    method: {
      __print: DocStr("kusoneka", "phala kusoneka valolo baxa mu kitala"),
      __scan: DocStr("kutanga", "phala kutanga valolo ixika mu mbandu itanda"),
      __return: DocStr("kuvutula", "phala kuvutula valolo mu kikalakalu"),
      __break: DocStr("kuimana", "phala kuimana mu kizingu kikalakalu"),
      __continue: DocStr(
        "kuendela ku",
        "phala kuendela ku kizingu kiankua ia thandu",
      ),
    },

    sentences: {
      __function: DocStr("kikalakalu", "phala kubandeka kikalakalu"),
      __if: DocStr("se", "phala kubandeka kixika ia mika"),
      __else: DocStr("se kiki", "phala kubandeka kixika kiankua mu kuxi"),
      __while: DocStr("kioso", "phala kubandeka kizingu kioso eia"),
      __for: DocStr("kizingu", "phala kubandeka kizingu ia kuvutuka mu italu"),
      __switch: DocStr(
        "kusola",
        "phala kubandeka muthindu ua kusola mivulu ia kuxika",
      ),
      __case: DocStr("kuxika ku", "phala kubandeka mbandu ioné mu kusola"),
      __default: DocStr(
        "kuxika kiankua",
        "mu kitangana kioso ki kuxi muthindu uankua ua kusola",
      ),
      __try: DocStr("banga", "phala kubandeka mbandu ia kubanga kikalakalu"),
      __catch: DocStr("kuata", "phala kubandeka mbandu ia kukuata kituxi"),
      __finally: DocStr(
        "kisukilu",
        "kusoneka kikalakalu boko se kuxika iakota mba iakola",
      ),
      __class: DocStr("kitungua", "phala kubandeka kitungua"),
      __constructor: DocStr("mutungi", "mubangu ua kubandeka kima mu kitungua"),
    },
  },
  errors: {
    __labels: errorLabel(
      "Njimbu",
      "Valolo",
      "Kialongo",
      "Uhete",
      "Kimbambala",
      "Kumueni",
      "Kumika",
      "Kubanda Kimbambala",
      "Valolo Iavuluka",
      "Kukuatisa",
      "Token Iaxika",
      "Kulima Pilha",
      "Token",
      "Sukilu Iatunda Iaxika",
    ),
    main: errorMessage("KITUXI", "kituxi ia muthindu kia musoneku"),
    __TypeError: errorMessage(
      "KITUXI_KUA_MUTHINDU",
      "muthindu iaxika mu kikalakalu",
    ),
    __InitError: errorMessage(
      "KITUXI_KUA_KUBANDEKA",
      "kialongo kiki kitaxika kubandeka",
    ),
    __ReferenceError: errorMessage(
      "KITUXI_KUA_KUTUMINA",
      "kialongo, kikalakalu mba mipunda itendelesu ki kiala boba ê",
    ),
    __SyntaxError: errorMessage(
      "KITUXI_KUA_MUSONEKU",
      "musoneku ua ijila iaxika",
    ),
    __RangeError: errorMessage(
      "KITUXI_KUA_MBANDU",
      "valolo iala mu mbandu ia kuxi kumaeni",
    ),
    __URIError: errorMessage(
      "KITUXI_KUA_URI",
      "URI iatungua iaxika mba ki ixikama ê",
    ),
    __EvalError: errorMessage(
      "KITUXI_KUA_EVAL",
      "kituxi kiazukama ni kikalakalu kia eval",
    ),
    __UNKNOWN_ERROR: errorMessage(
      "KITUXI_KIKIIJIA",
      "kituxi kiki kikiíjia mu mbandu iosu",
    ),
  },
  example: {
    __array: [
      "milongu",
      "mixi",
      "milundu",
      "misoma",
      "mikolo",
      "minungu",
      "mikanda",
      "mitue",
      "mifunu",
      "mikuála",
    ],
    __boolean: [
      "kidi",
      "makutu",
      "muenhu",
      "kiáfu",
      "kiazele",
      "kiaiiba",
      "kolo",
      "toba",
      "njimu",
      "kixímba",
    ],
    __function: [
      "kuijia mutu",
      "kuendesa ima",
      "kubanga kisoneku",
      "kutanga kuxika",
      "kuijia valolo",
      "kuvutuka mubangu",
      "kulanga kima",
      "kutuma email",
      "kuenda mu",
      "kukombo kaxaxi",
    ],
    __number: [
      "kitalu",
      "muvu",
      "kaxaxi",
      "ndandu",
      "thembu",
      "kivulu",
      "italu",
      "kumbi",
      "mivu",
      "kikuxi",
    ],
    __object: [
      "mutu",
      "mukuakikalakalu",
      "futa",
      "kitatu",
      "kididi",
      "mubangu",
      "muthindu",
      "kimbambala",
      "kima",
      "nzo",
    ],
    __string: [
      "lumbu",
      "mubangu",
      "madiandu",
      "email",
      "tenda ia kusueka",
      "njimbu",
      "token",
      "url",
      "slug",
      "dikalu",
    ],
    __void: [
      "kuijia mu kaxaxi",
      "kubandeka",
      "kukombo",
      "kuzunza",
      "kutunda mu kaxaxi",
      "kulanga",
      "kutuma email",
      "kuenda mu",
      "kusueka",
      "kutula",
    ],
  },
}).grammar();
