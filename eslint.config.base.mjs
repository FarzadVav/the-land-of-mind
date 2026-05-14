// @ts-check
/**
 * Shared flat-config fragments for NestJS and Next.js apps in this monorepo.
 * Import from the repo root; root `package.json` lists the ESLint-related deps
 * so pnpm can resolve them when this file is loaded.
 */
import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import tseslint from 'typescript-eslint';

/** @param {...string} extra */
export function monorepoIgnores(...extra) {
  return [
    {
      ignores: [
        '**/node_modules/**',
        '**/dist/**',
        '**/build/**',
        '**/.next/**',
        '**/out/**',
        '**/coverage/**',
        ...extra,
      ],
    },
  ];
}

export function eslintJsRecommended() {
  return [eslint.configs.recommended];
}

export function typescriptRecommendedTypeChecked() {
  return [...tseslint.configs.recommendedTypeChecked];
}

export function prettierRecommended() {
  return [eslintPluginPrettierRecommended];
}

/** Rules aligned across packages that use type-checked TypeScript ESLint. */
export const sharedTypeScriptRules = {
  '@typescript-eslint/no-explicit-any': 'off',
  '@typescript-eslint/no-floating-promises': 'warn',
  '@typescript-eslint/no-unsafe-argument': 'warn',
};

export const sharedPrettierRule = {
  'prettier/prettier': ['error', { endOfLine: 'auto' }],
};
