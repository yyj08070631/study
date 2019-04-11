// 1、静态属性，静态方法
// class Person {
//   constructor (name: string) {
//     this.name = name
//   }
//   public name: string
//   static age: number = 132
//   public run () { // 实例方法
//     alert(`${this.name} 在跑步`)
//   }
//   public work () {
//     alert(`${this.name} 在工作`)
//   }
//   static boom () {
//     alert(`爆炸 ${Person.age}`)
//   }
// }
// let p = new Person('撒旦')
// p.run()
// Person.boom()

// 2、多态：父类定义一个方法但不去实现，让子类去实现，每一个子类有不同的表现
// 多态属于继承
// class Animal {
//   name: string
//   constructor (name: string) {
//     this.name = name
//   }
//   eat () {
//     console.log('吃吃吃')
//   }
// }
// class Dog extends Animal {
//   constructor (name: string) {
//     super(name)
//   }
//   eat () {
//     return `${this.name} 吃狗粮`
//   }
// }
// class Cat extends Animal {
//   constructor (name: string) {
//     super(name)
//   }
//   eat () {
//     return `${this.name} 吃老鼠`
//   }
// }

// 3、抽象方法、抽象类：提供其他类继承的基类，不能直接实例化
// 使用abstract定义，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
// 抽象方法只能放在抽象类里面
// 抽象类和抽象方法用来定义标准，此处标准的实现：Animal这个类要求它的子类必须包含eat方法
// abstract class Animal {
//   name: string
//   constructor (name: string) {
//     this.name = name
//   }
//   abstract eat (): any
// }
// // let a = new Animal() // 错误写法
// class Dog extends Animal {
//   constructor (name: string) {
//     super(name)
//   }
//   eat (): void {
//     alert(`${this.name} 吃狗粮`)
//   }
// }
// class Cat extends Animal {
//   constructor (name: string) {
//     super(name)
//   }
//   eat (): void {
//     alert(`${this.name} 吃老鼠`)
//   }
// }
// let d = new Dog('金毛')
// let c = new Cat('英短')
// d.eat()
// c.eat()