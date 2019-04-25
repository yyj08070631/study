import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1556023127971_712';

  // add your egg config in here
  config.middleware = ['printdate', 'forbidip'];
  // 给中间件传值
  config.printdate = {
    aaa: 'aaa'
  }
  config.forbidip = {
    forbidips: ['127.0.0.1', '192.168.56.1']
  }

  // 配置ejs模板引擎
  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  };

  // 配置公共api地址
  config.api = 'http://www.phonegap100.com/';

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
