import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

import('library/module').then((res) => {
  res.default(app).mount('#app');
});
