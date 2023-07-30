module.exports = {
  root: true,
  extends: [
    '@react-native',
    'plugin:react/jsx-runtime',
    'plugin:import/recommended',
  ],
  settings: {
    'import/ignore': ['node_modules/react-native/index\\.js$'],
  },
  rules: {
    semi: ['error', 'never'],
    'prettier/prettier': ['error', { bracketSameLine: false }],
    'react-native/no-inline-styles': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    'import/no-default-export': 'error',
    'import/no-unresolved': 'off',
  },
}
