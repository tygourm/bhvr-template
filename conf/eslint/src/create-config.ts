import { defineConfig } from "eslint/config";
import noRelativeImportPaths from "eslint-plugin-no-relative-import-paths";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";
import tseslint from "typescript-eslint";

const createConfig = (tsconfigRootDir: string) =>
  defineConfig(
    { ignores: ["dist"] },
    {
      extends: [tseslint.configs.recommended],
      languageOptions: {
        parserOptions: {
          tsconfigRootDir,
        },
      },
      plugins: {
        "no-relative-import-paths": noRelativeImportPaths,
        "simple-import-sort": simpleImportSort,
        "unused-imports": unusedImports,
      },
      rules: {
        curly: ["error", "multi"],
        "no-relative-import-paths/no-relative-import-paths": [
          "error",
          {
            prefix: "@",
            rootDir: "src",
            allowSameFolder: false,
          },
        ],
        "simple-import-sort/exports": "error",
        "simple-import-sort/imports": "error",
        "unused-imports/no-unused-imports": "error",
      },
    },
  );

export { createConfig };
