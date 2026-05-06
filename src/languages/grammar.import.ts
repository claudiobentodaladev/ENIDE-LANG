// All of this one gotta be the same then "scripts/restore-grammars.ts"

import list from "./language-list.json" with { type: "json" };

const grammarNames = list.languages;

const modules = await Promise.all(
  grammarNames.map((name) =>
    import(`./grammars/${name}.js`).then((m) => [name, m[name]]),
  ),
);

export default Object.fromEntries(modules);
