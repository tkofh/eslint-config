module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    node: true,
  },
  plugins: [
    '@typescript-eslint',
    'prefer-arrow',
    'unicorn',
  ],
  extends: [
    'standard',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.mjs'] }
    }
  },
  rules: {
    '@typescript-eslint/no-unused-vars': ['error', { args: 'all', argsIgnorePattern: '^_', ignoreRestSiblings: true }],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/ban-ts-comment': ['error', {
      'ts-expect-error': 'allow-with-description',
      'ts-ignore': 'allow-with-description',
      'ts-nocheck': true,
      'ts-check': false,
      minimumDescriptionLength: 3,
    }],
    'no-unused-vars': 'off',
    'no-undef': 'off',

    'import/order': 'error',
    'import/first': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-unresolved': 'off',
    'arrow-parens': 'off',
    'generator-star-spacing': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'prefer-const': ['error', {
      destructuring: 'any',
      ignoreReadBeforeAssign: false,
    }],
    'no-lonely-if': 'error',
    curly: ['error', 'all'],
    'require-await': 'error',
    'dot-notation': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'no-useless-rename': 'error',
    'arrow-body-style': ['error', 'as-needed'],
    'prefer-arrow-callback': 'error',
    'func-style': ['error', 'expression', { 'allowArrowFunctions': true }],

    'unicorn/error-message': 'error',
    'unicorn/escape-case': 'error',
    'unicorn/no-array-instanceof': 'error',
    'unicorn/no-new-buffer': 'error',
    'unicorn/no-unsafe-regex': 'off',
    'unicorn/number-literal-case': 'error',
    'unicorn/prefer-exponentiation-operator': 'error',
    'unicorn/prefer-includes': 'error',
    'unicorn/prefer-starts-ends-with': 'error',
    'unicorn/prefer-text-content': 'error',
    'unicorn/prefer-type-error': 'error',
    'unicorn/throw-new-error': 'error',

    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        'disallowPrototype': false,
        'singleReturnOnly': false,
        'classPropertiesAllowed': false,
        'allowStandaloneDeclarations': false,
      },
    ],
  },
}
