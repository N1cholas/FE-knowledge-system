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

要解决上述疑问

- 使用`class`切换代替直接修改样式
- 使用元素的`::after`的`content`填充内容
- `css`动画添加比`JS`简单方便

```js
modeElement.addEventListener('click', () => {
  if (contentElement.classList.contains('night')) {
    contentElement.classList.remove('night')
  } else {
    contentElement.classList.add('night')
  }
}, false)
```

现在发现`JS`代码只剩`class`切换就能实现需求，这里有一个`css`使用技巧，采用`checkBox`的伪类`checked`控制相邻元素的样式，达到开关的效果

```css
#modeSwitcher {
  display: none;
}

#content {
  background: #fff;
  color: #000;
}

#modeSwitcher:checked + #content {
  background: #000;
  color: #fff;
}

#mode::after {
  content: '🌞';
}

#modeSwitcher:checked + #content #mode::after {
  content: '🌜';
}
```

最终我们实现这个需求连一行`JS`都没有写















