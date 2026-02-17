import { defineConfig } from "@jimmy.codes/eslint-config";
import pluginRouter from "@tanstack/eslint-plugin-router";

export default defineConfig({
  overrides: [...pluginRouter.configs["flat/recommended"]],
  react: {
    overrides: {
      "react-refresh/only-export-components": [
        "error",
        {
          extraHOCs: [
            "createFileRoute",
            "createLazyFileRoute",
            "createRootRoute",
            "createRootRouteWithContext",
            "createLink",
            "createRoute",
            "createLazyRoute",
          ],
        },
      ],
    },
  },
});
