import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import { monorepoIgnores } from '../../eslint.config.base.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  ...monorepoIgnores('eslint.config.mjs'),
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
];
