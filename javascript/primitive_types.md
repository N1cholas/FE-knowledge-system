## Primitive Types

### Watch List

- [x] 🎥 [JavaScript Reference vs Primitive Types — Academind](https://www.youtube.com/watch?v=9ooYYRLdg_g) 👏🏻
- [x] 🎥 [JavaScript Primitive Types — Simon Sez IT](https://www.youtube.com/watch?v=HsbWQsSCE5Y)
- [x] 🎥 [Value Types and Reference Types in JavaScript — Programming with Mosh](https://www.youtube.com/watch?v=e-_mDyqm2oU)



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













