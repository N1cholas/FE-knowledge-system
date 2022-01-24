## 项目

- 项目经历
- 项目的难点
- 项目最难的技术难度
- 让你实现一个微信扫码登录掘金会怎么实现，微信、掘金、客户端这三方的通信流程是怎样的？
- 了解消息中间件吗？

## 算法题

- Leetcode 112 路径总和
- `fn([['a', 'b'], ['n', 'm'], ['0', '1']]) => ['an0', 'am0', 'an1', 'am1', 'bn0', 'bm0', 'bn1', 'bm0']`
- `f(['ab', 'c', 'd', 'ab', 'c']) => ['ab1', 'c1', 'd', 'ab2', 'c2']`

## 场景模拟

- `u.console('breakfast').setTimeout(3000).console('lunch').setTimeout(3000).console('dinner')`
- 写一个事件代理函数，需要判断child是parent的子节点
- 看代码说结果

```js
var length = 10;
function fn() {
 return this.length + 1;
}
var obj1 = {
 length: 5,
   test1: function() {
     return fn()
 }
}
obj1.test2 = fn;
obj1.test1.call()
obj1.test1()
obj1.test2.call()
obj1.test2()
```

## JS基础

- 数组`API`
- 事件代理是什么
- 从输入Url到页面渲染发生了什么？写个提纲
  - 网络阶段：构建请求行、查询强缓存、DNS解析、建立TCP连接、发送HTTP请求、响应请求 
  - 解析阶段：解析html、构建dom树、计算样式、生成布局树 
  - 渲染阶段：生成图层树、生成绘制列表、生成图块、优先选择视口附近的图块生成位图数据、展示内容
- 作用域

## 基础实现

- 手写`reduce`

## 计算机网络

- `HTTP`缓存
- `TCP`和`UDP`区别

## 前端框架

- `vue`和`react`区别和优劣
- `hooks`原理
- `react`中`class`组件和`function`组件区别
- vue和react让你做技术选型你会考虑哪些因素？
- React Fiber有了解吗？
  - 讲了为什么要做时间分片、说了react15和react16架构的区别，然后说了Fiber树其实对应了原来的vDom，本质是一个[链表](https://www.nowcoder.com/jump/super-jump/word?word=链表)。

## 性能优化

- 减少回流重绘
- 缩小代码体积
  - Tree-shaking
  - 代码压缩
  - 代码分割
  - Scope-hoisting
- 减少请求数
  - 雪碧图
  - 基础库分包
- 并发请求
  - 使用`cdn`，突破同一域名下`TCP`连接数量
  - `http2`
- 运行时加载
  - 图片懒加载
  - 组件动态`import`
- 缓存

## 新技术

- `vite`
- `vitest`

## 设计模式

- 了解哪些设计模式？代理模式了解吗？

## 开放问题

- 工作中有没主动做过什么事？

- 你觉得你跟别人相比有什么优势？

- 问了大学时的专业排名，高考生源是哪儿的