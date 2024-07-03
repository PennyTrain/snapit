import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";


export default [
  {languageOptions: { 
    globals: globals.browser
    },
    settings: {
      react: {
        version: "detect"
      }
    },
    rules: {
      "no-unused-vars": "error",
      "semi": ["error", "always"],
      "no-undef": "error"
    }
  },
  pluginJs.configs.recommended,
  pluginReactConfig,
];