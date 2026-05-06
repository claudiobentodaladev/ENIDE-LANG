import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const lietuviu = new Language({
  language: "lietuviu",
  about:
    "ENIDE yra daugiakalbis transpiliatorius, leidžiantis programuoti bet kuria kalba",

  include: DocStr(
    "įtraukti",
    "naudojama kalbai, bibliotekoms ar duomenų struktūroms iš kitų failų įtraukti",
  ),

  commands: {
    __about: DocStr("apie", "gauti informaciją apie ENIDE sistemą"),
    __help: DocStr("pagalba", "gauti visų prieinamų komandų sąrašą"),
    __version: DocStr("versija", "gauti dabartinę ENIDE versiją"),
    __languages: DocStr("kalbos", "gauti visų prieinamų kalbų sąrašą"),
    __documentation: DocStr("vadovas", "gauti kalbos dokumentaciją"),
    __grammar: DocStr("gramatika", "gauti kalbos gramatikos aprašymą"),
  },

  library: {
    __standard: {
      main: DocStr("standartas", "pasiekti naudingus standartinius metodus"),
      __isarray: DocStr("yra_masyvas", "patikrinti, ar reikšmė yra masyvas"),
      __isobject: DocStr("yra_objektas", "patikrinti, ar reikšmė yra objektas"),
      __typeof: DocStr("Tipas", "gauti reikšmės tipą"),
      __parse: DocStr(
        "Analizuoti",
        "konvertuoti tekstinę reikšmę į tinkamą tipą",
      ),
    },
    __math: {
      main: DocStr("matematika", "pasiekti matematines funkcijas"),
      __pi: DocStr("PI", "gauti skaičiaus pi reikšmę"),
      __sqrt: DocStr("Šaknis", "gauti skaičiaus kvadratinę šaknį"),
      __pow: DocStr("Laipsnis", "pakelti skaičių laipsniu"),
      __round: DocStr("Apvalinti", "suapvalinti skaičių"),
      __random: DocStr("Atsitiktinis", "generuoti atsitiktinį skaičių"),
      __max: DocStr("Maksimumas", "gauti maksimalią reikšmę"),
      __min: DocStr("Minimumas", "gauti minimalią reikšmę"),
      __isNumber: DocStr("YraSkaičius", "patikrinti, ar reikšmė yra skaičius"),
      __isInteger: DocStr(
        "YraSveikasis",
        "patikrinti, ar reikšmė yra sveikasis skaičius",
      ),
      __isFloat: DocStr(
        "YraDešimtainis",
        "patikrinti, ar reikšmė yra dešimtainė",
      ),
      __cos: DocStr("Cos", "gauti kampo kosinusą radianais"),
      __sin: DocStr("Sin", "gauti kampo sinusą radianais"),
      __tan: DocStr("Tan", "gauti kampo tangentą radianais"),
    },

    __string: {
      main: DocStr("tekstas", "teksto manipuliavimo funkcijos"),
      __length: DocStr("Ilgis", "gauti teksto ilgį"),
      __toUpperCase: DocStr(
        "Didžiosiomis",
        "paversti tekstą didžiosiomis raidėmis",
      ),
      __toLowerCase: DocStr(
        "Mažosiomis",
        "paversti tekstą mažosiomis raidėmis",
      ),
      __include: DocStr(
        "Apima",
        "patikrinti, ar tekstas turi dalį kito teksto",
      ),
      __repeat: DocStr("Kartoti", "pakartoti tekstą nurodytą kiekį kartų"),
    },

    __date: {
      main: DocStr("data", "datos ir laiko funkcijos"),
      __now: DocStr("Dabar", "gauti dabartinę datą ir laiką"),
      __year: DocStr("Metai", "gauti metus"),
      __month: DocStr("Mėnuo", "gauti mėnesį"),
      __dayMonth: DocStr("MėnesioDiena", "gauti mėnesio dieną"),
      __dayWeek: DocStr("SavaitėsDiena", "gauti savaitės dieną"),
      __hour: DocStr("Valanda", "gauti valandą"),
      __minute: DocStr("Minutė", "gauti minutę"),
      __second: DocStr("Sekundė", "gauti sekundę"),
    },
  },

  types: {
    __number: DocStr("skaičius", "deklaruoti skaičiaus tipo kintamąjį"),
    __string: DocStr("tekstas", "deklaruoti teksto tipo kintamąjį"),
    __boolean: DocStr("bool", "deklaruoti loginio tipo kintamąjį"),
    __object: DocStr("objektas", "deklaruoti statinį objektą"),
    __void: DocStr("tuščia", "funkcija, kuri negrąžina reikšmės"),
    __array: DocStr("masyvas", "deklaruoti masyvo struktūrą"),
  },

  specialValues: {
    __true: DocStr("tiesa", "loginė reikšmė: tiesa"),
    __false: DocStr("melas", "loginė reikšmė: melas"),
    __null: DocStr("nieko", "reikšmės nebuvimas"),
  },

  words: {
    __new: DocStr("naujas", "sukurti naują klasės egzempliorių"),
    __this: DocStr("šis", "kreiptis į pačios klasės atributus"),
    __extends: DocStr("paveldi", "nurodyti, kad klasė paveldi kitą klasę"),
  },

  accessModifiers: {
    __private: DocStr("privatus", "pasiekiamas tik klasės viduje"),
    __public: DocStr("viešas", "pasiekiamas iš bet kur"),
    __protected: DocStr("saugomas", "pasiekiamas klasėje ir poklasėse"),
    __readonly: DocStr(
      "tik_skaitymui",
      "reikšmė gali būti priskirta tik kartą",
    ),
    __static: DocStr("statinis", "priklauso klasei, o ne egzemplioriui"),
  },

  methods: {
    method: {
      __print: DocStr("spausdinti", "išvesti reikšmę į ekraną"),
      __scan: DocStr("skaityti", "perskaityti reikšmę iš įvesties"),
      __return: DocStr("grąžinti", "grąžinti reikšmę iš funkcijos"),
      __break: DocStr("nutraukti", "išeiti iš ciklo"),
      __continue: DocStr("tęsti", "peršokti į kitą iteraciją"),
    },

    sentences: {
      __function: DocStr("funkcija", "deklaruoti funkciją"),
      __if: DocStr("jei", "deklaruoti sąlygą"),
      __else: DocStr("kitaip", "deklaruoti alternatyvią sąlygą"),
      __while: DocStr("kol", "deklaruoti 'kol' ciklą"),
      __for: DocStr("ciklas", "deklaruoti 'for' ciklą"),
      __switch: DocStr("pasirinkti", "deklaruoti pasirinkimo struktūrą"),
      __case: DocStr("atvejis", "deklaruoti konkretų atvejį"),
      __default: DocStr("numatyta", "jei nei vienas atvejis neatitinka"),
      __try: DocStr("bandyti", "deklaruoti bandymo bloką"),
      __catch: DocStr("pagauti", "deklaruoti klaidų gaudymo bloką"),
      __finally: DocStr("galiausiai", "blokas, vykdomas bet kokiu atveju"),
      __class: DocStr("klasė", "deklaruoti klasę"),
      __constructor: DocStr(
        "konstruktorius",
        "struktūra kintamiesiems klasėje deklaruoti",
      ),
    },
  },

  errors: {
    __labels: errorLabel(
      "Žinutė",
      "Reikšmė",
      "Kintamasis",
      "Savybė",
      "Objektas",
      "Tikėtasi",
      "Gauta",
      "Konstantos priskyrimas",
      "Dubliuotas parametras",
      "Užuomina",
      "Neteisingas raktas",
      "Steko perpildymas",
      "Raktas",
      "Netikėta įvesties pabaiga",
    ),
    main: errorMessage("KLAIDA", "bendra sistemos klaida"),
    __TypeError: errorMessage("TIPO_KLAIDA", "neteisingas tipas operacijoje"),
    __InitError: errorMessage(
      "INICIALIZACIJOS_KLAIDA",
      "kintamasis nebuvo inicializuotas",
    ),
    __ReferenceError: errorMessage(
      "NUORODOS_KLAIDA",
      "kintamasis, funkcija ar biblioteka neegzistuoja",
    ),
    __SyntaxError: errorMessage("SINTAKSĖS_KLAIDA", "neteisingas kodas"),
    __RangeError: errorMessage("INTERVALO_KLAIDA", "reikšmė už leistinų ribų"),
    __URIError: errorMessage("URI_KLAIDA", "neteisingas URI formatas"),
    __EvalError: errorMessage("EVAL_KLAIDA", "klaida susijusi su eval"),
    __UNKNOWN_ERROR: errorMessage(
      "NEŽINOMA_KLAIDA",
      "visiškai nežinoma klaida",
    ),
  },

  example: {
    __array: [
      "maistas",
      "šalys",
      "elementai",
      "žymos",
      "spalvos",
      "produktai",
      "vartotojai",
      "kategorijos",
      "taškai",
      "kalbos",
    ],
    __boolean: [
      "būsena",
      "yraSuaugęs",
      "yraAktyvus",
      "yraMatomas",
      "turiLeidimą",
      "yraPrisijungęs",
      "yraĮjungtas",
      "yraAtlikta",
      "yraPatikrinta",
      "yraIštrinta",
    ],
    __function: [
      "gautiVardą",
      "gautiReikšmę",
      "sąrašas",
      "gautiDuomenis",
      "formatuotiDuomenis",
      "analizuotiĮvestį",
      "tikrintiFormą",
      "atnaujintiPrekes",
      "atnaujintiBūseną",
      "skaičiuotiViską",
    ],
    __number: [
      "amžius",
      "metai",
      "vidurkis",
      "suma",
      "kaina",
      "indeksas",
      "trukmė",
      "kiekis",
      "balai",
      "laikas",
    ],
    __object: [
      "asmuo",
      "vartotojas",
      "konfigūracija",
      "atsakymas",
      "mokėjimas",
      "nustatymai",
      "profilis",
      "adresas",
      "metaduomenys",
      "sesija",
    ],
    __string: [
      "vardas",
      "antraštė",
      "aprašymas",
      "el_paštas",
      "slaptažodis",
      "žinutė",
      "etiketė",
      "raktas",
      "nuoroda",
      "trumpinys",
    ],
    __void: [
      "prisijungti",
      "pradėti",
      "valyti",
      "atstatyti",
      "sunaikinti",
      "atsijungti",
      "valytiTalpyklą",
      "išsaugoti",
      "siųstiLaišką",
      "įeiti",
    ],
  },
}).grammar();
