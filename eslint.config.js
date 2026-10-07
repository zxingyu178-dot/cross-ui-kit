// @ts-check
// ESLint 9 flat config —— 全仓基线规则
// 各栈（Taro/Expo）如需插件，在各自包内追加局部 eslint.config.js，不得放宽本文件的核心规则
import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import globals from 'globals'

export default tseslint.config(
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/.turbo/**',
      '**/.taro/**',
      '**/.expo/**',
      '**/storybook-static/**',
      '**/playwright-report/**',
      '**/test-results/**',
      '**/src-tauri/target/**',
      'packages/tokens/dist/**',
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx,js,jsx,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      // --- 全仓硬性规则（与 AGENTS.md 对齐） ---
      '@typescript-eslint/no-explicit-any': 'error', // 禁止 any，用 unknown + 类型收窄
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/consistent-type-imports': 'error', // 类型导入必须 import type
      'no-console': ['warn', { allow: ['warn', 'error'] }], // 业务代码禁止 console.log
      eqeqeq: ['error', 'always'],
      'prefer-const': 'error',
      'no-var': 'error',
    },
  },
  {
    // 配置文件与脚本放宽 Node 环境
    files: ['**/*.config.{js,mjs,cjs}', 'scripts/**', '**/eslint.config.js'],
    languageOptions: { globals: { ...globals.node } },
    rules: {
      'no-console': 'off',
      '@typescript-eslint/no-require-imports': 'off', // Metro/构建配置常以 CJS require 加载
    },
  },
)
