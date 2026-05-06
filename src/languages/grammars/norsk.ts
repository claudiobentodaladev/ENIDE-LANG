import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const norsk = new Language({
  language: "norsk",
  about:
    "ENIDE er en oversettbar transpiler som gjør det mulig å programmere på ethvert språk",

  include: DocStr(
    "inkluder",
    "brukes til å inkludere språk, biblioteker eller moduler fra andre filer",
  ),

  commands: {
    __about: DocStr("om", "hent informasjon om ENIDE-systemet"),
    __help: DocStr("hjelp", "vis en liste over alle tilgjengelige kommandoer"),
    __version: DocStr("versjon", "vis den gjeldende versjonen av ENIDE"),
    __languages: DocStr("sprak", "vis en liste over alle støttede språk"),
    __documentation: DocStr(
      "dok",
      "les dokumentasjonen for det gjeldende språket",
    ),
    __grammar: DocStr("grammatikk", "vis de grammatiske reglene for språket"),
  },

  library: {
    __standard: {
      main: DocStr("standard", "tilgang til systemets basismetoder"),
      __isarray: DocStr("er_liste", "sjekker om verdien er en liste (array)"),
      __isobject: DocStr("er_objekt", "sjekker om verdien er et objekt"),
      __typeof: DocStr("type_av", "returnerer datatypen til verdien"),
      __parse: DocStr(
        "analyser",
        "konverterer en tekststreng til riktig datatype",
      ),
    },
    __math: {
      main: DocStr("matematikk", "tilgang til matematiske funksjoner"),
      __pi: DocStr("PI", "verdien av konstanten Pi"),
      __sqrt: DocStr("kvadratrot", "beregner kvadratroten av et tall"),
      __pow: DocStr("potens", "beregner potensen av et tall"),
      __round: DocStr("avrund", "runder et tall til nærmeste heltall"),
      __random: DocStr("tilfeldig", "genererer et tilfeldig tall"),
      __max: DocStr("maksimum", "finner den høyeste verdien i en liste"),
      __min: DocStr("minimum", "finner den laveste verdien i en liste"),
      __isNumber: DocStr("er_tall", "sjekker om verdien er et tall"),
      __isInteger: DocStr("er_heltall", "sjekker om verdien er et heltall"),
      __isFloat: DocStr("er_desimal", "sjekker om verdien er et desimaltall"),
      __cos: DocStr("cos", "beregner cosinus"),
      __sin: DocStr("sin", "beregner sinus"),
      __tan: DocStr("tan", "beregner tangens"),
    },

    __string: {
      main: DocStr("tekst", "funksjoner for tekstmanipulering"),
      __length: DocStr("lengde", "henter lengden på teksten"),
      __toUpperCase: DocStr(
        "til_store_bokstaver",
        "konverterer tekst til store bokstaver",
      ),
      __toLowerCase: DocStr(
        "til_sma_bokstaver",
        "konverterer tekst til små bokstaver",
      ),
      __include: DocStr(
        "inneholder",
        "sjekker om teksten inneholder en delstreng",
      ),
      __repeat: DocStr(
        "gjenta_tekst",
        "gjentar teksten et spesifisert antall ganger",
      ),
    },

    __date: {
      main: DocStr("dato", "funksjoner for dato og tid"),
      __now: DocStr("na", "henter nåværende dato og tid"),
      __year: DocStr("ar", "henter året"),
      __month: DocStr("maned", "henter måneden"),
      __dayMonth: DocStr("dag_i_maned", "henter dagen i måneden"),
      __dayWeek: DocStr("ukedag", "henter ukedagen"),
      __hour: DocStr("time", "henter timen"),
      __minute: DocStr("minutt", "henter minuttene"),
      __second: DocStr("sekund", "henter sekundene"),
    },
  },

  types: {
    __number: DocStr("tall", "deklarasjon av en numerisk variabel"),
    __string: DocStr("tekst", "deklarasjon av en tekstvariabel"),
    __boolean: DocStr("bool", "deklarasjon av en logisk variabel (sant/usant)"),
    __object: DocStr("objekt", "deklarasjon av en objektstruktur"),
    __void: DocStr("tom", "indikerer at en funksjon ikke returnerer en verdi"),
    __array: DocStr("liste", "deklarasjon av en listestruktur"),
  },

  specialValues: {
    __true: DocStr("sant", "logisk verdi sann"),
    __false: DocStr("usant", "logisk verdi usann"),
    __null: DocStr("ingenting", "fravær av en verdi"),
  },

  words: {
    __new: DocStr("ny", "oppretter en ny instans av en klasse"),
    __this: DocStr("denne", "refererer til den nåværende instansen av klassen"),
    __extends: DocStr(
      "utvider",
      "indikerer at en klasse arver fra en annen klasse",
    ),
  },

  accessModifiers: {
    __private: DocStr("privat", "kun tilgjengelig internt i klassen"),
    __public: DocStr("offentlig", "tilgjengelig fra utsiden av klassen"),
    __protected: DocStr(
      "beskyttet",
      "tilgjengelig i klassen og dens underklasser",
    ),
    __readonly: DocStr(
      "kun_lesing",
      "verdi som ikke kan endres etter initialisering",
    ),
    __static: DocStr("statisk", "tilhører klassen selv, ikke en instans"),
  },

  methods: {
    method: {
      __print: DocStr("skriv", "viser en verdi på skjermen"),
      __scan: DocStr("les", "leser en verdi fra brukerens inndata"),
      __return: DocStr("returner", "sender en verdi tilbake fra en funksjon"),
      __break: DocStr("avbryt", "går ut av den gjeldende løkken eller blokken"),
      __continue: DocStr("fortsett", "hopper til neste iterasjon av løkken"),
    },

    sentences: {
      __function: DocStr("funksjon", "deklarasjon av en funksjon"),
      __if: DocStr("hvis", "deklarasjon av en betingelse"),
      __else: DocStr("ellers", "blokk for når betingelsen ikke er sann"),
      __while: DocStr("mens", "løkke basert på en betingelse"),
      __for: DocStr("for", "løkke basert på en teller"),
      __switch: DocStr("velg", "struktur for flere valgmuligheter"),
      __case: DocStr("tilfelle", "et spesifikt tilfelle i en valgstruktur"),
      __default: DocStr("standard", "kjøres hvis ingen andre tilfeller passer"),
      __try: DocStr("prov", "start av feilhåndtering"),
      __catch: DocStr("fang", "behandler feilen som oppstod"),
      __finally: DocStr("endelig", "blokk som alltid kjøres til slutt"),
      __class: DocStr("klasse", "deklarasjon av en ny klasse"),
      __constructor: DocStr(
        "konstruktor",
        "funksjon som initialiserer objektet til klassen",
      ),
    },
  },

  errors: {
    __labels: errorLabel(
      "Melding",
      "Verdi",
      "Variabel",
      "Egenskap",
      "Objekt",
      "Forventet",
      "Mottatt",
      "Tildeling_til_konstant",
      "Duplikat_parameter",
      "Tips",
      "Ugyldig_token",
      "Stabel_overflyt",
      "Token",
      "Uventet_slutt_pa_inndata",
    ),
    main: errorMessage("FEIL", "generisk systemfeil"),
    __TypeError: errorMessage(
      "TYPE_FEIL",
      "ugyldig datatype for denne operasjonen",
    ),
    __InitError: errorMessage(
      "INITIALISERINGS_FEIL",
      "variabelen er ikke riktig initialisert",
    ),
    __ReferenceError: errorMessage(
      "REFERANSE_FEIL",
      "variabelen eller funksjonen eksisterer ikke",
    ),
    __SyntaxError: errorMessage("SYNTAKS_FEIL", "feil i kodens skrivemåte"),
    __RangeError: errorMessage(
      "INTERVALL_FEIL",
      "verdien er utenfor det tillatte intervallet",
    ),
    __URIError: errorMessage("URI_FEIL", "ugyldig URI-format"),
    __EvalError: errorMessage("EVAL_FEIL", "feil i eval-funksjonen"),
    __UNKNOWN_ERROR: errorMessage(
      "UKJENT_FEIL",
      "en helt ukjent feil har oppstått",
    ),
  },

  example: {
    __array: [
      "mat",
      "land",
      "navneliste",
      "tall_liste",
      "farger",
      "produkter",
      "brukere",
      "kategorier",
      "poeng",
      "sprak",
    ],
    __boolean: [
      "status",
      "er_aktiv",
      "kan_bruke",
      "er_klar",
      "autorisert",
      "er_innlogget",
      "kjorer",
      "fullfort",
      "verifisert",
      "slettet",
    ],
    __function: [
      "hentNavn",
      "beregnVerdi",
      "visData",
      "oppdaterProfil",
      "formaterTekst",
      "analyserKode",
      "sjekkInndata",
      "lagreFil",
      "sendMelding",
      "summerAlt",
    ],
    __number: [
      "alder",
      "fodselsar",
      "gjennomsnitt",
      "total",
      "pris",
      "indeks",
      "tid",
      "antall",
      "poengsum",
      "time",
    ],
    __object: [
      "person",
      "kunde",
      "innstillinger",
      "svar",
      "betaling",
      "konfigurasjon",
      "profil",
      "adresse",
      "metadata",
      "sesjon",
    ],
    __string: [
      "navn",
      "tittel",
      "beskrivelse",
      "epost",
      "passord",
      "melding",
      "tagg",
      "nokkel",
      "url",
      "lenke",
    ],
    __void: [
      "start",
      "slett",
      "stopp",
      "rydd",
      "odelegg",
      "avslutt",
      "tøm_buffer",
      "lagre_alt",
      "send",
      "logg_inn",
    ],
  },
}).grammar();
