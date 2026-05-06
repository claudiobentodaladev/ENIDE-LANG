import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const latviesu = new Language({
  language: "latviesu",
  about: "ENIDE ir poliglots transpilers, kas ļauj programmēt jebkurā valodā",

  include: DocStr(
    "iekļaut",
    "izmanto, lai iekļautu valodu, bibliotēkas vai datu struktūras no citiem failiem",
  ),

  commands: {
    __about: DocStr("par", "lai iegūtu informāciju par ENIDE"),
    __help: DocStr("palīdzība", "lai iegūtu visu pieejamo komandu sarakstu"),
    __version: DocStr("versija", "lai iegūtu pašreizējo ENIDE versiju"),
    __languages: DocStr("valodas", "lai iegūtu visu pieejamo valodu sarakstu"),
    __documentation: DocStr("rokasgrāmata", "lai iegūtu valodas dokumentāciju"),
    __grammar: DocStr("gramatika", "lai iegūtu valodas gramatikas aprakstu"),
  },

  library: {
    __standard: {
      main: DocStr("standarts", "lai piekļūtu noderīgām standarta metodēm"),
      __isarray: DocStr("ir_masīvs", "lai pārbaudītu, vai vērtība ir masīvs"),
      __isobject: DocStr(
        "ir_objekts",
        "lai pārbaudītu, vai vērtība ir objekts",
      ),
      __typeof: DocStr("Tips", "lai iegūtu vērtības tipu"),
      __parse: DocStr(
        "Parsēt",
        "lai konvertētu teksta vērtību uz tās pareizo tipu",
      ),
    },
    __math: {
      main: DocStr("matemātika", "lai piekļūtu matemātikas funkcijām"),
      __pi: DocStr("PI", "lai iegūtu pi vērtību"),
      __sqrt: DocStr("Sakne", "lai iegūtu kvadrātsakni no skaitļa"),
      __pow: DocStr("Pakāpe", "lai kāpinātu skaitli pakāpē"),
      __round: DocStr("Noapaļot", "lai noapaļotu skaitli"),
      __random: DocStr("Nejaušs", "lai iegūtu nejaušu skaitli"),
      __max: DocStr("Maksimums", "lai iegūtu maksimālo vērtību"),
      __min: DocStr("Minimums", "lai iegūtu minimālo vērtību"),
      __isNumber: DocStr(
        "IrSkaitlis",
        "lai pārbaudītu, vai vērtība ir skaitlis",
      ),
      __isInteger: DocStr(
        "IrVesels",
        "lai pārbaudītu, vai vērtība ir vesels skaitlis",
      ),
      __isFloat: DocStr(
        "IrDecimāls",
        "lai pārbaudītu, vai vērtība ir decimālskaitlis",
      ),
      __cos: DocStr("Cos", "lai iegūtu leņķa kosinusu radiānos"),
      __sin: DocStr("Sin", "lai iegūtu leņķa sinusu radiānos"),
      __tan: DocStr("Tan", "lai iegūtu leņķa tangensu radiānos"),
    },

    __string: {
      main: DocStr("virkne", "lai piekļūtu teksta manipulācijas funkcijām"),
      __length: DocStr("Garums", "lai iegūtu virknes garumu"),
      __toUpperCase: DocStr(
        "LielieBurti",
        "lai pārvērstu virkni uz lielajiem burtiem",
      ),
      __toLowerCase: DocStr(
        "MazieBurti",
        "lai pārvērstu virkni uz mazajiem burtiem",
      ),
      __include: DocStr(
        "Satur",
        "lai pārbaudītu, vai virkne satur apakšvirkni",
      ),
      __repeat: DocStr(
        "Atkārtot",
        "lai atkārtotu virkni norādīto reižu skaitu",
      ),
    },

    __date: {
      main: DocStr("datums", "lai piekļūtu datuma un laika funkcijām"),
      __now: DocStr("Tagad", "lai iegūtu pašreizējo datumu un laiku"),
      __year: DocStr("Gads", "lai iegūtu gadu"),
      __month: DocStr("Mēnesis", "lai iegūtu mēnesi"),
      __dayMonth: DocStr("MēnešaDiena", "lai iegūtu mēneša dienu"),
      __dayWeek: DocStr("NedēļasDiena", "lai iegūtu nedēļas dienu"),
      __hour: DocStr("Stunda", "lai iegūtu stundu"),
      __minute: DocStr("Minūte", "lai iegūtu minūti"),
      __second: DocStr("Sekunde", "lai iegūtu sekundi"),
    },
  },

  types: {
    __number: DocStr("skaitlis", "lai deklarētu skaitļa tipa mainīgo"),
    __string: DocStr("teksts", "lai deklarētu teksta tipa mainīgo"),
    __boolean: DocStr("bool", "lai deklarētu loģiskā tipa mainīgo"),
    __object: DocStr("objekts", "lai deklarētu statisku objektu"),
    __void: DocStr("tukšums", "lai deklarētu funkciju, kas neatgriež vērtību"),
    __array: DocStr("masīvs", "lai deklarētu masīva struktūru"),
  },

  specialValues: {
    __true: DocStr("patiess", "loģiskā vērtība: patiess"),
    __false: DocStr("aplams", "loģiskā vērtība: aplams"),
    __null: DocStr("nulle", "vērtības trūkums"),
  },

  words: {
    __new: DocStr("jauns", "lai izveidotu jaunu klases instanci"),
    __this: DocStr("šis", "lai piekļūtu pašas klases atribūtiem"),
    __extends: DocStr(
      "paplašina",
      "lai deklarētu, ka klase manto no citas klases",
    ),
  },

  accessModifiers: {
    __private: DocStr("privāts", "pieejams tikai klases iekšienē"),
    __public: DocStr("publisks", "pieejams no jebkuras vietas"),
    __protected: DocStr("aizsargāts", "pieejams klasē un tās apakšklasēs"),
    __readonly: DocStr(
      "tikai_lasāms",
      "vērtību var piešķirt tikai vienu reizi",
    ),
    __static: DocStr("statisks", "pieder klasei, nevis tās instanci"),
  },

  methods: {
    method: {
      __print: DocStr("drukāt", "lai izvadītu vērtību uz ekrāna"),
      __scan: DocStr("lasīt", "lai lasītu vērtību no ievades"),
      __return: DocStr("atgriezt", "lai atgrieztu vērtību no funkcijas"),
      __break: DocStr("pārtraukt", "lai izietu no cikla"),
      __continue: DocStr("turpināt", "lai pārietu uz nākamo iterāciju"),
    },

    sentences: {
      __function: DocStr("funkcija", "lai deklarētu funkciju"),
      __if: DocStr("ja", "lai deklarētu nosacījumu"),
      __else: DocStr("citādi", "lai deklarētu alternatīvu nosacījumu"),
      __while: DocStr("kamēr", "lai deklarētu 'kamēr' ciklu"),
      __for: DocStr("cikls", "lai deklarētu 'cikls' (for) ciklu"),
      __switch: DocStr("izvēle", "lai deklarētu atlases struktūru"),
      __case: DocStr("gadījums", "lai deklarētu gadījumu atlasē"),
      __default: DocStr(
        "noklusējums",
        "ja neviens no gadījumiem netiek atrasts",
      ),
      __try: DocStr("mēģināt", "lai deklarētu mēģinājuma bloku"),
      __catch: DocStr("ķert", "lai deklarētu kļūdu apstrādes bloku"),
      __finally: DocStr("beigās", "izpildās neatkarīgi no rezultāta"),
      __class: DocStr("klase", "lai deklarētu klasi"),
      __constructor: DocStr(
        "konstruktors",
        "struktūra, kas ļauj deklarēt klases atribūtus",
      ),
    },
  },

  errors: {
    __labels: errorLabel(
      "Ziņojums",
      "Vērtība",
      "Mainīgais",
      "Īpašība",
      "Objekts",
      "Gaidīts",
      "Saņemts",
      "Konstantes Piešķiršana",
      "Dublēts Parametrs",
      "Padoms",
      "Nederīgs Tokens",
      "Steka Pārpilde",
      "Tokens",
      "Negaidītas Ievades Beigas",
    ),
    main: errorMessage("KĻŪDA", "sistēmas vispārīga kļūda"),
    __TypeError: errorMessage("TIPA_KĻŪDA", "nederīgs tips operācijā"),
    __InitError: errorMessage(
      "INICIALIZĀCIJAS_KĻŪDA",
      "mainīgais netika inicializēts",
    ),
    __ReferenceError: errorMessage(
      "ATSAUCES_KĻŪDA",
      "mainīgais, funkcija vai bibliotēka neeksistē",
    ),
    __SyntaxError: errorMessage("SINTAKSES_KĻŪDA", "nederīgs kods"),
    __RangeError: errorMessage(
      "DIAPAZONA_KĻŪDA",
      "vērtība ārpus atļautā diapazona",
    ),
    __URIError: errorMessage("URI_KĻŪDA", "slikti formēts vai nederīgs URI"),
    __EvalError: errorMessage("EVAL_KĻŪDA", "kļūda saistībā ar eval"),
    __UNKNOWN_ERROR: errorMessage("NEZINĀMA_KĻŪDA", "pilnīgi nezināma kļūda"),
  },

  example: {
    __array: [
      "ēdieni",
      "valstis",
      "vienumi",
      "tagi",
      "krāsas",
      "produkti",
      "lietotāji",
      "kategorijas",
      "punkti",
      "valodas",
    ],
    __boolean: [
      "statuss",
      "irPieaudzis",
      "irAktīvs",
      "irRedzams",
      "irAtļauts",
      "irPieteicies",
      "irIespējots",
      "irPabeigts",
      "irPārbaudīts",
      "irDzēsts",
    ],
    __function: [
      "iegūtVārdu",
      "iegūtVērtību",
      "saraksts",
      "iegūtDatus",
      "formatētDatus",
      "parsētIevadi",
      "validētFormu",
      "atjaunintVienumus",
      "atjauninātStatusu",
      "aprēķinātKopā",
    ],
    __number: [
      "vecums",
      "gads",
      "vidējais",
      "kopā",
      "cena",
      "indekss",
      "ilgums",
      "daudzums",
      "punkti",
      "laiks",
    ],
    __object: [
      "persona",
      "lietotājs",
      "konfig",
      "atbilde",
      "maksājums",
      "iestatījumi",
      "profils",
      "adrese",
      "metadati",
      "sesija",
    ],
    __string: [
      "vārds",
      "virsraksts",
      "apraksts",
      "epasts",
      "parole",
      "ziņojums",
      "etiķete",
      "tokens",
      "url",
      "saitne",
    ],
    __void: [
      "pieteikties",
      "sākt",
      "notīrīt",
      "atiestatīt",
      "iznīcināt",
      "iziet",
      "notīrītKešatmiņu",
      "saglabāt",
      "nosūtītEpastu",
      "ieiet",
    ],
  },
}).grammar();
