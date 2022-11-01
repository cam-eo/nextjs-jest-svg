import nextJest from "next/jest";
import type { Config } from "@jest/types";

export const jestCustomConfig: Config.InitialOptions = {
  roots: ["<rootDir>"],
  coverageDirectory: "coverage",
  collectCoverage: true,
  modulePaths: ["<rootDir>"],
  testEnvironment: "jest-environment-jsdom",
  moduleDirectories: ["node_modules"],
  coverageReporters: ["lcov", "text-summary"],
  collectCoverageFrom: ["components/**/*.tsx"],
  verbose: true,
};

export const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});
export default createJestConfig(jestCustomConfig);
