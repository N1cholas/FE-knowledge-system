# Javascript Knowledge System

## 内存与数据结构

把一个页面当成一个完整的应用，那么就会有个体的参与

![ram](./ram.svg)

### 个体

> 讨论个体，主要思考应用运行中，哪些个体会参与进来的问题

个体会在应用运行中参与进来，在`JS`中可以通过声明变量，函数和对象来明确个体

```js
const a = 1 // 变量
const b = () => {} // 函数
const c = {} // 对象
```

### 数据类型

> 讨论数据类型，主要思考个体是以什么形式存在

#### 基础类型

`ES6`定义了8种数据类型

| 基础类型  | 值                                      |
| --------- | --------------------------------------- |
| Number    | 所有数字                                |
| String    | 所有字符串                              |
| Null      | null                                    |
| Undefined | undefined                               |
| Boolean   | true and false                          |
| Sympol    | 符号类型 `const sym = Sympol('sympol')` |
| Bigint    | 整数末尾添加n                           |

**基础类型是按值访问的，并且值是不能够被修改**

```js
let a = 1
let b = a
b++

console.log(a) // 1
console.log(b) // 2
```

![ram](./draw2.svg)

```js
const s = 'js knowledge system'
s[0] = 'J'
console.log(s.charAt(0)) // j
```

当两个基础类型进行比较时，本质上是值的比较

```js
const a = 1
const b = 2

a === b // 1 === 2
```

基础类型是可以访问方法，原因是`JS`为每一种基础类型都提供了**包装对象**

```js
const _s = new String('js') // 使用包装对象构建对象

_s.chatAt(0) // 包装对象实例访问方法

_s = null // 使用完销毁包装对象
```

#### 引用类型

**引用类型是按引用(内存地址)访问，并且值是可以改变的**

```js
const person = {
  name: 'Long',
  age: 18
}

const person2 = person

person2.age = 21

console.log(person.age) // 21
console.log(person2.age) // 21
```

变量`person`和值对象并不是直接连接的，而是通过值对象的内存地址进行对象访问，并且将内存地址复制给`person2`（浅拷贝）

![draw](./draw3.svg)

引用类型在比较时也是比较内存地址

```js
// 虽然`a`和`b`的值是一样的，但是内存地址不一样，所以不相等
const a = {}
const b = {}

a == b // false
```

### 内存

> 讨论内存，主要思考应用运行时，个体存放在哪里

计算机提供两种存储信息的方式

- 内存：存储应用运行时的信息，`CPU`通过寄存器寻址直接访问内存数据，访问速度快
- 硬盘：存储持久化数据，`CPU`通过硬件控制器访问，访问速度慢

`JS`应用运行时的数据存储于内存中，也能通过浏览器提供的`localStorage`进行持久化存储

`JS`运行时数据在内存分为**栈内存**和**堆内存**，两种内存都是内存，区别在于存取方式

 应用运行中，会为每一个个体分配内存空间，当个体参与完之后需要将该个体的内存空间释放

- 栈内存：自动释放出栈个体的内存空间
- 堆内存：采用垃圾自动回收机制管理内存

```js
const a = 1 // 给个体分配内存空间

alert(a + 1) // 参与应用程序，使用内存

a = null // 参与完毕，释放内存
```

垃圾回收依赖`引用`，在内存空间中，尝试访问数据，能够被访问的视为该数据能被获取，不能访问的数据会被打上标记，垃圾回收机制会定期在全局对象开始查找被标记的数据并释放其内存

> 在全局中，垃圾回收机制无法判断全局声明的内存合适释放

### 数据结构

> 讨论数据结构，主要思考个体在内存是如何存放的

#### 栈

先进后出，后进先出

问：封装一个十进制转二进制的方法

```js
const converter = (n, bs) => {
  const r = []
  let s = ''

  while (n > 0) {
    r.push(n % bs)

    n = Math.floor(n / bs)
  }

  while (r.length) {
    s += r.pop()
  }

  return s
}

```

问：给定一个只包括 小括号 '(' ')' ，中括号 '[' ']' 大括号 '{' '}' 的字符串，判断字符串是否有效

```js
const isValid = s => {
  const r = []

  for (let i = 0; i < s.length; i++) {
    const currentString = r[r.length - 1]

    if (currentString === '(' && s[i] === ')' ||
      currentString === '{' && s[i] === '}' ||
      currentString === '[' && s[i] === ']'
    ) {
      r.pop()
    } else {
      r.push(s[i])
    }
  }

  return r.length === 0
}
```

#### 队列

先进先出

#### 链表

#### 堆

## 函数

### V8引擎

`V8`引擎是`JS`引擎的一种，它也是应用程序，它是`JS`执行环境，也是浏览器组成部分，负责**解析**和**编译**`JS`

