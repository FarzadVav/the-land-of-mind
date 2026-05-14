// @ts-check
import globals from 'globals';
import tseslint from 'typescript-eslint';
import {
  eslintJsRecommended,
  monorepoIgnores,
  prettierRecommended,
  sharedPrettierRule,
  sharedTypeScriptRules,
  typescriptRecommendedTypeChecked,
} from '../../eslint.config.base.mjs';

export default tseslint.config(
  ...monorepoIgnores('eslint.config.mjs'),
  ...eslintJsRecommended(),
  ...typescriptRecommendedTypeChecked(),
  ...prettierRecommended(),
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
      sourceType: 'commonjs',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    rules: {
      ...sharedTypeScriptRules,
      ...sharedPrettierRule,
    },
  },
);
