/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        arrowParens: "avoid",
        bracketSpacing: true,
        insertPragma: false,
        jsxSingleQuote: false,
        printWidth: 90,
        proseWrap: "preserve",
        quoteProps: "as-needed",
        requirePragma: false,
        semi: true,
        singleQuote: false,
        tabWidth: 2,
        trailingComma: "none",
        parser: "astro",
      },
    },
  ],
};
