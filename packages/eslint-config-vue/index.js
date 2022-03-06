module.exports = {
  root: true,
  extends: ['@tkofh', 'plugin:vue/recommended'],
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
