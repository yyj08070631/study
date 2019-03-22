"use strict";
/**
 * 定义函数
 */
// 1. es5
// function run () { return 'aaa' }
// var a = function () { return 'aaa' }
// 2. ts
// function run (): string { return 'aaa' }
// var a = function (): string { return 'aaa' }
// function getInfo (name: string, age: number): string { return `${name}--${age}` }
// console.log(getInfo('asdgds', 213))
// 没有返回值
// function run (): void { console.log(123) }
// run()
// 3. 可选参数（必选参数不能位于可选参数后）
// function getInfo (name: string, age?: number): string {
//   if (age) {
//     return `${name}--${age}`
//   } else {
//     return `${name}--年龄保密`
//   }
// }
// console.log(getInfo('asdgds'))
// 4. 默认参数
// function getInfo (name: string = '证书', age: number = 20): string {
//   return `${name}--${age}`
// }
// console.log(getInfo('更换防抖', NaN))
// 5. 剩余参数
// function sum (init: number, ...result: number[]): number {
//   return result.reduce((newVal, oldVal) => newVal + oldVal, init)
// }
// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8))
// 6. 函数重载
// function getInfo (name: string): string
// function getInfo (name: string, age: number): number
// function getInfo (name: string, age?: any): any {
//   if (age) {
//     return `我叫：${name}，今年：${age}岁`
//   } else {
//     return `我叫：${name}，年龄保密`
//   }
// }
// console.log(getInfo('nm$l', 666))
// console.log(getInfo('nm$l'))
// 7. 箭头函数
