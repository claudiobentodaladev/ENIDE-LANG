import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const nihongo = new Language({
  language: "nihongo",
  about:
    "ENIDE wa dono gengo demo puroguramingu ga dekiru honyaku kano na toransupaira desu",

  include: DocStr(
    "fukumeru",
    "gengo, raiburari, matawa hoka no fairu no mojūru o rōdo suru tame ni shiyō saremasu",
  ),

  commands: {
    __about: DocStr(
      "shosai",
      "ENIDE shisutemu ni tsuite no jōhō o shutoku suru",
    ),
    __help: DocStr(
      "herupu",
      "riyō kanō na subete no komando risuto o hyōji suru",
    ),
    __version: DocStr("bajon", "ENIDE no genzai no bājon o kakunin suru"),
    __languages: DocStr(
      "gengo",
      "sapōto sarete iru subete no gengo risuto o hyōji suru",
    ),
    __documentation: DocStr(
      "dokyumento",
      "genzai no gengo no dokyumento o閲覧suru",
    ),
    __grammar: DocStr("bunpō", "gengo no bunpō kisoku o kakunin suru"),
  },

  library: {
    __standard: {
      main: DocStr("hyōjun", "shisutemu no kihon mesoddo ni akusesu suru"),
      __isarray: DocStr(
        "hairetsu_ka",
        "atai ga hairetsu ka dō ka o kakunin suru",
      ),
      __isobject: DocStr(
        "obujekuto_ka",
        "atai ga obujekuto ka dō ka o kakunin suru",
      ),
      __typeof: DocStr("kata_shirabe", "atai no dēta-gata o kaesu"),
      __parse: DocStr(
        "kaiseki",
        "mojiretsu o tekisetsu na dēta-gata ni henkan suru",
      ),
    },
    __math: {
      main: DocStr("sūgaku", "sūgaku kansū ni akusesu suru"),
      __pi: DocStr("PI", "enshū-ritsu no atai"),
      __sqrt: DocStr("heihōkon", "suji no heihōkon o keisan suru"),
      __pow: DocStr("ruijō", "suji no ruijō o keisan suru"),
      __round: DocStr("shishagonyū", "suji o mottomo chikai seisū ni marumeru"),
      __random: DocStr("randomu", "ransū o kaisuru"),
      __max: DocStr("saidai", "risuto no naka kara saidai-atai o shutoku suru"),
      __min: DocStr("saisho", "risuto no naka kara saisho-atai o shutoku suru"),
      __isNumber: DocStr("sūji_ka", "atai ga sūji ka dō ka o kakunin suru"),
      __isInteger: DocStr("seisū_ka", "atai ga seisū ka dō ka o kakunin suru"),
      __isFloat: DocStr("shōsū_ka", "atai ga shōsū ka dō ka o kakunin suru"),
      __cos: DocStr("cos", "kosein o keisan suru"),
      __sin: DocStr("sin", "sain o keisan suru"),
      __tan: DocStr("tan", "tanjento o keisan suru"),
    },

    __string: {
      main: DocStr("mojiretsu", "mojiretsu sōsa kansū ni akusesu suru"),
      __length: DocStr("nagasa", "mojiretsu no nagasa o shutoku suru"),
      __toUpperCase: DocStr(
        "ōmoji_ni",
        "mojiretsu o subete ōmoji ni henkan suru",
      ),
      __toLowerCase: DocStr(
        "komoji_ni",
        "mojiretsu o subete komoji ni henkan suru",
      ),
      __include: DocStr(
        "fukumu_ka",
        "mojiretsu ni tokutei no bubun ga fukumareru ka kakunin",
      ),
      __repeat: DocStr(
        "kurikaeshi_moji",
        "mojiretsu o shiteishita kaisū kurikaesu",
      ),
    },

    __date: {
      main: DocStr("hizuke", "hizuke to jikan no sōsa kansū ni akusesu suru"),
      __now: DocStr("ima", "genzai no hizuke to jikan o shutoku suru"),
      __year: DocStr("nen", "nen o shutoku suru"),
      __month: DocStr("tsuki", "tsuki o shutoku suru"),
      __dayMonth: DocStr("hi", "tsuki no hi o shutoku suru"),
      __dayWeek: DocStr("yōbi", "shū no yōbi o shutoku suru"),
      __hour: DocStr("ji", "ji o shutoku suru"),
      __minute: DocStr("fun", "fun o shutoku suru"),
      __second: DocStr("byō", "byō o shutoku suru"),
    },
  },

  types: {
    __number: DocStr("sūji", "sūji-gata hensu no sengen"),
    __string: DocStr("mojiretsu", "mojiretsu-gata hensu no sengen"),
    __boolean: DocStr("shinrigata", "ronri-gata (shin/gi) hensu no sengen"),
    __object: DocStr("obujekuto", "obujekuto kōzō no sengen"),
    __void: DocStr("kara", "kansu ga atai o kaesanai koto o shimesu"),
    __array: DocStr("hairetsu", "hairetsu kōzō no sengen"),
  },

  specialValues: {
    __true: DocStr("shin", "ronri-chi: shin"),
    __false: DocStr("gi", "ronri-chi: gi"),
    __null: DocStr("mu", "atai ga sonzai shinai koto o shimesu"),
  },

  words: {
    __new: DocStr("atarashii", "kurasu no atarashii insutansu o sakusei suru"),
    __this: DocStr("kore", "kurasu no genzai no insutansu o sanshō suru"),
    __extends: DocStr(
      "keishō",
      "kurasu ga hoka no kurasu kara keishō suru koto o shimesu",
    ),
  },

  accessModifiers: {
    __private: DocStr("puraibēto", "kurasu no naibu kara nomi akusesu kanō"),
    __public: DocStr("kōkai", "kurasu no gaibu kara akusesu kanō"),
    __protected: DocStr(
      "hogosumi",
      "kurasu to sono sabukurasu kara akusesu kanō",
    ),
    __readonly: DocStr("yomitori_senyō", "shokika go ni atai o henkō dekinai"),
    __static: DocStr(
      "seiteki",
      "insutansu dewa naku kurasu jishin ni zokusuru",
    ),
  },

  methods: {
    method: {
      __print: DocStr("hyōji", "atai o gamen ni hyōji suru"),
      __scan: DocStr("yomikomi", "yūzā nyūryoku kara atai o yomitoru"),
      __return: DocStr("kaesu", "kansu kara atai o kaesu"),
      __break: DocStr("chuudan", "genzai no rūpu mata wa burokku o nukeru"),
      __continue: DocStr("keizoku", "rūpu no tsugi no idaisū ni susumu"),
    },

    sentences: {
      __function: DocStr("kansu", "kansu no sengen"),
      __if: DocStr("moshi", "jōkenbun no sengen"),
      __else: DocStr("sore_igai", "jōken ga shin denai baai no burokku"),
      __while: DocStr("aida", "jōken ni motozuku rūpu"),
      __for: DocStr("kurikaeshi", "kauntā ni motozuku rūpu"),
      __switch: DocStr("sentaku", "fokusū no jōken bunki kōzō"),
      __case: DocStr("baai", "sentaku kōzō no tokutei no kēsu"),
      __default: DocStr("kihan", "dono kēsu ni mo icchi shinai baai no shori"),
      __try: DocStr("tamesu", "era-handoringu no kaishi"),
      __catch: DocStr("hosoku", "hassei shita era o shori suru"),
      __finally: DocStr("saigoni", "kanarazu jikkō sareru burokku"),
      __class: DocStr("kurasu", "atarashii kurasu no sengen"),
      __constructor: DocStr(
        "konstorakuta",
        "kurasu no obujekuto o shokika suru kansū",
      ),
    },
  },

  errors: {
    __labels: errorLabel(
      "Messēji",
      "Atai",
      "Hensū",
      "Propatī",
      "Obujekuto",
      "Kitai_sareta_mono",
      "Ukewatashita_mono",
      "Teisū_e_no_dainyū",
      "Chōfuku_paramēta",
      "Hinto",
      "Fusei_na_tōkun",
      "Sutakku_ōbāfurō",
      "Tōkun",
      "Nyūryoku_no_yoki_senu_shūryō",
    ),
    main: errorMessage("ERA", "ippan-tekina shisutemu era"),
    __TypeError: errorMessage(
      "KATA_ERA",
      "kono sōsa ni taishite fusei na dēta-kata desu",
    ),
    __InitError: errorMessage(
      "SHOKIKA_ERA",
      "hensū ga tekisetsu ni shokika sarete imasen",
    ),
    __ReferenceError: errorMessage(
      "SANSHŌ_ERA",
      "hensū mata wa kansū ga sonzai shimasen",
    ),
    __SyntaxError: errorMessage(
      "KUMON_ERA",
      "kōdo no kijutsu ni ayamari ga arimasu",
    ),
    __RangeError: errorMessage("HANI_ERA", "atai ga kyo-yō hani-gai desu"),
    __URIError: errorMessage("URI_ERA", "fusei na URI kōshiki desu"),
    __EvalError: errorMessage(
      "EVAL_ERA",
      "eval-kansu de era ga hassei shimashita",
    ),
    __UNKNOWN_ERROR: errorMessage(
      "FUMEI_NA_ERA",
      "michi no era ga hassei shimashita",
    ),
  },

  example: {
    __array: [
      "tabemono",
      "kuni",
      "meibo",
      "sūji_risuto",
      "iro",
      "shōhin",
      "yūzā",
      "kategorī",
      "ten",
      "gengo",
    ],
    __boolean: [
      "jōtai",
      "yukō_ka",
      "shiyō_kanō",
      "junbi_kanryō",
      "shōnin_zumi",
      "rogu-in_chū",
      "jikkō_chū",
      "kanryō",
      "shōmei_zumi",
      "sakujo_zumi",
    ],
    __function: [
      "namae_shutoku",
      "atai_keisan",
      "dēta_hyōji",
      "purofīru_kōshin",
      "moji_seikei",
      "kōdo_kaiseki",
      "nyūryoku_chekku",
      "fairu_hozon",
      "messēji_sōshin",
      "gōkei_dassu",
    ],
    __number: [
      "nenrei",
      "tanjō-nen",
      "heikin",
      "gōkei",
      "kakaku",
      "shisū",
      "jikan",
      "kazū",
      "sukoa",
      "ji",
    ],
    __object: [
      "hito",
      "kyaku",
      "settei",
      "kaitō",
      "shiharai",
      "kōsei",
      "purofīru",
      "jūsho",
      "metadēta",
      "sesshon",
    ],
    __string: [
      "namae",
      "taitoru",
      "setsumei",
      "mēru",
      "pasuwādo",
      "messēji",
      "tagu",
      "kī",
      "url",
      "rinku",
    ],
    __void: [
      "kaishi",
      "sakujo",
      "teishi",
      "kurīningu",
      "hakai",
      "shūryō",
      "kyasshu_kuria",
      "zenbu_hozon",
      "sōshin",
      "rogu-in",
    ],
  },
}).grammar();
