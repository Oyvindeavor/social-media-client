import eslintPluginJest from "eslint-plugin-jest";
import eslintPluginCypress from "eslint-plugin-cypress";

export default [
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
        process: "readonly",
        module: "readonly",
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    ignores: [
      "**/*.cy.js",
      "**/*.test.js",
      "**/node_modules/**",
      "eslint.config.js",
    ],
    rules: {
      "no-unused-vars": "warn",
      semi: ["error", "always"],
      quotes: ["error", "single"],
      eqeqeq: "error",
    },
  },

  // Override for Jest test files
  {
    files: ["**/*.test.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        jest: "readonly",
      },
    },
    plugins: {
      jest: eslintPluginJest,
    },
    rules: {
      "jest/prefer-expect-assertions": "off",
    },
  },

  // Override for Cypress test files
  {
    files: ["**/*.cy.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        "cypress/globals": true,
      },
    },
    plugins: {
      cypress: eslintPluginCypress,
    },
    rules: {
      "cypress/no-unnecessary-waiting": "off",
      "no-unused-vars": "off",
    },
  },
];
