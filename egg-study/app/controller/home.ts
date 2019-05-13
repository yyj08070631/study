import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;

    // console.log(app.foo());
    // console.log(ctx.getIp());
    // console.log(ctx.helper.getHelperData());
    // console.log(ctx.request.foo());
    ctx.cookies.set('username', 'zhangsan')

    await ctx.render('index');
  }
}
