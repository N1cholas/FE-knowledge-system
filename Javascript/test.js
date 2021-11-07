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

const add = (...args) => {

  const _args = []

  const _adder = (...nextArgs) => {
    _args.push(...nextArgs)
    return _adder
  }

  _adder.valueOf = () => _args.reduce((p, c) => p + c)

  return _adder(...args)
}
