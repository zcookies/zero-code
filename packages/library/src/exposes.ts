import type { App } from 'vue';

import { asyncModule, module } from './components/module';
import { registerComponents } from './utils/register';

export default function (_app: App) {
  //注册同步组件
  registerComponents(_app, module);
  // //注册异步组件
  registerComponents(_app, asyncModule, true);

  return _app;
}
