## Notes of React source code

Summarize the `react` flow according to post [build-your-own-react](https://pomb.us/build-your-own-react/) to help me dig deeper in `react`.

### JSX transfer to DOM flow
![JSX_transfer_to_DOM.png](http://tva1.sinaimg.cn/large/006ZmkSvly1gww1q2zrc8j32562mx4qp.jpg)

### createElement(type, props, ...children)
![createElement.png](http://tva1.sinaimg.cn/large/006ZmkSvly1gww1qndz61j31x10vp156.jpg)

### render(fiber, elements)
![render.png](http://tva1.sinaimg.cn/large/006ZmkSvly1gww1r0wiezj325232m4qp.jpg)

### commit(fiber)
![JSX_transfer_to_DOM.png](http://tva1.sinaimg.cn/large/006ZmkSvly1gww1r94vu0j32562mx4qp.jpg)
