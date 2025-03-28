// eslint.config.js
import js from '@eslint/js';
import react from 'eslint-plugin-react';

export default [
  js.configs.recommended,
  react.configs.recommended,
  {
    files: ['**/*.js', '**/*.jsx'],
    rules: {
      'react/react-in-jsx-scope': 'off', // Para proyectos React
    },
  },
];
