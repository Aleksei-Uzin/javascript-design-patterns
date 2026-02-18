module.exports = {
  env: { 'jest/globals': true, es2022: true },
  extends: 'airbnb-base',
  plugins: ['jest'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'arrow-body-style': 'off',
    'func-names': ['error', 'as-needed'],
    'no-extend-native': 'off',
    'no-plusplus': 'off',
    'no-prototype-builtins': 'off',
    'no-restricted-syntax': ['error', 'WithStatement'],
    'no-useless-escape': 'off',
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: { multiline: true, minProperties: 5 },
        ObjectPattern: { multiline: true },
        ImportDeclaration: 'never',
        ExportDeclaration: { multiline: true, minProperties: 5 },
      },
    ],
  },
};
