module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:promise/recommended',
    'plugin:react/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react-refresh',
    '@typescript-eslint',
    'import',
    'promise',
    'prettier',
    'simple-import-sort',
    'react'
  ],
  rules: {
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'react/jsx-no-literals': 'off',
    'react/jsx-curly-brace-presence': [
      'error',
      {
        props: 'never',
        children: 'never',
      },
    ],
    'react/jsx-boolean-value': 'error',
    'react/display-name': 'error',
    'react/jsx-key': 'error',

    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'case',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'default',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'block-like',
      },
    ],
    'prefer-const': ['error'],
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [['^\\u0000'], ['^react', '^[^.]'], ['^src/'], ['^\\.']],
      },
    ],

    'max-lines': ['error', 500],
    'no-console': 'error',
    'object-shorthand': 'error',
    'no-unneeded-ternary': 'error',
    'no-nested-ternary': 'error',
    'newline-before-return': 'warn',
    semi: ['error', 'never'],

    // prettier
    'prettier/prettier': [
      'error',
      {
        tabWidth: 2,
        trailingComma: 'all',
        semi: false,
        arrowParens: 'always',
        singleQuote: true,
        printWidth: 80,
        bracketSpacing: true,
      },
    ],

    'import/newline-after-import': 'error',

    // react
    'react/sort-comp': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/no-unstable-nested-components': 'off',

    // promise
    'promise/prefer-await-to-then': 'warn',
    'promise/prefer-await-to-callbacks': 'warn',

    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],

    '@typescript-eslint/consistent-type-imports': [
      'error',
      { fixStyle: 'inline-type-imports' },
    ],
  },
}
