module.exports = {
  env: { 'jest/globals': true, es2022: true, browser: true },
  extends: 'airbnb-base',
  plugins: ['jest'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'arrow-body-style': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'func-names': ['error', 'as-needed'],
    'generator-star-spacing': 'off',
    'no-extend-native': 'off',
    'no-param-reassign': ['error', { props: false }],
    'no-plusplus': 'off',
    'no-prototype-builtins': 'off',
    'no-restricted-syntax': ['error', 'WithStatement'],
    'import/extensions': ['error', 'always', { ignorePackages: true }],
    'no-unreachable-loop': 'off',
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
