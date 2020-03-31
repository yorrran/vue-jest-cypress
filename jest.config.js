module.exports = {
  // preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  transform: {
    '.*\\.(vue)$': 'vue-jest',
    '^.+\\.ts$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  collectCoverageFrom: [
    'src/**/*.{ts,vue}',
    '!src/main.ts',
    '!src/router.ts',
    '!src/**.d.ts',
  ],
  testMatch: ['**/tests/{unit, integration}/**.spec.ts'],
  collectCoverage: true,
  moduleFileExtensions: ['js', 'ts', 'vue', 'tsx'],
};
