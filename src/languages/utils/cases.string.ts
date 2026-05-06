import { Normalize } from "./unicodeNormalize.js";

const NoSpace = (s: string, noSpace: boolean) => {
  if (!noSpace) return s;
  return s.trim().replace(/ +/g, "_");
};

export function capitalize(text: string | null | undefined): string {
  if (!text || typeof text !== "string") {
    return "";
  }

  const trimmed = text.trim();

  if (trimmed.length === 0) {
    return "";
  }

  return trimmed[0].toUpperCase() + trimmed.slice(1).toLowerCase();
}

export const low = (s: string, noSpace: boolean) => {
  return NoSpace(s.toLowerCase(), noSpace);
};
export const up = (s: string, noSpace: boolean) => {
  return NoSpace(s.toUpperCase(), noSpace);
};

export const norm = (s: string, noSpace: boolean) => {
  return NoSpace(Normalize(s.toLowerCase()), noSpace);
};

export const normUp = (s: string, noSpace: boolean) => {
  return NoSpace(Normalize(s.toUpperCase()), noSpace);
};
export const normCap = (s: string, noSpace: boolean) => {
  return NoSpace(Normalize(capitalize(s)), noSpace);
};
