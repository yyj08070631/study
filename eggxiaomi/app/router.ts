import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  // 牛鼻
  router.get('/', controller.home.index);
};
