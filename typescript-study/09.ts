// 模拟jq的ajax函数
// interface Config {
//   type: string
//   url: string
//   data?: string
//   dataType: string
// }
// function ajax (config: Config) {
//   var xhr = new XMLHttpRequest()
//   xhr.open(config.type, config.url, true)
//   xhr.send(config.data)
//   xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       console.log('请求成功')
//       if (config.dataType === 'json') {
//         console.log(JSON.parse(xhr.responseText))
//       } else {
//         console.log(xhr.responseText)
//       }
//     }
//   }
// }
// ajax({
//   type: 'get',
//   url: 'http://a.itying.com/api/productlist',
//   data: 'name=张三',
//   dataType: 'json'
// })