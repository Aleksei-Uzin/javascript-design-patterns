/**
 * @type {import('jest').Config}
 * @see https://jestjs.io/docs/configuration
 */
const config = {
  /**
   * Run all tests to completion, and then report all errors.
   * @see https://jestjs.io/docs/configuration#bail-number--boolean
   */
  bail: false,

  /**
   * Automatically clear mock calls, instances, contexts and results before every test.
   * @see https://jestjs.io/docs/configuration#clearmocks-boolean
   */
  clearMocks: true,

  /**
   * Indicates whether the coverage information should be collected while executing the test.
   * @see https://jestjs.io/docs/configuration#collectcoverage-boolean
   */
  collectCoverage: false,

  /**
   * The directory where Jest should output its coverage files.
   * @see https://jestjs.io/docs/configuration#coveragedirectory-string
   */
  coverageDirectory: './coverage/',

  /**
   * Sets the minimum percentage of code coverage that tests must meet.
   * @see https://jestjs.io/docs/configuration#coveragethreshold-object
   */
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 95,
      functions: 100,
      lines: 100,
    },
  },

  /**
   * A regex pattern that Jest uses to detect test files.
   * @see https://jestjs.io/docs/configuration#testregex-string--arraystring
   */
  testRegex: '(/__tests__/.*|(\.|/)(test|spec))\.js$',

  /**
   * Indicates whether each individual test should be reported during the run.
   * @see https://jestjs.io/docs/configuration#verbose-boolean
   */
  verbose: false,
};

export default config;
