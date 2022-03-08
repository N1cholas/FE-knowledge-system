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















