import { Controller } from 'egg';

export default class NewsController extends Controller {
  public async index() {
    const { ctx } = this;

    const newsList: object[] = await ctx.service.news.getNewsList();
    await ctx.render('news', { list: newsList });
  }
  public async content() {
    const { ctx } = this;

    const newscontent: object = await ctx.service.news.getNewsContent(ctx.query.aid);
    await ctx.render('newscontent', { content: newscontent });
    // ctx.body = newscontent
  }
}
