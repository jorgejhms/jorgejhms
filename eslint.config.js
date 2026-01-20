// eslint.config.js
import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import eslintPluginAstro from "eslint-plugin-astro";
import eslintPluginJsxA11y from "eslint-plugin-jsx-a11y";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";

export default defineConfig([
  // Base JavaScript configuration
  {
    files: ["**/*.js", "**/*.cjs", "**/*.mjs"],
    extends: [js.configs.recommended],
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error",
      "no-console": "warn",
    },
  },

  // TypeScript configuration
  {
    files: ["**/*.ts", "**/*.cts", "**/*.mts"],
    extends: [...tseslint.configs.recommended],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },

  // Astro configuration
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      // Override specific Astro rules if needed
    },
  },

  // JSX/TSX configuration for Preact components
  {
    files: ["**/*.jsx", "**/*.tsx"],
    extends: [js.configs.recommended],
    plugins: {
      "jsx-a11y": eslintPluginJsxA11y,
    },
    rules: {
      ...eslintPluginJsxA11y.configs.recommended.rules,
      "jsx-a11y/anchor-is-valid": "warn",
      "jsx-a11y/alt-text": "warn",
      "jsx-a11y/aria-props": "warn",
    },
  },

  // Prettier integration
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx", "**/*.astro"],
    plugins: {
      prettier: eslintPluginPrettier,
    },
    extends: [eslintConfigPrettier],
    rules: {
      "prettier/prettier": "error",
    },
  },

  // Global ignores
  {
    ignores: ["node_modules/", ".git/", "dist/", ".astro/", "public/"],
  },
]);
