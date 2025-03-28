// eslint.config.js
import js from '@eslint/js';
import react from 'eslint-plugin-react';

export default [
  js.configs.recommended,
  {
    plugins: {
      react: react, // Correcto en Flat Config
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    files: ['**/*.js', '**/*.jsx'],
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off', // Opcional si usas TypeScript
    },
  },
];
