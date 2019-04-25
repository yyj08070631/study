import { Service } from 'egg';

export default class NewsService extends Service {
  public async getNewsList(): Promise<object[]> {
    const { ctx, config } = this;
    // 返回Buffer类型，要转为JSON对象
    const { data } = await ctx.curl(`${config.api}appapi.php?a=getPortalList&catid=20&page=1`);
    const dataJson = JSON.parse(data);
    return dataJson.result;
  }
  public async getNewsContent(aid: string): Promise<object[]> {
    const { ctx, config } = this;
    // 返回Buffer类型，要转为JSON对象
    const { data } = await ctx.curl(`${config.api}appapi.php?a=getPortalArticle&aid=${aid}`);
    const dataJson = JSON.parse(data);
    return dataJson.result[0];
  }
}
