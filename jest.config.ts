import type { Config } from '@jest/types';
import 'ts-node/register';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@src/(.*)$': '<rootDir>/src/$1',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['<rootDir>/src/conf/jest.setup.ts'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec|unit))\\.(tsx?)$',
};

export default config;
