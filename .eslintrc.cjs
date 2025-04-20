module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'jsx-a11y'],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:jsx-a11y/recommended',
      'next/core-web-vitals',
      'prettier'
    ],
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'off'
    }
  };

  