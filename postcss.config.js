module.exports = {
  plugins: [
    require("postcss-pxtorem")({
      rootValue: 3.75,
      propList: ["*"],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0,
    }),
    // 在这里添加更多的 PostCSS 插件
  ],
};
