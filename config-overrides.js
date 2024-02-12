const { override, addWebpackModuleRule } = require("customize-cra");

module.exports = override(
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
        loader: "postcss-loader", // 使用 postcss.config.js 中的配置
        options: {
          postcssOptions: {
            // PostCSS 配置将从 postcss.config.js 文件自动加载
          },
        },
      },
    ],
  })
);
