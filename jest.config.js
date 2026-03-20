export default {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
  testEnvironment: 'jsdom',

  extensionsToTreatAsEsm: ['.ts'],

  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
  },

  transform: {
    '^.+\\.(ts|mjs|js|html)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$',
      },
    ],
  },

  transformIgnorePatterns: [
    'node_modules/(?!.*\\.mjs$|@angular|rxjs|tslib)'
  ],

  moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs'],
};