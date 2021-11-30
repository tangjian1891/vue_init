const { defineConfig } = require("eslint-define-config");
module.exports = defineConfig({
  // root: true,
  // env: {
  //   browser: true,
  //   node: true,
  //   es6: true,
  // },
  // parser: "vue-eslint-parser",
  // parserOptions: {
  //   parser: "@typescript-eslint/parser",
  //   ecmaVersion: 2020,
  //   sourceType: "module",
  //   // jsxPragma: "React",
  //   ecmaFeatures: {
  //     jsx: true,
  //   },
  // },
  extends: [
    // add more generic rulesets here, such as:
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
  },
});
