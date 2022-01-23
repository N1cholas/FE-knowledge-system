## build my own frontend knowledge system

[Javascript](./Javascript/README.md)

[React](./React/README.md)

[CSS](CSS/README.md)

[Algorithm](Algorithm/README.md)

Algorithm Plan

- [x] 150 easy
- [x] 50 middle
> Done at 2022-01-18

## notes
 ### 架构思维

- 脚手架
  - 目的：提升前端开发效率
  - 价值：研发过程自动化，标准化和数据化

### ts

概念👇
- 重载
- 类型断言
- 类型守卫
- 自定义守卫
- 继承 多态 抽象类 接口
- any 可以是所有类型的子类或者父类
- unknown 只能是所有类型的父类

特性👇
- as const, readonly
- 元组和可变元组

### 脚手架

脚手架本质：操作系统的客户端

脚手架实现原理：

- 为什么全局安装`@vue/cli`后会有`vue`命令？

`package.json`中有一个`bin`字段

```json
{
  "bin": {
    // 软链接名称和对应的文件
    "vue": "bin/vue.js"
  }
}
```

- 全局安装`@vue/cli`发生了什么？

把依赖安装在全局目录下，然后配置软链接

- 执行`vue`命令发生了什么？
  - 在终端执行`vue create proj`
  - 终端解析`vue`命令
  - 终端在环境变量找到`vue`命令
  - 终端根据`vue`命令链接到实际文件`vue.js`
  - 终端用`node`执行`vue.js`
  - `vue.js`解析`command / options`
  - `vue.js`执行`command`
  - 执行完毕，退出执行

- 为什么执行`vue`命令，可以直接执行`js`文件

```shell
#! /usr/bin/env node
```

- 本地库调试方法

```shell
npm link
npm unlink
```

## 基于`Lerna`项目管理

- 初始化
  - 初始化`npm`项目
  - 安装`lerna`
  - `lerna init`
- 创建`package`
  - `lerna create`创建`package`
  - `lerna add`安装依赖

