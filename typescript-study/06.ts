// 1、ts中类的定义
// es5
// function Person (name) {
//   this.name = name
//   this.run = function () {
//     console.log(this.name)
//   }
// }
// var p = new Person('张三')
// p.run()
// ts
// class Person {
//   constructor (name: string) {
//     this.name = name
//   }
//   name: string
//   getName (): string {
//     return this.name
//   }
//   setName (name: string): void {
//     this.name = name
//   }
// }
// let p = new Person('按时到岗')
// p.setName('闪电发货')
// alert(p.getName())

// 2、在ts中实现继承（extends、super）
// class Person {
//   constructor (name: string) {
//     this.name = name
//   }
//   name: string
//   run (): void {
//     alert(this.name + ' 在跑步')
//   }
// }
// // let p = new Person('王五')
// // p.run()
// class Web extends Person {
//   constructor (name: string) {
//     super(name) // 初始化父类的构造函数
//   }
// }
// let w = new Web('李四')
// w.run()
// 父类方法与子类方法一致时
// class Person {
//   constructor (name: string) {
//     this.name = name
//   }
//   name: string
//   run (): void {
//     alert(this.name + ' 在跑步')
//   }
// }
// class Web extends Person {
//   constructor (name: string) {
//     super(name) // 初始化父类的构造函数
//   }
//   run (): void {
//     alert(this.name + ' 在起飞在起飞在起飞在起飞')
//   }
// }
// let w = new Web('李四')
// w.run()

// 3、类里面的修饰符（public：任何地方都可以、private：类内部可以访问，子类及类外部无法、protected：类内部及子类可以访问，类外部不可以）
// class Person {
//   constructor (name: string) {
//     this.name = name
//   }
//   protected name: string
//   public run (): void {
//     alert(this.name + ' 在跑步')
//   }
// }
// class Web extends Person {
//   constructor (name: string) {
//     super(name) // 初始化父类的构造函数
//   }
//   public run (): void {
//     alert(this.name + ' 在起飞在起飞在起飞在起飞')
//   }
// }
// let w = new Web('李四')
// w.run()