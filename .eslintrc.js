module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'prettier', "plugin:import/recommended", "plugin:import/typescript"],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: ['@typescript-eslint'],
  rules: {
    "import/extensions": 0,
  },
};
