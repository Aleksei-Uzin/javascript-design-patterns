module.exports = {
  env: { 'jest/globals': true },
  extends: 'airbnb-base',
  plugins: ['jest'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'arrow-body-style': 'off',
    'no-useless-escape': 'off',
    'no-plusplus': 'off',
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