![image.png](https://images.xiaozhuanlan.com/photo/2020/e0cf9f3b0419b99e8b8b51e499dda7dd.png)

虚线右边`Blink`是渲染引擎，虚线左边是`JS`引擎的`pipeline`

#### Scanner

`Scanner`模块会扫描`JS`文件里的字符，并转换成`token`

> `token`是语法中不能分割的最小单元

```js
const a = 1
```

会被转换成

```js
[
  {
    "type": "Keyword",
    "value": "const"
  },
  {
    "type": "Identifier",
    "value": "a"
  },
  {
    "type": "Punctuator",
    "value": "="
  },
  {
    "type": "Numeric",
    "value": "1"
  }
]
```

#### Parser

`Parser`模块会把`tokens`解析成`AST` (Abstract Syntax Tree)，主要作用是

- 分析语法错误
- 确定词法作用域（生成`[[scope]]`）
- 生成`AST`

> [在线解析 esprima](https://esprima.org/demo/parse.html#)

```js
const a = 1
```

会被解析成

```js
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "a"
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1"
          }
        }
      ],
      "kind": "const"
    }
  ],
  "sourceType": "script"
}
```

同时，由于优化问题，会把解析分为`pre-parsing`和`full-parsing`

`pre-parsing`会去解析**不会立即执行**的代码

- 不会生成`AST`
- 生成不带有变量和声明的`[[scope]]`
- 解析速度快

`full-parsing`会去解析立即执行的代码

- 生成`AST`
- 生成完整的`[[scope]]`
- 解析速度不快

```js
function a() {} // 声明函数但是没有执行，预解析

function b() {} // 声明函数但是没有执行，预解析

(function c() {})() // 声明函数并立即执行，全量解析

b() // 再次解析该函数，并且是全量的
```

上述函数`b`会被解析两次，但如果函数`b`嵌套了函数，那么嵌套的函数也是被解析两次

**减少不必要的嵌套函数，能提高代码执行效率**

> `v8`引擎会缓存3天解析的结果，所以分隔业务代码和第三方库代码，有助于提高代码执行效率

#### Ignition

这个是解释器，会把`AST`转化为字节码，并且收集编译的信息

> 也可以理解为预编译，基于性能考虑，有时候预编译和编译的界限没有那么清晰，有的代码在预编译下就能执行

#### Turibofan

这是是编译器，也是代码执行阶段，利用`Igniton`收集到的信息，将字节码编译成汇编，在满足条件下，会直接优化成机器码，提高效率

有一个建议能提高代码执行效率，就是不要总是**改变对象类型**

```js
const a = (o) => o.name
```

当传入不同类型的对象（对编译器而言）

```js
o1 = { name: 'a' }
o1 = { name: 'b', age: 18 }
o1 = { name: 'c', age: 18, gender: 1 }
```

编译器无法针对上述情况做优化，会降低执行效率，**所以这也是`typescript`作用之一**

#### Orinoco

这是垃圾回收对象，用来管理内存

- 标记阶段，标记活动对象和非活动对象
- 清除阶段，清除非活动对象
- 整理阶段，合并和整理内存

### 作用域和作用域链

规定变量和函数可访问范围的机制，在词法分析（预解析）确定下来

####全局作用域

- `window`对象的属性和方法
- 最外层的声明
- 非严格模式下，函数中未定义并且赋值的变量和函数

####函数作用域

- 函数的花括号

####`ES6`后的块级作用域

对`var`的声明无效，只能束缚`let`和`const`

> 最外层`var`声明的变量和函数会挂载到`window`对象上，最外层`let`和`const`声明的变量和函数会挂载到`script`对象

#### 变量提升

`var`定义的变量会`变量提升`并且赋值为`undefined`，并且可以对其进行访问和赋值

```js
console.log(a) // undefined
a = 2
console.log(a) // 2
var a = 1
console.log(a) // 1
```

`let`和`const`定义的变量也会`变量提升`，但不会被赋值，并且不能对其进行访问和赋值，这也称为`暂时性死区`

```js
console.log(b); // ReferenceError: b is not defined
b = 2; // Cannot access 'b' before initialization
let b = 1;
console.log(b); // 1
```

> `const`对于基础数据类型，其赋值不能被修改，对于引用数据类型，其赋值的引用（内存地址）不能被修改

#### 作用域链

大概是说一个函数能访问的范围，具体实现表现在`[[scope]]`这个数组上

```js
const a = 20

const test = () => {
  const b = a + 10

  const innerTest = () => {
    const c = 10


    return b + c
  }

  console.dir(innerTest)
  console.dir(test)
  return innerTest()
}

test()
```

![image.png](http://tva1.sinaimg.cn/large/006ZmkSvgy1gw2d7wai6bj312o0ja0yq.jpg)

```js
const a = 20

const test = () => {
  const b = a + 10

  const innerTest = () => {
    const innerInnerTest = () => {
      return b
    }
    console.dir(innerInnerTest)
  }
  console.dir(innerTest)
  return innerTest()
}

test()
```

![image.png](http://tva1.sinaimg.cn/large/006ZmkSvgy1gw2dfa2lp1j312c0k87av.jpg)

在函数作用域中，寻找的变量首先会在该函数当前执行上下文中寻找，然后再通过作用域链`[[scope]]`去寻找

`[[scope]]`组成对象

- `global`对象
- `script`对象
- `closure`对象
- `local`对象

其中`local`对象并不会在预解析阶段就被确定，而是在函数执行中才会生成，随着函数执行而变化，记录函数执行上下文的变量和函数，也确定`this`指向





