import { Language } from "../grammar.class.js";

export const afaanoromoo = new Language({
  language: "afaanoromoo",
  about: "ENIDE-n tiraansipaayilerii afaan kamittuu hiikamuu dandaau dha",
  include: {
    main: "Hamachisu",
    __description: "Afaan ykn kuusaalee itti dabalachuuf tajaajila",
  },
  commands: {
    all: {
      __about: {
        main: "waee",
        __description: "waee ENIDE argachuuf",
      },
      __help: {
        main: "gargaarsa",
        __description: "tarree ajajoota jiran hunda argachuuf",
      },
      __version: {
        main: "lakkoofsa_baasii",
        __description: "lakkoofsa baasii ENIDE ammee argachuuf",
      },
      __languages: {
        main: "afaannota",
        __description: "tarree afaannota jiran hunda argachuuf",
      },
      __documentation: {
        main: "dokumanti",
        __description: "dokumanti afaanii argachuuf",
      },
    },
  },
  library: {
    __math: {
      main: {
        main: "herrega",
        __description: "dalagaawwan herregaa fayyadamuuf",
      },
      __pi: {
        main: "PI",
        __description: "gatii pi argachuuf",
      },
      __sqrt: {
        main: "hidda_isquweerii",
        __description: "hidda isquweerii argachuuf",
      },
      __pow: {
        main: "aangoo",
        __description: "aangoo lakkoofsaa argachuuf",
      },
      __round: {
        main: "geengessuu",
        __description: "lakkoofsa geengessuuf",
      },
      __random: {
        main: "tasaa",
        __description: "lakkoofsa tasaa argachuuf",
      },
      __max: {
        main: "guddaa",
        __description: "gatii guddaa argachuuf",
      },
      __min: {
        main: "xiqqaa",
        __description: "gatii xiqqaa argachuuf",
      },
      __isNumber: {
        main: "lakkoofsa_dha",
        __description: "gatiin sun lakkoofsa tauu isaa mirkaneessuuf",
      },
      __isInteger: {
        main: "lakkoofsa_guutuu_dha",
        __description: "gatiin sun lakkoofsa guutuu tauu isaa mirkaneessuuf",
      },
      __isFloat: {
        main: "lakkoofsa_muraa_dha",
        __description: "gatiin sun lakkoofsa muraa tauu isaa mirkaneessuuf",
      },
    },
    __string: {
      main: {
        main: "jecha",
        __description: "dalagaawwan jechaa fayyadamuuf",
      },
      __length: {
        main: "dheerina",
        __description: "dheerina jechaa argachuuf",
      },
      __toUpperCase: {
        main: "qubee_guddaa",
        __description: "jecha qubee guddaatti jijjiiruuf",
      },
      __toLowerCase: {
        main: "qubee_xiqqaa",
        __description: "jecha qubee xiqqaatti jijjiiruuf",
      },
    },
    __date: {
      main: {
        main: "guyyaa",
        __description: "dalagaawwan guyyaa fi yeroo fayyadamuuf",
      },
      __year: {
        main: "waggaa",
        __description: "waggaa argachuuf",
      },
      __month: {
        main: "jia",
        __description: "jia argachuuf",
      },
      __dayMonth: {
        main: "guyyaa_jiaa",
        __description: "guyyaa jiaa argachuuf",
      },
      __dayWeek: {
        main: "guyyaa_torbee",
        __description: "guyyaa torbee argachuuf",
      },
      __hour: {
        main: "saatii",
        __description: "saatii argachuuf",
      },
      __minute: {
        main: "daqiiqaa",
        __description: "daqiiqaa argachuuf",
      },
      __second: {
        main: "sekondii",
        __description: "sekondii argachuuf",
      },
    },
  },
  types: {
    __object: { main: "wanti", __description: "wanta tasgabbaa ibsuuf" },
    __number: {
      main: "lakkoofsa",
      __description: "jijjiiramaa gosa lakkoofsaa labsuuf",
    },
    __string: {
      main: "jecha",
      __description: "jijjiiramaa gosa jechaa labsuuf",
    },
    __boolean: {
      main: "loojikii",
      values: {
        __true: "Dhugaa",
        __false: "Soba",
      },
      __description: "jijjiiramaa gosa loojikii labsuuf",
    },
  },
  methods: {
    method: {
      __print: {
        main: "maxxansi",
        __description: "gatii agarsiisuuf",
      },
      __scan: {
        main: "dubbisi",
        __description: "gatii galmee irraa dubbisuuf",
      },
      __return: {
        main: "deebisi",
        __description: "dalagaa irraa gatii deebisuuf",
      },
    },
    sentences: {
      __function: {
        main: "dalagaa",
        __description: "dalagaa labsuuf",
      },
      __if: {
        main: "yoo",
        __description: "haala labsuuf",
      },
      __else: {
        main: "yoo_tuu_baate",
        __description: "filannoo biroo labsuuf",
      },
      __while: {
        main: "yeroo",
        __description: "naannoo yeroo labsuuf",
      },
      __for: {
        main: "hamma",
        __description: "naannoo hamma labsuuf",
      },
      __switch: {
        main: "fili",
        __description: "caasaa filannoo labsuuf",
      },
      __case: {
        main: "haala",
        __description: "caasaa filannoo keessatti haala labsuuf",
      },
      __default: {
        main: "idilee",
        __description: "haala idilee caasaa filannoo keessatti",
      },
      __try: {
        main: "yaali",
        __description: "kuta yaali labsuuf",
      },
      __catch: {
        main: "qabi",
        __description: "kuta dogoggora qabu labsuuf",
      },
      __finally: {
        main: "dhuma_irratti",
        __description: "kuta dhuma irratti raawwatamu labsuuf",
      },
    },
  },
  errors: {
    main: {
      tag: "DOGOGGORA",
      message: "Dogoggora sirnaa idilee",
    },
    __UNKNOWN_ERROR: {
      tag: "DOGOGGORA_HIN_BEEKAMNE",
      message: "Dogoggora guutumaan guututti hin beekamne",
    },
    __TypeError: {
      tag: "DOGOGGORA_GOSA",
      message: "Gosa hin malle dalagaa keessatti",
    },
    __ReferenceError: {
      tag: "DOGOGGORA_WABI",
      message: "Jijjiiramaan sun hin jiru",
    },
    __SyntaxError: {
      tag: "DOGOGGORA_SINTAASII",
      message: "Koodii hin malle",
    },
    __RangeError: {
      tag: "DOGOGGORA_DAANGAA",
      message: "Gatiin sun daangaa ala",
    },
    __URIError: {
      tag: "DOGOGGORA_URI",
      message: "URI sirrii hin taane",
    },
    __EvalError: {
      tag: "DOGOGGORA_EVAL",
      message: "Dogoggora eval waliin wal qabate",
    },
  },
}).grammar();
