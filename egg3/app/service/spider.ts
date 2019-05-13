import { Service } from 'egg';

export default class SpiderService extends Service {
  public async requestUrl(url: string): Promise<any> {
    let { ctx } = this
    let result = await ctx.curl(url)
    return result
  }
}
