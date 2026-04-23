import { Language } from "../grammar.class.js";

export const tiengviet = new Language({
  language: "tiengviet",
  about:
    "ENIDE la mot trinh bien dich nguon sang nguon co the dich duoc, cho phep lap trinh bang bat ky ngon ngu nao",

  include: {
    main: "BaoGom",
    __description: "Được sử dụng để bao gồm ngôn ngữ hoặc thư viện",
  },

  commands: {
    all: {
      __about: {
        main: "Ve",
        __description: "de lay thong tin ve ENIDE",
      },
      __help: {
        main: "TroGiup",
        __description: "de lay danh sach tat ca cac lenh co san",
      },
      __version: {
        main: "PhienBan",
        __description: "de lay phien ban hien tai cua ENIDE",
      },
      __languages: {
        main: "NgonNgu",
        __description: "de lay danh sach tat ca cac ngon ngu co san",
      },
      __documentation: {
        main: "TaiLieu",
        __description: "de lay tai lieu cho mot ngon ngu",
      },
    },
  },

  library: {
    __math: {
      main: {
        main: "Toan",
        __description: "de truy cap cac ham toan hoc",
      },
      __pi: {
        main: "PI",
        __description: "de lay gia tri cua pi",
      },
      __sqrt: {
        main: "CanBacHai",
        __description: "de lay can bac hai",
      },
      __pow: {
        main: "LuyThua",
        __description: "de tinh luy thua cua mot so",
      },
      __round: {
        main: "LamTron",
        __description: "de lam tron mot so",
      },
      __random: {
        main: "NgauNhien",
        __description: "de lay mot so ngau nhien",
      },
      __max: {
        main: "LonNhat",
        __description: "de lay gia tri lon nhat",
      },
      __min: {
        main: "NhoNhat",
        __description: "de lay gia tri nho nhat",
      },
      __isNumber: {
        main: "LaSo",
        __description: "de kiem tra mot gia tri co phai la so khong",
      },
      __isInteger: {
        main: "LaSoNguyen",
        __description: "de kiem tra mot gia tri co phai la so nguyen khong",
      },
      __isFloat: {
        main: "LaSoThapPhan",
        __description: "de kiem tra mot gia tri co phai la so thap phan khong",
      },
    },

    __string: {
      main: {
        main: "Chuoi",
        __description: "de truy cap cac ham thao tac chuoi",
      },
      __length: {
        main: "DoDai",
        __description: "de lay do dai cua mot chuoi",
      },
      __toUpperCase: {
        main: "VietHoa",
        __description: "de chuyen doi mot chuoi sang chu hoa",
      },
      __toLowerCase: {
        main: "VietThuong",
        __description: "de chuyen doi mot chuoi sang chu thuong",
      },
    },

    __date: {
      main: {
        main: "Ngay",
        __description: "de truy cap cac ham thao tac ngay va gio",
      },
      __year: {
        main: "Nam",
        __description: "de lay nam",
      },
      __month: {
        main: "Thang",
        __description: "de lay thang",
      },
      __dayMonth: {
        main: "NgayTrongThang",
        __description: "de lay ngay trong thang",
      },
      __dayWeek: {
        main: "NgayTrongTuan",
        __description: "de lay ngay trong tuan",
      },
      __hour: {
        main: "Gio",
        __description: "de lay gio",
      },
      __minute: {
        main: "Phut",
        __description: "de lay phut",
      },
      __second: {
        main: "Giay",
        __description: "de lay giay",
      },
    },
  },

  types: {
    __object: {
      main: "DoiTuong",
      __description: "de khai bao mot doi tuong tinh",
    },
    __number: {
      main: "So",
      __description: "de khai bao mot bien kieu so",
    },
    __string: {
      main: "Chuoi",
      __description: "de khai bao mot bien kieu chuoi",
    },
    __boolean: {
      main: "Logic",
      values: { __true: "Dung", __false: "Sai" },
      __description: "de khai bao mot bien kieu logic",
    },
  },

  methods: {
    method: {
      __print: {
        main: "In",
        __description: "de in mot gia tri ra man hinh",
      },
      __scan: {
        main: "Nhap",
        __description: "de doc mot gia tri tu dau vao",
      },
      __return: {
        main: "TraVe",
        __description: "de tra ve mot gia tri tu mot ham",
      },
    },

    sentences: {
      __function: {
        main: "Ham",
        __description: "de khai bao mot ham",
      },
      __if: {
        main: "Neu",
        __description: "de khai bao mot dieu kien",
      },
      __else: {
        main: "KhongThi",
        __description: "de khai bao mot dieu kien thay the",
      },
      __while: {
        main: "TrongKhi",
        __description: "de khai bao mot vong lap while",
      },
      __for: {
        main: "Cho",
        __description: "de khai bao mot vong lap for",
      },
      __switch: {
        main: "LuaChon",
        __description: "de khai bao mot cau truc chon lua",
      },
      __case: {
        main: "TruongHop",
        __description: "de khai bao mot truong hop trong cau truc chon lua",
      },
      __default: {
        main: "MacDinh",
        __description:
          "de khai bao truong hop mac dinh trong cau truc chon lua",
      },
      __try: {
        main: "Thu",
        __description: "de khai bao mot khoi thu nghiem",
      },
      __catch: {
        main: "Bat",
        __description: "de khai bao mot khoi xu ly loi",
      },
      __finally: {
        main: "CuoiCung",
        __description: "de khai bao mot khoi luon luon thuc thi",
      },
    },
  },

  errors: {
    main: {
      tag: "LOI",
      message: "Loi he thong chung",
    },
    __UNKNOWN_ERROR: {
      tag: "LOI_KHONG_XAC_DINH",
      message: "Loi hoan toan khong xac dinh",
    },
    __TypeError: {
      tag: "LOI_KIEU",
      message: "Kieu du lieu khong hop le trong phep toan",
    },
    __ReferenceError: {
      tag: "LOI_THAM_CHIEU",
      message: "Bien khong ton tai trong pham vi",
    },
    __SyntaxError: {
      tag: "LOI_CU_PHAP",
      message: "Ma nguon khong hop le",
    },
    __RangeError: {
      tag: "LOI_PHAM_VI",
      message: "Gia tri nam ngoai pham vi cho phep",
    },
    __URIError: {
      tag: "LOI_URI",
      message: "URI bi loi hoac khong hop le",
    },
    __EvalError: {
      tag: "LOI_EVAL",
      message: "Loi lien quan den ham eval",
    },
  },
}).grammar();
