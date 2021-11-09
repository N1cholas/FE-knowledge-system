'use strict';
// const a = 20
//
// const test = () => {
//   const b = a + 10
//
//   const innerTest = () => {
//     const c = 10
//
//     console.dir(innerTest)
//     console.trace()
//     return b + c
//   }
//
//   return innerTest()
// }
//
// test()

// new Promise(resolve => {
//   resolve()
// })
//   .then(()1 => {
//     new Promise(resolve => {
//       resolve()
//     })
//       .then(()1.1 => {
//         console.log(1)
//       })
//       .then(()1.2 => {
//         console.log(2)
//       })
//       .then(()1.3 => {
//         console.log(3.1)
//       })
//   })
//   .then(()2 => {
//     console.log(1.1)
//     new Promise((resolve => {
//       resolve()
//     }))
//       .then(()2.1 => {
//         new Promise(resolve => {
//           resolve()
//         })
//           .then(()2.1.1 => {
//             console.log(4)
//           })
//           .then(()2.1.2 => {
//             console.log(6)
//           })
//       }).then(()2.2 => {
//       console.log(5)
//     })
//   })
//   .then(()3 => {
//     console.log(3)
//   })
// console.log(0)


// setTimeout(function s1() {
//   console.log(5);
// }, 1)
//
// setTimeout(function s2() {
//   console.log(6);
// }, 0)
//
// new Promise(function (resolve) {
//   console.log(1);
//   for (var i = 0; i < 1000; i++) {
//     i == 99 && resolve();
//   }
//   console.log(2);
// }).then(function p1() {
//   console.log(4);
// })
//
// console.log(3);

// const New = (func, ...arguments) => {
//   const res = {}
//
//   res.__proto__ = func.prototype
//
//   const ret = func.apply(res, arguments)
//
//   if ((typeof ret === 'object' || typeof ret === 'function') && ret !== null) {
//     return ret
//   }
//
//   return res
// }
//
// Array.prototype._map = function(fn, context) {
//   const res = []
//
//   for (let i = 0; i < array.length; i++) {
//     res.push(fn.call(context, this[i], i, this))
//   }
//
//   return res
// }
//
// var array = [1, 2, 3, 4]
//
// const newArray = array._map(function(item, i, array) {
//   console.log(item, i, array, this);
//   return item + 1;
// }, array)
//
// console.log(newArray); // [2, 3, 4, 5]

// const createCurry = func => {
//   return function curry(...args) {
//     if (args.length >= func.length) {
//       return func.apply(func, args)
//     }
//
//     return (...nextArgs) => curry.apply(func, args.concat(nextArgs))
//   }
// }
//
// const check = (reg, targetString) => reg.test(targetString)
//
// const curryCheck = createCurry(check)
//
// const checkPhone = curryCheck(/^1[34578]\d{9}$/)
// const checkEMail = curryCheck(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/)
//
// console.log(checkPhone('14900000088'))
// console.log(checkEMail('test@163.com'))

// const add = (...args) => {
//
//   const _args = []
//
//   const _adder = (...nextArgs) => {
//     _args.push(...nextArgs)
//     return _adder
//   }
//
//   _adder.valueOf = () => _args.reduce((p, c) => p + c)
//
//   return _adder(...args)
// }

// (function () {
//   const getLogin = () => ({
//     login: true,
//     userInfo: {
//       name: 'Long',
//       age: 18
//     }
//   })
//
//   window.withLogin = fn => fn.bind(null, getLogin())
// })();
//
// (function () {
//   const env = {
//     isPC: 'onclick' in document,
//     isMobile: 'ontouchstart' in document,
//     isAndroid: navigator.userAgent.match(/android/),
//     isIOS: navigator.userAgent.match(/iphone/),
//   }
//
//   window.withEnv = fn => fn.bind(null, env)
// })();
//
// (function () {
//   const withLogin = window.withLogin
//   const withEnv = window.withEnv
//
//   const compose = (...args) => args.reduceRight((pre, cur, i) => {
//     return cur(pre)
//   })
//
//   const withRenderHomePage = (envInfo, loginInfo) => {
//     const div = document.createElement('div')
//     const env = Object.keys(envInfo).filter(env => envInfo[env])[0]
//
//     if (loginInfo.login) {
//       div.innerText = `${loginInfo.userInfo.name} login in ${env.substring(2)}`
//     } else {
//       div.innerText = `${loginInfo.userInfo.name} not login ${env.substring(2)}`
//     }
//
//     document.body.appendChild(div)
//   }
//
//   window.withRenderHomePage = compose(withLogin, withEnv, withRenderHomePage)
// })();

