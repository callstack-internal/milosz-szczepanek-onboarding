module.exports = {
  preset: 'react-native',
  testPathIgnorePatterns: [
    "/node_modules/', '(/__tests__/*.|\\e2e)\\.(ts|tsx|js)$",
  ],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native/.*|react-navigation|axios|react-native-localize|@react-navigation/.*))',
  ],
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  setupFiles: ['./jest.setup.ts'],
};
