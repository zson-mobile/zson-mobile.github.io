# 快速上手

通过本章节，可以带你快速了解 Zson Design Mobile 的安装方法和基本使用。

## 安装

npm 或 yarn 安装

```bash
# npm
$ npm install zson-mobile --save

# yarn
$ yarn add zson-mobile
```

## 使用

```js
import React from 'react';
import { render } from 'react-dom';
import { ConfigProvider, Button } from 'zson-mobile';
import zhCN from 'zson/lib/config-provider/locale/zh_CN';
import 'zson/dist/zson.css';

const App = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <div style={{ width: 400, margin: '100px auto' }}>
        <Button theme="primary">Hello World!</Button>
      </div>
    </ConfigProvider>
  );
};

render(<App />, document.getElementById('root'));
```

## 按需加载

> 注意：zarm 默认支持基于 ES module 的 tree shaking，不使用以下插件 js 也会有按需加载的效果，以下配置只为了 css/scss 样式实现按需加载。

使用 `babel-plugin-import` 自动加载 `css/scss` 文件

```js
  // .babelrc or babel-loader option
  {
    "plugins": [
      ['import', {
        libraryName: 'zson-mobile',
        style: true, // or 'css'
      }],
    ]
  }
```
