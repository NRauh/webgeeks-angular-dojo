module.exports = {
  clearMocks: true,
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: [
    '<rootDir>/setupJest.ts',
  ],
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.html$',
      astTransformers: ['jest-preset-angular/InlineHtmlStripStylesTransformer'],
    },
  },
};
