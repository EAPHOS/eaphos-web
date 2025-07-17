import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import react from "eslint-plugin-react";
import jsxA11y from "eslint-plugin-jsx-a11y";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [
  {
    ignores: ["dist", "node_modules", "*.cjs", ".pnp.*", ".yarn"],
  },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "jsx-a11y": jsxA11y,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,

      // React 규칙
      "react/react-in-jsx-scope": "off", // React 17+ 에서는 불필요
      "react/prop-types": "off", // TypeScript 사용 시 불필요
      "react/jsx-uses-react": "off", // React 17+ 에서는 불필요
      "react/jsx-uses-vars": "error",
      "react/jsx-no-unused-vars": "warn",
      "react/jsx-key": "warn",
      "react/no-array-index-key": "warn",
      "react/jsx-pascal-case": "error",
      "react/jsx-no-duplicate-props": "error",
      "react/jsx-no-undef": "warn",
      "react/jsx-wrap-multilines": [
        "error",
        {
          declaration: "parens-new-line",
          assignment: "parens-new-line",
          return: "parens-new-line",
          arrow: "parens-new-line",
          condition: "parens-new-line",
          logical: "parens-new-line",
          prop: "parens-new-line",
        },
      ],

      // TypeScript 규칙
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-empty-function": "warn",
      "@typescript-eslint/prefer-const": "warn",
      "@typescript-eslint/no-var-requires": "error",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports" },
      ],
      "@typescript-eslint/no-import-type-side-effects": "error",

      // React Hooks 규칙
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // React Refresh 규칙
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      // 접근성 규칙
      "jsx-a11y/alt-text": "error",
      "jsx-a11y/anchor-has-content": "error",
      "jsx-a11y/anchor-is-valid": "error",
      "jsx-a11y/aria-props": "error",
      "jsx-a11y/aria-proptypes": "error",
      "jsx-a11y/aria-unsupported-elements": "error",
      "jsx-a11y/heading-has-content": "error",
      "jsx-a11y/img-redundant-alt": "error",
      "jsx-a11y/mouse-events-have-key-events": "warn",
      "jsx-a11y/no-access-key": "error",
      "jsx-a11y/no-autofocus": "warn",
      "jsx-a11y/no-distracting-elements": "error",
      "jsx-a11y/no-redundant-roles": "error",
      "jsx-a11y/role-has-required-aria-props": "error",
      "jsx-a11y/role-supports-aria-props": "error",

      // 일반적인 코드 품질 규칙
      "no-console": "warn",
      "no-debugger": "error",
      "no-duplicate-imports": "error",
      "no-unused-vars": "off", // TypeScript 규칙 사용
      "prefer-const": "error",
      "no-var": "error",
      "object-shorthand": "error",
      "prefer-arrow-callback": "error",
      "prefer-template": "error",
      "template-curly-spacing": "error",
      "arrow-spacing": "error",
      "comma-dangle": ["error", "always-multiline"],
      quotes: ["error", "single", { avoidEscape: true }],
      semi: ["error", "always"],
      indent: ["error", 2],
      "no-trailing-spaces": "error",
      "eol-last": "error",
      "no-multiple-empty-lines": ["error", { max: 1 }],
    },
  },
];
