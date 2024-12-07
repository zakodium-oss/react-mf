import react from 'eslint-config-zakodium/react';
import ts from 'eslint-config-zakodium/ts';
import unicorn from 'eslint-config-zakodium/unicorn';
import storybook from 'eslint-plugin-storybook';

export default [
  {
    ignores: ['lib', 'node_modules', 'storybook-static'],
  },
  ...ts,
  ...react,
  ...unicorn,
  ...storybook.configs['flat/recommended'],
];
