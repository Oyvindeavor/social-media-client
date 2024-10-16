export default [
  {
    languageOptions: {
      ecmaVersion: 2021, 
      sourceType: "module", 
      globals: {
        window: "readonly",
        document: "readonly",
        process: "readonly",
        module: "readonly"
      }
    },
    linterOptions: {
      reportUnusedDisableDirectives: true
    },
    rules: {
      "no-unused-vars": "warn", 
      "semi": ["error", "always"], 
      "quotes": ["error", "single"], 
      "eqeqeq": "error"
    }
  }
];