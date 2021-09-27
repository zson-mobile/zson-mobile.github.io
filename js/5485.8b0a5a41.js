(self.webpackChunksite=self.webpackChunksite||[]).push([[5485],{95485:function(n,r,t){"use strict";t.r(r),r.default="# Drag 拖拽\r\n\r\n## 基本用法\r\n\r\n```jsx\r\nimport { useEffect, useState, useRef } from 'react';\r\nimport { Drag, Button } from 'zson-mobile';\r\n\r\nlet currentPoint = [0, 0];\r\n\r\nconst Demo = () => {\r\n  const containerRef = useRef();\r\n  const boxRef = useRef();\r\n  const [point, setPoint] = useState([0, 0]);\r\n  const [drag, setDrag] = useState(false);\r\n\r\n  useEffect(() => {\r\n    const { width, height } = boxRef.current.getBoundingClientRect();\r\n    const { width: containerWidth, height: containerHeight } =\r\n      containerRef.current.getBoundingClientRect();\r\n\r\n    currentPoint[0] = Math.round(Math.random() * (containerWidth - width));\r\n    currentPoint[1] = Math.round(Math.random() * (containerHeight - height));\r\n    setPoint(currentPoint);\r\n\r\n    document.body.style.overflow = 'hidden';\r\n\r\n    return () => {\r\n      document.body.style.overflow = 'auto';\r\n    };\r\n  }, []);\r\n\r\n  const onDragStart = (event, dragState) => {\r\n    console.log('onDragStart', dragState);\r\n    setDrag(true);\r\n  };\r\n\r\n  const onDragMove = (event, dragState) => {\r\n    console.log('onDragMove', dragState);\r\n\r\n    const { width, height } = boxRef.current.getBoundingClientRect();\r\n    const { width: containerWidth, height: containerHeight } =\r\n      containerRef.current.getBoundingClientRect();\r\n\r\n    let newX = currentPoint[0] + dragState.offsetX;\r\n    let newY = currentPoint[1] + dragState.offsetY;\r\n\r\n    if (newX < 0) {\r\n      newX = 0;\r\n    }\r\n    if (newX > containerWidth - width) {\r\n      newX = containerWidth - width;\r\n    }\r\n    if (newY < 0) {\r\n      newY = 0;\r\n    }\r\n    if (newY > containerHeight - height) {\r\n      newY = containerHeight - height;\r\n    }\r\n\r\n    setPoint([newX, newY]);\r\n    return true;\r\n  };\r\n\r\n  const onDragEnd = (event, dragState) => {\r\n    console.log('onDragEnd', dragState);\r\n\r\n    currentPoint = point;\r\n    setDrag(false);\r\n  };\r\n\r\n  return (\r\n    <div\r\n      ref={containerRef}\r\n      style={{\r\n        height: 300,\r\n        backgroundColor: '#5b5c60',\r\n        position: 'relative',\r\n      }}\r\n    >\r\n      <Drag onDragStart={onDragStart} onDragMove={onDragMove} onDragEnd={onDragEnd}>\r\n        <div\r\n          ref={boxRef}\r\n          style={{\r\n            display: 'inline-block',\r\n            transform: `translate3d(${point[0]}px, ${point[1]}px, 0)`,\r\n          }}\r\n        >\r\n          {drag ? (\r\n            <Button theme=\"danger\">Let me go!</Button>\r\n          ) : (\r\n            <Button theme=\"primary\">Catch me~</Button>\r\n          )}\r\n        </div>\r\n      </Drag>\r\n    </div>\r\n  );\r\n};\r\n\r\nReactDOM.render(<Demo />, mountNode);\r\n```\r\n\r\n## API\r\n\r\n| 属性        | 类型                                                                 | 默认值 | 说明                       |\r\n| :---------- | :------------------------------------------------------------------- | :----- | :------------------------- |\r\n| onDragStart | (event?: MouseEvent \\| TouchEvent, dragState?: DragState) => void    | -      | 触摸/点击 起始时触发的事件 |\r\n| onDragMove  | (event?: MouseEvent \\| TouchEvent, dragState?: DragState) => boolean | -      | 拖拽移动时触发的事件       |\r\n| onDragEnd   | (event?: MouseEvent \\| TouchEvent, dragState?: DragState) => void    | -      | 触摸/点击 结束时触发的事件 |\r\n\r\n### DragState\r\n\r\n| 属性      | 类型   | 默认值     | 说明          |\r\n| :-------- | :----- | :--------- | :------------ |\r\n| startTime | Date   | new Date() | 起始时间      |\r\n| startX    | number | -          | 起始点 x 坐标 |\r\n| startY    | number | -          | 起始点 y 坐标 |\r\n| offsetX   | number | -          | 横向偏移量    |\r\n| offsetY   | number | -          | 纵向偏移量    |\r\n"}}]);