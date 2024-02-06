module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@simple': './src/SimpleComponents',
          '@src': './src',
          '@myTypes': './src/types',
          '@assets': './assets',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
