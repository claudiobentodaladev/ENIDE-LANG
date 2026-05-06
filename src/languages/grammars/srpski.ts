import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const srpski = new Language({
  language: "srpski",
  about:
    "ENIDE je prevodivi transpajler koji omogucava programiranje na bilo kom jeziku",

  include: DocStr(
    "Ukljuci",
    "koristi se za ukljucivanje jezika, biblioteka ili struktura podataka iz drugog fajla",
  ),

  commands: {
    __about: DocStr("oprogramu", "za dobijanje informacija o ENIDE-u"),
    __help: DocStr("pomoc", "za listu svih dostupnih komandi"),
    __version: DocStr("verzija", "za trenutnu verziju ENIDE-a"),
    __languages: DocStr("jezici", "za listu svih dostupnih jezika"),
    __documentation: DocStr("dokumentacija", "za dokumentaciju jezika"),
    __grammar: DocStr("gramatika", "za gramatiku jezika"),
  },

  library: {
    __standard: {
      main: DocStr("standardno", "za pristup standardnim pomocnim metodama"),
      __isarray: DocStr("JeNiz", "provera da li je vrednost niz"),
      __isobject: DocStr("JeObjekat", "provera da li je vrednost objekat"),
      __typeof: DocStr("TipOd", "za tip vrednosti"),
      __parse: DocStr(
        "Rasclani",
        "za konverziju vrednosti iz teksta u ispravan tip",
      ),
    },

    __math: {
      main: DocStr("matematika", "za pristup matematickim funkcijama"),
      __pi: DocStr("PI", "za vrednost broja pi"),
      __sqrt: DocStr("KvadratniKoren", "za kvadratni koren broja"),
      __pow: DocStr("Stepen", "za stepenovanje broja"),
      __round: DocStr("Zaokruzi", "za zaokruzivanje broja"),
      __random: DocStr("Nasumicno", "za nasumicni broj"),
      __max: DocStr("Maks", "za maksimalnu vrednost"),
      __min: DocStr("Min", "za minimalnu vrednost"),
      __isNumber: DocStr("JeBroj", "provera da li je vrednost broj"),
      __isInteger: DocStr("JeCeoBroj", "provera da li je vrednost ceo broj"),
      __isFloat: DocStr(
        "JeDecimalniBroj",
        "provera da li je vrednost decimalni broj",
      ),
      __cos: DocStr("Cos", "za kosinus ugla u radijanima"),
      __sin: DocStr("Sin", "za sinus ugla u radijanima"),
      __tan: DocStr("Tan", "za tangens ugla u radijanima"),
    },

    __string: {
      main: DocStr("niska", "za funkcije manipulacije tekstom"),
      __length: DocStr("Duzina", "za duzinu niske"),
      __toUpperCase: DocStr("VelikaSlova", "pretvori u velika slova"),
      __toLowerCase: DocStr("MalaSlova", "pretvori u mala slova"),
      __include: DocStr("Sadrzi", "provera da li niska sadrzi podniskov"),
      __repeat: DocStr("Ponovi", "za ponavljanje niske zadati broj puta"),
    },

    __date: {
      main: DocStr("datum", "za funkcije manipulacije datumom i vremenom"),
      __now: DocStr("Sada", "za trenutni datum i vreme"),
      __year: DocStr("Godina", "za godinu"),
      __month: DocStr("Mesec", "za mesec"),
      __dayMonth: DocStr("DanUMesecu", "za dan u mesecu"),
      __dayWeek: DocStr("DanUNedelji", "za dan u nedelji"),
      __hour: DocStr("Sat", "za sat"),
      __minute: DocStr("Minut", "za minut"),
      __second: DocStr("Sekund", "za sekund"),
    },
  },

  types: {
    __number: DocStr("broj", "za deklaraciju promenljive tipa broj"),
    __string: DocStr("tekst", "za deklaraciju promenljive tipa tekst"),
    __boolean: DocStr("logicki", "za deklaraciju logickog tipa"),
    __object: DocStr("objekat", "za deklarisanje statickog objekta"),
    __void: DocStr("prazan", "za deklaraciju funkcije koja ne vraca vrednost"),
    __array: DocStr("niz", "za deklaraciju nizovne strukture"),
  },

  specialValues: {
    __true: DocStr("Tacno", "logicka vrednost tacno"),
    __false: DocStr("Netacno", "logicka vrednost netacno"),
    __null: DocStr("Nista", "odsustvo vrednosti"),
  },

  words: {
    __new: DocStr("novo", "za kreiranje nove instance klase"),
    __this: DocStr("ovo", "za pristup atributima sopstvene klase"),
    __extends: DocStr(
      "prosiruje",
      "za deklaraciju da klasa nasleduje drugu klasu",
    ),
  },

  accessModifiers: {
    __private: DocStr("privatno", "dostupno samo unutar klase"),
    __public: DocStr("javno", "dostupno sa bilo kog mesta"),
    __protected: DocStr("zasticeno", "dostupno unutar klase i njenih podklasa"),
    __readonly: DocStr(
      "samoZaCitanje",
      "vrednost se moze dodeliti samo jednom",
    ),
    __static: DocStr("staticko", "pripada klasi a ne instancama"),
  },

  methods: {
    method: {
      __print: DocStr("ispisi", "za ispis vrednosti na ekran"),
      __scan: DocStr("ucitaj", "za citanje vrednosti sa ulaza"),
      __return: DocStr("vrati", "za vracanje vrednosti iz funkcije"),
      __break: DocStr("prekini", "za izlaz iz petlje"),
      __continue: DocStr("nastavi", "za prelazak na sledecu iteraciju petlje"),
    },

    sentences: {
      __function: DocStr("funkcija", "za deklaraciju funkcije"),
      __if: DocStr("ako", "za uslov"),
      __else: DocStr("inace", "alternativni uslov"),
      __while: DocStr("dok", "while petlja"),
      __for: DocStr("za", "for petlja"),
      __switch: DocStr("prebaci", "switch struktura"),
      __case: DocStr("slucaj", "case u switch-u"),
      __default: DocStr("podrazumevano", "default slucaj u switch-u"),
      __try: DocStr("pokusaj", "try blok"),
      __catch: DocStr("uhvati", "catch blok"),
      __finally: DocStr("konacno", "finally blok"),
      __class: DocStr("klasa", "za deklaraciju klase"),
      __constructor: DocStr(
        "konstruktor",
        "struktura koja omogucava deklaraciju atributa u klasi",
      ),
    },
  },

  errors: {
    __labels: errorLabel(
      "Poruka",
      "Vrednost",
      "Promenljiva",
      "Svojstvo",
      "Objekat",
      "Ocekivano",
      "Primljeno",
      "Dodela_Konstante",
      "Duplikat_Parametra",
      "Savet",
      "Nevazeci_Token",
      "Prekoracenje_Steka",
      "Token",
      "Neocekivani_Kraj_Ulaza",
    ),
    main: errorMessage("GRESKA", "opsta sistemska greska"),
    __TypeError: errorMessage("GRESKA_TIPA", "nevazeci tip u operaciji"),
    __InitError: errorMessage(
      "GRESKA_INICIJALIZACIJE",
      "promenljiva nije bila inicijalizovana",
    ),
    __ReferenceError: errorMessage(
      "GRESKA_REFERENCE",
      "promenljiva, funkcija ili biblioteka ne postoji u opsegu",
    ),
    __SyntaxError: errorMessage("SINTAKSNA_GRESKA", "nevazeci kod"),
    __RangeError: errorMessage(
      "GRESKA_OPSEGA",
      "vrednost je van dozvoljenog opsega",
    ),
    __URIError: errorMessage("URI_GRESKA", "lose formiran URI"),
    __EvalError: errorMessage("EVAL_GRESKA", "greska povezana sa eval"),
    __UNKNOWN_ERROR: errorMessage(
      "NEPOZNATA_GRESKA",
      "potpuno nepoznata greska",
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
      "poeni",
      "jezici",
    ],
    __boolean: [
      "status",
      "jePunoletan",
      "jeAktivan",
      "jeVidljiv",
      "imaDozvolu",
      "jePrijavljen",
      "jeOmogucen",
      "jeZavrsen",
      "jeVerifikovan",
      "jeObrisan",
    ],
    __function: [
      "uzmiIme",
      "uzmiVrednost",
      "obradiKlik",
      "ucitajPodatke",
      "formatirajDatum",
      "rasclaniUnos",
      "validirajFormu",
      "prikaziStavku",
      "azurirajStanje",
      "izracunajUkupno",
    ],
    __number: [
      "starost",
      "godina",
      "broj",
      "ukupno",
      "cena",
      "indeks",
      "trajanje",
      "kolicina",
      "poeni",
      "timeout",
    ],
    __object: [
      "osoba",
      "korisnik",
      "konfiguracija",
      "odgovor",
      "placanje",
      "podesavanja",
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
      "inicijalizuj",
      "ocisti",
      "resetuj",
      "unisti",
      "odjava",
      "ocistiKes",
      "sacuvajUBazu",
      "posaljiEmail",
      "zabeležiDogadjaj",
    ],
  },
}).grammar();
