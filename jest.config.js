// jest.config.js
module.exports = {
  roots: ['<rootDir>/tests'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
  testPathIgnorePatterns: ['/node_modules/', '/anaconda/', '/AppData/'],
  clearMocks: true,
};
