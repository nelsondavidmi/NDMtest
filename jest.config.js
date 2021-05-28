module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: ['node_modules/(?!@react-native|react-native)'],
  testEnvironmentOptions: {
    enzymeAdapter: 'react16',
  },
  setupTestFrameworkScriptFile: '<rootDir>/setupTest.js',

};
