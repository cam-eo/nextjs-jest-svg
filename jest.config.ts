import nextJest from "next/jest";
import type { Config } from "@jest/types";

export const jestCustomConfig: Config.InitialOptions = {
  testEnvironment: "jest-environment-jsdom",
  verbose: true,
  moduleNameMapper: {
    "\\.svg$": "<rootDir>/__mocks__/svg.js",
  },
};

export const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});
export default createJestConfig(jestCustomConfig);
