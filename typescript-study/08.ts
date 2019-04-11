// 接口：在面向对象编程中，接口是一种规范的定义，它定义了行为和动作的规范，在程序设计里面，接口起到一种限制和规范的作用。接口定义了所需要遵守的规范，接口不关心这些类的内部状态数据，也不关心这些类里方法的实现细节，它只规定这批类里必须提供某些方法，提供这些方法的类就可以满足实际需要。typescript中的接口类似与java，同时还增加了更灵活的接口类型，包括属性、函数、可索引和类等。
// 行为和动作的规范，对批量方法进行约束
// 1、属性类接口
// 固定属性
// interface FullName {
//   firstName: string
//   secondName: string
// }
// function printName (name: FullName) {
//   console.log(name.firstName + '-' + name.secondName)
// }
// // 传入参数必须包含接口定义的两个参数
// printName({ firstName: '第三方', secondName: '讽德诵功' })
// 可选属性
// interface FullName {
//   firstName?: string
//   secondName: string
// }
// function printName (name: FullName) {
//   console.log(name.firstName || 'none' + '-' + name.secondName)
// }
// printName({ secondName: '讽德诵功' })