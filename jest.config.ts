import nextJest from "next/jest";
import type { Config } from "@jest/types";

export const customJestConfig: Config.InitialOptions = {
  testEnvironment: "jest-environment-jsdom",
  verbose: true,
};

export const createJestConfig = nextJest({
  dir: "./",
});

const jestConfig = async () => {
  const nextJestConfig = await createJestConfig(customJestConfig)();
  return {
    ...nextJestConfig,
    moduleNameMapper: {
      // Workaround to put our SVG mock first
      "\\.svg$": "<rootDir>/__mocks__/svg.js",
      ...nextJestConfig.moduleNameMapper,
    },
  };
};

module.exports = jestConfig;

// The workaround was found here: https://github.com/vercel/next.js/issues/35634#issuecomment-1080942525
