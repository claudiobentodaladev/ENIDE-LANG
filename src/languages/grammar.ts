import lang from "./grammar.import.js";
import { LanguageGrammar } from "./grammar.interface.js";

export function Grammer(Languages: string) {
  return (
    Object.values(lang as Record<string, LanguageGrammar>).find(
      (g) => g.language === Languages.toLowerCase(),
    ) ?? null
  );
}
