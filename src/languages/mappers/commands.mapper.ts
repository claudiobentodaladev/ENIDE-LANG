import { LanguageGrammar } from "../grammar.interface.js";
import { normEntry } from "../utils/transforms.js";

type Commands = LanguageGrammar["commands"];

export function mapCommands(commands: Commands) {
  return {
    __about: normEntry(commands.__about),
    __help: normEntry(commands.__help),
    __version: normEntry(commands.__version),
    __documentation: normEntry(commands.__documentation),
    __languages: normEntry(commands.__languages),
    __grammar: normEntry(commands.__grammar),
  };
}
