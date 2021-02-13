module.exports = {
  parser: 'babel-eslint',
  extends: ['alloy', 'alloy/react'],
  env: {
    browser: true,
    node: true,
    jest: true
  },
  rules: {
    'max-params': 'off',
    complexity: 'off'
  }
}