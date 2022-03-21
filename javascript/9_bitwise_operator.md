## Bitwise Operator

### Reference

- 📜 You should know [33-js-concepts](https://github.com/leonardomso/33-js-concepts#table-of-contents)

### Watching List

- [x] 🎥 [JavaScript Bitwise Operators — Programming with Mosh](https://www.youtube.com/watch?v=mesu75PTDC8)

## Reading List

### Notes

```js
1 === 00000001
2 === 00000010

1 | 2 === 00000011
1 & 2 === 00000000
```

```js
// read   00000100
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

