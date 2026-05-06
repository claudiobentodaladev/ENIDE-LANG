import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const bosanski = new Language({
  language: "bosanski",
  about:
    "ENIDE je prevodivi transpiler koji omogucava programiranje na bilo kojem jeziku",

  include: DocStr(
    "Ukljuci",
    "Koristi se za ukljucivanje jezika ili biblioteka",
  ),

  commands: {
    __about: DocStr("o", "za dobijanje informacija o ENIDE"),
    __help: DocStr("pomoc", "za dobijanje liste svih dostupnih naredbi"),
    __version: DocStr("verzija", "za dobijanje trenutne verzije ENIDE"),
    __languages: DocStr("jezici", "za dobijanje liste svih dostupnih jezika"),
    __documentation: DocStr("dok", "za dobijanje dokumentacije za jezik"),
    __grammar: DocStr("gramatika", "za dobijanje gramatike za jezik"),
  },

  library: {
    __standard: {
      main: DocStr("standard", "za pristup standardnim pomocnim metodama"),
      __isarray: DocStr("JePolje", "za provjeru je li vrijednost polje"),
      __isobject: DocStr("JeObjekat", "za provjeru je li vrijednost objekat"),
      __typeof: DocStr("Tip", "za dobijanje tipa vrijednosti"),
      __parse: DocStr(
        "Parse",
        "za pretvaranje stringa u ispravnu parsiranu vrijednost",
      ),
    },

    __math: {
      main: DocStr("matematika", "za pristup matematickim funkcijama"),
      __pi: DocStr("PI", "za dobijanje vrijednosti pi"),
      __sqrt: DocStr("KvadratniKorijen", "za dobijanje kvadratnog korijena"),
      __pow: DocStr("Stepen", "za dobijanje stepena broja"),
      __round: DocStr("Zaokruzi", "za zaokruzivanje broja"),
      __random: DocStr("Slucajno", "za dobijanje slucajnog broja"),
      __max: DocStr("Maksimum", "za dobijanje maksimalne vrijednosti"),
      __min: DocStr("Minimum", "za dobijanje minimalne vrijednosti"),
      __isNumber: DocStr("JeBroj", "za provjeru je li vrijednost broj"),
      __isInteger: DocStr(
        "JeCijeli",
        "za provjeru je li vrijednost cijeli broj",
      ),
      __isFloat: DocStr(
        "JeDecimalan",
        "za provjeru je li vrijednost decimalni broj",
      ),
      __cos: DocStr("Cos", "za dobijanje kosinusa ugla u radijanima"),
      __sin: DocStr("Sin", "za dobijanje sinusa ugla u radijanima"),
      __tan: DocStr("Tan", "za dobijanje tangensa ugla u radijanima"),
    },

    __string: {
      main: DocStr("niz", "za pristup funkcijama manipulacije nizovima"),
      __length: DocStr("Duzina", "za dobijanje duzine niza"),
      __toUpperCase: DocStr("NaVelike", "za pretvaranje niza u velika slova"),
      __toLowerCase: DocStr("NaMala", "za pretvaranje niza u mala slova"),
      __include: DocStr("Sadrzi", "za provjeru sadrzi li niz podniz"),
      __repeat: DocStr("Ponovi", "za ponavljanje niza odredjeni broj puta"),
    },

    __date: {
      main: DocStr("datum", "za pristup funkcijama datuma i vremena"),
      __now: DocStr("Sada", "za dobijanje trenutnog datuma i vremena"),
      __year: DocStr("Godina", "za dobijanje godine"),
      __month: DocStr("Mjesec", "za dobijanje mjeseca"),
      __dayMonth: DocStr("DanMjeseca", "za dobijanje dana u mjesecu"),
      __dayWeek: DocStr("DanSedmice", "za dobijanje dana u sedmici"),
      __hour: DocStr("Sat", "za dobijanje sata"),
      __minute: DocStr("Minuta", "za dobijanje minute"),
      __second: DocStr("Sekunda", "za dobijanje sekunde"),
    },
  },

  types: {
    __number: DocStr("broj", "za deklariranje varijable tipa broj"),
    __string: DocStr("niz", "za deklariranje varijable tipa niz"),
    __boolean: DocStr("bool", "za deklariranje varijable tipa logicki"),
    __object: DocStr("objekat", "za deklarisanje statickog objekta"),
    __void: DocStr(
      "praznina",
      "za deklariranje funkcije koja ne vraca vrijednost",
    ),
    __array: DocStr("polje", "za deklariranje polja kao strukture podataka"),
  },

  specialValues: {
    __true: DocStr("Tacno", "logicka vrijednost tacno"),
    __false: DocStr("Netacno", "logicka vrijednost netacno"),
    __null: DocStr("prazno", "odsutnost vrijednosti"),
  },

  words: {
    __new: DocStr("novo", "za kreiranje nove instance klase"),
    __this: DocStr("ovo", "za pristup atributima vlastite klase"),
    __extends: DocStr(
      "prosiruje",
      "za deklariranje da klasa nasljedjuje drugu",
    ),
  },

  accessModifiers: {
    __private: DocStr("privatno", "dostupno samo unutar klase"),
    __public: DocStr("javno", "dostupno sa bilo kojeg mjesta"),
    __protected: DocStr("zasticeno", "dostupno unutar klase i njenih podklasa"),
    __readonly: DocStr(
      "samo_citanje",
      "vrijednost se moze dodijeliti samo jednom",
    ),
    __static: DocStr("staticno", "pripada klasi, a ne instanci"),
  },

  methods: {
    method: {
      __print: DocStr("ispisi", "za ispis vrijednosti na ekran"),
      __scan: DocStr("ucitaj", "za ucitavanje vrijednosti s ulaza"),
      __return: DocStr("vrati", "za vracanje vrijednosti iz funkcije"),
      __break: DocStr("prekini", "za izlazak iz petlje"),
      __continue: DocStr("nastavi", "za prelazak na sljedecu iteraciju petlje"),
    },

    sentences: {
      __function: DocStr("funkcija", "za deklariranje funkcije"),
      __if: DocStr("ako", "za deklariranje uvjeta"),
      __else: DocStr("inace", "za deklariranje alternativnog uvjeta"),
      __while: DocStr("dok", "za deklariranje petlje dok"),
      __for: DocStr("za", "za deklariranje petlje za"),
      __switch: DocStr("odabir", "za deklariranje strukture odabira"),
      __case: DocStr("slucaj", "za deklariranje slucaja u strukturi odabira"),
      __default: DocStr(
        "zadano",
        "za deklariranje zadanog slucaja u strukturi odabira",
      ),
      __try: DocStr("pokusaj", "za deklariranje bloka pokusaj"),
      __catch: DocStr("uhvati", "za deklariranje bloka za rukovanje greskama"),
      __finally: DocStr(
        "konacno",
        "za deklariranje bloka koji se uvijek izvrsava",
      ),
      __class: DocStr("klasa", "za deklariranje klase"),
      __constructor: DocStr(
        "konstruktor",
        "struktura za deklariranje atributa u klasi",
      ),
    },
  },

  errors: {
    __labels: errorLabel(
      "Poruka",
      "Vrijednost",
      "Varijabla",
      "Svojstvo",
      "Objekat",
      "Ocekivano",
      "Primljeno",
      "Dodjela_Konstante",
      "Duplikat_Parametra",
      "Savjet",
      "Nevazeci_Token",
      "Preljev_Stoga",
      "Token",
      "Neocekivani_Kraj",
    ),
    main: errorMessage("GRESKA", "opca sistemska greska"),
    __TypeError: errorMessage("GRESKA_TIPA", "nevazeci tip u operaciji"),
    __InitError: errorMessage(
      "GRESKA_INICIJALIZACIJE",
      "varijabla nije inicijalizirana",
    ),
    __ReferenceError: errorMessage(
      "GRESKA_REFERENCE",
      "varijabla, funkcija ili biblioteka ne postoji u opsegu",
    ),
    __SyntaxError: errorMessage("GRESKA_SINTAKSE", "nevazeci kod"),
    __RangeError: errorMessage(
      "GRESKA_RASPONA",
      "vrijednost izvan dozvoljenog raspona",
    ),
    __URIError: errorMessage("GRESKA_URI", "lose oblikovani ili nevazeci URI"),
    __EvalError: errorMessage("GRESKA_EVAL", "greska vezana uz eval"),
    __UNKNOWN_ERROR: errorMessage(
      "NEPOZNATA_GRESKA",
      "potpuno nepoznata greska",
    ),
  },

  example: {
    __array: [
      "hrana",
      "zemlja",
      "stavke",
      "tags",
      "boje",
      "proizvodi",
      "korisnici",
      "kategorije",
      "bodovi",
      "jezici",
    ],
    __boolean: [
      "stanje",
      "jeOdrasla",
      "jeAktivan",
      "jeVidljiv",
      "imaDozvolu",
      "jePrijavljen",
      "jeOmogucen",
      "jeGotov",
      "jeVerificiran",
      "jeObrisan",
    ],
    __function: [
      "dobiNaziv",
      "dobiVrijednost",
      "kliknutoDugme",
      "dohvatiPodatke",
      "formatirajDatum",
      "parsirajUnos",
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
      "index",
      "trajanje",
      "kolicina",
      "bodovi",
      "timeout",
    ],
    __object: [
      "osoba",
      "korisnik",
      "config",
      "odgovor",
      "placanje",
      "postavke",
      "profil",
      "adresa",
      "metadata",
      "sesija",
    ],
    __string: [
      "naziv",
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
      "inicijalizuj",
      "ocisti",
      "resetuj",
      "unisti",
      "odjava",
      "ocistiCache",
      "sacuvajUBazu",
      "posaljiEmail",
      "zapisiDogadjaj",
    ],
  },
}).grammar();
