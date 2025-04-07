module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@screens': './src/screens',
          '@types': './src/types',
          '@navigation': './src/navigation',
          '@configs': './src/configs',
          '@hooks': './src/hooks',
          '@utils': './src/utils',
          '@services': './src/services',
          '@components': './src/components',
        },
      },
    ],
  ],
};
