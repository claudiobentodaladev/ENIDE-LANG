import { GLOBAL_MAP } from "../GLOBALMAP.js";

export function Normalize(str: string): string {
  if (!str) return "";

  let normalized = str
    .split("")
    .map((char) => {
      const lower = char.toLowerCase();
      const mapped = GLOBAL_MAP[lower];
      if (mapped) {
        return char === char.toUpperCase() ? mapped.toUpperCase() : mapped;
      }
      return char;
    })
    .join("");

  normalized = normalized.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  return normalized.replace(/[^\x00-\x7F]/g, "");
}
