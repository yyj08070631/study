import { Request } from 'egg';

export default {
  foo(this: Request): string {
    return this.header.host
  }
}