;
(function () {
  // 这是一个私有属性，不需要被实例访问
  var transform = getTransform();

  function Drag(selector) {
    // 放在构造函数中的属性，都是属于每一个实例单独拥有
    this.elem = typeof selector == 'Object' ? selector : document.getElementById(selector);
    this.startX = 0;
    this.startY = 0;
    this.sourceX = 0;
    this.sourceY = 0;

    this.init();
  }


  // 原型
  Drag.prototype = {
    constructor: Drag,

    init: function () {
      // 初始时需要做些什么事情
      this.setDrag();
    },

    // 稍作改造，仅用于获取当前元素的属性，类似于getName
    getStyle: function (property) {
      return document.defaultView.getComputedStyle ? document.defaultView.getComputedStyle(this.elem, false)[property] : this.elem.currentStyle[property];
    },

    // 用来获取当前元素的位置信息，注意与之前的不同之处
    getPosition: function () {
      var pos = { x: 0, y: 0 };
      if (transform) {
        var transformValue = this.getStyle(transform);
        if (transformValue == 'none') {
          this.elem.style[transform] = 'translate(0, 0)';
        } else {
          var temp = transformValue.match(/-?\d+/g);
          pos = {
            x: parseInt(temp[4].trim()),
            y: parseInt(temp[5].trim())
          }
        }
      } else {
        if (this.getStyle('position') == 'static') {
          this.elem.style.position = 'relative';
        } else {
          pos = {
            x: parseInt(this.getStyle('left') ? this.getStyle('left') : 0),
            y: parseInt(this.getStyle('top') ? this.getStyle('top') : 0)
          }
        }
      }

      return pos;
    },

    // 用来设置当前元素的位置
    setPostion: function (pos) {
      if (transform) {
        this.elem.style[transform] = 'translate(' + pos.x + 'px, ' + pos.y + 'px)';
      } else {
        this.elem.style.left = pos.x + 'px';
        this.elem.style.top = pos.y + 'px';
      }
    },

    // 该方法用来绑定事件
    setDrag: function () {
      var self = this;
      this.elem.addEventListener('mousedown', start, false);
      function start(event) {
        self.startX = event.pageX;
        self.startY = event.pageY;

        var pos = self.getPosition();

        self.sourceX = pos.x;
        self.sourceY = pos.y;

        document.addEventListener('mousemove', move, false);
        document.addEventListener('mouseup', end, false);
      }

      function move(event) {
        var currentX = event.pageX;
        var currentY = event.pageY;

        var distanceX = currentX - self.startX;
        var distanceY = currentY - self.startY;

        self.setPostion({
          x: (self.sourceX + distanceX).toFixed(),
          y: (self.sourceY + distanceY).toFixed()
        })
      }

      function end(event) {
        document.removeEventListener('mousemove', move);
        document.removeEventListener('mouseup', end);
        // do other things
      }
    }
  }

  // 私有方法，仅仅用来获取transform的兼容写法
  function getTransform() {
    var transform = '',
      divStyle = document.createElement('div').style,
      transformArr = ['transform', 'webkitTransform', 'MozTransform', 'msTransform', 'OTransform'],

      i = 0,
      len = transformArr.length;

    for (; i < len; i++) {
      if (transformArr[i] in divStyle) {
        return transform = transformArr[i];
      }
    }

    return transform;
  }

  // 一种对外暴露的方式
  window.Drag = Drag;
})();

new Drag('target')


