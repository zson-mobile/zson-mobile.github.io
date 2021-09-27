(self.webpackChunksite=self.webpackChunksite||[]).push([[7006],{37006:function(n,r,e){"use strict";e.r(r),r.default='# Cell 列表项\r\n\r\n## 基本用法\r\n\r\n```jsx\r\nimport { Cell } from \'zson-mobile\';\r\n\r\nReactDOM.render(<Cell title="标题文字" />, mountNode);\r\n```\r\n\r\n## 带描述\r\n\r\n```jsx\r\nimport { Cell, Icon } from \'zson-mobile\';\r\n\r\nReactDOM.render(\r\n  <>\r\n    <Cell title="标题文字" description="描述文字" />\r\n    <Cell title="标题文字" description={<Icon type="add" theme="primary" size="sm" />} />\r\n  </>,\r\n  mountNode,\r\n);\r\n```\r\n\r\n## 带图标、标题\r\n\r\n```jsx\r\nimport { Cell, Icon } from \'zson-mobile\';\r\n\r\nconst img = \'https://static.zhongan.com/website/health/zarm/images/icons/state.png\';\r\n\r\nReactDOM.render(\r\n  <>\r\n    <Cell title="标题文字" icon={<Icon type="broadcast" theme="primary" />} />\r\n    <Cell title="标题文字" icon={<img alt="" src={img} style={{ width: 24, height: 24 }} />} />\r\n  </>,\r\n  mountNode,\r\n);\r\n```\r\n\r\n## 带跳转\r\n\r\n```jsx\r\nimport { Cell } from \'zson-mobile\';\r\n\r\nReactDOM.render(\r\n  <>\r\n    <Cell title="标题文字" onClick={() => {}} />\r\n    <Cell title="标题文字" onClick={() => {}} />\r\n  </>,\r\n  mountNode,\r\n);\r\n```\r\n\r\n## 带描述、箭头、跳转\r\n\r\n```jsx\r\nimport { Cell } from \'zson-mobile\';\r\n\r\nReactDOM.render(\r\n  <>\r\n    <Cell hasArrow title="标题文字" description="描述文字" onClick={() => {}} />\r\n    <Cell hasArrow title="标题文字" description="描述文字" onClick={() => {}} />\r\n  </>,\r\n  mountNode,\r\n);\r\n```\r\n\r\n## 带图标、描述、箭头、跳转\r\n\r\n```jsx\r\nimport { Cell, Icon } from \'zson-mobile\';\r\n\r\nconst img = \'https://static.zhongan.com/website/health/zarm/images/icons/state.png\';\r\n\r\nReactDOM.render(\r\n  <>\r\n    <Cell\r\n      hasArrow\r\n      title="标题文字"\r\n      description="描述文字"\r\n      icon={<Icon type="broadcast" theme="primary" />}\r\n      onClick={() => {}}\r\n    />\r\n\r\n    <Cell\r\n      hasArrow\r\n      title="标题文字"\r\n      description="描述文字"\r\n      icon={<img alt="" src={img} style={{ width: 24, height: 24 }} />}\r\n      onClick={() => {}}\r\n    />\r\n\r\n    <Cell\r\n      hasArrow\r\n      title={\r\n        <div className="box">\r\n          <div className="box-title">标题文字</div>\r\n          <div className="box-description">描述文字</div>\r\n        </div>\r\n      }\r\n      description="附加提示"\r\n      icon={<img alt="" src={img} style={{ width: 48, height: 48 }} />}\r\n      onClick={() => {}}\r\n    />\r\n  </>,\r\n  mountNode,\r\n);\r\n```\r\n\r\n## 提示信息\r\n\r\n```jsx\r\nimport { Cell, Message, Icon, Input } from \'zson-mobile\';\r\n\r\nReactDOM.render(\r\n  <Cell\r\n    title="标题"\r\n    help={\r\n      <Message theme="danger" icon={<Icon type="warning-round" size="sm" />}>\r\n        标题不能为空\r\n      </Message>\r\n    }\r\n  >\r\n    <Input type="text" placeholder="请输入标题" />\r\n  </Cell>,\r\n  mountNode,\r\n);\r\n```\r\n\r\n## API\r\n\r\n| 属性        | 类型       | 默认值 | 说明                                                  |\r\n| :---------- | :--------- | :----- | :---------------------------------------------------- |\r\n| hasArrow    | boolean    | false  | 是否显示箭头                                          |\r\n| icon        | ReactNode  | -      | 设置图标                                              |\r\n| title       | ReactNode  | -      | 设置标题区域内容                                      |\r\n| description | ReactNode  | -      | 设置描述区域内容                                      |\r\n| help        | ReactNode  | -      | 设置下方提示信息区域内容，通常配合 `Message` 组件使用 |\r\n| onClick     | () => void | -      | 点击后触发的回调函数                                  |\r\n'}}]);