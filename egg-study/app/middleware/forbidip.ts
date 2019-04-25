import { Context, EggAppConfig } from 'egg';

export default function forbidip(options: EggAppConfig['printdate']): any {
  return async (ctx: Context, next: () => Promise<any>) => {
    let clientip = ctx.request.ip;
    if (options.forbidips.some(val => val === clientip)) {
      ctx.status = 403
      ctx.body = '您的ip已经被屏蔽'
    } else {
      await next();
    }
  };
}