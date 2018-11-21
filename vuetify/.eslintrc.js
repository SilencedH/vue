module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module"
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ["plugin:vue/recommended", "eslint:recommended"],

  // add your custom rules here
  //it is base on https://github.com/vuejs/eslint-config-vue
  rules: {
    "vue/max-attributes-per-line":0,
    "vue/html-self-closing":0,
    "vue/require-default-prop":0,
    "no-console":0,
    "vue/no-v-html":0,
    "vue/no-unused-vars":0
  }
};
