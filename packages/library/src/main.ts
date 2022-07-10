import { createApp } from 'vue';
import App from './App.vue';
import { registerComponents } from './utils/register';
import { asyncModule, module } from './components/module';

const app = createApp(App);

// 注册同步组件;
registerComponents(app, module);
// 注册异步组件;
registerComponents(app, asyncModule, true);

app.mount('#app');
