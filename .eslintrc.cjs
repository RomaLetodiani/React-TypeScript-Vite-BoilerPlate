module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    // Consider using an Airbnb-style guide here
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    // Adjust rule severity and add specific rules here

    'react-refresh/only-export-components': 'warn',

    // Example: Enforce accessibility rules
    'jsx-a11y/anchor-has-content': 'error',
    'jsx-a11y/click-events-have-key-events': 'error',

    // Example: Enforce performance best practices
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: true }],

    // Disable unnecessary rules
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
};
