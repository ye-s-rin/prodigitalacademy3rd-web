module.exports = {
  plugins: [
    'react-refresh',
    'import',
  ],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "react/prop-types": "off",
    "no-unused-vars": "off",
    "import/order": [
      "error", {}
    ],
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
    },
    {
      files: ['**/*.js?(x)'],
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2015,
      },
    },
  ],
};
