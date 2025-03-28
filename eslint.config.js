import js from '@eslint/js';
import react from 'eslint-plugin-react';
import prettier from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  react.configs.recommended,
  {
    ignores: ['node_modules', 'dist'],
  },
  {
    rules: {
      'no-unused-vars': 'warn',
      'react/prop-types': 'off',
    },
  },
  prettier,
];