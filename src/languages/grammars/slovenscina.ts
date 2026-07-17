import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const slovenscina = new Language({
  language: "slovenscina",
  about:
    "ENIDE je večjezični programski jezik, ki vam omogoča programiranje v katerem koli jeziku",
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
      __isarray: DocStr("JeSeznam", "preveri, ali je vrednost seznam (tabela)"),
      __isobject: DocStr("JeObjekt", "preveri, ali je vrednost objekt"),
      __typeof: DocStr("VrstaOd", "vrne podatkovni tip spremenljivke"),
      __parse: DocStr(
        "razclani",
        "pretvori besedilo v ustrezen podatkovni tip",
      ),
    },
    __math: {
      main: DocStr("matematika", "matematicne funkcije in konstante"),
      __pi: DocStr("PI", "vrednost konstante Pi"),
      __sqrt: DocStr("Koren", "izracuna kvadratni koren"),
      __pow: DocStr("Potenca", "izracuna potenco stevila"),
      __round: DocStr("Zaokrozi", "zaokrozi stevilo na najblizje celo stevilo"),
      __random: DocStr("Nakljucno", "ustvari nakljucno stevilo"),
      __max: DocStr("Maksimum", "vrne najvecjo vrednost iz seznama"),
      __min: DocStr("Minimum", "vrne najmanjso vrednost iz seznama"),
      __isNumber: DocStr("JeStevilo", "preveri, ali je vrednost stevilo"),
      __isInteger: DocStr(
        "JeCeloStevilo",
        "preveri, ali je vrednost celo stevilo",
      ),
      __isFloat: DocStr(
        "JeDecimalno",
        "preveri, ali je vrednost decimalno stevilo",
      ),
      __cos: DocStr("cos", "izracuna kosinus"),
      __sin: DocStr("sin", "izracuna sinus"),
      __tan: DocStr("tan", "izracuna tangens"),
    },

    __string: {
      main: DocStr("niz", "funkcije za delo z besedilnimi nizi"),
      __length: DocStr("dolzina", "vrne stevilo znakov v nizu"),
      __toUpperCase: DocStr("NaVelike", "pretvori besedilo v velike crke"),
      __toLowerCase: DocStr("NaMale", "pretvori besedilo v male crke"),
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
      __dayMonth: DocStr("DanMeseca", "vrne dan v mesecu"),
      __dayWeek: DocStr("DanTedna", "vrne dan v tednu"),
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
    __readonly: DocStr("SamoZaBranje", "vrednosti ni mogoce spreminjati"),
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
      "DodelitevKonstanti",
      "PodvojenParameter",
      "Nasvet",
      "NeveljavenZeton",
      "PrekoracitevSkladovnica",
      "Zeton",
      "NepricakovanKonecVhoda",
    ),
    main: errorMessage("NAPAKA", "splosna sistemska napaka"),
    __TypeError: errorMessage(
      "NAPAKATIPA",
      "neveljaven podatkovni tip za operacijo",
    ),
    __InitError: errorMessage(
      "NAPAKAZACETKA",
      "spremenljivka ni bila zacetno nastavljena",
    ),
    __ReferenceError: errorMessage(
      "NAPAKAREFERENCE",
      "sklic na spremenljivko, ki ne obstaja",
    ),
    __SyntaxError: errorMessage("NAPAKASKLADNJE", "skladanjska napaka v kodi"),
    __RangeError: errorMessage(
      "NAPAKAOBSEGA",
      "vrednost je zunaj dovoljenega obsega",
    ),
    __URIError: errorMessage("NAPAKAURI", "neveljaven format URI"),
    __EvalError: errorMessage("NAPAKAEVAL", "napaka v funkciji eval"),
    __UNKNOWN_ERROR: errorMessage(
      "NEZNANANAPAKA",
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
