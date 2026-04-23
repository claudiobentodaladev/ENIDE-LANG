import config from "./language-list.json" with { type: "json" };

const grammarNames = config.languages;

const modules = await Promise.all(
  grammarNames.map((name) =>
    import(`./grammars/${name}.js`).then((m) => [name, m[name]]),
  ),
);

export default Object.fromEntries(modules);
