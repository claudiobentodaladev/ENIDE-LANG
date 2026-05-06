import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const italiano = new Language({
  language: "italiano",
  about:
    "ENIDE è un transpilatore traducibile che permette di programmare in qualsiasi lingua",

  include: DocStr(
    "Includere",
    "Usato per includere linguaggi, librerie o strutture da altri file",
  ),

  commands: {
    __about: DocStr("informazioni", "per ottenere informazioni su ENIDE"),
    __help: DocStr(
      "aiuto",
      "per ottenere la lista di tutti i comandi disponibili",
    ),
    __version: DocStr("versione", "per ottenere la versione attuale di ENIDE"),
    __languages: DocStr(
      "lingue",
      "per ottenere la lista di tutte le lingue disponibili",
    ),
    __documentation: DocStr(
      "doc",
      "per ottenere la documentazione per una lingua",
    ),
    __grammar: DocStr("grammatica", "per ottenere la grammatica di una lingua"),
  },

  library: {
    __standard: {
      main: DocStr("standard", "per accedere ai metodi standard utili"),
      __isarray: DocStr("ÈArray", "per verificare se il valore è un array"),
      __isobject: DocStr(
        "ÈOggetto",
        "per verificare se il valore è un oggetto",
      ),
      __typeof: DocStr("Tipo", "per ottenere il tipo di un valore"),
      __parse: DocStr("Parse", "per convertire testo nel valore corretto"),
    },
    __math: {
      main: DocStr("matematica", "per accedere alle funzioni matematiche"),
      __pi: DocStr("PI", "per ottenere il valore di pi greco"),
      __sqrt: DocStr("RadiceQuadrata", "per ottenere la radice quadrata"),
      __pow: DocStr("Potenza", "per ottenere la potenza di un numero"),
      __round: DocStr("Arrotonda", "per arrotondare un numero"),
      __random: DocStr("Casuale", "per ottenere un numero casuale"),
      __max: DocStr("Massimo", "per ottenere il valore massimo"),
      __min: DocStr("Minimo", "per ottenere il valore minimo"),
      __isNumber: DocStr("ÈNumero", "per verificare se un valore è un numero"),
      __isInteger: DocStr("ÈIntero", "per verificare se un valore è un intero"),
      __isFloat: DocStr(
        "ÈDecimale",
        "per verificare se un valore è un decimale",
      ),
      __cos: DocStr("Cos", "per ottenere il coseno di un angolo"),
      __sin: DocStr("Sin", "per ottenere il seno di un angolo"),
      __tan: DocStr("Tan", "per ottenere la tangente di un angolo"),
    },

    __string: {
      main: DocStr(
        "stringa",
        "per accedere alle funzioni di manipolazione del testo",
      ),
      __length: DocStr("Lunghezza", "per ottenere la lunghezza di una stringa"),
      __toUpperCase: DocStr(
        "InMaiuscolo",
        "per convertire una stringa in maiuscolo",
      ),
      __toLowerCase: DocStr(
        "InMinuscolo",
        "per convertire una stringa in minuscolo",
      ),
      __include: DocStr(
        "Contiene",
        "per verificare se una stringa contiene una sottostringa",
      ),
      __repeat: DocStr(
        "Ripeti",
        "per ripetere una stringa un certo numero di volte",
      ),
    },

    __date: {
      main: DocStr("data", "per accedere alle funzioni di data e ora"),
      __now: DocStr("Adesso", "per ottenere data e ora attuali"),
      __year: DocStr("Anno", "per ottenere l'anno"),
      __month: DocStr("Mese", "per ottenere il mese"),
      __dayMonth: DocStr("GiornoMese", "per ottenere il giorno del mese"),
      __dayWeek: DocStr(
        "GiornoSettimana",
        "per ottenere il giorno della settimana",
      ),
      __hour: DocStr("Ora", "per ottenere l'ora"),
      __minute: DocStr("Minuto", "per ottenere il minuto"),
      __second: DocStr("Secondo", "per ottenere il secondo"),
    },
  },

  types: {
    __number: DocStr("numero", "per dichiarare una variabile di tipo numero"),
    __string: DocStr("testo", "per dichiarare una variabile di tipo testo"),
    __boolean: DocStr("bool", "per dichiarare una variabile di tipo booleano"),
    __object: DocStr("oggetto", "per dichiarare un oggetto statico"),
    __void: DocStr(
      "vuoto",
      "per dichiarare una funzione che non restituisce valore",
    ),
    __array: DocStr("array", "per dichiarare una struttura array"),
  },

  specialValues: {
    __true: DocStr("Vero", "valore booleano vero"),
    __false: DocStr("Falso", "valore booleano falso"),
    __null: DocStr("Null", "assenza di valore"),
  },

  words: {
    __new: DocStr("nuovo", "per creare una nuova istanza di una classe"),
    __this: DocStr(
      "questo",
      "per accedere agli attributi della classe corrente",
    ),
    __extends: DocStr(
      "estende",
      "per dichiarare che una classe eredita da un'altra",
    ),
  },

  accessModifiers: {
    __private: DocStr("privato", "accessibile solo all'interno della classe"),
    __public: DocStr("pubblico", "accessibile da ovunque"),
    __protected: DocStr(
      "protetto",
      "accessibile nella classe e nelle sottoclassi",
    ),
    __readonly: DocStr("soloLettura", "valore assegnabile una sola volta"),
    __static: DocStr("statico", "appartiene alla classe e non all'istanza"),
  },

  methods: {
    method: {
      __print: DocStr("stampa", "per stampare un valore sullo schermo"),
      __scan: DocStr("leggi", "per leggere un valore dall'input"),
      __return: DocStr("ritorna", "per restituire un valore da una funzione"),
      __break: DocStr("interrompi", "per uscire da un ciclo"),
      __continue: DocStr("continua", "per passare all'iterazione successiva"),
    },

    sentences: {
      __function: DocStr("funzione", "per dichiarare una funzione"),
      __if: DocStr("se", "per dichiarare una condizione"),
      __else: DocStr("altrimenti", "per dichiarare una condizione alternativa"),
      __while: DocStr("mentre", "per dichiarare un ciclo mentre"),
      __for: DocStr("per", "per dichiarare un ciclo for"),
      __switch: DocStr(
        "seleziona",
        "per dichiarare una struttura di selezione",
      ),
      __case: DocStr("caso", "per dichiarare un caso nella selezione"),
      __default: DocStr("predefinito", "quando nessun caso corrisponde"),
      __try: DocStr("prova", "per dichiarare un blocco prova"),
      __catch: DocStr("cattura", "per dichiarare un blocco di gestione errori"),
      __finally: DocStr("infine", "eseguito indipendentemente dal risultato"),
      __class: DocStr("classe", "per dichiarare una classe"),
      __constructor: DocStr(
        "costruttore",
        "struttura per dichiarare attributi in una classe",
      ),
    },
  },

  errors: {
    __labels: errorLabel(
      "Messaggio",
      "Valore",
      "Variabile",
      "Proprietà",
      "Oggetto",
      "Atteso",
      "Ricevuto",
      "Assegnazione Costante",
      "Parametro Duplicato",
      "Suggerimento",
      "Token Non Valido",
      "Stack Overflow",
      "Token",
      "Fine Input Inaspettata",
    ),
    main: errorMessage("ERRORE", "errore generico del sistema"),
    __TypeError: errorMessage("ERRORE_TIPO", "tipo non valido nell'operazione"),
    __InitError: errorMessage(
      "ERRORE_INIZIALIZZAZIONE",
      "variabile non inizializzata",
    ),
    __ReferenceError: errorMessage(
      "ERRORE_RIFERIMENTO",
      "variabile, funzione o libreria non esiste nell'ambito",
    ),
    __SyntaxError: errorMessage("ERRORE_SINTASSI", "codice non valido"),
    __RangeError: errorMessage(
      "ERRORE_INTERVALLO",
      "valore fuori dall'intervallo consentito",
    ),
    __URIError: errorMessage("ERRORE_URI", "URI malformato o non valido"),
    __EvalError: errorMessage("ERRORE_EVAL", "errore relativo a eval"),
    __UNKNOWN_ERROR: errorMessage(
      "ERRORE_SCONOSCIUTO",
      "errore completamente sconosciuto",
    ),
  },

  example: {
    __array: [
      "cibi",
      "paesi",
      "elementi",
      "tag",
      "colori",
      "prodotti",
      "utenti",
      "categorie",
      "punti",
      "lingue",
    ],
    __boolean: [
      "attivo",
      "maggiorenne",
      "visibile",
      "abilitato",
      "loggato",
      "verificata",
      "completato",
      "aperto",
      "chiuso",
      "eliminato",
    ],
    __function: [
      "ottieniNome",
      "ottieniValore",
      "elenca",
      "recuperaDati",
      "formattaDati",
      "analizzaInput",
      "validaModulo",
      "aggiornaElementi",
      "aggiornaStato",
      "calcolaTotale",
    ],
    __number: [
      "età",
      "anno",
      "media",
      "totale",
      "prezzo",
      "indice",
      "durata",
      "quantità",
      "punti",
      "tempo",
    ],
    __object: [
      "persona",
      "utente",
      "configurazione",
      "risposta",
      "pagamento",
      "impostazioni",
      "profilo",
      "indirizzo",
      "metadati",
      "sessione",
    ],
    __string: [
      "nome",
      "titolo",
      "descrizione",
      "email",
      "password",
      "messaggio",
      "etichetta",
      "token",
      "url",
      "slug",
    ],
    __void: [
      "login",
      "avvia",
      "pulisci",
      "resetta",
      "distruggi",
      "logout",
      "pulisciCache",
      "salva",
      "inviaEmail",
      "accedi",
    ],
  },
}).grammar();
