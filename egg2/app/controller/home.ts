import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index(): Promise<any> {
    const { ctx } = this;
    await ctx.render('home')
  }
  public add(): void {
    const { ctx } = this;
    console.error(ctx.request.body)
    ctx.body = JSON.stringify(ctx.request.body)
  }
}
