const {
  override,
  addWebpackModuleRule,
  addPostcssPlugins,
} = require("customize-cra");

module.exports = override(
  // 添加 PostCSS 插件
  addPostcssPlugins([
    require("postcss-pxtorem")({
      rootValue: 3.75, // 设计稿的基准值
      propList: ["*"],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0,
    }),
  ]),
  // 添加对 SCSS 的支持
  addWebpackModuleRule({
    test: /\.scss$/,
    use: [
      {
        loader: "style-loader", // 将 JS 字符串生成为 style 节点
      },
      {
        loader: "css-loader", // 将 CSS 转化成 CommonJS 模块
      },
      {
        loader: "sass-loader", // 将 Sass 编译成 CSS
      },
      {
        loader: "postcss-loader", // PostCSS 处理，如自动前缀、px 转 rem 等
        options: {
          postcssOptions: {
            ident: "postcss",
            plugins: [
              require("postcss-pxtorem")({
                rootValue: 3.75,
                propList: ["*"],
                selectorBlackList: [],
                replace: true,
                mediaQuery: false,
                minPixelValue: 0,
              }),
            ],
          },
        },
      },
    ],
  })
);
