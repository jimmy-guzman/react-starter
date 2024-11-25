import eslintConfig from "@jimmy.codes/eslint-config";
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

export default eslintConfig({
  configs: storybookConfigs,
});
