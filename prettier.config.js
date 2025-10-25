/** @import * as prettier from 'prettier'; */
// eslint-disable-next-line jsdoc/check-tag-names -- this is not typed file
/** @type {prettier.Config} */
const config = {
  arrowParens: "always",
  jsxSingleQuote: false,
  plugins: ["prettier-plugin-tailwindcss", "prettier-plugin-packagejson"],
  printWidth: 80,
  quoteProps: "consistent",
  semi: true,
  singleQuote: false,
  tailwindStylesheet: "./src/main.css",
  trailingComma: "all",
};

export default config;
