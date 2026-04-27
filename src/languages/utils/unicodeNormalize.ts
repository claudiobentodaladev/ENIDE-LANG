const SPECIAL_REPLACEMENTS: Record<string, string> = {
  æ: "ae",
  Æ: "AE",
  œ: "oe",
  Œ: "OE",
  ß: "ss",
  ð: "d",
  Ð: "D",
  þ: "th",
  Þ: "TH",
  ø: "o",
  Ø: "O",
  ł: "l",
  Ł: "L",
  đ: "d",
  Đ: "D",
  ħ: "h",
  Ħ: "H",
  ŧ: "t",
  Ŧ: "T",
  ŋ: "n",
  Ŋ: "N",
  ı: "i",
  İ: "I",
  ĳ: "ij",
  Ĳ: "IJ",
};

export function Normalize(str: string): string {
  return str
    .split("")
    .map((char) => SPECIAL_REPLACEMENTS[char] ?? char)
    .join("")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}
