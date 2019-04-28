import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index(): Promise<any> {
    const { ctx } = this;
    await ctx.render('home', {
      csrf: ctx.csrf
    })
  }
  public add(): void {
    const { ctx } = this;
    console.log(ctx.request.body);
  }
}
