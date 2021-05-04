module.exports = {
  parser: 'babel-eslint',
  extends: ['alloy', 'alloy/react'],
  plugins: ['react', 'prettier'],
  env: {
    browser: true,
    node: true,
    jest: true
  },
  rules: {
    'prettier/prettier': 'error',
    'max-params': 'off',
    complexity: 'off',
    'no-invalid-this': 'off',
    'react/jsx-no-useless-fragment': 'off'
  }
};
