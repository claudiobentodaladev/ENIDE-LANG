import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabels } from "../utils/stucture.grammar.js";

export const kimbundu = new Language({
  language: "kimbundu",
  about:
    "ENIDE muene mulanguji ua kusoneka kikalakalu kia kitalu, iabana uhete ua kusoneka mu kidimi kioso-kioso",

  include: DocStr(
    "kubandeka",
    "phala kubandeka madimi, mipunda isoneku mba mivulu ia itendelesu mu mikanda yankua",
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
      __minute: DocStr("ndambu ia kumbi", "phala kuíjia ndambu ia kumbi"),
      __second: DocStr("ndambu ndenge", "phala kuíjia ndambu ndenge"),
      __milliseconds: DocStr("milisekundu", "phala kuíjia milisekundu"),
    },

    __array: {
      main: DocStr("milongu", "phala kuendesa kikalakalu ia milongu"),
      __addStart: DocStr(
        "bandeka ku thandu",
        "phala kubandeka mivulu miyaluka ku thandu ia milongu, ni kuvutula bunenu buakinda bua milongu",
      ),
      __addEnd: DocStr(
        "bandeka ku sukilu",
        "phala kubandeka mivulu miyaluka ku sukilu ia milongu",
      ),
      __join: DocStr(
        "bhakana",
        "phala kubhakana mivulu iosu ia milongu mu kisoneku kimoxi",
      ),
      __length: DocStr(
        "milonguBunenu",
        "phala kuíjia mba kusoneka bunenu bua milongu",
      ),
    },

    __time: {
      main: DocStr(
        "thembu",
        "phala kuendesa kikalakalu ia thembu phala kufulumuna kikalakalu kia kusoneka",
      ),
      __timeOut: DocStr(
        "thembu iakabuka",
        "phala kuendesa kikalakalu kimoxi kioso kiakabuka kaxaxi ka milisekundu iatula",
      ),
      __timeInterval: DocStr(
        "thembu ia kuvutuka",
        "phala kuendesa kikalakalu kimoxi kuvutuka mbala ni mbala mu milisekundu iatula",
      ),
    },
  },
  types: {
    __number: DocStr("kitalu", "phala kubandeka kialongo ia muthindu kitalu"),
    __string: DocStr(
      "kisoneku",
      "phala kubandeka kialongo ia muthindu kisoneku",
    ),
    __boolean: DocStr(
      "kidi-makutu",
      "phala kubandeka kialongo ia muthindu kidi-makutu",
    ),
    __object: DocStr("kimbambala", "phala kubandeka kimbambala ia musoneku"),
    __void: DocStr(
      "nguma",
      "phala kubandeka kikalakalu kia kuvutula valolo nguma",
    ),
    __array: DocStr("milongu", "phala kubandeka mivulu mu milongu"),
  },

  specialValues: {
    __true: DocStr("kidi", "valolo ia kidi-makutu kidi"),
    __false: DocStr("makutu", "valolo ia kidi-makutu makutu"),
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
      __clear: DocStr("kusukula", "ku sukula kishiku"),
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
    __labels: errorLabels({
      message: "Ijimbu",
      value: "Valolo",
      variable: "Kima kiakyakama",
      property: "Uhemba",
      object: "Kima",
      expected: "Kukingila",
      received: "Kutambula",
      constAssignment: "Kibane kiakukola",
      duplicateParam: "Kibandelu kiakiyole",
      hint: "Kandandu",
      invalidToken: "Tomboni kiakiebe",
      stackOverflow: "Kibutu kiakubunduka",
      token: "Tomboni",
      unexpectedEnd: "Maku ma kubunda kiandala",
      file: "Mukanda",
      didYouMean: "ukandala kuamba",
      includedFrom: "kuzabuka kiobia",
      size: "Kikete",
      index: "Muketelu",
      path: "Njila",
      available: "Jiababa",
      element: "Kima",
      hintMissingEquals: 'kukamba o "=" kua dijina ni valolo',
      hintMissingSemicolon: 'kukamba ";" kumpúrinda kua kithuiki kiki',
      hintUnclosedBlock: 'o "{" kiabwila mu rinya {line} kiakukitukile ni "}"',
      hintUnclosedBracket:
        'o "[" kiabwila mu rinya {line} kiakukitukile ni "]"',
      hintUnclosedComment:
        "o kibaku kiabwila mu rinya {line} kiakukitukile ni */",
      hintUnclosedString:
        "o mukanda kiabwila mu rinya {line} kiwotela ni aspas di kukitula",
      hintModuleNotFound: 'modulu kiwene; kujimba mu "{path}"',
      hintLibraryUnknown: "madilu kiayene; jiababa: {list}",
      hintIndexRange:
        "o vector uala ni kikete {size}; muketelu uababa: {range}",
      hintIndexEmpty:
        "o vector uala mu kiyala, kienhoki kiwene muketelu uababa",
      hintNotArray: "o valulu ki kiaki vector",
      hintNull: "valulu kiwene kiabanyinu (nulo ni kiayene)",
      hintNaN: "o numu ki kiabi (NaN)",
      hintInfinite: "o numu uala ni mukota",
      hintNoInput: "o programa uandale kimbamba, n'enki o kimbamba kiabwa",
      hintInternal:
        "kiki kiayene ubadi ya mu nzo ya Enide, ki ubadi ya programa yé; kamba n'enki",
      hintDuplicateProperty: 'o uhemba "{name}" uatumbukile mukwa rixi',
      hintMissingProperty: 'o uhemba "{name}" kiuéne',
      hintArrayMixed: "vector kiwakala kukitakana vector ni valulu",
      hintArrayEmpty: "vector uandala valulu umoxi",
      hintObjectArrayShape:
        'o kima {index} kiwene kiefu kia dianga: tala o uhemba "{name}"',
      hintLoopCounter: "o mukitulu ua ndumba uala ni numu",
      hintErrorsFound: "{count} ubadi jiwene",
    }),
    main: errorMessage("UBADI", "ubadi ya kimbundu ya sistema"),
    __TypeError: errorMessage("UBADI_UA_KIFUA", "kifua kiakiebe mu kikalakalu"),
    __InitError: errorMessage("UBADI_UA_KUBATUKA", "variável kiayake"),
    __ReferenceError: errorMessage(
      "UBADI_UA_KUTAMBULA",
      "variável, mukitulu ni madilu kiuéne",
    ),
    __SyntaxError: errorMessage("UBADI_UA_SINTAXE", "kodigu kiakiebe"),
    __RangeError: errorMessage("UBADI_UA_KIKETE", "valulu ki uala mu kikete"),
    __URIError: errorMessage("UBADI_UA_URI", "URI kiayandame ni kiakiebe"),
    __EvalError: errorMessage("UBADI_UA_EVAL", "ubadi ya eval"),
    __UNKNOWN_ERROR: errorMessage("UBADI_KIUYENE", "ubadi ki kiayene"),
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
