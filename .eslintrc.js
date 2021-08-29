module.exports = {
  extends: ['eslint:recommended', 'prettier', 'plugin:react/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-undef': 0,
  },
};
