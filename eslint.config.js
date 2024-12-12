import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: globals.browser 
    }
  },
  pluginJs.configs.recommended,
  {
    rules: {
      eqeqeq: ['error', 'always'], // Enforce === and !== over == and !=
      "prefer-const": ["error", {
        "destructuring": "all",
        "ignoreReadBeforeAssign": false
    }]
    },
  },
];