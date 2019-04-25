import { Application } from 'egg';

export default {
  foo(this: Application): void {
    return this.config.api;
  },
};
