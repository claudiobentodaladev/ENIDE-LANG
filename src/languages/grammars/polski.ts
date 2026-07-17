import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const polski = new Language({
  language: "polski",
  about:
    "ENIDE to wielojęzyczny język programowania, który pozwala programować w dowolnym języku",
  include: DocStr(
    "dolacz",
    "używane do dołączania języków, bibliotek lub modułów zewnętrznych",
  ),

  commands: {
    __about: DocStr("o", "wyświetla informacje o projekcie ENIDE"),
    __help: DocStr("pomoc", "wyświetla listę wszystkich dostępnych poleceń"),
    __version: DocStr("wersja", "wyświetla aktualną wersję ENIDE"),
    __languages: DocStr(
      "jezyki",
      "wyświetla listę wszystkich obsługiwanych języków",
    ),
    __documentation: DocStr(
      "dok",
      "wyświetla dokumentację dla wybranego języka",
    ),
    __grammar: DocStr("grammar", "wyświetla zasady składniowe języka"),
  },

  library: {
    __standard: {
      main: DocStr("standard", "dostęp do podstawowych funkcji systemowych"),
      __isarray: DocStr(
        "JestLista",
        "sprawdza, czy wartość jest listą (tablicą)",
      ),
      __isobject: DocStr("JestObiektem", "sprawdza, czy wartość jest obiektem"),
      __typeof: DocStr("TypZmiennej", "zwraca typ danych zmiennej"),
      __parse: DocStr("analizuj", "konwertuje tekst na odpowiedni typ danych"),
    },
    __math: {
      main: DocStr("matematyka", "dostęp do funkcji i stałych matematycznych"),
      __pi: DocStr("PI", "zwraca wartość liczby Pi"),
      __sqrt: DocStr("PierwiastekKwadratowy", "oblicza pierwiastek kwadratowy"),
      __pow: DocStr("potega", "podnosi liczbę do potęgi"),
      __round: DocStr(
        "zaokraglij",
        "zaokrągla liczbę do najbliższej liczby całkowitej",
      ),
      __random: DocStr("losowy", "generuje losową liczbę"),
      __max: DocStr("maksimum", "zwraca największą wartość z listy"),
      __min: DocStr("minimum", "zwraca najmniejszą wartość z listy"),
      __isNumber: DocStr("JestLiczba", "sprawdza, czy wartość jest liczbą"),
      __isInteger: DocStr(
        "JestCalkowita",
        "sprawdza, czy liczba jest całkowita",
      ),
      __isFloat: DocStr(
        "JestDziesietna",
        "sprawdza, czy liczba ma część ułamkową",
      ),
      __cos: DocStr("cos", "oblicza cosinus"),
      __sin: DocStr("sin", "oblicza sinus"),
      __tan: DocStr("tan", "oblicza tangens"),
    },

    __string: {
      main: DocStr("tekst", "funkcje do manipulacji ciągami znaków"),
      __length: DocStr("dlugosc", "zwraca liczbę znaków w tekście"),
      __toUpperCase: DocStr("NaWielkie", "zamienia tekst na wielkie litery"),
      __toLowerCase: DocStr("NaMale", "zamienia tekst na małe litery"),
      __include: DocStr(
        "zawiera",
        "sprawdza, czy tekst zawiera określony fragment",
      ),
      __repeat: DocStr("powtorz", "powtarza tekst określoną liczbę razy"),
    },

    __date: {
      main: DocStr("data", "funkcje obsługi daty i czasu"),
      __now: DocStr("teraz", "zwraca aktualną datę i czas"),
      __year: DocStr("rok", "zwraca aktualny rok"),
      __month: DocStr("miesiac", "zwraca aktualny miesiąc"),
      __dayMonth: DocStr("DzienMiesiaca", "zwraca dzień miesiąca"),
      __dayWeek: DocStr("DzienTygodnia", "zwraca dzień tygodnia"),
      __hour: DocStr("godzina", "zwraca aktualną godzinę"),
      __minute: DocStr("minuta", "zwraca minuty"),
      __second: DocStr("sekunda", "zwraca sekundy"),
    },
  },

  types: {
    __number: DocStr("liczba", "deklaracja zmiennej numerycznej"),
    __string: DocStr("tekst", "deklaracja zmiennej tekstowej"),
    __boolean: DocStr("bool", "deklaracja zmiennej logicznej (prawda/falsz)"),
    __object: DocStr("obiekt", "deklaracja struktury obiektu"),
    __void: DocStr("pusty", "oznacza brak zwracanej wartości przez funkcję"),
    __array: DocStr("lista", "deklaracja struktury listy"),
  },

  specialValues: {
    __true: DocStr("prawda", "wartość logiczna prawdy"),
    __false: DocStr("falsz", "wartość logiczna fałszu"),
    __null: DocStr("nic", "oznacza brak wartości"),
  },

  words: {
    __new: DocStr("nowy", "tworzy nową instancję klasy"),
    __this: DocStr("ten", "odniesienie do aktualnej instancji obiektu"),
    __extends: DocStr("rozszerza", "wskazuje na dziedziczenie klasy"),
  },

  accessModifiers: {
    __private: DocStr("prywatny", "dostępny tylko wewnątrz klasy"),
    __public: DocStr("publiczny", "dostępny z każdego miejsca"),
    __protected: DocStr("chroniony", "dostępny w klasie i klasach pochodnych"),
    __readonly: DocStr(
      "TylkoOdczyt",
      "wartość nie może być zmieniona po inicjalizacji",
    ),
    __static: DocStr("statyczny", "należy do klasy, a nie do jej instancji"),
  },

  methods: {
    method: {
      __print: DocStr("wypisz", "wypisuje wartość na ekran/konsolę"),
      __scan: DocStr("wczytaj", "pobiera dane od użytkownika"),
      __return: DocStr("zwroc", "zwraca wartość z funkcji"),
      __break: DocStr("przerwij", "natychmiastowe przerwanie pętli"),
      __continue: DocStr("kontynuuj", "przejście do następnej iteracji pętli"),
    },

    sentences: {
      __function: DocStr("funkcja", "deklaracja nowej funkcji"),
      __if: DocStr("jezeli", "instrukcja warunkowa"),
      __else: DocStr(
        "inaczej",
        "blok wykonywany, gdy warunek nie jest spełniony",
      ),
      __while: DocStr(
        "dopoki",
        "pętla wykonywana dopóki warunek jest prawdziwy",
      ),
      __for: DocStr("dla", "pętla iteracyjna z licznikiem"),
      __switch: DocStr("wybor", "struktura wyboru wielu wariantów"),
      __case: DocStr("przypadek", "konkretny wariant w strukturze wyboru"),
      __default: DocStr(
        "domyslny",
        "wykonywany, gdy żaden przypadek nie pasuje",
      ),
      __try: DocStr("sprobuj", "początek bloku obsługi wyjątków"),
      __catch: DocStr("zlap", "obsługa przechwyconego błędu"),
      __finally: DocStr("nakoniec", "blok wykonywany zawsze po try/catch"),
      __class: DocStr("klasa", "deklaracja nowej klasy"),
      __constructor: DocStr(
        "konstruktor",
        "funkcja inicjalizująca obiekt klasy",
      ),
    },
  },

  errors: {
    __labels: errorLabel(
      "Wiadomosc",
      "Wartosc",
      "Zmienna",
      "Wlasciwosc",
      "Obiekt",
      "Oczekiwano",
      "Otrzymano",
      "PrzypisanieDoStalej",
      "ZdublowanyParametr",
      "Wskazowka",
      "NieprawidlowyToken",
      "PrzepelnienieStosu",
      "Token",
      "NieoczekiwanyKoniecWejscia",
    ),
    main: errorMessage("BLAD", "ogólny błąd systemu"),
    __TypeError: errorMessage(
      "BLADTYPU",
      "nieprawidłowy typ danych w operacji",
    ),
    __InitError: errorMessage(
      "BLADINICJALIZACJI",
      "zmienna nie została zainicjalizowana",
    ),
    __ReferenceError: errorMessage(
      "BLADREFERENCJI",
      "odwołanie do nieistniejącej zmiennej",
    ),
    __SyntaxError: errorMessage("BLADSKLADNI", "błąd w składni kodu"),
    __RangeError: errorMessage(
      "BLADZAKRESU",
      "wartość poza dopuszczalnym zakresem",
    ),
    __URIError: errorMessage("BLADURI", "nieprawidłowy format URI"),
    __EvalError: errorMessage("BLADEVAL", "błąd związany z funkcją eval"),
    __UNKNOWN_ERROR: errorMessage(
      "NIEZNANYBLAD",
      "wystąpił nieoczekiwany błąd systemu",
    ),
  },

  example: {
    __array: [
      "jedzenie",
      "kraj",
      "lista_nazw",
      "liczby",
      "kolory",
      "produkty",
      "uzytkownicy",
      "kategorie",
      "punkty",
      "jezyki",
    ],
    __boolean: [
      "status",
      "jest_aktywny",
      "moze_uzyc",
      "jest_gotowy",
      "autoryzowany",
      "zalogowany",
      "w_trakcie",
      "zakonczono",
      "zweryfikowany",
      "usuniety",
    ],
    __function: [
      "pobierzNazwe",
      "obliczWartosc",
      "pokazDane",
      "aktualizujProfil",
      "formatujTekst",
      "analizujKod",
      "sprawdzDane",
      "zapiszPlik",
      "wyslijWiadomosc",
      "sumujWszystko",
    ],
    __number: [
      "wiek",
      "rok_urodzenia",
      "srednia",
      "suma",
      "cena",
      "indeks",
      "czas",
      "ilosc",
      "wynik",
      "godzina",
    ],
    __object: [
      "osoba",
      "klient",
      "konfiguracja",
      "odpowiedz",
      "platnosc",
      "ustawienia",
      "profil",
      "adres",
      "metadane",
      "sesja",
    ],
    __string: [
      "imie",
      "tytul",
      "opis",
      "email",
      "haslo",
      "wiadomosc",
      "tag",
      "klucz",
      "url",
      "link",
    ],
    __void: [
      "uruchom",
      "usun",
      "zatrzymaj",
      "wyczysc",
      "zniszcz",
      "wyjdz",
      "wyczysc_pamiec",
      "zapisz_wszystko",
      "wyslij",
      "wejdz",
    ],
  },
}).grammar();
