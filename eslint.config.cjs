module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    "vitest/globals": true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:@typescript-eslint/strict",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "no-console": "warn",
    semi: ["warn", "always"],
    quotes: ["warn", "single"],
    "prettier/prettier": "warn",
  },
};
