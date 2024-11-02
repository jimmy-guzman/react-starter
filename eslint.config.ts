import jimmyDotCodes from "@jimmy.codes/eslint-config";
// @ts-expect-error missing types
import eslintPluginStorybook from "eslint-plugin-storybook";

export default jimmyDotCodes({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access -- missing types
  configs: eslintPluginStorybook.configs["flat/recommended"],
});
