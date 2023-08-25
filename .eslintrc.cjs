module.exports = {
  extends: [
    'jimmy-guzman',
    'jimmy-guzman/typescript',
    'jimmy-guzman/react',
    'jimmy-guzman/vitest',
    'jimmy-guzman/testing-library',
  ],
  parserOptions: {
    project: ['./tsconfig.json', './tsconfig.node.json'],
  },
  rules: {
    // https://vitejs.dev/guide/assets.html#the-public-directory
    'import/no-absolute-path': 'off',
    'import/no-unresolved': ['error', { ignore: ['\\.svg$'] }],
    'import/no-anonymous-default-export': 'off',

    '@typescript-eslint/explicit-module-boundary-types': 'off',
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
}
