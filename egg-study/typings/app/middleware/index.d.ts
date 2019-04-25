// This file is created by egg-ts-helper@1.25.2
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportForbidip from '../../../app/middleware/forbidip';
import ExportPrintdate from '../../../app/middleware/printdate';

declare module 'egg' {
  interface IMiddleware {
    forbidip: typeof ExportForbidip;
    printdate: typeof ExportPrintdate;
  }
}
