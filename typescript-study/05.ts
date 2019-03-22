// 1. es5的类
function Person (name, age) {
  this.name = name
  this.age = age
}
// var zs = new Person('张三'， 20)
// console.log('我叫：' + zs.name + '，今年：' + zs.age + '岁')

// 2. 类的静态方法
// Person.getInfo = function () {
//   console.log('我是静态方法')
// }
// Person.getInfo()

// 3. 继承：原型链、对象冒充
// 对象冒充
// function Web (name, age) {
//   Person.call(this, name, age) // 对象冒充实现继承
//   // 对象冒充只能继承构造函数里的属性和方法
//   // 无法继承原型链中的属性和方法
// }
// var zs = new Web('张三'， 20)
// console.log('我叫：' + zs.name + '，今年：' + zs.age + '岁')
// 原型链
// 既可以继承构造函数里的属性和方法，也可以继承原型链中的属性和方法
// function Web () {}
// Web.prototype = new Person('张三', 20)
// var zs = new Web()
// console.log('我叫：' + zs.name + '，今年：' + zs.age + '岁')
