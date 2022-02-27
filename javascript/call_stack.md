## Call Stack

### Reference

- 📜 You should know [33-js-concepts](https://github.com/leonardomso/33-js-concepts#table-of-contents)
- 📜 [Call Stack](https://developer.mozilla.org/en-US/docs/Glossary/Call_stack)

### Useful links

- 🔗 [Javascript Visualizer](https://ui.dev/javascript-visualizer)

### Watching List

- [x] 🎥 [Javascript: the Call Stack explained — Coding Blocks India](https://www.youtube.com/watch?v=w6QGEiQceOM)
- [x] 🎥 [The JS Call Stack Explained In 9 Minutes — Colt Steele](https://www.youtube.com/watch?v=W8AeMrVtFLY)
- [x] 🎥 [What is the Call Stack? — Eric Traub](https://www.youtube.com/watch?v=w7QWQlkLY_s)
- [x] 🎥 [The Call Stack — Computer Science](https://www.youtube.com/watch?v=Q2sFmqvpBe0) 👏🏻
- [x] 🎥 [Understanding JavaScript Execution — Will Sentance](https://www.youtube.com/watch?v=exrc_rLj5iw&list=PLWrQZnG8l0E4kd1T_nyuVoxQUaYEWFgcD&index=4) 👏🏻
- [x] 🎥 [The Ultimate Guide to Execution Contexts, Hoisting, Scopes, and Closures in JavaScript — Tyler McGinnis](https://www.youtube.com/watch?v=Nt-qa_LlUH0) 👏🏻
- [x] 🎥 [What the heck is the event loop anyway? — Philip Roberts](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
- [x] 🎥 [How JavaScript Code is executed? ❤️& Call Stack — Akshay Saini](https://www.youtube.com/watch?v=iLWTnMzWtj4&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP) 👏🏻

### Reading List

- [x] 📜 [Understanding Javascript Call Stack, Event Loops — Gaurav Pandvia](https://medium.com/@gaurav.pandvia/understanding-javascript-function-executions-tasks-event-loop-call-stack-more-part-1-5683dea1f5ec) 👏🏻
- [ ] 📜 [Understanding the JavaScript Call Stack — Charles Freeborn](https://medium.freecodecamp.org/understanding-the-javascript-call-stack-861e41ae61d4)
- [ ] 📜 [Javascript: What Is The Execution Context? What Is The Call Stack? — Valentino Gagliardi](https://web.archive.org/web/20180701233338/https://www.valentinog.com/blog/js-execution-context-call-stack/)
- [ ] 📜 [What is the JS Event Loop and Call Stack? — Jess Telford](https://gist.github.com/jesstelford/9a35d20a2aa044df8bf241e00d7bc2d0)
- [ ] 📜 [Understanding Execution Context and Execution Stack in Javascript — Sukhjinder Arora](https://blog.bitsrc.io/understanding-execution-context-and-execution-stack-in-javascript-1c9ea8642dd0)
- [ ] 📜 [How JavaScript Works: An Overview of the Engine, the Runtime, and the Call Stack — Alexander Zlatkov](https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf)
- [ ] 📜 [The Ultimate Guide to Execution Contexts, Hoisting, Scopes, and Closures in JavaScript — Tyler McGinnis](https://tylermcginnis.com/ultimate-guide-to-execution-contexts-hoisting-scopes-and-closures-in-javascript/)
- [ ] 📜 [How JavaScript Works Under The Hood: An Overview of JavaScript Engine, Heap and, Call Stack — Bipin Rajbhar](https://dev.to/bipinrajbhar/how-javascript-works-under-the-hood-an-overview-of-javascript-engine-heap-and-call-stack-1j5o)

## Notes

### Definition

[Call Stack](https://developer.mozilla.org/en-US/docs/Glossary/Call_stack)是解释器追踪函数执行流的机制，一个记录当前程序所在位置的数据结构

### Execution Context

`Javascript`是一门单线程单并发编程语言，当解释器对`JS`进行解释时，会创建`Execution context`，包含两个部分`memory`和`code`：

- `memory`用来存放变量和函数
- `code`用来解释执行代码

执行上下文会经历两个阶段，`Create Phase`和`Execution Phase`：

1. `Create Phase`，从上到下，一行一行解释代码，主要收集声明的**变量**和**函数**到内存`memory`中

- 存变量名并初始化为`undefined`
- 存函数名并保留其函数体

2. `Execution Phase`，再一次从上到下，一行一行执行代码，主要是执行代码

- 变量赋值
- 调用函数
  - 创建`Function Execution Context`
  - 执行完毕后`return`函数的值
  - 销毁`Function Execution Context`回到`parent execution context`

可以使用 [Javascript Visualizer](https://ui.dev/javascript-visualizer) 体验如下例子

```js
var two = 2;

function addTwo(num) {
  return num + two;
}

var five = addTwo(3);
```

### Call Stack

调用栈在整个`JS`线程中**只有一个**，其作用是帮助解释器记录代码执行的顺序，入栈的叫`stack frame`，栈底永远都是`Global Execution context`

当一个函数A执行时调用有另一个函数B时，`A execution context`先入栈，`B execution context`后入栈，当函数B执行完毕后，其执行上下文会被销毁，而函数A的执行上下文会拿到函数B的返回值，继续执行

当所有执行上下文都执行完毕之后，说明`JS`线程空闲，反之，当有一个耗时的`Execution Context`一直在执行时，线程会被阻塞，不能响应交互事件或不能刷新页面等等，这也是为什么会有异步，`Event Loop`和`Message Queue`的原因















