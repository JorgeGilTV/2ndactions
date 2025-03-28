// eslint.config.js
import js from '@eslint/js';
import react from 'eslint-plugin-react';
import babelParser from '@babel/eslint-parser';

export default [
  js.configs.recommended,
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: babelParser, // Usar el parser de Babel
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ['@babel/preset-react'],
        },
      },
    },
    plugins: {
      react: react,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off', // Opcional si no usas PropTypes
    },
  },
];

