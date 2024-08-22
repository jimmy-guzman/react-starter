// @ts-check
import jimmyDotCodes from "@jimmy.codes/eslint-config";
import eslintPluginStorybook from "eslint-plugin-storybook";

export default jimmyDotCodes({
  autoDetect: true,
  overrides: [...eslintPluginStorybook.configs["flat/recommended"]],
});
