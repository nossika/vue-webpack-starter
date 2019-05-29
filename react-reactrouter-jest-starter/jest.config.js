module.exports = {
  "moduleNameMapper": {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/test/file-mock.js",
    "\\.(css|less)$": "<rootDir>/test/style-mock.js",
    "^api(.*)$": "<rootDir>/src/api$1",
    "^pages(.*)$": "<rootDir>/src/pages$1",
    "^components(.*)$": "<rootDir>/src/components$1",
    "^utils(.*)$": "<rootDir>/src/utils$1",
    "^resources(.*)$": "<rootDir>/src/resources$1",
  },
  "testMatch": [
    "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}",
  ],
  "testEnvironment": "jest-environment-jsdom-fourteen",
  "transform": {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  "moduleFileExtensions": [
    "js",
    "jsx",
  ],
};