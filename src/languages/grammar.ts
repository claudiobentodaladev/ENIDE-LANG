import lang from "./grammar.import.js";
import { LanguageGrammar } from "../languages/grammar.class.js";

export function Grammer(Languages: string) {
  return (
    Object.values(lang as Record<string, LanguageGrammar>).find(
      (g) => g.language === Languages,
    ) ?? null
  );
}
