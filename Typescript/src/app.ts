import DefineProperty from './DefineProperty'
import getMessage from './FunctionOverloading'

console.log(new DefineProperty(111, new Date()))
console.log(getMessage(1))
console.log(getMessage('text'))

// 重载
// 类型断言
// 类型守卫
// 自定义守卫
// 继承 多态 抽象类 接口
// any 可以是所有类型的子类或者父类
// unknown 只能是所有类型的父类
