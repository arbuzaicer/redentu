module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          components: './src/components',
          config: './src/config',
          modules: './src/modules',
          store: './src/store',
          theme: './src/theme',
        },
      },
    ],
  ],
};
