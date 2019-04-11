// 可索引接口：数组、对象的约束
// interface UserArr {
//   [index: number]: string
// }
// var arr: UserArr = ['124125', '125135']
// console.log(arr)

// 类类型接口：对类的约束，与抽象类有些类似
// interface Animal {
//   name: string
//   eat (str: string): void
// }
// class Dog implements Animal {
//   name: string
//   constructor (name: string) {
//     this.name = name
//   }
//   eat (food: string): void {
//     console.log(this.name + ' 吃 ' + food)
//   }
// }
// var d = new Dog('小黑')
// d.eat('超级大狗粮')