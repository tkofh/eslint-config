module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  extends: ['@tkofh', 'plugin:vue/vue3-recommended'],
  plugins: ['vue'],
  rules: {
    'vue/no-parsing-error': ['error', {
      'x-invalid-end-tag': false,
    }],

    'vue/max-attributes-per-line': ['error', {
      singleline: 5,
    }],
  },
}
