// This file is created by egg-ts-helper@1.25.2
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportSpider from '../../../app/service/spider';
import ExportTest from '../../../app/service/Test';

declare module 'egg' {
  interface IService {
    spider: ExportSpider;
    test: ExportTest;
  }
}
