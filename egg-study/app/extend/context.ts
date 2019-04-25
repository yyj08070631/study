import { Context } from 'egg'

export default {
  getIp(this: Context): string {
    return this.request.ip;
  }
}