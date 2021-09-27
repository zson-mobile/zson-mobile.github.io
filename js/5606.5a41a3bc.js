(self.webpackChunksite=self.webpackChunksite||[]).push([[5606],{45606:function(r,n,e){"use strict";e.r(n),n.default="# 定制主题\r\n\r\nZson Design Mobile 的样式使用了 [scss](https://sass-lang.com) 和 [css 变量](https://www.w3.org/Style/CSS/) 相结合做为开发语言，并定义了一系列全局/组件的样式变量，你可以根据需求进行相应调整，实现定制主题的能力。\r\n\r\nZson Design Mobile 提供了一个 React 组件 [ConfigProvider](#/components/config-provider) 用于快速定制主题。\r\n\r\n## 品牌标准色\r\n\r\n目前的默认的品牌标准色是 `#2f54ec`，如果需要使用其他颜色，可以参考下面的方案。\r\n\r\n```jsx\r\nreturn (\r\n  <ConfigProvider primaryColor=\"#1890ff\">\r\n    <App />\r\n  </ConfigProvider>\r\n);\r\n```\r\n\r\n## 暗黑主题\r\n\r\n除了目前提供的默认主题外，我们还提供了一套暗黑主题，可以参考下面的方案进行配置。\r\n\r\n```jsx\r\nreturn (\r\n  <ConfigProvider theme=\"dark\">\r\n    <App />\r\n  </ConfigProvider>\r\n);\r\n```\r\n\r\n## 深度定制\r\n\r\n可以通过修改 zson-mobile 开放出来的 css 变量的方式深度定制你的样式。\r\n\r\n```js\r\ndocument.documentElement.style.setProperty('--theme-primary', '#108ee9');\r\n```\r\n\r\n以下是一些最常用的通用变量，所有样式变量可以在 [这里](https://github.com/zson-mobile/zson-mobile.github.io/blob/master/packages/zson-mobile.github.io/src/style/themes/default.scss) 找到。\r\n\r\n```scss\r\n--theme-primary: #00bc70; // 全局主色\r\n--theme-success: #00bc70; // 成功色\r\n--theme-warning: #ec9231; // 警告色\r\n--theme-danger: #ff5050; // 危险色\r\n```\r\n"}}]);