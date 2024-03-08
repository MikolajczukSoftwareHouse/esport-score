process.env.TAMAGUI_TARGET = 'native';
module.exports = (api) => {
  api.cache(false);
  return {
    plugins: [
      [
        '@tamagui/babel-plugin',
        {
          components: ['@esport-score/ui', 'tamagui'],
          config: 'tamagui.config.ts',
          importsWhitelist: ['constants.js', 'colors.js'],
          logTimings: true,
          disableExtraction: process.env.NODE_ENV === 'development',
        },
      ],
      [
        'transform-inline-environment-variables',
        {
          include: 'TAMAGUI_TARGET',
        },
      ],
    ],

    presets: ['babel-preset-expo'],
  };
};
