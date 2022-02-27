## Primitive Types

### Reference

- You should know [33-js-concepts](https://github.com/leonardomso/33-js-concepts#table-of-contents)
- [double-precision 64-bit binary format IEEE 754](https://en.wikipedia.org/wiki/Floating-point_arithmetic)

### Watch List

- [x] 🎥 [JavaScript Reference vs Primitive Types — Academind](https://www.youtube.com/watch?v=9ooYYRLdg_g) 👏🏻
- [x] 🎥 [JavaScript Primitive Types — Simon Sez IT](https://www.youtube.com/watch?v=HsbWQsSCE5Y)
- [x] 🎥 [Value Types and Reference Types in JavaScript — Programming with Mosh](https://www.youtube.com/watch?v=e-_mDyqm2oU) 👏🏻
- [x] 🎥 [JavaScript Primitive Data Types — Avelx](https://www.youtube.com/watch?v=qw3j0A3DIzQ)
- [x] 🎥 [Everything you never wanted to know about JavaScript numbers — Bartek Szopka](https://www.youtube.com/watch?v=MqHDDtVYJRI) 👏🏻



`Javascript`是一门类型松散的弱类型编程语言

原始类型

- 存储于`stack`内存中
- 按值传递，所以按值比较
- 该值不可变

```js
var name = 'Max'

var secondName = name

console.log(name) // 'Max'
console.log(secondName) // 'Max'

name = 'Chrip'
console.log(secondName) // 'Max'

var thirdName = 'Max'

name === thirdName // true
```

引用类型

- 存储于`heap`内存中
- 按内存地址传递，所以比较按内存地址
- 该值可变

```js
var person = {
  name: 'max',
  hobbies: ['sports', 'coding']
}

var secondPerson = person

var thirdPerson = Object.assign({}, person)

console.log(person) // { name: 'max'; bobbies: ['sports', 'coding']; }
console.log(secondPerson) // { name: 'max'; bobbies: ['sports', 'coding']; }

person.name = 'Chrip'
console.log(secondPerson) // { name: 'Chrip'; bobbies: ['sports', 'coding']; }

console.log(thirdPerson) // { name: 'Max'; bobbies: ['sports', 'coding']; }

person.hobbies.push('Reading')
console.log(thirdPerson) // { name: 'Max'; bobbies: ['sports', 'coding', 'Reading']; }

var fourthPerson = { name: 'max', hobbies: ['sports', 'coding'] }
person === fourthPerson // false
```

`Object.assign`只复制`property`，而不管`property`是原始类型还是引用类型

变量的值都存入`stack`，包括原始类型变量的值和引用类型变量的指针

神奇的`Number`

64位浮点数

- 1位代表正负数
- 11位代表指数, e * n - 1032, 代表整数的位数
- 52位代表浮点数的值，第一位永远是1，剩余51位包含整数和小数部分
  - 当`exponent`越大意味着能代表的`fraction`范围越小
  - 超出的位数是浮点数不能控制的，默认是0

`integer`和`fracation`的计算的底是2，`integer`的指数为正，`fraction`的指数为负

`Infinity`二进制表示为

- 第一位是1
- 指数的11位均为1
- 剩余的52位`significand`均为0

`-Infinity`和`Infinity`类似但第一位是0

而`zero`的表示看似永远不能被二进制表示，因为`significand`永远有一位二进制为1，但是当`exponent`值为`-1032`时（全为0），`significand`的所有位就变成了0，配合第一位的正负数，代表了`+0`或者`-0`

而`NaN`和`Infinity`一样，但当`significand`不全是0时，就会变成`NaN`，所以`NaN`代表不是数字但又是数字

```js
0.1 + 0.2 === 0.3 // false
console.log(0.1 + 0.2) // 0.300000000004

1 + "" // NaN
typeof NaN // number

9007199254740992 + 1 // 9007199254740992
9007199254570992 + 2 // 9007199254740994
```











