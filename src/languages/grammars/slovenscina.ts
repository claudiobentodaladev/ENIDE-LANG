import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const slovenscina = new Language({
  language: "slovenscina",
  about:
    "ENIDE je prevedljivi transpiler ki omogoca programiranje v kateremkoli jeziku",

  include: DocStr(
    "vkljuci",
    "uporablja se za vkljucitev jezika, knjiznic ali zunanjih modulov",
  ),

  commands: {
    __about: DocStr("o", "prikaze informacije o projektu ENIDE"),
    __help: DocStr("pomoc", "prikaze seznam vseh razpolozljivih ukazov"),
    __version: DocStr("razlicica", "prikaze trenutno razlicico ENIDE"),
    __languages: DocStr("jeziki", "prikaze seznam vseh podprtih jezikov"),
    __documentation: DocStr("dok", "prikaze dokumentacijo za trenutni jezik"),
    __grammar: DocStr("gramatika", "prikaze pravila skladnje jezika"),
  },

  library: {
    __standard: {
      main: DocStr("standard", "dostop do osnovnih funkcij sistema"),
      __isarray: DocStr(
        "je_seznam",
        "preveri, ali je vrednost seznam (tabela)",
      ),
      __isobject: DocStr("je_objekt", "preveri, ali je vrednost objekt"),
      __typeof: DocStr("vrsta_od", "vrne podatkovni tip spremenljivke"),
      __parse: DocStr(
        "razclani",
        "pretvori besedilo v ustrezen podatkovni tip",
      ),
    },
    __math: {
      main: DocStr("matematika", "matematicne funkcije in konstante"),
      __pi: DocStr("PI", "vrednost konstante Pi"),
      __sqrt: DocStr("koren", "izracuna kvadratni koren"),
      __pow: DocStr("potenca", "izracuna potenco stevila"),
      __round: DocStr("zaokrozi", "zaokrozi stevilo na najblizje celo stevilo"),
      __random: DocStr("nakljucno", "ustvari nakljucno stevilo"),
      __max: DocStr("maksimum", "vrne najvecjo vrednost iz seznama"),
      __min: DocStr("minimum", "vrne najmanjso vrednost iz seznama"),
      __isNumber: DocStr("je_stevilo", "preveri, ali je vrednost stevilo"),
      __isInteger: DocStr(
        "je_celo_stevilo",
        "preveri, ali je vrednost celo stevilo",
      ),
      __isFloat: DocStr(
        "je_decimalno",
        "preveri, ali je vrednost decimalno stevilo",
      ),
      __cos: DocStr("cos", "izracuna kosinus"),
      __sin: DocStr("sin", "izracuna sinus"),
      __tan: DocStr("tan", "izracuna tangens"),
    },

    __string: {
      main: DocStr("niz", "funkcije za delo z besedilnimi nizi"),
      __length: DocStr("dolzina", "vrne stevilo znakov v nizu"),
      __toUpperCase: DocStr("na_velike", "pretvori besedilo v velike crke"),
      __toLowerCase: DocStr("na_male", "pretvori besedilo v male crke"),
      __include: DocStr(
        "vsebuje",
        "preveri, ali niz vsebuje doloceno besedilo",
      ),
      __repeat: DocStr("ponovi", "ponovi niz doloceno stevilo krat"),
    },

    __date: {
      main: DocStr("datum", "funkcije za delo z datumom in casom"),
      __now: DocStr("zdaj", "vrne trenutni datum in cas"),
      __year: DocStr("leto", "vrne leto"),
      __month: DocStr("mesec", "vrne mesec"),
      __dayMonth: DocStr("dan_meseca", "vrne dan v mesecu"),
      __dayWeek: DocStr("dan_tedna", "vrne dan v tednu"),
      __hour: DocStr("ura", "vrne uro"),
      __minute: DocStr("minuta", "vrne minute"),
      __second: DocStr("sekunda", "vrne sekunde"),
    },
  },

  types: {
    __number: DocStr("stevilo", "deklaracija stevilcne spremenljivke"),
    __string: DocStr("niz", "deklaracija besedilne spremenljivke"),
    __boolean: DocStr(
      "logicno",
      "deklaracija logicne spremenljivke (resnica/laz)",
    ),
    __object: DocStr("objekt", "deklaracija staticnega objekta"),
    __void: DocStr("prazno", "oznacuje, da funkcija ne vrne nobene vrednosti"),
    __array: DocStr("seznam", "deklaracija seznama elementov"),
  },

  specialValues: {
    __true: DocStr("resnica", "logicna vrednost resnica"),
    __false: DocStr("laz", "logicna vrednost laz"),
    __null: DocStr("nic", "predstavlja odsotnost vrednosti"),
  },

  words: {
    __new: DocStr("novo", "ustvari nov primerek razreda"),
    __this: DocStr("ta", "sklic na trenutni objekt"),
    __extends: DocStr("razsirja", "oznacuje dedovanje razreda"),
  },

  accessModifiers: {
    __private: DocStr("zasebno", "dostopno samo znotraj razreda"),
    __public: DocStr("javno", "dostopno od povsod"),
    __protected: DocStr(
      "zasciteno",
      "dostopno v razredu in njegovih podrazredih",
    ),
    __readonly: DocStr("samo_za_branje", "vrednosti ni mogoce spreminjati"),
    __static: DocStr("staticno", "pripada razredu, ne primerku"),
  },

  methods: {
    method: {
      __print: DocStr("izpisi", "izpise vrednost na zaslon"),
      __scan: DocStr("preberi", "prebere vhod uporabnika"),
      __return: DocStr("vrni", "vrne vrednost iz funkcije"),
      __break: DocStr("prekini", "takoj ustavi trenutno zanko"),
      __continue: DocStr("nadaljuj", "skoci na naslednjo ponovitev zanke"),
    },

    sentences: {
      __function: DocStr("funkcija", "deklaracija nove funkcije"),
      __if: DocStr("ce", "pogojni stavek"),
      __else: DocStr("sicer", "blok, ce pogoj ni izpolnjen"),
      __while: DocStr("dokler", "zanka, dokler je pogoj izpolnjen"),
      __for: DocStr("za", "zanka s fiksnim stevilom ponovitev"),
      __switch: DocStr("izbira", "stavek za izbiro med vec moznostmi"),
      __case: DocStr("primer", "posamezen primer v stavku izbira"),
      __default: DocStr("privzeto", "izvede se, ce se noben primer ne ujema"),
      __try: DocStr("poskusi", "blok za obravnavo napak"),
      __catch: DocStr("ujemi", "obravnava ulovljene napake"),
      __finally: DocStr("koncno", "blok, ki se vedno izvede na koncu"),
      __class: DocStr("razred", "deklaracija novega razreda"),
      __constructor: DocStr(
        "konstruktor",
        "funkcija za ustvarjanje novega objekta",
      ),
    },
  },

  errors: {
    __labels: errorLabel(
      "Sporocilo",
      "Vrednost",
      "Spremenljivka",
      "Lastnost",
      "Objekt",
      "Pricakovano",
      "Prejeto",
      "Dodelitev_konstanti",
      "Podvojen_parameter",
      "Nasvet",
      "Neveljaven_zeton",
      "Prekoracitev_skladovnica",
      "Zeton",
      "Nepricakovan_konec_vhoda",
    ),
    main: errorMessage("NAPAKA", "splosna sistemska napaka"),
    __TypeError: errorMessage(
      "NAPAKA_TIPA",
      "neveljaven podatkovni tip za operacijo",
    ),
    __InitError: errorMessage(
      "NAPAKA_ZACETKA",
      "spremenljivka ni bila zacetno nastavljena",
    ),
    __ReferenceError: errorMessage(
      "NAPAKA_REFERENCE",
      "sklic na spremenljivko, ki ne obstaja",
    ),
    __SyntaxError: errorMessage("NAPAKA_SKLADNJE", "skladanjska napaka v kodi"),
    __RangeError: errorMessage(
      "NAPAKA_OBSEGA",
      "vrednost je zunaj dovoljenega obsega",
    ),
    __URIError: errorMessage("NAPAKA_URI", "neveljaven format URI"),
    __EvalError: errorMessage("NAPAKA_EVAL", "napaka v funkciji eval"),
    __UNKNOWN_ERROR: errorMessage(
      "NEZNANA_NAPAKA",
      "prislo je do neznane napake",
    ),
  },

  example: {
    __array: [
      "pice",
      "mesta",
      "seznam_stevil",
      "stevila",
      "barve",
      "izdelki",
      "uporabniki",
      "kategorije",
      "tocke",
      "jeziki",
    ],
    __boolean: [
      "stanje",
      "je_aktivno",
      "lahko_uporabi",
      "je_pripravljeno",
      "pooblascen",
      "povezan",
      "poteka",
      "koncano",
      "preverjeno",
      "preklicano",
    ],
    __function: [
      "dobiIme",
      "izracunajVrednost",
      "pokaziPodatke",
      "posodobiProfil",
      "formatirajBesedilo",
      "razclaniKodo",
      "preveriPodatke",
      "shraniDokument",
      "posljiSporocilo",
      "sestejVse",
    ],
    __number: [
      "starost",
      "leto_rojstva",
      "povprecje",
      "skupno",
      "cena",
      "indeks",
      "cas",
      "kolicina",
      "tocke",
      "ura",
    ],
    __object: [
      "oseba",
      "stranka",
      "nastavitve",
      "odgovor",
      "placilo",
      "konfiguracija",
      "profil",
      "naslov",
      "metapodatki",
      "seja",
    ],
    __string: [
      "ime",
      "naslov",
      "opis",
      "posta",
      "geslo",
      "sporocilo",
      "oznaka",
      "kljuc",
      "url",
      "povezava",
    ],
    __void: [
      "pojdi",
      "izbrisi",
      "ustavi",
      "pocisti",
      "unici",
      "izhod",
      "izprazni_medpomnilnik",
      "shrani_vse",
      "poslji",
      "vstop",
    ],
  },
}).grammar();
