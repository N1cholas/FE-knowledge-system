## Bitwise Operator

### Reference

- π You should know [33-js-concepts](https://github.com/leonardomso/33-js-concepts#table-of-contents)

### Watching List

- [x] π₯ [JavaScript Bitwise Operators β Programming with Mosh](https://www.youtube.com/watch?v=mesu75PTDC8)

## Reading List

- [x] π [Programming with JS: Bitwise Operations β Alexander Kondov](https://hackernoon.com/programming-with-js-bitwise-operations-393eb0745dc4)
- [x] π [Using JavaScriptβs Bitwise Operators in Real Life β ian m](https://codeburst.io/using-javascript-bitwise-operators-in-real-life-f551a731ff5) ππ»
- [x] π [Bitwise Operators in Javascript β Joe Cha](https://medium.com/bother7-blog/bitwise-operators-in-javascript-65c4c69be0d3)
- [ ] π [A Comprehensive Primer on Binary Computation and Bitwise Operators in Javascript β Paul Brown](https://medium.com/techtrument/a-comprehensive-primer-on-binary-computation-and-bitwise-operators-in-javascript-81acf8341f04)
- [ ] π [How can I understand Bitwise operation in JavaScript?](https://www.quora.com/How-can-I-understand-Bitwise-operation-in-JavaScript)

### Notes

```js
1 === 00000001
2 === 00000010

1 | 2 === 00000011 // ζ
1 & 2 === 00000000 // δΈ
~1 === -2 // -(1 + 1) // ι
~-2 === 1 // -(-2 + 1)
2 ^ 3 === 00000001 // εΌζ
9 << 3 // ε·¦η§»3δ½
00001001 => 01001000 => 72
9 >> 2 // ε³η§»2δ½
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

