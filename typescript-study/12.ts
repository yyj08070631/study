// 接口的扩展
// interface Animal {
//   name: string
//   eat (): void
// }
// interface Person extends Animal {
//   work (): void
// }
// class Programmer {
//   public name: string
//   constructor (name: string) {
//     this.name = name
//   }
//   coding (lang: string): void {
//     console.log(`${this.name} 写 ${lang} 代码`)
//   }
// }
// class Web extends Programmer implements Person {
//   constructor (name: string) {
//     super(name)
//   }
//   eat (): void {
//     console.log(this.name + ' 吃东西')
//   }
//   work (): void {
//     console.log(this.name + ' 在工作')
//   }
// }
// var w = new Web('里弗斯')
// w.eat()
// w.work()
// w.coding('ts')