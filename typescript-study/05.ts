// 1. es5的类
// function Person (name, age) {
//   this.name = name
//   this.age = age
// }
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

// 原型链继承在实例化子类的时候没法给父类传参

// 4. 原型链+构造函数组合继承
// function Person (name, age) {
//   this.name = name
//   this.age = age
//   this.run = function () {
//     alert(this.name + '在运动')
//   }
// }
// Person.prototype.sex = '男'
// Person.prototype.work = function () {
//   alert(this.name + '在工作')
// }
// function Web (name, age) {
//   Person.call(this, name, age)
// }
// Web.prototype = new Person()
// // 也可以像这样
// // Web.prototype = Person.prototype
// var w = new Web('赵四', 20)
// w.run()
// w.work()