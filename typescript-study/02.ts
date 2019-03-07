// boolean
// var flag: boolean = false
// flag = true
// console.log(flag)

// num
// var num: number = 123
// num = 345
// console.log(num)

// string

// array
// 1 es5方式
// var arr = [1, 2]
// 2 ts方式
// var arr: number[] = [1, 2, 3]
// console.log(arr)
// 3 ts方式2
// var arr: Array<number> = [1, 2, 32]
// console.log(arr)

// 元祖类型（tuple）：属于数组的一种，意味着对数组每一个位置指定一个类型
// let arr: [number, string] = [123, 'adsgsdg']
// console.log(arr)

// 枚举类型（enums）：将自然状态与数值进行对应
// 1 基本用法
// enum Flag {
//   success = 1,
//   error = 2
// }
// let s: Flag = Flag.success
// console.log(s)
// 2 如果没有赋值，则默认返回所取值的下标
// enum Color { red, blue, orange }
// let f: Color = Color.red
// console.log(f)

// 任意类型（any）：一般在无法预测变量具体数据结构时使用

// null和undefined：其他（never）类型的子类型
// var num: undefined | number
// num = 123
// console.log(num)

// void：表示没有任何类型，一般用于函数没有返回值
// function run (): number {
//   console.log('run')
//   return 1
// }
// run()

// never类型：其他类型，表示从来不会出现的值，一般可以用any类型代替
// let a: never
// a = (() => {
//   throw new Error('sdfgdf')
// })()