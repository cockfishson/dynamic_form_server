import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: { globals: globals.node },
    rules: {
      "no-console": ["error", { allow: ["error", "warn"] }],
    },
  },
  pluginJs.configs.recommended,
];