// 泛型是程序设计语言的一种特性。允许程序员在强类型程序设计语言中编写代码时定义一些可变部分，那些部分在使用前必须作出指明。
// 可以支持不特定的数据类型
// 1、泛型方法
// function getData<T> (val: T): T {
//   return val
// }
// console.log(getData<number>(123))
// console.log(getData<string>('123'))
// console.log(getData<number[]>([14, 134325, 34]))

// 2、泛型类
// class MinClass<T> {
//   public list: T[] = []
//   constructor () {}
//   add (val: T): void {
//     this.list.push(val)
//   }
//   min (): T {
//     var minNumber = this.list[0]
//     for (var i = 0; i < this.list.length; i++) {
//       if (minNumber > this.list[i]) {
//         minNumber = this.list[i]
//       }
//     }
//     return minNumber
//   }
// }
// var m = new MinClass<number>()
// m.add(2)
// m.add(6)
// m.add(1)
// console.log(m.min())
// var m1 = new MinClass<string>()
// m1.add('a')
// m1.add('sdfh')
// m1.add('sdffgjk')
// console.log(m1.min())