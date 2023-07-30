module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    semi: ['error', 'never'],
    'prettier/prettier': ['error', { bracketSameLine: false }],
    'react-native/no-inline-styles': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
  },
}
