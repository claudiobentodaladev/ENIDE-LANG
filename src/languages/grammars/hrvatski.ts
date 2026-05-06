import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const hrvatski = new Language({
  language: "hrvatski",
  about:
    "ENIDE je poliglotski transpiler koji omogućuje programiranje na bilo kojem jeziku",

  include: DocStr(
    "ukljuci",
    "koristi se za uključivanje jezika, biblioteka ili struktura podataka iz druge datoteke",
  ),

  commands: {
    __about: DocStr("o", "za dobivanje informacija o ENIDE"),
    __help: DocStr("pomoc", "za dobivanje popisa svih dostupnih naredbi"),
    __version: DocStr("verzija", "za dobivanje trenutne verzije ENIDE"),
    __languages: DocStr("jezici", "za dobivanje popisa svih dostupnih jezika"),
    __documentation: DocStr("dok", "za dobivanje dokumentacije za jezik"),
    __grammar: DocStr("gramatika", "za dobivanje gramatike jezika"),
  },

  library: {
    __standard: {
      main: DocStr("std", "za pristup standardnim pomoćnim metodama"),
      __isarray: DocStr("JePolje", "za provjeru je li vrijednost polje"),
      __isobject: DocStr("JeObjekt", "za provjeru je li vrijednost objekt"),
      __typeof: DocStr("Tip", "za dobivanje tipa vrijednosti"),
      __parse: DocStr(
        "Parse",
        "za pretvaranje teksta u odgovarajuću vrijednost",
      ),
    },

    __math: {
      main: DocStr("matematika", "za pristup matematičkim funkcijama"),
      __pi: DocStr("PI", "za dobivanje vrijednosti pi"),
      __sqrt: DocStr("KvadratniKorijen", "za dobivanje kvadratnog korijena"),
      __pow: DocStr("Potencija", "za dobivanje potencije broja"),
      __round: DocStr("Zaokruzi", "za zaokruživanje broja"),
      __random: DocStr("Slucajno", "za dobivanje slučajnog broja"),
      __max: DocStr("Maksimum", "za dobivanje maksimalne vrijednosti"),
      __min: DocStr("Minimum", "za dobivanje minimalne vrijednosti"),
      __isNumber: DocStr("JeBroj", "za provjeru je li vrijednost broj"),
      __isInteger: DocStr(
        "JeCijeli",
        "za provjeru je li vrijednost cijeli broj",
      ),
      __isFloat: DocStr(
        "JeDecimalan",
        "za provjeru je li vrijednost decimalni broj",
      ),
      __cos: DocStr("Cos", "za dobivanje kosinusa kuta u radijanima"),
      __sin: DocStr("Sin", "za dobivanje sinusa kuta u radijanima"),
      __tan: DocStr("Tan", "za dobivanje tangensa kuta u radijanima"),
    },

    __string: {
      main: DocStr("tekst", "za pristup funkcijama za manipulaciju tekstom"),
      __length: DocStr("Duljina", "za dobivanje duljine niza"),
      __toUpperCase: DocStr("NaVelike", "za pretvaranje teksta u velika slova"),
      __toLowerCase: DocStr("NaMala", "za pretvaranje teksta u mala slova"),
      __include: DocStr("Sadrzi", "za provjeru sadrži li tekst podniz"),
      __repeat: DocStr("Ponovi", "za ponavljanje teksta određeni broj puta"),
    },

    __date: {
      main: DocStr("datum", "za pristup funkcijama datuma i vremena"),
      __now: DocStr("Sada", "za dobivanje trenutnog datuma i vremena"),
      __year: DocStr("Godina", "za dobivanje godine"),
      __month: DocStr("Mjesec", "za dobivanje mjeseca"),
      __dayMonth: DocStr("DanMjeseca", "za dobivanje dana u mjesecu"),
      __dayWeek: DocStr("DanTjedna", "za dobivanje dana u tjednu"),
      __hour: DocStr("Sat", "za dobivanje sata"),
      __minute: DocStr("Minuta", "za dobivanje minute"),
      __second: DocStr("Sekunda", "za dobivanje sekunde"),
    },
  },

  types: {
    __number: DocStr("broj", "za deklariranje varijable tipa broj"),
    __string: DocStr("tekst", "za deklariranje varijable tipa tekst"),
    __boolean: DocStr("bool", "za deklariranje varijable tipa logički"),
    __object: DocStr("objekt", "za deklariranje statičkog objekta"),
    __void: DocStr(
      "prazno",
      "za deklariranje funkcije bez povratne vrijednosti",
    ),
    __array: DocStr("polje", "za deklariranje strukture podataka polje"),
  },

  specialValues: {
    __true: DocStr("Tocno", "logička vrijednost točno"),
    __false: DocStr("Netocno", "logička vrijednost netočno"),
    __null: DocStr("Nista", "nepostojanje vrijednosti"),
  },

  words: {
    __new: DocStr("novo", "za stvaranje nove instance klase"),
    __this: DocStr("ovo", "za pristup atributima trenutne klase"),
    __extends: DocStr("prosiruje", "za deklariranje nasljeđivanja klase"),
  },

  accessModifiers: {
    __private: DocStr("privatno", "dostupno samo unutar klase"),
    __public: DocStr("javno", "dostupno svugdje"),
    __protected: DocStr("zasticeno", "dostupno unutar klase i podklasa"),
    __readonly: DocStr(
      "samoCitanje",
      "vrijednost se može dodijeliti samo jednom",
    ),
    __static: DocStr("staticko", "pripada klasi, a ne instanci"),
  },

  methods: {
    method: {
      __print: DocStr("ispisi", "za ispis vrijednosti na ekran"),
      __scan: DocStr("ucitaj", "za unos vrijednosti"),
      __return: DocStr("vrati", "za vraćanje vrijednosti iz funkcije"),
      __break: DocStr("prekini", "za izlazak iz petlje"),
      __continue: DocStr("nastavi", "za prelazak na sljedeću iteraciju petlje"),
    },

    sentences: {
      __function: DocStr("funkcija", "za deklariranje funkcije"),
      __if: DocStr("ako", "za deklariranje uvjeta"),
      __else: DocStr("inace", "za alternativni uvjet"),
      __while: DocStr("dok", "za deklariranje while petlje"),
      __for: DocStr("za", "za deklariranje for petlje"),
      __switch: DocStr("odabir", "za strukturu grananja"),
      __case: DocStr("slucaj", "za slučaj u grananju"),
      __default: DocStr("zadano", "za zadani slučaj u grananju"),
      __try: DocStr("pokusaj", "za try blok"),
      __catch: DocStr("uhvati", "za obradu grešaka"),
      __finally: DocStr("konacno", "blok koji se uvijek izvršava"),
      __class: DocStr("klasa", "za deklariranje klase"),
      __constructor: DocStr("konstruktor", "za inicijalizaciju atributa klase"),
    },
  },

  errors: {
    __labels: errorLabel(
      "Poruka",
      "Vrijednost",
      "Varijabla",
      "Svojstvo",
      "Objekt",
      "Ocekivano",
      "Dobiveno",
      "Dodjela Konstante",
      "Duplicirani Parametar",
      "Savjet",
      "Neispravan Token",
      "Prekoracenje Stoga",
      "Token",
      "Neocekivani Kraj Ulaza",
    ),
    main: errorMessage("GRESKA", "opća sistemska greška"),
    __TypeError: errorMessage("GRESKA_TIPA", "neispravan tip u operaciji"),
    __InitError: errorMessage(
      "GRESKA_INICIJALIZACIJE",
      "varijabla nije inicijalizirana",
    ),
    __ReferenceError: errorMessage(
      "GRESKA_REFERENCE",
      "varijabla ili funkcija ne postoji u opsegu",
    ),
    __SyntaxError: errorMessage("GRESKA_SINTAKSE", "neispravan kod"),
    __RangeError: errorMessage(
      "GRESKA_RASPONA",
      "vrijednost izvan dozvoljenog raspona",
    ),
    __URIError: errorMessage("GRESKA_URI", "neispravan ili loše oblikovan URI"),
    __EvalError: errorMessage("GRESKA_EVAL", "greška povezana s eval"),
    __UNKNOWN_ERROR: errorMessage(
      "NEPOZNATA_GRESKA",
      "potpuno nepoznata greška",
    ),
  },

  example: {
    __array: [
      "hrana",
      "drzave",
      "stavke",
      "oznake",
      "boje",
      "proizvodi",
      "korisnici",
      "kategorije",
      "rezultati",
      "jezici",
    ],
    __boolean: [
      "status",
      "jeOdraslaOsoba",
      "jeAktivan",
      "jeVidljiv",
      "imaDozvolu",
      "jePrijavljen",
      "jeOmogucen",
      "jeGotovo",
      "jePotvrdjen",
      "jeObrisan",
    ],
    __function: [
      "dohvatiIme",
      "dohvatiVrijednost",
      "obradiKlik",
      "dohvatiPodatke",
      "formatirajDatum",
      "obradiUnos",
      "validirajFormu",
      "prikaziStavku",
      "azurirajStanje",
      "izracunajUkupno",
    ],
    __number: [
      "dob",
      "godina",
      "brojac",
      "ukupno",
      "cijena",
      "indeks",
      "trajanje",
      "kolicina",
      "rezultat",
      "timeout",
    ],
    __object: [
      "osoba",
      "korisnik",
      "konfiguracija",
      "odgovor",
      "podaci",
      "postavke",
      "profil",
      "adresa",
      "metapodaci",
      "sesija",
    ],
    __string: [
      "ime",
      "naslov",
      "opis",
      "email",
      "lozinka",
      "poruka",
      "oznaka",
      "token",
      "url",
      "slug",
    ],
    __void: [
      "prijava",
      "inicijalizacija",
      "ciscenje",
      "reset",
      "unistavanje",
      "odjava",
      "ocistiCache",
      "spremiUBazu",
      "posaljiEmail",
      "zabiljeziDogadjaj",
    ],
  },
}).grammar();
