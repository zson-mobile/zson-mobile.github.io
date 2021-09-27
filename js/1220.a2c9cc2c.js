(self.webpackChunksite=self.webpackChunksite||[]).push([[1220],{61220:function(n,r,e){"use strict";e.r(r),r.default="# BackToTop 返回顶部\r\n\r\n## 基本用法\r\n\r\n```jsx\r\nimport { useRef, useState } from 'react';\r\nimport { Cell, BackToTop, Message, Button, Icon } from 'zson-mobile';\r\n\r\nconst Demo = () => {\r\n  const list = [];\r\n  for (let i = 0; i < 100; i++) list.push(<Cell key={+i}>第 {i + 1} 行</Cell>);\r\n\r\n  const containerRef = useRef();\r\n  const [useWindowScroll, setUseWindowScroll] = useState(true);\r\n\r\n  const scrollContainer = !useWindowScroll ? () => containerRef.current : null;\r\n\r\n  const containerStyle = !useWindowScroll\r\n    ? {\r\n        overflowY: 'auto',\r\n        maxHeight: 400,\r\n      }\r\n    : {};\r\n\r\n  return (\r\n    <>\r\n      <Message theme=\"warning\" icon={<Icon type=\"warning-round\" />}>\r\n        当前使用的是 `{useWindowScroll ? 'window' : 'div'}` 作为滚动容器。\r\n        <Button theme=\"primary\" size=\"xs\" onClick={() => setUseWindowScroll(!useWindowScroll)}>\r\n          点击切换\r\n        </Button>\r\n      </Message>\r\n\r\n      <div ref={containerRef} style={containerStyle}>\r\n        {list}\r\n      </div>\r\n\r\n      <BackToTop scrollContainer={scrollContainer} onClick={() => console.log('click back to top')}>\r\n        <div\r\n          style={{\r\n            width: 60,\r\n            height: 60,\r\n            lineHeight: '60px',\r\n            textAlign: 'center',\r\n            backgroundColor: '#fff',\r\n            color: '#999',\r\n            fontSize: 20,\r\n            borderRadius: 30,\r\n            boxShadow: '0 2px 10px 0 rgba(0, 0, 0, 0.2)',\r\n            cursor: 'pointer',\r\n          }}\r\n        >\r\n          Up\r\n        </div>\r\n      </BackToTop>\r\n    </>\r\n  );\r\n};\r\n\r\nReactDOM.render(<Demo />, mountNode);\r\n```\r\n\r\n## API\r\n\r\n| 属性            | 类型                                               | 默认值 | 说明                   |\r\n| :-------------- | :------------------------------------------------- | :----- | :--------------------- |\r\n| speed           | number                                             | 100    | 每 10 毫秒滑动的距离   |\r\n| visibleDistance | number                                             | 400    | 离滚动条顶部的可视距离 |\r\n| scrollContainer | HTMLElement \\| (() => HTMLElement)                 | window | 设置滚动容器           |\r\n| onClick         | (event?: MouseEvent&lt;HTMLDivElement&gt;) => void | -      | 点击后触发的回调函数   |\r\n"}}]);