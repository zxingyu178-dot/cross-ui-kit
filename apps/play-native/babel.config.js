module.exports = function (api) {
  api.cache(true)
  return {
    plugins: [
      [
        '@tamagui/babel-plugin',
        {
          components: ['tamagui'],
          config: './tamagui.config.ts',
          importStyle: false,
        },
      ],
    ],
    presets: ['babel-preset-expo'],
  }
}
