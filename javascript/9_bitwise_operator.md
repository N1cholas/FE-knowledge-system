## Bitwise Operator

### Reference

- 📜 You should know [33-js-concepts](https://github.com/leonardomso/33-js-concepts#table-of-contents)

### Watching List

- [x] 🎥 [JavaScript Bitwise Operators — Programming with Mosh](https://www.youtube.com/watch?v=mesu75PTDC8)

## Reading List

- [x] 📜 [Programming with JS: Bitwise Operations — Alexander Kondov](https://hackernoon.com/programming-with-js-bitwise-operations-393eb0745dc4)
- [x] 📜 [Using JavaScript’s Bitwise Operators in Real Life — ian m](https://codeburst.io/using-javascript-bitwise-operators-in-real-life-f551a731ff5) 👏🏻
- [ ] 📜 [JavaScript Bitwise Operators — w3resource](https://www.w3resource.com/javascript/operators/bitwise-operator.php)
- [ ] 📜 [Bitwise Operators in Javascript — Joe Cha](https://medium.com/bother7-blog/bitwise-operators-in-javascript-65c4c69be0d3)
- [ ] 📜 [A Comprehensive Primer on Binary Computation and Bitwise Operators in Javascript — Paul Brown](https://medium.com/techtrument/a-comprehensive-primer-on-binary-computation-and-bitwise-operators-in-javascript-81acf8341f04)
- [ ] 📜 [How can I understand Bitwise operation in JavaScript?](https://www.quora.com/How-can-I-understand-Bitwise-operation-in-JavaScript)

### Notes

```js
1 === 00000001
2 === 00000010

1 | 2 === 00000011 // 或
1 & 2 === 00000000 // 与
~1 === -2 // -(1 + 1) // 非
~-2 === 1 // -(-2 + 1)
2 ^ 3 === 00000001 // 异或
9 << 3 // 左移3位
00001001 => 01001000 => 72
9 >> 2 // 右移2位
00001001 => 00000010 => 2
```

```js
// read   00000100 === Number(6).toString(2).padStart(8, 0)
// write  00000010
// excute 00000001

const readPermission = 4
const writePermission = 2
const excutePermission = 1

let myPermission = 0

myPermission = myPermission | readPermission | writePermission

const hasReadPermission = (myPermission & readPermission) ? true : false // true
const hasExcutePermission = (myPermission & excutePermission) ? true : false // false
```

