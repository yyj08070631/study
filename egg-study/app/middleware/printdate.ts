import { Context, Application, EggAppConfig } from 'egg';

export default function printdate(options: EggAppConfig['printdate'], app: Application): any {
  return async (ctx: Context, next: () => Promise<any>) => {
    console.log(new Date(), ctx.a, options.aaa, app.url)
    await next();
  };
}