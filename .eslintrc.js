module.exports = {
  env: {
    'jest/globals': true,
  },
  extends: 'airbnb-base',
  plugins: ['jest'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'arrow-body-style': 'off',
    'no-useless-escape': 'off',
  },
};
