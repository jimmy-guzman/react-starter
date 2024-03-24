/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: ['react-refresh'],
  extends: [
    'jimmy-guzman',
    'jimmy-guzman/react',
    'jimmy-guzman/typescript',
    'jimmy-guzman/vitest',
    'jimmy-guzman/testing-library',
    'plugin:storybook/recommended',
  ],
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  overrides: [
    {
      files: ['**/e2e/**/*.[jt]s?(x)'],
      rules: {
        'jest/no-done-callback': 'off',
        'jest/require-hook': 'off',
        'testing-library/prefer-screen-queries': 'off',
      },
    },
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
