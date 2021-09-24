module.exports = {
  roots: ["<rootDir>/src"],
  preset: "ts-jest",
  transform: {
    "^.+\\.tsx?$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  testEnvironment: "jsdom",
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.jest.json",
      babelConfig: true,
    },
  },
  verbose: true,
  testRegex: "\\**\\**.test.(tsx|ts)$",
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};
