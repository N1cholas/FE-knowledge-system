# 实现白天夜间模式

```js
modeElement.addEventListener('click', () => {
  if (modeElement.innerHTML === '🌞') {
    document.body.style.backgroundColor = '#000'
    document.body.style.color = '#fff'
    modeElement.innerHTML = '🌜'
  } else {
    document.body.style.backgroundColor = '#fff'
    document.body.style.color = '#000'
    modeElement.innerHTML = '🌞'
  }
}, false)
```

上述代码有几个疑问

- 其他同事看到代码能明白业务含义吗
- 假如我们白天夜间的颜色变了，能避免修改`JS`代码吗
- 假如要加过渡动画，容易加吗
