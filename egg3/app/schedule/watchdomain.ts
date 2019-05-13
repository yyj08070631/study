import { load } from 'cheerio'

export default {
  schedule: {
    interval: '5s', // 2秒间隔
    type: 'all', // 指定所有的 worker 都需要执行
  },
  async task (ctx): Promise<any> {
    let url = 'https://news.baidu.com'
    let result = await ctx.service.spider.requestUrl(url)
    let html = result.data.toString()
    let $ = load(html, { decodeEntities: false })
    console.log($('title').html())
  },
};