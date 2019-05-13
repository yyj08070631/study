import { Context } from 'egg';

export default function forbidip(): any {
  return async (ctx: Context, next: () => Promise<any>) => {
    ctx.state.csrf = ctx.csrf
    await next();
  };
}