import { format } from 'silly-datetime'

export default {
  formatTime(param: number): object {
    return format(new Date(param * 1000), 'YYYY-MM-DD HH:mm');
  },
  getHelperData(): string {
    return 'getHelperData'
  }
}