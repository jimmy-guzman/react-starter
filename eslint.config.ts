import jimmyDotCodes from "@jimmy.codes/eslint-config";
import eslintPluginStorybook from "eslint-plugin-storybook";

const storybookConfigs = eslintPluginStorybook.configs["flat/recommended"].map(
  ({ files, name, plugins, rules }) => {
    return {
      ...(files && { files }),
      name,
      plugins: { ...plugins },
      rules: { ...rules },
    };
  },
);

export default jimmyDotCodes({
  configs: [
    ...storybookConfigs,
    {
      rules: {
        "@typescript-eslint/no-use-before-define": "error",
        "no-use-before-define": "off",
      },
    },
  ],
});
