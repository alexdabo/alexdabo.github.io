/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.{astro,ts,tsx}",
      options: {
        arrowParens: "avoid",
        bracketSpacing: true,
        insertPragma: false,
        jsxSingleQuote: false,
        printWidth: 90,
        proseWrap: "preserve",
        quoteProps: "as-needed",
        requirePragma: false,
        semi: false,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: "none"
      },
    },
  ],
};
