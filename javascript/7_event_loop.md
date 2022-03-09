## Event Loop

### Reference

- 📜 You should know [33-js-concepts](https://github.com/leonardomso/33-js-concepts#table-of-contents)

### Watching List

- [x] 🎥 [What the heck is the event loop anyway? | JSConf EU — Philip Roberts](https://www.youtube.com/watch?v=8aGhZQkoFbQ) 👏🏻
- [ ] 🎥 [JavaScript Event Loop — ComScience Simplified](https://www.youtube.com/watch?v=XzXIMZMN9k4)
- [x] 🎥 [I'm stuck in an Event Loop — Philip Roberts](https://www.youtube.com/watch?v=6MXRNXXgP_0)
- [x] 🎥 [In The Loop - Jake Archibald | JSConf.Asia 2018](https://www.youtube.com/watch?v=cCOL7MC4Pl0) 👏🏻
- [ ] 🎥 [Desmitificando el Event Loop (Spanish)](https://www.youtube.com/watch?v=Eqq2Rb7LzYE)
- [x] 🎥 [Further Adventures of the Event Loop - Erin Zimmer - JSConf EU 2018](https://www.youtube.com/watch?v=u1kqx6AenYw) 👏🏻

### Reading List

- [x] 📜 [JavaScript Event Loop Explained — Anoop Raveendran](https://medium.com/front-end-hacking/javascript-event-loop-explained-4cd26af121d4)
- [ ] 📜 [The JavaScript Event Loop: Explained — Erin Sweson-Healey](https://blog.carbonfive.com/2013/10/27/the-javascript-event-loop-explained/)
- [x] 📜 [Understanding JS: The Event Loop — Alexander Kondov](https://hackernoon.com/understanding-js-the-event-loop-959beae3ac40)
- [ ] 📜 [Understanding the JavaScript Event Loop — Ashish Gupta](https://www.zeolearn.com/magazine/understanding-the-javascript-event-loop)
- [ ] 📜 [The JavaScript Event Loop — Flavio Copes](https://flaviocopes.com/javascript-event-loop/)
- [x] 📜 [How JavaScript works: Event loop — Alexander Zlatkov](https://blog.sessionstack.com/how-javascript-works-event-loop-and-the-rise-of-async-programming-5-ways-to-better-coding-with-2f077c4438b5)
- [ ] 📜 [Tasks, microtasks, queues and schedules — Jake Archibald](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)
- [ ] 📜 [Visualising the JavaScript Event Loop with a Pizza Restaurant analogy — Priyansh Jain](https://dev.to/presto412/visualising-the-javascript-event-loop-with-a-pizza-restaurant-analogy-47a8)
- [ ] 📜 [JavaScript Visualized: Event Loop — Lydia Hallie](https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif)

### Notes

Why we need event loop in js?

setTimeout 

addEventListener

requestAnimationRequest

render

```js
while(true) {
  const queue = getNextQueue()
  const task = queue.pop()
  
 	excute(task)
  
  while(microtaskQueue.hasTask()) {
    doMicrotask()
  }
  
  if (isRepaintTime()) {
    const animationTasks = animationQueue.copyTasks()
    
    for (const task in animationTasks) {
      doAnimationTask(task)
    }
    
    repaint()
  }
}
```















