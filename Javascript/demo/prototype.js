function CreateObj(name) {
    this.name = name
}

CreateObj.prototype.age = 18
CreateObj.prototype.show = function () {
    return this.name
}

const o2 = new CreateObj('nick')

console.log(o2.__proto__)

o2.__proto__ = {
    age: 22
}

const o1 = new CreateObj('n1cholas')

console.log(o1)
console.log(o2)

console.log(o1.__proto__.show())
console.log(o1.show())
