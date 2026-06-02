import { createConfig } from "@bhvr-template/eslint-config/create-config";
import { defineConfig } from "eslint/config";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default defineConfig(createConfig(import.meta.dirname), {
  ignores: ["src/components/ui/*"],
  plugins: {
    "react-hooks": reactHooks,
    "react-refresh": reactRefresh,
  },
});
