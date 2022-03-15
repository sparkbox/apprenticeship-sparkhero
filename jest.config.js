module.exports = {
  collectCoverage: false,
  collectCoverageFrom: [
    '<rootDir>/src//*.js',
  ],
  moduleFileExtensions: ['js'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '[@]/(.*)$': '<rootDir>/src/$1',
  },
  testPathIgnorePatterns: [
    '/node_modules/',
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  verbose: true,
};
