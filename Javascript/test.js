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


setTimeout(function s1() {
  console.log(5);
}, 1)

setTimeout(function s2() {
  console.log(6);
}, 0)

new Promise(function (resolve) {
  console.log(1);
  for (var i = 0; i < 1000; i++) {
    i == 99 && resolve();
  }
  console.log(2);
}).then(function p1() {
  console.log(4);
})

console.log(3);
