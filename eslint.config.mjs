import globals from "globals";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from 'eslint-plugin-react'
import pluginNext from '@next/eslint-plugin-next';
import pluginImport from "eslint-plugin-import";
import pluginPrettier from "eslint-plugin-prettier";
import pluginStylistic from '@stylistic/eslint-plugin'

export default tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.stylisticTypeChecked,
    tseslint.configs.recommendedTypeChecked,
    {
      files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
      ignores: ["**/node_modules", "**/dist"],
      plugins: {
        '@next/next': pluginNext,
        'react': pluginReact,
        'import': pluginImport,
        'prettier': pluginPrettier,
        '@stylistic': pluginStylistic
      },
      languageOptions: {
        parserOptions: {
          globals: { ...globals.node, ...globals.browser },
          projectService: true,
          tsconfigRootDir: import.meta.dirname,
          ecmaVersion: "latest",
          sourceType: "module",
        },
      },
      rules: {
        ...pluginReact.configs.recommended.rules,
        ...pluginNext.configs.recommended.rules,
        ...pluginNext.configs["core-web-vitals"].rules,
        "react/react-in-jsx-scope": "off",
        "no-multiple-empty-lines": ['error', { max:1 }],
        "@stylistic/object-curly-spacing": ["error", "always"],
        "@stylistic/jsx-newline": ["error", { "prevent": true }],
        "import/order": [
          "error",
          {
            groups: [
              "builtin",
              "internal",
              "external",
              ["parent", "sibling", "index"],
            ],
            "newlines-between": "always",
          },
        ],
      },
    },
);