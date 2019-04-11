// 泛型接口
// 1
// interface ConfigFn {
//   <T>(v1: T, v2: T): T
// }
// var set: ConfigFn = <T>(v1: T, v2: T): T => {
//   return v1
// }
// console.log(set<string>('我是', '聪明b'))

// 2
interface ConfigFn<T> {
  (v1: T, v2: T): T
}
var set: ConfigFn<string> = <T>(v1: T, v2: T): T => {
  return v1
}
console.log(set('我是', '聪明b'))
